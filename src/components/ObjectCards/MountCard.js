import CustomTooltip from '../Tooltips/CustomTooltip';

export default function MountCard({ mount }) {
  return (
    <CustomTooltip item={mount}>
      <p className="mount">
        {mount.name}
      </p>
    </CustomTooltip>
  );
};