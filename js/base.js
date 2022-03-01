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
        // document.getElementById('nav#ham').classList.toggle('.is-active');
        $("ul.menu").slideToggle(600);
    });
});


// go to top
document.addEventListener('DOMContentLoaded', function () {
    $(function () {

        var $win = $(window);

        var $backToTop = $('.js-back-to-top');

        // 當user滾動到離頂部200像素時，展示回到頂部按鈕

        $win.scroll(function () {

            if ($win.scrollTop() > 200) {

                $backToTop.show();

            } else {

                $backToTop.hide();

            }

        });

        // 當user點擊按鈕時，通過動畫效果返回頭部

        $backToTop.click(function () {

            $('html, body').animate({ scrollTop: 0 }, 700);

        });

    });
});