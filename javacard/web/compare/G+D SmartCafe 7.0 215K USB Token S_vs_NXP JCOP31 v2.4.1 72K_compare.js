var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.935,title:"23.3 ms"},
{axis:"SHA-1 hash (256B)",value:0.933,title:"4.65 ms"},
{axis:"SHA2-256 hash (256B)",value:0.927,title:"9.3 ms"},
{axis:"AES128 encrypt (256B)",value:0.935,title:"6.68 ms"},
{axis:"AES256 encrypt (256B)",value:0.944,title:"7.28 ms"},
{axis:"3DES encrypt (256B)",value:0.958,title:"8.54 ms"},
{axis:"3DES setKey(192b)",value:0.920,title:"3.97 ms"},
{axis:"AES setKey(128b)",value:0.919,title:"3.95 ms"},
{axis:"AES setKey(256b)",value:0.920,title:"3.98 ms"},
{axis:"SWAES oneblock (16B)",value:0.893,title:"254.66 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.956,title:"0.28 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.985,title:"0.64 ms"},
{axis:"ECC 256b genKeyPair",value:0.783,title:"206.7 ms"},
{axis:"ECDSA 256b sign",value:0.677,title:"52.34 ms"},
{axis:"ECDSA 256b verify",value:0.711,title:"67.91 ms"},
{axis:"ECDH 256b",value:0.693,title:"63.7 ms"},
{axis:"RSA2048 CRT decrypt",value:0.938,title:"107.43 ms"},
{axis:"RSA2048 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT generate",value:0.949,title:"3913.4 ms"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.927,title:"5.97 ms"},
{axis:"RSA2048 generate",value:0.943,title:"2785.3 ms"},
{axis:"RSA1024 CRT generate",value:0.912,title:"591.8 ms"},
{axis:"RSA1024 CRT decrypt",value:0.915,title:"37.36 ms"},
{axis:"RSA1024 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA1024 generate",value:0.926,title:"497.1 ms"},
{axis:"RSA1024 decrypt",value:0.891,title:"52.34 ms"},
{axis:"RSA1024 encrypt",value:0.911,title:"3.58 ms"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.941,title:"20.97 ms"},
{axis:"SHA-1 hash (256B)",value:0.508,title:"34.1 ms"},
{axis:"SHA2-256 hash (256B)",value:0.479,title:"66.02 ms"},
{axis:"AES128 encrypt (256B)",value:0.800,title:"20.44 ms"},
{axis:"AES256 encrypt (256B)",value:0.829,title:"22.24 ms"},
{axis:"3DES encrypt (256B)",value:0.903,title:"19.95 ms"},
{axis:"3DES setKey(192b)",value:0.865,title:"6.7 ms"},
{axis:"AES setKey(128b)",value:0.870,title:"6.38 ms"},
{axis:"AES setKey(256b)",value:0.858,title:"7.04 ms"},
{axis:"SWAES oneblock (16B)",value:0.798,title:"479.83 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.875,title:"0.8 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.918,title:"3.44 ms"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.631,title:"642.86 ms"},
{axis:"RSA2048 CRT encrypt",value:0.622,title:"31.12 ms"},
{axis:"RSA2048 CRT generate",value:0.590,title:"31464.6 ms"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 generate",value:0.0,title:"NS"},
{axis:"RSA1024 CRT generate",value:0.680,title:"2151.2 ms"},
{axis:"RSA1024 CRT decrypt",value:0.715,title:"125.48 ms"},
{axis:"RSA1024 CRT encrypt",value:0.676,title:"12.98 ms"},
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