export default function TooltipHeader({ textContent }) {
  return (
    <header>
      <p style={{ margin: '0.4em', fontSize: '1.6em' }} className="txt-accent">{textContent}</p>
    </header>
  );
};