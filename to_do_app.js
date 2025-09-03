let btn = document.querySelector("button");
let inp = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click",function(){
    let item = document.createElement('li');
    item.innerText = inp.value;

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("bg-color");
    

    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value="";

});

ul.addEventListener("click",function(event){
    if(event.target.nodeName == "BUTTON"){
        let per = event.target.parentElement;
        per.remove();
        console.log("item deleted");
    }
})
