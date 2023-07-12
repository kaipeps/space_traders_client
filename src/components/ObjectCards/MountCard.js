import HardwareTooltip from '../Tooltips/HardwareTooltip';

export default function MountCard({ mount }) {
  return (
    <HardwareTooltip item={mount}>
      <p className="mount">
        {mount.name}
      </p>
    </HardwareTooltip>
  );
};