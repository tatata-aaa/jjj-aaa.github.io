
/*var latlng = new google.maps.LatLng(-34.397, 150.644);
var myOptions = {
zoom: 13,
center: latlng,
mapTypeId: google.maps.MapTypeId.ROADMAP
};
var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);



var styleOptions = [{
featureType: 'all',
elementType: 'geometry',
stylers: [{ hue: '#F6208B' }]
}];

 //アイコン設定 
var icon = new google.maps.MarkerImage('../img/single2.png',
new google.maps.Size(92,24),
new google.maps.Point(0,0),
new google.maps.Point(46,12)
);

var markerOptions = {
position: latlng,
map: map,
icon: icon,
title: '新宿駅',
animation: google.maps.Animation.DROP
};
var marker = new google.maps.Marker(markerOptions);
}
*/
/*function initialize() {
  var latlng = new google.maps.LatLng(35.710333,139.777148);
  var myOptions = {
    zoom: 8,/*拡大比率*/
/*    center: latlng,/*表示枠内の中心点*/
/*    mapTypeControlOptions: { mapTypeIds: ['sample', google.maps.MapTypeId.ROADMAP] }/*表示タイプの指定*/
/*  };
  var map = new google.maps.Map(document.getElementById('map_canvas'), myOptions);

/*取得スタイルの貼り付け*/
/*  var styleOptions =

[
  {
    "stylers": [
      { "hue": "#ffee00" },
      { "gamma": 0.25 }
    ]
  }
];
var styledMapOptions = { name: '株式会社Lig' }
  var sampleType = new google.maps.StyledMapType(styleOptions, styledMapOptions);
  map.mapTypes.set('sample', sampleType);
  map.setMapTypeId('sample');
}
*/


function initialize() {
            var latlng = new google.maps.LatLng(35.729178, 139.710695);/*座標の指定*/

            /*マップの設定*/
            var mapOptions = {
                zoom: 18, /*Map表示時の拡大倍率を調整。*/
                center: latlng, /*中心点をどこにするか。この場合は、目的地と同じ*/
                mapTypeId: google.maps.MapTypeId.ROADMAP,/*地図の表示タイプの指定。*/
            };

            /*マップをID area-google-mapに埋め込む記述*/
            var map = new google.maps.Map(document.getElementById('map_canvas'), mapOptions);

            /*マップのデザインの指定#f0f0f0*/

var styleOptions =
[
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#ffd500"
            },
            {
                "saturation": "88"
            },
            {
                "lightness": "17"
            },
            {
                "gamma": "0.35"
            },
            {
                "weight": "0.36"
            }
        ]
    },
{
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#ffdc00"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "hue": "#ffc700"
            },
            {
                "saturation": "-91"
            }
        ]
    },
{
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "gamma": 0.01
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "saturation": -31
            },
            {
                "lightness": -33
            },
            {
                "weight": 2
          },
            {
                "gamma": 0.8
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 30
            },
          {
                "saturation": 30
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "saturation": 20
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 20
            },
            {
                "saturation": -20
           }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 10
            },
            {
                "saturation": -30
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "saturation": 25
            },
            {
                "lightness": 25
            }
        ]
    },
{
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "lightness": -20
            }
        ]
    }
];

            /*マップのデザインを適用させる記述*/
            var styleType = new google.maps.StyledMapType(styleOptions);
            map.mapTypes.set('genius', styleType);
            map.setMapTypeId('genius');

            /*アイコンの表示設定*/
            var icon = new google.maps.MarkerImage('https://hhh-keikotukuru.c9users.io/wp-content/themes/551tyaku/img/eo17.png',/*アイコンのパス*/
            new google.maps.Size(171,69),/*アイコンのサイズ*/
            new google.maps.Point(0, 0),/*座標からのアイコンの位置*/
            new google.maps.Point(85,35)

        );
        var markerOptions = {
          position: latlng,/*表示場所と同じ位置に設置*/
          map: map,
          icon: icon,
      };

      /*アイコンを表示させる記述*/
      var marker = new google.maps.Marker(markerOptions);
        }



