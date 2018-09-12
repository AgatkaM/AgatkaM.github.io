window.onload=start;

var busy=[];
var checked=[];
var highlighted=[];
var colorTable=new Array(5);

colorTable[0]="#25A11B";
colorTable[1]="#ED0033";
colorTable[2]="#1A1DFF";
colorTable[3]="#FFD51A";
colorTable[4]="#000000";

for(i=0;i<81;i++)
{
	busy[i]==0;
	checked[i]==0;
	highlighted[i]==0;
}

var ballsTable=[];

function start()
{
	let inside_div="";

	for(i=0;i<81;i++)
	{

		let tile=i;

		inside_div=inside_div+'<div class="tile" id="t'+i+'" onclick="tryClick('+i+')"><div class="ball" id="'+tile+'"></div></div>';
		if((i+1)%9==0)
		{
			inside_div=inside_div+'<div style="clear:both"></div>';
		}

	}

	document.getElementById("board").innerHTML=inside_div;
	ballsDraw();
}

function ballsDraw()
{
	let randTile=0;
	let randColor=0;

	for(i=0;i<3;i++)
	{
		do
		{
			randTile=Math.floor(Math.random()*81);
		}
		while(busy[randTile]==1);

		randColor=Math.floor(Math.random()*5);

		busy[randTile]=1;

		ballsTable[randTile]=new ballConstruct(randTile,randColor);

		ballPaint(randTile,randColor);
		counter=counter+1;

		if(counter==81)
		{
			alert(points);
		}
	}


}

function ballConstruct(tile,color)
{
	this.tile=tile;
	this.color=color;
}

function ballPaint(tile,color)
{
	document.getElementById(tile).style.background=colorTable[color];
	document.getElementById(tile).style.display="block";

}

var even=0;
var tempTile;
var tempColor;
var counter=0;
var points=0;
var possibleMove=0;

function tryClick(arg)
{

	if(counter==81)
	{
		return;
	}

	if(busy[arg]==1)
	{
		if(even==0)
		{
		tempTile=ballsTable[arg].tile;
		tempColor=ballsTable[arg].color;
		checkMoveFirst(arg);		

		if(possibleMove==0)
		{
			return;
		}

		document.getElementById(arg).style.width="68px";
		document.getElementById(arg).style.height="68px";
		document.getElementById(arg).style.borderRadius="34px";
		document.getElementById(arg).style.marginTop="0px";
		
		even=1;
	}
	return;
	}
	
	if(busy[arg]!=1)
	{
		if(even==1&&highlighted[arg]==1)
		{
			busy[tempTile]=0;
			busy[arg]=1;
			document.getElementById(tempTile).style.display="none";
			ballPaint(arg,tempColor);
			ballsTable[arg]=new ballConstruct(arg,tempColor);
			document.getElementById(tempTile).style.width="50px";
			document.getElementById(tempTile).style.height="50px";
			document.getElementById(tempTile).style.borderRadius="25px";
			document.getElementById(tempTile).style.marginTop="6px";
			ballsDraw();
			check();

			for(i=0;i<81;i++)
			{
				highlighted[i]=0;
				checked[i]=0;
				possibleMove=0;
				document.getElementById("t"+i).style.background="#2d2d2d";
			};

			even=0;
		}
		return;
	}


}

function check()
{
	for(i=0;i<9;i++)
	{
		for(r=4+i*9;r<9+i*9;r++)
		{
			if(busy[r]==1&&busy[r-1]==1&&busy[r-2]==1&&busy[r-3]==1&&busy[r-4]==1)
			{
				let col1=ballsTable[r-4].color;
				let col2=ballsTable[r-3].color;
				let col3=ballsTable[r-2].color;
				let col4=ballsTable[r-1].color;
				let col5=ballsTable[r].color;

				if(col1==col2&&col2==col3&&col3==col4&&col4==col5)
				{
					for(j=r-4;j<=r;j++)
					{
						busy[j]=0;
						document.getElementById(j).style.display="none";
						counter=counter-1;
					}

					points=points+5;
				}
			}
		}
	

	}

	for(i=0;i<9;i++)
	{
	for(c=0+i;c<45+i;c=c+9) 
		{
			if(busy[c]==1&&busy[c+9]==1&&busy[c+18]==1&&busy[c+27]==1&&busy[c+36]==1) 
			{

				let col1=ballsTable[c].color;
				let col2=ballsTable[c+9].color;
				let col3=ballsTable[c+18].color;
				let col4=ballsTable[c+27].color;
				let col5=ballsTable[c+36].color;

				if(col1==col2&&col2==col3&&col3==col4&&col4==col5)
				{
					for(j=c;j<=c+36;j=j+9) 
					{
						busy[j]=0;
						document.getElementById(j).style.display="none";
						counter=counter-1;
					}

					points=points+5;
				}
			}
		}
	}

	for(c=0;c<5;c++) 
	{
	for(i=0+c*9;i<5+c*9;i++) 
		{
		if(busy[i]==1&&busy[i+10]==1&&busy[i+20]==1&&busy[i+30]==1&&busy[i+40]==1) 
		{
			let col1=ballsTable[i].color;
			let col2=ballsTable[i+10].color;
			let col3=ballsTable[i+20].color;
			let col4=ballsTable[i+30].color;
			let col5=ballsTable[i+40].color;

			if(col1==col2&&col2==col3&&col3==col4&&col4==col5)
				{
					for(j=i;j<=i+40;j=j+10)
					{
						busy[j]=0;
						document.getElementById(j).style.display="none";
						counter=counter-1;
					}

					points=points+5;
				}
		}
	}
	}

	for(c=0;c<5;c++) 
	{
	for(i=4+c*9;i<9+c*9;i++) 
	{
		if(busy[i]==1&&busy[i+8]==1&&busy[i+16]==1&&busy[i+24]==1&&busy[i+32]==1) 
		{

			let col1=ballsTable[i].color;
			let col2=ballsTable[i+8].color;
			let col3=ballsTable[i+16].color;
			let col4=ballsTable[i+24].color;
			let col5=ballsTable[i+32].color;

			if(col1==col2&&col2==col3&&col3==col4&&col4==col5)
				{
					for(j=i;j<=i+32;j=j+8)
					{
						busy[j]=0;
						document.getElementById(j).style.display="none";
						counter=counter-1;
					}

					points=points+5;
				}

		}
	}
}


}

function checkMoveFirst(tile)
{
	if(tile<0||tile>=81)
	{
		return;
	}

	checked[tile]=1;

	if((tile+1)%9!=0)
	{
		checkMove(tile+1);
	}

	if(tile%9!=0)
	{
		checkMove(tile-1);
	}

	if(tile>=9)
	{
		checkMove(tile-9);
	}

	if(tile<72)
	{
		checkMove(tile+9);
	}

}

function checkMove(tile)
{
	if(busy[tile]==1)
	{
		return;
	}

	if(checked[tile]==1)
	{
		return;
	}

	checked[tile]=1;
	let tt="t"+tile;
	document.getElementById(tt).style.background="#444444";
	highlighted[tile]=1;
	possibleMove=1;

	if((tile+1)%9!=0)
	{
		checkMove(tile+1);
	}

	if(tile%9!=0)
	{
		checkMove(tile-1);
	}

	if(tile>=9)
	{
		checkMove(tile-9);
	}

	if(tile<72)
	{
		checkMove(tile+9);
	}

}