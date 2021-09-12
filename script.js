const container = document.getElementById("container")

function scrol(){
    console.log(scrollY)
    const firstP = document.getElementById("first-text");
    const secondP = document.getElementById("second-text");
    const thirdP = document.getElementById("third-text");
    const fourthP = document.getElementById("fourth-text")

    if(scrollY >= 10 && scrollY <=20){
        firstP.style.animationName = "left";
    } else if(scrollY >=140 && scrollY <=150){
        secondP.style.animationName ="right"
    }else if(scrollY >= 500 && scrollY <= 550){
            thirdP.style.animationName = "left";
    }else if (scrollY >=700 && scrollY <= 710){
        fourthP.style.animationName = "left";
    }
}

window.addEventListener("scroll",scrol)

