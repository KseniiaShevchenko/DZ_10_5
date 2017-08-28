
document.getElementById("btn1").onclick=MM;


function MM () {
	var a=document.getElementById('num').value;
	var b=2017-a;

	if (b>=16 && b<=1896) {
		alert("Вам "+b+" лет. Добро пожаловать!");
	}
	else if (b>=1897) {
		alert("Вы ввели год рождения в двухзначном формате");
	}
	else {
		alert("Вход воспрещен!");
	}
}

