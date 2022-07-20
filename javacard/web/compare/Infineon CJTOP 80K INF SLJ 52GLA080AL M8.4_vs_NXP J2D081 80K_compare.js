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