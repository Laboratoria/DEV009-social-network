# Travel Lovers

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Funcionalidades del proyecto](#3-funcionalidades-del-proyecto)
* [4. Descripción de archivos](#4-descripción-de-archivos)
* [5. Definición del producto](#5-difinición-del-producto)
* [6. Diseño del producto](#6-diseño-del-producto)
* [7. Planeación del proyecto](#7-planificación-del-proyecto)

## 1. Preámbulo
Las redes sociales son plataformas digitales que permiten conectarse con otras personas y compartir todo tipo de contenido. Para ello, cada usuario dispone de un perfil personalizado que representa su presencia en la red y le permite interactuar de forma pública y privada. 

Con el paso de los años, las redes sociales han ido evolucionando y añadiendo distintas funcionalidades y usos. En este sentido, mientras que algunas como TikTok han apostado por el formato de vídeo corto, Twitter opta por la publicación de mensajes cortos de texto y LinkedIn se centra en el mundo laboral.

## 2. Resumen del proyecto
Travel Lovers es una red social sobre viajes dirigida a usuarios interesados por viajar o hacer turismo que quieren dar y recibir consejos y reseñas sobre los lugares que visitan. Para esto creamos un sitio ⏤disponible en formato de celular, escritorio y tablet⏤ que le permite a los usuarios hacerse una cuenta, escribir publicaciones, editarlas, borrarlas y darles like. En este sentido, la página es una Single Page Application responsive que cuenta con más de una vista para cada de las funcionalidades con las que el usuario puede desarrollar diferentes acciones. Por último, para poder autenticar usuarios y escribir y leer datos, esta aplicación usa firebase. 

![Travel Lovers](./src/img/logo.png)

## 3. Funcionalidades del proyecto
El usuario puede ingresar a la página para acceder a su cuenta o, en caso de no tener una, puede crearla llenando los campos de nombre, correo y contraseña. Las correos no pueden haber sido registrados previamente y las contraseñas deben tener más de ocho caracteres y contener al menos una letra mayúscula, una letra minúscula y un número. El registro también puede completarse a través de la autenticación de un correo de gmail. 

Una vez que se tiene una cuenta creada, el usuario puede escribir publicaciones desde un cuadro de texto para publicarlas. Posteriormente se puede editar y borrar publicaciones. Asimismo, los usuarios pueden dar like a todas las publicaciones. 


## 4. Descripción de archivos
La lógica de este proyecto está implementada en Javascript, HTML y CSS. La estructura del proyecto se divide en los siguientes archivos. 

### `src/index.html`
Dentro de este archivo se encuentra el root del proyecto.

### `src/main.js`
Este archivo contiene el router del proyecto, el cual permite la navegación por las diferentes vistas de la página. Para ello, se importan los archivos de los componentes que corresponden a cada una de las vistas, se les asigna un path y luego se implementa una función navigateTo. 

### `credentialFirebase.js`
Este archivo pertenece a la carpeta de firebase y en él se guarda la credencial con los datos de la instalación de firebase al proyecto, así como de la creación del proyecto.

### `initializeFirebase.js`
También pertenece a la carpeta de firebase. Como su nombre lo indica, este archivo sirve para inicializar las llamadas a diferentes funciones y objetos proporcionados por firebase y firestore. Además, este archivo contiene las importaciones de todos los métodos de firebase y firestore usados para las funcionalidades de la red social.

### `components`
Esta carpeta tiene los archivos correspondientes a las vistas de la SPA, donde se crean los elementos que constituyen la aplicación y se hace la manipulación del DOM. Los archivos de los componentes son: 
* `error.js`: esta vista se muestra cuando el usuario entra a alguna página que no esté considerada dentro de la navegación.
* `login.js`: muestra el acceso para los usuarios que ya están registrados.
* `signup`: muestra el formulario para que los usuarios nuevos se registren.
* `wall`: muestra el muro donde están las publicaciones de todos los usuarios.

### `index.js`
Se importan y se implementan todas las funciones de firebase y firestore para crear usuarios, escribir datos, leer datos y obtener datos.

### `test`
Se crearon tres carpetas para hacer pruebas unitarias asíncronas de las funciones implementadas para las vistas de login, signup y muro.

## 5. Definición del producto
Como se mencionó antes, los usuarios para quienes está pensada la app Travel Lovers son personas viajeras que están interesadas en acceder a una comunidad de viajes y turismo para compartir sus opiniones, experiencias y consejos de viaje, así como para leer al resto de los viajeros.

Para la creación de Travel Lovers se definieron 6 historias de usuario con sus criterios de aceptación y su definición de terminado. 

<img src="./src/img/HU1.png" alt="Historia de usuario 1" width="400px;"/>
<img src="./src/img/HU2.png" alt="Historia de usuario 2" width="400px;"/>
<img src="./src/img/HU3.png" alt="Historia de usuario 3" width="400px;"/>
<img src="./src/img/HU4.png" alt="Historia de usuario 4" width="400px;"/>
<img src="./src/img/HU5.png" alt="Historia de usuario 5" width="400px;"/>
<img src="./src/img/HU6.png" alt="Historia de usuario 6" width="400px;"/>

## 6. Diseño del producto
Después de haber escrito las historias de usuario, se continuó con el diseño del producto. Para el diseño, se tomaron en cuenta los fundamentos de responsive design, mobile first y visual design. En primer lugar, se diseñaron bocetos que corresponden a los prototipos de baja fidelidad y más adelante se diseñó el prototipo de alta fidelidad, el cual se puede visualizar en [figma](https://www.figma.com/file/uk7MQlcqRVwZy0AucmiGJo/Travelovers?type=design&mode=design&t=KQdX0q85ET3CVfAd-1), donde se cuenta con una versión móvil y una versión desktop, ambas interactivas. Por último, se aplicaron test de usabilidad con diferentes usuarias y a partir de su feedback se agregaron algunas modificaciones para el diseño final. 

<img src="./src/img/prototipobaja.png" alt="Prototipo de baja fidelidad" width="400px;"/>
<img src="./src/img/prototipobaja.jpg" alt="Prototipo de alta fidelidad" width="400px;"/>
<img src="./src/img/celular.png" alt="Resultado final móvil" width="400px;"/>
<img src="./src/img/escritorio.png" alt="Resultado final escritorio" width="400px;"/>

## 7. Planeación del proyecto
Para la organización del proyecto, se utilizó [Github Projects](https://github.com/users/andreacabrera99/projects/1/views/1), donde planeamos el flujo de trabajo en torno a la división de tareas de las historias de usuario.



