import PropTypes from 'prop-types';

function VehicleCard({ vehicle }) {
  return (
    <article className="vehicle-card">
      <div className="vehicle-card__header">
        <div>
          <p className="vehicle-card__badge">{vehicle?.category ?? 'Destacado'}</p>
          <h3 className="vehicle-card__title">{vehicle?.name ?? 'Vehicle'}</h3>
        </div>

        <strong className="vehicle-card__price">{vehicle?.price ?? '$0'}</strong>
      </div>

      <p className="vehicle-card__description">{vehicle?.description ?? 'Vehicle details go here.'}</p>

      {typeof vehicle?.matchPercentage === 'number' && (
        <div className="vehicle-card__match">
          <span className="vehicle-card__match-label">Coincidencia</span>
          <strong className="vehicle-card__match-value">{vehicle.matchPercentage}%</strong>
          <div className="vehicle-card__match-bar" aria-hidden="true">
            <span className="vehicle-card__match-fill" style={{ width: `${vehicle.matchPercentage}%` }} />
          </div>
        </div>
      )}

      {Array.isArray(vehicle?.matchReasons) && vehicle.matchReasons.length > 0 && (
        <ul className="vehicle-card__reasons">
          {vehicle.matchReasons.map((reason) => (
            <li key={reason} className="vehicle-card__reason">
              {reason}
            </li>
          ))}
        </ul>
      )}

      <ul className="vehicle-card__features">
        {(vehicle?.features ?? ['Ficha técnica', 'Disponible', 'Garantía']).map((feature) => (
          <li key={feature} className="vehicle-card__feature">
            {feature}
          </li>
        ))}
      </ul>

      <div className="vehicle-card__footer">
        <span className="vehicle-card__meta">Año {vehicle?.year ?? '2024'}</span>
        <button className="vehicle-card__button" type="button">
          Ver detalles
        </button>
      </div>
    </article>
  );
}

VehicleCard.propTypes = {
  vehicle: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.string,
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    features: PropTypes.arrayOf(PropTypes.string),
    matchPercentage: PropTypes.number,
    matchReasons: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default VehicleCard;