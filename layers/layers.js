var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_building_1 = new ol.format.GeoJSON();
var features_building_1 = format_building_1.readFeatures(json_building_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_1.addFeatures(features_building_1);
var lyr_building_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_1, 
                style: style_building_1,
                interactive: true,
                title: '<img src="styles/legend/building_1.png" /> building'
            });
var format_building_2 = new ol.format.GeoJSON();
var features_building_2 = format_building_2.readFeatures(json_building_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_2.addFeatures(features_building_2);
var lyr_building_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_2, 
                style: style_building_2,
                interactive: true,
                title: '<img src="styles/legend/building_2.png" /> building'
            });
var format_buildingtembalang_3 = new ol.format.GeoJSON();
var features_buildingtembalang_3 = format_buildingtembalang_3.readFeatures(json_buildingtembalang_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildingtembalang_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildingtembalang_3.addFeatures(features_buildingtembalang_3);
var lyr_buildingtembalang_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_buildingtembalang_3, 
                style: style_buildingtembalang_3,
                interactive: true,
                title: '<img src="styles/legend/buildingtembalang_3.png" /> building tembalang'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_building_1.setVisible(true);lyr_building_2.setVisible(true);lyr_buildingtembalang_3.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_building_1,lyr_building_2,lyr_buildingtembalang_3];
