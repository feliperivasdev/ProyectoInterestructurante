# Proyecto Interestructurante

 ## Idea Inicial
Diseño de un aplicativo que registre los datos del consumo de energía de acuerdo a las actividades realizadas en casa y bajo un modelo de predicción, se pueda generar un reporte que indique el período de mayor consumo. 

El sistema permitirá el registro de electrodomésticos con sus características eléctricas (voltaje, corriente, potencia), asociando el consumo a las actividades realizadas en el hogar. Los usuarios podrán ver reportes semanales, recibir alertas y notificaciones, y utilizar predicciones para gestionar su consumo de manera eficiente. La aplicación utilizará un backend en Express, con protección JWT para autenticación, y un frontend en Angular con protección de rutas.

## Historias de Usuario

### Orden de Desarrollo de Historias de Usuario

| Título                                  | Historia de Usuario                                                                                                                                                            |
|-----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Creación de base de datos**           | Como desarrollador, necesito crear una base de datos que almacene la información de usuarios, electrodomésticos y datos de consumo energético, para que la aplicación pueda funcionar correctamente. |
| **Desarrollo del backend en Express**   | Como desarrollador, necesito implementar el backend utilizando Express para manejar la lógica de negocio, el almacenamiento de datos y la seguridad, incluyendo encriptación de contraseñas y generación de JWT. |
| **Registro de nuevos usuarios**         | Como usuario nuevo, necesito registrarme proporcionando mis datos personales, para crear una cuenta en el sistema con encriptación de contraseñas.                              |
| **Autenticación de usuario con JWT**    | Como usuario registrado, necesito iniciar sesión con mi identificación o correo electrónico y contraseña, para recibir un JWT que me permita acceder de manera segura a mi cuenta. |
| **Protección de rutas en Angular**      | Como usuario, necesito que el sistema me impida acceder a ciertas rutas si no estoy autenticado, para garantizar la seguridad de la aplicación.                                   |
| **Registro de electrodomésticos**       | Como usuario, necesito registrar electrodomésticos en mi hogar, proporcionando información como foto, marca, voltaje, corriente y potencia, para llevar un control del consumo de energía. |
| **Visualización de resumen semanal**    | Como usuario, necesito visualizar un resumen semanal del consumo de energía clasificado por actividad, para entender cuáles actividades contribuyen más a mi gasto energético.     |
| **Predecir el período de mayor consumo**| Como usuario, necesito tener un reporte predictivo sobre el período en que el consumo de energía será más alto, para planificar mi consumo y reducir el uso de energía.           |
| **Notificaciones y alertas**            | Como usuario, necesito recibir notificaciones cuando mi consumo de energía está por encima del promedio esperado, para tomar medidas inmediatas y evitar gastos innecesarios.      |
| **Almacenamiento de datos históricos**  | Como usuario, necesito que el sistema almacene mi consumo energético histórico, para generar reportes y predicciones precisas.                                                   |
| **Alerta de uso prolongado**            | Como usuario, necesito recibir una alerta cuando un electrodoméstico ha estado en uso durante un tiempo prolongado, para evitar consumo excesivo y prevenir posibles daños.        |
| **Actualización de perfil**             | Como usuario registrado, necesito poder actualizar mi información personal, como nombre, correo electrónico o dirección, para mantener mis datos actualizados.                    |

### Nuevas Historias de Usuario para el Frontend en Angular y Seguridad

| Título                                  | Historia de Usuario                                                                                                                                                            |
|-----------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Creación del frontend en Angular**    | Como desarrollador, necesito crear el frontend utilizando Angular, con una interfaz intuitiva que permita a los usuarios registrarse, iniciar sesión y visualizar su consumo de energía. |
| **Protección de rutas por rol**         | Como usuario administrador, necesito que el sistema me permita acceder a rutas específicas que no están disponibles para otros roles, para que pueda gestionar la plataforma correctamente. |
| **Encriptación de contraseñas**         | Como desarrollador, necesito implementar la encriptación de contraseñas en el backend utilizando Express y bcrypt, para garantizar la seguridad de los datos de los usuarios.     |
| **Autenticación basada en JWT**         | Como desarrollador, necesito implementar la autenticación con JWT en Express para que el frontend pueda verificar si los usuarios están autenticados antes de acceder a rutas protegidas. |

## Modelo de Predicción

### Modelo Propuesto
Se recomienda utilizar un modelo de **Regresión Lineal** o **ARIMA (AutoRegressive Integrated Moving Average)** para predecir el consumo energético. Estos modelos pueden captar patrones temporales y tendencias en el consumo de energía, permitiendo generar predicciones precisas.

### Datos Mínimos Necesarios para el Modelo de Predicción

1. **Fecha y hora**: Para capturar patrones temporales.
2. **Consumo energético**: Datos históricos del consumo de cada electrodoméstico.
3. **Electrodoméstico**: Identificación del dispositivo asociado a cada registro de consumo.
4. **Uso por actividad**: Relación entre el uso de los electrodomésticos y la actividad en el hogar.
5. **Número de personas en el hogar**: Información sobre la cantidad de personas que usan los dispositivos, lo que podría influir en el consumo.

Este modelo es ideal para el PMV, dado que el ingreso de datos es manual y no hay una gran cantidad de datos disponibles inicialmente.

### Mocup web
![2799752](https://github.com/user-attachments/assets/66bedd99-86ee-4051-9308-b890c705ffae)





