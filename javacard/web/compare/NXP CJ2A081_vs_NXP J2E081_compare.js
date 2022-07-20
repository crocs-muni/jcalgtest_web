var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.961,title:"13.84 ms"},
{axis:"SHA-1 hash (256B)",value:0.833,title:"11.57 ms"},
{axis:"SHA2-256 hash (256B)",value:0.832,title:"21.26 ms"},
{axis:"AES128 encrypt (256B)",value:0.377,title:"63.77 ms"},
{axis:"AES256 encrypt (256B)",value:0.380,title:"80.48 ms"},
{axis:"3DES encrypt (256B)",value:0.350,title:"133.08 ms"},
{axis:"3DES setKey(192b)",value:0.779,title:"10.99 ms"},
{axis:"AES setKey(128b)",value:0.721,title:"13.67 ms"},
{axis:"AES setKey(256b)",value:0.717,title:"13.99 ms"},
{axis:"SWAES oneblock (16B)",value:0.860,title:"331.46 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.919,title:"0.52 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.956,title:"1.86 ms"},
{axis:"ECC 256b genKeyPair",value:0.893,title:"101.85 ms"},
{axis:"ECDSA 256b sign",value:0.522,title:"77.48 ms"},
{axis:"ECDSA 256b verify",value:0.494,title:"118.84 ms"},
{axis:"ECDH 256b",value:0.498,title:"104.3 ms"},
{axis:"RSA2048 CRT decrypt",value:0.756,title:"424.52 ms"},
{axis:"RSA2048 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT generate",value:0.762,title:"18221.9 ms"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 generate",value:0.0,title:"NS"},
{axis:"RSA1024 CRT generate",value:0.766,title:"1575.3 ms"},
{axis:"RSA1024 CRT decrypt",value:0.815,title:"81.32 ms"},
{axis:"RSA1024 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA1024 generate",value:0.0,title:"NS"},
{axis:"RSA1024 decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 encrypt",value:0.0,title:"NS"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.960,title:"14.27 ms"},
{axis:"SHA-1 hash (256B)",value:0.826,title:"12.06 ms"},
{axis:"SHA2-256 hash (256B)",value:0.824,title:"22.33 ms"},
{axis:"AES128 encrypt (256B)",value:0.358,title:"65.72 ms"},
{axis:"AES256 encrypt (256B)",value:0.361,title:"82.96 ms"},
{axis:"3DES encrypt (256B)",value:0.329,title:"137.44 ms"},
{axis:"3DES setKey(192b)",value:0.892,title:"5.38 ms"},
{axis:"AES setKey(128b)",value:0.893,title:"5.22 ms"},
{axis:"AES setKey(256b)",value:0.888,title:"5.57 ms"},
{axis:"SWAES oneblock (16B)",value:0.857,title:"339.77 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.920,title:"0.51 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.954,title:"1.92 ms"},
{axis:"ECC 256b genKeyPair",value:0.859,title:"134.85 ms"},
{axis:"ECDSA 256b sign",value:0.455,title:"88.23 ms"},
{axis:"ECDSA 256b verify",value:0.454,title:"128.23 ms"},
{axis:"ECDH 256b",value:0.427,title:"118.9 ms"},
{axis:"RSA2048 CRT decrypt",value:0.754,title:"428.98 ms"},
{axis:"RSA2048 CRT encrypt",value:0.756,title:"20.06 ms"},
{axis:"RSA2048 CRT generate",value:0.821,title:"13742.6 ms"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 generate",value:0.0,title:"NS"},
{axis:"RSA1024 CRT generate",value:0.743,title:"1724.4 ms"},
{axis:"RSA1024 CRT decrypt",value:0.812,title:"82.58 ms"},
{axis:"RSA1024 CRT encrypt",value:0.793,title:"8.3 ms"},
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