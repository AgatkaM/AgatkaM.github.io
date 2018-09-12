
window.onload=start;



function start()
{
	var tresc_diva="";

	for(i=0;i<9;i++)
	{

		var element="po"+i;
		
		tresc_diva=tresc_diva+'<div class="tile" onclick="sprawdz('+i+')" id="'+element+'"></div>';
		if((i+1)%3==0)tresc_diva=tresc_diva+'<div style="clear:both"></div>';

		
	}

	document.getElementById("container").innerHTML=tresc_diva;

}

var k=0;
var uzytex=[0,0,0,0,0,0,0,0,0];
var uzyteo=[0,0,0,0,0,0,0,0,0];

var radosc=new Audio("klaskanie.wav");
var smutek=new Audio("porazka.wav");

var n=9;
var numbers=new Array(n);

var flag=1;


for(i=0;i<n;i++)
{
	numbers[i]=i;
}

function sprawdz(nr)
{
	if(flag==0)
	{
		return;
	}

	var znak="x";
	var ruch="po"+nr;
	var znakp="o";


		document.getElementById(ruch).innerHTML=znak;
		uzytex[nr]=1;

		for(i=0;i<9;i++)
		{
			if(numbers[i]==nr)
			{
				numbers[i]=numbers[n-1];
			}	
		}

		n--;
		

		document.getElementById(ruch).style.background="#2e2e2e";
		document.getElementById(ruch).style.cursor="default";

		document.getElementById(ruch).setAttribute("onclick",";");


	setTimeout(wygranax,300);
		
		k++;
	
		setTimeout(przeciwnik,305);
		flag=0;


}
	



