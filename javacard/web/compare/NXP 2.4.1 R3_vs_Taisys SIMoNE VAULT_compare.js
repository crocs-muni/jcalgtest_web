var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.961,title:"14.06 ms"},
{axis:"SHA-1 hash (256B)",value:0.834,title:"11.5 ms"},
{axis:"SHA2-256 hash (256B)",value:0.832,title:"21.37 ms"},
{axis:"AES128 encrypt (256B)",value:0.372,title:"64.25 ms"},
{axis:"AES256 encrypt (256B)",value:0.374,title:"81.18 ms"},
{axis:"3DES encrypt (256B)",value:0.346,title:"134.0 ms"},
{axis:"3DES setKey(192b)",value:0.776,title:"11.1 ms"},
{axis:"AES setKey(128b)",value:0.718,title:"13.81 ms"},
{axis:"AES setKey(256b)",value:0.715,title:"14.09 ms"},
{axis:"SWAES oneblock (16B)",value:0.859,title:"334.3 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.915,title:"0.54 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.956,title:"1.86 ms"},
{axis:"ECC 256b genKeyPair",value:0.893,title:"102.1 ms"},
{axis:"ECDSA 256b sign",value:0.517,title:"78.14 ms"},
{axis:"ECDSA 256b verify",value:0.487,title:"120.5 ms"},
{axis:"ECDH 256b",value:0.496,title:"104.72 ms"},
{axis:"RSA2048 CRT decrypt",value:0.754,title:"429.18 ms"},
{axis:"RSA2048 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT generate",value:0.766,title:"17947.25 ms"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 generate",value:0.0,title:"NS"},
{axis:"RSA1024 CRT generate",value:0.713,title:"1930.15 ms"},
{axis:"RSA1024 CRT decrypt",value:0.813,title:"82.22 ms"},
{axis:"RSA1024 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA1024 generate",value:0.0,title:"NS"},
{axis:"RSA1024 decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 encrypt",value:0.0,title:"NS"},
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
{axis:"RSA2048 CRT decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT generate",value:0.864,title:"10462.1 ms"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 generate",value:0.830,title:"8338.8 ms"},
{axis:"RSA1024 CRT generate",value:0.666,title:"2244.8 ms"},
{axis:"RSA1024 CRT decrypt",value:0.849,title:"66.62 ms"},
{axis:"RSA1024 CRT encrypt",value:0.730,title:"10.82 ms"},
{axis:"RSA1024 generate",value:0.818,title:"1212.8 ms"},
{axis:"RSA1024 decrypt",value:0.808,title:"91.98 ms"},
{axis:"RSA1024 encrypt",value:0.684,title:"12.65 ms"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);