# Minimarket WebApp

![Icono del minimercado](https://www.flaticon.es/icono-gratis/mercado_862819?term=mercado&page=1&position=1&origin=search&related_id=862819)

Esta aplicación web de Minimarket está en desarrollo y permite administrar productos, generar órdenes de compra y enviar correos utilizando MailGun API. El sistema de login de usuarios está desarrollado con Python Flask OAuth 2.0, mientras que el front-end está construido con React. El back-end se basa en Python y Flask, y la base de datos se gestiona mediante SQLAlchemy.

## Configuración

Antes de utilizar esta aplicación, asegúrate de realizar los siguientes pasos de configuración:

### Configuración de MailGun

1. Reemplaza `api_key` y `api_domain` en `api/routes` con tus propias credenciales obtenidas de MailGun.

### Configuración de Google Login

Para configurar el inicio de sesión con Google, sigue estos pasos:

1. Cambia la variable `clientId` en `component/glogin` con el ID de cliente que obtuviste de Google Developers.
2. Asegúrate de registrarte primero con la misma dirección de correo electrónico utilizada en Google Developers.

## Funcionalidades

- **Sistema de login de usuarios**: Implementado con Python Flask OAuth 2.0 para autenticar a los usuarios en la aplicación.
- **Carga de productos desde la base de datos**: La aplicación carga los productos desde una base de datos y permite su modificación, adición y eliminación.
- **Generación de órdenes de compra**: Los visitantes pueden generar órdenes de compra seleccionando los productos que desean adquirir.
- **Envío de correos utilizando MailGun API**: Se utiliza la API de MailGun para enviar correos con los detalles de la compra a los usuarios.

## Instalación

Sigue estos pasos para instalar y ejecutar la aplicación:

1. Clona este repositorio: `git clone https://github.com/tu_usuario/tu_repositorio.git`
2. Instala las dependencias del back-end: `pipenv install`
3. Instala las dependencias del front-end: `npm install`
4. Inicia el servidor back-end: `pipenv run start`
5. Inicia el servidor front-end: `npm run start`

## Contribución

Si deseas contribuir a este proyecto, siéntete libre de abrir una nueva solicitud de extracción. Agradezco cualquier contribución y sugerencia para mejorar este proyecto.

## Contacto

Si tienes alguna pregunta o consulta sobre este proyecto, puedes contactarme por correo electrónico a example@example.com.

Espero que esto te sea útil. Si tienes alguna otra pregunta, ¡no dudes en preguntar!
