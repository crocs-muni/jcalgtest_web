var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.928,title:"25.72 ms"},
{axis:"SHA-1 hash (256B)",value:0.738,title:"18.16 ms"},
{axis:"SHA2-256 hash (256B)",value:0.706,title:"37.33 ms"},
{axis:"AES128 encrypt (256B)",value:0.748,title:"25.74 ms"},
{axis:"AES256 encrypt (256B)",value:0.763,title:"30.75 ms"},
{axis:"3DES encrypt (256B)",value:0.693,title:"62.8 ms"},
{axis:"3DES setKey(192b)",value:0.860,title:"6.93 ms"},
{axis:"AES setKey(128b)",value:0.870,title:"6.36 ms"},
{axis:"AES setKey(256b)",value:0.858,title:"7.02 ms"},
{axis:"SWAES oneblock (16B)",value:0.382,title:"1467.9 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.649,title:"2.24 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.944,title:"2.37 ms"},
{axis:"ECC 256b genKeyPair",value:0.776,title:"213.9 ms"},
{axis:"ECDSA 256b sign",value:0.099,title:"145.88 ms"},
{axis:"ECDSA 256b verify",value:0.571,title:"100.85 ms"},
{axis:"ECDH 256b",value:0.392,title:"126.18 ms"},
{axis:"RSA2048 CRT decrypt",value:0.870,title:"226.59 ms"},
{axis:"RSA2048 CRT encrypt",value:0.793,title:"17.0 ms"},
{axis:"RSA2048 CRT generate",value:0.873,title:"9758.2 ms"},
{axis:"RSA2048 decrypt",value:0.785,title:"698.63 ms"},
{axis:"RSA2048 encrypt",value:0.789,title:"17.36 ms"},
{axis:"RSA2048 generate",value:0.786,title:"10470.5 ms"},
{axis:"RSA1024 CRT generate",value:0.709,title:"1957.0 ms"},
{axis:"RSA1024 CRT decrypt",value:0.792,title:"91.35 ms"},
{axis:"RSA1024 CRT encrypt",value:0.735,title:"10.61 ms"},
{axis:"RSA1024 generate",value:0.799,title:"1338.7 ms"},
{axis:"RSA1024 decrypt",value:0.765,title:"112.43 ms"},
{axis:"RSA1024 encrypt",value:0.726,title:"10.96 ms"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.977,title:"8.26 ms"},
{axis:"SHA-1 hash (256B)",value:0.928,title:"4.98 ms"},
{axis:"SHA2-256 hash (256B)",value:0.772,title:"28.87 ms"},
{axis:"AES128 encrypt (256B)",value:0.956,title:"4.51 ms"},
{axis:"AES256 encrypt (256B)",value:0.964,title:"4.72 ms"},
{axis:"3DES encrypt (256B)",value:0.970,title:"6.2 ms"},
{axis:"3DES setKey(192b)",value:0.975,title:"1.22 ms"},
{axis:"AES setKey(128b)",value:0.975,title:"1.21 ms"},
{axis:"AES setKey(256b)",value:0.975,title:"1.22 ms"},
{axis:"SWAES oneblock (16B)",value:0.821,title:"425.27 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.801,title:"1.27 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.969,title:"1.32 ms"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT generate",value:0.844,title:"11986.2 ms"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 generate",value:0.712,title:"14110.9 ms"},
{axis:"RSA1024 CRT generate",value:0.888,title:"752.9 ms"},
{axis:"RSA1024 CRT decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA1024 generate",value:0.788,title:"1416.7 ms"},
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