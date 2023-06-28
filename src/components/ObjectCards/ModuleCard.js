import CustomTooltip from "../Tooltips/CustomTooltip";

export default function ModuleCard({ module }) {
  return (
    <CustomTooltip item={module}>
      <p className="module">
        {module.name + (module.count > 1 ? ` x ${module.count}` : '')}
      </p>
    </CustomTooltip>
  );
};