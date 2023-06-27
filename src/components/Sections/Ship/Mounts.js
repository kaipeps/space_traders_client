import MountCard from "../../ObjectCards/MountCard";

export default function Mounts({ mounts }) {
  return (
    <section className="Mounts">
      <h3 className="txt-accent">Mounts</h3>
      {mounts.map((mount, idx) => (
        <MountCard key={idx} mount={mount} />
      ))}
    </section>
  );
};