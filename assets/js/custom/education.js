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
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'top',
			x: -10,
			y: 100,
			borderWidth: 0
		},
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
