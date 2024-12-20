function myFunction() 
 {     
   const text = document.createElement("input");
   text.value=document.getElementById("syssla").value;

   if(text.value==""||text.value==undefined)
      {document.getElementById("empty").innerHTML="Får ej skapa tomma sysslor!!!!!";}

   else
      {      
       document.getElementById("empty").innerHTML="";      
       text.readOnly=true;
    
       const btn1 = document.createElement("button");
       btn1.innerHTML = "Ändra";
  
       const btn2 = document.createElement("button");
       btn2.innerHTML = "  Färdig";

       const btn3 = document.createElement("button");
       btn3.innerHTML = "Radera";

       btn1.addEventListener("click", chFunction);
           function chFunction()
              {
                if(btn1.innerHTML==="Ändra") {text.readOnly=false;
                btn1.innerHTML = "Spara";}
                else {text.readOnly=true;
                btn1.innerHTML = "Ändra";}
               } 

       btn3.addEventListener("click",remove);
            function remove()
              {                     
               document.getElementById("myList").removeChild(x);
              }

       btn2.addEventListener("click",doneFunction);
            function doneFunction()  
              {    
               var y = document.createElement("LI");
               y.appendChild(text);y.appendChild(btn1);y.appendChild(btn3);
               document.getElementById("myList2").appendChild(y);
               document.getElementById("myList").removeChild(x);

      btn3.addEventListener("click",removeFärdig);
            function removeFärdig()
              {
               document.getElementById("myList2").removeChild(y);
              }
              }      
        var x = document.createElement("LI");
        x.appendChild(text);x.appendChild(btn1);x.appendChild(btn2);x.appendChild(btn3);
        document.getElementById("myList").appendChild(x); 
      }        
   }

function återställ()
  {
    const removelist=document.getElementById("myList");  
    removelist.remove(); 
    const removelist2=document.getElementById("myList2"); 
    removelist2.remove();
    document.getElementById("refresh").innerHTML="Refresh Page!!!!!";
  }