/**** Start of imports. If edited, may not auto-convert in the playground. ****/
var USA = /* color: #ffc82d */ee.Geometry.Polygon(
        [[[-125.33203125, 44.77793589631623],
          [-125.33203125, 40.847060356071225],
          [-122.607421875, 35.24561909420681],
          [-118.388671875, 31.728167146023935],
          [-112.5, 31.80289258670676],
          [-105.029296875, 29.688052749856798],
          [-101.42578125, 28.767659105691255],
          [-98.26171875, 24.206889622398023],
          [-97.03125, 24.12670195868168],
          [-96.591796875, 24.766784522874453],
          [-96.328125, 27.215556209029693],
          [-93.603515625, 28.459033019728043],
          [-89.208984375, 28.226970038918342],
          [-87.36328125, 29.611670115197377],
          [-83.49609375, 28.613459424004418],
          [-82.6171875, 26.27371402440643],
          [-83.671875, 26.194876675795218],
          [-83.408203125, 24.04646399966657],
          [-80.771484375, 23.966175871265044],
          [-78.92578125, 25.64152637306577],
          [-80.068359375, 31.12819929911196],
          [-75.498046875, 34.30714385628804],
          [-73.564453125, 39.36827914916013],
          [-69.697265625, 40.91351257612757],
          [-68.90625, 42.81152174509788],
          [-64.51171875, 45.21300355599396],
          [-68.73046875, 48.516604348867475],
          [-75.9375, 45.7675229621499],
          [-81.2109375, 42.42345651793833],
          [-81.826171875, 43.70759350405294],
          [-83.759765625, 47.04018214480667],
          [-89.208984375, 47.694974341862824],
          [-94.482421875, 49.66762782262192],
          [-103.53515625, 49.55372551347579],
          [-113.203125, 49.78126405817837],
          [-122.783203125, 49.78126405817837],
          [-125.068359375, 48.166085419012525]]]),
    image2 = ee.Image("users/images/NBasinRange_2010"),
    image5 = ee.Image("users/images/SBasinRange_2010"),
    image11 = ee.Image("users/images/WRim_2010"),
    CDL = ee.Image("users/images/CDL_composite_08_14_wi_fallow"),
    image8 = ee.Image("users/images/SRim_2010"),
    image6 = ee.Image("users/images/SERim_2010"),
    image15 = ee.Image("users/images/MidSeaBoard_2010"),
    image13 = ee.Image("users/images/Mississippi_2010"),
    image14 = ee.Image("users/images/ERim_2010"),
    image16 = ee.Image("users/images/MidUplands_2010"),
    image18 = ee.Image("users/images/MidCrescent_2010"),
    image20 = ee.Image("users/images/WBasinRange_2010"),
    image21 = ee.Image("users/images/EUplands_2010"),
    image19 = ee.Image("users/images/ESeaBoard_2010"),
    image10 = ee.Image("users/images/WCrescent_2010"),
    image22 = ee.Image("users/images/SPrairies_2010"),
    image9 = ee.Image("users/images/NWRim_2010"),
    image12 = ee.Image("users/images/SWRim_2010"),
    image = ee.Image("users/images/Heartland_2010"),
    image4 = ee.Image("users/images/NPrairies_2010"),
    image3 = ee.Image("users/images/SGreatPlains_2010"),
    image7 = ee.Image("users/images/NGreatPlains_2010"),
    usacrop = ee.Image("users/images/US_2010_cropland"),
    image17 = ee.Image("users/images/ECrescent_2010");
/***** End of imports. If edited, may not auto-convert in the playground. *****/

var final = ee.ImageCollection([image,image2,image3,image4,
image5,image6,image7,image8,image9,image10,image11,image12,
image13,image14,image15,image16,image17,
image18,image19,image20,image21,image22]).reduce(ee.Reducer.max())
print(final)

Map.addLayer(usacrop, {palette:'00ff00'},'final')
Map.addLayer(CDL, {palette:'ffff00'},'cdl')
//Map.addLayer(final, {palette:'00ff00'},'final')
var zones=ee.FeatureCollection("ft:1emWmrrMBzdiKOitmcYSBmoCozs4Fpqq_f6A86pnR"); 

//Map.addLayer(zones.draw({color: '006600', strokeWidth: 2}), {}, 'drawn')
var empty = ee.Image().byte();
var outlines = empty.paint({
  featureCollection: zones,
  width: 2
});

Map.addLayer(outlines, {palette: 'ff0000'}, 'bounds');

Export.image.toAsset({
  image: final,
  scale: 30,
  maxPixels:9990000000000,
  description: 'Final_US_v1_asset',
  assetId: 'US_2010_cropland_v2',
  region: USA, 
});


Export.image.toDrive({
  image: final,
  scale: 30,
  maxPixels:9990000000000,
  folder: 'data',
  description: 'Final_US_v1',
  fileNamePrefix: 'US_2010_cropland_v1',
  region: USA, 
});
 