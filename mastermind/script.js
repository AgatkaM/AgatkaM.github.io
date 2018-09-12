window.onload=start;

var radosc=new Audio("klaskanie.wav");
var smutek=new Audio("porazka.wav");


function start()
{
	var tresc_diva="";

	for(i=1;i<=6;i++)
	{
		for(j=1;j<=4;j++)
	{
		var element="pole"+i+"."+j+"";

		tresc_diva=tresc_diva+'<div class="pole" onclick="decyzja('+i+"."+j+')" id="'+element+'"></div>';

			
	}
		tresc_diva=tresc_diva+'<div style="clear:both"></div>';	

	}

	document.getElementById("granie").innerHTML=tresc_diva;

	for(i=1;i<=6;i++)
	{
		for(j=1;j<=4;j++)
		{
			var element="pole"+i+"."+j+"";
			var elementin='<div class="polein">'+i+'</div>';
			document.getElementById(element).innerHTML=elementin;
		}
	}

	kolorki();
	obrazki_wynikow();
	rys_potwierdzenie();
	rysuj_los();
	losowanie();


}

function kolorki()
{
	var tresc_panelu="";

	for(i=0;i<6;i++)
	{
		var kol="kolor"+i;

		tresc_panelu=tresc_panelu+'<div class="kolor" onclick="klik('+i+')" id="'+kol+'"></div>';
	}


	document.getElementById("kolory").innerHTML=tresc_panelu;
}

function obrazki_wynikow()
{
	var tresc_wynikow="";

	for(i=1;i<7;i++)
	{
		for(j=1;j<5;j++)
		{
			var elwyn="polewyn"+i+"a"+j;

			tresc_wynikow=tresc_wynikow+'<div class="polewyn" id="'+elwyn+'"></div>';
			if((j)%2==0)tresc_wynikow=tresc_wynikow+'<div style="clear:both"></div>';
		}
		tresc_wynikow=tresc_wynikow+'<div style="clear:both;margin-top:15px"></div>';
	}

	document.getElementById("wyniki").innerHTML=tresc_wynikow;
}

function rys_potwierdzenie()
{
	var tresc_rys="";

	for(i=1;i<7;i++)
	{
		var potw="potwierdzenie"+i;

		tresc_rys=tresc_rys+'<div class="potwierdzenie" onclick="ok('+i+')" id="'+potw+'">OK</div>';
	}

	document.getElementById("potwierdzenie").innerHTML=tresc_rys;
}

function rysuj_los()
{

	var tresc_los="";

	for(i=1;i<5;i++)
	{
		var los="los"+i;

		tresc_los=tresc_los+'<div class="los" id="'+los+'"></div>';
	}

	tresc_los=tresc_los+'<br/>Prawidłowy wynik';

	document.getElementById("losy").innerHTML=tresc_los;
}



var v=true;

var tabela_kolorow=new Array(6);

tabela_kolorow[0]="#25A11B";
tabela_kolorow[1]="#ED0033";
tabela_kolorow[2]="#1A1DFF";
tabela_kolorow[3]="#FFD51A";
tabela_kolorow[4]="#A11A84";
tabela_kolorow[5]="#FE6500";

var wybr_kol;


function klik(numer_koloru)
{

	if(v==true)
	{

	wybr_kol=numer_koloru;

	var aktywny;	

	document.getElementById("kolor"+numer_koloru).style.width="60px";
	document.getElementById("kolor"+numer_koloru).style.height="60px";
	document.getElementById("kolor"+numer_koloru).style.borderRadius="35px";

	v=false;
	}

}

var tymczasowa;

var sprawdz=new Array(4);

var licznik_rzedu=1;

var tabela_wyboru=new Array(4);

