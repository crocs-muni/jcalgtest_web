var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.971,title:"10.4 ms"},
{axis:"SHA-1 hash (256B)",value:0.831,title:"11.73 ms"},
{axis:"SHA2-256 hash (256B)",value:0.833,title:"21.18 ms"},
{axis:"3DES encrypt (256B)",value:0.965,title:"7.1 ms"},
{axis:"AES128 encrypt (256B)",value:0.934,title:"6.73 ms"},
{axis:"AES256 encrypt (256B)",value:0.941,title:"7.66 ms"},
{axis:"3DES setKey(192b)",value:0.595,title:"20.12 ms"},
{axis:"AES setKey(128b)",value:0.667,title:"16.31 ms"},
{axis:"AES setKey(256b)",value:0.645,title:"17.57 ms"},
{axis:"SWAES oneblock (16B)",value:0.892,title:"256.25 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.929,title:"0.45 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.957,title:"1.8 ms"},
{axis:"RSA1024 CRT decrypt",value:0.736,title:"116.36 ms"},
{axis:"RSA1024 CRT encrypt",value:0.778,title:"8.88 ms"},
{axis:"RSA2048 CRT decrypt",value:0.658,title:"594.93 ms"},
{axis:"RSA2048 CRT encrypt",value:0.785,title:"17.67 ms"},
{axis:"RSA1024 decrypt",value:0.386,title:"294.09 ms"},
{axis:"RSA1024 encrypt",value:0.778,title:"8.9 ms"},
{axis:"RSA2048 decrypt",value:0.384,title:"2002.7 ms"},
{axis:"RSA2048 encrypt",value:0.785,title:"17.65 ms"},
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