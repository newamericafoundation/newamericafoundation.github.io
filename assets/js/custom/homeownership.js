// JavaScript Document

var chart;
$(document).ready(function() {
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'homeownership-graph',
			type: 'bar'
		},
		title: {
			text: null
		},
		xAxis: {
			categories: ['Below 10', '10-20', '20-30', '30-40', '40-50', '50-75', '75-100', '100-200', '200 and over'],
			title: {
				text: null
			},
			reversed: true
		},
		yAxis: {
			min: 0,
			title: {
				text: null,
			},
			reversed: true
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
//					enabled: true,
//					formatter: function() {
//						return ''+
//							'$' + this.y;
//					}
//				}
//			},
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
			data: [63000000, 258000000, 654000000, 1324000000, 6855000000, 8748000000, 35609000000, 29142000000]
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
			text: null
		},
		xAxis: {
			categories: ['Below 10', '10-20', '20-30', '30-40', '40-50', '50-75', '75-100', '100-200', '200 and over'],
			title: {
				text: null
			},
			opposite: true
		},
		yAxis: {
			title: {
				text: null
			},
		},
		plotOptions: {
			bar: {
//				dataLabels: {
//					enabled: true,
//					formatter: function() {
//						return ''+
//							'$' + this.y;
//					}
//				}
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
			data: [321.43, 536.38, 663.96, 736.78, 1192.17, 1466.31, 2555.91, 6369.84]
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
			text: ''
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
			text: ''
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
			text: ''
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