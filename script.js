//*************************************** Premier encart*******************************************//
const character = document.getElementById("charac");
const block = document.getElementById("block");
const block2 = document.getElementById("block2");
block.style.visibility="hidden";
character.style.visibility="hidden";
let score =document.getElementById('score');
//********************************Fonction du premier jeu*****************************//
function startGame(){
	const launch=document.getElementById("block");
	launch.classList.add('animateblock');
	block.style.visibility="visible";
character.style.visibility="visible";
const popupg=document.getElementById("popupg");
popupg.style.visibility="hidden";
const score=document.getElementById("score");
setInterval(() => {
	score.style.visibility="visible";
	score.innerText++;
	if(score.innerText==600){
		launch.classList.add('animateblock1');
	}
	if(score.innerText==1100){
		launch.classList.add('animateblock2');
	}
	if(score.innerText==2401){
		launch.classList.add('animateblock3');
	
	}
	if(score.innerText==4300){
		launch.classList.add('animateblock4');
	
	}
	//calcul de la position top du personnage et gauche du bloc pour coder l'impact//
const charatop = parseInt(window.getComputedStyle(character)
					.getPropertyValue('top'));
					
const blockleft = parseInt(window.getComputedStyle(block)
					.getPropertyValue('left'));

if (blockleft<0) block.style.display='none';
else{
block.style.display='';
}
//Codage de l'impact, vérifie si le bloc est à la position du personnage et verifie si le personnage est assez haut pour ne pas toucher//
if (blockleft < 60 && blockleft >0 && charatop >230){
	
	block.style.animation ="none";
	block.style.display="none";
		let crash= new Audio("sounds/crash.mp3");
	crash.volume=0.1;
	crash.play();
	alert("Dommage... Vous avez perdu \n votre score était :"+ score.innerText);
	location.reload();
}
},10);
}
//ajoute  la classe animate au personnage qui est une classe préparé en css qui fait l'animation de saut//
function jump(){
	character.classList.add('animate');
	let jump= new Audio("sounds/jump.mp3");
	jump.volume=0.1;
	jump.play();
	//fait en sorte que le personnage puisse sauter plusieurs fois et pas une fois par rafraichissement de page//
setTimeout(function(){
		character.classList.remove('animate');
		
	
},500)

};

function changeBackground(){

		
		background= document.getElementById("encart_1")
        background.style.backgroundImage = "url(image/route.jpg)";
	    background.style.width="auto";
		background.style.height="300px";
		background.style.backgroundSize="cover";
}
//**********************************************Configuration des popups****************************************************
//**********************************************popup de paramètre de jeu************************
function popupopen(){
	document.getElementById("audio").style.top="150px";
	
}
function popupclose(){
	document.getElementById("audio").style.top="-800px";
}//**********************************************popup règles jeux************************
	
function popupg(){
	const launchb=document.getElementById("lgb");
	document.getElementById("popupg").style.top="-350px";
	launchb.style.visibility="hidden";
	
}



//**********************************************Configuration****************************************************
function createThings() {
const son= document.getElementById('audio');
const popupb=document.getElementById('popup');
let launchb=document.getElementById('lg');
const popupg=document.getElementById('popupg')
son.innerHTML = '<button id="son" name="btn" onclick="sound();">Lancez la musique ! </button><br><input id="volume" type="range" onchange="volume();" max="1,0" min="0,0"">  </input> <br> </input><br> <button id="close" onclick="popupclose();"> Fermer </button>'; 
popupg.innerHTML= '<p> Dans ce jeu, votre but est simple, vous devez sauter par dessus les roues en cliquant sur le terrain de jeu <br> Si vous touchez une <strong> roue </strong> la partie est perdu! Faites le plus haut score !</p> <br><button id="closepopb" onclick="startGame(),sound();"> Fermer et commencer la partie</button>';
popupb.innerHTML = '<button id="popupb" name="btn" onclick="popupopen();">Configurez le jeu</button>'; 
launchb.innerHTML="<button id='lgb' onclick='popupg();'> lancez le jeu </button";
popupg.style.display="block";
popupg.style.textAlign="center";
popupg.style.border="1px solid";
popupg.style.backgroundColor="grey";
launchb.style.zIndex="10";
popupb.style.top="342px";
}
//*****************Fonctions secondaires********************//
function sound(){
	let sound= document.getElementById('son');
	 sound = new Audio('musics/takeonme.mp3');
	 sound.volume=0.1;
		sound.play();	
}
function color(){
	COLOR= document.getElementById('color').value;
	
	places.style.color=COLOR;
}
//********************************************Second Encart************************************************
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const scale = 10;
const rows = canvas.height / scale;
const columns = canvas.width/scale;
function Snake(){
	this.x=0;
	this.y=0;
	this.xSpeed=scale*1;
	this.ySpeed=0;
	this.draw= function(){
		ctx.fillStyle="#FFFFFF";
		ctx.fillRect(this.x, this.y, scale,scale);
		
	}
	this.update= function(){
		this.x += xSpeed;
		this.y +=ySpeed;
	}
}

//********************************************Appel de fonction********************************************

changeBackground();
createThings();

