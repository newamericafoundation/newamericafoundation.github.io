// JavaScript Document

var chart;
$(document).ready(function() {
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'homeownership-graph',
			type: 'bar'
		},
		title: {
			text: 'Value of the Mortgage Interest and Real Estate Deductions by Income, FY 2006'
		},
		xAxis: {
			categories: ['Below 10', '10-20', '20-30', '30-40', '40-50', '50-75', '75-100', '100-200', '200 and over'],
			title: {
				text: null
			}
		},
		yAxis: {
			min: 0,
			title: {
				text: null,
			}
		},
		tooltip: {
			formatter: function() {
				return ''+
					this.series.name +': $'+ this.y;
			}
		},
		plotOptions: {
//			bar: {
//				dataLabels: {
//					enabled: true
//				}
//			},
			series: {
				stacking: 'normal'
			}
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'top',
			x: -100,
			y: 100,
			floating: true,
			borderWidth: 1,
			backgroundColor: '#FFFFFF',
			shadow: true
		},
		credits: {
			enabled: false
		},
			series: [{
			name: 'Mortgage Interest Deduction',
			data: [83, 274, 450, 537, 674, 985, 1202, 2168, 5231]
		}, {
			name: 'Real Estate Tax Deduction',
			data: [0, 36, 96, 152, 225, 357, 470, 832, 1222]
		}]
	});
});

var chart;
$(document).ready(function() {
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'homeownership-graph2',
			type: 'bar'
		},
		title: {
			text: 'Value of the Mortgage Interest and Real Estate Deductions by Income, FY 2006'
		},
		xAxis: {
			categories: ['Below 10', '10-20', '20-30', '30-40', '40-50', '50-75', '75-100', '100-200', '200-500', '500-1,000', 'Over 1 million'],
			title: {
				text: null
			}
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Percentage',
			}
		},
		tooltip: {
			formatter: function() {
				return ''+
					this.series.name +': $'+ this.y;
			}
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: true
				}
			},
//			series: {
//				stacking: 'normal'
//			}
		},
		legend: {
			layout: 'vertical',
			align: 'right',
			verticalAlign: 'top',
			x: -100,
			y: 100,
			floating: true,
			borderWidth: 1,
			backgroundColor: '#FFFFFF',
			shadow: true
		},
		credits: {
			enabled: false
		},
			series: [{
			name: 'Mortgage Interest Deduction',
			data: [2.3, 6.2, 11.8, 21.8, 31.7, 45.7, 62.9, 75.1, 76.1, 70.2, 64.1]
		}]
	});
});


var chart;
$(document).ready(function() {
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'homeownership-pie1',
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			text: 'White'
		},
		tooltip: {
			formatter: function() {
				return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
			}
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					color: '#000000',
					connectorColor: '#000000',
					distance:20,
					formatter: function() {
						return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
					}
				}
			}
		},
		series: [{
			type: 'pie',
			name: 'Percent Home Equity',
			data: [
				['Other',   17.0],
				['Home Equity', 83]

			]
		}]
	});
});

var chart;
$(document).ready(function() {
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'homeownership-pie2',
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			text: 'Hispanic'
		},
		tooltip: {
			formatter: function() {
				return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
			}
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					color: '#000000',
					connectorColor: '#000000',
					distance:20,
					formatter: function() {
						return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
					}
				}
			}
		},
		series: [{
			type: 'pie',
			name: 'Percent Home Equity',
			data: [
				['Other',   4],
				['Home Equity', 96]

			]
		}]
	});
});

var chart;
$(document).ready(function() {
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'homeownership-pie3',
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			text: 'Black'
		},
		tooltip: {
			formatter: function() {
				return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
			}
		},
		plotOptions: {
			pie: {
				allowPointSelect: true,
				cursor: 'pointer',
				dataLabels: {
					enabled: true,
					color: '#000000',
					connectorColor: '#000000',
					distance:20,
					formatter: function() {
						return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
					}
				}
			}
		},
		series: [{
			type: 'pie',
			name: 'Percent Home Equity',
			data: [
				['Other',   10],
				['Home Equity', 90]

			]
		}]
	});
});