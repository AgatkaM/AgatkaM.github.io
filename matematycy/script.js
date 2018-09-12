window.onload=start;

var nazwisko=["Hilbert","Euler","Gauss","Euklides","Kepler","Fermat","Riemann","Cantor","Poincare","Ulam","Steinhaus","Banach"];
/*
nazwisko[0]="Hilbert";
nazwisko[1]="Euler";
nazwisko[2]="Gauss";
nazwisko[3]="Euklides";
nazwisko[4]="Kepler";
nazwisko[5]="Fermat";
nazwisko[6]="Riemann";
nazwisko[7]="Cantor";
nazwisko[8]="Poincare";
nazwisko[9]="Ulam";
nazwisko[10]="Steinhaus";
nazwisko[11]="Banach";
*/
var imie=new Array(12);

imie[0]="David";
imie[1]="Leonhard";
imie[2]="Carl Friedrich";
imie[3]="";
imie[4]="Johannes";
imie[5]="Pierre de";
imie[6]="Bernhard";
imie[7]="Georg";
imie[8]="Henri";
imie[9]="Stanisław";
imie[10]="Hugo";
imie[11]="Stefan";

function start()
{
	$(".container").fadeIn(2000);
	
	var tresc_diva='<p id="secp">Witaj na stronie Wielcy Matematycy, na której poznasz biografie najbardziej cenionych przeze mnie mistrzów królowej nauk. Rozwój matematyki nie byłby możliwy bez ciężkiej pracy i poświęceń setek jej adeptów. Nie sposób wszystkich ich przedstawić i każdego wyróżnić. Wiele nazwisk zostało już zapomnianych, niektóre osiągnięcia przypisane innym uczonym. Jednak wysiłek żadnego z nich nie poszedł na marne. Poprzez moją stronę pragnę oddać hołd wszystkim, dzięki którym możemy choć trochę, po ludzku poznać alfabet, zgodnie z którym napisany został wszechświat. </p>';
	tresc_diva=tresc_diva+'<h3 onclick="start1()">PRzejdź dalej</h3>';
	/*document.getElementById("sec").style.display="block";*/

	document.getElementById("sec").innerHTML=tresc_diva;
	$("#secp").fadeIn(1200);



}

function start1()
{
	$('#sec').fadeOut(300);
	var tresc_diva="";

	for(i=0;i<12;i++)
	{

		var element="a"+i;
		var elementimg="aa"+i;

		tresc_diva=tresc_diva+'<figure class="mat" id="'+element+'"><img src="img/'+nazwisko[i]+'.jpg" onmouseover="kursor('+i+')" onclick="przejdz('+i+')" id="'+elementimg+'"/><h1>'+imie[i]+' '+nazwisko[i]+'</h1></figure>';
		if((i+1)%4==0)tresc_diva=tresc_diva+'<div style="clear:both;"></div>';

	}

	$('#ramka').fadeIn(1000);
	document.getElementById("ramka").innerHTML=tresc_diva;


}


function kursor(nr)
{
	var elem="aa"+nr;

	document.getElementById(elem).style.cursor="pointer";

}

function przejdz(nr)
{
	var numer=nr;

	var sekcja="";
	var tresc='<article class="tekst"><img src="img/'+nazwisko[nr]+'.jpg" /><h2>'+imie[nr]+' <em>'+nazwisko[nr]+'</em></h2><div style="clear:both"><p>'+strona[nr]+'</p></article><aside id="aside"></aside><div style="clear:both"></div>';

	tresc=tresc+'<div id="x" onclick=$("#pole").fadeOut(300) onmouseover=document.getElementById("x").style.cursor="pointer">x</div>';
	
	if(nr!=11)
	{
	tresc=tresc+'<div id="right" onclick="przejdz('+(nr+1)+')" onmouseover=document.getElementById("right").style.cursor="pointer">&#8658;</div>';
	}

	if(nr!=0)
	{
		tresc=tresc+'<div id="left" onclick="przejdz('+(nr-1)+')" onmouseover=document.getElementById("left").style.cursor="pointer">&#8656;</div>';
	}

	$("#pole").fadeIn(300);

	document.getElementById("pole").innerHTML=tresc;

}




var strona=new Array(12);

