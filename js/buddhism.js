
    window.onload = function() {

      var j=0;

  var dialogueBox = document.getElementById('buddhismDialogueBox');


  var btn = document.getElementById("myBtn");


  var span = document.getElementsByClassName("close")[0];


  btn.onclick = function() {
      dialogueBox.style.display = "block";
  }


  span.onclick = function() {

    if (j===0)
    {

    document.getElementById("m_title").innerHTML="Mantra #2";
    document.getElementById("mantra").innerHTML="2) Om Mani Padme Hum";
    document.getElementById("desc").innerHTML="The meaning is 'Homage to the Jewel in the Lotus.'";

    j++;
    }
    else if (j==1)
    {
    document.getElementById("m_title").innerHTML="Mantra #3";
    document.getElementById("mantra").innerHTML="3) Namo Amituofo";
    document.getElementById("desc").innerHTML="This mantra helps Buddhists receive protection, have compassion for others and get strength to solve their problems.";
    j++;
    }
    else if (j==2)
    {
      document.getElementById("m_title").innerHTML="Mantra #4";
    document.getElementById("mantra").innerHTML="4) Om Muni Muni Mahāmuni Sākyamuni Svāhā";
    document.getElementById("desc").innerHTML="This means 'Om wise one, wise one, great wise one, to the wise one of the Shakyans hail!'";
    j++;
    }

    else if (j==3)
    {
      document.getElementById("m_title").innerHTML="Mantra #5";
    document.getElementById("mantra").innerHTML="5) Oṃ Tāre Tuttāre Ture Svāhā";
    document.getElementById("desc").innerHTML="Reciting this mantra helps Buddhists to receive protection, heal sickness and fix problems they have in their relationships.";
    j++;
    }
    else if (j==4)
    {
      document.getElementById("m_title").innerHTML="Mantra #6";
    document.getElementById("mantra").innerHTML="6) Oṃ Tāre Tuttāre Ture Mama Ayuḥ Punya Jñānā Puṣtiṃ Kuru Svāhā";
    document.getElementById("desc").innerHTML="This mantra is recited to get the attention from the White Tara god, who promotes long life. Buddhists usually recite this mantra when they are sick.";
    j++;
    }
   else if (j==5)
    {
      document.getElementById("m_title").innerHTML="Mantra #7";
    document.getElementById("mantra").innerHTML="7) Om A Ra Pa Ca Na Dhih";
    document.getElementById("desc").innerHTML="Reciting this mantra helps the Buddhist to gain wisdom and clarity so they can make good decisions.";
    j++;
    }

    else if (j==6)
    {
      document.getElementById("m_title").innerHTML="Mantra #8";
    document.getElementById("mantra").innerHTML="8) Tayata Om Bekanze Bekanze Maha BeKanze Radza Samudgate Soha";
    document.getElementById("desc").innerHTML="This mantra means “Hail! Appear, O Healer, O Healer, O Great Healer, O King of Healing!” This helps get the attention of the Medicine Buddha who is also known as Bhaiṣajyaguru.";
    j++;
    }

    else if (j==7)
    {
      document.getElementById("m_title").innerHTML="Mantra #9";
    document.getElementById("mantra").innerHTML="9) Gate Gate Para Gate Parasam Gate Bodhi Svaha";
    document.getElementById("desc").innerHTML="This means 'Going, going, going on beyond, always going on beyond, always becoming Buddha.'";
    j++;
    }
    else if (j==8)
    {
      document.getElementById("m_title").innerHTML="Mantra #10";
    document.getElementById("mantra").innerHTML="10) Nam Myoho Renge Kyo";
    document.getElementById("desc").innerHTML="This mantra helps you think like Buddha would so you can reach Buddhahood.";
    j++;
    }
    else if(j==9)
    {
      document.getElementById("m_title").innerHTML="Mantra #1";
      document.getElementById("mantra").innerHTML="1) Namo Tassa Bhagavato Arahato Samma Sambuddhassa";
      document.getElementById("desc").innerHTML="This means, 'Honor to the Blessed One, the Exalted One, the fully Enlightened One.'";


      j=0;

    }


  }


  window.onclick = function(event) {
      if (event.target == dialogueBox) {
          dialogueBox.style.display = "none";
      }
  }



      var locations = [
        ['Cambodia - Buddhism Population-96% ', 12.565679,104.990963, 96],
        ['Thailand	- Buddhism Population-93.20%' ,15.870032	,100.992541,93.20],
        ['Burma - Buddhism Population-80.10%',	21.913965,	95.956223,80.10],
        ['Bhutan	- Buddhism Population-74.70%',	27.514162,	90.433601,74.70],
        ['Sri Lanka	- Buddhism Population-69.30%',	7.873054,	80.771797,69.30],
        ['Laos	- Buddhism Population-66.00%',	19.85627,	102.495496,66.00],
        ['Mongolia	- Buddhism Population-55.10%',	46.862496,	103.846656,55.10],
        ['Japan	- Buddhism Population-36.20%',	36.204824,	138.252924,36.20],
        ['Singapore	- Buddhism Population-33.90%',	1.352083,	103.819836,33.90],
        ['South Korea	- Buddhism Population-22.90%',	35.907757,	127.766922,22.90],
        ['Taiwan	- Buddhism Population-21.30%',	23.69781,	120.960515,21.30],
        ['China	- Buddhism Population-18.20%',	35.86166,	104.195397,18.20],
        ['Malaysia	- Buddhism Population-17.70%',	4.210484,	101.975766,17.70],
        ['Macau	- Buddhism Population-17.30%',	22.198745,	113.543873,17.30],
        ['Vietnam	- Buddhism Population-16.40%',	14.058324,	108.277199,16.40],
        ['Hong Kong	- Buddhism Population-13.20%',	22.396428,	114.109497,13.20],
        ['Northern Mariana Islands - Buddhism Population-10.60%',	17.33083,	145.38469,10.60],
        ['Nepal	- Buddhism Population-10.30%',28.394857,	84.124008,10.30],
        ['Brunei	- Buddhism Population-8.60%',	4.535277,	114.727669,8.60],
        ['Kuwait	- Buddhism Population-2.80%',	29.31166,	47.481766,2.80],
        ['Australia	- Buddhism Population-2.70%',	-25.274398,	133.775136,2.70],
        ['Bahrain	- Buddhism Population-2.50%',	25.930414,	50.637772,2.50],
        ['United Arab Emirates	- Buddhism Population-2.00%',	23.424076,	53.847818,2.00],
        ['New Zealand	- Buddhism Population-1.60%',	-40.900557,	174.885971,1.60],
        ['North Korea	- Buddhism Population-1.50%',	40.339852,	127.510093,1.50],
        ['United States	- Buddhism Population-1.20%',	37.09024,	-95.712891,1.20],
        ['Guam	- Buddhism Population-1.10%',	13.444304,	144.793731,1.10],
        ['Nauru	- Buddhism Population-1.10%',	-0.522778,	166.931503,1.10],
        ['Canada	- Buddhism Population-0.80%',	56.130366,	-106.346771,0.80],
        ['India	- Buddhism Population-0.80%',	20.593684,	78.96288,0.80],
        ['Oman	- Buddhism Population-0.80%',	21.512583,	55.923255,0.80],
        ['Palau	- Buddhism Population-0.80%',	7.51498,	134.58252,0.80],
        ['Indonesia	- Buddhism Population-0.70%',-0.789275,	113.921327,0.70],
        ['Maldives	- Buddhism Population-0.60%',3.202778,	73.22068,0.60],
        ['New Caledonia	- Buddhism Population-0.60%',-20.904305,165.618042,0.60],
        ['Norway	- Buddhism Population-0.60%',60.472024,	8.468946,0.60],
        ['Portugal	- Buddhism Population-0.60%',	39.399872,	-8.224454,0.60],
        ['Suriname	- Buddhism Population-0.60%',	3.919305,	-56.027783,0.60],
        ['Bangladesh	- Buddhism Population-0.50%',	23.684994,	90.356331,0.50],
        ['Belize	- Buddhism Population-0.50%',	17.189877,	-88.49765,0.50],
        ['Bermuda	- Buddhism Population-0.50%',	32.321384,	-64.75737,0.50],
        ['France	- Buddhism Population-0.50%',	46.227638,	2.213749,0.50],
        ['Netherlands Antilles	- Buddhism Population-0.50%',	12.226079,	-69.060087,0.50],
        ['Iceland	- Buddhism Population-0.40%',	64.963051,	-19.020835,0.40],
        ['Jordan	- Buddhism Population-0.40%',	30.585164,	36.238414,0.40],
        ['Sweden	- Buddhism Population-0.40%',	60.128161,	18.643501,0.40],
        ['Switzerland	- Buddhism Population-0.40%',	46.818188,	8.227512,0.40],
        ['United Kingdom	- Buddhism Population-0.40%',	55.378051,	-3.435973,0.40],
        ['American Samoa	- Buddhism Population-0.30%',	-14.270972,	-170.132217,0.30],
        ['Germany	- Buddhism Population-0.30%',	51.165691,	10.451526,0.30],
        ['Israel	- Buddhism Population-0.30%',	31.046051,	34.851612,0.30],
        ['Libya	- Buddhism Population-0.30%',	26.3351,	17.228331,0.30],
        ['Puerto Rico	- Buddhism Population-0.30%',	18.220833,	-66.590149,0.30],
        ['Saudi Arabia	- Buddhism Population-0.30%',	23.885942,	45.079162,0.30],
        ['Solomon Islands	- Buddhism Population-0.30%',	-9.64571,	160.156194,0.30],
        ['Trinidad and Tobago	- Buddhism Population-0.30%',	10.691803,	-61.222503,0.30],
        ['Austria	- Buddhism Population-0.20%',	47.516231,	14.550072,0.20],
        ['Belgium	- Buddhism Population-0.20%',	50.503887,	4.469936,0.20],
        ['Cyprus	- Buddhism Population-0.20%',	35.126413,	33.429859,0.20],
        ['Denmark	- Buddhism Population-0.20%',	56.26392,	9.501785,0.20],
        ['Ireland	- Buddhism Population-0.20%',53.41291,	-8.24389,0.20],
        ['Italy	- Buddhism Population-0.20%',	41.87194,	12.56738,0.20],
        ['Kazakhstan	- Buddhism Population-0.20%',	48.019573,	66.923684,0.20],
        ['Lebanon	- Buddhism Population-0.20%',	33.854721,	35.862285,0.20],
        ['Netherlands	- Buddhism Population-0.20%',	52.132633,	5.291266,0.20],
        ['Panama	- Buddhism Population-0.20%',	8.537981,	-80.782127,0.20],
        ['Peru	- Buddhism Population-0.20%',	-9.189967,	-75.015152,0.20],
        ['South Africa	- Buddhism Population-0.20%',	-30.559482,	22.937506,0.20]
        ['Aruba	- Buddhism Population-0.10%',	12.52111,	-69.968338,0.10],
        ['Brazil	- Buddhism Population-0.10%',	-14.235004,	-51.92528,0.10],
        ['Dominica	- Buddhism Population-0.10%',	15.414999	,-61.370976,0.10],
        ['Honduras	- Buddhism Population-0.10%',	15.199999,	-86.241905,0.10],
        ['Russia	- Buddhism Population-0.10%',	61.52401,	105.318756,0.10],
        ['Afghanistan	- Buddhism Population- < 0.1%',	33.93911,	67.709953,81],
        ['Albania	- Buddhism Population-< 0.1%',	41.153332,	20.168331,82],
        ['Algeria	- Buddhism Population-< 0.1%',	28.033886,	1.659626,83],
        ['Andorra	- Buddhism Population-< 0.1%',	42.546245,	1.601554,84],
        ['Angola	- Buddhism Population-< 0.1%',	-11.202692,	17.873887,85],
        ['Anguilla	- Buddhism Population-< 0.1%',	18.220554,	-63.068615,86],
        ['Antigua and Barbuda	- Buddhism Population-< 0.1%',	17.060816,	-61.796428,87],
        ['Argentina	- Buddhism Population-< 0.1%',	-38.416097,	-63.616672,88],
        ['Armenia	- Buddhism Population-< 0.1%',	40.069099,	45.038189,89],
        ['Azerbaijan	- Buddhism Population-< 0.1%',	40.143105,	47.576927,90],
        ['Bahamas	- Buddhism Population-< 0.1%',	25.03428,	-77.39628,91],
        ['Barbados	- Buddhism Population-< 0.1%',	13.193887,	-59.543198,92],
        ['Belarus	- Buddhism Population-< 0.1%',	53.709807,	27.953389,93],
        ['Benin	- Buddhism Population-< 0.1%',	9.30769,	2.315834,94],
        ['Bolivia	- Buddhism Population-< 0.1%',	-16.290154,	-63.588653,95],
        ['Botswana	- Buddhism Population-< 0.1%',	-22.328474,	24.684866,96],
        ['British Virgin Islands	- Buddhism Population-< 0.1%',	18.420695,	-64.639968,97],
        ['Bulgaria	- Buddhism Population-< 0.1%',	42.733883,	25.48583,98],
        ['Burkina Faso	- Buddhism Population-< 0.1%',	12.238333,	-1.561593,99],
        ['Burundi	- Buddhism Population-< 0.1%',	-3.373056	,29.918886,100],
        ['Cameroon	- Buddhism Population-< 0.1%',	7.369722,	12.354722,101]
      ];



        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 2,
          center: new google.maps.LatLng(-33.92, 151.25),
          mapTypeId: google.maps.MapTypeId.TERRAIN
        });

        var infowindow = new google.maps.InfoWindow();

        var marker, i;

        for (i = 0; i < locations.length; i++)
        {


      if(parseFloat(locations[i][3])>90 && parseFloat(locations[i][3])<100)
      {

          marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: {
        path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
        strokeColor: "rgb(64, 26, 57)",
        scale: 3
        }
      });
    }
    else if(parseFloat(locations[i][3])>80 && parseFloat(locations[i][3])<=90)
    {


              marker = new google.maps.Marker({
              position: new google.maps.LatLng(locations[i][1], locations[i][2]),
              map: map,
        icon: {
       path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
       strokeColor: "rgb(130, 55, 116)",
       scale: 3
      }
        });
    }
    else if(parseFloat(locations[i][3])>70 && parseFloat(locations[i][3])<=80)
    {


         marker = new google.maps.Marker({
              position: new google.maps.LatLng(locations[i][1], locations[i][2]),
              map: map,
        icon: {
       path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
       strokeColor: "rgb(174, 74, 155)",
       scale: 3
      }
        });


    }
    else if(parseFloat(locations[i][3])>50 && parseFloat(locations[i][3])<=70)
    {

         marker = new google.maps.Marker({
              position: new google.maps.LatLng(locations[i][1], locations[i][2]),
              map: map,
        icon: {
       path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
       strokeColor: "rgb(218, 93, 194)",
       scale: 3
      }
        });




    }

    else if(parseFloat(locations[i][3])>30 && parseFloat(locations[i][3])<=50)
    {

         marker = new google.maps.Marker({
              position: new google.maps.LatLng(locations[i][1], locations[i][2]),
              map: map,
        icon: {
       path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
       strokeColor: "rgb(221, 118, 204)",
       scale: 3
      }
        });



    }
    else if(parseFloat(locations[i][3])>15 && parseFloat(locations[i][3])<=30)
    {


       marker = new google.maps.Marker({
              position: new google.maps.LatLng(locations[i][1], locations[i][2]),
              map: map,
        icon: {
       path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
       strokeColor: "rgb(226, 149, 216)",
       scale: 3
      }
        });


    }
    else if(parseFloat(locations[i][3])>5 && parseFloat(locations[i][3])<=15)
    {


         marker = new google.maps.Marker({
              position: new google.maps.LatLng(locations[i][1], locations[i][2]),
              map: map,
        icon: {
       path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
       strokeColor: "rgb(233, 182, 229)",
       scale: 3
      }
        });


    }
    else if(parseFloat(locations[i][3])>1 && parseFloat(locations[i][3])<=5)
    {

         marker = new google.maps.Marker({
              position: new google.maps.LatLng(locations[i][1], locations[i][2]),
              map: map,
        icon: {
       path: google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
       strokeColor: "rgb(233, 182, 229)",
       scale: 3
      }
        });



    }


          google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
              infowindow.setContent(locations[i][0]);
              infowindow.open(map, marker);
            }
          })(marker, i));
        }
        };
