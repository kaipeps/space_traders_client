const formatDate = isoString => {
  const date = new Date(isoString);
  const timeOptions = { hour: '2-digit', minute: 'numeric', hour12: false };
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return `${date.toLocaleString('en-us', timeOptions)} ${date.toLocaleString('en-us', dateOptions)}`
};

export default function Contract({ exampleData }) {
  const [contract] = exampleData.contracts
  return (
    <div className="Contract">
      <header>
        <h1>
          Current Contract: <br />
          {contract.type} from: {contract.factionSymbol}
        </h1>
      </header>
      <section className="terms">
        <h2>
          Paid Upfront: ᖬ{contract.terms.payment.onAccepted}<br />
          Upon Fulfillment: ᖬ{contract.terms.payment.onFulfilled}<br />
          Deadline: {formatDate(contract.terms.deadline)}
        </h2>
      </section>
      <section className="deliverables">
        <h2>Deliverables:</h2>
        {contract.terms.deliver.map((item, idx) => (
          <section key={idx} className="deliverable">
            <h3>{item.tradeSymbol}: {item.unitsRequired} Units</h3>
            <span>
              To: {item.destinationSymbol} <br />
              Delivered: {item.unitsFulfilled}/{item.unitsRequired}
            </span>
          </section>
        ))}
      </section>
    </div>
  )
}