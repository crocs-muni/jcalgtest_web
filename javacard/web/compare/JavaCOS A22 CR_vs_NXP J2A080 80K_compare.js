var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.980,title:"7.12 ms"},
{axis:"SHA-1 hash (256B)",value:0.933,title:"4.64 ms"},
{axis:"SHA2-256 hash (256B)",value:0.772,title:"28.92 ms"},
{axis:"AES128 encrypt (256B)",value:0.957,title:"4.41 ms"},
{axis:"AES256 encrypt (256B)",value:0.963,title:"4.8 ms"},
{axis:"3DES encrypt (256B)",value:0.972,title:"5.76 ms"},
{axis:"3DES setKey(192b)",value:0.979,title:"1.06 ms"},
{axis:"AES setKey(128b)",value:0.978,title:"1.07 ms"},
{axis:"AES setKey(256b)",value:0.978,title:"1.08 ms"},
{axis:"SWAES oneblock (16B)",value:0.828,title:"408.21 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.897,title:"0.66 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.974,title:"1.08 ms"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.883,title:"203.59 ms"},
{axis:"RSA2048 CRT encrypt",value:0.778,title:"18.29 ms"},
{axis:"RSA2048 CRT generate",value:0.862,title:"10585.6 ms"},
{axis:"RSA2048 decrypt",value:0.802,title:"643.66 ms"},
{axis:"RSA2048 encrypt",value:0.778,title:"18.27 ms"},
{axis:"RSA2048 generate",value:0.701,title:"14670.8 ms"},
{axis:"RSA1024 CRT generate",value:0.841,title:"1066.0 ms"},
{axis:"RSA1024 CRT decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 CRT encrypt",value:0.741,title:"10.37 ms"},
{axis:"RSA1024 generate",value:0.801,title:"1330.6 ms"},
{axis:"RSA1024 decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 encrypt",value:0.741,title:"10.36 ms"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.945,title:"19.57 ms"},
{axis:"SHA-1 hash (256B)",value:0.554,title:"30.89 ms"},
{axis:"SHA2-256 hash (256B)",value:0.527,title:"59.95 ms"},
{axis:"AES128 encrypt (256B)",value:0.099,title:"92.16 ms"},
{axis:"AES256 encrypt (256B)",value:0.099,title:"116.91 ms"},
{axis:"3DES encrypt (256B)",value:0.099,title:"184.5 ms"},
{axis:"3DES setKey(192b)",value:0.754,title:"12.22 ms"},
{axis:"AES setKey(128b)",value:0.698,title:"14.8 ms"},
{axis:"AES setKey(256b)",value:0.688,title:"15.44 ms"},
{axis:"SWAES oneblock (16B)",value:0.814,title:"440.96 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.882,title:"0.75 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.924,title:"3.2 ms"},
{axis:"ECC 256b genKeyPair",value:0.404,title:"568.9 ms"},
{axis:"ECDSA 256b sign",value:0.124,title:"141.79 ms"},
{axis:"ECDSA 256b verify",value:0.099,title:"211.54 ms"},
{axis:"ECDH 256b",value:0.234,title:"159.16 ms"},
{axis:"RSA2048 CRT decrypt",value:0.630,title:"644.03 ms"},
{axis:"RSA2048 CRT encrypt",value:0.629,title:"30.52 ms"},
{axis:"RSA2048 CRT generate",value:0.580,title:"32217.05 ms"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 generate",value:0.0,title:"NS"},
{axis:"RSA1024 CRT generate",value:0.613,title:"2599.75 ms"},
{axis:"RSA1024 CRT decrypt",value:0.719,title:"123.51 ms"},
{axis:"RSA1024 CRT encrypt",value:0.690,title:"12.43 ms"},
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