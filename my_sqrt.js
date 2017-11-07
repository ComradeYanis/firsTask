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

	complete_sqrt(){
		var a = Math.pow(10, this.number_after_the_comma);
		var ready = thissformula(this.number, 1/a);
		return(parseFloat(Math.round(ready * a)/a));
	}	
} 

class fridays{
	constructor(start_number = 1, end_number = 1){
		this.start_number = start_number;
		this.end_number = end_number;
	}

	complete_col(){
		var year = this.start_number;
		var column_friday = 0;
		for(year; year <= this.end_number; year++){
				if(year % 4 == 0 && year % 100 !=0 || year % 400 == 0)
					for(var month = 1; month <=12; month++){
						var date = new Date(13,month,year);  // dd/mm/yy
						if(date.getDay() == 5)
						column_friday++;
					}
		}
		return column_friday;
	}
}
	
function DoMath(){
	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;
	let res = new my_sqrt(num1, num2);
	res.complete_sqrt();
	document.getElementById('result_sqrt').innerHTML = res.complete_sqrt();	
}

function DoDate(){
	var num1 = document.getElementById('num1').value;
	var num2 = document.getElementById('num2').value;
	let day = new fridays(num1, num2);
	day.complete_col();
	document.getElementById('result_col').innerHTML = day.complete_col();
	//document.getElementById('result_date').innerHTML = res.complete();	
}
