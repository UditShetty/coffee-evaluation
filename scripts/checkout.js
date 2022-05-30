
    var form= document.querySelector("form").addEventListener("submit",myfunction)

    function myfunction(){
        event.preventDefault()
        var confirm= document.getElementById("confirm").value 
        setTimeout(function(){
            alert("Your order is accepted ")
        },000)
        setTimeout(function(){
            alert("Your order is being Prepared ")
        },3000)
        setTimeout(function(){
            alert("Your order is being packed")
        },8000)

        setTimeout(function(){
            alert("Your order is out for delivery ")
        },10000)

        setTimeout(function(){
            alert("Order delivered")
        },12000)
        
    }
    
    

