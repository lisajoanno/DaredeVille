/************************************************
 * PROJECT:        DardeVille                   *
 * AUTHOR:         Alexandre Cazala             *
 * CREATION_DATE:  04/11/16                      *
 * EMAIL:          alexandre.cazala@gmail.com   *
 * LICENSE:        Apache 2.0                   *
 ***********************************************/

var directionsToDardevilleConverter = {
    convert: convertFct
};

/**
 * A partir de la reponse de google, on ne prend que les informations qui nous plaisent.
 * @param directionsOutput
 */
function  convertFct(directionsOutput) {
    var format = {};
    format.routes = directionsOutput.routes;
    
    return format;
}

exports.converter = directionsToDardevilleConverter;