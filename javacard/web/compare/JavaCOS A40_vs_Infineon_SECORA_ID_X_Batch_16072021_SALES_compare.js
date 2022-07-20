var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.970,title:"10.78 ms"},
{axis:"SHA-1 hash (256B)",value:0.943,title:"3.96 ms"},
{axis:"SHA2-256 hash (256B)",value:0.723,title:"35.13 ms"},
{axis:"3DES encrypt (256B)",value:0.980,title:"4.13 ms"},
{axis:"AES128 encrypt (256B)",value:0.969,title:"3.18 ms"},
{axis:"AES256 encrypt (256B)",value:0.972,title:"3.63 ms"},
{axis:"3DES setKey(192b)",value:0.988,title:"0.58 ms"},
{axis:"AES setKey(128b)",value:0.988,title:"0.57 ms"},
{axis:"AES setKey(256b)",value:0.987,title:"0.64 ms"},
{axis:"SWAES oneblock (16B)",value:0.0,title:"NS"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.0,title:"NS"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.0,title:"NS"},
{axis:"RSA1024 CRT decrypt",value:0.943,title:"25.04 ms"},
{axis:"RSA1024 CRT encrypt",value:0.916,title:"3.38 ms"},
{axis:"RSA2048 CRT decrypt",value:0.916,title:"147.04 ms"},
{axis:"RSA2048 CRT encrypt",value:0.903,title:"7.98 ms"},
{axis:"RSA1024 decrypt",value:0.850,title:"71.65 ms"},
{axis:"RSA1024 encrypt",value:0.916,title:"3.37 ms"},
{axis:"RSA2048 decrypt",value:0.823,title:"573.78 ms"},
{axis:"RSA2048 encrypt",value:0.903,title:"7.98 ms"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.948,title:"18.71 ms"},
{axis:"SHA-1 hash (256B)",value:0.349,title:"45.1 ms"},
{axis:"SHA2-256 hash (256B)",value:0.460,title:"68.5 ms"},
{axis:"3DES encrypt (256B)",value:0.971,title:"5.88 ms"},
{axis:"AES128 encrypt (256B)",value:0.930,title:"7.13 ms"},
{axis:"AES256 encrypt (256B)",value:0.938,title:"8.07 ms"},
{axis:"3DES setKey(192b)",value:0.334,title:"33.07 ms"},
{axis:"AES setKey(128b)",value:0.362,title:"31.21 ms"},
{axis:"AES setKey(256b)",value:0.307,title:"34.31 ms"},
{axis:"SWAES oneblock (16B)",value:0.710,title:"688.85 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.908,title:"0.59 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.986,title:"0.58 ms"},
{axis:"RSA1024 CRT decrypt",value:0.807,title:"85.1 ms"},
{axis:"RSA1024 CRT encrypt",value:1.450,title:"-18.05 ms"},
{axis:"RSA2048 CRT decrypt",value:0.885,title:"200.2 ms"},
{axis:"RSA2048 CRT encrypt",value:1.201,title:"-16.56 ms"},
{axis:"RSA1024 decrypt",value:0.507,title:"236.4 ms"},
{axis:"RSA1024 encrypt",value:1.327,title:"-13.09 ms"},
{axis:"RSA2048 decrypt",value:0.828,title:"557.93 ms"},
{axis:"RSA2048 encrypt",value:1.119,title:"-9.82 ms"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);