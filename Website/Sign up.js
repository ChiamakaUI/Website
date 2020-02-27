function app() {
    var button = document.getElementsByTagName("button")[0];

    button.addEventListener("click", function(event){ alert ("Success");});
    if(document.getElementById('name').value.trim() === "") {
        alert("Please fill in your details")
    }
    else{
        alert("Thank you")
    }

}