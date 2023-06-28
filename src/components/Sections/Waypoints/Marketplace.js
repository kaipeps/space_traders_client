import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loading from "../../Loading";

const collateGoods = ({ imports, exports, tradeGoods }) => {
  const importSymbols = imports.map(tradeImport => tradeImport.symbol);
  const exportSymbols = exports.map(tradeExport => tradeExport.symbol);
  tradeGoods.forEach(tradeGood => {
    if (importSymbols.includes(tradeGood.symbol)) {
      const importIdx = importSymbols.indexOf(tradeGood.symbol)
      imports[importIdx].tradeVolume = tradeGood.tradeVolume
      imports[importIdx].supply = tradeGood.supply
      imports[importIdx].purchasePrice = tradeGood.purchasePrice
      imports[importIdx].sellPrice = tradeGood.sellPrice
    } else if (exportSymbols.includes(tradeGood.symbol)) {
      const exportIdx = exportSymbols.indexOf(tradeGood.symbol)
      exports[exportIdx].tradeVolume = tradeGood.tradeVolume
      exports[exportIdx].supply = tradeGood.supply
      exports[exportIdx].purchasePrice = tradeGood.purchasePrice
      exports[exportIdx].sellPrice = tradeGood.sellPrice
    }
  });
  return { imports, exports }
};

const returnTradeGoodJSX = (tradeGood, idx) => (
  <section key={idx} className="export">
    <p><span className="txt-accent">{tradeGood.name}</span> <br />
      Supply: {tradeGood.supply} <br />
      <span className="action">Buy</span> for: ᖬ{tradeGood.purchasePrice} <br />
      <span className="action">Sell</span> For: ᖬ{tradeGood.sellPrice}</p>
  </section>
);

export default function Marketplace() {
  const [imports, setImports] = useState([])
  const [exports, setExports] = useState([])
  const [loadStatus, setLoadStatus] = useState('waiting');
  const { state } = useLocation();
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: sessionStorage.Authorization
      }
    };

    fetch(`${process.env.REACT_APP_URL_BASE}/systems/${state.systemSymbol}/waypoints/${state.waypointSymbol}/market`, options)
      .then(res => res.json())
      .then(marketplaceData => {
        const { imports, exports } = collateGoods(marketplaceData.data)
        setImports(imports)
        setExports(exports)
        setLoadStatus('ready');
      });
  }, [])
  if (loadStatus === 'waiting') {
    return <Loading />
  } else if (loadStatus === 'ready') {
    return (
      <div className="Marketplace">
        <h2>Waypoint <span className="txt-accent">{state.waypointSymbol}</span> Market Details</h2>
        <section className="market-details">
          <section className="imports-exports">
            <section className="imports">
              <h3 className="txt-accent">Imports</h3>
              <section className="grid-list">
                {imports.map((tradeGood, idx) => returnTradeGoodJSX(tradeGood, idx))}
              </section>
            </section>
            <section className="exports">
              <h3 className="txt-accent">Exports</h3>
              <section className="grid-list">
                {exports.map((tradeGood, idx) => returnTradeGoodJSX(tradeGood, idx))}
              </section>
            </section>
          </section>
        </section>
      </div>
    );
  }
};