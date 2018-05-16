function sayHello() { 
    
    var str = document.getElementById('answer').innerHTML;
    var res = str.replace('?', 5+2);
    document.getElementById('answer').innerHTML = res;
    
        };

function refreshPage() {
    location.reload();
}