$("#backs").click(function() {
    $(location).attr('href', 'help.html');
});
var a = 0;
dragElement(document.getElementById("hed"));

function dragElement(elmnt) {
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + "main")) {
        document.getElementById(elmnt.id + "main").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
        console.log("x " + pos3, "Y " + pos4)
        wid = window.innerWidth
        console.log("S: " + wid)
        if(wid==1280){
            wid = 1;
        }else if(wid==1422){
            wid = 0.9;
            document.querySelector(".continues").style.top = '64.3%';
            document.querySelector(".restart").style.top = '64.3%';
        }else if(wid==1600){
            wid = 0.8;
            document.querySelector(".continues").style.top = '61.37%';
            document.querySelector(".restart").style.top = '61.37%';
        }else if(wid==1707){
            wid = 0.77;
            document.querySelector(".continues").style.top = '59.5%';
            document.querySelector(".restart").style.top = '59.5%';
        }
        console.log("x " + pos3*wid, "Y " + pos4*wid)
        if(baza == 1){
           a1 = 410;
           b = 460;
           c = 260;
           d = 390;
        }else if(baza == 2){
            a1 = 590;
            b = 620;
            c = 430;
            d = 550;
        }else if(baza == 3){
            a1 = 600;
            b = 660;
            c = 370;
            d = 550;
        }else if(baza == 4){
            a1 = 590;
            b = 620;
            c = 430;
            d = 450;
        }else if(baza == 5){
            a1 = 590;
            b = 620;
            c = 430;
            d = 450;
        }else if(baza == 6){
            a1 = 590;
            b = 620;
            c = 430;
            d = 450;
        }
        if (pos3*wid > a1 && pos3*wid < b && pos4*wid > c && pos4*wid < d && a == 0) {
            document.getElementById("hedmain").style.display = 'none';
            document.getElementById("img1").style.display = 'none';
            document.getElementById("img2").style.display = 'block';
            document.getElementById("img2").style.width = '35%';
            document.getElementById("img2").style.marginTop = '-5%';
            document.getElementById("hed").style.display = 'none';
            document.querySelector(".restart").style.display = "block";
            document.querySelector(".continues").style.display = "block";
            a += 1
        }
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}