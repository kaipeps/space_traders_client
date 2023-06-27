// Disclaimer: This Component is currently not required as an agent can currently only accept one contract at a time. I am leaving it here though in case the developers decide to change that.

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
      {contract.accepted ? 'Deadline: ' + formatDate(contract.terms.deadline) : 'Expiration: ' + formatDate(contract.deadlineToAccept)}
    </section>
  )
}
