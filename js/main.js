$("#backs").click(function() {
    $(location).attr('href', 'main.html');
});
var test = [];
var testText = [];
let allisall = [];
let allisallText = [];

function prov(a, b) {
    test.push(a);
    testText.push(b);
    for (i = 0; i <= 4; i++) {
        $(".as" + i).removeClass('endy1');
        if (a == 1 && i == 1) {
            $(".as" + i).addClass('endy1');
        } else if (a == 2 && i == 2) {
            $(".as" + i).addClass('endy1');
        } else if (a == 3 && i == 3) {
            $(".as" + i).addClass('endy1');
        } else if (a == 4 && i == 4) {
            $(".as" + i).addClass('endy1');
        }
    }
}

function isWantedGuest(element) {
    let guestName = 1;
    return element === guestName;
}

function isWantedGuest1(element) {
    let guestName = 2;
    return element === guestName;
}

function isWantedGuest2(element) {
    let guestName = 3;
    return element === guestName;
}

function isWantedGuest3(element) {
    let guestName = 4;
    return element === guestName;
}

function clickm(elem) {
    $('html, body').animate({scrollTop:0}, '300');
    test1 = test.reverse();
    testText1 = testText.reverse();
    console.log(testText1)
    console.log(test1)
    a = test1.findIndex(isWantedGuest)
    if (a == -1) {
        a = 100
    }
    console.log(a)
    b = test1.findIndex(isWantedGuest1)
    if (b == -1) {
        b = 100
    }
    console.log(b)
    c = test1.findIndex(isWantedGuest2)
    if (c == -1) {
        c = 100
    }
    console.log(c)
    d = test1.findIndex(isWantedGuest3)
    if (d == -1) {
        d = 100
    }
    console.log(d)
    if (b > a && c > a && d > a) {
        console.log(testText1[a])
        allisallText.push(testText1[a])
        allisall.push(test1[a])
    } else if (a > b && c > b && d > b) {
        console.log(testText1[b])
        allisallText.push(testText1[b])
        allisall.push(test1[b])
    } else if (a > c && b > c && d > c) {
        console.log(testText1[c])
        allisallText.push(testText1[c])
        allisall.push(test1[c])
    } else if (a > d && b > d && c > d) {
        console.log(testText1[d])
        allisallText.push(testText1[d])
        allisall.push(test1[d])
    }
    console.log(allisall)
    test = [];
    testText = [];
    for (i = 0; i <= 12; i++) {
        $(".as" + i).removeClass('endy1');
        $(".as4").removeClass('endy1');
        if (i != elem) {
            document.querySelector('.bye' + i).style.display = 'none';
        } else {
            document.querySelector('.bye' + i).style.display = 'block';
        }
    }
}
let masNum = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4];

function opor() {
    for (i = 0; i < 10; i++) {
        document.querySelector('.b' + (i + 1)).innerHTML = `${allisallText[i]}`;
        if (allisall[i] == masNum[i]) {
            document.querySelector('.b' + (i + 1)).style.color = `green`;
        } else {
            document.querySelector('.b' + (i + 1)).style.color = `red`;
        }
    }
};
let masTex = ['Всі перераховані вище.']
function myFunction(a) {
    var x = document.querySelector('#snackbar');
    x.innerHTML = `${masTex[0]}`;
    x.className = "show";
    setTimeout(function() {
        x.className = x.className.replace("show", "");
    }, 7000);
}
var a = 0;
dragElement(document.getElementById("hed"));
function clickmi(a){
    for (i = 0; i <= 9; i++) {
        if (i != a) {
            document.querySelector('.fd' + i).style.display = 'none';
        } else {
            document.querySelector('.fd' + i).style.display = 'flex';
        }
    }
}