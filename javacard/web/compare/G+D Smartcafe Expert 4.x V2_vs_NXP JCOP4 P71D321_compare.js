var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.099,title:"322.91 ms"},
{axis:"SHA-1 hash (256B)",value:0.514,title:"33.66 ms"},
{axis:"SHA2-256 hash (256B)",value:0.0,title:"NS"},
{axis:"AES128 encrypt (256B)",value:0.0,title:"NS"},
{axis:"AES256 encrypt (256B)",value:0.0,title:"NS"},
{axis:"3DES encrypt (256B)",value:0.818,title:"37.19 ms"},
{axis:"3DES setKey(192b)",value:0.928,title:"3.59 ms"},
{axis:"AES setKey(128b)",value:0.0,title:"NS"},
{axis:"AES setKey(256b)",value:0.0,title:"NS"},
{axis:"SWAES oneblock (16B)",value:0.816,title:"438.03 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.889,title:"0.71 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.952,title:"2.01 ms"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.760,title:"417.72 ms"},
{axis:"RSA2048 CRT encrypt",value:0.564,title:"35.83 ms"},
{axis:"RSA2048 CRT generate",value:0.816,title:"14076.7 ms"},
{axis:"RSA2048 decrypt",value:0.0,title:"NS"},
{axis:"RSA2048 encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 generate",value:0.0,title:"NS"},
{axis:"RSA1024 CRT generate",value:0.671,title:"2210.1 ms"},
{axis:"RSA1024 CRT decrypt",value:0.711,title:"127.33 ms"},
{axis:"RSA1024 CRT encrypt",value:0.761,title:"9.59 ms"},
{axis:"RSA1024 generate",value:0.0,title:"NS"},
{axis:"RSA1024 decrypt",value:0.0,title:"NS"},
{axis:"RSA1024 encrypt",value:0.0,title:"NS"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.996,title:"1.28 ms"},
{axis:"SHA-1 hash (256B)",value:0.917,title:"5.73 ms"},
{axis:"SHA2-256 hash (256B)",value:0.933,title:"8.54 ms"},
{axis:"AES128 encrypt (256B)",value:0.981,title:"1.95 ms"},
{axis:"AES256 encrypt (256B)",value:0.985,title:"2.01 ms"},
{axis:"3DES encrypt (256B)",value:0.990,title:"1.98 ms"},
{axis:"3DES setKey(192b)",value:0.929,title:"3.51 ms"},
{axis:"AES setKey(128b)",value:0.929,title:"3.48 ms"},
{axis:"AES setKey(256b)",value:0.929,title:"3.52 ms"},
{axis:"SWAES oneblock (16B)",value:0.927,title:"173.22 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.973,title:"0.17 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.861,title:"5.86 ms"},
{axis:"ECC 256b genKeyPair",value:0.972,title:"26.25 ms"},
{axis:"ECDSA 256b sign",value:0.796,title:"33.06 ms"},
{axis:"ECDSA 256b verify",value:0.867,title:"31.28 ms"},
{axis:"ECDH 256b",value:0.896,title:"21.58 ms"},
{axis:"RSA2048 CRT decrypt",value:0.969,title:"54.8 ms"},
{axis:"RSA2048 CRT encrypt",value:0.947,title:"4.33 ms"},
{axis:"RSA2048 CRT generate",value:0.939,title:"4695.9 ms"},
{axis:"RSA2048 decrypt",value:0.955,title:"146.53 ms"},
{axis:"RSA2048 encrypt",value:0.947,title:"4.32 ms"},
{axis:"RSA2048 generate",value:0.909,title:"4446.55 ms"},
{axis:"RSA1024 CRT generate",value:0.876,title:"831.7 ms"},
{axis:"RSA1024 CRT decrypt",value:0.963,title:"16.34 ms"},
{axis:"RSA1024 CRT encrypt",value:0.929,title:"2.83 ms"},
{axis:"RSA1024 generate",value:0.879,title:"806.5 ms"},
{axis:"RSA1024 decrypt",value:0.941,title:"28.1 ms"},
{axis:"RSA1024 encrypt",value:0.929,title:"2.84 ms"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);