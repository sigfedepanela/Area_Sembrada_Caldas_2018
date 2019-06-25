var wms_layers = [];

        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: '<a href=""></a>',
                url: 'http://a.tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });var format_Departamentos_2018_1 = new ol.format.GeoJSON();
var features_Departamentos_2018_1 = format_Departamentos_2018_1.readFeatures(json_Departamentos_2018_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departamentos_2018_1 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_Departamentos_2018_1.addFeatures(features_Departamentos_2018_1);var lyr_Departamentos_2018_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Departamentos_2018_1, 
                style: style_Departamentos_2018_1,
                title: '<img src="styles/legend/Departamentos_2018_1.png" /> Departamentos_2018'
            });var format_reaSembradaenCaaPaneleraHectareas_2 = new ol.format.GeoJSON();
var features_reaSembradaenCaaPaneleraHectareas_2 = format_reaSembradaenCaaPaneleraHectareas_2.readFeatures(json_reaSembradaenCaaPaneleraHectareas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_reaSembradaenCaaPaneleraHectareas_2 = new ol.source.Vector({
    attributions: '<a href=""></a>',
});
jsonSource_reaSembradaenCaaPaneleraHectareas_2.addFeatures(features_reaSembradaenCaaPaneleraHectareas_2);var lyr_reaSembradaenCaaPaneleraHectareas_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_reaSembradaenCaaPaneleraHectareas_2, 
                style: style_reaSembradaenCaaPaneleraHectareas_2,
    title: 'Área Sembrada en Caña Panelera (Hectareas)<br />\
    <img src="styles/legend/reaSembradaenCaaPaneleraHectareas_2_0.png" />  20 - 190 <br />\
    <img src="styles/legend/reaSembradaenCaaPaneleraHectareas_2_1.png" />  190 - 520 <br />\
    <img src="styles/legend/reaSembradaenCaaPaneleraHectareas_2_2.png" />  520 - 1050 <br />\
    <img src="styles/legend/reaSembradaenCaaPaneleraHectareas_2_3.png" />  1050 - 1610 <br />\
    <img src="styles/legend/reaSembradaenCaaPaneleraHectareas_2_4.png" />  1610 - 1960 <br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Departamentos_2018_1.setVisible(true);lyr_reaSembradaenCaaPaneleraHectareas_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Departamentos_2018_1,lyr_reaSembradaenCaaPaneleraHectareas_2];
lyr_Departamentos_2018_1.set('fieldAliases', {'DEPARTAMEN': 'DEPARTAMEN', 'AREA_SEM_H': 'AREA_SEM_H', 'AREA_COSE_': 'AREA_COSE_', 'PRODUC_Ton': 'PRODUC_Ton', 'RENDI_Ton_': 'RENDI_Ton_', 'AÃ±o': 'AÃ±o', 'No': 'No', });
lyr_reaSembradaenCaaPaneleraHectareas_2.set('fieldAliases', {'DEPT': 'DEPT', 'MUNICIPIO': 'MUNICIPIO', 'CULTIVO': 'CULTIVO', 'AÑO': 'AÑO', 'A.SEM.(Ha)': 'A.SEM.(Ha)', 'A.COS.(Ha)': 'A.COS.(Ha)', 'PROD.(Ton)': 'PROD.(Ton)', 'REND.(Ton/': 'REND.(Ton/', });
lyr_Departamentos_2018_1.set('fieldImages', {'DEPARTAMEN': 'TextEdit', 'AREA_SEM_H': 'TextEdit', 'AREA_COSE_': 'TextEdit', 'PRODUC_Ton': 'TextEdit', 'RENDI_Ton_': 'TextEdit', 'AÃ±o': 'Range', 'No': 'Range', });
lyr_reaSembradaenCaaPaneleraHectareas_2.set('fieldImages', {'DEPT': 'TextEdit', 'MUNICIPIO': 'TextEdit', 'CULTIVO': 'TextEdit', 'AÑO': 'TextEdit', 'A.SEM.(Ha)': 'TextEdit', 'A.COS.(Ha)': 'TextEdit', 'PROD.(Ton)': 'TextEdit', 'REND.(Ton/': 'TextEdit', });
lyr_Departamentos_2018_1.set('fieldLabels', {'DEPARTAMEN': 'inline label', 'AREA_SEM_H': 'inline label', 'AREA_COSE_': 'inline label', 'PRODUC_Ton': 'inline label', 'RENDI_Ton_': 'inline label', 'AÃ±o': 'inline label', 'No': 'inline label', });
lyr_reaSembradaenCaaPaneleraHectareas_2.set('fieldLabels', {'DEPT': 'inline label', 'MUNICIPIO': 'inline label', 'CULTIVO': 'inline label', 'AÑO': 'inline label', 'A.SEM.(Ha)': 'inline label', 'A.COS.(Ha)': 'inline label', 'PROD.(Ton)': 'inline label', 'REND.(Ton/': 'inline label', });
lyr_reaSembradaenCaaPaneleraHectareas_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});