var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.971,title:"10.4 ms"},
{axis:"SHA-1 hash (256B)",value:0.831,title:"11.73 ms"},
{axis:"SHA2-256 hash (256B)",value:0.833,title:"21.18 ms"},
{axis:"AES128 encrypt (256B)",value:0.934,title:"6.73 ms"},
{axis:"AES256 encrypt (256B)",value:0.941,title:"7.66 ms"},
{axis:"3DES encrypt (256B)",value:0.965,title:"7.1 ms"},
{axis:"3DES setKey(192b)",value:0.595,title:"20.12 ms"},
{axis:"AES setKey(128b)",value:0.667,title:"16.31 ms"},
{axis:"AES setKey(256b)",value:0.645,title:"17.57 ms"},
{axis:"SWAES oneblock (16B)",value:0.892,title:"256.25 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.929,title:"0.45 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.957,title:"1.8 ms"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.658,title:"594.93 ms"},
{axis:"RSA2048 CRT encrypt",value:0.785,title:"17.67 ms"},
{axis:"RSA2048 CRT generate",value:0.750,title:"19191.4 ms"},
{axis:"RSA2048 decrypt",value:0.384,title:"2002.7 ms"},
{axis:"RSA2048 encrypt",value:0.785,title:"17.65 ms"},
{axis:"RSA2048 generate",value:0.520,title:"23511.7 ms"},
{axis:"RSA1024 CRT generate",value:0.508,title:"3304.8 ms"},
{axis:"RSA1024 CRT decrypt",value:0.736,title:"116.36 ms"},
{axis:"RSA1024 CRT encrypt",value:0.778,title:"8.88 ms"},
{axis:"RSA1024 generate",value:0.492,title:"3387.0 ms"},
{axis:"RSA1024 decrypt",value:0.386,title:"294.09 ms"},
{axis:"RSA1024 encrypt",value:0.778,title:"8.9 ms"},
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