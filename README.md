# Creando una Red Social

## Índice

* [1. Resumen del proyecto](#1-resumen-del-proyecto)
* [2. Definición del producto](#2-definición-del-proyecto)
* [3. Historias de usuari@s](#3-historias-de-usuari@s)
* [4. Prototipo de baja fidelidad](#4-prototipo-de-baja-calidad)
* [5. Prototipo de alta fidelidad](#5-prototipo-de-alta-fidelidad)
* [6. Planeación](#6-planeación)
* [7. Despliegue](#7-despliegue)



## 1. Resumen del proyecto 

El siguiente proyecto es una Red Social de recetas sencillas de postres, para todas las personas que quieran consentir a sus familias.

![bon-bon](/src/imagenes/1_readme_logo.png)

El uso de la aplicación dependera de estar registrado, por lo que es necesario registrarse con correo y contraseña para  tener una cuenta de usuario, si se cuenta con un correo de gmail, tambien por este medio se podra ingresar. Una vez dentro puedes escribir tu receta o visualizar las recetas de otros usuari@s en esta hermosa comunidad Bon-Bon.

## 2. Definición del producto

**Bon-Bon** es una red social enfocado a las personas que les gusta cocinar postres, tienen tiempo limitado y les guste consentir a sus seres queridos.
Aveces necesitamos nuevas ideas o queremos compartir nuestros conocimiento de cocina y **Bon-Bon** es un espacio donde podemos compartir y crear comunidad entorno a nuestros gustos y tener un lugar donde almacenar nuestras amadas recetas.
**Bon-Bon** se desarrolla en una Single-page Application (SPA), con mas de una vista en la que se puede leer y escribir datos.
Cualquier usuario puede crear una cuenta de acceso y loguearse con ella; crear, editar, borrar y likear publicacciones.

## 3. Historias de Usuari@s 

Se desarrollaron 9 historias de usuari@ como se presentan a continuación:

**Historia de Usuari@ 1**

![Historia de Usuaria 1](/src/imagenes/2_readme_HU1.png)

**Historia de Usuari@ 2.1**

![Historia de Usuaria 2.1](/src/imagenes/2_readme_HU2-1.png)

**Historia de Usuari@ 2.2**

![Historia de Usuaria 2.2](/src/imagenes/2_readme_HU2-2.png)

**Historia de Usuari@ 3**

![Historia de Usuaria 3](/src/imagenes/2_readme_HU3.png)

**Historia de Usuari@ 4**

![Historia de Usuaria 4](/src/imagenes/2_readme_HU4.png)

**Historia de Usuari@ 5**

![Historia de Usuaria 5](/src/imagenes/2_readme_HU5.png)

**Historia de Usuari@ 6**

![Historia de Usuaria 6](/src/imagenes/2_readme_HU6.png)

**Historia de Usuari@ 7**

![Historia de Usuaria 7](/src/imagenes/2_readme_HU7.png)


## 4. Prototipo de baja fidelidad

Posteriormente se realizo el prototipo de baja fidelidad considerando las historias de l@s usuari@s.
![Prototipo de baja](/src/imagenes/3_readme_PB1.png)

Con los test de usabilidad se fueron modificando los prototipos conforme a los resultados obtenidos. Se realizaron varios prototipos 

### 4.1. Test de usabilidad 

Se realizaron test de usabilidad en el prototipo de baja fidelidad mediante una [encuesta](https://forms.gle/UQ36ApGr8JEYXELE8) en google forms.
La encuesta contenía el prototipo de baja fidelidad y preguntas a este prototipo.

![Formulario](/src/imagenes/4_readme_Form.png)

El resultado de la primera encuesta realizada fue:
- Confirmación de eliminar.  
- Botones navegar: inicio, cerrar sesión, mi recetario 
- ¿Cuáles son los detalles de la receta? ¿Título, descripción? 
- Una manera de ver solo mis publicaciones y otra para ver publicaciones de otros que he guardado 
- Color de fondo más inclusivo, tanto para mujeres como hombres 
- En vez de ingresar: botón iniciar sesión 
- Al registrarse añadir antes el mensaje: "si no tienes cuenta"... 
- Ingresar también con facebook - Para ingresar con google ser más específicas en la instrucción 
- Promesa: recetas fáciles y económicas (poco tiempo y poco dinero). // Poco dinero >> sencillas!

## 5. Prototipo de alta fidelidad

Del resultado del test de usabilidad se realizaron modificaciones para la realización del prototipo de alta fidelidad como se presenta a continuación:

![Prototipo de alta](/src/imagenes/5_readme_prototipoAlta1.png)
![Prototipo de alta1](/src/imagenes/5_readme_prototipoAlta2.png)
![Prototipo de alta2](/src/imagenes/5_readme_prototipoAlta3.png)

El prototipo de alta fidelidad se presenta en el siguiente link: [Prototipo de alta fidelidad](https://www.figma.com/proto/BJUrf9s5lSkqKjr9cqU2Xg/Red-social-Bon-Bon?type=design&node-id=102-4&t=uhxu7R2etXBXgEsZ-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=102%3A4) 

### 5.1. Test de usabilidad 

Se realizaron test de usabilidad en el prototipo de alta fidelidad mediante una [encuesta](https://forms.gle/YqHcEUhqsdicSYrg6) en google forms.
La encuesta contenía el link del prototipo de alta fidelidad y unas preguntas especificas en cuanto a la interacción de la página, paleta de colores elegida, comprensión de los iconos del navegador y si era entendible como publicar una receta.

Se obtuvieron los siguientes comentarios especificos:
- Me encanta el diseño de la app, su funcionalidad es bastante clara y la tematica es muy interesante 10 de 10.
- Una interfaz muy fluida con una paleta de colores armoniosa y un diseño visual muy equilibrado y atractivo.
- Me encanto lo fácil e intuitiva que es la navegación por su aplicación, me gusta mucho la gama de colores y la tematica. Lo que agregaria es talvez una descripción para ir a mis publicaciones personales, además del icono, por todo lo demás me encanta.
- Una aplicación muy agradable donde me gustaría conocer más recetas.
- Muy linda la aplicación, tal vez poner el botón de cerrar sesión en la parte superior
el boton para ingresar al perfil esta raro, pero una vez que le das click se entiende que es muro propio, quizas un hover con un globo que diga que es el contenido, y los colores me gustan , lo que si recuerdo que Luna dijo lo de buscar sincronia en los icon si son rellenos todos rellenos, si son minimalistas con lineas todos con lineas . eso por lo demás esta genial, ya quiero verlo

De acuerdo a estos comentarios; Se realizarón los siguientes cambios :
1. Se adicionó el nombre a cada icono, para que fuera mas entendible su manipulación.
2. Se resaltó el nombre del usuari@.

Se aclara que nuestra página ya cuenta con:
1. Icono en la parte superior de cerrar sesión
2. Solo el usuri@ que pública una receta tiene la opción de eliminarla o editarla, al acceder a su propio recetario.

## 6. Planificación
La planeación de nuestro proyecto se realizo con GitHub Projects. Donde cada historia de usuario fue un Milestones, a los cuales se le asigno diferentes Issuses (tareas definidas).
![Planificación](/src/imagenes/Planificación.png)

## 7. Despliegue
Esté es el link del despliegue de nuestra red social [BON-BON](https://social-network-bon.web.app)



