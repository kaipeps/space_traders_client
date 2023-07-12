import { useState, useContext } from "react"
import { ShipContext } from "../Pages/Ship"

function Counter({ count, setCount }) {
  const handleIncrement = () => setCount(count + 1)
  const handleDecrement = () => count > 0 ? setCount(count - 1) : ''

  return (
    <span className="Counter">
      Count: <button className="subtract" onClick={handleDecrement}>-</button> {count} <button className="add" onClick={handleIncrement}>+</button>
    </span>
  )
};

export default function MarketGoodCard({ tradeGood }) {
  const [count, setCount] = useState(1)
  const { ship, setShip } = useContext(ShipContext)

  async function handleTransaction(txnType, ship, setShip, symbol, units) {
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: sessionStorage.Authorization
      },
      body: JSON.stringify({ symbol, units })
    };
    console.log(`https://api.spacetraders.io/v2/my/ships/${ship.symbol}/${txnType}`)
    const res = await fetch(`https://api.spacetraders.io/v2/my/ships/${ship.symbol}/${txnType}`, options);
    const response = await res.json();
    console.log(response)
    if (response.error) {
      console.log(`Error ${response.error.code}: ${response.error.message}`);
    } else {
      const { cargo } = response.data;
      const { cargo: oldCargo, ...everythingElse } = ship;
      setShip({ cargo, ...everythingElse });
    }
  };

  return (
    <section className="MarketGoodCard">
      <p>
        <span className="txt-accent">{tradeGood.name}</span>
        <br />
        Supply: {tradeGood.supply} <br />
        <Counter count={count} setCount={setCount} /> <br />
        <span className="action" onClick={() => handleTransaction('purchase', ship, setShip, tradeGood.symbol, count)}>Buy</span> for: ᖬ{tradeGood.purchasePrice * count} <br />
        <span className="action" onClick={() => handleTransaction('sell', ship, setShip, tradeGood.symbol, count)}>Sell</span> For: ᖬ{tradeGood.sellPrice * count}</p>
    </section>
  )
}