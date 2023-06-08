# Aviso
Hay que cambiar la environments.ts a local, ya que lo más normal es que lo uses en local. Por defecto tiene el puerto 3000 que es donde se conecta al back mongo del anterior ejercicio.

# Aplicación de Frontend de Login con Backend en Nest

¡Bienvenido a la aplicación de Frontend de Login con Backend en Nest! Esta aplicación combina un frontend de autenticación de usuarios con un backend desarrollado en Nest que gestiona la base de datos de usuarios.

## Características

- **Registro de usuarios**: La aplicación permite a los usuarios registrarse proporcionando su nombre de usuario, correo electrónico y contraseña. Estos datos se envían al backend en Nest para su almacenamiento seguro en la base de datos.

- **Inicio de sesión de usuarios**: Los usuarios pueden iniciar sesión en la aplicación utilizando su correo electrónico y contraseña. El frontend envía la información de inicio de sesión al backend en Nest, que verifica las credenciales y emite un token de autenticación válido en caso de éxito.

- **Uso de Guards**: Esta aplicación hace un uso importante de los guards en Angular para proteger las rutas y controlar el acceso a determinadas páginas o recursos. Los guards son una característica de Angular que permiten definir lógica de autorización y autenticación para controlar el acceso a rutas específicas.

## Uso de Guards

- **AuthGuard**: El AuthGuard es un guard de autenticación que verifica si un usuario está autenticado antes de permitirle acceder a una determinada ruta. Si el usuario no está autenticado, se le redirige a la página de inicio de sesión para que inicie sesión antes de acceder a la ruta protegida.

- **RoleGuard**: El RoleGuard es un guard de autorización que verifica si un usuario tiene los roles adecuados para acceder a una determinada ruta. Esto permite restringir el acceso a ciertas páginas o recursos a usuarios con roles específicos.

Los guards en esta aplicación aseguran que solo los usuarios autenticados y autorizados puedan acceder a ciertas áreas y funcionalidades de la aplicación. Esto garantiza la seguridad y protección de los datos de los usuarios, así como el control de acceso adecuado a diferentes secciones de la aplicación.

## Instalación
1. Debes levantar el backend de la anterior aplicación
2. Clona el repositorio: `git clone https://github.com/Obi-V/06-formApp.git`
3. Navega hasta el directorio del proyecto: `cd 06-formApp.git`(Tu ruta)
4. Instala las dependencias: `npm install`
5. Inicia la aplicación: `ng serve` o `ng serve -o`(Se abre automáticamente)
6. Abre tu navegador y visita: `http://localhost:4200`

## Uso

Esta serie de aplicaciones son para experimentar el funcionamiento de Angular, pero recomiendo complementar con más información y videos que podreis encontrar gratis en Youtube.

Una vez que la aplicación esté en funcionamiento, podrás registrarte, iniciar sesión y explorar las funcionalidades del frontend de login. Observa cómo los guards aseguran que solo los usuarios autenticados puedan acceder a ciertas rutas y recursos.

¡Disfruta de la aplicación de frontend de login con guards y la integración con el backend en Nest!

### Texto creado con la ayuda chatGTP
