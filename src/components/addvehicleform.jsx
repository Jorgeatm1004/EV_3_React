function AddVehicleForm() {
  return (
    <form className="add-vehicle-form">
      <div className="add-vehicle-form__header">
        <p className="add-vehicle-form__eyebrow">Nuevo vehículo</p>
        <h2 className="add-vehicle-form__title">Agregar a la base de autos</h2>
        <p className="add-vehicle-form__description">
          Completa los datos principales para registrar un vehículo dentro del catálogo.
        </p>
      </div>

      <div className="add-vehicle-form__fields">
        <label className="add-vehicle-form__group" htmlFor="vehicle-name">
          <span className="add-vehicle-form__label">Nombre</span>
          <input className="add-vehicle-form__input" id="vehicle-name" name="vehicle-name" type="text" placeholder="Ej. Toyota Corolla" />
        </label>

        <label className="add-vehicle-form__group" htmlFor="vehicle-category">
          <span className="add-vehicle-form__label">Categoría</span>
          <select className="add-vehicle-form__input" id="vehicle-category" name="vehicle-category">
            <option>SUV</option>
            <option>Sedan</option>
            <option>Hatchback</option>
            <option>Pickup</option>
          </select>
        </label>

        <label className="add-vehicle-form__group" htmlFor="vehicle-year">
          <span className="add-vehicle-form__label">Año</span>
          <input className="add-vehicle-form__input" id="vehicle-year" name="vehicle-year" type="number" min="1990" max="2035" placeholder="2024" />
        </label>

        <label className="add-vehicle-form__group add-vehicle-form__group--full" htmlFor="vehicle-description">
          <span className="add-vehicle-form__label">Descripción</span>
          <textarea
            className="add-vehicle-form__input add-vehicle-form__textarea"
            id="vehicle-description"
            name="vehicle-description"
            rows="4"
            placeholder="Describe características, estado y uso del vehículo"
          />
        </label>
      </div>

      <div className="add-vehicle-form__actions">
        <p className="add-vehicle-form__helper">Los datos se usarán para mostrar el auto dentro del dashboard.</p>
        <button className="add-vehicle-form__button" type="submit">
          Guardar vehículo
        </button>
      </div>
    </form>
  );
}

export default AddVehicleForm;