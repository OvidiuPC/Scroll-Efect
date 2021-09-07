const container = document.getElementById("container")

function scrol(){
    console.log(Math.round(scrollY))
    const firstP = document.getElementById("first-text");
    const secondP = document.getElementById("second-text");
    const thirdP = document.getElementById("third-text");
    const fourthP = document.getElementById("fourth-text")

    if(scrollY >= 0 && scrollY <=500){
        firstP.style.animationName = "left";
    } else if(scrollY >=600 && scrollY <=1300){
        secondP.style.animationName ="right"
    }else if(scrollY >= 1500 && scrollY <= 2300){
            thirdP.style.animationName = "left";
    }else if (scrollY >=2000 && scrollY <= 3100){
        fourthP.style.animationName = "left";
    }
}

window.addEventListener("scroll",scrol)

