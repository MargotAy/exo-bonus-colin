
window.onload = function() {


    document.querySelector(".btn#add").addEventListener('click', plusOne)

    
        var nombre = 0
        function plusOne () {
            nombre = nombre + 1
            document.getElementById("number").textContent = nombre;
        }


   document.querySelector(".btn#sub").addEventListener('click', minusOne)
    
    
    function minusOne () {
        nombre = nombre - 1
       document.getElementById("number").textContent = nombre;
    }
}