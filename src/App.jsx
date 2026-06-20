import Navbar from './components/navbar';
import AddVehicleForm from './components/addvehicleform';
import AutomatchDash from './views/automatchdash';
import featuredVehicles from './data/featuredVehicles';

function App() {
  return (
    <div className="app-frame">
      <Navbar />

      <main className="app-content">
        <AutomatchDash vehicles={featuredVehicles} />

        <section className="content-section" id="contacto">
          <div className="content-section__header">
            <p className="eyebrow">Alta de vehículos</p>
            <h2 className="content-section__title">Agregar un nuevo auto</h2>
          </div>

          <AddVehicleForm />
        </section>
      </main>
    </div>
  );
}

export default App;