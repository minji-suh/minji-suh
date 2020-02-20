
function topFunction(){
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
}

function myFunction() {
    var x = document.getElementById("nav_mo");
    var y = document.getElementById("nav_ico");
    var z = document.getElementById("gnb");
    var a = document.getElementById("subtitle");
    
        
            if (x.className === "menu") {
                x.className += " responsive";
            } else {
                x.className = "menu";
            }
            
            if (y.className === "nav_ico") {
                y.className += " filp_v";
            } else {
                y.className = "nav_ico";
            }
            if (z.className === "gnb") {
                z.className += " mo";
            } else {
                z.className = "gnb";
            }
            if (a.className === "subtitle") {
                a.className += " on";
            } else {
                a.className = "subtitle";
            }
        };


// 스크롤

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    var x = document.getElementById("nav_mo");
    var st = document.body.scrollTop;
    var y = document.getElementById("nav_ico");
    var z = document.getElementById("gnb");
    var a = document.getElementById("subtitle");
    
          if (st > 80 ) {
            x.style.opacity = "0";
            x.style.marginTop = "-10px";
            x.className = "menu";
            z.className = "gnb";
            a.className = "subtitle";
            y.className = "nav_ico";
          } else {
            x.style.opacity = "1";
            x.style.marginTop = "50px";
          } 
};





