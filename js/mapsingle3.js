
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
            var latlng = new google.maps.LatLng(35.4792406,139.4707488);/*座標の指定*/

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
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#de970f"
            },
            {
                "saturation": "91"
            },
            {
                "lightness": "93"
            },
            {
                "gamma": "5.53"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
"stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#c42828"
            },
            {
                "saturation": "-67"
            },
            {
                "lightness": "-61"
            }
        ]
    },
    {
  "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "labels.text",
        "stylers": [
            {
                "hue": "#ff0000"
            }
        ]
    }
];

            /*マップのデザインを適用させる記述*/
            var styleType = new google.maps.StyledMapType(styleOptions);
            map.mapTypes.set('genius', styleType);
            map.setMapTypeId('genius');

            /*アイコンの表示設定*/
            var icon = new google.maps.MarkerImage('./img/eo17.png',/*アイコンのパス*/
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

