// EX01 - Java Script
// ID For Submission: "300502465"

function fun1() {
    var obj1 = { prop1: "test", prop2: 23 };
    var obj2 = Object.create(obj1);
    var obj3 = Object.create(obj2);
    var obj4 = Object.create(obj3);
    var obj5 = Object.create(obj4);
    
    return obj5;
}


function fun2() {
    return new fun4;
}


function fun3()  {
    return fun2;
}

function fun4() {
    return function() {
        this.k = null;
        return "doing somethig...";
    }
}

// return's the six argument element
function fun5() {    
    return arguments[5];
}

// fibonacci 
function fun6(i) {
    var a = 0; 
    var b = 1; 
    
    if(i <= 2)
    { 
        return i - 1; 
    } 
    
    for(var x = 0; x < i; x++)
    { 
        var tempB = b; 
        b = tempB + a; 
        a = tempB; 
    } 
    
    return b;
}



function fun7() { 

    var result = {
    fullname: { firstName: "Onn",  lastName: "Hachmon" },
    age: 29,
    gender: "Male",
    year: 1987,
    id: "300502465",
    phones: ["05x-xxxxxxx", "05y-yyyyyy"],
    photoURL:["http://www.ptnow.co.il/images/logo.png"]
    };
    
    return result;
}


function fun8(n) {
    var arr = new Array(n);
    
    for(var i = 0; i <= n; i++) {
        arr[i] = (function(k) {
            return function (){
                console.log(k);
            }; 
        })(i);
    }
    
    return arr;
}

function fun9() {
    var tester;
    var flag = true;
    
    tester = fun2();
    
    
    if (tester() != "doing somethig...") {
        flag = false;
        console.log("Error in Function 2");
    }
    
    tester = fun3();
    
    if(tester()() != "doing somethig...") {
        flag = false;
        console.log("Error in Function 3");
    }
    
    
    tester = fun5(1,2,3,4,5,6,7,8,9,10);
    
    if(tester != 6) {
        flag = false;
        console.log("Error in Function 5");
    }
    
    tester = fun6(10);
    
    if(tester != 89) {
        flag = false;
        console.log("Error in Function 6");
    }
    
    tester = fun7();
    
    if((tester.fullname.firstName === "Onn" && tester.fullname.lastName ==="Hachmon" && tester.age === 29 && tester.gender === "Male" && tester.year === 1987 && tester.id === "300502465" && tester.phones[0] === "05x-xxxxxxx" && tester.photoURL[0] === "http://www.ptnow.co.il/images/logo.png") == false) {
        
        flag = false;
        console.log("Error in Function 7");
    }
    
    function isFunction(functionToCheck) {
        var getType = {};
    return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
};
    
    tester = isFunction(fun8(5)[3]);
    
    if(tester != true) { 
        flag = false;
        console.log("Error in Function 8");
    }
    
    if (flag === true) {
        console.log("Pass fun9 Testing...");
    }
}

// Run Testing...
fun9();


