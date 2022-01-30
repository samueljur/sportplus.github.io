// Obsługa Kalkulatora BMI

function bmiCalculator() {
	let height = parseInt(document.querySelector("#height-input").value);
	let weight = parseInt(document.querySelector("#weight-input").value);
	let result = document.querySelector("#result");
	let comment = document.querySelector("#comment");
	let info = document.querySelector("#info");

	if ((height === "" || isNaN(height)) && (weight === "" || isNaN(weight)))
		result.innerHTML = "Proszę wprowadzić swój wzrost oraz wagę!";
	else if (height === "" || isNaN(height))
		result.innerHTML = "Proszę wprowadzić swój wzrost!";
	else if (weight === "" || isNaN(weight))
		result.innerHTML = "Proszę wprowadzić swoją wagę!";
	else {
		let bmi = (weight / ((height * height) / 10000)).toFixed(2);

		if (bmi < 18.5) {
			result.innerHTML = `Twój wskaźnik BMI : <span>${bmi}</span>`;
			comment.innerHTML = `<p style='color: red'>Masz niedowagę</p>`;
			info.innerHTML =
				"Teraz znasz swój wskaźnik masy ciała! No dobrze, ale co zrobić z tą wiedzą? Światowa Organizacja Zdrowia (WHO) przygotowała skalę, która pozwala przyporządkować wyliczony wskaźnik BMI do konkretnego zakresu: <ul> <li><18,5 – niedowaga,</li> <li>18,5-24,9 – prawidłowa masa ciała,</li> <li>25,0-29,9 – nadwaga,</li> <li>30,0-34,9 – otyłość I stopnia,</li> <li>35,0-39,9 – otyłość II stopnia,</li> <li>≥ 40,0 – otyłość III stopnia.</li> </ul> Wiedząc, w której z kategorii BMI się mieścisz, możesz zacząć modyfikować swoją dietę tak, aby osiągnąć wymarzoną sylwetkę. Redukcja, budowanie masy mięśniowej, a może utrzymanie aktualniej masy ciała? <p>Jeżeli nie wiesz, ile kalorii powinieneś przyjmować, aby zrzucić zbędne kilogramy, nabrać masy mięśniowej lub utrzymać masę ciała, ZAPRASZAMY DO WSPÓŁPRACY!</p>";
		} else if (bmi >= 18.5 && bmi <= 24.99) {
			result.innerHTML = `Twój wskaźnik BMI : <span>${bmi}</span>`;
			comment.innerHTML = `<p style='color: green'>Masz prawidową masę ciała</p>`;
			info.innerHTML =
				"Teraz znasz swój wskaźnik masy ciała! No dobrze, ale co zrobić z tą wiedzą? Światowa Organizacja Zdrowia (WHO) przygotowała skalę, która pozwala przyporządkować wyliczony wskaźnik BMI do konkretnego zakresu: <ul> <li><18,5 – niedowaga,</li> <li>18,5-24,9 – prawidłowa masa ciała,</li> <li>25,0-29,9 – nadwaga,</li> <li>30,0-34,9 – otyłość I stopnia,</li> <li>35,0-39,9 – otyłość II stopnia,</li> <li>≥ 40,0 – otyłość III stopnia.</li> </ul> Wiedząc, w której z kategorii BMI się mieścisz, możesz zacząć modyfikować swoją dietę tak, aby osiągnąć wymarzoną sylwetkę. Redukcja, budowanie masy mięśniowej, a może utrzymanie aktualniej masy ciała? <p>Jeżeli nie wiesz, ile kalorii powinieneś przyjmować, aby zrzucić zbędne kilogramy, nabrać masy mięśniowej lub utrzymać masę ciała, ZAPRASZAMY DO WSPÓŁPRACY!</p>";
		} else if (bmi >= 25.0 && bmi <= 29.99) {
			result.innerHTML = `Twój wskaźnik BMI : <span>${bmi}</span>`;
			comment.innerHTML = `<p style='color: orange'>Masz nadwagę</p>`;
			info.innerHTML =
				"Teraz znasz swój wskaźnik masy ciała! No dobrze, ale co zrobić z tą wiedzą? Światowa Organizacja Zdrowia (WHO) przygotowała skalę, która pozwala przyporządkować wyliczony wskaźnik BMI do konkretnego zakresu: <ul> <li><18,5 – niedowaga,</li> <li>18,5-24,9 – prawidłowa masa ciała,</li> <li>25,0-29,9 – nadwaga,</li> <li>30,0-34,9 – otyłość I stopnia,</li> <li>35,0-39,9 – otyłość II stopnia,</li> <li>≥ 40,0 – otyłość III stopnia.</li> </ul> Wiedząc, w której z kategorii BMI się mieścisz, możesz zacząć modyfikować swoją dietę tak, aby osiągnąć wymarzoną sylwetkę. Redukcja, budowanie masy mięśniowej, a może utrzymanie aktualniej masy ciała? <p>Jeżeli nie wiesz, ile kalorii powinieneś przyjmować, aby zrzucić zbędne kilogramy, nabrać masy mięśniowej lub utrzymać masę ciała, ZAPRASZAMY DO WSPÓŁPRACY!</p>";
		} else if (bmi >= 30.0 && bmi <= 34.99) {
			result.innerHTML = `Twój wskaźnik BMI : <span>${bmi}</span>`;
			comment.innerHTML = `<p style='color: red'>Masz otyłość I stopnia</p>`;
			info.innerHTML =
				"Teraz znasz swój wskaźnik masy ciała! No dobrze, ale co zrobić z tą wiedzą? Światowa Organizacja Zdrowia (WHO) przygotowała skalę, która pozwala przyporządkować wyliczony wskaźnik BMI do konkretnego zakresu: <ul> <li><18,5 – niedowaga,</li> <li>18,5-24,9 – prawidłowa masa ciała,</li> <li>25,0-29,9 – nadwaga,</li> <li>30,0-34,9 – otyłość I stopnia,</li> <li>35,0-39,9 – otyłość II stopnia,</li> <li>≥ 40,0 – otyłość III stopnia.</li> </ul> Wiedząc, w której z kategorii BMI się mieścisz, możesz zacząć modyfikować swoją dietę tak, aby osiągnąć wymarzoną sylwetkę. Redukcja, budowanie masy mięśniowej, a może utrzymanie aktualniej masy ciała? <p>Jeżeli nie wiesz, ile kalorii powinieneś przyjmować, aby zrzucić zbędne kilogramy, nabrać masy mięśniowej lub utrzymać masę ciała, ZAPRASZAMY DO WSPÓŁPRACY!</p>";
		} else if (bmi >= 35.0 && bmi <= 39.99) {
			result.innerHTML = `Twój wskaźnik BMI : <span>${bmi}</span>`;
			comment.innerHTML = `<p style='color: red'>Masz otyłość II stopnia</p>`;
			info.innerHTML =
				"Teraz znasz swój wskaźnik masy ciała! No dobrze, ale co zrobić z tą wiedzą? Światowa Organizacja Zdrowia (WHO) przygotowała skalę, która pozwala przyporządkować wyliczony wskaźnik BMI do konkretnego zakresu: <ul> <li><18,5 – niedowaga,</li> <li>18,5-24,9 – prawidłowa masa ciała,</li> <li>25,0-29,9 – nadwaga,</li> <li>30,0-34,9 – otyłość I stopnia,</li> <li>35,0-39,9 – otyłość II stopnia,</li> <li>≥ 40,0 – otyłość III stopnia.</li> </ul> Wiedząc, w której z kategorii BMI się mieścisz, możesz zacząć modyfikować swoją dietę tak, aby osiągnąć wymarzoną sylwetkę. Redukcja, budowanie masy mięśniowej, a może utrzymanie aktualniej masy ciała? <p>Jeżeli nie wiesz, ile kalorii powinieneś przyjmować, aby zrzucić zbędne kilogramy, nabrać masy mięśniowej lub utrzymać masę ciała, ZAPRASZAMY DO WSPÓŁPRACY!</p>";
		} else {
			result.innerHTML = `Twój wskaźnik BMI : <span>${bmi}</span>`;
			comment.innerHTML = `<p style='color: red'>Masz otyłość III stopnia</p>`;
			info.innerHTML =
				"Teraz znasz swój wskaźnik masy ciała! No dobrze, ale co zrobić z tą wiedzą? Światowa Organizacja Zdrowia (WHO) przygotowała skalę, która pozwala przyporządkować wyliczony wskaźnik BMI do konkretnego zakresu: <ul> <li><18,5 – niedowaga,</li> <li>18,5-24,9 – prawidłowa masa ciała,</li> <li>25,0-29,9 – nadwaga,</li> <li>30,0-34,9 – otyłość I stopnia,</li> <li>35,0-39,9 – otyłość II stopnia,</li> <li>≥ 40,0 – otyłość III stopnia.</li> </ul> Wiedząc, w której z kategorii BMI się mieścisz, możesz zacząć modyfikować swoją dietę tak, aby osiągnąć wymarzoną sylwetkę. Redukcja, budowanie masy mięśniowej, a może utrzymanie aktualniej masy ciała? <p>Jeżeli nie wiesz, ile kalorii powinieneś przyjmować, aby zrzucić zbędne kilogramy, nabrać masy mięśniowej lub utrzymać masę ciała, ZAPRASZAMY DO WSPÓŁPRACY!</p>";
		}
	}
}
