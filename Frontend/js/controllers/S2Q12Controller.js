"use strict";

angular.module("sose-research-community")
  .controller("S2Q12Controller", function($scope, $http, $timeout) {

    $scope.getResult = function() {
      const countryIndex = document.getElementById("country").selectedIndex;
      const country = geocode[countryIndex];
      const keywords = document.getElementById("keywords").value;

      console.log(keywords, country.name, country.location.lat, country.location.lng);

      var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: new google.maps.LatLng(country.location.lat, country.location.lng),
        mapTypeId: 'terrain'
      });

      // $http.get("http://localhost:3000/api/collaboration?country=" + country + "&keywords=" + keywords).then(function(response){
      //   console.log(response.data);
      //
      //
      // });

      var results = [{lat: 19.2218342, long: -155.4438324, title: "pub1"},
        {lat: 40.8443, long: -116.2005, title: "pub2"},
        {lat: 19.4619999, long: -155.5868378, title: "pub3"}];

      // Loop through the results array and place a marker for each
      // set of coordinates.
      for (var i = 0; i < results.length; i++) {
        var publication = results[i];
        var latLng = new google.maps.LatLng(publication.lat,publication.long);
        var marker = new google.maps.Marker({
          position: latLng,
          map: map,
          title: publication.title
        });
      }
    }

  });

