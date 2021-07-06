#admin
Sera la parte donde trabajemos con la administracion del CRUD(Create, Read, Update, Delete) en la carpeta propiedades.
Tendra su propio index(index.php)donde se hara el manejo de datos

#build
Sera la carpeta que se crea gracias a las funciones de gulp donde sera el resultado final de img(images del sitio),
css(hoja del estilo del sitio) y js(javascript del sitio) ya juntado y minificado.

#include
Tendra la carpeta config donde pondremos la conexion de base de datos en php.
Tendra la carpeta templates donde pondremos las partes de html que se repiten en todas las pestañas que tendran(header,footer,etc)
y podamos llamarlas con php desde sus respectivas pestañas.
Por ultimo tendra su propio index(app.php)donde definiremos las direciones url de los templates y
su propio funciones.php donde estara la funcion llamado de las templates desde cualquier pestaña
  
#src
Tendra img(imagenes del sitio sin modificacion)
Tendra js(donde entraran los diferentes archivos javascript) por ejemplo app.js y modernizr.js(ve si navegador soporta webp)
Tendra scss(donde trabajaremos con los archivos SASS)
Por ultimo tendra su index(app.scss) donde seran importadas todos los scss que tenemos en orden de tal manera global a expecifico

#scss
Tendra base(donde normalmente van el css global que se ira utilizando a lo largo) por ejemplo variables, mixins, botones, etc
Tendra internas(donde se pondra el estilo de las paguinas internas del sitio)
Tendra layout(donde iran los estilos segun sus secciones)

#*/
En el mismo inicio iran las pestañas que compondran nuestro sitio
Tendremos que crear (gulpfile.js) donde estaran las funciones que vamos a instalar de gulp como ser: lectura de los archivos
css, js, renderizado de las imagenes a menor tamaño luego a formato webp y por ultimos la funcion de watch donde actualiza
los cambio hechos todas las funciones 
Tendremos el archivo de package-lock donde esta la informacion de herramientas utilizadas de node_modulos
Tendremos package.json lo cual nos permite descargar las dependencias de gulp y trabajar siempre con las mismas versiones  