// On clicking remove button the item should be removed from DOM as well as localstorage.

var arr=JSON.parse(localStorage.getItem("coffee"))|| []
console.log(arr)
var total= arr.reduce(function(sum,elem,index){
    return sum+ Number(elem.price)
},0)
var bucket= document.getElementById("add_to_bucket")
appendData(arr)
  
        function appendData(data){
            data.forEach(function(elem,index){
                console.log(elem)
                var box= document.createElement("div")
                var img= document.createElement("img")
                img.src= elem.image
    
                var title= document.createElement("p")
                title.innerText= elem.title
    
                var price= document.createElement("p")
                price.innerText= elem.price
    
                var button= document.createElement("button")
                button.innerText="Remove"
                button.setAttribute("id","remove_coffee”")
                button.addEventListener("click",function(){
                    removeItem(elem,index)
    
                    console.log(arr)
                    var data= localStorage.setItem("data",JSON.stringify(arr))
    
                })
    
                box.append(img,title,price,button)
                bucket.append(box)
            })
    
        }

        function removeItem(elem,index){
            console.log(elem,index)
            arr.splice(index,1)

            localStorage.setItem("coffee",JSON.stringify(arr))
            window.location.reload()
        }
        

        var tota_amount= document.getElementById("total_amount").innerText=`${total}`
    