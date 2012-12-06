// JavaScript Document

Highcharts.theme = {
	chart: {
	   backgroundColor: null,
	},
	title: {
	   text: null
	},
	credits: {
		enabled: false	
	},
	exporting: {
		enabled: false	
	},
	legend: {
		enabled: false	
	},
	tooltip: {
		enabled: false
	},
	labels: {
		items: [{
			style: {
				left: '68px',
				top: '18px',
				color: 'white',
				fontWeight: 'bold',
				fontSize: '15px',
				fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
			}
		}]
	},
	plotOptions: {
		pie: {
			animation: false
		}
	},
		series: [{
		   type: 'pie',
		   size: 70,
		   innerSize: '92%',
		   showInLegend: false,
		   borderColor: '#000000',
		   dataLabels: {
			 enabled: false
		   },
		},]
}

var highchartsOptions = Highcharts.setOptions(Highcharts.theme);

