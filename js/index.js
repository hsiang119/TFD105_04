"use strict";

// 滑入
let slogan = document.getElementsByClassName('js-slide');

function doScroll() {
    // Y軸高度
    let aa = window.pageYOffset;
    for (let i = 0; i < slogan.length; i++) {
        if (aa > slogan[i].offsetTop / 2) {
            slogan[i].classList.add('js-active');
        } else {
            slogan[i].classList.remove('js-active');
        }
    }
}
window.addEventListener('scroll', doScroll);


// JavaScript 版本：DOM 載入完成之後執行
// document.addEventListener('DOMContentLoaded', function(){
  
//     // 按鈕狀態的切換
//     var hamburger_icon = document.getElementsByClassName("btn_switch")[0];
//     console.log(hamburger_icon);
//     hamburger_icon.addEventListener("click", function(){
//       hamburger_icon.classList.toggle("-on");
//     });
    
//   });



