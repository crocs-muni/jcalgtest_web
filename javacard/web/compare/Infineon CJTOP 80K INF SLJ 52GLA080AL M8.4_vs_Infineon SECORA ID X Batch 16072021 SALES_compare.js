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
{axis:"SECURE RANDOM (256B)",value:0.948,title:"18.71 ms"},
{axis:"SHA-1 hash (256B)",value:0.349,title:"45.1 ms"},
{axis:"SHA2-256 hash (256B)",value:0.460,title:"68.5 ms"},
{axis:"AES128 encrypt (256B)",value:0.930,title:"7.13 ms"},
{axis:"AES256 encrypt (256B)",value:0.938,title:"8.07 ms"},
{axis:"3DES encrypt (256B)",value:0.971,title:"5.88 ms"},
{axis:"3DES setKey(192b)",value:0.334,title:"33.07 ms"},
{axis:"AES setKey(128b)",value:0.362,title:"31.21 ms"},
{axis:"AES setKey(256b)",value:0.307,title:"34.31 ms"},
{axis:"SWAES oneblock (16B)",value:0.710,title:"688.85 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.908,title:"0.59 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.986,title:"0.58 ms"},
{axis:"ECC 256b genKeyPair",value:1.768,title:"-732.8 ms"},
{axis:"ECDSA 256b sign",value:0.637,title:"58.84 ms"},
{axis:"ECDSA 256b verify",value:0.725,title:"64.66 ms"},
{axis:"ECDH 256b",value:0.967,title:"6.84 ms"},
{axis:"RSA2048 CRT decrypt",value:0.885,title:"200.2 ms"},
{axis:"RSA2048 CRT encrypt",value:1.201,title:"-16.56 ms"},
{axis:"RSA2048 CRT generate",value:0.827,title:"13287.0 ms"},
{axis:"RSA2048 decrypt",value:0.828,title:"557.93 ms"},
{axis:"RSA2048 encrypt",value:1.119,title:"-9.82 ms"},
{axis:"RSA2048 generate",value:0.788,title:"10402.7 ms"},
{axis:"RSA1024 CRT generate",value:0.783,title:"1457.6 ms"},
{axis:"RSA1024 CRT decrypt",value:0.807,title:"85.1 ms"},
{axis:"RSA1024 CRT encrypt",value:1.450,title:"-18.05 ms"},
{axis:"RSA1024 generate",value:0.737,title:"1756.0 ms"},
{axis:"RSA1024 decrypt",value:0.507,title:"236.4 ms"},
{axis:"RSA1024 encrypt",value:1.327,title:"-13.09 ms"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);