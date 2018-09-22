function calculateInsurance(){
	
	var age = 0;
	var horsepower = 0;

	var valueContainer = {};
	var arrId = ["name","age","country","horsepower"];
	for (i = 0; i < arrId.length; i++){

		var item = document.getElementById(arrId[i]);
		valueContainer[i] = item.value;
	}

	var textOut = document.getElementById("resultdisplay");
	var result = 0;

	age = Number(valueContainer[1]);
	horsepower = Number(valueContainer[3]);

	//document.write(valueContainer[0], valueContainer[1], valueContainer[2], valueContainer[3]);

	if (valueContainer[0] && valueContainer[1] && valueContainer[2] && valueContainer[3]) {


	if (horsepower > 0 && age > 0){

		if (valueContainer[2] == "0") { // Austria 
			result = (horsepower * 100) / (age + 50);
		}
		else if (valueContainer[2] == "1") { // Hungary
			result = (horsepower * 120) / (age + 100);
		}
		else if (valueContainer[2] == "2") { // Greece
			result = (horsepower * 150) / (age + 3 + 150);
		}
	}
	
	textOut.innerText = valueContainer[0] + " your insurance costs " + Math.floor(result) + " €";

} else textOut.innerText = "Missing data!";


}


document.getElementById("button").addEventListener("click",calculateInsurance, false);