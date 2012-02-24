// JavaScript Document

var chart;
$(document).ready(function() {
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'education-graph',
			type: 'area',
		},
		title: {
			text: 'Percentage high school students enrolled in a 2 or 4 year college after graduation',
			x: -20 //center
		},
		xAxis: {
			categories: ['2005', '2006', '2007', '2008', '2009']
		},
		yAxis: {
			title: {
				text: null
			},
			plotLines: [{
				value: 0,
				width: 1,
				color: '#808080'
			}]
		},
		tooltip: {
			formatter: function() {
					return '<b>'+ this.series.name +'</b><br/>'+
					this.x +': '+ this.y +'%';
			}
		},
//		legend: {
//			layout: 'vertical',
//			align: 'right',
//			verticalAlign: 'top',
//			x: -10,
//			y: 100,
//			borderWidth: 0
//		},
		series: [{
			name: 'High-income',
			data: [81.2, 80.7, 78.2, 81.9, 84.2]
		},{
			name: 'Middle-income',
			data: [65.1, 61.4, 63.3, 65.3, 66.8]
		},{
			name: 'Low-income',
			data: [51, 54.5, 55.2, 56, 54]
		}]
	});
});

var chart;
$(document).ready(function() {
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'education-graph2',
			type: 'column'
		},
		title: {
			text: 'Net College Costs as a Percent of Median Family Income'
		},
		xAxis: {
			categories: ['Lowest income quintile', 'Second lowest income quintile', 'Middle income quintile', 'Second highest income quintile', 'Highest income quintile']
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Percentage'
			}
		},
//		legend: {
//			layout: 'vertical',
//			backgroundColor: '#FFFFFF',
//			align: 'left',
//			verticalAlign: 'top',
//			x: 100,
//			y: 70,
//			floating: true,
//			shadow: true
//		},
		tooltip: {
			formatter: function() {
				return ''+
					this.x +': '+ this.y +' mm';
			}
		},
		plotOptions: {
			column: {
				pointPadding: 0.2,
				borderWidth: 0
			}
		},
			series: [{
			name: '1990-2000',
			data: [39, 23, 18, 12, 7]

		},{
			name: '2007-2008',
			data: [55, 33, 25, 16, 9]

		}]
	});
});