function przeciwnik()
{
		var znakp="o";
		var przeciwnika;

		if (uzyteo[0]==1&&uzyteo[2]==1&&uzyteo[1]==0&&uzytex[1]==0)
		{
			przeciwnika=1;
		}

		else if (uzyteo[0]==1&&uzyteo[1]==1&&uzyteo[2]==0&&uzytex[2]==0)
		{
			przeciwnika=2;
		}

		else if (uzyteo[1]==1&&uzyteo[2]==1&&uzyteo[0]==0&&uzytex[0]==0)
		{
			przeciwnika=0;
		}

		else if (uzyteo[3]==1&&uzyteo[4]==1&&uzyteo[5]==0&&uzytex[5]==0)
		{
			przeciwnika=5;
		}

		else if (uzyteo[3]==1&&uzyteo[5]==1&&uzyteo[4]==0&&uzytex[4]==0)
		{
			przeciwnika=4;
		}

		else if (uzyteo[4]==1&&uzyteo[5]==1&&uzyteo[3]==0&&uzytex[3]==0)
		{
			przeciwnika=3;
		}

		else if (uzyteo[6]==1&&uzyteo[7]==1&&uzyteo[8]==0&&uzytex[8]==0)
		{
			przeciwnika=8;
		}

		else if (uzyteo[6]==1&&uzyteo[8]==1&&uzyteo[7]==0&&uzytex[7]==0)
		{
			przeciwnika=7;
		}

		else if (uzyteo[7]==1&&uzyteo[8]==1&&uzyteo[6]==0&&uzytex[6]==0)
		{
			przeciwnika=6;
		}

		else if (uzyteo[0]==1&&uzyteo[3]==1&&uzyteo[6]==0&&uzytex[6]==0)
		{
			przeciwnika=6;
		}

		else if (uzyteo[0]==1&&uzyteo[6]==1&&uzyteo[3]==0&&uzytex[3]==0)
		{
			przeciwnika=3;
		}

		else if (uzyteo[3]==1&&uzyteo[6]==1&&uzyteo[0]==0&&uzytex[0]==0)
		{
			przeciwnika=0;
		}

		else if (uzyteo[1]==1&&uzyteo[4]==1&&uzyteo[7]==0&&uzytex[7]==0)
		{
			przeciwnika=7;
		}

		else if (uzyteo[1]==1&&uzyteo[7]==1&&uzyteo[4]==0&&uzytex[4]==0)
		{
			przeciwnika=4;
		}

		else if (uzyteo[4]==1&&uzyteo[7]==1&&uzyteo[1]==0&&uzytex[1]==0)
		{
			przeciwnika=1;
		}

		else if (uzyteo[2]==1&&uzyteo[5]==1&&uzyteo[8]==0&&uzytex[8]==0)
		{
			przeciwnika=8;
		}

		else if (uzyteo[2]==1&&uzyteo[8]==1&&uzyteo[5]==0&&uzytex[5]==0)
		{
			przeciwnika=5;
		}

		else if (uzyteo[5]==1&&uzyteo[8]==1&&uzyteo[2]==0&&uzytex[2]==0)
		{
			przeciwnika=2;
		}

		else if (uzyteo[0]==1&&uzyteo[4]==1&&uzyteo[8]==0&&uzytex[8]==0)
		{
			przeciwnika=8;
		}

		else if (uzyteo[0]==1&&uzyteo[8]==1&&uzyteo[4]==0&&uzytex[4]==0)
		{
			przeciwnika=2;
		}

		else if (uzyteo[4]==1&&uzyteo[8]==1&&uzyteo[0]==0&&uzytex[0]==0)
		{
			przeciwnika=0;
		}

		else if (uzyteo[2]==1&&uzyteo[4]==1&&uzyteo[6]==0&&uzytex[6]==0)
		{
			przeciwnika=6;
		}

		else if (uzyteo[2]==1&&uzyteo[6]==1&&uzyteo[4]==0&&uzytex[4]==0)
		{
			przeciwnika=4;
		}

		else if (uzyteo[4]==1&&uzyteo[6]==1&&uzyteo[2]==0&&uzytex[2]==0)
		{
			przeciwnika=2;
		}


		else
		{

		if(uzytex[0]==1&&uzytex[1]==1&&uzyteo[2]==0)
		{
			przeciwnika=2;
		}

		else if (uzytex[0]==1&&uzytex[2]==1&&uzyteo[1]==0)
		{
			przeciwnika=1;
		}

		else if (uzytex[1]==1&&uzytex[2]==1&&uzyteo[0]==0)
		{
			przeciwnika=0;
		}

		else if (uzytex[0]==1&&uzytex[3]==1&&uzyteo[6]==0)
		{
			przeciwnika=6;
		}

		else if (uzytex[0]==1&&uzytex[6]==1&&uzyteo[3]==0)
		{
			przeciwnika=3;
		}

		else if (uzytex[3]==1&&uzytex[6]==1&&uzyteo[0]==0)
		{
			przeciwnika=0;
		}

		else if (uzytex[1]==1&&uzytex[4]==1&&uzyteo[7]==0)
		{
			przeciwnika=7;
		}

		else if (uzytex[1]==1&&uzytex[7]==1&&uzyteo[4]==0)
		{
			przeciwnika=4;
		}

		else if (uzytex[4]==1&&uzytex[7]==1&&uzyteo[1]==0)
		{
			przeciwnika=1;
		}

		else if (uzytex[3]==1&&uzytex[4]==1&&uzyteo[5]==0)
		{
			przeciwnika=5;
		}

		else if (uzytex[3]==1&&uzytex[5]==1&&uzyteo[4]==0)
		{
			przeciwnika=4;
		}

		else if (uzytex[4]==1&&uzytex[5]==1&&uzyteo[3]==0)
		{
			przeciwnika=3;
		}

		else if (uzytex[2]==1&&uzytex[5]==1&&uzyteo[8]==0)
		{
			przeciwnika=8;
		}

		else if (uzytex[2]==1&&uzytex[8]==1&&uzyteo[5]==0)
		{
			przeciwnika=5;
		}

		else if (uzytex[5]==1&&uzytex[8]==1&&uzyteo[2]==0)
		{
			przeciwnika=2;
		}

		else if (uzytex[6]==1&&uzytex[7]==1&&uzyteo[8]==0)
		{
			przeciwnika=8;
		}

		else if (uzytex[6]==1&&uzytex[8]==1&&uzyteo[7]==0)
		{
			przeciwnika=7;
		}

		else if (uzytex[7]==1&&uzytex[8]==1&&uzyteo[6]==0)
		{
			przeciwnika=6;
		}

		else if (uzytex[0]==1&&uzytex[4]==1&&uzyteo[8]==0)
		{
			przeciwnika=8;
		}

		else if (uzytex[0]==1&&uzytex[8]==1&&uzyteo[4]==0)
		{
			przeciwnika=4;
		}

		else if (uzytex[4]==1&&uzytex[8]==1&&uzyteo[0]==0)
		{
			przeciwnika=0;
		}

		else if (uzytex[2]==1&&uzytex[4]==1&&uzyteo[6]==0)
		{
			przeciwnika=6;
		}

		else if (uzytex[2]==1&&uzytex[6]==1&&uzyteo[4]==0)
		{
			przeciwnika=4;
		}

		else if (uzytex[4]==1&&uzytex[6]==1&&uzyteo[2]==0)
		{
			przeciwnika=2;
		}


		else
		{
		var przeciwnika=Math.floor(Math.random()*(n));
		}
	}

		var numer_przeciwnika=numbers[przeciwnika];

		var ruchprzeciwnika="po"+numer_przeciwnika;

		document.getElementById(ruchprzeciwnika).innerHTML=znakp;
		document.getElementById(ruchprzeciwnika).style.background="#2e2e2e";
		document.getElementById(ruchprzeciwnika).style.cursor="default";
		document.getElementById(ruchprzeciwnika).style.color="#FFE5E0";

		document.getElementById(ruchprzeciwnika).setAttribute("onclick",";");


		uzyteo[numer_przeciwnika]=1;

		for(i=0;i<9;i++)
		{
			if(numbers[i]==numer_przeciwnika)
			{
				numbers[i]=numbers[n-1];
			}	
		}

		n--;

		setTimeout(wygranao,300);
		flag=1;

		k++;
}

