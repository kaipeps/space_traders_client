const formatDate = isoString => {
  const date = new Date(isoString);
  const timeOptions = { hour: '2-digit', minute: 'numeric', hour12: false };
  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  return `${date.toLocaleString('en-us', timeOptions)} ${date.toLocaleString('en-us', dateOptions)}`
};

export default function ContractCard({ contract }) {
  return (
    <section className="contract">
      {contract.type} from: {contract.factionSymbol}, {contract.accepted ? 'Accepted' : 'Pending'}<br />
      Deadline: {formatDate(contract.terms.deadline)}
    </section>
  )
}
