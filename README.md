# **Social Data**

### Una nueva manera de descubrir los datos del desarrollo social en tu país.

## **Índice**

- [Preámbulo](#Preámbulo)
- [Definición del Proyecto SocialData](#definición-del-producto-social-data)
- [Objetivos del Proyecto](#objetivos-del-proyecto)
- [Historias de usuario](#historias-de-usuario)
- [Diseño de la Interfaz de Usuario](#diseño-de-la-interfaz-de-usuario)
- [Prototipo de baja fidelidad](#prototipo-de-baja-fidelidad)
- [Prototipo de alta fidelidad](#prototipo-de-alta-fidelidad)
- [Testeos de usabilidad](#testeos-de-usabilidad)
- [UX](#UX)
- [Evaluación Heurística - UX](#evaluación-heurística-UX)
- [Contenido de referencia](#contenido-de-referencia)
- [Diseño de experiencia de usuario](#diseño-de-experiencia-de-usuario)
- [Test Unitarios](#Test-Unitarios)
- [Desarrollo Front-end](#Desarrollo-front-end)
- [Herramientas](#herramientas)
- [Checklist](#checklist)

# Preámbulo

El Grupo Banco Mundial, una de las fuentes más importantes de financiamiento y conocimiento para los países en desarrollo, está integrado por cinco instituciones que se han comprometido a reducir la pobreza, aumentar la prosperidad compartida y promover el desarrollo sostenible, realizando diversos estudios que contiene datos de series cronológicas sobre una variedad de temas.

No obstante, los datos por sí mismos son de poca utilidad. Para que esas grandes cantidades de datos se conviertan en **información** fácil de leer para los usuarios, necesitamos entender y procesar estos datos.

**SocialData** es una herramienta de análisis que contiene colecciones de indicadores del desarrollo del Banco Mundial, compilados a partir de fuentes internacionales reconocidas oficialmente. Una manera simple de
hacerlo es creando _interfaces_ y _visualizaciones_.

# Definición del Proyecto SocialData

**Social Data** presenta los datos más actuales y precisos disponibles sobre el desarrollo mundial e incluye estimaciones nacionales e internacionales, basándose en el ámbito de fuerza laboral, desempleo, justificación de la violencia, nivel de educación o instrucción e inscripción escolar e igualdad de género.

Dirigido especialmente para ciudadanos comunes, y/ó profesionales en el área de Economía y Desarrollo Social, que deseen encontrar análisis, a través de resultados que no son cuantificables, de manera de detectar y comparar las necesidades en la Sociedad, contribuyendo así, en el diseño y aplicación de estadísticas, en materia de desarrollo social, especialmente aquellas destinadas a erradicar la pobreza y brindar protección a las personas o grupos vulnerables, promoviendo la movilidad e integración.

A la hora de representar los resultados de un análisis estadístico de un modo adecuado, son varias las publicaciones que podemos consultar. Aunque se aconseja que la presentación de datos numéricos se haga habitualmente por medio de tablas, en ocasiones un diagrama o un gráfico pueden ayudarnos a representar de un modo más eficiente nuestros datos.

# Objetivos del Proyecto

En este Proyecto se abordará la representación gráfica de los resultados de un estudio, constatando su utilidad en el proceso de análisis estadístico y la presentación de datos. Se describirán dos de los distintos tipos de gráficos que podemos utilizar y su correspondencia con las distintas etapas del proceso de análisis.

Cuando se dispone de datos de una población, y antes de abordar análisis estadísticos más complejos, un primer paso consiste en presentar esa información de forma que ésta se pueda visualizar de una manera más sistemática y resumida. Los datos que nos interesan dependen, en cada caso, del tipo de variables que estemos manejando.

# Historias de usuario

## Usuario Nº1

_Yo, como ciudadano de Chile, quiero ver la data de Desarrollo Social relacionada a mi país, para mantenerme informado sobre el comportamiento de estos indicadores en mi Nación._

**Criterios de aceptación:**

Dentro de la página se permite al usuario elegir entre un país u otro, para mostrar únicamente la data de su interés.

## Usuario Nº2

_Yo, como profesional en el área de economía y desarrollo social, quiero ver la información de los indicadores de manera gráfica, para visualizar más fácilmente los resultados de los estudios realizados y conseguir puntos de inflexión dentro de estos._

**Criterios de aceptación:**

La página muestra gráficos amigables donde los puntos de inflexión tienen un color particular.

# Diseño de la Interfaz de Usuario

## El problema:

Al examinar un archivo con datos del Banco Munidal, apareció la interrogante de como mostrar dichos datos de manera amigable a los usuarios. Y lograr que cualquier persona, sin importar cual sea su interés, pudiera encontrar estos archivos organizados, y representados gráficamente.

Para empezar el proceso de investigación lo primero que realizamos fue una encuesta para ver que tan empapado en el tema estaban nuestros posibles usuarios, así como saber su interés en estos temas y como pensaban ellos que debía ser la mejor manera para mostrar los resultados de estos exhaustivos estudios realizados por el Banco Mundial.

## Planificación y programación del desarrollo (Trello)

Para poder organizarnos y lograr los objetivos de nuestro proyecto, nos organizamos con la herramienta Trello. Dividimos nuestras tareas por Historias de usario, y completamos los objetivos de nuestro desarrollo. Puedes revisar nuestro Trello en el siguiente Link:

[Trello Proyecto Social Data](https://trello.com/b/7BWVN9vA/proyecto-data-lovers-banco-mundial)

![Trello Social Data](https://github.com/adrievelyn/SCL010-data-lovers/blob/gh-pages/src/images/Readme_images/Trello_Social_Data.PNG?raw=true)

## Encuestas realizadas:

Lo primero fue realizar un boceto de la encuesta que queríamos llevar a cabo. El el siguiente [link](https://www.notion.so/danisalermi/Google-Form-Encuesta-a-usuarios-94b0ef3dbb6a42d3884a6bd69baec051) Se puede ver el proceso de diseño de la encuesta.

Esperábamos poder encontrar como consideran los usuarios que se debe filtrar una data de este tipo, la cual incluye datos para 4 países, para diferentes indicadores en años desde 1960 al 2017.

Le encuesta fue aplicada en una población de 24 personas, las cuales nos dieron su opinión de los temas antes mencionados. [Revisar encuesta](https://forms.gle/vHn457ttTPfKUPTEA)

### Resultados de las encuestas:

![Resultados pregunta 1](https://raw.githubusercontent.com/adrievelyn/SCL010-data-lovers/gh-pages/src/images/Readme_images/Pregunta1.png)

![Resultados Pregunta 2](https://github.com/adrievelyn/SCL010-data-lovers/blob/gh-pages/src/images/Readme_images/Pregunta2.png?raw=true)

![Resultados pregunta 3](https://github.com/adrievelyn/SCL010-data-lovers/blob/gh-pages/src/images/Readme_images/Pregunta3.png?raw=true)

![Resultados pregunta 4](https://github.com/adrievelyn/SCL010-data-lovers/blob/gh-pages/src/images/Readme_images/Pregunta4.png?raw=true)

![Resultados pregunta 5](https://github.com/adrievelyn/SCL010-data-lovers/blob/gh-pages/src/images/Readme_images/Pregunta5.png?raw=true)

![Resultados pregunta 6](https://github.com/adrievelyn/SCL010-data-lovers/blob/gh-pages/src/images/Readme_images/Pregunta6.png?raw=true)

![Resultados pregunta 7](https://github.com/adrievelyn/SCL010-data-lovers/blob/gh-pages/src/images/Readme_images/Pregunta7.png?raw=true)

![Resultados pregunta 8](https://github.com/adrievelyn/SCL010-data-lovers/blob/gh-pages/src/images/Readme_images/Pregunta8.png?raw=true)

![Resultados pregunta 9](https://github.com/adrievelyn/SCL010-data-lovers/blob/gh-pages/src/images/Readme_images/Pregunta9.png?raw=true)

![Resultados pregunta 10](https://github.com/adrievelyn/SCL010-data-lovers/blob/gh-pages/src/images/Readme_images/Pregunta10.png?raw=true)

![Resultados pregunta 11](https://github.com/adrievelyn/SCL010-data-lovers/blob/gh-pages/src/images/Readme_images/Pregunta11.png?raw=true)

### Conclusiones de las encuestas:

1.  Más de la mitad de nuestros encuestados (54,2%) habián visto con anterioridad, estudios sobre el desarrollo social.
2.  Los sitios web más visitados por nuestros encuestados, que contienen este tipo de estudios son (tomar en cuenta que un usuario podía seleccionar más de 1 opción): Unicef (7 encuestados), Banco Mundial (7 encuestados), ONU (5 encuestados), Ministerios locales (5 encuestados).
3.  Los encuestados afirman que en estas páginas los datos son mostrados en su mayoría con gráficos (14 encuestados), y cuadros de datos (11 encuestados).
4.  50% de las personas habián escuchado sobre los estudios del banco mundial.
5.  Mientras tanto, sólo el 25% había visitados alguna vez la página web del Banco Mundial.
6.  Al preguntarles cual es la mejor manera para ellos de visualizar grandes cantidades de data, 15 de ellos coincidieron que los gráficos era lo más apropiado y 9 encuestados consideran que mapas demográficos.
7.  50% de los encuestados concluyeron que la mejor manera de filtrar una data que tiene indicadores, países y años, es por país.
8.  62,5% de la personas encuestadas respondieron que si pudieran ver un dato relevante sobre los indicadores, sería el valor promedio de los datos, para un indicador.

### Decisiones de diseño:

Una vez realizadas las encuestas y analizados los resultados, tomamos decisiones de diseño acorde a las necesidades de los usuarios.

#### Primera iteración:

Al observarlo se nota como era un flujo completo, donde se le permite al usuario filtrar por país, indicador o año. Al tener este flujo tan completo, hacía que los tiempos de desarrollo no fueran acorde a los necesitados. Por lo que luego de mostrar este flujo a varias compañeras y coach. Se decidió realizar otra iteración para el proyecto.
![Primera iteración del flujo](https://github.com/adrievelyn/SCL010-data-lovers/blob/gh-pages/src/images/Readme_images/iteracion_flujo_1.jpg?raw=true)

#### Segunda iteración:

En la segunda iteración se puede observar un flujo más sencillo. Donde basadas en las necesidades de nuestros usuarios (encuestas) se le permite filtrar al usuario por país, posteriormente seleccionar un indicador. y al final obtener una data que se muestra de manera gráfica y mediante cuadros de datos.
![Segunda iteración del flujo](https://github.com/adrievelyn/SCL010-data-lovers/blob/gh-pages/src/images/Readme_images/iteracion_flujo_2.jpg?raw=true)

#### Tercera iteración.

Al realizar una segunda ronda de feedbacks y comentarios con nuestras compañeras y usuarios, pudimos ver que aún no estábamos tomando en cuenta todos los requerimientos solicitados por estos en las encuestas. Así que replantemos la 2da iteración dando a lugar una nueva, donde si bien se elimina mostrar la data con cuadros de datos, se agrega el poder visualizar los resultados del promedio y el valor máximo para el indicador seleccionado.
![Tercera iteración del flujo](https://github.com/adrievelyn/SCL010-data-lovers/blob/gh-pages/src/images/Readme_images/iteracion_flujo_3.jpg?raw=true)

## Prototipo de baja fidelidad

A partir de las iteraciones del flujo se procede a hacer sketch del prototipo para mostrar los resultados. Procurando en todo momento mantener una estética simple, minimalista y amigable para el usuario.

Los resultados obtenidos son:

### Primera iteración:

![Baja Fidelidad pantalla 1](https://github.com/adrievelyn/SCL010-data-lovers/blob/gh-pages/src/images/Readme_images/Baja_Fidelidad_1.jpg?raw=true)

![Baja Fidelidad pantalla 2](https://github.com/adrievelyn/SCL010-data-lovers/blob/gh-pages/src/images/Readme_images/Baja_Fidelidad_2.jpg?raw=true)

![Baja Fidelidad pantalla 3 (Primera iteración)](https://github.com/adrievelyn/SCL010-data-lovers/blob/gh-pages/src/images/Readme_images/Baja_Fidelidad_3.jpg?raw=true)

### Segunda iteración:

Luego de mostrar el prototipo a compañera y coach, notamos que la última pantalla presentaba muchas dudas y dificultades a la hora de escoger el indicador, por ello se procedió a realizar una segunda iteración de esta, basándonos además es nuestras historias de usuario antes descritas, obteniendo como resultado lo siguiente:

![Baja fidelidad pantalla 3 (Segunda iteración)](https://github.com/adrievelyn/SCL010-data-lovers/blob/gh-pages/src/images/Readme_images/Baja_Fidelidad_4.jpg?raw=true)

## Prototipo de alta fidelidad

Al finalizar con el diseño del prototipo de baja fidelidad, se procede a realizar el diseño en una aplicación más confiable e incorporando los elemento de diseño que ayuden al usuario a lograr el fin de la página: mostrar los datos de manera gráfica más amigable.
El resultado del diseño en el programa Adobe Xd, es el siguiente:

### Primera iteración:

![Alta fidelidad página 1](https://github.com/adrievelyn/SCL010-data-lovers/blob/gh-pages/src/images/Readme_images/Alta_Fidelidad_1.PNG?raw=true)

![Alta fidelidad página 2](https://github.com/adrievelyn/SCL010-data-lovers/blob/gh-pages/src/images/Readme_images/Alta_Fidelidad_2.PNG?raw=true)

![Alta fidelidad página 3 (iteración 1)](https://github.com/adrievelyn/SCL010-data-lovers/blob/gh-pages/src/images/Readme_images/Alta_Fidelidad_3_iteracion_1.PNG?raw=true)

Una vez que obtuvimos el prototipo y durante el desarrollo en código del mismo, nos percatamos de la dificultad para el usuario que era ver todo en una sola área de la página sin tener alguna separación, por lo que se procedió a realizar una segunda iteración de la última página del prototipo, resultando:

### Segunda iteración:

![Alta fidelidad página 3 (Segunda iteración)](https://github.com/adrievelyn/SCL010-data-lovers/blob/gh-pages/src/images/Readme_images/Alta_Fidelidad_3_iteracion_2.PNG?raw=true)

De igual manera para revisar el resto de los prototipos se puede consultar nuestro link a [Adobe Xd](https://xd.adobe.com/view/708dd424-1a1a-4778-5897-d283ec68806b-06bc/)

# Testeos de usabilidad

Para los testeos de usabilidad, se elaboró una pequeña guía para presentarnos ante el usuario así cómo para conocerlo a el, la misma incluyó una breve descripción del proyecto, presentación del entrevistador, instrucciones del testeo, siempre recalcando al voluntario que en ningún momento estaban siendo a puestos a prueba ellos, sino el sistema. Por razones de tiempo sólo alcanzamos a realizar dos testeos, sin embargo pudimos notar un par de errores los cuales fueron:

- El usuario al solicitarle que fuera al inicio de la página, lo intentó a través del logo, el cual no se encontraba linkeado. Problema resuelto colocando en una etiqueta a, la imagen del logo.
- Otro usuario no alcanzó a notar por su cuenta que los indicadores se encontraban ordenado de la A - Z. Cabe destacar que la persona no se encontraba tan familiarizada con el uso de computadores.

Los links para las entrevistas son:
[Test de usabilidad N1](https://drive.google.com/file/d/1J3lqY7D_uMt9ZtSQq96DCjf9j4OimNjz/view?usp=sharing) Persona no interactúa de manera frecuente con ordenadores.

[Test de usabilidad N2](https://drive.google.com/file/d/1MBAb8iq3a8VbJ7NXAmc9DAasKTXwmDS2/view?usp=sharing) Estudiante de Laboratoria.

# UX

## Evaluación Heurística UX

[Evaluación Heurística del proyecto Social Data](https://docs.google.com/spreadsheets/d/1bwD1CC624WAA-uuhRt7R2I9RryOh7OGBcCy0hZXUxtk/edit#gid=0)

## Zeplin

Para ver más fácil los elementos de CSS de nuestra página web, la misma se exportó a Zeplin para poder utilizar estos formatos durante el desarrollo.

[Zeplin proyecto Social Data](https://zpl.io/a890WkK)

## Adobe Xd

Para ver más información sobre el diseño de nuestros prototipos de alta fidelidad, puedes seguir el siguiente enlace:

[Adobe Xd Proyecto Social Data](https://xd.adobe.com/view/708dd424-1a1a-4778-5897-d283ec68806b-06bc/)

# Contenido de referencia

Para la elaboración del proyecto se utilizaron diferente herramientas y fuentes de información, las herramientas son descritas algunos puntos más abajo. En esta sección aprovecharemos de dejar linkeados las páginas de las cuales extraímos información relevante para el correcto desarrollo y desempeño de la página web Social Data:

- [Google Fonts - Roboto](https://fonts.google.com/specimen/Roboto?selection.family=Roboto)

## ¿Dónde buscar ilustraciones?

- [unDraw | Colorful illustrations](https://undraw.co/illustrations)

- [Illustrations Gallery](https://gallery.manypixels.co/)

- [Free vector illustrations - Ouch.pics](https://icons8.com/ouch/)

## Fuentes de información:

### Recorrido de un objeto con for:

- [for in en Javascript](https://desarrolloweb.com/articulos/recorridos-propiedades-objetos-javascript-forin.html)

- [for...in](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Sentencias/for...in)

### Generar un select a partir del DOM

- [HTML DOM Select Object](https://www.w3schools.com/jsref/dom_obj_select.asp)

### Gráficos de línea

- [Line · Chart.js documentation](https://www.chartjs.org/docs/latest/charts/line.html)

### Gráficos de Donut (para valores máximos y mínimos)

- [Doughnut & Pie · Chart.js documentation](https://www.chartjs.org/docs/latest/charts/doughnut.html)

# Diseño de experiencia de usuario

## Diseño

Para el diseño de la página el foco principal esta basado en las necesidades del usuario: ¿Qué información necesitan visualizar?, ¿Desea ver la data de un país en específico, ó hacer comparaciones entre varios países?, ¿Desea ver valores máximo y promedio?.
Debido a estas razones se crea una página simple y directa donde fácilmente el usuario pueda acceder a la data que busca.

## Criterios de diseño:

- Forma: Se mantuvo el mismo menú durante todo el recorrido de la página, para que el usuario no tenga confusiones y pueda volver a las diferentes secciones.

- Color: La página esta hecha con colores agradables para llamar la atención del usuario y pueda mantenerse en la página el tiempo que estime necesario sin agotar la vista.
  La página esta en base a los tonos, gris claro, morado, azul, verde claro y verde medio.

- Color de Tipografía: blanco y negro para que sea más legible la información.

- Tipografía: Roboto letras simples con contraste para que sean legibles.

- Se elaboró además una pequeña guía de estilos para mantener la harmonía dentro del diseño de la página: ![Guía de estilos](https://github.com/adrievelyn/SCL010-data-lovers/blob/gh-pages/src/images/Readme_images/Guia_de_Estilos.png?raw=true)

# Test Unitarios

Se realizaron pruebas unitarias con la ayuda de [mocha.js](https://mochajs.org/), en ellos hicimos pruebas para comprobar el tipo de las estructuras repetitivas en el archivo JavaScript que maneja la data. El total de test realizados fue de 9.

En estos también se comprobó que dichas funciones estuvieran realizando correctamente sus tareas, se les pasó como parámetro una pequeña data de ejemplo para realizar cálculos con resultados previamente conocidos y definidos. Los resultados obtenidos con estos test se observan en la siguiente imagen:

![Resultados Test unitarios](https://github.com/adrievelyn/SCL010-data-lovers/blob/gh-pages/src/images/Readme_images/Test_Unitarios.PNG?raw=true)

# Desarrollo Front-end

- [Unidad de testing en curso de JavaScript en LMS](https://lms.laboratoria.la/cohorts/scl-2019-06-bc-core-scl010/courses/javascript/11-testing/00-opening)
- [Unidad de arreglos en curso de JavaScript en LMS](https://lms.laboratoria.la/cohorts/scl-2019-06-bc-core-scl010/courses/javascript/04-arrays/01-arrays)
- [Unidad de objetos en curso de JavaScript en LMS](https://lms.laboratoria.la/cohorts/scl-2019-06-bc-core-scl010/courses/javascript/05-objects/01-objects)
- [Unidad de funciones en curso de JavaScript en LMS](https://lms.laboratoria.la/cohorts/scl-2019-06-bc-core-scl010/courses/javascript/03-functions/00-opening)
- [Unidad de DOM en curso de Browser JavaScript en LMS](https://lms.laboratoria.la/cohorts/scl-2019-06-bc-core-scl010/courses/browser/02-dom/00-opening)
- [Array en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array)
- [Array.sort en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/sort)
- [Array.map en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map)
- [Array.filter en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/filter)
- [Array.reduce en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/reduce)
- [Array.forEach en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/forEach)
- [Object.keys en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/keys)
- [Object.entries en MDN](https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/entries)
- [Fetch API en MDN](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API)
- [json.org](https://json.org/json-es.html)

### **Herramientas**

- [Git](https://git-scm.com/)
- [GitHub](https://github.com/)
- [GitHub Pages](https://pages.github.com/)
- [Node.js](https://nodejs.org/)
- [Chart.js](https://www.chartjs.org/)
- [Google Forms](https://www.google.com/intl/es-419_cl/forms/about/)
- [Notion](https://www.notion.so/danisalermi/Data-Lovers-a1d9b012053c4488bd71df09837e5a42)

## **Checklist**

- [x] Usa VanillaJS.
- [x] No hace uso de `this`.
- [x] Pasa linter (`npm pretest`)
- [x] Pasa tests (`npm test`)
- [x] Pruebas unitarias cubren un mínimo del 70% de statements, functions y
      lines y branches.
- [x] Incluye _Definición del producto_ clara e informativa en `README.md`.
- [x] Incluye historias de usuario en `README.md`.
- [x] Incluye _sketch_ de la solución (prototipo de baja fidelidad) en
      `README.md`.
- [x] Incluye _Diseño de la Interfaz de Usuario_ (prototipo de alta fidelidad)
      en `README.md`.
- [x] Incluye link a Zeplin en `README.md`.
- [x] Incluye el listado de problemas que detectaste a través de tests de
      usabilidad en el `README.md`.
- [x] UI: Muestra lista y/o tabla con datos y/o indicadores.
- [x] UI: Permite ordenar data por uno o más campos (asc y desc).
- [x] UI: Permite filtrar data en base a una condición.
