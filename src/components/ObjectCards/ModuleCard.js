import HardwareTooltip from "../Tooltips/HardwareTooltip";

export default function ModuleCard({ module }) {
  return (
    <HardwareTooltip item={module}>
      <p className="module">
        {module.name + (module.count > 1 ? ` x ${module.count}` : '')}
      </p>
    </HardwareTooltip>
  );
};