"use strict";

// footer點連結開新分頁
// var mywindow;

// var btn = document.getElementsByClassName("fab fa-facebook");
// btn.addEventListener("click", function(){
  
//   mywindow = window.open("https://m.facebook.com/HARNs-Sweets-100358675454637/");
  
// });



// 滑入
let slogan = document.getElementsByClassName('js-slide');

function doScroll() {
    // Y軸高度
    let aa = window.pageYOffset;
    for (let i = 0; i < slogan.length; i++) {
        // let asd = slogan[i].offsetTop - this.scrollTop;
        if (aa > slogan[i].offsetTop / 2 ) {
            slogan[i].classList.add('js-active');
        } else {
            slogan[i].classList.remove('js-active');
        }
    }
}
window.addEventListener('scroll', doScroll);


//點擊按鈕，選單縮放
document.addEventListener('DOMContentLoaded', function(){
    let hamburger_icon = document.getElementsByClassName("btn_switch")[0];  
    $("button.btn_switch").on("click", function () {
        hamburger_icon.classList.toggle("-on");
        $("ul.menu").slideToggle(800);
    });
});

// DOM 載入完成之後執行
// document.addEventListener('DOMContentLoaded', function(){
  
//     // 按鈕狀態的切換
//     let hamburger_icon = document.getElementsByClassName("btn_switch")[0];
//     console.log(hamburger_icon);
//     hamburger_icon.addEventListener("click", function(){
//       hamburger_icon.classList.toggle("-on");
//     });
    
//   });
