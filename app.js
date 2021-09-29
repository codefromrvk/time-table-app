const daySelected = document.querySelectorAll(".subject")
const inputEle = document.querySelector("#input-ele")
const addBtn = document.querySelector("#add-btn")
const lists = document.querySelector("#lists")

let subjectList=[];
let swapFrom="";
let swapTo="";
let clickCounter=0;

for(let i = 0; i < daySelected.length; i++){

      daySelected[i].addEventListener("click", function (e){
      clickCounter+=1;
      // console.log(clickCounter)
      // console.log(e.target)
      e.target.style.color="red";
      let subjectInnerHTML = this.innerHTML;
      if(clickCounter===1){
        swapFrom=e.target.innerText;
        console.log(swapFrom);
      }
      else if(clickCounter===2){
        swapTo=e.target.innerText;
        console.log(swapTo);
      }
      else {

        clickCounter=0;
         
        let elementList=e.target.parentNode.children;
          for(var i=0;i<elementList.length;i++){
            console.log(elementList.item(i))
            elementList.item(i).style.color="black";

          }
        }

    });
  }



addBtn.addEventListener("click",function(){
    
   
    let subject=inputEle.value;
    var li = document.createElement("li");
    lists.appendChild(li).textContent =subject+" ";

    // lists.innerHTML="<li>"+ subject +"</li>"
    

    var removeBtn = document.createElement("input");
    removeBtn.type = "button";
    removeBtn.style.display="inline";
    removeBtn.value = "Remove";
    removeBtn.onclick = remove;
    li.appendChild(removeBtn);

    function remove(e) {
      var el = e.target;
      el.parentNode.remove();
    }
    // console.log(li)
    
    // console.log(subject)
    lists.appendChild(li);

})




