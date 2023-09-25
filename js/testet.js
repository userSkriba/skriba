window.addEventListener("contextmenu", e => {
 e.preventDefault();
}); 

let correct=0;


let getKlar=document.querySelector("#klarbut");
let getProv=document.querySelector("#provet");
let question1 = getProv.question1; let question2 = getProv.question2;
let question3 = getProv.question3; let question4 = getProv.question4;
let question5 = getProv.question5; let question6 = getProv.question6;
let question7 = getProv.question7; let question8 = getProv.question8;
let question9 = getProv.question9; let question10 = getProv.question10; 
getKlar.addEventListener("click", (e)=>{ e.preventDefault();
if(question1.value=="En relik från sista måltiden med Jesus"){correct++;}
if(question2.value=="Skål av jord/trä"){correct++;}
if(question3.value=="Ingen vet"){correct++;}
if(question4.value=="Qumran"){correct++;}
if(question5.value=="Beduin herdar"){correct++;}
if(question6.value=="Linneduk från Jesu grav"){correct++;}
if(question7.value=="Manna"){correct++;}
if(question8.value=="I Salomos tempel"){correct++;}
if(question9.value=="Uppenbarelseboken"){correct++;}
if(question10.value=="66"){correct++;}

getKlar.textContent="Antal rätt: " + correct;
});