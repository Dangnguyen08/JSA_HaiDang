var vidu = document.getElementById("vidu4");
console.log(vidu)

vidu.onclick = function(){
    if(vidu.classList.contains("nenXam")){
        vidu.classList.remove("nenXam")
    } else {
        vidu.classList.add("nenXam")
    }
}