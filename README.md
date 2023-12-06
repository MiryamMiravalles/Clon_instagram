# CLON_INSTAGRAM

PROGRAMADORES

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

END POINTS:

- Identificar las funcionalidades principales:
Revisa detalladamente las características del proyecto y haz una lista de las acciones que los usuarios podrán realizar. Por ejemplo, publicar una foto, ver fotos de otros usuarios, dar "like", buscar fotos, entre otros.

- Definir los recursos:
Para cada acción identificada, piensa en los recursos necesarios. Por ejemplo, para publicar una foto, necesitarás un endpoint que maneje la subida de imágenes y texto descriptivo.

- Mapear los verbos HTTP a las acciones:
Asocia cada acción a un verbo HTTP que mejor represente la operación a realizar. Por ejemplo:
GET para solicitar datos (ver fotos, perfil de usuario, etc.).
POST para enviar datos al servidor (publicar foto, hacer login, etc.).
PUT o PATCH para actualizar datos (añadir/quitar "like", modificar perfil, etc.).
DELETE para eliminar recursos (eliminar foto, eliminar comentario, etc.).

- Diseñar la estructura de los endpoints:
Basándote en los recursos y los verbos HTTP, diseña la estructura de tus endpoints. Por ejemplo:
/api/photos: Obtener las últimas fotos publicadas.
/api/users/:id/photos: Obtener la galería de fotos de un usuario específico.
/api/photos/search?query=texto: Buscar fotos por su texto descriptivo.
/api/auth/login: Iniciar sesión.
/api/auth/register: Registrar un nuevo usuario.
/api/photos/upload: Publicar una foto.
/api/photos/:id/like: Dar/quitar "like" a una foto.
/api/users/:id/profile: Obtener/modificar el perfil de un usuario.

- Documentar los endpoints:
Crea una colección en Postman que contenga todos estos endpoints correctamente estructurados. Esto será útil para ti y tu equipo, así como para facilitar la comprensión de la API para posibles usuarios.

- Implementar y probar:
Desarrolla la lógica correspondiente para cada endpoint y realiza pruebas exhaustivas para asegurarte de que funcionen como se espera. También, verifica que el archivo initDB.js genere la estructura de la base de datos de acuerdo con los requerimientos del proyecto.

