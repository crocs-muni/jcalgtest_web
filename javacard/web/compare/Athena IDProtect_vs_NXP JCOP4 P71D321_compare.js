var w = document.getElementById('chart').offsetWidth,
    h = window.innerHeight -70;
var colorscale = d3.scale.category10();
var data = [
[
{axis:"SECURE RANDOM (256B)",value:0.936,title:"23.01 ms"},
{axis:"SHA-1 hash (256B)",value:0.917,title:"5.75 ms"},
{axis:"SHA2-256 hash (256B)",value:0.907,title:"11.83 ms"},
{axis:"3DES encrypt (256B)",value:0.648,title:"72.2 ms"},
{axis:"AES128 encrypt (256B)",value:0.903,title:"9.9 ms"},
{axis:"AES256 encrypt (256B)",value:0.901,title:"12.8 ms"},
{axis:"3DES setKey(192b)",value:0.643,title:"17.74 ms"},
{axis:"AES setKey(128b)",value:0.707,title:"14.32 ms"},
{axis:"AES setKey(256b)",value:0.655,title:"17.06 ms"},
{axis:"SWAES oneblock (16B)",value:0.912,title:"210.07 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.956,title:"0.28 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.993,title:"0.28 ms"},
{axis:"RSA1024 CRT decrypt",value:0.758,title:"106.66 ms"},
{axis:"RSA1024 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA2048 CRT decrypt",value:0.745,title:"444.09 ms"},
{axis:"RSA2048 CRT encrypt",value:0.0,title:"NS"},
{axis:"RSA1024 decrypt",value:0.132,title:"415.7 ms"},
{axis:"RSA1024 encrypt",value:0.913,title:"3.48 ms"},
{axis:"RSA2048 decrypt",value:0.188,title:"2639.16 ms"},
{axis:"RSA2048 encrypt",value:0.892,title:"8.85 ms"},
],
[
{axis:"SECURE RANDOM (256B)",value:0.996,title:"1.28 ms"},
{axis:"SHA-1 hash (256B)",value:0.917,title:"5.73 ms"},
{axis:"SHA2-256 hash (256B)",value:0.933,title:"8.54 ms"},
{axis:"3DES encrypt (256B)",value:0.990,title:"1.98 ms"},
{axis:"AES128 encrypt (256B)",value:0.981,title:"1.95 ms"},
{axis:"AES256 encrypt (256B)",value:0.985,title:"2.01 ms"},
{axis:"3DES setKey(192b)",value:0.929,title:"3.51 ms"},
{axis:"AES setKey(128b)",value:0.929,title:"3.48 ms"},
{axis:"AES setKey(256b)",value:0.929,title:"3.52 ms"},
{axis:"SWAES oneblock (16B)",value:0.927,title:"173.22 ms"},
{axis:" arrayCopy nonAtomic RAM2RAM (256B)",value:0.973,title:"0.17 ms"},
{axis:" arrayCopy nonAtomic EEPROM2EEPROM (256B)",value:0.861,title:"5.86 ms"},
{axis:"RSA1024 CRT decrypt",value:0.963,title:"16.34 ms"},
{axis:"RSA1024 CRT encrypt",value:0.929,title:"2.83 ms"},
{axis:"RSA2048 CRT decrypt",value:0.969,title:"54.8 ms"},
{axis:"RSA2048 CRT encrypt",value:0.947,title:"4.33 ms"},
{axis:"RSA1024 decrypt",value:0.941,title:"28.1 ms"},
{axis:"RSA1024 encrypt",value:0.929,title:"2.84 ms"},
{axis:"RSA2048 decrypt",value:0.955,title:"146.53 ms"},
{axis:"RSA2048 encrypt",value:0.947,title:"4.32 ms"},
],
];

var config = { w: w-175,
 h: h-175,
 maxValue: 1.0,
 levels: 10,
 }

RadarChart.draw("#chart", data, config);