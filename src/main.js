/* Manejo del DOM */


/*Varibles para obtener data de cada país, ya separada*/
//console.log(WORLDBANK);
const chileData = WORLDBANK.CHL;
const peruData = WORLDBANK.PER;
const mexicoData = WORLDBANK.MEX;
const brasilData = WORLDBANK.BRA;

/*Lectura y manejo de la variable país*/
var urlParams = new URLSearchParams(window.location.search);
let selectCountry = urlParams.get("country");
console.log(selectCountry);

let selectedData;
switch (selectCountry) {
  case "chile":
    selectedData = chileData;
    document.getElementById("bannerImg").classList.add("chileBanner");
    document
      .getElementById("bannerText")
      .appendChild(document.createTextNode("Chile"));
    break;
  case "peru":
    selectedData = peruData;
    document.getElementById("bannerImg").classList.add("peruBanner");
    document
      .getElementById("bannerText")
      .appendChild(document.createTextNode("Perú"));
    break;
  case "mexico":
    selectedData = mexicoData;
    document.getElementById("bannerImg").classList.add("mexicoBanner");
    document
      .getElementById("bannerText")
      .appendChild(document.createTextNode("México"));
    break;
  case "brasil":
    selectedData = brasilData;
    document.getElementById("bannerImg").classList.add("brasilBanner");
    document
      .getElementById("bannerText")
      .appendChild(document.createTextNode("Brasil"));
    break;
}

for (let i = 0; i < selectedData.indicators.length; i++) {
  let indicatorList = document.getElementById("indicatorsSelect");
  let option = document.createElement("option");
  option.value = i;
  option.text = selectedData.indicators[i].indicatorName;
  indicatorList.add(option);
}

let selectIndicator;
document.getElementById("indicatorsSelect").addEventListener("change", () => {

  selectIndicator = document.getElementById("indicatorsSelect").value;
  mostrarIndicador();
});

var graphPlaceholder = document
  .getElementById("indicatorsChart")
  .getContext("2d");

 showDoughnutMaxValue();
 showDoughnutAverageValue();
});


//Agregando dona con el valor maximo
function showDoughnutMaxValue() {
	let indicatorNumber = selectIndicator;
	let maxValue = 0;
	let minValue = 0;
	for (let year in selectedData.indicators[indicatorNumber].data) {
		if (selectedData.indicators[indicatorNumber].data[year] != "") {
     if (selectedData.indicators[indicatorNumber].data[year] > maxValue) {
     		// console.log(selectedData.indicators[indicatorNumber].data[year]+" es mayor "+maxValue);
     	 maxValue = selectedData.indicators[indicatorNumber].data[year]
     }
   }
	}
	minValue = 100 - maxValue;
	var chart = document.getElementById('doughnutMax').getContext('2d');
	
	var config = {
		type: 'doughnut',
		data: {
			datasets: [{
				data: [maxValue,minValue],
				backgroundColor: ['#6b48ff','darkgray'],
			}],

		},
		options: {
      layout: {
            padding: {
                left: 640,
                right: 0,
                top: 0,
                bottom: 0
            }
        },
      title: {
        display: true,
        text: 'Valor Máximo',
        position: 'bottom'
      },
			cutoutPercentage: 80,
      plugins: {
        doughnutlabel: {
          labels: [
            {
              text: maxValue+"%",
              font: {
                size: '100'
              },
              color: 'grey'
            },
          ]
        }
      }
		}
	};
	var doughnutMax = new Chart(chart, config);
}


// Agrenado dona con valor promedio
function showDoughnutAverageValue() {
	let indicatorNumber = selectIndicator;
	let count = 0;
	let average = 0;
	let mount = 0;
	let minValue = 0;
	for (let year in selectedData.indicators[indicatorNumber].data) {
		if (selectedData.indicators[indicatorNumber].data[year] != "") {
     	mount = mount + selectedData.indicators[indicatorNumber].data[year];
     	count = count + 1;
   	}
	}
	average = mount / count;
	console.log(average);
	minValue = 100 - average;

	var chart = document.getElementById('doughnutAverages').getContext('2d');

var config = {
			type: 'doughnut',
			data: {
				datasets: [{
					data: [average,minValue],
					backgroundColor: ['#6b48ff','darkgray'],
				}],

			},
			options: {
        cutoutPercentage: 80,
      layout: {
            padding: {
                left: 0,
                right: 640,
                top: 0,
                bottom: 0
            }
        },
        title: {
          display: true,
          text: 'Valor Promedio',
          position: 'bottom'
        },
        plugins: {
          doughnutlabel: {
            labels: [
              {
                text: average+"%",
                font: {
                  size: '100'
                },
                color: 'grey'
              },
            ]
          }
        }
      }
		};
	var doughnutMax = new Chart(chart, config);
}

