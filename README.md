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

Prompts que se usaron en la creacion y edicion de la pagina

1.- dentro de la carpeta frontend_react, quiero que hagas una SPA con react y vite, primero genera la estructura para despues definir de que va a ser la SPA

2.- dentro de src haz una carpeta de components, donde tiene que estar los archivos, navbar.jsx, vehiclecard.jsx y addvehicleform.jsx

3.- en src, haz la carpeta views donde tiene que estar el archivo automatchdash.jsx

4.- en los archivos dentro de components y views, rellenalos con categorías de autos y precios.

5.- el navbar, haz un boton para las categorias, para que el usuario aprete el boton y las categorias de autos se muestren en en una columna

6.- para automatch, seria elegir las preferencias del usuario y en base a esto mostrar el porcentaje de coincidencia para mostrar los autos recomendados

7.- quiero modificar estyles.css, quiero un diseño moderno y elegante