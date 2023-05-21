import { outputParameters, maxValues, calculationValues} from "./Calculations.js";

const ctx = document.getElementById("myChart");

let myChart = new Chart(ctx, {
	type: "radar",
	data: {
		labels: [
			"Allgemeine Sicherheit",
			"Stromkosten",
			"Umbaukosten",
			"Insektensterben",
			"Verkehrssicherheit",
		],
		datasets: [
			{
				label: "Ist-Profil",
				data: [ 0, 0, 0, 0, 0],
				fill: true,
				backgroundColor: ["rgba(225, 225, 225, 0.5)"],
				borderColor: ["rgba(225, 225, 225, 1)"],
				borderWidth: 2,
				pointHoverBackgroundColor: "#fff",
				pointHoverBorderColor: "rgb(255, 99, 132)",
			},
			{
				label: "Soll-Profil",
				data: [ 81.23 / maxValues.security, 4704 / maxValues.electricityCosts, 12000 / maxValues.conversionCosts, 332000 / maxValues.dyingInsects, 75.27 / maxValues.roadSafety],  
				fill: true,
				backgroundColor: ["rgba(227, 26, 87, 0.7)"],
				borderColor: ["rgba(227, 26, 87, 1)"],
				borderWidth: 2,
				pointHoverBackgroundColor: "#fff",
				pointHoverBorderColor: "rgb(255, 99, 132)",
			},
		],
	},
	options: {
		plugins: {
			legend: {
				position: "top",
				align: "center",
				labels: {
					color: "white",
					font: {
						size: 15,
					},
				},
				// pointLabels: {
				//   font: {
				//     size: 25,
				//   },
				// },
			},
		},
		scales: {
			r: {
				beginAtZero: true,
				angleLines: {
					color: "white",
					lineWidth: 2.5,
				},
				grid: {
					color: "white",
					lineWidth: 0.5,
				},
				pointLabels: {
					color: "white",
					font: {
						size: 18,
					},
				},
				ticks: {
					display: false, // hides the labels in the middle (numbers)
				},
			},
		},
	},
});

export function updateData() {
	maxValues.electricityCosts = 11160 * calculationValues.lanternAmount/100;
	maxValues.conversionCosts = 12000 * calculationValues.lanternAmount/100;
	maxValues.dyingInsects = 5054000 * calculationValues.lanternAmount/100;

	myChart.data.datasets[0].data = [
		outputParameters.security / maxValues.security,
		outputParameters.electricityCosts / maxValues.electricityCosts,
		outputParameters.conversionCosts / maxValues.conversionCosts,
		outputParameters.dyingInsects / maxValues.dyingInsects,
		outputParameters.roadSafety / maxValues.roadSafety,
	];
	myChart.update();
}
