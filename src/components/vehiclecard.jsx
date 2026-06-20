function VehicleCard({ vehicle }) {
  return (
    <article>
      <h3>{vehicle?.name ?? 'Vehicle'}</h3>
      <p>{vehicle?.description ?? 'Vehicle details go here.'}</p>
    </article>
  );
}

export default VehicleCard;