const daySelected = document.querySelectorAll(".subject")
const inputEle = document.querySelector("#input-ele")
const addBtn = document.querySelector("#add-btn")
const lists = document.querySelector("#lists")

for(let i = 0; i < daySelected.length; i++){
    daySelected[i].addEventListener("click", function (){
      let subjectInnerHTML = this.innerHTML;
    //   let subjectInnerHTML = event.target.innerHTML;
    // console.log(this.parentNode.classList)
      console.log(subjectInnerHTML)

    });
  }
let subject="";
  inputEle.addEventListener("keyup",function(){
subject=this.value;
console.log(subject)
  })
addBtn.addEventListener("click",function(){

lists.innerHTML="<li>"+ subject +"</li>"
console.log(lists.innerHTML)

})