strona[0]="Urodzony 23 stycznia 1862 roku w Królewcu niemiecki matematyk to jeden z najważniejszych uczonych XX wieku. Uważany za ostatniego matematyka, który obejmował swym rozumem całą ówczesną wiedzę matematyczną. Sformuował 23 zagadnienia nazywane problemami Hilberta, które wpłynęły na kierunek badań matematycznych XX wieku.";
strona[1]="Szwajcarski matematyk i fizyk urodzony 15 kwietnia 1707 roku w Bazylei. Niezwykle płodny uczony, pozostawił po sobie kilkaset prac z zakresu wielu dziedzin. ";
strona[2]="Urodzony w Brunszwiku 30 kwietnia 1777 roku nie bez pzyczyny nazywany był przez współczesnych sobie &#8222;księciem matematyków&#8221;. W swoich badaniach naukowych zajmował się nie tylko matematyką, ale również fizyką, astronomią i geodezją. Jako pierwszy podał ścisły dowód zasadniczego twierdzenia algebry. ";
strona[3]="Żyjący w IV wieku przed naszą erą uczony był jednym z pionierów w zakresie teorii matematyki. Stworzył sławne &#8222;Elementy&#8221;, w których usystematyzował współczesną wiedzę matematyczną i jako pierwszy dokonał próby jej aksjomatyzacji. ";
strona[4]="Nazwisko urodzonego 27 grudnia 1571 roku niemieckiego uczonego jest powszechnie kojarzone bardziej z fizyką niż matematyką. Stworzył prawo ruchu planet, wykorzystane później do potwierdzenia teorii grawitacji Newtona. Badał geometrię wszechświata próbując udowodnić związek promieni sfer planet z wielościanami foremnymi. W swoich pracach używał argumentów religijnych, uważał, że Bóg stworzył świat zgodnie z inteligentnym planem. Jest autorem stwierdzenia: &#8222;Bóg jest matematykiem&#8221;. ";
strona[5]="Nietypowy matematyk i uczony. Urodzony 17 sierpnia 1601 roku Beaumont-de-Lomagne z wykształcenia był prawnikiem i lingwistą. Matematyki uczył się sam i nie publikował swoich odkryć. Większość prac została opublikowana dopiero po jego śmierci. Autor &#8222;Wielkiego twierdzenia Fermata&#8221;, jednego z najpopularniejszych matematycznych twierdzeń, które udało się udowodnić dopiero w 1993 roku. ";
strona[6]="Urodzony w niewielkim Breselenz 17 września 1826 roku niemiecki matematyk w swojej pracy naukowej zajmował się fizyką teoretyczną i filozofią przyrody. Rozwinął analizę matematyczną, był autorem teorii całki oznaczonej określanej dziś jego nazwiskiem. Zapoczątkował klasyfikację wszystkich rodzajów geometrii w tym geometrii nieeuklidesowych. Jego badania w temacie przestrzeni wielowymiarowych dało podstawy do sformułowania przez Einsteina ogólnej teorii względności.";
strona[7]="Niemiecki matematyk urodzony w 1845 roku wniósł szczególny wkład w tworzenie nowoczesnej matematyki. Dziś uważany jest za twórcę teorii mnogości. Wprowadził pojęcie równoliczności i pokazał, że zbiór liczb naturalnych nie jest równoliczny ze zbiorem liczb rzeczywistych, co równoznaczne jest z istnieniem różnych rodzajów nieskończoności. Próbował udowodnić hipotezę continuum dotyczącą istnienia zbioru o mocy pomiędzy mocą zbioru liczb naturalnych i rzeczywistych. Z powodu braku rezultatów w ostatnich latach życia zmagał się z depresją. ";
strona[8]="Urodzony 29 kwietnia 1854 roku, z wykształcenia był inżynierem górnictwa. W swojej pracy naukowej zajmował się teorią względności. Zajmował się wszystkimi dziedzinami ówczesnej matematyki. Zainicjował zwołanie światowego kongresu matematyków, z których pierwszy odbył się w 1894 roku w Zurychu. Hipoteza jego autorstwa, dotycząca rozmaitości topologicznych sformułowana w 1904 roku znalazła się na liście problemów milenijnych i została udowodniona ponad 100 lat później. ";
strona[9]="Polsko-amerykański matematyk urodził się 13 kwietnia 1909 we Lwowie. W swojej pracy naukowej zajmował się topologią, teorią mnogości, teorią miary i metodami numerycznymi. Był jednym z uczonych uczestniczących w projekcie Manhattan. Odkrył niewyjaśnione do dziś zjawisko rozkładu liczb pierwszych w zbiorze liczb naturalnych, a metoda jego przedstawiania nazwana została spiralą Ulama. ";
strona[10]="Polski matematyk urodzony 14 stycznia 1887 roku w Jaśle był współtwórcą lwowskiej szkoły matematycznej. W pracy naukowej badał teorię gier, teorię mnogości i głównie analizę funkcjonalną. Zajmował się zastosowaniami matematyki w innych dziedzinach nauki takich jak biologia, medycyna i statystyka. Był popularyzatorem matematyki, napisał min. książkę &#8222;Kalejdoskop matematyczny&#8221; w późniejszych latach wielokrotnie wydawaną i tłumaczoną na inne języki.";
strona[11]="Urodzony 30 marca 1882 roku w Krakowie matematyk-samouk był współtwórcą lwowskiej szkoły matematycznej. Prowadził badania w zakresie analizy funkcjonalnej. Przedstawił aksjomatyczną definicję przestrzeni unormowanej zupełnej nazwanej później jego nazwiskiem. ";




