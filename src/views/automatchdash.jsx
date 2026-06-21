import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import VehicleCard from '../components/vehiclecard';

const budgetOptions = [
  { label: 'Todos', value: 'all', max: Number.POSITIVE_INFINITY },
  { label: 'Hasta $26,000', value: 'budget', max: 26000 },
  { label: 'Hasta $34,000', value: 'mid', max: 34000 },
  { label: 'Más de $34,000', value: 'premium', max: Number.POSITIVE_INFINITY },
];

const useCaseOptions = [
  { label: 'Todos', value: 'all' },
  { label: 'Ciudad', value: 'city' },
  { label: 'Familia', value: 'family' },
  { label: 'Trabajo', value: 'work' },
  { label: 'Aventura', value: 'adventure' },
];

const useCaseKeywords = {
  city: ['híbrido', 'automático', 'eco', 'smart entry', 'pantalla táctil'],
  family: ['cámara 360', 'asistencia de carril', 'espacio', 'seguridad', 'sedan', 'suv'],
  work: ['4x4', 'doble cabina', 'carga', 'pickup', 'robusta', 'trabajo'],
  adventure: ['4x4', 'suv', 'pickup', 'aventura', 'espacio', 'camino'],
};

const formatPriceToNumber = (price) => Number(price?.replace(/\D/g, '') ?? 0);

const getBudgetLabel = (budgetValue) => budgetOptions.find((option) => option.value === budgetValue)?.label ?? 'Todos';

function getCategoryScore(vehicle, category) {
  if (category === 'all') {
    return 30;
  }

  return vehicle.category === category ? 40 : 0;
}

function getBudgetScore(priceValue, budget) {
  if (budget === 'all') {
    return 25;
  }

  const selectedBudget = budgetOptions.find((option) => option.value === budget);

  if (budget === 'premium') {
    return priceValue > 34000 ? 25 : Math.max(0, 25 - (34000 - priceValue) / 2000);
  }

  if (selectedBudget && priceValue <= selectedBudget.max) {
    return 25;
  }

  return Math.max(0, 25 - (priceValue - (selectedBudget?.max ?? 0)) / 1500);
}

function getUseCaseScore(vehicle, useCase) {
  if (useCase === 'all') {
    return 20;
  }

  const haystack = [vehicle.category, vehicle.name, ...(vehicle.features ?? []), vehicle.description]
    .join(' ')
    .toLowerCase();

  return (useCaseKeywords[useCase] ?? []).some((keyword) => haystack.includes(keyword)) ? 20 : 0;
}

function getMatchReasons(vehicle, preferences) {
  const reasons = [];

  if (preferences.category !== 'all' && vehicle.category === preferences.category) {
    reasons.push(`Coincide con ${preferences.category}`);
  }

  if (preferences.budget !== 'all' && getBudgetScore(formatPriceToNumber(vehicle.price), preferences.budget) >= 20) {
    reasons.push(`En el rango ${getBudgetLabel(preferences.budget)}`);
  }

  if (preferences.useCase !== 'all') {
    reasons.push(`Adecuado para uso ${useCaseOptions.find((option) => option.value === preferences.useCase)?.label?.toLowerCase() ?? 'seleccionado'}`);
  }

  return reasons.length > 0 ? reasons : ['Recomendación general'];
}

function scoreVehicle(vehicle, preferences) {
  const category = preferences.category;
  const budget = preferences.budget;
  const useCase = preferences.useCase;
  const priceValue = formatPriceToNumber(vehicle.price);

  if (category === 'all' && budget === 'all' && useCase === 'all') {
    return 100;
  }

  const categoryScore = getCategoryScore(vehicle, category);
  const budgetScore = getBudgetScore(priceValue, budget);
  const useCaseScore = getUseCaseScore(vehicle, useCase);

  return Math.max(0, Math.min(100, Math.round(categoryScore + budgetScore + useCaseScore)));
}

