//アプリケーション中に使う変数を定義
let timer;
let start;
let isStarted = false;


//DOMで操作する要素を代入
const startButton = document.getElementById("start");
const stopButton = document.getElementById("stop");
const resetButton = document.getElementById("reset");
const watch = document.querySelector('.stopwatch p');


