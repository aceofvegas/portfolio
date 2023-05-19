function darkfun() { 
     var element = document.body; 
     element.classList.toggle("dark-mode"); 
  
     if ( darkonoff == 0 ) { 
         darkonoff = 1; 
         dark()         
     } 
     else if ( darkonoff == 1) { 
         darkonoff = 0; 
         light() 
     } 
 }; 
  
 //localStorage.setItem("dark",0) //uncomment this line to set the default mode to dark
  
 var darkonoff = localStorage.getItem("dark") || 0; //get the stored value of dark or use 0 as default
  
 function dark() { 
     one = document.getElementById("mode").href = 'css/dark.css'; 
     //two = document.getElementById("bjdm").href = 'css/bj-mobile-dark.css'; 
     localStorage.setItem("dark",1); //store the current mode as 1
 }; 
 function light() { 
     one = document.getElementById("mode").href = 'css/main.css'; 
     //two = document.getElementById("bjdm").href = 'css/bj-mobile.css'; 
     localStorage.setItem("dark",0); //store the current mode as 0
 };
 
 function auto() {
   if ( darkonoff == 1 ) { 
    dark()         
    } 
   else if ( darkonoff == 0) { 
    light() 
    }
 
   } 
 
 window.addEventListener("DOMContentLoaded", auto());