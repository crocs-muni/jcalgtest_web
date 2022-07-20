var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.970,title:"10.92 ms"},
{axis:"SHA-1 hash (256B)",value:0.843,title:"10.84 ms"},
{axis:"SHA2-256 hash (256B)",value:0.787,title:"27.0 ms"},
{axis:"AES128 encrypt (256B)",value:0.969,title:"3.18 ms"},
{axis:"AES256 encrypt (256B)",value:0.972,title:"3.6 ms"},
{axis:"3DES encrypt (256B)",value:0.978,title:"4.42 ms"},
{axis:"3DES setKey(192b)",value:0.783,title:"10.79 ms"},
{axis:"AES setKey(128b)",value:0.989,title:"0.56 ms"},
{axis:"AES setKey(256b)",value:0.988,title:"0.58 ms"},
{axis:"SWAES oneblock (16B)",value:0.905,title:"226.06 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.947,title:"0.34 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.981,title:"0.78 ms"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.911,title:"155.55 ms"},
{axis:"RSA2048 CRT encrypt",value:0.897,title:"8.49 ms"},
{axis:"RSA2048 CRT generate",value:0.870,title:"9982.5 ms"},
{axis:"RSA2048 decrypt",value:0.821,title:"581.88 ms"},
{axis:"RSA2048 encrypt",value:0.897,title:"8.43 ms"},
{axis:"RSA2048 generate",value:0.803,title:"9646.0 ms"},
{axis:"RSA1024 CRT generate",value:0.833,title:"1119.9 ms"},
{axis:"RSA1024 CRT decrypt",value:0.933,title:"29.33 ms"},
{axis:"RSA1024 CRT encrypt",value:0.908,title:"3.68 ms"},
{axis:"RSA1024 generate",value:0.875,title:"832.5 ms"},
{axis:"RSA1024 decrypt",value:0.843,title:"75.08 ms"},
{axis:"RSA1024 encrypt",value:0.909,title:"3.66 ms"},
],
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
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);