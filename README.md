# Página del PIIGLAB para exponer los mapas del COVID-19
El sitio web utiliza tecnologías de Node js: [GULP](https://gulpjs.com/) para la automatización del preprocesado del código de estilos en [SASS](https://sass-lang.com/) y procesado de la maqueta [PUG](https://pugjs.org/api/getting-started.html) que retorna el HTML, para la sección "COVID-19" se usa Angular para mostrar dinamicamente el menu de las categorias y los mapas, dicha aplicación de [Angular](https://angular.io/) como Single Page Aplication obtiene los datos de una api-rest creada con [Express](https://expressjs.com/).
## Estructura básica de carpetas

    .
    ├── dev                          # Archivos de desarrollo para procesado 
    |     ├── js                     # Scripts para el funcionamiento de los componentes gráficos del sitio y la applicación Angular
    |     ├── scss                   # 
    |     | ├── config               # Colores y fuentes SASS
    |     | ├── mixins               # breakpoints 
    |     | ├── pages                # Estilos  individuales de las páginas
    |     ├── views                  # Archivos PUG para la estructura del sitio HTML 
    |     | ├── config               # Variables y constantes a utilizar 
    |     | ├── includes             # Componente depreciado de menú-principal
    |     | ├── pages                # Maquetas PUG de las páginas
    |     | ├── templates            # Maquetas Header y Footer
    ├── public                       # Archivos generados por el procesado y que se han de publicar
    |     ├── assets                 # Recursos gráficos
    └── README.md

### Pasos para ejectuar el proyecto en local
* Descarga el proyecto con git clone o como zip.
* En el directorio del proyecto abre una terminal y escribe:
    ```bash
     npm install
    ```
* Una vez terminada la instalación escribe el comando:
    ```bash 
    gulp
    ```
    Todo se encuentra automatizado para que se procesen los documentos y se levante un servidor de desarrollo y se refresque al detectar cambios.

### Arquitectura
![alt text](https://boozinas.github.io/PIIGLAB-covid-19/public/assets/img/architecture_PIIGLAB_covid.png)
