var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.963,title:"13.1 ms"},
{axis:"SHA-1 hash (256B)",value:0.930,title:"4.88 ms"},
{axis:"SHA2-256 hash (256B)",value:0.664,title:"42.57 ms"},
{axis:"AES128 encrypt (256B)",value:0.957,title:"4.37 ms"},
{axis:"AES256 encrypt (256B)",value:0.967,title:"4.33 ms"},
{axis:"3DES encrypt (256B)",value:0.974,title:"5.27 ms"},
{axis:"3DES setKey(192b)",value:0.982,title:"0.91 ms"},
{axis:"AES setKey(128b)",value:0.981,title:"0.93 ms"},
{axis:"AES setKey(256b)",value:0.981,title:"0.96 ms"},
{axis:"SWAES oneblock (16B)",value:0.843,title:"373.29 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.646,title:"2.26 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.972,title:"1.19 ms"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.906,title:"163.15 ms"},
{axis:"RSA2048 CRT encrypt",value:0.884,title:"9.5 ms"},
{axis:"RSA2048 CRT generate",value:0.867,title:"10187.3 ms"},
{axis:"RSA2048 decrypt",value:0.808,title:"624.11 ms"},
{axis:"RSA2048 encrypt",value:0.885,title:"9.48 ms"},
{axis:"RSA2048 generate",value:0.735,title:"13001.3 ms"},
{axis:"RSA1024 CRT generate",value:0.879,title:"812.5 ms"},
{axis:"RSA1024 CRT decrypt",value:0.929,title:"31.34 ms"},
{axis:"RSA1024 CRT encrypt",value:0.890,title:"4.42 ms"},
{axis:"RSA1024 generate",value:0.840,title:"1067.5 ms"},
{axis:"RSA1024 decrypt",value:0.831,title:"80.87 ms"},
{axis:"RSA1024 encrypt",value:0.889,title:"4.44 ms"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.906,title:"33.77 ms"},
{axis:"SHA-1 hash (256B)",value:0.822,title:"12.35 ms"},
{axis:"SHA2-256 hash (256B)",value:0.823,title:"22.39 ms"},
{axis:"AES128 encrypt (256B)",value:0.886,title:"11.65 ms"},
{axis:"AES256 encrypt (256B)",value:0.892,title:"14.02 ms"},
{axis:"3DES encrypt (256B)",value:0.940,title:"12.24 ms"},
{axis:"3DES setKey(192b)",value:0.369,title:"31.35 ms"},
{axis:"AES setKey(128b)",value:0.520,title:"23.48 ms"},
{axis:"AES setKey(256b)",value:0.488,title:"25.33 ms"},
{axis:"SWAES oneblock (16B)",value:0.889,title:"263.92 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.926,title:"0.47 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.955,title:"1.9 ms"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.635,title:"635.92 ms"},
{axis:"RSA2048 CRT encrypt",value:0.781,title:"18.02 ms"},
{axis:"RSA2048 CRT generate",value:0.724,title:"21137.9 ms"},
{axis:"RSA2048 decrypt",value:0.377,title:"2023.08 ms"},
{axis:"RSA2048 encrypt",value:0.781,title:"18.04 ms"},
{axis:"RSA2048 generate",value:0.454,title:"26745.0 ms"},
{axis:"RSA1024 CRT generate",value:0.600,title:"2690.9 ms"},
{axis:"RSA1024 CRT decrypt",value:0.663,title:"148.12 ms"},
{axis:"RSA1024 CRT encrypt",value:0.772,title:"9.15 ms"},
{axis:"RSA1024 generate",value:0.537,title:"3093.0 ms"},
{axis:"RSA1024 decrypt",value:0.368,title:"302.93 ms"},
{axis:"RSA1024 encrypt",value:0.771,title:"9.15 ms"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);