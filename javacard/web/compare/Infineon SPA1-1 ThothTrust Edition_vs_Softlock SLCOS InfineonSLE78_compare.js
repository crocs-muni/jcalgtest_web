var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.981,title:"6.91 ms"},
{axis:"SHA-1 hash (256B)",value:0.843,title:"10.84 ms"},
{axis:"SHA2-256 hash (256B)",value:0.881,title:"15.05 ms"},
{axis:"AES128 encrypt (256B)",value:0.989,title:"1.14 ms"},
{axis:"AES256 encrypt (256B)",value:0.995,title:"0.66 ms"},
{axis:"3DES encrypt (256B)",value:0.996,title:"0.79 ms"},
{axis:"3DES setKey(192b)",value:0.545,title:"22.58 ms"},
{axis:"AES setKey(128b)",value:0.557,title:"21.68 ms"},
{axis:"AES setKey(256b)",value:0.526,title:"23.45 ms"},
{axis:"SWAES oneblock (16B)",value:0.878,title:"289.41 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.966,title:"0.22 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.993,title:"0.31 ms"},
{axis:"ECC 256b genKeyPair",value:1.432,title:"-412.0 ms"},
{axis:"ECDSA 256b sign",value:0.758,title:"39.19 ms"},
{axis:"ECDSA 256b verify",value:0.828,title:"40.35 ms"},
{axis:"ECDH 256b",value:1.065,title:"-13.44 ms"},
{axis:"RSA2048 CRT decrypt",value:0.963,title:"64.82 ms"},
{axis:"RSA2048 CRT encrypt",value:1.161,title:"-13.22 ms"},
{axis:"RSA2048 CRT generate",value:0.943,title:"4409.4 ms"},
{axis:"RSA2048 decrypt",value:0.933,title:"217.29 ms"},
{axis:"RSA2048 encrypt",value:1.074,title:"-6.1 ms"},
{axis:"RSA2048 generate",value:0.928,title:"3544.0 ms"},
{axis:"RSA1024 CRT generate",value:0.945,title:"371.1 ms"},
{axis:"RSA1024 CRT decrypt",value:0.939,title:"26.96 ms"},
{axis:"RSA1024 CRT encrypt",value:1.362,title:"-14.49 ms"},
{axis:"RSA1024 generate",value:0.965,title:"234.1 ms"},
{axis:"RSA1024 decrypt",value:0.921,title:"37.62 ms"},
{axis:"RSA1024 encrypt",value:1.184,title:"-7.37 ms"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.910,title:"32.12 ms"},
{axis:"SHA-1 hash (256B)",value:0.628,title:"25.76 ms"},
{axis:"SHA2-256 hash (256B)",value:0.712,title:"36.56 ms"},
{axis:"AES128 encrypt (256B)",value:0.976,title:"2.42 ms"},
{axis:"AES256 encrypt (256B)",value:0.981,title:"2.46 ms"},
{axis:"3DES encrypt (256B)",value:0.989,title:"2.24 ms"},
{axis:"3DES setKey(192b)",value:0.791,title:"10.4 ms"},
{axis:"AES setKey(128b)",value:0.853,title:"7.19 ms"},
{axis:"AES setKey(256b)",value:0.848,title:"7.52 ms"},
{axis:"SWAES oneblock (16B)",value:0.555,title:"1058.14 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.807,title:"1.23 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.829,title:"7.19 ms"},
{axis:"ECC 256b genKeyPair",value:0.836,title:"156.9 ms"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.920,title:"139.55 ms"},
{axis:"RSA2048 CRT encrypt",value:0.903,title:"7.94 ms"},
{axis:"RSA2048 CRT generate",value:0.873,title:"9763.7 ms"},
{axis:"RSA2048 decrypt",value:0.869,title:"426.26 ms"},
{axis:"RSA2048 encrypt",value:0.903,title:"8.0 ms"},
{axis:"RSA2048 generate",value:0.861,title:"6788.5 ms"},
{axis:"RSA1024 CRT generate",value:0.840,title:"1077.5 ms"},
{axis:"RSA1024 CRT decrypt",value:0.872,title:"56.27 ms"},
{axis:"RSA1024 CRT encrypt",value:0.865,title:"5.43 ms"},
{axis:"RSA1024 generate",value:0.872,title:"855.6 ms"},
{axis:"RSA1024 decrypt",value:0.855,title:"69.61 ms"},
{axis:"RSA1024 encrypt",value:0.858,title:"5.69 ms"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);