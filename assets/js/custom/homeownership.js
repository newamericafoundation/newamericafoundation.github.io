// JavaScript Document
function homeowernship(){
	$('#netWorth').click(function(){
		$('.btn-home').removeClass('disabled');
		$(this).addClass('disabled');
		switchGraph('netWorth')
		
	});
	$('#recessionLoss').click(function(){
		switchGraph('recessionLoss')
		$('.btn-home').removeClass('disabled');
		
		$(this).addClass('disabled');
	});
	$('#equityLoss').click(function(){
		switchGraph('equityLoss')
		$('.btn-home').removeClass('disabled');
		$(this).addClass('disabled');
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
			max: 20000000,
//			tickInterval: 15000,
			title: {
				text: null,
			},
			reversed: true,
			labels: {
			  formatter: function() {
				return Highcharts.numberFormat(this.value, 0);
			  }
			},
		},
		tooltip: {
			formatter: function() {
				return ''+
					'Mortgage Interest Deduction Claimants: '+ Highcharts.numberFormat(this.y, 0);
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
							Highcharts.numberFormat(this.y, 0);
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
			data: [500, 196000, 481000, 985000, 1797000, 5750000, 5966000, 13932000, 4575000]
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
		tooltip: {
			formatter: function() {
				return ''+
					'Mortgage Interest Deduction Value: $'+ Highcharts.numberFormat(this.y, 0);
			}
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
			data: [0, 321.43, 536.38, 663.96, 736.78, 1192.17, 1466.31, 2555.91, 6369.84]
		}]
	});

		$('#netWorth').click(function(){
			switchGraph('netWorth')
		});
		$('#recessionLoss').click(function(){
			switchGraph('recessionLoss')
		});
		$('#equityLoss').click(function(){
			switchGraph('equityLoss')
		});
	
}//end homeownership

	var titles = {
		netWorth:{
		'barWhite':['99','$134,992'],
		'barHispanic':['25','$18,359'],
		'barBlack':['20','$12,124']
	},
		recessionLoss:{
		'barWhite':['16','16%'],
		'barHispanic':['66','66%'],
		'barBlack':['53','53%']
	},
		equityLoss:{
		'barWhite':['83','83%'],
		'barHispanic':['96','96%'],
		'barBlack':['90','90%']
	}
}
