(function(){
 'use strict';
 angular.module('Maps',[])
 .controller('SlideController', SlideController)
 .service('MapListService', MapListService);

SlideController.$inject = ['MapListService'];
function SlideController(MapListService){
    var slide = this;
    slide.condition = false;
    slide.slides = [];
    slide.getSlide = function(keyword){
        slide.slides = MapListService.checkKeywordFolder(keyword);
        console.log(slide.slides);
    };
}

function MapListService(){
    var service = this;
    var mapList = []; //Para guardar la lista de direcciones de las imagenes
    var keywordFolder = ""; //Para almacenar la palabra clave de la carpeta donde estan las imagenes a presentar
    //
    // Hace la peticion al Backend mandando la clave del directorio para devolver un arreglo con imagenes
    service.checkKeywordFolder = function (keyword){
        return ['1.jpg', '2.jpg', '3.jpg', keyword]
    };
}
    
})();