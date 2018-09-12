
window.onload=start;

var radosc=new Audio("klaskanie.wav");

//Funkcja startowa 

function start()
{
	var div='<div class="poczatek">Wybierz wariant gry:</div>'+'<div id="szesn" onclick="start1()">16 elementów</div>'+'<div id="dwad" onclick="start2()">24 elementy</div>'+'<div id="trzyd" onclick="start3()">36 elementów</div>';

	document.getElementById("plansza").innerHTML=div;
}

//Wariant dla 16 elementów

function start1()
{
	var tresc_diva="";

	for(i=0;i<16;i++)
	{
		var element="pole"+i;
		var elementin="polein"+i;

		tresc_diva=tresc_diva+'<div class="pole" onclick="sprawdz('+i+')" id="'+element+'"><div class="polein" id="'+elementin+'"></div></div>';
		if((i+1)%4==0)tresc_diva=tresc_diva+'<div style="clear:both"></div>';

		
	}

	var foot='Agata Musiał &copy;2017; Icons made by <a href="http://www.flaticon.com/authors/madebyoliver" title="Madebyoliver">Madebyoliver</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>';

	document.getElementById("plansza").innerHTML=tresc_diva;
	document.getElementById("footer").innerHTML=foot;

	obrazki();

}

var obrazy=new Array(16);

for(i=0;i<8;i++)
{
	obrazy[i]='<img src="img/p'+i+'.png"/>';
}

for(i=8;i<16;i++)
{
	obrazy[i]='<img src="img/p'+(i-8)+'.png"/>';
}


function obrazki()
{
	for(i=0;i<16;i++)
	{
		var losowa=Math.floor(Math.random()*16);
		var temp=obrazy[i];
		obrazy[i]=obrazy[losowa];
		obrazy[losowa]=temp;

	}


	for(i=0;i<16;i++)
	{
	document.getElementById('polein'+i).innerHTML=obrazy[i];
	}


}

var numery_obrazka=new Array(2);
var v=0;
var k=0;
var l=0;

var znikanie0;
var znikanie1;

var flaga=true;
var zajete=".";


function sprawdz(nr)
{

	if(flaga==true&&zajete!=nr)
	{	
	
	var ruch="polein"+nr;

	zajete=nr;

	document.getElementById(ruch).style.opacity=1;

	var nazwa_elementu=obrazy[nr];

	if(v%2==0)
	{
	numery_obrazka[0]=nazwa_elementu;
	znikanie0=nr;


	}

	if(v%2==1)
	{
		numery_obrazka[1]=nazwa_elementu;
		znikanie1=nr;
		flaga=false;
		zajete=".";
		setTimeout(flag,700);
		
		k++;
		document.getElementById("licznik").innerHTML="Liczba prób: <br/>"+k;


		if(numery_obrazka[0]==numery_obrazka[1])
		{
			l++;
			setTimeout(usuwanie,700);	
		}

		else
		{
			setTimeout(znikanie,700);

			numery_obrazka[0]="";
			numery_obrazka[1]="";			
		}
	}

	v++;
}
}

function koniec()
{

	var na_koniec='<div id="napis">Wygrana!</div>';

	document.getElementById("plansza").innerHTML=na_koniec;
	radosc.play();

}

function usuwanie()
{
	var usuwanie='<div id="usuwanie"/></div>';

			document.getElementById("pole"+znikanie0).style.cursor="default";
			document.getElementById("pole"+znikanie0).innerHTML=usuwanie;

			document.getElementById("pole"+znikanie1).style.cursor="default";
			document.getElementById("pole"+znikanie1).innerHTML=usuwanie;

			numery_obrazka[0]="";
			numery_obrazka[1]="";

			if(l==8)
			{
				koniec();
			}

}

function znikanie()
{
			document.getElementById("polein"+znikanie0).style.opacity=0;	
			document.getElementById("polein"+znikanie1).style.opacity=0;	

}

function flag()
{
	flaga=true;
}

//Tu zaczynają się funkcje dla 24 elementów

function start2()
{
	var tresc_diva="";

	for(i=0;i<24;i++)
	{
		var element="pole"+i;
		var elementin="polein"+i;

		tresc_diva=tresc_diva+'<div class="pole24" onclick="sprawdz2('+i+')" id="'+element+'"><div class="polein24" id="'+elementin+'"></div></div>';
		if((i+1)%6==0)tresc_diva=tresc_diva+'<div style="clear:both"></div>';

		
	}

	var foot='Agata Musiał &copy;2017; Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>';

	document.getElementById("plansza").innerHTML=tresc_diva;
	document.getElementById("footer").innerHTML=foot;

	obrazki2();

}


var obrazy2=new Array(24);

for(i=0;i<12;i++)
{
	obrazy2[i]='<img src="img2/p'+i+'.png"/>';
}

for(i=12;i<24;i++)
{
	obrazy2[i]='<img src="img2/p'+(i-12)+'.png"/>';
}


function obrazki2()
{
	for(i=0;i<24;i++)
	{
		var losowa=Math.floor(Math.random()*24);
		var temp=obrazy2[i];
		obrazy2[i]=obrazy2[losowa];
		obrazy2[losowa]=temp;

	}

	for(i=0;i<24;i++)
	{
	document.getElementById('polein'+i).innerHTML=obrazy2[i];
	}
}


