var stage;
function createGame(gnum){
    document.body.innerHTML = '';
    counter=[];
    counter[0]="Juego:"+gnum;
    switch(gnum){
        case '1a':
            createCards('all');
            resetGame('1a',1);
            break;
        case '1b':
            resetGame('1b',1);
            break;
    }
};
function createCards(cid){
    if (cid === 'all'){
        var card=[];
        card[0] = {"value":100,"color":"#FF0000"};
        card[1] = {"value":50,"color":"#00FF00"};
        card[2] = {"value":20,"color":"#7CE6E4"};
        card[3] = {"value":10,"color":"#FFFF00"};
        card[4] = {"value":1,"color":"#dc3695"};
        var newCards=document.createElement("DIV");
        newCards.id="cards";
        document.body.appendChild(newCards);
        for(var i=0;i<card.length;i++){
                createCard(i,card[i].value,card[i].color,'');
                new Draggable("card"+i,{
                        scroll:window,zindex:10,handle:"card",revert:function(score)
                            { return 1; }
                });
        }
    }
    else {
        switch(cid){
            case 0:
                card[cid] = {"value":100,"color":"#FF0000"};
                break;
            case 1:
                card[cid] = {"value":50,"color":"#00FF00"};
                break;
            case 2:
                card[cid] = {"value":20,"color":"#7CE6E4"};
                break;
            case 3:
                card[cid] = {"value":10,"color":"#FFFF00"};
                break;
            case 4:
                card[cid] = {"value":1,"color":"#dc3695"};
                break;
        }
        var newCards=document.createElement("DIV");
        newCards.id="cards";
        document.body.appendChild(newCards);
        createCard(cid,card[cid].value,card[cid].color,'');
        new Draggable("card"+cid,{
            scroll:window,zindex:10,handle:"card",revert:function(score)
                { return 1; }
        });
    }
};

function createChild(num){
    var newChild=document.createElement("DIV");
    newChild.id="child"+num;
    var childImg=document.createElement("IMG");
    childImg.id="childImg"+num;
    childImg.src="images/child"+num+".png";
    newChild.appendChild(childImg);
    var nextDiv=document.createElement("DIV");
    nextDiv.id='div-next'+num;
    nextDiv.className='div-next';
    newChild.appendChild(nextDiv);
    var next=document.createElement("A");
    next.id='next'+num;
    next.className='next';
    next.innerHTML='Siguiente';
    if (num === 4)
        next.onclick=function() { createGame('1b');};
    else
        next.onclick=function() { resetGame('1a',num+1);};
    nextDiv.appendChild(next);
    var goal=document.createElement("DIV");
    goal.id="maxValueDiv";
    newChild.appendChild(goal);
    var goalIn=document.createElement("DIV");
    goalIn.id="maxValue";
    goalIn.innerHTML="20";
    goal.appendChild(goalIn);
    var cardSum=document.createElement("DIV");
    cardSum.id="cardshold";
    cardSum.value=0;
    newChild.appendChild(cardSum);
    document.body.appendChild(newChild);
    Droppables.add("childImg"+num,{
            accept:"card",onDrop:addScore
        });
    Droppables.add("childImg"+num,{
            accept:"cardhold",onDrop:rmvScore
        }
    );  
};

function resetGame(game, stage){
    //Booramos el anterior salvo que sea el primero
    switch(game){
        case '1a':
            createChild(stage);
            if (stage !== 1){
                var prevChild=document.getElementById("child"+Math.abs(stage - 1));
                prevChild.parentNode.removeChild(prevChild);
            }
            break;
        case '1b':
            jQuery("body").load("juego1b.php");
            break;
    }
    //Imprimir valores antes de resetear el count
    /*METRICAS*/
    time=new Date();
    tiempo=time.toLocaleTimeString();
    counter[1]=tiempo+"-Instancia:"+stage;
};
function addScore(score){
        var cardid=createCard(score.id,score.value,score.style.backgroundColor,'hold');
        new Draggable(cardid,{
                scroll:window,zindex:10,handle:"cardhold",revert:function(rmvscore)
                    { return 1; }
        });
        var pos=counter.length;
        var diff = Math.abs(new Date() - time);
        //Damos el tiempo con respecto al movimiento anterior:
        time=new Date();
        counter[pos+1]=diff+"-add-"+cardid;
        //alert(counter.join('\n'));
};

function createCard(id,valor,color,hold){
    var newCard=document.createElement("DIV");
    //Buscamos si existe la carta en el hold para no repetir ids
    var prevCards=document.getElementById("card"+hold+id);
    if (prevCards !== null){
        var i=0;
        while (prevCards !== null){
            i++;
            prevCards=document.getElementById("card"+hold+id+'_'+i);
        }
        newCard.id="card"+hold+id+'_'+i;
    }
    else
        newCard.id="card"+hold+id;
    newCard.className="card"+hold;
    newCard.style.backgroundColor=color;
    var textValue=document.createTextNode(valor);
    newCard.appendChild(textValue);
    newCard.value=valor;
    var cards=document.getElementById("cards"+hold);
    cards.appendChild(newCard);
    return newCard.id;
};

function rmvScore(rmvscore){
    rmvscore.parentNode.removeChild(rmvscore);
    var pos=counter.length;
    var diff = Math.abs(new Date() - time);
    //Damos el tiempo con respecto al movimiento anterior:
    time=new Date();
    counter[pos+1]=diff+"-rmv-"+rmvscore.id;
    //alert(counter.join('\n'));
}