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
{axis:"SECURE RANDOM (256B)",value:0.854,title:"52.49 ms"},
{axis:"SHA-1 hash (256B)",value:0.660,title:"23.53 ms"},
{axis:"SHA2-256 hash (256B)",value:0.0,title:"NS"},
{axis:"AES128 encrypt (256B)",value:0.0,title:"NS"},
{axis:"AES256 encrypt (256B)",value:0.0,title:"NS"},
{axis:"3DES encrypt (256B)",value:0.922,title:"16.05 ms"},
{axis:"3DES setKey(192b)",value:0.490,title:"25.31 ms"},
{axis:"AES setKey(128b)",value:0.0,title:"NS"},
{axis:"AES setKey(256b)",value:0.0,title:"NS"},
{axis:"SWAES oneblock (16B)",value:0.099,title:"2140.21 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.099,title:"5.75 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.099,title:"37.92 ms"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.500,title:"871.61 ms"},
{axis:"RSA2048 CRT encrypt",value:0.099,title:"74.1 ms"},
{axis:"RSA2048 CRT generate",value:0.099,title:"69095.6 ms"},
{axis:"RSA2048 decrypt",value:0.099,title:"2927.22 ms"},
{axis:"RSA2048 encrypt",value:0.099,title:"74.07 ms"},
{axis:"RSA2048 generate",value:0.099,title:"44143.8 ms"},
{axis:"RSA1024 CRT generate",value:0.099,title:"6056.5 ms"},
{axis:"RSA1024 CRT decrypt",value:0.625,title:"164.94 ms"},
{axis:"RSA1024 CRT encrypt",value:0.099,title:"36.11 ms"},
{axis:"RSA1024 generate",value:0.099,title:"6012.1 ms"},
{axis:"RSA1024 decrypt",value:0.099,title:"431.63 ms"},
{axis:"RSA1024 encrypt",value:0.099,title:"36.07 ms"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);