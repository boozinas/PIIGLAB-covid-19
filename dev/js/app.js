(function(){
 'use strict';
 angular.module('Maps',[])
 .controller('SlideController', SlideController)
 .controller('CategoryMapsController', CategoryMapsController)
 .service('MapListService', MapListService);

SlideController.$inject = ['MapListService'];
function SlideController(MapListService){
    var slide = this;
    slide.condition = false;
    var promise = MapListService.checkKeywordFolder();

    promise.then(function (response) {
        slide.slides = response.data;
    })
    .catch(function(error){
        console.log("Something went wrong");
    });

    // slide.getSlide = function(keyword){
    //     slide.slides = MapListService.checkKeywordFolder(keyword);
    //     console.log(slide.slides);
    // };
}

CategoryMapsController.$inject = ['MapListService'];
function CategoryMapsController(MapListService){
    var category = this;

}

MapListService.$inject = ['$http']
function MapListService($http){
    var service = this;
    var mapList = []; //Para guardar la lista de direcciones de las imagenes
    var keywordFolder = ""; //Para almacenar la palabra clave de la carpeta donde estan las imagenes a presentar
    
    // Hace la peticion al Backend mandando la clave del directorio para devolver un arreglo con imagenes
    service.checkKeywordFolder = function (){
        var response = $http({
            method: "GET",
            url: ("http://127.0.0.1:3001/url")
        });
        console.log(response);
        return response;
    };
}
    
})();