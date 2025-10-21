# SGE "chat pro bv" - Sistema de Gestión Escolar Moderno

## Descripción

**SGE "chat pro bv"** es un sistema de gestión escolar moderno diseñado para colegios públicos en Lima, Perú, con un enfoque en la simplicidad, el diseño *mobile-first* y la digitalización de procesos clave. La plataforma está construida para atender las necesidades de directores, docentes, estudiantes y apoderados, unificando la información en un solo lugar.

Este frontend está desarrollado con React, Vite, TypeScript y Tailwind CSS, y ha sido refactorizado para funcionar de manera desacoplada, listo para consumir una API RESTful externa (por ejemplo, construida en Cloud Run).

## Requisitos Previos

Para ejecutar este proyecto, necesitarás tener instalado lo siguiente en tu máquina local:

-   [Node.js](https://nodejs.org/) (versión 18.x o superior recomendada)
-   [npm](https://www.npmjs.com/) (generalmente viene con Node.js) o [yarn](https://yarnpkg.com/)

## Instalación

Sigue estos pasos para configurar el proyecto en tu entorno de desarrollo:

1.  **Clona el repositorio:**
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd <NOMBRE_DEL_PROYECTO>
    ```

2.  **Instala las dependencias:**
    Abre una terminal en la raíz del proyecto y ejecuta el siguiente comando para instalar todas las librerías necesarias.
    ```bash
    npm install
    ```

## Ejecución en Desarrollo

Para iniciar la aplicación en modo de desarrollo con recarga en caliente:

1.  **Crea el archivo de entorno:**
    Crea un archivo llamado `.env` en la raíz del proyecto y añade la siguiente línea para configurar la URL de la API de desarrollo:
    ```
    VITE_API_BASE_URL=http://localhost:8080/api
    ```

2.  **Inicia el servidor:**
    Ejecuta el siguiente comando. Vite iniciará un servidor de desarrollo local.
    ```bash
    npm run dev
    ```

3.  **Abre la aplicación:**
    Abre tu navegador y ve a la dirección que aparece en la terminal (generalmente `http://localhost:5173`).

## Build para Producción

Para compilar y optimizar la aplicación para su despliegue en un entorno de producción como Firebase Hosting:

1.  **Ejecuta el comando de build:**
    Este comando creará una carpeta `dist/` en la raíz del proyecto con todos los archivos estáticos optimizados.
    ```bash
    npm run build
    ```

2.  **(Opcional) Previsualiza el build:**
    Para probar la versión de producción localmente antes de desplegarla, ejecuta:
    ```bash
    npm run preview
    ```
    Luego, abre la URL que te proporcione la terminal.
