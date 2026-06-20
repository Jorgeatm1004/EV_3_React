AutoMatch - SPA para Gestión de Automotora

AutoMatch es una aplicación web de una sola página (SPA) diseñada para administrar el stock y realizar filtrados en tiempo real de los vehículos de una automotora. El proyecto está desarrollado con React y Vite, utilizando JavaScript y una arquitectura modular basada en componentes.

Se hizo uso de react para el frontend, Vite, Css para los estilos y git para el control de versiones dentro del repositorio

El proyecto se estructura de la siguiente manera dentro de la carpeta src, dentro de src se encuentran los siguientes archivos y carpetas:

Components: componentes reutilizables, esta carpeta contine:
    -addvehicleform.jsx: es el formulario para ingresar nuevos vehiculos al catalogo.
    - navbar.jsx: la barra de navegacion
    - vehiclecard: es la tarjeta que muestra la informacion de cada vehiculo.
Views: vistas
    automatchdash.jsx: el dashboard central con la logica de filtrado y el estado
App.jsx: el componente raiz de la aplicacion
main.jsx: punto de entrada y renederizado en el DOM

Funcionamiento:

1.-Modularización: La interfaz se dividió en componentes independientes para separar la presentación (navbar, vehiclecard) de la captura de datos (addvehicleform) y la vista principal (automatchdash).

2.-Formularios controlados: Se utilizó el hook useState para manejar el estado interno del formulario, asegurando que los datos ingresados por el usuario estén sincronizados antes de agregarse al stock.

3.-Flujo de datos (Props): Los datos de los vehículos se pasan desde el componente padre hacia las tarjetas mediante props. A su vez, el formulario se comunica con el padre enviando el nuevo vehículo a través de una función callback.

4.-Filtrado y renderizado dinámico: Se aplican los métodos .filter() y .map() de JavaScript para actualizar la lista en pantalla inmediatamente cuando el usuario escribe en el buscador. Se incluyó el atributo key único para optimizar el rendimiento del renderizado de React.

Uso de ramas de Git

main: contiene la version base de la pagina hasta que el desarrollo termine

feature/desarrollo_frontend: aca esta echo el desarrollo de la pagina, hasta que se permita pasar todo a la rama main.

COMO EJECUTAR EL PROYECTO EN LOCAL

1.- clonar el repositorio
    git clone https://github.com/Jorgeatm1004/EV_3_React.git
2.- entrar en la carpeta del proyecto
    cd EV_3_React
3.- instalar dependencias
    npm install
4.- iniciar 
    npm run dev