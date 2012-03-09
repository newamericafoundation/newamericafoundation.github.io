// JavaScript Document
function homeowernship(){
	
console.log('home')

	$('#whiteExpand').click(function(){
		$('.whiteGraphs').fadeIn();
		$('.whitePlace').remove();
	});
	$('#hispanicExpand').click(function(){
		$('.hisGraphs').fadeIn();
		$('.hisPlace').remove();
	});
	$('#blackExpand').click(function(){
		$('.blackGraphs').fadeIn();
		$('.blackPlace').remove();
	});


var chart;

	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'homeownership-graph',
			type: 'bar'
		},
		title: {
			text: null
		},
		xAxis: {
			categories: ['Below $10K', '$10-20K', '$20-30K', '$30-40K', '$40-50K', '$50-75K', '$75-100K', '$100-200K', '$200 and over'],
			title: {
				text: null
			},
			reversed: true
		},
		yAxis: {
			min: 0,
			max: 45000,
			tickInterval: 15000,
			title: {
				text: null,
			},
			reversed: true,
			labels: {
			  formatter: function() {
				return '$' + Highcharts.numberFormat(this.value, 0) + 'b';
			  }
			},
		},
		tooltip: {
			formatter: function() {
				return ''+
					this.series.name +': $'+ Highcharts.numberFormat(this.y, 0) + 'b';
			}
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: true,
					align: 'right',
					x: -3,
					y: 5,
					formatter: function() {
						return ''+
							'$' + Highcharts.numberFormat(this.y, 0) + 'm';
					}
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
			data: [063, 258, 654, 1324, 6855, 8748, 35609, 29142]
		}]
	});

var chart;

	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'homeownership-graph2',
			type: 'bar'
		},
		title: {
			text: null
		},
		xAxis: {
			categories: ['Below $10K', '$10-20K', '$20-30K', '$30-40K', '$40-50K', '$50-75K', '$75-100K', '$100-200K', '$200 and over'],
			title: {
				text: null
			},
			opposite: true
		},
		yAxis: {
			max: 8000,
			title: {
				text: null
			},
			labels: {
			  formatter: function() {
				return '$' + Highcharts.numberFormat(this.value, 0);
			  }
			},
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: true,
					align: 'left',
					x: 3,
					y: 5,
					formatter: function() {
						return ''+
							'$' + Highcharts.numberFormat(this.y, 0);
					}
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
			data: [321.43, 536.38, 663.96, 736.78, 1192.17, 1466.31, 2555.91, 6369.84]
		}]
	});


var chart;

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

var chart;

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


var chart;

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
}//end homeownership