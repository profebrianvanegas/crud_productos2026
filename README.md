# CRUD de Productos con Angular para Programación III

Este repositorio contiene un proyecto base de Angular diseñado para los estudiantes de Programación III de la Tecnicatura en Análisis y Desarrollo de Software. El objetivo es aprender los fundamentos de Angular mediante la construcción de una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) para la gestión de productos.

## Cómo Empezar / Guía de Uso

Este proyecto está diseñado para ser un punto de partida práctico para aprender Angular y el desarrollo de aplicaciones CRUD. Sigue los pasos a continuación para ponerlo en marcha y explorar su funcionamiento.

### Requisitos Previos

Antes de comenzar, asegúrate de tener instalado lo siguiente en tu entorno de desarrollo:

*   **Node.js:** Versión 18.x o superior (recomendado). Puedes descargarlo desde [nodejs.org](https://nodejs.org/).
*   **npm (Node Package Manager) o Yarn:** Generalmente se instala junto con Node.js.
*   **Angular CLI:** La interfaz de línea de comandos de Angular. Instálala globalmente ejecutando:
    ```bash
    npm install -g @angular/cli
    ```
*   **Conocimientos básicos:** De JavaScript/TypeScript, HTML y CSS.
*   **Editor de Código:** Un editor como Visual Studio Code es altamente recomendado.

### Instalación y Configuración

Sigue estos pasos para obtener una copia del proyecto en tu máquina local y configurarlo:

1.  **Clonar el repositorio:**
    ```bash
    git clone [URL_DEL_REPOSITORIO]
    ```
    *(Reemplaza `[URL_DEL_REPOSITORIO]` con la URL real de tu repositorio)*

2.  **Navegar al directorio del proyecto:**
    ```bash
    cd crud_productos_angular
    ```

3.  **Instalar las dependencias:**
    ```bash
    npm install
    ```
    O si prefieres usar Yarn:
    ```bash
    yarn install
    ```

### Ejecución del Proyecto

Una vez que las dependencias estén instaladas, puedes iniciar la aplicación:

1.  **Iniciar el servidor de desarrollo:**
    ```bash
    ng serve
    ```

2.  **Abrir la aplicación en tu navegador:**
    Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si realizas cambios en los archivos fuente.

## Estructura Clave del Proyecto (para estudiantes)

Para facilitar el aprendizaje, aquí se destacan las partes más relevantes de la estructura del proyecto:

*   `src/app/`: Contiene la lógica principal de la aplicación, organizada en módulos, componentes, servicios, etc.
*   `src/app/services/`: Aquí se definen los servicios que encapsulan la lógica para la comunicación con el backend (API) y la gestión de datos.
*   `src/app/pages/`: Directorio para componentes que representan vistas o páginas completas de la aplicación (ej. `lista-productos`, `form-producto`).
*   `src/app/components/`: Directorio para componentes reutilizables más pequeños que se usan dentro de las páginas (ej. `sidebar`, `filtro-categorias`).
*   `src/app/app.routes.ts`: Archivo donde se define la configuración de las rutas de navegación de la aplicación.

## Recursos Adicionales

*   [Documentación Oficial de Angular](https://angular.dev/docs)
*   [Tutoriales de Angular para principiantes](https://angular.dev/tutorials)
*   [Documentación de TypeScript](https://www.typescriptlang.org/docs/)
*   [PrimeNG](https://primeng.org/)
*   [Tailwind CSS](https://tailwindcss.com/)