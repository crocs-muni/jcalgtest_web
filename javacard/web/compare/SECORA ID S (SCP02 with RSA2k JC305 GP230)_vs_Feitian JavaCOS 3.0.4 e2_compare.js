var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.982,title:"6.38 ms"},
{axis:"SHA-1 hash (256B)",value:0.842,title:"10.93 ms"},
{axis:"SHA2-256 hash (256B)",value:0.0,title:"NS"},
{axis:"AES128 encrypt (256B)",value:0.985,title:"1.53 ms"},
{axis:"AES256 encrypt (256B)",value:0.992,title:"1.06 ms"},
{axis:"3DES encrypt (256B)",value:0.995,title:"1.1 ms"},
{axis:"3DES setKey(192b)",value:0.648,title:"17.49 ms"},
{axis:"AES setKey(128b)",value:0.663,title:"16.5 ms"},
{axis:"AES setKey(256b)",value:0.630,title:"18.32 ms"},
{axis:"SWAES oneblock (16B)",value:0.876,title:"294.89 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.972,title:"0.18 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.994,title:"0.26 ms"},
{axis:"ECC 256b genKeyPair",value:1.737,title:"-703.0 ms"},
{axis:"ECDSA 256b sign",value:0.801,title:"32.15 ms"},
{axis:"ECDSA 256b verify",value:0.942,title:"13.7 ms"},
{axis:"ECDH 256b",value:1.242,title:"-50.18 ms"},
{axis:"RSA2048 CRT decrypt",value:0.962,title:"65.82 ms"},
{axis:"RSA2048 CRT encrypt",value:1.109,title:"-8.98 ms"},
{axis:"RSA2048 CRT generate",value:0.965,title:"2654.5 ms"},
{axis:"RSA2048 decrypt",value:0.932,title:"222.39 ms"},
{axis:"RSA2048 encrypt",value:1.050,title:"-4.08 ms"},
{axis:"RSA2048 generate",value:0.917,title:"4044.8 ms"},
{axis:"RSA1024 CRT generate",value:0.996,title:"24.8 ms"},
{axis:"RSA1024 CRT decrypt",value:0.939,title:"26.72 ms"},
{axis:"RSA1024 CRT encrypt",value:1.255,title:"-10.22 ms"},
{axis:"RSA1024 generate",value:0.890,title:"735.45 ms"},
{axis:"RSA1024 decrypt",value:0.921,title:"37.72 ms"},
{axis:"RSA1024 encrypt",value:1.133,title:"-5.34 ms"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.970,title:"10.63 ms"},
{axis:"SHA-1 hash (256B)",value:0.946,title:"3.75 ms"},
{axis:"SHA2-256 hash (256B)",value:0.724,title:"35.06 ms"},
{axis:"AES128 encrypt (256B)",value:0.968,title:"3.26 ms"},
{axis:"AES256 encrypt (256B)",value:0.972,title:"3.62 ms"},
{axis:"3DES encrypt (256B)",value:0.979,title:"4.3 ms"},
{axis:"3DES setKey(192b)",value:0.987,title:"0.66 ms"},
{axis:"AES setKey(128b)",value:0.989,title:"0.56 ms"},
{axis:"AES setKey(256b)",value:0.987,title:"0.62 ms"},
{axis:"SWAES oneblock (16B)",value:0.904,title:"228.7 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.940,title:"0.38 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.982,title:"0.74 ms"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT generate",value:0.910,title:"6871.2 ms"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 generate",value:0.845,title:"7583.8 ms"},
{axis:"RSA1024 CRT generate",value:0.923,title:"517.15 ms"},
{axis:"RSA1024 CRT decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA1024 generate",value:0.828,title:"1144.9 ms"},
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