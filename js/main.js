window.addEventListener("contextmenu", e => {
// e.preventDefault();
});

window.addEventListener('DOMContentLoaded', (event) => { window.scrollTo(0, 0); 
});

let cont=document.createElement("div"); cont.className="cont"; document.body.appendChild(cont);
let opacity = 0.6;
let main = document.createElement("div"); main.className="main"; main.style.gridRowStart=2; main.style.gridColumnStart=1; main.style.backgroundImage='url("./imgs/vora_kyrka1b.jpg")'; cont.appendChild(main);
let infoText = document.createElement("span"); infoText.id="present"; infoText.style.gridRowStart=2; infoText.style.gridColumnStart=1; 
let screen = document.createElement("iframe"); screen.className="screen"; screen.style.gridRowStart=2; screen.style.gridColumnStart=1; 
let imgs = document.createElement("div"); imgs.className="imgs"; imgs.style.gridRowStart=3; cont.appendChild(imgs);
let footer = document.createElement("div"); footer.className="footer"; footer.style.gridRowStart=4; cont.appendChild(footer);
let hem= document.createElement("img"); hem.src="imgs/hem.png"; hem.id="hem"; hem.style.gridColumnStart=1; hem.style.gridRowStart=1; hem.setAttribute("draggable", false); hem.setAttribute("style", "cursor:pointer"); footer.appendChild(hem); hem.onclick=()=>{window.location.href = "index.html";}
let fot = document.createElement("span"); fot.className="foot"; fot.style.gridColumnStart=2; fot.innerHTML="© Gerd Johansson"; footer.appendChild(fot); 

for(let i=1;i<5;i++){
	let img = document.createElement("img"); img.id=i; img.className="bilder"; img.setAttribute("draggable", false); imgs.appendChild(img);
	if(img.id==1){img.src="imgs/vora_kyrka.jpg"; img.style.opacity = opacity;
	}else if(img.id==2){img.src="imgs/bibba.jpg";
	}else if(img.id==3){img.src="imgs/skriba.jpg";
	}else if(img.id==4){img.src="imgs/veta.jpg";
	}
}

let getImages=document.querySelectorAll(".bilder");

getImages.forEach((bild, i)=>{bild.id="n"+i;
	bild.addEventListener('click', imgClick);
	bild.addEventListener('mouseover', ()=>{
	  if(bild.id=="n0"){bild.setAttribute("title", "Kyrkan");
  }else if(bild.id=="n1"){bild.setAttribute("title", "Bibban");
  }else if(bild.id=="n2"){bild.setAttribute("title", "Skriban");
  }else if(bild.id=="n3"){bild.setAttribute("title", "Kan du");}
	});
});

function imgClick(e) {let target=e.target; 
  // Återställ opacity
  getImages.forEach(img => {img.style.opacity = 1});

  if(target.id=="n0"){cont.appendChild(infoText); main.classList.add("filt"); main.style.backgroundImage='url("./imgs/vora_kyrka1b.jpg")'; infoText.innerHTML=text1;
  }else if(target.id=="n1"){cont.appendChild(infoText); main.classList.add("filt");main.style.backgroundImage='url("./imgs/bibba.jpg")'; infoText.innerHTML=text2;
  }else if(target.id=="n2"){cont.appendChild(infoText); main.classList.add("filt");main.style.backgroundImage='url("./imgs/skriba.jpg")'; infoText.innerHTML=text3;
  }else if(target.id=="n3"){cont.appendChild(infoText); main.classList.add("filt");main.style.backgroundImage='url("./imgs/veta.jpg")'; infoText.innerHTML=text4;}
  
  // Add fade in class
  main.classList.add('fade-in');

  // Remove fade-in class after .5 seconds
  setTimeout(() => main.classList.remove('fade-in'), 500);

  // Change the opacity to opacity var
  e.target.style.opacity = opacity;
}

