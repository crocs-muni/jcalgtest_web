var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.996,title:"1.45 ms"},
{axis:"SHA-1 hash (256B)",value:0.886,title:"7.93 ms"},
{axis:"SHA2-256 hash (256B)",value:0.932,title:"8.63 ms"},
{axis:"AES128 encrypt (256B)",value:0.912,title:"9.01 ms"},
{axis:"AES256 encrypt (256B)",value:0.928,title:"9.33 ms"},
{axis:"3DES encrypt (256B)",value:0.958,title:"8.54 ms"},
{axis:"3DES setKey(192b)",value:0.834,title:"8.25 ms"},
{axis:"AES setKey(128b)",value:0.839,title:"7.89 ms"},
{axis:"AES setKey(256b)",value:0.831,title:"8.38 ms"},
{axis:"SWAES oneblock (16B)",value:0.870,title:"309.07 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.928,title:"0.46 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.961,title:"1.63 ms"},
{axis:"ECC 256b genKeyPair",value:0.836,title:"156.3 ms"},
{axis:"ECDSA 256b sign",value:0.652,title:"56.29 ms"},
{axis:"ECDSA 256b verify",value:0.786,title:"50.32 ms"},
{axis:"ECDH 256b",value:0.735,title:"55.08 ms"},
{axis:"RSA2048 CRT decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT generate",value:0.924,title:"5820.5 ms"},
{axis:"RSA2048 decrypt",value:0.842,title:"514.0 ms"},
{axis:"RSA2048 encrypt",value:0.864,title:"11.18 ms"},
{axis:"RSA2048 generate",value:0.800,title:"9778.9 ms"},
{axis:"RSA1024 CRT generate",value:0.824,title:"1185.4 ms"},
{axis:"RSA1024 CRT decrypt",value:0.870,title:"57.25 ms"},
{axis:"RSA1024 CRT encrypt",value:0.854,title:"5.87 ms"},
{axis:"RSA1024 generate",value:0.823,title:"1182.45 ms"},
{axis:"RSA1024 decrypt",value:0.811,title:"90.63 ms"},
{axis:"RSA1024 encrypt",value:0.854,title:"5.86 ms"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.981,title:"6.91 ms"},
{axis:"SHA-1 hash (256B)",value:0.843,title:"10.84 ms"},
{axis:"SHA2-256 hash (256B)",value:0.881,title:"15.05 ms"},
{axis:"AES128 encrypt (256B)",value:0.989,title:"1.14 ms"},
{axis:"AES256 encrypt (256B)",value:0.995,title:"0.66 ms"},
{axis:"3DES encrypt (256B)",value:0.996,title:"0.79 ms"},
{axis:"3DES setKey(192b)",value:0.545,title:"22.58 ms"},
{axis:"AES setKey(128b)",value:0.557,title:"21.68 ms"},
{axis:"AES setKey(256b)",value:0.526,title:"23.45 ms"},
{axis:"SWAES oneblock (16B)",value:0.878,title:"289.41 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.966,title:"0.22 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.993,title:"0.31 ms"},
{axis:"ECC 256b genKeyPair",value:1.432,title:"-412.0 ms"},
{axis:"ECDSA 256b sign",value:0.758,title:"39.19 ms"},
{axis:"ECDSA 256b verify",value:0.828,title:"40.35 ms"},
{axis:"ECDH 256b",value:1.065,title:"-13.44 ms"},
{axis:"RSA2048 CRT decrypt",value:0.963,title:"64.82 ms"},
{axis:"RSA2048 CRT encrypt",value:1.161,title:"-13.22 ms"},
{axis:"RSA2048 CRT generate",value:0.943,title:"4409.4 ms"},
{axis:"RSA2048 decrypt",value:0.933,title:"217.29 ms"},
{axis:"RSA2048 encrypt",value:1.074,title:"-6.1 ms"},
{axis:"RSA2048 generate",value:0.928,title:"3544.0 ms"},
{axis:"RSA1024 CRT generate",value:0.945,title:"371.1 ms"},
{axis:"RSA1024 CRT decrypt",value:0.939,title:"26.96 ms"},
{axis:"RSA1024 CRT encrypt",value:1.362,title:"-14.49 ms"},
{axis:"RSA1024 generate",value:0.965,title:"234.1 ms"},
{axis:"RSA1024 decrypt",value:0.921,title:"37.62 ms"},
{axis:"RSA1024 encrypt",value:1.184,title:"-7.37 ms"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);