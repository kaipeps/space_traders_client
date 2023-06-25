export default function ShipMenu() {
  return (
    <div className="ShipMenu">
      <div className="ship-left">
        <section className="status">
          <header>Status</header>
        </section>
        <section className="cargo">
          <header>Cargo</header>
        </section>
      </div>
      <section className="ship-centre">
        <header>

        </header>
        <section className="nav">

        </section>
      </section>
      <div className="ship-right">
        <section className="modules">
          <header>Modules</header>
        </section>
        <section className="mounts">
          <header>Mounts</header>
        </section>
      </div>
    </div>
  );
};
