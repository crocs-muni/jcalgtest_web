var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.993,title:"2.45 ms"},
{axis:"SHA-1 hash (256B)",value:0.947,title:"3.69 ms"},
{axis:"SHA2-256 hash (256B)",value:0.0,title:"NS"},
{axis:"AES128 encrypt (256B)",value:0.745,title:"26.05 ms"},
{axis:"AES256 encrypt (256B)",value:0.757,title:"31.52 ms"},
{axis:"3DES encrypt (256B)",value:0.738,title:"53.71 ms"},
{axis:"3DES setKey(192b)",value:0.811,title:"9.4 ms"},
{axis:"AES setKey(128b)",value:0.810,title:"9.28 ms"},
{axis:"AES setKey(256b)",value:0.807,title:"9.54 ms"},
{axis:"SWAES oneblock (16B)",value:0.953,title:"112.38 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.928,title:"0.46 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.779,title:"9.32 ms"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA1024 CRT decrypt",value:0.099,title:"396.48 ms"},
{axis:"RSA1024 CRT encrypt",value:0.546,title:"18.21 ms"},
{axis:"RSA2048 CRT decrypt",value:0.099,title:"1569.15 ms"},
{axis:"RSA2048 CRT encrypt",value:0.460,title:"44.42 ms"},
{axis:"RSA1024 decrypt",value:0.163,title:"401.04 ms"},
{axis:"RSA1024 encrypt",value:0.547,title:"18.12 ms"},
{axis:"RSA2048 decrypt",value:0.632,title:"1196.79 ms"},
{axis:"RSA2048 encrypt",value:0.464,title:"44.07 ms"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.0,title:"NS"},
{axis:"SHA-1 hash (256B)",value:0.854,title:"10.1 ms"},
{axis:"SHA2-256 hash (256B)",value:0.889,title:"14.1 ms"},
{axis:"AES128 encrypt (256B)",value:0.0,title:"NS"},
{axis:"AES256 encrypt (256B)",value:0.0,title:"NS"},
{axis:"3DES encrypt (256B)",value:0.0,title:"NS"},
{axis:"3DES setKey(192b)",value:0.424,title:"28.62 ms"},
{axis:"AES setKey(128b)",value:0.503,title:"24.3 ms"},
{axis:"AES setKey(256b)",value:0.304,title:"34.45 ms"},
{axis:"SWAES oneblock (16B)",value:0.926,title:"174.97 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.0,title:"NS"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.0,title:"NS"},
{axis:"ECC 256b genKeyPair",value:0.099,title:"859.6 ms"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.458,title:"112.62 ms"},
{axis:"RSA1024 CRT decrypt",value:0.849,title:"66.62 ms"},
{axis:"RSA1024 CRT encrypt",value:0.730,title:"10.82 ms"},
{axis:"RSA2048 CRT decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA1024 decrypt",value:0.808,title:"91.98 ms"},
{axis:"RSA1024 encrypt",value:0.684,title:"12.65 ms"},
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