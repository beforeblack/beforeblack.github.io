function sayHello() { 
    
    var str = document.getElementById('answer').innerHTML;
    var res = str.replace('?', 5+2);
    document.getElementById('answer').innerHTML = res;
    
        };

function refreshPage() {
    location.reload();
}

function checkRes() {
    var x, text;

    // Get the value of the input field with id="numb"
    x = document.getElementById("numb").value;

    // If x is Not a Number or less than one or greater than 10
    if (isNaN(x) || x != 7) {
        text = "Try Again";
    } else {
        text = "Correct!";
    }
    document.getElementById("demo").innerHTML = text;
}