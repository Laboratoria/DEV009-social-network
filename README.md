# Creando una Red Social

## Índice

* [1. Preámbulo](#1-preámbulo)
* [2. Resumen del proyecto](#2-resumen-del-proyecto)
* [3. Objetivos de aprendizaje](#3-objetivos-de-aprendizaje)
* [4. Consideraciones generales](#4-consideraciones-generales)
* [5. Criterios de aceptación mínimos del proyecto](#5-criterios-de-aceptación-mínimos-del-proyecto)
* [6. Hacker edition](#6-hacker-edition)
* [7. Entrega](#7-entrega)
* [8. Pistas, tips y lecturas complementarias](#8-pistas-tips-y-lecturas-complementarias)

## 1. Resumen del proyecto 

El siguiente proyecto es una Red Social de recetas sencillas de postres, para todas las personas que quieran consentir a sus familias.

![bon-bon](/src/imagenes/logo_home.png)

El uso de la aplicación dependera de estar registrado, por lo que es necesario registrarse con correo y contraseña para  tener una cuenta de usuario.
Si se cuanta con un correo de gmail, tambien por este medio se podra ingresar.
Una vez dentro puedes escribir tu receta o visualizar las recetas de otros usuari@s en esta hermosa comunida Bon-Bon.

## 2. Definición del producto

**Bon-Bon** es una red social enfocado a las personas que les gusta cocinar postres, tienen tiempo limitado y les guste consentir a sus seres queridos.
Aveces necesitamos nuevas ideas o queremos compartir nuestros conocimiento de coocina y **Bon-Bon** es un espacio donde podemos compartir y crear comunidad entorno a nuestros gustos y tener un lugar donde almacenar nuestras amadas recetas.
**Bon-Bon** se desarrolla en una Single-page Application (SPA), con mas de una vista en la que se puede leer y escribir datos.
Cualquier usuario puede crear una cuenta de acceso y loguearse con ella; crear, editar, borrar y likear publicacciones.

## 3. Historias de Usuari@s 

Se desarrollaron 9 historias de usuari@ como se presentan a continuación:

**Historia de Usuari@ 1.1**

![Historia de Usuaria 1.1](/src/imagenes/2_readme_HU1.png)

**Historia de Usuari@ 1.2**

![Historia de Usuaria 1.2](/src/imagenes/2_readme_HU1-1.png)

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


## 4. Prototipo de baja calidad 

Posteriormente se realizo el prototipo de baja ccalidad considerando las historias de l@s usuari@s.
![Prototipo de baja](/src/imagenes/3_readme_PB1.png)

Con los test de usabilidad se fueron modificando los prototipos conforme a los resultados obtenidos. Se realizaron varios prototipos 

## 4. Test de usabilidad 

Se realizaron test de usabilidad en el prototipo de baja fidelidad mediante una [encuesta](https://forms.gle/UQ36ApGr8JEYXELE8) en google forms.
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


## 5. Criterios de aceptación mínimos del proyecto

### 5.1 Boilerplate

Este proyecto no incluye un _boilerplate_ completo, solo algunos archivos de
configuración basico, así es que tendrás que definir la estructura de carpetas
y escribir tus propias Pruebas Unitarias (_tests_). Para hacerlo, puedes guiarte
de los proyectos anteriores y/o organizar los archivos siguiendo una estructura
de [Modelo-Vista-Controlador](https://developer.mozilla.org/es/docs/Glossary/MVC).

En este proyecto vamos a usar una herramienta llamada
[Vite](https://es.vitejs.dev/) para empaquetar nuestros módulos y arrancar
el servidor de desarrollo, el cual provee nuestros archivos utilizando
la estrategia `Hot Module Replacement`
[(HMR)](https://es.vitejs.dev/guide/features.html#hot-module-replacement),
esto significa que cuando hagas cambios en los archivos que estén siendo
servidos, el navegador automáticamente se actualizará sin tener que refrescar
y volver a cargar todo el sitio. Debes tener especial cuidado de no tener
ninguna _dependencia circular_ en tu código ya que
[eso puede ocasionar problemas con HMR](https://es.vitejs.dev/guide/troubleshooting.html#ocurre-un-refresco-completo-en-lugar-de-hmr).
(`eslint-plugin-import` tiene una regla
[import/no-cycle](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-cycle.md)
que va a avisar si las tiene.)



### 5.3 Historias de usuario

Una vez que entiendas las necesidades de tus usuarixs, escribe las Historias de
Usuario que representen todo lo que necesitan hacer/ver en la Red Social. Cada
una de tus Historias de Usuario debe tener:

* **Criterios de Aceptación:** todo lo que debe ocurrir para satisfacer las
  necesidades del usuario.

* **Definición de terminado:** todos los aspectos técnicos que deben cumplirse
  para que, como equipo, sepan que esa historia está terminada y lista
  para publicarse. **Todas** tus Historias de Usuario (salvo excepciones), deben
  incluir estos aspectos en su Definición de Terminado (más todo lo que
  necesiten agregar):

  - Debe ser una SPA.
  - Debe ser _responsive_.
  - Deben haber recibido _code review_ de al menos una compañera de otro equipo.
  - Hicieron los _test_ unitarios
  - Testearon manualmente buscando errores e imperfecciones simples.
  - Hicieron _pruebas_ de usabilidad e incorporaron el _feedback_ de los
    usuarios como mejoras.
  - Desplegaron su aplicación y etiquetaron la versión (git tag).

### 5.4 Diseño de la Interfaz de Usuario (prototipo de baja fidelidad)

Debes definir cuál será el flujo que seguirá el usuario dentro de tu aplicación
y, con eso, diseña la Interfaz de Usuario (UI por sus siglas en inglés) que
siga este flujo.

### 5.5 Responsive

Debe verse bien en dispositivos de pantallas grandes
(computadoras/es, laptops, etc.) y pequeñas (_tablets_, celulares, etc.). Te
sugerimos seguir la técnica de _`mobile first`_ (más detalles sobre esta técnica
al final).

### 5.6 Consideraciones del comportamiento de la interfaz de usuario (UI)

Estas consideraciones te ayudarán a escribir las Definiciones de Terminado de
tus H.U.:

#### Creación de cuenta de usuario e inicio de sesión

* _Login_ con Firebase:
  - Para el _login_ y las publicaciones en el muro puedes utilizar [Firebase](https://firebase.google.com/products/database/)
  - Creación de cuenta de acceso y autenticación con cuenta de correo y
    contraseña, y también con una cuenta de Google.
* Validaciones:
  - Solamente se permite el acceso a usuarios con cuentas válidas.
  - No pueden haber usuarios repetidos.
  - La cuenta de usuario debe ser un correo electrónico válido.
  - Lo que se escriba en el campo (_input_) de contraseña debe ser secreto.
* Comportamiento:
  - Al enviarse el formulario de registro o inicio de sesión, debe validarse.
  - Si hay errores, se deben mostrar mensajes descriptivos para ayudar al
  usuario a corregirlos.

#### Muro/timeline

* Validaciones:
  - Al publicar, se debe validar que exista contenido en el _input_.
* Comportamiento:
  - Al recargar la aplicación, se debe verificar si el usuario está _logueado_
    antes de mostrar contenido.
  - Poder publicar un _post_.
  - Poder dar y quitar _like_ a una publicación. Máximo uno por usuario.
  - Llevar un conteo de los _likes_.
  - Poder eliminar un post específico.
  - Pedir confirmación antes de eliminar un _post_.
  - Al dar _click_ para editar un _post_, debe cambiar el texto por un _input_
    que permita editar el texto y luego guardar los cambios.
  - Al guardar los cambios debe cambiar de vuelta a un texto normal pero con la
    información editada.
  - Al recargar la página debo de poder ver los textos editados.

### 5.7 Consideraciones técnicas Front-end

* Separar la manipulación del DOM de la lógica (Separación de responsabilidades).
* Contar con múltiples vistas. Para esto, tu aplicación debe ser una
 [Single Page Application (SPA)](https://es.wikipedia.org/wiki/Single-page_application)
* Alterar y persistir datos. Los datos que agregues o modifiques deberán
  persistir a lo largo de la aplicación. Te recomendamos que uses
  [Firebase](https://firebase.google.com/) para eso también.

#### Pruebas unitarias (unit tests)

* Recuerda que no hay un _setup_ de **tests** definido, dependerá de
  la estructura de tu proyecto. Algo que no debes de olvidar es pensar en éstas
  pruebas, te pueden ayudar a definir la estructura y nomenclatura de tu lógica.

* Los tests unitarios deben cubrir un mínimo del 70% de _statements_, _functions_,
  _lines_, y _branches_.

### 5.8 Consideraciones técnicas UX

* Hacer al menos 2 entrevistas con usuarios.
* Hacer un  prototipo de baja fidelidad.
* Asegurarte de que la implementación en código siga los lineamientos del
  diseño.
* Hacer sesiones de _testing de usabilidad_ con el producto en HTML.

## 6. Hacker edition

Las secciones llamadas _Hacker Edition_ son **opcionales**. Si **terminaste**
con todo lo anterior y te queda tiempo, intenta completarlas. Así podrás
profundizar y/o ejercitar más sobre los objetivos de aprendizaje del proyecto.

* Permite crear posts con imágenes.
* Permite buscar usuarios, agregar y eliminar "amigos".
* Permite definir la privacidad de los _posts_ (público o solamente para amigos).
* Permite ver su muro de cualquier usuario "no-amigo" (solamente los
  posts _públicos_).
* Permite comentar o responder una publicación.
* Permite editar perfil.

## 7. Entrega

El proyecto será _entregado_ subiendo tu código a GitHub (`commit`/`push`) y la
interfaz será desplegada usando GitHub pages u otro servicio de hosting
(Firebase, Netlify, Vercel, etc) que puedas haber encontrado en el camino.
Revisa la [documentación de Vite](https://vitejs.dev/guide/static-deploy.html)
para guiarte con eso.

***

## 8. Pistas, tips y Lecturas complementarias

Súmate al canal de Slack
[#project-social-network](https://claseslaboratoria.slack.com/archives/C03SE63GFJQ)
para conversar y pedir ayuda del proyecto.

### Mobile first

El concepto de [_mobile first_](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
hace referencia a un proceso de diseño y desarrollo donde partimos de cómo se ve
y cómo funciona la aplicación en un dispositivo móvil primero, y más adelante se
ve como adaptar la aplicación a pantallas progresivamente grandes y
características específicas del entorno desktop. Esto es en contraposición al
modelo tradicional, donde primero se diseñaban los websites (o webapps) para
desktop y después se trataba de _arrugar_ el diseño para que entre en pantallas
más chicas. La clave acá es asegurarse de que desde el principio diseñan usando
la vista _responsive_ de las herramientas de desarrollador (developer tools) del
navegador. De esa forma, partimos de cómo se ve y comporta la aplicación en una
pantalla y entorno móvil.

### Múltiples vistas

En proyectos anteriores nuestras aplicaciones habían estado compuestas de una
sola _vista_ principal (una sóla _página_). En este proyecto se introduce la
necesidad de tener que dividir nuestra interfaz en varias _vistas_ o _páginas_
y ofrecer una manera de navegar entre estas vistas. Este problema se puede
afrontar de muchas maneras: con archivos HTML independientes (cada uno con su
URL) y links tradicionales, manteniendo estado en memoria y rederizando
condicionalmente (sin refrescar la página), [manipulando el historial del
navegador](https://developer.mozilla.org/es/docs/DOM/Manipulando_el_historial_del_navegador)
con [`window.history`](https://developer.mozilla.org/es/docs/Web/API/Window/history).
En este proyecto te invitamos a explorar opciones y decidir una opción
de implementación.

### Escritura de datos

En los proyectos anteriores hemos consumido (leído) datos, pero todavía no
habíamos escrito datos (salvar cambios, crear datos, borrar, ...). En este
proyecto tendrás que crear (salvar) nuevos datos, así como leer, actualizar y
modificar datos existentes. Estos datos se podrán guardar de forma remota
usando [Firebase](https://firebase.google.com/).

Para usar Firebase hay que crear un proyecto en la consola de Firebase e
instalar la dependencia `firebase` utilizando `npm`.
Lee [las instrucciones paso a paso aqui](https://firebase.google.com/docs/web/setup).

Otras:

* [Modulos: Export](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/export)
* [Modulos: Import](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/import)
* [Diseño web, responsive design y la importancia del mobile first - Media Click](https://www.mediaclick.es/blog/diseno-web-responsive-design-y-la-importancia-del-mobile-first/)
* [Mobile First: el enfoque actual del diseño web móvil - 1and1](https://www.1and1.es/digitalguide/paginas-web/diseno-web/mobile-first-la-nueva-tendencia-del-diseno-web/)
* [Mobile First - desarrolloweb.com](https://desarrolloweb.com/articulos/mobile-first-responsive.html)
* [Mobile First Is NOT Mobile Only - Nielsen Norman Group](https://www.nngroup.com/articles/mobile-first-not-mobile-only/)
