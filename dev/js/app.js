(function(){
 'use strict';
 angular.module('Maps',[])
 .controller('SlideController', SlideController)
 .service('MapListService', MapListService)
 .filter('folder_filter', FolderFilter)
 .filter('file_filter', FileFilter)
 .constant('ApiBasePath', "https://piiglab-covid-image-server.herokuapp.com/url");

SlideController.$inject = ['MapListService'];
function SlideController(MapListService){
    var slide = this;
    slide.condition_category = false;
    slide.condition_image = false;
    slide.imageSlide = "";
    //Obtencion de categorias en la carpeta global, comprometida a mostrarse unicamente cuando se obtenga una respuesta
    var promise = MapListService.getCategoriesCOVID19();

    promise.then(function (response) {
        slide.categories = response.data;
    })
    .catch(function(error){
        console.log("Something went wrong");
    });

    //obtencion de archivos (imagenes) de la carpeta particular
    slide.getImagesByCategory = function(category) {
        slide.condition_category = true;
       var promise = MapListService.getImages(category);

       promise.then(function (response){
           slide.slides = response.data;
           console.log(response.data);
       })
       .catch(function (error){
           console.log(error);
       })
    };

    //Asigna a la variable imageSlide la imagen seleccionada al hacer click en el menu
    slide.setSlide = function(slide_input){
        slide.condition_image = true;
        console.log(slide_input);
        slide.imageSlide = slide_input;
        // console.log(slide);
    };
}
//Servicio para hacer las peticiones al servidor Espress, inyeccion de $http y la constante que almacena la dirección del servicio
MapListService.$inject = ['$http', 'ApiBasePath']
function MapListService($http, ApiBasePath){
    var service = this;

    // Hace la peticion al Backend extrayendo todas las categorias (carpetas) de imagenes 
    service.getCategoriesCOVID19 = function (){
        var response = $http({
            method: "GET",
            url: (ApiBasePath)
        });
        console.log(response);
        return response;
    };

    // Hace la peticion al Backend mandando la clave del directorio para devolver un arreglo con imagenes
    service.getImages = function (categoryName){
        console.log(categoryName);
        var response = $http({
            method: "GET",
            url: (ApiBasePath),
            params: {
                category: categoryName
            }
        });

        return response;
    };
}

function FolderFilter(){
    return function (input){
        input = input || "";
        input = input.replace(/_/g, " ");
        return input;
    };
}

function FileFilter(){
    return function (input){
        input = input || "";
        input = input.replace(/^.*[\\\/]/, '');
        input = input.replace(/\.[^/.]+$/, "");
        return input;
    };
}
   
})();