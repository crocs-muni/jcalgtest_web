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
{axis:"RSA2048 CRT decrypt",value:0.099,title:"1569.15 ms"},
{axis:"RSA2048 CRT encrypt",value:0.460,title:"44.42 ms"},
{axis:"RSA2048 CRT generate",value:0.774,title:"17308.4 ms"},
{axis:"RSA2048 decrypt",value:0.632,title:"1196.79 ms"},
{axis:"RSA2048 encrypt",value:0.464,title:"44.07 ms"},
{axis:"RSA2048 generate",value:0.615,title:"18850.1 ms"},
{axis:"RSA1024 CRT generate",value:0.659,title:"2294.5 ms"},
{axis:"RSA1024 CRT decrypt",value:0.099,title:"396.48 ms"},
{axis:"RSA1024 CRT encrypt",value:0.546,title:"18.21 ms"},
{axis:"RSA1024 generate",value:0.729,title:"1806.1 ms"},
{axis:"RSA1024 decrypt",value:0.163,title:"401.04 ms"},
{axis:"RSA1024 encrypt",value:0.547,title:"18.12 ms"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.936,title:"23.01 ms"},
{axis:"SHA-1 hash (256B)",value:0.917,title:"5.75 ms"},
{axis:"SHA2-256 hash (256B)",value:0.907,title:"11.83 ms"},
{axis:"AES128 encrypt (256B)",value:0.903,title:"9.9 ms"},
{axis:"AES256 encrypt (256B)",value:0.901,title:"12.8 ms"},
{axis:"3DES encrypt (256B)",value:0.647,title:"72.2 ms"},
{axis:"3DES setKey(192b)",value:0.643,title:"17.74 ms"},
{axis:"AES setKey(128b)",value:0.707,title:"14.32 ms"},
{axis:"AES setKey(256b)",value:0.655,title:"17.06 ms"},
{axis:"SWAES oneblock (16B)",value:0.912,title:"210.07 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.956,title:"0.28 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.993,title:"0.28 ms"},
{axis:"ECC 256b genKeyPair",value:0.509,title:"468.15 ms"},
{axis:"ECDSA 256b sign",value:0.261,title:"119.67 ms"},
{axis:"ECDSA 256b verify",value:0.136,title:"202.93 ms"},
{axis:"ECDH 256b",value:0.099,title:"187.1 ms"},
{axis:"RSA2048 CRT decrypt",value:0.745,title:"444.09 ms"},
{axis:"RSA2048 CRT encrypt",value:0.892,title:"8.86 ms"},
{axis:"RSA2048 CRT generate",value:0.635,title:"28019.9 ms"},
{axis:"RSA2048 decrypt",value:0.188,title:"2639.16 ms"},
{axis:"RSA2048 encrypt",value:0.892,title:"8.85 ms"},
{axis:"RSA2048 generate",value:0.466,title:"26185.6 ms"},
{axis:"RSA1024 CRT generate",value:0.478,title:"3506.85 ms"},
{axis:"RSA1024 CRT decrypt",value:0.758,title:"106.66 ms"},
{axis:"RSA1024 CRT encrypt",value:0.914,title:"3.46 ms"},
{axis:"RSA1024 generate",value:0.613,title:"2585.05 ms"},
{axis:"RSA1024 decrypt",value:0.132,title:"415.7 ms"},
{axis:"RSA1024 encrypt",value:0.913,title:"3.48 ms"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);