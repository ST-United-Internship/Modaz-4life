let textSection = document.querySelector(".toggle-text")
let isShow = true
function showHideText(){
    if (isShow) {
        textSection.style.display = "none"
        isShow = false
    }else{
        textSection.style.display = "block"
        isShow = true
    }
}


// let textSection = document.getElementById(".toggle-text")
// textSection.onclick = function showHideText(){
//     if (isShow) {
//         textSection.style.display = "none"
//         isShow = false
//     } else {
//         textSection.style.display = "block"
//         isShow = true
//     }
// }