function sprawdz2(nr)
{

	if(flaga==true&&zajete!=nr)
	{	
	
	var ruch="polein"+nr;

	zajete=nr;

	document.getElementById(ruch).style.opacity=1;

	var nazwa_elementu=obrazy2[nr];

	if(v%2==0)
	{
	numery_obrazka[0]=nazwa_elementu;

	znikanie0=nr;


	}

	if(v%2==1)
	{
		numery_obrazka[1]=nazwa_elementu;
	
		znikanie1=nr;
		flaga=false;
		zajete=".";
		setTimeout(flag,700);

		k++;
		document.getElementById("licznik").innerHTML="Liczba prób: <br/>"+k;

		if(numery_obrazka[0]==numery_obrazka[1])
		{
			
			l++
			setTimeout(usuwanie2,700);
			
		}

		else
		{

			setTimeout(znikanie2,700);

			numery_obrazka[0]="";
			numery_obrazka[1]="";			
		}
	}

	v++;
}
}


function koniec2()
{

	var na_koniec='<div id="napis">Wygrana!</div>';

	document.getElementById("plansza").innerHTML=na_koniec;
	radosc.play();

}

function usuwanie2()
{
	var usuwanie='<div id="usuwanie2"/></div>';

			document.getElementById("pole"+znikanie0).style.cursor="default";
			document.getElementById("pole"+znikanie0).innerHTML=usuwanie;

			document.getElementById("pole"+znikanie1).style.cursor="default";
			document.getElementById("pole"+znikanie1).innerHTML=usuwanie;

			numery_obrazka[0]="";
			numery_obrazka[1]="";

			if(l==12)
			{
				koniec();
			}

}

function znikanie2()
{
			document.getElementById("polein"+znikanie0).style.opacity=0;	
			document.getElementById("polein"+znikanie1).style.opacity=0;	

}

//Tu dla 36 elementów

function start3()
{
	var tresc_diva="";

	for(i=0;i<36;i++)
	{
		var element="pole"+i;
		var elementin="polein"+i;

		tresc_diva=tresc_diva+'<div class="pole36" onclick="sprawdz3('+i+')" id="'+element+'"><div class="polein36" id="'+elementin+'"></div></div>';
		if((i+1)%6==0)tresc_diva=tresc_diva+'<div style="clear:both"></div>';

		
	}

	var foot='Agata Musiał &copy;2017; Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="http://www.flaticon.com" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>';

	document.getElementById("plansza").innerHTML=tresc_diva;
	document.getElementById("footer").innerHTML=foot;

	obrazki3();

}

var obrazy3=new Array(36);

for(i=0;i<18;i++)
{
	obrazy3[i]='<img src="img3/p'+i+'.png"/>';
}

for(i=18;i<36;i++)
{
	obrazy3[i]='<img src="img3/p'+(i-18)+'.png"/>';
}

function obrazki3()
{
	for(i=0;i<36;i++)
	{
		var losowa=Math.floor(Math.random()*36);
		var temp=obrazy3[i];
		obrazy3[i]=obrazy3[losowa];
		obrazy3[losowa]=temp;

	}


	for(i=0;i<36;i++)
	{
	document.getElementById('polein'+i).innerHTML=obrazy3[i];
	}


}

function sprawdz3(nr)
{

	if(flaga==true&&zajete!=nr)
	{	
	
	var ruch="polein"+nr;

	zajete=nr;

	document.getElementById(ruch).style.opacity=1;

	var nazwa_elementu=obrazy3[nr];

	if(v%2==0)
	{
	numery_obrazka[0]=nazwa_elementu;

	znikanie0=nr;


	}

	if(v%2==1)
	{
		numery_obrazka[1]=nazwa_elementu;

		znikanie1=nr;
		flaga=false;
		zajete=".";
		setTimeout(flag,800);

		k++;

		document.getElementById("licznik").innerHTML="Liczba prób: <br/>"+k;

		if(numery_obrazka[0]==numery_obrazka[1])
		{

			l++;
			setTimeout(usuwanie3,800);
			
		}

	

		else
		{


			setTimeout(znikanie3,800);

			numery_obrazka[0]="";
			numery_obrazka[1]="";			
		}
	}
	v++;

}
}

function koniec3()
{

	var na_koniec='<div id="napis">Wygrana!</div>';

	document.getElementById("plansza").innerHTML=na_koniec;
	radosc.play();

}

function usuwanie3()
{
	var usuwanie='<div id="usuwanie3"/></div>';

			document.getElementById("pole"+znikanie0).style.cursor="default";
			document.getElementById("pole"+znikanie0).innerHTML=usuwanie;

			document.getElementById("pole"+znikanie1).style.cursor="default";
			document.getElementById("pole"+znikanie1).innerHTML=usuwanie;

			numery_obrazka[0]="";
			numery_obrazka[1]="";

			if(l==18)
			{
				koniec();
			}

}

function znikanie3()
{
			document.getElementById("polein"+znikanie0).style.opacity=0;	
			document.getElementById("polein"+znikanie1).style.opacity=0;	

}
