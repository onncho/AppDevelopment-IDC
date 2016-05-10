
function openCalc() {
    document.getElementById('readme').style.display = "none";
    document.getElementById('profileSite').style.display = "none";
    document.getElementById('calc').style.display = "block";
    document.getElementById('startoverbtn').style.display = "none";
}

function openProfile() { 
    document.getElementById('readme').style.display = "none";
    document.getElementById('profileSite').style.display = "block";
    document.getElementById('calc').style.display = "none";
}

function openReadMe() {
    document.getElementById('readme').style.display = "block";
    document.getElementById('profileSite').style.display = "none";
    document.getElementById('calc').style.display = "none";
}

function evalu() {
    document.getElementById('calcResult').style.textAlign = "center";
    document.getElementById('calcResult').style.color = "#FFAE00";
    var e = eval(document.getElementById('calcResult').value);
    document.getElementById('calcResult').value = e;
    document.getElementById('calcResult').disabled = true;
    document.getElementById('startoverbtn').style.display = "block";
}

function newCalc() { 
    var box = document.getElementById('calcResult');
    box.style.textAlign = "left";
    box.style.color = "black";
    box.disabled = false;
    box.value = "";
    document.getElementById('startoverbtn').style.display = "none";
}

 

/*
function drawButtons() {
    
    if (document.getElementById('calc').style.display == "") {
            for (var index = 0; index < 10; index++) {
            createButtons(index);
        }
    }
}
*/

/*
function createButtons(num) {
    var node = document.createElement("input");
    node.name = num;
    node.type = "button";
    node.value = num;
    node.className = "btn";
    document.getElementById('calcform').appendChild(node);
}
*/


