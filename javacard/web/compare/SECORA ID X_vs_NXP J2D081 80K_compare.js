var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.981,title:"6.98 ms"},
{axis:"SHA-1 hash (256B)",value:0.837,title:"11.28 ms"},
{axis:"SHA2-256 hash (256B)",value:0.890,title:"13.98 ms"},
{axis:"AES128 encrypt (256B)",value:0.990,title:"1.02 ms"},
{axis:"AES256 encrypt (256B)",value:0.996,title:"0.55 ms"},
{axis:"3DES encrypt (256B)",value:0.997,title:"0.63 ms"},
{axis:"3DES setKey(192b)",value:0.851,title:"7.42 ms"},
{axis:"AES setKey(128b)",value:0.865,title:"6.59 ms"},
{axis:"AES setKey(256b)",value:0.833,title:"8.25 ms"},
{axis:"SWAES oneblock (16B)",value:0.860,title:"333.16 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.961,title:"0.25 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.993,title:"0.3 ms"},
{axis:"ECC 256b genKeyPair",value:2.266,title:"-1208.3 ms"},
{axis:"ECDSA 256b sign",value:0.854,title:"23.58 ms"},
{axis:"ECDSA 256b verify",value:0.980,title:"4.8 ms"},
{axis:"ECDH 256b",value:1.405,title:"-84.14 ms"},
{axis:"RSA2048 CRT decrypt",value:0.964,title:"62.33 ms"},
{axis:"RSA2048 CRT encrypt",value:1.192,title:"-15.76 ms"},
{axis:"RSA2048 CRT generate",value:0.972,title:"2118.0 ms"},
{axis:"RSA2048 decrypt",value:0.933,title:"216.46 ms"},
{axis:"RSA2048 encrypt",value:1.081,title:"-6.65 ms"},
{axis:"RSA2048 generate",value:0.937,title:"3109.7 ms"},
{axis:"RSA1024 CRT generate",value:1.055,title:"-366.9 ms"},
{axis:"RSA1024 CRT decrypt",value:0.942,title:"25.68 ms"},
{axis:"RSA1024 CRT encrypt",value:1.423,title:"-16.96 ms"},
{axis:"RSA1024 generate",value:0.898,title:"683.75 ms"},
{axis:"RSA1024 decrypt",value:0.921,title:"37.68 ms"},
{axis:"RSA1024 encrypt",value:1.197,title:"-7.89 ms"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.971,title:"10.4 ms"},
{axis:"SHA-1 hash (256B)",value:0.831,title:"11.73 ms"},
{axis:"SHA2-256 hash (256B)",value:0.833,title:"21.18 ms"},
{axis:"AES128 encrypt (256B)",value:0.934,title:"6.73 ms"},
{axis:"AES256 encrypt (256B)",value:0.941,title:"7.66 ms"},
{axis:"3DES encrypt (256B)",value:0.965,title:"7.1 ms"},
{axis:"3DES setKey(192b)",value:0.595,title:"20.12 ms"},
{axis:"AES setKey(128b)",value:0.667,title:"16.31 ms"},
{axis:"AES setKey(256b)",value:0.645,title:"17.57 ms"},
{axis:"SWAES oneblock (16B)",value:0.892,title:"256.25 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.929,title:"0.45 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.957,title:"1.8 ms"},
{axis:"ECC 256b genKeyPair",value:0.0,title:"NS"},
{axis:"ECDSA 256b sign",value:0.0,title:"NS"},
{axis:"ECDSA 256b verify",value:0.0,title:"NS"},
{axis:"ECDH 256b",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.658,title:"594.93 ms"},
{axis:"RSA2048 CRT encrypt",value:0.785,title:"17.67 ms"},
{axis:"RSA2048 CRT generate",value:0.750,title:"19191.4 ms"},
{axis:"RSA2048 decrypt",value:0.384,title:"2002.7 ms"},
{axis:"RSA2048 encrypt",value:0.785,title:"17.65 ms"},
{axis:"RSA2048 generate",value:0.520,title:"23511.7 ms"},
{axis:"RSA1024 CRT generate",value:0.508,title:"3304.8 ms"},
{axis:"RSA1024 CRT decrypt",value:0.736,title:"116.36 ms"},
{axis:"RSA1024 CRT encrypt",value:0.778,title:"8.88 ms"},
{axis:"RSA1024 generate",value:0.492,title:"3387.0 ms"},
{axis:"RSA1024 decrypt",value:0.386,title:"294.09 ms"},
{axis:"RSA1024 encrypt",value:0.778,title:"8.9 ms"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);