var rem=true;

function wygranax() 
{     
	if((uzytex[0]==1&&uzytex[1]==1&&uzytex[2]==1)||(uzytex[3
]==1&&uzytex[4]==1&&uzytex[5]==1)||(uzytex[6]==1&&uzytex[7]==1&&uzytex[8]==1)||(uzytex[0]==1&&uzytex[3]==1&&uzytex[6]==1)||(uzytex[1]==1&&uzytex[4]==1&&uzytex[7]==1)||(uzytex[2]==1&&uzytex[5]==1&&uzytex[8]==1)||(uzytex[0]==1&&uzytex[4]==1&&uzytex[8]==1)||(uzytex[2]==1&&uzytex[4]==1&&uzytex[6]==1))

{
		var tresc_wygranej="";
		var ponownie="";

	tresc_wygranej=tresc_wygranej+'<div class="napis">'+"Wygrana X"+'</div>';
	ponownie=ponownie+'<div class="ponownie" onclick="location.reload()">'+"Zagraj ponownie"+'</div>';

	document.getElementById("container").innerHTML=tresc_wygranej+ponownie;
	document.getElementById("container").style.color="#A0FFF1";
	radosc.play();
	rem=false;


}

	if((k==9)&&(rem==true))remis();

}



function wygranao()
{
if((uzyteo[0]==1&&uzyteo[1]==1&&uzyteo[2]==1)||(uzyteo[3
]==1&&uzyteo[4]==1&&uzyteo[5]==1)||(uzyteo[6]==1&&uzyteo[7]==1&&uzyteo[8]==1)||(uzyteo[0]==1&&uzyteo[3]==1&&uzyteo[6]==1)||(uzyteo[1]==1&&uzyteo[4]==1&&uzyteo[7]==1)||(uzyteo[2]==1&&uzyteo[5]==1&&uzyteo[8]==1)||(uzyteo[0]==1&&uzyteo[4]==1&&uzyteo[8]==1)||(uzyteo[2]==1&&uzyteo[4]==1&&uzyteo[6]==1))
{
	var tresc_wygranej="";
	var ponownie="";

	tresc_wygranej=tresc_wygranej+'<div class="napis">'+"Wygrana O"+'</div>';
	ponownie=ponownie+'<div class="ponownie" onclick="location.reload()">'+"Zagraj ponownie"+'</div>';

	document.getElementById("container").innerHTML=tresc_wygranej+ponownie;
	document.getElementById("container").style.color="#FFE5E0";
	radosc.play();
	rem=false;

}


	if((k==9)&&(rem==true))remis();



}

function remis()
{
	var tresc_wygranej="";
	var ponownie="";

	tresc_wygranej=tresc_wygranej+'<div class="napis">'+"REMIS"+'</div>';
	ponownie=ponownie+'<div class="ponownie" onclick="location.reload()">'+"Zagraj ponownie"+'</div>';

	document.getElementById("container").innerHTML=tresc_wygranej+ponownie;
	document.getElementById("container").style.color="#FFE688";
	smutek.play();

}

