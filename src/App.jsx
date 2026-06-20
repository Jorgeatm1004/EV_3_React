import Navbar from './components/navbar';
import AddVehicleForm from './components/addvehicleform';
import AutomatchDash from './views/automatchdash';

const featuredVehicles = [
  {
    name: 'Toyota Corolla',
    category: 'Sedan',
    price: '$24,500',
    year: 2024,
    description: 'Sedan equilibrado para uso diario, con consumo eficiente y buen nivel de confort.',
    features: ['Automático', 'Híbrido', 'Asistencia de carril'],
  },
  {
    name: 'Ford Ranger',
    category: 'Pickup',
    price: '$36,900',
    year: 2023,
    description: 'Pickup robusta para trabajo y aventura, con capacidad de carga y buen desempeño.',
    features: ['4x4', 'Doble cabina', 'Pantalla táctil'],
  },
  {
    name: 'Honda HR-V',
    category: 'SUV',
    price: '$31,200',
    year: 2025,
    description: 'SUV compacta con diseño moderno, espacio interior y tecnología de seguridad.',
    features: ['Smart Entry', 'Cámara 360', 'Modo Eco'],
  },
  {
    name: 'Kia Carnival',
    category: 'Minivan',
    price: '$39,800',
    year: 2024,
    description: 'Minivan espaciosa para familia numerosa, con confort alto y gran capacidad interior.',
    features: ['7 plazas', 'Asientos flexibles', 'Sistema multimedia'],
  },
  {
    name: 'BMW Serie 4',
    category: 'Coupe',
    price: '$48,300',
    year: 2025,
    description: 'Coupe deportiva con diseño elegante, respuesta rápida y presencia premium.',
    features: ['Tracción trasera', 'Modo Sport', 'Pantalla curva'],
  },
  {
    name: 'Mazda MX-5',
    category: 'Convertible',
    price: '$33,700',
    year: 2024,
    description: 'Convertible ligero y ágil, ideal para disfrutar conducción abierta y dinámica.',
    features: ['Techo retráctil', 'Peso ligero', 'Cambio manual'],
  },
  {
    name: 'Tesla Model 3',
    category: 'Electric',
    price: '$41,500',
    year: 2025,
    description: 'Sedán eléctrico con buena autonomía, software actualizado y enfoque tecnológico.',
    features: ['Autonomía alta', 'Pantalla central', 'Carga rápida'],
  },
];

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