let text1="Denna sida har inte fått någon uppmärksamhet ännu, men kan få det i framtiden. <span style='cursor:pointer'; onclick='kyrka()'>Klicka senare - till en interaktiv kyrkomiljö</span>";
let text2="Den här sidan kan komma att fungera. Osäkert resultat om man försöker koppla till någon online sida men ok om man laddar upp dokument från egen dator/en databas <span style='cursor:pointer'; onclick='bok()'>Klicka</span>";
let text3="Just nu ser det ut som en sida med filmer. Med enbart fyra filmer funkar det bra med innehållsförteckning nere i kanten men annars kan det vara en dropdown lista upptill <br><br><span style='cursor:pointer'; onclick='skriba()'> Till studium</span>";
let text4="Testa dig själv. Vad kan du redan? Vad har du lärt dig? <span style='cursor:pointer'; onclick='testa()'>Klicka</span>";
function build(){
	imgs.innerHTML=""; main.style.display="none"; 
	if(cont.appendChild(screen)){cont.removeChild(screen);
	}
}
function kyrka(){}
function bok(){build();window.scrollTo(0, 0);  cont.appendChild(screen); cont.removeChild(infoText);

for(let i=1;i<5;i++){
	let bokTitlar = document.createElement("p"); bokTitlar.id=i; bokTitlar.className="bildText"; imgs.appendChild(bokTitlar);
	if(bokTitlar.id==1){bokTitlar.textContent="Trosbekännelsen"; bokTitlar.style.opacity = opacity;
	}else if(bokTitlar.id==2){bokTitlar.textContent="Budorden";
	}else if(bokTitlar.id==3){bokTitlar.textContent="Katekesen";
	}else if(bokTitlar.id==4){bokTitlar.textContent="Fader vår";}
}

let getBooks=document.querySelectorAll(".bildText");

getBooks.forEach((bok, i)=>{bok.id="n"+i;
	bok.addEventListener('click', (e)=>{getBooks.forEach(img => {img.style.opacity = 1});
	if(bok.id=="n0"){screen.src="https://katekesen.fi/trosbekannelsen/trosbekannelsen.html"; 
	}else if(bok.id=="n1"){screen.src="https://katekesen.fi/10buden/10buden.html";
	}else if(bok.id=="n2"){screen.src="https://katekesen.fi/sakramenten/sakramenten.html";
	}else if(bok.id=="n3"){screen.src="https://katekesen.fi/fadervar/fadervar.html";}

  // Change the opacity to opacity var
  e.target.style.opacity = opacity;
	});
});
}

function skriba(){build(); window.scrollTo(0, 0);  cont.appendChild(screen); cont.removeChild(infoText);
	
for(let i=1;i<5;i++){
	let filmTitlar = document.createElement("p"); filmTitlar.id=i; filmTitlar.className="bildText"; imgs.appendChild(filmTitlar);
	if(filmTitlar.id==1){filmTitlar.style.opacity = 0.6; filmTitlar.textContent="Film1"; 
	}else if(filmTitlar.id==2){filmTitlar.textContent="Film2";
	}else if(filmTitlar.id==3){filmTitlar.textContent="Film3";
	}else if(filmTitlar.id==4){filmTitlar.textContent="Film4";}
}

let getFilms=document.querySelectorAll(".bildText");

getFilms.forEach((film, i)=>{film.id="n"+i;
	film.addEventListener('click', (e)=>{getFilms.forEach(img => {img.style.opacity = 1});
	if(film.id=="n0"){screen.src="https://www.youtube.com/embed/ezrERTqI12s?si=FoIKVZETatY8LNou&amp;controls=0";
	
	<!-- title='YouTube video player' frameborder="0" allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope'; picture-in-picture; web-share'"; -->
  }else if(film.id=="n1"){screen.src="https://www.youtube.com/embed/3LGwEvU7gwk?si=55Jd7XxK7qchTPjs&amp;controls=0";

  <!-- title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>"; -->
  }else if(film.id=="n2"){screen.src="https://www.youtube.com/embed/dACs9rv2ajk?si=o7oXb4V0KR6Er1Es&amp;controls=0";

  <!-- title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>"; -->
  }else if(film.id=="n3"){screen.src="https://www.youtube.com/embed/Qxv0X7iWTUY?si=oIzj-RMM5Di6d_mc&amp;controls=0";
  }
  
    // Change the opacity to opacity var
  e.target.style.opacity = opacity;
	});
});
}
function testa(){build();window.scrollTo(0, 0);   cont.appendChild(screen); cont.removeChild(infoText);
	for(let i=1;i<3;i++){
	let testImg = document.createElement("span"); testImg.id=i; testImg.className="filmText"; imgs.appendChild(testImg);
	if(testImg.id==1){testImg.textContent="Quiz 1"; testImg.style.opacity = 0.6;
	}else if(testImg.id==2){testImg.textContent="Quiz 2";}
	}

let getTests=document.querySelectorAll(".filmText");
getTests.forEach((tester, i)=>{tester.id="n"+i;
	tester.addEventListener('click', (e)=>{
	getTests.forEach(img => {img.style.opacity = 1});
	if(tester.id=="n0"){screen.src="theQuiz.html";
	}else if(tester.id=="n1"){screen.src="theExam.html"; }
// Change the opacity to opacity var
  e.target.style.opacity = opacity;
	});
});
}