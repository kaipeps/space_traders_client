import { useEffect, useState } from "react";
import Loading from "../../Loading";
import MarketGoodCard from "../../ObjectCards/MarketGoodCard";
import { useContext } from "react";
import { ShipContext } from "../../Pages/Ship";

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

export default function Marketplace() {
  const [imports, setImports] = useState([])
  const [exports, setExports] = useState([])
  const [loadStatus, setLoadStatus] = useState('waiting');
  const { ship, setSection } = useContext(ShipContext)
  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        Authorization: sessionStorage.Authorization
      }
    };

    fetch(`https://api.spacetraders.io/v2/systems/${ship.nav.systemSymbol}/waypoints/${ship.nav.waypointSymbol}/market`, options)
      .then(res => res.json())
      .then(response => {
        const { imports, exports } = collateGoods(response.data)
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
        <h2>
          Waypoint Marketplace Details: <br />
          <span className="action" onClick={() => setSection('waypoint')}>(Back)</span>
        </h2>
        <section className="market-details">
          <section className="imports-exports">
            <section className="imports">
              <h3 className="txt-accent">Imports</h3>
              <section className="grid-list">
                {imports.map((tradeGood, idx) => <MarketGoodCard key={idx} tradeGood={tradeGood} />)}
              </section>
            </section>
            <section className="exports">
              <h3 className="txt-accent">Exports</h3>
              <section className="grid-list">
                {exports.map((tradeGood, idx) => <MarketGoodCard key={idx} tradeGood={tradeGood} />)}
              </section>
            </section>
          </section>
        </section>
      </div>
    );
  }
};