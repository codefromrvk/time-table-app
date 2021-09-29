  const subjects = document.querySelectorAll(".subject")
  const inputEleSubject = document.querySelector("#input-ele-subject")
  const inputEleTime = document.querySelector("#input-ele-time")
  const addBtn = document.querySelector("#add-btn")
  const lists = document.querySelector("#lists")
  const outputBtn=document.querySelector("#output-btn")
  const freqEle=document.querySelector("#input-ele-freq")

  let subjectList=[];
  let swapFrom={};
  let swapFromText="";
  let swapTo={};
  let swapToText="";
  let clickCounter=0;

  for(let i = 0; i < subjects.length; i++){

        subjects[i].addEventListener("click", function (e){
        clickCounter+=1;
        console.log(clickCounter)
        // console.log(typeof(e.target))
        e.target.style.color="red";
        // let subjectInnerHTML = this.innerHTML;
        if(clickCounter===1){
          swapFrom=e.target;
          swapFromText= e.target.innerText;
          console.log(swapFrom);
        }
        else if(clickCounter===2){
          swapTo=e.target;
          swapToText= e.target.innerText;
          swapFrom.innerText=swapToText;
          swapTo.innerText=swapFromText;
          clickCounter=0;
          
          let elementList1=swapTo.parentNode.children;
            for(var i=0;i<elementList1.length;i++){
              // console.log(elementList.item(i))
              elementList1.item(i).style.color="black";
              

            }
          let elementList2=swapFrom.parentNode.children;
            for(var i=0;i<elementList2.length;i++){
              // console.log(elementList.item(i))
              elementList2.item(i).style.color="black";
              

            }
        }

      });
    }



  addBtn.addEventListener("click",function(){
      
    
      let subject=inputEleSubject.value;
     
      let time=inputEleTime.value;
      let freq=freqEle.value;
      var li = document.createElement("li");
      lists.appendChild(li).textContent =subject+" "+time+" "+freq+" ";

      subjectList.push({subject,time,freq});

      var removeBtn = document.createElement("button");
      removeBtn.innerText = "remove";
      removeBtn.style.display="inline";
      removeBtn.onclick = remove;
      li.appendChild(removeBtn);

      function remove(e) {
        let el = e.target;
        let splitEle=el.parentNode.innerText.split(" ");
 
        for(let i=0;i<subjectList.length;i++){
          
          if(splitEle[0]===subjectList[i].subject){
              subjectList.splice(i,1);
          }

        }
        // console.log(subjectList,"aftr");
       
        el.parentNode.remove();
        // subjectList.
      }

      lists.appendChild(li);

  })


  function getRandomIndex(){
    return indexValue=Math.floor(Math.random()*subjectList.length)
  }
  outputBtn.addEventListener("click",function(){
        console.log("sublist",subjectList)

        for(let i = 0; i < subjects.length; i++){
              let indexvalue=getRandomIndex();
              subjects[i].innerText= subjectList[indexvalue].subject;
              console.log(subjects[i].innerText)
              
              // console.log(subjects[i].innerText)

        }


  })





