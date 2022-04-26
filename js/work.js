// //輪播
// function prev(id){
//     return document.getElementById(id);
// }

// window.addEventListener("load", function(){

//     let wrap = document.querySelector(".slider");
//     let curIndex = 0;

//     prev("prev").onclick = function(){
//         curIndex--;
//         wrap.style.left = -320 * curIndex + "px";
//         if(curIndex == 0){
//             prev("prev").disabled = true;
//         }
//         prev("next").disabled = false;
//     }
//     prev("next").onclick = function(){
//         curIndex++;
//         wrap.style.left = -320 * curIndex + "px";
//         if(curIndex == 1){
//             prev("next").disabled = true;
//         }
//         prev("prev").disabled = false;
//     }
// })
//自動輪播
let cur = 0;
let t =2000;
let tm;
let imgs;
window.onload=function(){
    imgs=document.querySelectorAll('.img');
    tm=setInterval(show,t);
}
function show(){
    cur++;
    if(cur>6){
        cur=0;
    }
    showImg(cur);
}
function showImg(cur){
    for(let i=0;i<imgs.length; i++){
        imgs[i].style.display='none';
    }
    imgs[cur].style.display='block'
}
function changeCur(e){
    clearInterval(tm);
    cur=parseInt(e.innerHTML)-1;
    show(cur);
}
function redo(){
    tm=setInterval(show,t);
}