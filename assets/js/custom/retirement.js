// JavaScript Document

var chart;
$(document).ready(function() {
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'retirement-graph',
			type: 'line',
		},
		title: {
			text: 'Employer Sponsorship and Employee Participation in Retirement Plans',
			x: -20 //center
		},
		xAxis: {
			categories: ['2000', '2001', '2002', '2003', '2004', '2005', '2006', '2006', '2007', '2008']
		},
		yAxis: {
			title: {
				text: 'Percentage'
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
			name: 'Employee sponsorship',
			data: [61.4, null, null, null, null, 54.9, 52.6, 54.8, 53.2]
		}, {
			name: 'Employee participation',
			data: [50.3, null, null, null, null, 45, 43.2, 45.1, 43.6]
		}]
	});
});