function AutomatchDash({ vehicles }) {
  const [preferences, setPreferences] = useState({
    category: 'all',
    budget: 'all',
    useCase: 'all',
  });

  const recommendedVehicles = useMemo(() => {
    return [...vehicles]
      .map((vehicle) => ({
        ...vehicle,
        matchPercentage: scoreVehicle(vehicle, preferences),
        matchReasons: getMatchReasons(vehicle, preferences),
      }))
      .sort((leftVehicle, rightVehicle) => rightVehicle.matchPercentage - leftVehicle.matchPercentage);
  }, [preferences, vehicles]);

  const topMatch = recommendedVehicles[0]?.matchPercentage ?? 0;

  return (
    <main className="dashboard-view">
      <section className="dashboard-hero" id="inicio">
        <div>
          <p className="dashboard-hero__eyebrow">Automatch</p>
          <h1 className="dashboard-view__title">Elige tus preferencias y recibe recomendaciones</h1>
          <p className="dashboard-view__description">
            Selecciona el tipo de vehículo, el presupuesto y el uso principal para calcular el porcentaje de coincidencia.
          </p>
        </div>

        <div className="dashboard-hero__badge-panel">
          <span className="dashboard-hero__badge">Mejor coincidencia {topMatch}%</span>
          <span className="dashboard-hero__badge">Autos recomendados</span>
          <span className="dashboard-hero__badge">Filtro por preferencias</span>
        </div>
      </section>

      <section className="automatch-panel" aria-label="Preferencias del usuario">
        <div className="automatch-panel__header">
          <p className="eyebrow">Preferencias</p>
          <h2 className="content-section__title">Configura lo que estás buscando</h2>
          <p className="content-section__description">
            El sistema ordena los autos según qué tan bien encajan con tu selección.
          </p>
        </div>

        <div className="automatch-controls">
          <label className="automatch-control" htmlFor="automatch-category">
            <span className="automatch-control__label">Categoría</span>
            <select
              className="add-vehicle-form__input"
              id="automatch-category"
              value={preferences.category}
              onChange={(event) => setPreferences((currentPreferences) => ({ ...currentPreferences, category: event.target.value }))}
            >
              <option value="all">Todas</option>
              <option value="SUV">SUV</option>
              <option value="Sedan">Sedan</option>
              <option value="Hatchback">Hatchback</option>
              <option value="Pickup">Pickup</option>
              <option value="Coupe">Coupe</option>
              <option value="Minivan">Minivan</option>
              <option value="Convertible">Convertible</option>
              <option value="Electric">Electric</option>
            </select>
          </label>

          <label className="automatch-control" htmlFor="automatch-budget">
            <span className="automatch-control__label">Presupuesto</span>
            <select
              className="add-vehicle-form__input"
              id="automatch-budget"
              value={preferences.budget}
              onChange={(event) => setPreferences((currentPreferences) => ({ ...currentPreferences, budget: event.target.value }))}
            >
              {budgetOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>

          <label className="automatch-control" htmlFor="automatch-use-case">
            <span className="automatch-control__label">Uso principal</span>
            <select
              className="add-vehicle-form__input"
              id="automatch-use-case"
              value={preferences.useCase}
              onChange={(event) => setPreferences((currentPreferences) => ({ ...currentPreferences, useCase: event.target.value }))}
            >
              {useCaseOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </section>

      <section className="dashboard-stats" aria-label="Resumen de estado">
        <article className="dashboard-stat">
          <span className="dashboard-stat__value">{vehicles.length}</span>
          <span className="dashboard-stat__label">Autos disponibles</span>
        </article>

        <article className="dashboard-stat">
          <span className="dashboard-stat__value">{topMatch}%</span>
          <span className="dashboard-stat__label">Coincidencia más alta</span>
        </article>

        <article className="dashboard-stat">
          <span className="dashboard-stat__value">{recommendedVehicles.filter((vehicle) => vehicle.matchPercentage >= 70).length}</span>
          <span className="dashboard-stat__label">Recomendados fuertes</span>
        </article>
      </section>

      <section className="content-section" id="recomendados">
        <div className="content-section__header">
          <p className="eyebrow">Resultados</p>
          <h2 className="content-section__title">Autos recomendados según tu perfil</h2>
          <p className="content-section__description">
            Los primeros resultados son los que mejor se ajustan a tus preferencias actuales.
          </p>
        </div>

        <div className="vehicle-grid">
          {recommendedVehicles.map((vehicle) => (
            <VehicleCard key={vehicle.name} vehicle={vehicle} />
          ))}
        </div>
      </section>
    </main>
  );
}

AutomatchDash.propTypes = {
  vehicles: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      year: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      description: PropTypes.string.isRequired,
      features: PropTypes.arrayOf(PropTypes.string),
    }),
  ).isRequired,
};

export default AutomatchDash;