lyr_building_1.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', });
lyr_building_2.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'roof:colour': 'roof:colour', 'pump:unit': 'pump:unit', 'elevation': 'elevation', 'man_made': 'man_made', 'layer': 'layer', 'capacity:pump': 'capacity:pump', 'internet_access:fee': 'internet_access:fee', 'addr:housenumber': 'addr:housenumber', 'payment:cash': 'payment:cash', 'addr:postcode': 'addr:postcode', 'rating': 'rating', 'substation': 'substation', 'power': 'power', 'operator': 'operator', 'office': 'office', 'tourism': 'tourism', 'school:type_idn': 'school:type_idn', 'admin_level': 'admin_level', 'shop': 'shop', 'opening_hours': 'opening_hours', 'sport': 'sport', 'leisure': 'leisure', 'smoking': 'smoking', 'internet_access': 'internet_access', 'cuisine': 'cuisine', 'wheelchair': 'wheelchair', 'height': 'height', 'description': 'description', 'addr:street': 'addr:street', 'religion': 'religion', 'amenity': 'amenity', 'operator:type': 'operator:type', 'name': 'name', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'access:roof': 'access:roof', 'type': 'type', });
lyr_buildingtembalang_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'building': 'building', 'roof:colour': 'roof:colour', 'pump:unit': 'pump:unit', 'elevation': 'elevation', 'man_made': 'man_made', 'layer': 'layer', 'capacity:pump': 'capacity:pump', 'internet_access:fee': 'internet_access:fee', 'addr:housenumber': 'addr:housenumber', 'payment:cash': 'payment:cash', 'addr:postcode': 'addr:postcode', 'rating': 'rating', 'substation': 'substation', 'power': 'power', 'operator': 'operator', 'office': 'office', 'tourism': 'tourism', 'school:type_idn': 'school:type_idn', 'admin_level': 'admin_level', 'shop': 'shop', 'opening_hours': 'opening_hours', 'sport': 'sport', 'leisure': 'leisure', 'smoking': 'smoking', 'internet_access': 'internet_access', 'cuisine': 'cuisine', 'wheelchair': 'wheelchair', 'height': 'height', 'description': 'description', 'addr:street': 'addr:street', 'religion': 'religion', 'amenity': 'amenity', 'operator:type': 'operator:type', 'name': 'name', 'capacity:persons': 'capacity:persons', 'building:structure': 'building:structure', 'building:roof': 'building:roof', 'building:material': 'building:material', 'building:levels': 'building:levels', 'building:floor': 'building:floor', 'building:condition': 'building:condition', 'backup_generator': 'backup_generator', 'addr:full': 'addr:full', 'addr:city': 'addr:city', 'access:roof': 'access:roof', 'type': 'type', });
lyr_building_1.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', });
lyr_building_2.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'roof:colour': '', 'pump:unit': '', 'elevation': '', 'man_made': '', 'layer': '', 'capacity:pump': '', 'internet_access:fee': '', 'addr:housenumber': '', 'payment:cash': '', 'addr:postcode': '', 'rating': '', 'substation': '', 'power': '', 'operator': '', 'office': '', 'tourism': '', 'school:type_idn': '', 'admin_level': '', 'shop': '', 'opening_hours': '', 'sport': '', 'leisure': '', 'smoking': '', 'internet_access': '', 'cuisine': '', 'wheelchair': '', 'height': '', 'description': '', 'addr:street': '', 'religion': '', 'amenity': '', 'operator:type': '', 'name': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'addr:full': '', 'addr:city': '', 'access:roof': '', 'type': '', });
lyr_buildingtembalang_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'building': '', 'roof:colour': '', 'pump:unit': '', 'elevation': '', 'man_made': '', 'layer': '', 'capacity:pump': '', 'internet_access:fee': '', 'addr:housenumber': '', 'payment:cash': '', 'addr:postcode': '', 'rating': '', 'substation': '', 'power': '', 'operator': '', 'office': '', 'tourism': '', 'school:type_idn': '', 'admin_level': '', 'shop': '', 'opening_hours': '', 'sport': '', 'leisure': '', 'smoking': '', 'internet_access': '', 'cuisine': '', 'wheelchair': '', 'height': '', 'description': '', 'addr:street': '', 'religion': '', 'amenity': '', 'operator:type': '', 'name': '', 'capacity:persons': '', 'building:structure': '', 'building:roof': '', 'building:material': '', 'building:levels': '', 'building:floor': '', 'building:condition': '', 'backup_generator': '', 'addr:full': '', 'addr:city': '', 'access:roof': '', 'type': '', });
lyr_building_1.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', });
lyr_building_2.set('fieldLabels', {'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'roof:colour': 'no label', 'pump:unit': 'no label', 'elevation': 'no label', 'man_made': 'no label', 'layer': 'no label', 'capacity:pump': 'no label', 'internet_access:fee': 'no label', 'addr:housenumber': 'no label', 'payment:cash': 'no label', 'addr:postcode': 'no label', 'rating': 'no label', 'substation': 'no label', 'power': 'no label', 'operator': 'no label', 'office': 'no label', 'tourism': 'no label', 'school:type_idn': 'no label', 'admin_level': 'no label', 'shop': 'no label', 'opening_hours': 'no label', 'sport': 'no label', 'leisure': 'no label', 'smoking': 'no label', 'internet_access': 'no label', 'cuisine': 'no label', 'wheelchair': 'no label', 'height': 'no label', 'description': 'no label', 'addr:street': 'no label', 'religion': 'no label', 'amenity': 'no label', 'operator:type': 'no label', 'name': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', 'type': 'no label', });
lyr_buildingtembalang_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'building': 'no label', 'roof:colour': 'no label', 'pump:unit': 'no label', 'elevation': 'no label', 'man_made': 'no label', 'layer': 'no label', 'capacity:pump': 'no label', 'internet_access:fee': 'header label', 'addr:housenumber': 'no label', 'payment:cash': 'no label', 'addr:postcode': 'no label', 'rating': 'no label', 'substation': 'no label', 'power': 'no label', 'operator': 'no label', 'office': 'no label', 'tourism': 'no label', 'school:type_idn': 'no label', 'admin_level': 'no label', 'shop': 'no label', 'opening_hours': 'no label', 'sport': 'no label', 'leisure': 'no label', 'smoking': 'no label', 'internet_access': 'no label', 'cuisine': 'no label', 'wheelchair': 'no label', 'height': 'no label', 'description': 'no label', 'addr:street': 'no label', 'religion': 'no label', 'amenity': 'no label', 'operator:type': 'no label', 'name': 'no label', 'capacity:persons': 'no label', 'building:structure': 'no label', 'building:roof': 'no label', 'building:material': 'no label', 'building:levels': 'no label', 'building:floor': 'no label', 'building:condition': 'no label', 'backup_generator': 'no label', 'addr:full': 'no label', 'addr:city': 'no label', 'access:roof': 'no label', 'type': 'no label', });
lyr_buildingtembalang_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});