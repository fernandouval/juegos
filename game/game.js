
var stage;
function createGame()
	{
	createCards();
	createBoy(1);
	resetGame();
};
function createCards()
	{
	var card=[];
	card[0]=
		{
		"value":100,"color":"#FF0000"
	};
	card[1]=
		{
		"value":50,"color":"#00FF00"
	};
	card[2]=
		{
		"value":20,"color":"#7CE6E4"
	};
	card[3]=
		{
		"value":10,"color":"#FFFF00"
	};
	card[4]=
		{
		"value":1,"color":"#dc3695"
	};
        var newCards=document.createElement("DIV");
	newCards.id="cards";
        document.body.appendChild(newCards);
	for(var i=0;
	i<card.length;
	i++)
		{
		createCard(i,card[i].value,card[i].color,'');
		new Draggable("card"+i,
			{
			scroll:window,zindex:10,handle:"card",revert:function(score)
				{
				return 1
			}
		}
		)
	}
};

function createBoy(num)
	{
	var newBoy=document.createElement("DIV");
	newBoy.id="boy"+num;
	var boyImg=document.createElement("IMG");
	boyImg.id="boyImg"+num;
	boyImg.src="images/child"+num+".png";
	newBoy.appendChild(boyImg);
	var cardSum=document.createElement("DIV");
	cardSum.id="cardshold";
	cardSum.value=0;
	newBoy.appendChild(cardSum);
	var goal=document.createElement("DIV");
	goal.id="maxValueDiv";
        goal.innerHTML="20";
	newBoy.appendChild(goal);
	newBoy.maxValue=function()
		{
		var goal=document.getElementById("maxValueDiv");
		return parseInt(goal.innerHTML,10);
	};
	document.body.appendChild(newBoy);
	Droppables.add("boyImg"+num,
		{
		accept:"card",onDrop:addScore
	}
	)
};

function resetGame()
	{
	var reset=document.getElementById ("cardshold");
	reset.innerHTML='';
	stage=1;
};
function addScore(score)
	{
	//var newBoy=document.getElementById(score.id);
	/*var reset=document.getElementById("cardshold");
	var result=parseInt(reset.value,10)+score.value;
	reset.value=result;*/
        createCard(score.id,score.value,score.style.backgroundColor,'hold');
        new Draggable("cardhold"+score.id,
                {
                scroll:window,zindex:10,handle:"cardhold",revert:function(rmvscore)
                        {
                        return 1
                }
        }
        )
/*	if(result==newBoy.maxValue())
		{
		alert("Ganaste!!!");
		resetGame()
	}
	else
		{
		if(result>newBoy.maxValue())
			{
			alert("Perdiste!!!");
			resetGame()
		}
	}*/
};

function createCard(id,valor,color,hold)
	{
	var newCard=document.createElement("DIV");
	newCard.id="card"+hold+id;
	newCard.className="card"+hold;
	newCard.style.backgroundColor=color;
	var _0x7cf8x18=document.createTextNode(valor);
	newCard.appendChild(_0x7cf8x18);
	newCard.value=valor;
        var cards=document.getElementById("cards"+hold);
	cards.appendChild(newCard);
};

function rmvScore(){
    alert('Remover: ');
}