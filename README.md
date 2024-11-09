# Proyecto Interestructurante.

 ## Idea Inicial
Diseño de un aplicativo que registre los datos del consumo de energía de acuerdo a las actividades realizadas en casa y bajo un modelo de predicción, se pueda generar un reporte que indique el período de mayor consumo. 

## Tecnologías Usadas
- Base de Datos: Supabase para el almacenamiento de información de usuarios, electrodomésticos, y datos históricos de consumo energético.

- Framework Frontend: Angular para el desarrollo de una interfaz intuitiva y dinámica, que permita a los usuarios registrarse, iniciar sesión, y acceder a reportes detallados de consumo energético.

- Framework Backend: Express en Node.js para la creación de una API segura que gestione la lógica de negocio y la autenticación basada en JWT.



El sistema permitirá el registro de electrodomésticos con sus características eléctricas (voltaje, corriente, potencia), asociando el consumo a las actividades realizadas en el hogar. Los usuarios podrán ver reportes semanales, recibir alertas y notificaciones, y utilizar predicciones para gestionar su consumo de manera eficiente. La aplicación utilizará un backend en Express, con protección JWT para autenticación, y un frontend en Angular con protección de rutas.
  # La recolección de datos se hara mediante el siguiente formulario
  - Formulario => https://forms.gle/UerTyHWJV8zt9y1R9
## Historias de Usuario

### Orden de Desarrollo de Historias de Usuario

| Actividad                                         | Responsable                                        | Periodo de entrega |
|---------------------------------------------------|----------------------------------------------------|---------------------|
| **Sprint 1**                                      |                                                    |                     |
| Compra de dispositivo para medición y registro de datos | Todas las binas                                    | Viernes 8/11/24    |
| Creación de base de datos en Supabase             | Bina1                                             | Jueves 7/11/24     |
| Configuración de Backend en Express               | Bina2                                             | Jueves 7/11/24     |
| Gestión de usuarios – CRUD de Tablas correspondientes (encriptación contraseñas) | Bina3          | Jueves 7/11/24     |
| **Sprint 2**                                  |                                                    |                     |
| Gestión de electrodomésticos - CRUD               | Bina3                                             | Jueves 14/11/24    |
| Autenticación JWT                                 | Bina1                                             | Jueves 14/11/24    |
| Notificaciones de consumo                         | Bina2                                             | Jueves 14/11/24    |
| Conexión IoT                                      | Bina3                                             | Jueves 14/11/24    |
| Revisión                                          | Bina4                                             | Jueves 14/11/24    |
| Diseño inicial del frontend en Angular            | Bina1                                             | Viernes 15/11/24    |
| Protección de rutas en Angular                    | Bina2                                             | Viernes 15/11/24    |
| Documentación total                               | Bina4                                             | Viernes 15/11/24    |
| Despliegue                                        | Docente                                           |                     |

### Integrantes de las Binas

- **Bina1**: Cristian Camilo Hurtado Jimenez, Geraldine Tatiana Criollo
- **Bina2**: Aslly Ivonne Zuñiga, Ximena Tatiana Diaz
- **Bina3**: Felipe Santiago, Luis Alejandro
- **Bina4**: Felipe Gustin, Jorge Luis Andrade

**Presentación del evento**: Jorge Luis Andrade y Felipe Gustin

### Datos Mínimos Necesarios para el Modelo de Predicción

1. **Fecha y hora**: Para capturar patrones temporales.
2. **Consumo energético**: Datos históricos del consumo de cada electrodoméstico.
3. **Electrodoméstico**: Identificación del dispositivo asociado a cada registro de consumo.
4. **Uso por actividad**: Relación entre el uso de los electrodomésticos y la actividad en el hogar.
5. **Número de personas en el hogar**: Información sobre la cantidad de personas que usan los dispositivos, lo que podría influir en el consumo.

Este modelo es ideal para el PMV, dado que el ingreso de datos es manual y no hay una gran cantidad de datos disponibles inicialmente.

### Mocup web
![2799752](https://github.com/user-attachments/assets/66bedd99-86ee-4051-9308-b890c705ffae)

### Modelo Entidad Relación
![Diagram 1](https://github.com/user-attachments/assets/fccb0444-0011-4c63-90ad-57e623cf0926)






