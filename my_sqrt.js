class my_sqrt{
	constructor(number = 1.0,number_after_the_comma = 1.0){
		this.number = number;
		this.number_after_the_comma = number_after_the_comma;
	}

	//Формула Ньютона
	formula(number, EPS){
		var s = number;
		var b = number;
		var a = 1;
		while(Math.abs(a-b) > EPS){
			a = (a+b)/2;
			b = s / a;
		}
		return ((a+b)/2);
	}

	complete(){
		var a = Math.pow(10, this.number_after_the_comma);
		var ready = formula(this.number, 1/a);
		return(parseFloat(Math.round(ready * a)/a));
	}

	
} 

function DoMath(){
	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;
	let res = new my_sqrt(num1, num2);
	res.complete();
	document.getElementById('result').innerHTML = res.complete();	
}
