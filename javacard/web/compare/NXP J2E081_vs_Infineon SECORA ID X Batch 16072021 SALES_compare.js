var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.960,title:"14.27 ms"},
{axis:"SHA-1 hash (256B)",value:0.826,title:"12.06 ms"},
{axis:"SHA2-256 hash (256B)",value:0.824,title:"22.33 ms"},
{axis:"AES128 encrypt (256B)",value:0.358,title:"65.72 ms"},
{axis:"AES256 encrypt (256B)",value:0.361,title:"82.96 ms"},
{axis:"3DES encrypt (256B)",value:0.329,title:"137.44 ms"},
{axis:"3DES setKey(192b)",value:0.892,title:"5.38 ms"},
{axis:"AES setKey(128b)",value:0.893,title:"5.22 ms"},
{axis:"AES setKey(256b)",value:0.888,title:"5.57 ms"},
{axis:"SWAES oneblock (16B)",value:0.857,title:"339.77 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.920,title:"0.51 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.954,title:"1.92 ms"},
{axis:"ECC 256b genKeyPair",value:0.859,title:"134.85 ms"},
{axis:"ECDSA 256b sign",value:0.455,title:"88.23 ms"},
{axis:"ECDSA 256b verify",value:0.454,title:"128.23 ms"},
{axis:"ECDH 256b",value:0.427,title:"118.9 ms"},
{axis:"RSA2048 CRT decrypt",value:0.754,title:"428.98 ms"},
{axis:"RSA2048 CRT encrypt",value:0.756,title:"20.06 ms"},
{axis:"RSA2048 CRT generate",value:0.821,title:"13742.6 ms"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 generate",value:0.0,title:"NS"},
{axis:"RSA1024 CRT generate",value:0.743,title:"1724.4 ms"},
{axis:"RSA1024 CRT decrypt",value:0.812,title:"82.58 ms"},
{axis:"RSA1024 CRT encrypt",value:0.793,title:"8.3 ms"},
{axis:"RSA1024 generate",value:0.0,title:"NS"},
{axis:"RSA1024 decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 encrypt",value:0.0,title:"NS"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.948,title:"18.71 ms"},
{axis:"SHA-1 hash (256B)",value:0.349,title:"45.1 ms"},
{axis:"SHA2-256 hash (256B)",value:0.460,title:"68.5 ms"},
{axis:"AES128 encrypt (256B)",value:0.930,title:"7.13 ms"},
{axis:"AES256 encrypt (256B)",value:0.938,title:"8.07 ms"},
{axis:"3DES encrypt (256B)",value:0.971,title:"5.88 ms"},
{axis:"3DES setKey(192b)",value:0.334,title:"33.07 ms"},
{axis:"AES setKey(128b)",value:0.362,title:"31.21 ms"},
{axis:"AES setKey(256b)",value:0.307,title:"34.31 ms"},
{axis:"SWAES oneblock (16B)",value:0.710,title:"688.85 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.908,title:"0.59 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.986,title:"0.58 ms"},
{axis:"ECC 256b genKeyPair",value:1.768,title:"-732.8 ms"},
{axis:"ECDSA 256b sign",value:0.637,title:"58.84 ms"},
{axis:"ECDSA 256b verify",value:0.725,title:"64.66 ms"},
{axis:"ECDH 256b",value:0.967,title:"6.84 ms"},
{axis:"RSA2048 CRT decrypt",value:0.885,title:"200.2 ms"},
{axis:"RSA2048 CRT encrypt",value:1.201,title:"-16.56 ms"},
{axis:"RSA2048 CRT generate",value:0.827,title:"13287.0 ms"},
{axis:"RSA2048 decrypt",value:0.828,title:"557.93 ms"},
{axis:"RSA2048 encrypt",value:1.119,title:"-9.82 ms"},
{axis:"RSA2048 generate",value:0.788,title:"10402.7 ms"},
{axis:"RSA1024 CRT generate",value:0.783,title:"1457.6 ms"},
{axis:"RSA1024 CRT decrypt",value:0.807,title:"85.1 ms"},
{axis:"RSA1024 CRT encrypt",value:1.450,title:"-18.05 ms"},
{axis:"RSA1024 generate",value:0.737,title:"1756.0 ms"},
{axis:"RSA1024 decrypt",value:0.507,title:"236.4 ms"},
{axis:"RSA1024 encrypt",value:1.327,title:"-13.09 ms"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);