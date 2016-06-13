function openCalc() {
    document.getElementById('readme').style.display = "none";
    document.getElementById('profileSite').style.display = "none";
    document.getElementById('calc').style.display = "block";

    try {
        $.get("/getResult", function (res) {
            document.getElementById('calcResult').value = res;
        });
    } catch (error) {
        console.log(error);
    }

}

function openWrapper() {
    document.getElementById('wrapper').style.display = "block";
    document.getElementById('logindiv').style.display = "none";
    document.body.style.paddingTop = 0;
    openProfile();
}

function openProfile() {
    document.getElementById('readme').style.display = "none";
    document.getElementById('profileSite').style.display = "block";
    document.getElementById('calc').style.display = "none";

    try {
        $.get("/randomQuote", function (res) {
            document.getElementById('randomQuote').innerHTML = res;
        });
    } catch (error) {
        console.log(error);
    }
}

function openReadMe() {
    document.getElementById('readme').style.display = "block";
    document.getElementById('profileSite').style.display = "none";
    document.getElementById('calc').style.display = "none";
}

function evalu() {
    document.getElementById('calcResult').style.textAlign = "center";
    document.getElementById('calcResult').style.color = "#FFAE00";

    var result = eval(document.getElementById('calcResult').value);
    document.getElementById('calcResult').value = result;
    document.getElementById('calcResult').disabled = true;
    //save the result on the server
    try {
        $.post("/saveResult", {lastResult: result}, function (res) {
          console.log("saving is done");
        });
    } catch (error) {
        console.log(error);
    }
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

function sendLoginReq() {
    var userName = document.getElementById("userNameBox").value;
    var pass = document.getElementById("passBox").value;
    //TODO: Debug
    console.log(userName);
    console.log(pass);
    $.post("/login", {username: userName, password: pass}, function (res) {
        if (res == "true") {
            openWrapper();
        }
        else {
            alert("bad username or password dude!, please try again!");
        }
    })
}


