window.addEventListener("contextmenu", e => {
	e.preventDefault(); e.stopPropagation();
});

window.addEventListener('DOMContentLoaded', (event) => {
});

let ask=["Säljs två sparvar för? Matt 10:29","Änkans kopparmynt i kistan?","Antal dagar Paulus var blind","Antal vakter som vaktade Petrus","Antal bröd vid brödundret","Timmen då allt mörknade","Antalet församlingar som fick bokrulle i Upp.","Så många söner hade Davids far Isai?","Timmen då Jesus ropade högt","Dubbla kärleksbudets kapitel nr i Luk."];
let ans=["1","2","3","4","5","6","7","8","9","10"];

let box = document.createElement("div"); box.className="box"; document.body.appendChild(box);
let fuskRuta=document.createElement("div"); fuskRuta.id="fuskplan"; fuskRuta.style.gridRowStart=2; fuskRuta.style.gridColumnStart=1; box.appendChild(fuskRuta); 
let card=document.createElement("div"); card.id="card"; card.className="cards"; card.style.gridRowStart=1; card.style.gridColumnStart=1; fuskRuta.appendChild(card); 
let fram1=document.createElement("img"); fram1.id="fram1"; fram1.src="imgs/questA.jpg"; fram1.style.gridRowStart=1; fram1.style.gridColumnStart=1; fram1.setAttribute("draggable", false); fuskRuta.appendChild(fram1); fram1.style.animation="open1 5s linear forwards"; 
let fram2=document.createElement("img"); fram2.id="fram2"; fram2.src="imgs/questB.jpg"; fram2.style.gridRowStart=1; fram2.style.gridColumnStart=1; fram2.setAttribute("draggable", false); fuskRuta.appendChild(fram2); fram2.style.animation="open2 5s linear forwards"; 
let front=document.createElement("div"); front.className="front"; front.textContent=ask[0]; front.classList.add("front"); card.append(front); front.onclick=()=>{card.style.animation="show 0.8s linear forwards";}
// let back=document.createElement("div"); back.className="back"; card.append(back); back.onclick=()=>{card.style.animation="show2 0.8s linear forwards";}

 front.onclick=()=>{card.style.animation="show 1s linear forwards";  
 	if(front.textContent==ask[0]){back.textContent=ans[0]; 
  }else if(front.textContent==ask[1]){back.textContent=ans[1]; 
  }else if(front.textContent==ask[2]){back.textContent=ans[2]; 
  }else if(front.textContent==ask[3]){back.textContent=ans[3]; 
  }else if(front.textContent==ask[4]){back.textContent=ans[4]; 
  }else if(front.textContent==ask[5]){back.textContent=ans[5]; 
  }else if(front.textContent==ask[6]){back.textContent=ans[6]; 
  }else if(front.textContent==ask[7]){back.textContent=ans[7]; 
  }	}
let back=document.createElement("div"); back.className="back"; back.classList.add("back"); card.append(back); back.onclick=()=>{card.style.animation="show2 1s linear forwards"; 
 	if(back.textContent==ans[0]){front.textContent=ask[1]; 
  }else if(back.textContent==ans[1]){front.textContent=ask[2];
  }else if(back.textContent==ans[2]){front.textContent=ask[3]; 
  }else if(back.textContent==ans[3]){front.textContent=ask[4];  
  }else if(back.textContent==ans[4]){front.textContent=ask[5];  
  }else if(back.textContent==ans[5]){front.textContent=ask[6];  
  }else if(back.textContent==ans[6]){front.textContent=ask[7];  
  }else if(back.textContent==ans[7]){front.textContent=ask[0];}
}


// let getImages=document.querySelectorAll(".bilder");
// getImages.forEach((bild, i)=>{bild.id="n"+i;
	// bild.addEventListener('click', ()=>{
	// getImages.forEach(img => {img.style.opacity = 1});
	// fram1.style.animation="open1 5s linear forwards"; fram2.style.animation="open2 5s linear forwards";  
	// if(bild.id=="n0"){ask=ask1; ans=ans1; front.textContent=ask[0]; bild.style.opacity = 0.6; 
	// }else if(bild.id=="n1"){ask=ask2; ans=ans2; front.textContent=ask[0]; bild.style.opacity = 0.6; 
	// }else if(bild.id=="n2"){ask=ask3; ans=ans3; front.textContent=ask[0]; bild.style.opacity = 0.6; 
	// }else if(bild.id=="n3"){ask=ask4; ans=ans4; front.textContent=ask[0]; bild.style.opacity = 0.6; 
	// }else if(bild.id=="n4"){ask=ask5; ans=ans5; front.textContent=ask[0]; bild.style.opacity = 0.6; 
	// }else if(bild.id=="n5"){ask=ask6; ans=ans6; front.textContent=ask[0];bild.style.opacity = 0.6; 
	// }else if(bild.id=="n6"){ask=ask7; ans=ans7; front.textContent=ask[0];bild.style.opacity = 0.6; 
	// }else if(bild.id=="n7"){ask=ask8; ans=ans8; front.textContent=ask[0]; bild.style.opacity = 0.6;}
	// });
// });

