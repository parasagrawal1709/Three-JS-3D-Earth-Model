$(document).on('scroll' , function(){
    
    $('.heading').css("transition-duration" ,   "0.6s");
    $('.heading').css("top" , Math.max(58 - 0.4*scrollY  , 18) + "%");
    $('.leftbox').css("transition-duration" ,   "0.6s");
    $('.leftbox').css("left" , Math.min(-23 + 6*scrollY , 7 )  + "%");
    $('.rightbox').css("transition-duration" ,   "0.6s");
    $('.rightbox').css("left" , Math.max(120 - 6*scrollY ,65)  + "%");

    $('.image').css("transition-duration" ,   "0.6s");
    $('.image').css("left" , Math.max(120 - 6*scrollY ,71)  + "%");
})

function changeImg(x , text){
    if(x == 1){
        document.getElementById("demo").innerHTML = "Paras Agrawal";
        
    }
    if(x == 2){
        document.getElementById("demo").innerHTML = "DAY1";   
    }
}

function changeImg2(x , text){
    if(x == 3){
        document.getElementById("demo1").innerHTML = "Paras Agrawal";
    }
    if(x == 4){
        document.getElementById("demo1").innerHTML = "DAY2";   
    }
}

function changeImg3(x , text){
    if(x == 5){
        document.getElementById("demo2").innerHTML = "Paras Agrawal";
    }
    if(x == 6){
        document.getElementById("demo2").innerHTML = "DAY3";   
    }
}

const root = document.documentElement;
const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue("--marquee-elements-displayed");
const marqueeContent = document.querySelector("ul.marquee-content");

root.style.setProperty("--marquee-elements", marqueeContent.children.length);

for(let i=0; i<marqueeElementsDisplayed; i++) {
  marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
}



window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
