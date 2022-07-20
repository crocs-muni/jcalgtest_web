var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.950,title:"18.03 ms"},
{axis:"SHA-1 hash (256B)",value:0.846,title:"10.67 ms"},
{axis:"SHA2-256 hash (256B)",value:0.692,title:"39.07 ms"},
{axis:"AES128 encrypt (256B)",value:0.788,title:"21.7 ms"},
{axis:"AES256 encrypt (256B)",value:0.827,title:"22.42 ms"},
{axis:"3DES encrypt (256B)",value:0.963,title:"7.67 ms"},
{axis:"3DES setKey(192b)",value:0.783,title:"10.8 ms"},
{axis:"AES setKey(128b)",value:0.853,title:"7.21 ms"},
{axis:"AES setKey(256b)",value:0.769,title:"11.46 ms"},
{axis:"SWAES oneblock (16B)",value:0.0,title:"NS"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.0,title:"NS"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.0,title:"NS"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.731,title:"469.21 ms"},
{axis:"RSA2048 CRT encrypt",value:0.841,title:"13.08 ms"},
{axis:"RSA2048 CRT generate",value:0.818,title:"13945.6 ms"},
{axis:"RSA2048 decrypt",value:0.492,title:"1651.24 ms"},
{axis:"RSA2048 encrypt",value:0.840,title:"13.18 ms"},
{axis:"RSA2048 generate",value:0.723,title:"13577.3 ms"},
{axis:"RSA1024 CRT generate",value:0.697,title:"2038.8 ms"},
{axis:"RSA1024 CRT decrypt",value:0.842,title:"69.55 ms"},
{axis:"RSA1024 CRT encrypt",value:0.824,title:"7.04 ms"},
{axis:"RSA1024 generate",value:0.728,title:"1817.8 ms"},
{axis:"RSA1024 decrypt",value:0.519,title:"230.24 ms"},
{axis:"RSA1024 encrypt",value:0.825,title:"7.02 ms"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.997,title:"1.18 ms"},
{axis:"SHA-1 hash (256B)",value:0.923,title:"5.34 ms"},
{axis:"SHA2-256 hash (256B)",value:0.938,title:"7.92 ms"},
{axis:"AES128 encrypt (256B)",value:0.982,title:"1.86 ms"},
{axis:"AES256 encrypt (256B)",value:0.985,title:"1.92 ms"},
{axis:"3DES encrypt (256B)",value:0.991,title:"1.9 ms"},
{axis:"3DES setKey(192b)",value:0.935,title:"3.23 ms"},
{axis:"AES setKey(128b)",value:0.935,title:"3.2 ms"},
{axis:"AES setKey(256b)",value:0.935,title:"3.24 ms"},
{axis:"SWAES oneblock (16B)",value:0.927,title:"174.12 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.973,title:"0.17 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.874,title:"5.32 ms"},
{axis:"ECC 256b genKeyPair",value:0.972,title:"26.8 ms"},
{axis:"ECDSA 256b sign",value:0.803,title:"31.96 ms"},
{axis:"ECDSA 256b verify",value:0.871,title:"30.22 ms"},
{axis:"ECDH 256b",value:0.904,title:"20.04 ms"},
{axis:"RSA2048 CRT decrypt",value:0.969,title:"53.23 ms"},
{axis:"RSA2048 CRT encrypt",value:0.941,title:"4.89 ms"},
{axis:"RSA2048 CRT generate",value:0.932,title:"5224.7 ms"},
{axis:"RSA2048 decrypt",value:0.955,title:"147.77 ms"},
{axis:"RSA2048 encrypt",value:0.951,title:"3.99 ms"},
{axis:"RSA2048 generate",value:0.900,title:"4921.05 ms"},
{axis:"RSA1024 CRT generate",value:0.886,title:"763.8 ms"},
{axis:"RSA1024 CRT decrypt",value:0.966,title:"14.98 ms"},
{axis:"RSA1024 CRT encrypt",value:0.914,title:"3.46 ms"},
{axis:"RSA1024 generate",value:0.916,title:"561.2 ms"},
{axis:"RSA1024 decrypt",value:0.946,title:"25.95 ms"},
{axis:"RSA1024 encrypt",value:0.934,title:"2.63 ms"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);