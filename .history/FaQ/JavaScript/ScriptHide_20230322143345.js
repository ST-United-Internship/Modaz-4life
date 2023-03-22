// let textSection = document.querySelector(".toggle-text")
// let isShow = true
// let  showHideText= function(){
//     if (isShow) {
//         textSection.style.display = "none"
//         isShow = false
//     }else{
//         textSection.style.display = "block"
//         isShow = true
//     }
// }


let textSection = document.getElementById(".toggle-text")
let
textSection.onclick = function showHideText(){
    if (isShow) {
        textSection.style.display = "none"
        isShow = false
    } else {
        textSection.style.display = "block"
        isShow = true
    }
}


