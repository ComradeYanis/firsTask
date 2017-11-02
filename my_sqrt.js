class my_sqrt{
	constructor(number = 1.0,number_after_the_comma = 1.0){
		this.number = number;
		this.number_after_the_comma = number_after_the_comma;
	}

	complete(){
		var a = Math.pow(10, this.number_after_the_comma);
		return(parseFloat(Math.round(Math.pow(this.number,0.5) * a)/a).toFixed(this.number_after_the_comma));
	}
}

function DoMath(){
	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;
	let res = new my_sqrt(num1, num2);
	res.complete();
	document.getElementById('result').innerHTML = res.complete();	
}