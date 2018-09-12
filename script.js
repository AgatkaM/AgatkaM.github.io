window.onload=start;

function start()
{

	document.getElementById("proj").innerHTML='<h2 id="projekty">Projekty</h2><table><tr><td><a href="saper/index.html" target="_blank"><img src="foto/saper.png"></a></td><td><a href="kulki/index.html" target="_blank"><img src="foto/kulki.png"></a></td><td><a href="matematycy/index.html" target="_blank"><img src="foto/mat.png"></a></td></tr><tr><td><a href="mastermind/index.html" target="_blank"><img src="foto/mast.png"></a></td><td><a href="kolko/index.html" target="_blank"><img src="foto/kolko.png"></a></td><td><a href="memo/index.html" target="_blank"><img src="foto/memo.png"></a></td></tr></table>';
	document.getElementById("wyksz").innerHTML='<h2 id="wyksztalcenie">Wykształcenie</h2><table><tr><td>2013-2017</td><td>Politechnika Śląska<br/>Automatyka i Robotyka<br/>Studia inżynierskie</td></tr><tr><td>2015-2018</td><td>Politechnika Śląska<br/>Matematyka<br/>Studia licencjackie</td></tr><tr><td>2017-nadal</td><td>Politechnika Śląska<br/>Matematyka<br/>Studia magisterskie</td></tr></table>';
	document.getElementById("umie").innerHTML='<h2 id="umiejetnosci">Umiejętności</h2><ul><li>Znajmość języka angielskiego na poziomie bardzo dobrym w mowie i w piśmie</li><li>Znajomość języka niemieckiego na poziomie podstawowym w mowie i w piśmie</li><li>Znajomość pakietu MS Office</li><li>Znajomość języków HTML5 i CSS3</li><li>Znajomość podstaw programowania w języku JavaScript i środowisku Mathematica</li></ul>';
	document.getElementById("kon").innerHTML='<h2 id="kontakt">Kontakt</h2><table><tr><td>Telefon</td><td>509 429 881</td></tr><tr><td>E-mail</td><td>agata.musial@onet.pl</td></tr></table>';

	var scroll0=document.getElementsByTagName("header")[0].offsetHeight;
	var scroll1 = document.getElementById("proj").offsetHeight;
	var scroll2 = document.getElementById("wyksz").offsetHeight;
	var scroll3 = document.getElementById("umie").offsetHeight;

	document.getElementsByTagName("li")[0].onclick=function(){
		scroll(scroll0+50);}
			
	document.getElementsByTagName("li")[1].onclick=function(){
		scroll(scroll0+scroll1+50);}
			
	document.getElementsByTagName("li")[2].onclick=function(){
		scroll(scroll0+scroll1+scroll2+50);}
			
	document.getElementsByTagName("li")[3].onclick=function(){
		scroll(scroll0+scroll1+scroll2+scroll3+50);}
			

}

function scroll(arg)
{

	window.scrollTo(0,arg);
}