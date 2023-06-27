export default function ModuleCard({ module }) {
  return (
    <p className="module">
      {module.name + (module.count > 1 ? ` x ${module.count}` : '')}
    </p>
  );
};