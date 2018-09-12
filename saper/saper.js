window.onload=start;

var bombTable=[];
var checked=0;
var counter=[];
var seenTiles=[];
var crossed=[];
var counterX=0;

for(i=0;i<81;i++)
{
	counter[i]=0;
}

function start()
{
	
	let inside_div="";

	for(i=0;i<81;i++)
	{

		let tile="p"+i;

		inside_div=inside_div+'<div class="tile" onclick="tryClick('+i+')" id="'+tile+'"></div>';
		if((i+1)%9==0)
		{
			inside_div=inside_div+'<div style="clear:both"></div>';
		}

	}

	document.getElementById("container").innerHTML=inside_div;
	bombs();
	countBombs();

	 	for(j=0;j<81;j++)
	{
		let t=j;
		document.getElementById("p"+j).onmousedown = function(event){crossing(event,t)}
	}

	 document.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    }, false);

}

function crossing(event,tile)
{
	if(event.button==2){

		if(seenTiles[tile]==1)
		{
			return;
		}

		if(counterX==10)
		{
			return;
		}

		if(crossed[tile]==1)
		{
			crossed[tile]=0;
			document.getElementById("p"+tile).style.color="#004372";
			document.getElementById("p"+tile).innerHTML=" ";
			counterX=counterX-1;
		}
		else{
		document.getElementById("p"+tile).style.color="#ccc";
		document.getElementById("p"+tile).innerHTML="X";
		crossed[tile]=1;
		counterX=counterX+1;
	}
}
}


function tryClick(arg)
{

	// let tileID=arg.id;
	if(bombTable[arg]==1)
	{
		// alert("bomba");

		// for(i=0;i<10;i++){
		// 	document.getElementsByTagName("img")[i].style.display="inline";
		// }

		for(i=0;i<81;i++){
			if(bombTable[i]==1){
			document.getElementById("p"+i).innerHTML='<img src="bomb.png"/>';
		}
			document.getElementById("p"+i).setAttribute("onclick",";");

		}



		setTimeout(newGame,800);
	}
	else
	{
		floodFill(arg);
	}
	
}

function bombs()
{
	for(i=0;i<10;i++)
	{
		do
		{
		var randTile=Math.floor(Math.random()*80);
		}
		while(bombTable[randTile]==1);

		bombTable[randTile]=1;
		// document.getElementById("p"+randTile).innerHTML='<img src="bomb.png"/>';

	}
}

function floodFill(x)
{
	if(x<0||x>=81)
	{
		return;
	}

	if(bombTable[x]==1)
	{
		return;
	}

	if(seenTiles[x]==1)
	{
		return;
	}

	if(crossed[x]==1)
	{
		return;
	}

	seenTiles[x]=1;

	let tileFree="p"+x;
	document.getElementById(tileFree).style.background="#5e5e5e";
	document.getElementById(tileFree).style.cursor="default";
	document.getElementById(tileFree).setAttribute("onclick",";");
	checked=checked+1;

		if(checked==71)
	{
		alert("Wygrałeś!");
		setTimeout(newGame,500);
	}

	if((x+1)%9!=0)
	{
	if(counter[x]==0)
	{
		floodFill(x+1)
	}
	};

	if(x%9!=0)
	{
	if(counter[x]==0)
	{
		floodFill(x-1)
	}
	};

	if(x>=9)
	{
	if(counter[x]==0)
	{
		floodFill(x-9)
	}
	};

	if(x<72)
	{
	if(counter[x]==0)
	{
		floodFill(x+9)
	}
	};

	if(counter[x]!=0)
	{
	document.getElementById(tileFree).innerHTML=counter[x];
	}

	}



function countBombs()
{

	for(x=0;x<81;x++)
	{
		if(x<0||x>=81)
		{
			return;
		}
		if(bombTable[x]==1)
		{
			counter[x]=10;
		}

	if((x+1)%9!=0)
	{
		if(bombTable[x+1]==1)
		counter[x]=counter[x]+1;
	};

	if(x%9!=0)
	{
		if(bombTable[x-1]==1)
		counter[x]=counter[x]+1;
	};

	if(x>=9)
	{
		if(bombTable[x-9]==1)
		counter[x]=counter[x]+1;
	};

	if(x<72)
	{
		if(bombTable[x+9]==1)
		counter[x]=counter[x]+1;
	};

	if(x>=9&&x%9!=0)
	{
		if(bombTable[x-10]==1)
		counter[x]=counter[x]+1;
	};

	if(x>=9&&(x+1)%9!=0)
	{
		if(bombTable[x-8]==1)
		counter[x]=counter[x]+1;
	};

	if(x<72&&(x+1)%9!=0)
	{
		if(bombTable[x+10]==1)
		counter[x]=counter[x]+1;
	};

	if(x<72&&x%9!=0)
	{
		if(bombTable[x+8]==1)
		counter[x]=counter[x]+1;
	};
		}
		

}

function newGame()
{
	location.reload();
}
