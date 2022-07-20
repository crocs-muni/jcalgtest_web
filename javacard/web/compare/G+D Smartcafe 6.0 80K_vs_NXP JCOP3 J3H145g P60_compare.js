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
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);