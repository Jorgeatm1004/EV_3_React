import PropTypes from 'prop-types';

const currencyFormatter = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  maximumFractionDigits: 0,
});

const numberFormatter = new Intl.NumberFormat('es-CL');

function formatCurrency(value) {
  const amount = Number(value);
  return Number.isFinite(amount) && amount > 0 ? currencyFormatter.format(amount) : 'Precio no disponible';
}

function formatMileage(value) {
  if (value === undefined || value === null || value === '') return 'No disponible';
  const kilometers = Number(value);
  if (Number.isFinite(kilometers)) return `${numberFormatter.format(kilometers)} km`;
  return String(value);
}

function VehicleCard({ vehicle = {}, matchPercentage, matchReasons = [] }) {
  const {
    id,
    name,
    description,
    price,
    year,
    mileage,
    fuel,
    transmission,
    image,
    category,
    features,
  } = vehicle;

  return (
    <article className="vehicle-card" data-vehicle-id={id || undefined}>
      {typeof matchPercentage === 'number' && (
        <div className="vehicle-card__match">{Math.round(matchPercentage)}% match</div>
      )}

      {image ? (
        <img className="vehicle-card__image" src={image} alt={name || 'Vehículo'} />
      ) : (
        <div className="vehicle-card__placeholder">Sin imagen</div>
      )}

      <div className="vehicle-card__content">
        <p className="vehicle-card__badge">{category ?? 'Destacado'}</p>
        <h3 className="vehicle-card__title">{name || 'Vehículo'}</h3>

        <p className="vehicle-card__description">{description || 'Sin descripción disponible.'}</p>

        <div className="vehicle-card__price">{formatCurrency(price)}</div>

        <dl className="vehicle-card__details">
          <div>
            <dt>Año</dt>
            <dd>{year || 'No disponible'}</dd>
          </div>
          <div>
            <dt>Kilometraje</dt>
            <dd>{formatMileage(mileage)}</dd>
          </div>
          <div>
            <dt>Combustible</dt>
            <dd>{fuel || 'No disponible'}</dd>
          </div>
          <div>
            <dt>Transmisión</dt>
            <dd>{transmission || 'No disponible'}</dd>
          </div>
        </dl>

        {Array.isArray(matchReasons) && matchReasons.length > 0 && (
          <ul className="vehicle-card__reasons">
            {matchReasons.map((r, i) => (
              <li key={i} className="vehicle-card__reason">{r}</li>
            ))}
          </ul>
        )}

        <ul className="vehicle-card__features">
          {(features ?? ['Ficha técnica', 'Disponible', 'Garantía']).map((f) => (
            <li key={f} className="vehicle-card__feature">{f}</li>
          ))}
        </ul>

        <div className="vehicle-card__footer">
          <span className="vehicle-card__meta">Año {year || '—'}</span>
          <button className="vehicle-card__button" type="button">Ver detalles</button>
        </div>
      </div>
    </article>
  );
}
const currencyFormatter = new Intl.NumberFormat('es-CL', {
  style: 'currency',
  currency: 'CLP',
  maximumFractionDigits: 0,
});

const numberFormatter = new Intl.NumberFormat('es-CL');

function formatCurrency(value) {
  const amount = Number(value);
  return Number.isFinite(amount) && amount > 0 ? currencyFormatter.format(amount) : 'Precio no disponible';
}

function formatMileage(value) {
  if (value === undefined || value === null || value === '') {
    return 'No disponible';
  }

  const kilometers = Number(value);

  if (Number.isFinite(kilometers)) {
    return `${numberFormatter.format(kilometers)} km`;
  }

  return String(value);
}

function VehicleCard({ vehicle = {}, matchPercentage, matchReasons = [] }) {
  const {
    id,
    name,
    description,
    price,
    year,
    mileage,
    fuel,
    transmission,
    image,
  } = vehicle;

  return (
    <article className="vehicle-card" data-vehicle-id={id || undefined}>
      {typeof matchPercentage === 'number' && (
        <div className="vehicle-card__match">{Math.round(matchPercentage)}% match</div>
      )}
      {image ? (
        <img className="vehicle-card__image" src={image} alt={name || 'Vehículo'} />
      ) : (
        <div className="vehicle-card__placeholder">Sin imagen</div>
      )}

      <div className="vehicle-card__content">
        <h3>{name || 'Vehículo sin nombre'}</h3>
        <p>{description || 'Sin descripción disponible.'}</p>

        <div className="vehicle-card__price">{formatCurrency(price)}</div>

        <dl className="vehicle-card__details">
          <div>
            <dt>Año</dt>
            <dd>{year || 'No disponible'}</dd>
          </div>
          <div>
            <dt>Kilometraje</dt>
            <dd>{formatMileage(mileage)}</dd>
          </div>
          <div>
            <dt>Combustible</dt>
            <dd>{fuel || 'No disponible'}</dd>
          </div>
          <div>
            <dt>Transmisión</dt>
            <dd>{transmission || 'No disponible'}</dd>
          </div>
        </dl>
        {Array.isArray(matchReasons) && matchReasons.length > 0 && (
          <ul className="vehicle-card__reasons">
            {matchReasons.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
        )}
>>>>>>> Stashed changes
      </div>
    </article>
  );
}

<<<<<<< Updated upstream
export default VehicleCard;

VehicleCard.propTypes = {
  vehicle: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mileage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fuel: PropTypes.string,
    transmission: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    features: PropTypes.arrayOf(PropTypes.string),
  }),
  matchPercentage: PropTypes.number,
  matchReasons: PropTypes.arrayOf(PropTypes.string),
};

VehicleCard.defaultProps = {
  vehicle: {},
  matchReasons: [],
};
=======
export default VehicleCard;

VehicleCard.propTypes = {
  vehicle: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    name: PropTypes.string,
    description: PropTypes.string,
    price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    mileage: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    fuel: PropTypes.string,
    transmission: PropTypes.string,
    image: PropTypes.string,
  }),
  matchPercentage: PropTypes.number,
  matchReasons: PropTypes.arrayOf(PropTypes.string),
};

VehicleCard.defaultProps = {
  vehicle: {},
  matchReasons: [],
};
>>>>>>> Stashed changes
