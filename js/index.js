// console.log(document.getElementsByClassName("item"))
// let targetHeight = document.getElementsByClassName("item")[0].getBoundingClientRect();
// let targeLine = targetHeight - 0.5 * window.innerHeight;
// window.onscroll = function(){myFunction()};

//滑鼠捲動圖片秀出
let targetHeight = 0;
function calc() {
    targetHeight = document.getElementsByClassName("item")[0].getBoundingClientRect().top;
}



function myFunction() {
    targeLine = targetHeight - 0.4 * window.innerHeight;
    console.log(targeLine)
    if (window.scrollY > targeLine
        || document.documentElement.scroll > targeLine) {
        for (let i = 0; i < document.getElementsByClassName("item").length; i++) {
            console.log(document.getElementsByClassName("item")[i])
            setTimeout(() => {
                document.getElementsByClassName("slideUp-right")[i].classList.add("slideUp");
            },300* i )
        }
    }
}

//燈箱
window.addEventListener("load", function () {
    function cancelBox() {
        document.getElementById('lightBox').style.display = 'none';
    }

    let lightbox = document.getElementById('lightBox');
    let pic = document.querySelectorAll('#pic');
    lightbox.style.display = "none";

    for (i = 0; i < pic.length; i++) {
        pic[i].addEventListener("click", function () {
            lightbox.style.display = "block";
        })
    }
    document.getElementById('cancelbtn').onclick = cancelBox;
    
    calc();
    window.onscroll = function () {
        myFunction()
    };
})