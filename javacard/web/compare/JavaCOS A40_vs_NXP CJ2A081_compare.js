var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.974,title:"9.22 ms"},
{axis:"SHA-1 hash (256B)",value:0.941,title:"4.09 ms"},
{axis:"SHA2-256 hash (256B)",value:0.784,title:"27.35 ms"},
{axis:"AES128 encrypt (256B)",value:0.968,title:"3.31 ms"},
{axis:"AES256 encrypt (256B)",value:0.971,title:"3.73 ms"},
{axis:"3DES encrypt (256B)",value:0.978,title:"4.58 ms"},
{axis:"3DES setKey(192b)",value:0.984,title:"0.78 ms"},
{axis:"AES setKey(128b)",value:0.978,title:"1.09 ms"},
{axis:"AES setKey(256b)",value:0.985,title:"0.74 ms"},
{axis:"SWAES oneblock (16B)",value:0.860,title:"333.7 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.934,title:"0.42 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.954,title:"1.92 ms"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT generate",value:0.906,title:"7174.7 ms"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 generate",value:0.858,title:"6957.6 ms"},
{axis:"RSA1024 CRT generate",value:0.843,title:"1055.85 ms"},
{axis:"RSA1024 CRT decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA1024 generate",value:0.833,title:"1111.5 ms"},
{axis:"RSA1024 decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 encrypt",value:0.0,title:"NS"},
],
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
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);