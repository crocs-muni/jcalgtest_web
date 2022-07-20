var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.941,title:"20.97 ms"},
{axis:"SHA-1 hash (256B)",value:0.508,title:"34.1 ms"},
{axis:"SHA2-256 hash (256B)",value:0.479,title:"66.02 ms"},
{axis:"3DES encrypt (256B)",value:0.903,title:"19.95 ms"},
{axis:"AES128 encrypt (256B)",value:0.800,title:"20.44 ms"},
{axis:"AES256 encrypt (256B)",value:0.829,title:"22.24 ms"},
{axis:"3DES setKey(192b)",value:0.865,title:"6.7 ms"},
{axis:"AES setKey(128b)",value:0.870,title:"6.38 ms"},
{axis:"AES setKey(256b)",value:0.858,title:"7.04 ms"},
{axis:"SWAES oneblock (16B)",value:0.798,title:"479.83 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.875,title:"0.8 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.918,title:"3.44 ms"},
{axis:"RSA1024 CRT decrypt",value:0.715,title:"125.48 ms"},
{axis:"RSA1024 CRT encrypt",value:0.676,title:"12.98 ms"},
{axis:"RSA2048 CRT decrypt",value:0.631,title:"642.86 ms"},
{axis:"RSA2048 CRT encrypt",value:0.622,title:"31.12 ms"},
{axis:"RSA1024 decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.0,title:"NS"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.945,title:"19.56 ms"},
{axis:"SHA-1 hash (256B)",value:0.558,title:"30.61 ms"},
{axis:"SHA2-256 hash (256B)",value:0.528,title:"59.89 ms"},
{axis:"3DES encrypt (256B)",value:0.099,title:"184.56 ms"},
{axis:"AES128 encrypt (256B)",value:0.099,title:"91.87 ms"},
{axis:"AES256 encrypt (256B)",value:0.099,title:"116.96 ms"},
{axis:"3DES setKey(192b)",value:0.753,title:"12.28 ms"},
{axis:"AES setKey(128b)",value:0.756,title:"11.96 ms"},
{axis:"AES setKey(256b)",value:0.747,title:"12.54 ms"},
{axis:"SWAES oneblock (16B)",value:0.812,title:"447.74 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.887,title:"0.72 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.922,title:"3.27 ms"},
{axis:"RSA1024 CRT decrypt",value:0.719,title:"123.74 ms"},
{axis:"RSA1024 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.630,title:"644.39 ms"},
{axis:"RSA2048 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA1024 decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.0,title:"NS"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);