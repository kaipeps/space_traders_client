const formatDate = isoString => {
  const date = new Date(isoString);
  const timeOptions = { hour: '2-digit', minute: 'numeric', hour12: false };
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return `${date.toLocaleString('en-us', timeOptions)} ${date.toLocaleString('en-us', dateOptions)}`;
};

export default function Contract({ contract }) {
  const {
    type,
    factionSymbol,
    terms,
    accepted,
    deadlineToAccept
  } = contract
  return (
    <div className="Contract">
      <header>
        <h1>Current Contract:</h1>
        <h2><span className="txt-accent">{type}</span> from: {factionSymbol}</h2>
      </header>
      <section className="terms">
        <h2>
          <span className="txt-accent">Paid Upfront:</span> <span style={{ color: '#59e47e' }}>ᖬ</span>{terms.payment.onAccepted}<br />
          <span className="txt-accent">Upon Fulfillment:</span> <span style={{ color: '#59e47e' }}>ᖬ</span>{terms.payment.onFulfilled}<br />
          <span className="txt-accent">
            {accepted ? 'Deadline:' : 'Expiration: '}
          </span>
          {formatDate(accepted ? terms.deadline : deadlineToAccept)}
        </h2>
      </section>
      <section className="deliverables">
        <h2 className="txt-accent">Deliverables:</h2>
        {terms.deliver.map((item, idx) => (
          <section key={idx} className="deliverable">
            <h3>{item.tradeSymbol}: {item.unitsRequired} Units</h3>
            <span>
              To: {item.destinationSymbol} <br />
              Delivered: {item.unitsFulfilled}/{item.unitsRequired}
            </span>
          </section>
        ))}
      </section>
    </div >
  );
};