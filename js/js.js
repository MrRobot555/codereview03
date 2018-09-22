function calculateInsurance(){
	
	var age = 0;
	var horsepower = 0;

	var valueContainer = {};
	var arrId = ["name","age","country","horsepower"];
	for (i = 0; i < arrId.length; i++){

		var item = document.getElementById(arrId[i]);
		valueContainer[item.id] = item.value;
	}

	var outputItem = document.getElementById("resultdisplay");
	var result = 0;
	age = Number(valueContainer.age);
	horsepower = Number(valueContainer.horsepower);
	
	if(horsepower > 0 && age > 0){
		if (valueContainer.country == "0") { // Austria 
			result = (horsepower * 100) / (age + 50);
		}
		else if (valueContainer.country == "1") { // Hungary
			result = (horsepower * 120) / (age + 100);
		}
		else if (valueContainer.country == "2") { // Greece
			result = (horsepower * 150) / (age + 3 + 150);
		}
	}
	
	outputItem.innerText = valueContainer.name + " your insurance costs " + Math.floor(result) + " €";

}


document.getElementById("button").addEventListener("click",calculateInsurance, false);