function AddVehicleForm() {
  return (
    <form>
      <label htmlFor="vehicle-name">Vehicle name</label>
      <input id="vehicle-name" name="vehicle-name" type="text" />
      <button type="submit">Add vehicle</button>
    </form>
  );
}

export default AddVehicleForm;