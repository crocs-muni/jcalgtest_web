var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.961,title:"13.8 ms"},
{axis:"SHA-1 hash (256B)",value:0.835,title:"11.45 ms"},
{axis:"SHA2-256 hash (256B)",value:0.834,title:"21.05 ms"},
{axis:"3DES encrypt (256B)",value:0.938,title:"12.8 ms"},
{axis:"AES128 encrypt (256B)",value:0.899,title:"10.33 ms"},
{axis:"AES256 encrypt (256B)",value:0.913,title:"11.35 ms"},
{axis:"3DES setKey(192b)",value:0.778,title:"11.04 ms"},
{axis:"AES setKey(128b)",value:0.777,title:"10.9 ms"},
{axis:"AES setKey(256b)",value:0.774,title:"11.18 ms"},
{axis:"SWAES oneblock (16B)",value:0.861,title:"329.71 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.915,title:"0.54 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.956,title:"1.85 ms"},
{axis:"RSA1024 CRT decrypt",value:0.814,title:"81.92 ms"},
{axis:"RSA1024 CRT encrypt",value:0.794,title:"8.26 ms"},
{axis:"RSA2048 CRT decrypt",value:0.754,title:"428.28 ms"},
{axis:"RSA2048 CRT encrypt",value:0.757,title:"19.97 ms"},
{axis:"RSA1024 decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.0,title:"NS"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.980,title:"7.25 ms"},
{axis:"SHA-1 hash (256B)",value:0.942,title:"4.0 ms"},
{axis:"SHA2-256 hash (256B)",value:0.784,title:"27.37 ms"},
{axis:"3DES encrypt (256B)",value:0.978,title:"4.5 ms"},
{axis:"AES128 encrypt (256B)",value:0.968,title:"3.26 ms"},
{axis:"AES256 encrypt (256B)",value:0.972,title:"3.7 ms"},
{axis:"3DES setKey(192b)",value:0.988,title:"0.62 ms"},
{axis:"AES setKey(128b)",value:0.986,title:"0.69 ms"},
{axis:"AES setKey(256b)",value:0.986,title:"0.68 ms"},
{axis:"SWAES oneblock (16B)",value:0.862,title:"328.54 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.944,title:"0.36 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.982,title:"0.75 ms"},
{axis:"RSA1024 CRT decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.0,title:"NS"},
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