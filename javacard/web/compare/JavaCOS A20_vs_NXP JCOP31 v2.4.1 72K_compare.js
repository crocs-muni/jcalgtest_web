var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.963,title:"13.1 ms"},
{axis:"SHA-1 hash (256B)",value:0.930,title:"4.88 ms"},
{axis:"SHA2-256 hash (256B)",value:0.664,title:"42.57 ms"},
{axis:"AES128 encrypt (256B)",value:0.957,title:"4.37 ms"},
{axis:"AES256 encrypt (256B)",value:0.967,title:"4.33 ms"},
{axis:"3DES encrypt (256B)",value:0.974,title:"5.27 ms"},
{axis:"3DES setKey(192b)",value:0.982,title:"0.91 ms"},
{axis:"AES setKey(128b)",value:0.981,title:"0.93 ms"},
{axis:"AES setKey(256b)",value:0.981,title:"0.96 ms"},
{axis:"SWAES oneblock (16B)",value:0.843,title:"373.29 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.646,title:"2.26 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.972,title:"1.19 ms"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.906,title:"163.15 ms"},
{axis:"RSA2048 CRT encrypt",value:0.884,title:"9.5 ms"},
{axis:"RSA2048 CRT generate",value:0.867,title:"10187.3 ms"},
{axis:"RSA2048 decrypt",value:0.808,title:"624.11 ms"},
{axis:"RSA2048 encrypt",value:0.885,title:"9.48 ms"},
{axis:"RSA2048 generate",value:0.735,title:"13001.3 ms"},
{axis:"RSA1024 CRT generate",value:0.879,title:"812.5 ms"},
{axis:"RSA1024 CRT decrypt",value:0.929,title:"31.34 ms"},
{axis:"RSA1024 CRT encrypt",value:0.890,title:"4.42 ms"},
{axis:"RSA1024 generate",value:0.840,title:"1067.5 ms"},
{axis:"RSA1024 decrypt",value:0.831,title:"80.87 ms"},
{axis:"RSA1024 encrypt",value:0.889,title:"4.44 ms"},
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