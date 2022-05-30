// Add the coffee to local storage with key "coffee"

    let menu= document.getElementById("menu")

   
    let url=`https://masai-mock-api.herokuapp.com/coffee/menu`
    fetch(url).then(function(res){
        return res.json()
    }).then(function(res){
        // console.log(res)
        appendData(res.menu.data)
    })
    .catch(function(err){
        console.log(err)
    })
    
    var arr=JSON.parse(localStorage.getItem("coffee")) ||[]
    var total= arr.reduce(function(sum,elem,index){
        return sum+ index
    },0)
    function appendData(data){
        // console.log(data)
        data.forEach(function(elem){
            // console.log(elem)
            var box= document.createElement("div")
            var img= document.createElement("img")
            img.src= elem.image

            var title= document.createElement("p")
            title.innerText= elem.title

            var price= document.createElement("p")
            price.innerText= elem.price

            var button= document.createElement("button")
            button.innerText="add to bucket"
            button.setAttribute("id","add_to_bucket”")
            button.addEventListener("click",function(){
                arr.push(elem)
                let count= document.getElementById("coffee_count")
                count.innerText=`${total}`
                console.log(count)

                // console.log(arr)
                var data= localStorage.setItem("coffee",JSON.stringify(arr))

            })

            box.append(img,title,price,button)
            menu.append(box)

        })
        



    }