function decyzja(numer_pola)
{
	var x;
	var y;

	if(v==false)
	{
	String(numer_pola);
	x=parseInt(String(numer_pola).charAt(0));
	y=String(numer_pola).charAt(2);

	if(x==licznik_rzedu)
	{

	v=true;
	temp_nr=numer_pola;


	document.getElementById("pole"+numer_pola).style.background=tabela_kolorow[wybr_kol];
	tabela_wyboru[y]=tabela_kolorow[wybr_kol];


	document.getElementById("kolor"+wybr_kol).style.width="40px";
	document.getElementById("kolor"+wybr_kol).style.height="40px";
	document.getElementById("kolor"+wybr_kol).style.borderRadius="20px";

	var pusty='<div id="pusty"></div>';

	document.getElementById("pole"+numer_pola).innerHTML=pusty;

	if(y==1)sprawdz[0]=1;
	if(y==2)sprawdz[1]=1;
	if(y==3)sprawdz[2]=1;
	if(y==4)sprawdz[3]=1;

		}	
}
}


function ok(nr_ok)
{

	if(sprawdz[0]=sprawdz[1]=sprawdz[2]=sprawdz[3]==1&&nr_ok==licznik_rzedu)
		{
			if(tabela_wyboru[1]!=tabela_wyboru[2]&&tabela_wyboru[1]!=tabela_wyboru[3]&&tabela_wyboru[1]!=tabela_wyboru[4]&&tabela_wyboru[2]!=tabela_wyboru[3]&&tabela_wyboru[2]!=tabela_wyboru[4]&&tabela_wyboru[3]!=tabela_wyboru[4])
			{

			sprawdz[0]=0;
			sprawdz[1]=0;
			sprawdz[2]=0;
			sprawdz[3]=0;

	sprawdzanie_kol();
	sprawdzanie_miejsca();
	kolory_wyniku();

	licznik_rzedu++;

	if(licznik_rzedu==7)
	{
		if(znacznik_wygr==true)
		{
		//alert("Koniec gry!");
		setTimeout(wygrana,300);
	}
	else
	{
		przegrana();
	}
	}

	
}
}

}

var tabela_kolorow_los=new Array(6);

tabela_kolorow_los[1]="#25A11B";
tabela_kolorow_los[2]="#ED0033";
tabela_kolorow_los[3]="#1A1DFF";
tabela_kolorow_los[4]="#FFD51A";
tabela_kolorow_los[5]="#A11A84";
tabela_kolorow_los[6]="#FE6500";


function losowanie()
{
	for(i=1;i<7;i++)
	{
		var losowa=Math.floor((Math.random()*6)+1);
		var temp_los=tabela_kolorow_los[i];
		tabela_kolorow_los[i]=tabela_kolorow_los[losowa];
		tabela_kolorow_los[losowa]=temp_los;
	}

	for(i=1;i<5;i++)
	{
		document.getElementById("los"+i).style.background=tabela_kolorow_los[i];
	}
	
}

var lb_kolor=0;
var lb_miejsce=0;

function sprawdzanie_kol()
{

	for(i=1;i<5;i++)
	{
		for(j=1;j<5;j++)
		{
			if(tabela_wyboru[i]==tabela_kolorow_los[j])
			{
				lb_kolor++;
			}
		}
	}

}

function sprawdzanie_miejsca()
{
	for(i=1;i<5;i++)
	{
		if(tabela_wyboru[i]==tabela_kolorow_los[i])
		{
			lb_miejsce++;
			lb_kolor--;
		}
	}

}

var znacznik_wygr=false;

function kolory_wyniku()
{
	
	for(i=1;i<=lb_kolor;i++)
	{
	document.getElementById("polewyn"+licznik_rzedu+"a"+i).style.background="#ffffff";	
	}

	for(i=1;i<=lb_miejsce;i++)
	{
		var lb=lb_kolor+i;

		document.getElementById("polewyn"+licznik_rzedu+"a"+lb).style.background="#000000";
	}

	if(lb_miejsce==4)
	{
		setTimeout(wygrana,300);
		znacznik_wygr=true;
		
	}

	lb_miejsce=0;
	lb_kolor=0;
}

function wygrana()
{
	document.getElementById("wygrana").style.display="block";
	radosc.play();
	document.getElementById("losy").style.display="block";
}

function przegrana()
{
	document.getElementById("wygrana").style.display="block";
	document.getElementById("wygrana").innerHTML="Przegrana";
	smutek.play();
	document.getElementById("losy").style.display="block";
}


