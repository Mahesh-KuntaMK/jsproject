



let submit=document.getElementById('formid')
submit.addEventListener("submit",register);
submit.style.backgroundColor="#d7dbd8"
body.style.backgroundColor="#d7dbd8"
function register(e){
          e.preventDefault();
       // console.log("mahesh")
            let userdata={
               amount:document.getElementById('amount').value,
               description:document.getElementById('description').value,
               category:document.getElementById('category').value
            }
            let strUser=JSON.stringify(userdata);
           localStorage.setItem(userdata.description,strUser);
           var body=document.getElementById('body');
            let ul=document.createElement("ul");
             body.appendChild(ul);

              let li=document.createElement('li');
              let delbtn=document.createElement('button');
              delbtn.className="delbtn";
              delbtn.textContent="Delete";

            
              let editbtn=document.createElement('button');

              editbtn.className='editbtn';
              editbtn.textContent='Edit';
              li.className='input-group';
              li.textContent=`${userdata.amount}-${userdata.category}-${userdata.description}`;
              li.appendChild(delbtn);
              li.appendChild(editbtn);
              ul.appendChild(li);
              body.appendChild(ul)
              delbtn.onclick=function(){
                    ul.removeChild(li);
              }
              editbtn.onclick=function(){
               document.getElementById('amount').value=userdata.amount;
               document.getElementById('description').value=userdata.description;
               document.getElementById('category').value=userdata.category;
               ul.removeChild(li);
              }
            
             submit.reset();
      

}

