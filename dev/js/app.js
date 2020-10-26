(function(){
 'use strict';
 angular.module('Maps',[])
 .controller('SlideController', SlideController)
 .controller('CategoryMapsController', CategoryMapsController)
 .service('MapListService', MapListService)
 .constant('ApiBasePath', "http://127.0.0.1:3001/url");

SlideController.$inject = ['MapListService'];
function SlideController(MapListService){
    var slide = this;
    slide.condition = false;
    //Obtencion de categorias en la carpeta global
    var promise = MapListService.getCategoriesCOVID19();

    promise.then(function (response) {
        slide.categories = response.data;
    })
    .catch(function(error){
        console.log("Something went wrong");
    });
    //obtencion de archivos (imagenes) de la carpeta particular

    slide.getImagesByCategory = function(category) {
        slide.condition = true;
       var promise = MapListService.getImages(category);

       promise.then(function (response){
           slide.slides = response.data;
           console.log(response.data);
       })
       .catch(function (error){
           console.log(error);
       })
    };

    // slide.getSlide = function(keyword){
    //     slide.slides = MapListService.checkKeywordFolder(keyword);
    //     console.log(slide.slides);
    // };
}

CategoryMapsController.$inject = ['MapListService'];
function CategoryMapsController(MapListService){
    var category = this;

}

MapListService.$inject = ['$http', 'ApiBasePath']
function MapListService($http, ApiBasePath){
    var service = this;
    var mapList = []; //Para guardar la lista de direcciones de las imagenes
    var keywordFolder = ""; //Para almacenar la palabra clave de la carpeta donde estan las imagenes a presentar
    
    // Hace la peticion al Backend mandando la clave del directorio para devolver un arreglo con imagenes
    service.getCategoriesCOVID19 = function (){
        var response = $http({
            method: "GET",
            url: (ApiBasePath)
        });
        console.log(response);
        return response;
    };

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
    
})();