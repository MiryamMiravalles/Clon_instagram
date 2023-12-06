# CLON_INSTAGRAM

InstaHAB

PROGRAMADORES

Grupo C, Clon de Instagram
Jazmín Durand Chávez
Alba Fresnillo Arévalo 
Miryam Miravalles Zapata 
Carlos Marhuenda Bru

CARACTERÍSTICAS DEL PROYECTO

TÍTULO:

App de fotos (clon de Instagram).

DESCRIPCIÓN:

Implementar una API que permita publicar fotos (añadiendo o no textos) y que otras personas puedan verlas.

USUARIOS ANÓNIMOS:

Ver las últimas fotos publicadas por otros usuarios.

Ver el perfil de un usuario con su galería de fotos.

Buscar fotos (por su texto descriptivo).

Login.

Registro.

USUARIOS REGISTRADOS PUEDEN ADEMÁS:

● Hacer una publicación de una foto (la foto debe ajustarse automáticamente a un tamaño máximo y unas proporciones establecidas por la plataforma). Y añadirle una descripción.

● Hacer/Quitar un “like” a una foto.

● Opcional:
○ Gestión del perfil (cambios en los datos de registro).
○ Comentar una foto (no se permiten comentarios a comentarios).

RECORDATORIOS: 

La entrega debe hacerse antes del martes 19/12/23 a las 18:00 a mi e-mail (stefano.peraldini@hackaboss.com). Lo tenéis en el calendario.

Para este proyecto únicamente tenéis que enviarme el link al repositorio.

En los pdf:

○ Hay una sencilla descripción de una plataforma, vosotros tendréis que implementar solo el Backend/API. Nada de HTML y CSS, el Front lo haremos en el proyecto 3 con React.

○ Cuando se habla de usuario anónimo se entiende una persona que usa la plataforma sin hacer login.

Todos los miembros del equipo debéis tener commits y aparecer como colaboradores en el repositorio.

Dentro del repositorio debe haber un archivo initDB.js que genere la estructura de la base de datos (no es necesario que incluya datos).

El repositorio también debe incluir la colección de Postman con todos los endpoints correctamente construidos (con su body en caso de necesitarlo).

Aquí os dejo el vídeo de cómo crear y exportar una colección de postman:
https://www.loom.com/share/5933cf4ace734702951450a273995e47?sid=77801fe8-f9e6-47de-a0e7-4cdbd82879c8

Podéis pedir tutorías, aunque concretamente para el proyecto solamente se darán durante la semana que viene y hasta el día de la entrega.

PD: el video del prework de la semana 13 puede ser de gran ayuda.









End Points:

Identificar las funcionalidades principales:
Revisa detalladamente las características del proyecto y haz una lista de las acciones que los usuarios podrán realizar. Por ejemplo, publicar una foto, ver fotos de otros usuarios, dar "like", buscar fotos, entre otros.


Definir los recursos:
Para cada acción identificada, piensa en los recursos necesarios. Por ejemplo, para publicar una foto, necesitarás un endpoint que maneje la subida de imágenes y texto descriptivo.


Mapear los verbos HTTP a las acciones:
Asocia cada acción a un verbo HTTP que mejor represente la operación a realizar. Por ejemplo:
GET para solicitar datos (ver fotos, perfil de usuario, etc.).
POST para enviar datos al servidor (publicar foto, hacer login, etc.).
PUT o PATCH para actualizar datos (añadir/quitar "like", modificar perfil, etc.).
DELETE para eliminar recursos (eliminar foto, eliminar comentario, etc.).

Diseñar la estructura de los endpoints:
Basándote en los recursos y los verbos HTTP, diseña la estructura de tus endpoints. Por ejemplo:
/api/photos: Obtener las últimas fotos publicadas.
/api/users/:id/photos: Obtener la galería de fotos de un usuario específico.
/api/photos/search?query=texto: Buscar fotos por su texto descriptivo.
/api/auth/login: Iniciar sesión.
/api/auth/register: Registrar un nuevo usuario.
/api/photos/upload: Publicar una foto.
/api/photos/:id/like: Dar/quitar "like" a una foto.
/api/users/:id/profile: Obtener/modificar el perfil de un usuario.




Documentar los endpoints:
Crea una colección en Postman que contenga todos estos endpoints correctamente estructurados. Esto será útil para ti y tu equipo, así como para facilitar la comprensión de la API para posibles usuarios.


Implementar y probar:
Desarrolla la lógica correspondiente para cada endpoint y realiza pruebas exhaustivas para asegurarte de que funcionen como se espera. También, verifica que el archivo initDB.js genere la estructura de la base de datos de acuerdo con los requerimientos del proyecto.

