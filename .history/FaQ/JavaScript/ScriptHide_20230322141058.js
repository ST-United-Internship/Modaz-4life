let textSection = document.getElementById(".toggle-text")
function showHideText(){
    if (isShow) {
        textSection.style.display = "none"
        isShow = false
    }else{
        textSection.style.display = "block"
        isShow = true
    }
}

