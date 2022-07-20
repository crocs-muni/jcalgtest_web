var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.854,title:"52.49 ms"},
{axis:"SHA-1 hash (256B)",value:0.660,title:"23.53 ms"},
{axis:"SHA2-256 hash (256B)",value:0.0,title:"NS"},
{axis:"AES128 encrypt (256B)",value:0.0,title:"NS"},
{axis:"AES256 encrypt (256B)",value:0.0,title:"NS"},
{axis:"3DES encrypt (256B)",value:0.922,title:"16.05 ms"},
{axis:"3DES setKey(192b)",value:0.490,title:"25.31 ms"},
{axis:"AES setKey(128b)",value:0.0,title:"NS"},
{axis:"AES setKey(256b)",value:0.0,title:"NS"},
{axis:"SWAES oneblock (16B)",value:0.099,title:"2140.21 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.099,title:"5.75 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.099,title:"37.92 ms"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.500,title:"871.61 ms"},
{axis:"RSA2048 CRT encrypt",value:0.099,title:"74.1 ms"},
{axis:"RSA2048 CRT generate",value:0.099,title:"69095.6 ms"},
{axis:"RSA2048 decrypt",value:0.099,title:"2927.22 ms"},
{axis:"RSA2048 encrypt",value:0.099,title:"74.07 ms"},
{axis:"RSA2048 generate",value:0.099,title:"44143.8 ms"},
{axis:"RSA1024 CRT generate",value:0.099,title:"6056.5 ms"},
{axis:"RSA1024 CRT decrypt",value:0.625,title:"164.94 ms"},
{axis:"RSA1024 CRT encrypt",value:0.099,title:"36.11 ms"},
{axis:"RSA1024 generate",value:0.099,title:"6012.1 ms"},
{axis:"RSA1024 decrypt",value:0.099,title:"431.63 ms"},
{axis:"RSA1024 encrypt",value:0.099,title:"36.07 ms"},
],
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
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);