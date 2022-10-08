async function callapi(){
    let type = document.getElementById("selecttype").value;
    let number = document.getElementById("number").value
    let response = await fetch('http://numbersapi.com/'+number+'/'+type);
    let data = await response.text();
    document.getElementById("display").className = 'alert alert-primary'
    document.getElementById("display").innerHTML =  data;
}