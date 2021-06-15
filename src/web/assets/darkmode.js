document.getElementById("myButton").addEventListener("click", myFunction);

function myFunction(){
    window.alert(5+6);
    console.log("button works!");
    var element = document.body;
    element.classList.toggle("dark-mode");
}