const geocode = [
  {
    "formattedName":"Afghanistan",
    "name":"Afghanistan",
    "location":{
      "lat":33.93911,
      "lng":67.709953
    }
  },
  {
    "formattedName":"Albania",
    "name":"Albania",
    "location":{
      "lat":41.153332,
      "lng":20.168331
    }
  },
  {
    "formattedName":"Algeria",
    "name":"Algeria",
    "location":{
      "lat":28.033886,
      "lng":1.659626
    }
  },
  {
    "formattedName":"Andorra",
    "name":"Andorra",
    "location":{
      "lat":42.506285,
      "lng":1.521801
    }
  },
  {
    "formattedName":"Angola",
    "name":"Angola",
    "location":{
      "lat":-11.202692,
      "lng":17.873887
    }
  },
  {
    "formattedName":"Antigua and Barbuda",
    "name":"Antigua and Barbuda",
    "location":{
      "lat":17.060816,
      "lng":-61.796428
    }
  },
  {
    "formattedName":"Argentina",
    "name":"Argentina",
    "location":{
      "lat":-38.416097,
      "lng":-63.61667199999999
    }
  },
  {
    "formattedName":"Armenia",
    "name":"Armenia",
    "location":{
      "lat":40.069099,
      "lng":45.038189
    }
  },
  {
    "formattedName":"Australia",
    "name":"Australia",
    "location":{
      "lat":-25.274398,
      "lng":133.775136
    }
  },
  {
    "formattedName":"Austria",
    "name":"Austria",
    "location":{
      "lat":47.516231,
      "lng":14.550072
    }
  },
  {
    "formattedName":"Azerbaijan",
    "name":"Azerbaijan",
    "location":{
      "lat":40.143105,
      "lng":47.576927
    }
  },
  {
    "formattedName":"The Bahamas",
    "name":"Bahamas",
    "location":{
      "lat":25.03428,
      "lng":-77.39627999999999
    }
  },
  {
    "formattedName":"Bahrain",
    "name":"Bahrain",
    "location":{
      "lat":26.0667,
      "lng":50.5577
    }
  },
  {
    "formattedName":"Bangladesh",
    "name":"Bangladesh",
    "location":{
      "lat":23.684994,
      "lng":90.356331
    }
  },
  {
    "formattedName":"Barbados",
    "name":"Barbados",
    "location":{
      "lat":13.193887,
      "lng":-59.543198
    }
  },
  {
    "formattedName":"Belarus",
    "name":"Belarus",
    "location":{
      "lat":53.709807,
      "lng":27.953389
    }
  },
  {
    "formattedName":"Belgium",
    "name":"Belgium",
    "location":{
      "lat":50.503887,
      "lng":4.469936
    }
  },
  {
    "formattedName":"Belize",
    "name":"Belize",
    "location":{
      "lat":17.189877,
      "lng":-88.49765
    }
  },
  {
    "formattedName":"Benin",
    "name":"Benin",
    "location":{
      "lat":9.30769,
      "lng":2.315834
    }
  },
  {
    "formattedName":"Bhutan",
    "name":"Bhutan",
    "location":{
      "lat":27.514162,
      "lng":90.433601
    }
  },
  {
    "formattedName":"Bolivia",
    "name":"Bolivia",
    "location":{
      "lat":-16.290154,
      "lng":-63.58865299999999
    }
  },
  {
    "formattedName":"Bosnia and Herzegovina",
    "name":"Bosnia and Herzegovina",
    "location":{
      "lat":43.915886,
      "lng":17.679076
    }
  },
  {
    "formattedName":"Botswana",
    "name":"Botswana",
    "location":{
      "lat":-22.328474,
      "lng":24.684866
    }
  },
  {
    "formattedName":"Brazil",
    "name":"Brazil",
    "location":{
      "lat":-14.235004,
      "lng":-51.92528
    }
  },
  {
    "formattedName":"Brunei",
    "name":"Brunei",
    "location":{
      "lat":4.535277,
      "lng":114.727669
    }
  },
  {
    "formattedName":"Bulgaria",
    "name":"Bulgaria",
    "location":{
      "lat":42.733883,
      "lng":25.48583
    }
  },
  {
    "formattedName":"Burkina Faso",
    "name":"Burkina Faso",
    "location":{
      "lat":12.238333,
      "lng":-1.561593
    }
  },
  {
    "formattedName":"Burundi",
    "name":"Burundi",
    "location":{
      "lat":-3.373056,
      "lng":29.918886
    }
  },
  {
    "formattedName":"Cambodia",
    "name":"Cambodia",
    "location":{
      "lat":12.565679,
      "lng":104.990963
    }
  },
  {
    "formattedName":"Cameroon",
    "name":"Cameroon",
    "location":{
      "lat":7.369721999999999,
      "lng":12.354722
    }
  },
  {
    "formattedName":"Canada",
    "name":"Canada",
    "location":{
      "lat":56.130366,
      "lng":-106.346771
    }
  },
  {
    "formattedName":"Cape Verde",
    "name":"Cabo Verde",
    "location":{
      "lat":15.120142,
      "lng":-23.6051721
    }
  },
  {
    "formattedName":"Central African Republic",
    "name":"Central African Republic",
    "location":{
      "lat":6.611110999999999,
      "lng":20.939444
    }
  },
  {
    "formattedName":"Chad",
    "name":"Chad",
    "location":{
      "lat":15.454166,
      "lng":18.732207
    }
  },
  {
    "formattedName":"Chile",
    "name":"Chile",
    "location":{
      "lat":-35.675147,
      "lng":-71.542969
    }
  },
  {
    "formattedName":"China",
    "name":"China",
    "location":{
      "lat":35.86166,
      "lng":104.195397
    }
  },
  {
    "formattedName":"Colombia",
    "name":"Colombia",
    "location":{
      "lat":4.570868,
      "lng":-74.297333
    }
  },
  {
    "formattedName":"Comoros",
    "name":"Comoros",
    "location":{
      "lat":-11.6455,
      "lng":43.3333
    }
  },
  {
    "formattedName":"Costa Rica",
    "name":"Costa Rica",
    "location":{
      "lat":9.748916999999999,
      "lng":-83.753428
    }
  },
  {
    "formattedName":"C\u00f4te d'Ivoire",
    "name":"Cote d'Ivoire",
    "location":{
      "lat":7.539988999999999,
      "lng":-5.547079999999999
    }
  },
  {
    "formattedName":"Croatia",
    "name":"Croatia",
    "location":{
      "lat":45.1,
      "lng":15.2
    }
  },
  {
    "formattedName":"Cuba",
    "name":"Cuba",
    "location":{
      "lat":21.521757,
      "lng":-77.781167
    }
  },
  {
    "formattedName":"Cyprus",
    "name":"Cyprus",
    "location":{
      "lat":35.126413,
      "lng":33.429859
    }
  },
  {
    "formattedName":"Czech Republic",
    "name":"Czech Republic",
    "location":{
      "lat":49.81749199999999,
      "lng":15.472962
    }
  },
  {
    "formattedName":"Denmark",
    "name":"Denmark",
    "location":{
      "lat":56.26392,
      "lng":9.501785
    }
  },
  {
    "formattedName":"Djibouti",
    "name":"Djibouti",
    "location":{
      "lat":11.825138,
      "lng":42.590275
    }
  },
  {
    "formattedName":"Dominica",
    "name":"Dominica",
    "location":{
      "lat":15.414999,
      "lng":-61.37097600000001
    }
  },
  {
    "formattedName":"Dominican Republic",
    "name":"Dominican Republic",
    "location":{
      "lat":18.735693,
      "lng":-70.162651
    }
  },
  {
    "formattedName":"Ecuador",
    "name":"Ecuador",
    "location":{
      "lat":-1.831239,
      "lng":-78.18340599999999
    }
  },
  {
    "formattedName":"Egypt",
    "name":"Egypt",
    "location":{
      "lat":26.820553,
      "lng":30.802498
    }
  },
  {
    "formattedName":"El Salvador",
    "name":"El Salvador",
    "location":{
      "lat":13.794185,
      "lng":-88.89653
    }
  },
  {
    "formattedName":"Equatorial Guinea",
    "name":"Equatorial Guinea",
    "location":{
      "lat":1.650801,
      "lng":10.267895
    }
  },
  {
    "formattedName":"Eritrea",
    "name":"Eritrea",
    "location":{
      "lat":15.179384,
      "lng":39.782334
    }
  },
  {
    "formattedName":"Estonia",
    "name":"Estonia",
    "location":{
      "lat":58.595272,
      "lng":25.013607
    }
  },
  {
    "formattedName":"Ethiopia",
    "name":"Ethiopia",
    "location":{
      "lat":9.145000000000001,
      "lng":40.489673
    }
  },
  {
    "formattedName":"Fiji",
    "name":"Fiji",
    "location":{
      "lat":-17.713371,
      "lng":178.065032
    }
  },
  {
    "formattedName":"Finland",
    "name":"Finland",
    "location":{
      "lat":61.92410999999999,
      "lng":25.748151
    }
  },
  {
    "formattedName":"France",
    "name":"France",
    "location":{
      "lat":46.227638,
      "lng":2.213749
    }
  },
  {
    "formattedName":"Gabon",
    "name":"Gabon",
    "location":{
      "lat":-0.803689,
      "lng":11.609444
    }
  },
  {
    "formattedName":"The Gambia",
    "name":"Gambia",
    "location":{
      "lat":13.443182,
      "lng":-15.310139
    }
  },
  {
    "formattedName":"Georgia",
    "name":"Georgia",
    "location":{
      "lat":42.315407,
      "lng":43.35689199999999
    }
  },
  {
    "formattedName":"Germany",
    "name":"Germany",
    "location":{
      "lat":51.165691,
      "lng":10.451526
    }
  },
  {
    "formattedName":"Ghana",
    "name":"Ghana",
    "location":{
      "lat":7.946527,
      "lng":-1.023194
    }
  },
  {
    "formattedName":"Greece",
    "name":"Greece",
    "location":{
      "lat":39.074208,
      "lng":21.824312
    }
  },
  {
    "formattedName":"Grenada",
    "name":"Grenada",
    "location":{
      "lat":12.1165,
      "lng":-61.67899999999999
    }
  },
  {
    "formattedName":"Guatemala",
    "name":"Guatemala",
    "location":{
      "lat":15.783471,
      "lng":-90.23075899999999
    }
  },
  {
    "formattedName":"Guinea",
    "name":"Guinea",
    "location":{
      "lat":9.945587,
      "lng":-9.696645
    }
  },
  {
    "formattedName":"Guyana",
    "name":"Guyana",
    "location":{
      "lat":4.860416,
      "lng":-58.93018
    }
  },
  {
    "formattedName":"Haiti",
    "name":"Haiti",
    "location":{
      "lat":18.971187,
      "lng":-72.285215
    }
  },
  {
    "formattedName":"Honduras",
    "name":"Honduras",
    "location":{
      "lat":15.199999,
      "lng":-86.241905
    }
  },
  {
    "formattedName":"Hungary",
    "name":"Hungary",
    "location":{
      "lat":47.162494,
      "lng":19.503304
    }
  },
  {
    "formattedName":"Iceland",
    "name":"Iceland",
    "location":{
      "lat":64.963051,
      "lng":-19.020835
    }
  },
  {
    "formattedName":"India",
    "name":"India",
    "location":{
      "lat":20.593684,
      "lng":78.96288
    }
  },
  {
    "formattedName":"Indonesia",
    "name":"Indonesia",
    "location":{
      "lat":-0.789275,
      "lng":113.921327
    }
  },
  {
    "formattedName":"Iran",
    "name":"Iran",
    "location":{
      "lat":32.427908,
      "lng":53.688046
    }
  },
  {
    "formattedName":"Iraq",
    "name":"Iraq",
    "location":{
      "lat":33.223191,
      "lng":43.679291
    }
  },
  {
    "formattedName":"Ireland",
    "name":"Ireland",
    "location":{
      "lat":53.41291,
      "lng":-8.24389
    }
  },
  {
    "formattedName":"Israel",
    "name":"Israel",
    "location":{
      "lat":31.046051,
      "lng":34.851612
    }
  },
  {
    "formattedName":"Italy",
    "name":"Italy",
    "location":{
      "lat":41.87194,
      "lng":12.56738
    }
  },
  {
    "formattedName":"Jamaica",
    "name":"Jamaica",
    "location":{
      "lat":18.109581,
      "lng":-77.297508
    }
  },
  {
    "formattedName":"Japan",
    "name":"Japan",
    "location":{
      "lat":36.204824,
      "lng":138.252924
    }
  },
  {
    "formattedName":"Jordan",
    "name":"Jordan",
    "location":{
      "lat":30.585164,
      "lng":36.238414
    }
  },
  {
    "formattedName":"Kazakhstan",
    "name":"Kazakhstan",
    "location":{
      "lat":48.019573,
      "lng":66.923684
    }
  },
  {
    "formattedName":"Kenya",
    "name":"Kenya",
    "location":{
      "lat":-0.023559,
      "lng":37.906193
    }
  },
  {
    "formattedName":"Kiribati",
    "name":"Kiribati",
    "location":{
      "lat":1.8708833,
      "lng":-157.3630262
    }
  },
  {
    "formattedName":"Kuwait",
    "name":"Kuwait",
    "location":{
      "lat":29.31166,
      "lng":47.481766
    }
  },
  {
    "formattedName":"Kyrgyzstan",
    "name":"Kyrgyzstan",
    "location":{
      "lat":41.20438,
      "lng":74.766098
    }
  },
  {
    "formattedName":"Laos",
    "name":"Laos",
    "location":{
      "lat":19.85627,
      "lng":102.495496
    }
  },
  {
    "formattedName":"Latvia",
    "name":"Latvia",
    "location":{
      "lat":56.879635,
      "lng":24.603189
    }
  },
  {
    "formattedName":"Lebanon",
    "name":"Lebanon",
    "location":{
      "lat":33.854721,
      "lng":35.862285
    }
  },
  {
    "formattedName":"Lesotho",
    "name":"Lesotho",
    "location":{
      "lat":-29.609988,
      "lng":28.233608
    }
  },
  {
    "formattedName":"Liberia",
    "name":"Liberia",
    "location":{
      "lat":6.428055,
      "lng":-9.429499000000002
    }
  },
  {
    "formattedName":"Libya",
    "name":"Libya",
    "location":{
      "lat":26.3351,
      "lng":17.228331
    }
  },
  {
    "formattedName":"Liechtenstein",
    "name":"Liechtenstein",
    "location":{
      "lat":47.166,
      "lng":9.555373
    }
  },
  {
    "formattedName":"Lithuania",
    "name":"Lithuania",
    "location":{
      "lat":55.169438,
      "lng":23.881275
    }
  },
  {
    "formattedName":"Luxembourg",
    "name":"Luxembourg",
    "location":{
      "lat":49.815273,
      "lng":6.129582999999999
    }
  },
  {
    "formattedName":"Macedonia (FYROM)",
    "name":"Macedonia",
    "location":{
      "lat":41.608635,
      "lng":21.745275
    }
  },
  {
    "formattedName":"Madagascar",
    "name":"Madagascar",
    "location":{
      "lat":-18.766947,
      "lng":46.869107
    }
  },
  {
    "formattedName":"Malawi",
    "name":"Malawi",
    "location":{
      "lat":-13.254308,
      "lng":34.301525
    }
  },
  {
    "formattedName":"Malaysia",
    "name":"Malaysia",
    "location":{
      "lat":4.210484,
      "lng":101.975766
    }
  },
  {
    "formattedName":"Maldives",
    "name":"Maldives",
    "location":{
      "lat":1.977247,
      "lng":73.5361034
    }
  },
  {
    "formattedName":"Mali",
    "name":"Mali",
    "location":{
      "lat":17.570692,
      "lng":-3.996166
    }
  },
  {
    "formattedName":"Malta",
    "name":"Malta",
    "location":{
      "lat":35.937496,
      "lng":14.375416
    }
  },
  {
    "formattedName":"Marshall Islands",
    "name":"Marshall Islands",
    "location":{
      "lat":6.068393599999999,
      "lng":171.989379
    }
  },
  {
    "formattedName":"Mauritania",
    "name":"Mauritania",
    "location":{
      "lat":21.00789,
      "lng":-10.940835
    }
  },
  {
    "formattedName":"Mauritius",
    "name":"Mauritius",
    "location":{
      "lat":-20.348404,
      "lng":57.55215200000001
    }
  },
  {
    "formattedName":"Mexico",
    "name":"Mexico",
    "location":{
      "lat":23.634501,
      "lng":-102.552784
    }
  },
  {
    "formattedName":"Moldova",
    "name":"Moldova",
    "location":{
      "lat":47.411631,
      "lng":28.369885
    }
  },
  {
    "formattedName":"Monaco",
    "name":"Monaco",
    "location":{
      "lat":43.73841760000001,
      "lng":7.424615799999999
    }
  },
  {
    "formattedName":"Mongolia",
    "name":"Mongolia",
    "location":{
      "lat":46.862496,
      "lng":103.846656
    }
  },
  {
    "formattedName":"Morocco",
    "name":"Morocco",
    "location":{
      "lat":31.791702,
      "lng":-7.092619999999999
    }
  },
  {
    "formattedName":"Mozambique",
    "name":"Mozambique",
    "location":{
      "lat":-18.665695,
      "lng":35.529562
    }
  },
  {
    "formattedName":"Myanmar (Burma)",
    "name":"Myanmar (Burma)",
    "location":{
      "lat":21.913965,
      "lng":95.956223
    }
  },
  {
    "formattedName":"Namibia",
    "name":"Namibia",
    "location":{
      "lat":-22.95764,
      "lng":18.49041
    }
  },
  {
    "formattedName":"Nauru",
    "name":"Nauru",
    "location":{
      "lat":-0.522778,
      "lng":166.931503
    }
  },
  {
    "formattedName":"Nepal",
    "name":"Nepal",
    "location":{
      "lat":28.394857,
      "lng":84.12400799999999
    }
  },
  {
    "formattedName":"Netherlands",
    "name":"Netherlands",
    "location":{
      "lat":52.132633,
      "lng":5.291265999999999
    }
  },
  {
    "formattedName":"New Zealand",
    "name":"New Zealand",
    "location":{
      "lat":-40.900557,
      "lng":174.885971
    }
  },
  {
    "formattedName":"Nicaragua",
    "name":"Nicaragua",
    "location":{
      "lat":12.865416,
      "lng":-85.207229
    }
  },
  {
    "formattedName":"Niger",
    "name":"Niger",
    "location":{
      "lat":17.607789,
      "lng":8.081666
    }
  },
  {
    "formattedName":"Nigeria",
    "name":"Nigeria",
    "location":{
      "lat":9.081999,
      "lng":8.675277
    }
  },
  {
    "formattedName":"North Korea",
    "name":"North Korea",
    "location":{
      "lat":40.339852,
      "lng":127.510093
    }
  },
  {
    "formattedName":"Norway",
    "name":"Norway",
    "location":{
      "lat":60.47202399999999,
      "lng":8.468945999999999
    }
  },
  {
    "formattedName":"Oman",
    "name":"Oman",
    "location":{
      "lat":21.512583,
      "lng":55.923255
    }
  },
  {
    "formattedName":"Pakistan",
    "name":"Pakistan",
    "location":{
      "lat":30.375321,
      "lng":69.34511599999999
    }
  },
  {
    "formattedName":"Palau",
    "name":"Palau",
    "location":{
      "lat":7.514979999999999,
      "lng":134.58252
    }
  },
  {
    "formattedName":"Palestine",
    "name":"Palestine",
    "location":{
      "lat":31.952162,
      "lng":35.233154
    }
  },
  {
    "formattedName":"Panama",
    "name":"Panama",
    "location":{
      "lat":8.537981,
      "lng":-80.782127
    }
  },
  {
    "formattedName":"Papua New Guinea",
    "name":"Papua New Guinea",
    "location":{
      "lat":-6.314992999999999,
      "lng":143.95555
    }
  },
  {
    "formattedName":"Paraguay",
    "name":"Paraguay",
    "location":{
      "lat":-23.442503,
      "lng":-58.443832
    }
  },
  {
    "formattedName":"Peru",
    "name":"Peru",
    "location":{
      "lat":-9.189967,
      "lng":-75.015152
    }
  },
  {
    "formattedName":"Philippines",
    "name":"Philippines",
    "location":{
      "lat":12.879721,
      "lng":121.774017
    }
  },
  {
    "formattedName":"Poland",
    "name":"Poland",
    "location":{
      "lat":51.919438,
      "lng":19.145136
    }
  },
  {
    "formattedName":"Portugal",
    "name":"Portugal",
    "location":{
      "lat":39.39987199999999,
      "lng":-8.224454
    }
  },
  {
    "formattedName":"Qatar",
    "name":"Qatar",
    "location":{
      "lat":25.354826,
      "lng":51.183884
    }
  },
  {
    "formattedName":"Romania",
    "name":"Romania",
    "location":{
      "lat":45.943161,
      "lng":24.96676
    }
  },
  {
    "formattedName":"Russia",
    "name":"Russia",
    "location":{
      "lat":61.52401,
      "lng":105.318756
    }
  },
  {
    "formattedName":"Rwanda",
    "name":"Rwanda",
    "location":{
      "lat":-1.940278,
      "lng":29.873888
    }
  },
  {
    "formattedName":"Saint Kitts and Nevis",
    "name":"St. Kitts and Nevis",
    "location":{
      "lat":17.357822,
      "lng":-62.782998
    }
  },
  {
    "formattedName":"Saint Lucia",
    "name":"St. Lucia",
    "location":{
      "lat":13.909444,
      "lng":-60.978893
    }
  },
  {
    "formattedName":"Saint Vincent and the Grenadines",
    "name":"St. Vincent and The Grenadines",
    "location":{
      "lat":13.2528179,
      "lng":-61.19716279999999
    }
  },
  {
    "formattedName":"Samoa",
    "name":"Samoa",
    "location":{
      "lat":-13.759029,
      "lng":-172.104629
    }
  },
  {
    "formattedName":"San Marino",
    "name":"San Marino",
    "location":{
      "lat":43.94236,
      "lng":12.457777
    }
  },
  {
    "formattedName":"S\u00e3o Tom\u00e9 and Pr\u00edncipe",
    "name":"Sao Tome and Principe",
    "location":{
      "lat":0.18636,
      "lng":6.613080999999999
    }
  },
  {
    "formattedName":"Saudi Arabia",
    "name":"Saudi Arabia",
    "location":{
      "lat":23.885942,
      "lng":45.079162
    }
  },
  {
    "formattedName":"Senegal",
    "name":"Senegal",
    "location":{
      "lat":14.497401,
      "lng":-14.452362
    }
  },
  {
    "formattedName":"Seychelles",
    "name":"Seychelles",
    "location":{
      "lat":-4.679574,
      "lng":55.491977
    }
  },
  {
    "formattedName":"Sierra Leone",
    "name":"Sierra Leone",
    "location":{
      "lat":8.460555,
      "lng":-11.779889
    }
  },
  {
    "formattedName":"Singapore",
    "name":"Singapore",
    "location":{
      "lat":1.352083,
      "lng":103.819836
    }
  },
  {
    "formattedName":"Slovakia",
    "name":"Slovakia",
    "location":{
      "lat":48.669026,
      "lng":19.699024
    }
  },
  {
    "formattedName":"Slovenia",
    "name":"Slovenia",
    "location":{
      "lat":46.151241,
      "lng":14.995463
    }
  },
  {
    "formattedName":"Solomon Islands",
    "name":"Solomon Islands",
    "location":{
      "lat":-9.64571,
      "lng":160.156194
    }
  },
  {
    "formattedName":"Somalia",
    "name":"Somalia",
    "location":{
      "lat":5.152149,
      "lng":46.199616
    }
  },
  {
    "formattedName":"South Africa",
    "name":"South Africa",
    "location":{
      "lat":-30.559482,
      "lng":22.937506
    }
  },
  {
    "formattedName":"South Korea",
    "name":"South Korea",
    "location":{
      "lat":35.907757,
      "lng":127.766922
    }
  },
  {
    "formattedName":"Spain",
    "name":"Spain",
    "location":{
      "lat":40.46366700000001,
      "lng":-3.74922
    }
  },
  {
    "formattedName":"Sri Lanka",
    "name":"Sri Lanka",
    "location":{
      "lat":7.873053999999999,
      "lng":80.77179699999999
    }
  },
  {
    "formattedName":"Sudan",
    "name":"Sudan",
    "location":{
      "lat":12.862807,
      "lng":30.217636
    }
  },
  {
    "formattedName":"Suriname",
    "name":"Suriname",
    "location":{
      "lat":3.919305,
      "lng":-56.027783
    }
  },
  {
    "formattedName":"Swaziland",
    "name":"Swaziland",
    "location":{
      "lat":-26.522503,
      "lng":31.465866
    }
  },
  {
    "formattedName":"Sweden",
    "name":"Sweden",
    "location":{
      "lat":60.12816100000001,
      "lng":18.643501
    }
  },
  {
    "formattedName":"Switzerland",
    "name":"Switzerland",
    "location":{
      "lat":46.818188,
      "lng":8.227511999999999
    }
  },
  {
    "formattedName":"Syria",
    "name":"Syria",
    "location":{
      "lat":34.80207499999999,
      "lng":38.996815
    }
  },
  {
    "formattedName":"Taiwan",
    "name":"Taiwan",
    "location":{
      "lat":23.69781,
      "lng":120.960515
    }
  },
  {
    "formattedName":"Tajikistan",
    "name":"Tajikistan",
    "location":{
      "lat":38.861034,
      "lng":71.276093
    }
  },
  {
    "formattedName":"Tanzania",
    "name":"Tanzania",
    "location":{
      "lat":-6.369028,
      "lng":34.888822
    }
  },
  {
    "formattedName":"Thailand",
    "name":"Thailand",
    "location":{
      "lat":15.870032,
      "lng":100.992541
    }
  },
  {
    "formattedName":"Togo",
    "name":"Togo",
    "location":{
      "lat":8.619543,
      "lng":0.824782
    }
  },
  {
    "formattedName":"Tonga",
    "name":"Tonga",
    "location":{
      "lat":-21.178986,
      "lng":-175.198242
    }
  },
  {
    "formattedName":"Trinidad and Tobago",
    "name":"Trinidad and Tobago",
    "location":{
      "lat":10.691803,
      "lng":-61.222503
    }
  },
  {
    "formattedName":"Tunisia",
    "name":"Tunisia",
    "location":{
      "lat":33.886917,
      "lng":9.537499
    }
  },
  {
    "formattedName":"Turkey",
    "name":"Turkey",
    "location":{
      "lat":38.963745,
      "lng":35.243322
    }
  },
  {
    "formattedName":"Turkmenistan",
    "name":"Turkmenistan",
    "location":{
      "lat":38.969719,
      "lng":59.556278
    }
  },
  {
    "formattedName":"Tuvalu",
    "name":"Tuvalu",
    "location":{
      "lat":-7.478441800000001,
      "lng":178.6799214
    }
  },
  {
    "formattedName":"Uganda",
    "name":"Uganda",
    "location":{
      "lat":1.373333,
      "lng":32.290275
    }
  },
  {
    "formattedName":"Ukraine",
    "name":"Ukraine",
    "location":{
      "lat":48.379433,
      "lng":31.16558
    }
  },
  {
    "formattedName":"United Arab Emirates",
    "name":"United Arab Emirates",
    "location":{
      "lat":23.424076,
      "lng":53.847818
    }
  },
  {
    "formattedName":"United Kingdom",
    "name":"United Kingdom",
    "location":{
      "lat":55.378051,
      "lng":-3.435973
    }
  },
  {
    "formattedName":"United States",
    "name":"United States of America",
    "location":{
      "lat":37.09024,
      "lng":-95.712891
    }
  },
  {
    "formattedName":"Uruguay",
    "name":"Uruguay",
    "location":{
      "lat":-32.522779,
      "lng":-55.765835
    }
  },
  {
    "formattedName":"Uzbekistan",
    "name":"Uzbekistan",
    "location":{
      "lat":41.377491,
      "lng":64.585262
    }
  },
  {
    "formattedName":"Vanuatu",
    "name":"Vanuatu",
    "location":{
      "lat":-15.376706,
      "lng":166.959158
    }
  },
  {
    "formattedName":"Vatican City",
    "name":"Vatican City",
    "location":{
      "lat":41.902916,
      "lng":12.453389
    }
  },
  {
    "formattedName":"Venezuela",
    "name":"Venezuela",
    "location":{
      "lat":6.42375,
      "lng":-66.58973
    }
  },
  {
    "formattedName":"Vietnam",
    "name":"Vietnam",
    "location":{
      "lat":14.058324,
      "lng":108.277199
    }
  },
  {
    "formattedName":"Yemen",
    "name":"Yemen",
    "location":{
      "lat":15.552727,
      "lng":48.516388
    }
  },
  {
    "formattedName":"Zambia",
    "name":"Zambia",
    "location":{
      "lat":-13.133897,
      "lng":27.849332
    }
  },
  {
    "formattedName":"Zimbabwe",
    "name":"Zimbabwe",
    "location":{
      "lat":-19.015438,
      "lng":29.154857
    }
  }
];