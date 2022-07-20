var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.906,title:"33.77 ms"},
{axis:"SHA-1 hash (256B)",value:0.822,title:"12.35 ms"},
{axis:"SHA2-256 hash (256B)",value:0.823,title:"22.39 ms"},
{axis:"AES128 encrypt (256B)",value:0.886,title:"11.65 ms"},
{axis:"AES256 encrypt (256B)",value:0.892,title:"14.02 ms"},
{axis:"3DES encrypt (256B)",value:0.940,title:"12.24 ms"},
{axis:"3DES setKey(192b)",value:0.369,title:"31.35 ms"},
{axis:"AES setKey(128b)",value:0.520,title:"23.48 ms"},
{axis:"AES setKey(256b)",value:0.488,title:"25.33 ms"},
{axis:"SWAES oneblock (16B)",value:0.889,title:"263.92 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.926,title:"0.47 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.955,title:"1.9 ms"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.635,title:"635.92 ms"},
{axis:"RSA2048 CRT encrypt",value:0.781,title:"18.02 ms"},
{axis:"RSA2048 CRT generate",value:0.724,title:"21137.9 ms"},
{axis:"RSA2048 decrypt",value:0.377,title:"2023.08 ms"},
{axis:"RSA2048 encrypt",value:0.781,title:"18.04 ms"},
{axis:"RSA2048 generate",value:0.454,title:"26745.0 ms"},
{axis:"RSA1024 CRT generate",value:0.600,title:"2690.9 ms"},
{axis:"RSA1024 CRT decrypt",value:0.663,title:"148.12 ms"},
{axis:"RSA1024 CRT encrypt",value:0.772,title:"9.15 ms"},
{axis:"RSA1024 generate",value:0.537,title:"3093.0 ms"},
{axis:"RSA1024 decrypt",value:0.368,title:"302.93 ms"},
{axis:"RSA1024 encrypt",value:0.771,title:"9.15 ms"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.962,title:"13.64 ms"},
{axis:"SHA-1 hash (256B)",value:0.838,title:"11.24 ms"},
{axis:"SHA2-256 hash (256B)",value:0.838,title:"20.58 ms"},
{axis:"AES128 encrypt (256B)",value:0.392,title:"62.24 ms"},
{axis:"AES256 encrypt (256B)",value:0.394,title:"78.64 ms"},
{axis:"3DES encrypt (256B)",value:0.364,title:"130.25 ms"},
{axis:"3DES setKey(192b)",value:0.721,title:"13.85 ms"},
{axis:"AES setKey(128b)",value:0.779,title:"10.81 ms"},
{axis:"AES setKey(256b)",value:0.717,title:"14.0 ms"},
{axis:"SWAES oneblock (16B)",value:0.864,title:"323.64 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.922,title:"0.5 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.957,title:"1.8 ms"},
{axis:"ECC 256b genKeyPair",value:0.896,title:"98.85 ms"},
{axis:"ECDSA 256b sign",value:0.526,title:"76.71 ms"},
{axis:"ECDSA 256b verify",value:0.497,title:"118.18 ms"},
{axis:"ECDH 256b",value:0.503,title:"103.3 ms"},
{axis:"RSA2048 CRT decrypt",value:0.755,title:"426.78 ms"},
{axis:"RSA2048 CRT encrypt",value:0.760,title:"19.75 ms"},
{axis:"RSA2048 CRT generate",value:0.684,title:"24244.4 ms"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 generate",value:0.0,title:"NS"},
{axis:"RSA1024 CRT generate",value:0.701,title:"2008.3 ms"},
{axis:"RSA1024 CRT decrypt",value:0.815,title:"81.42 ms"},
{axis:"RSA1024 CRT encrypt",value:0.798,title:"8.09 ms"},
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