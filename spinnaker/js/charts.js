var chart;
$(document).ready(function() {
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'container',
			type: 'line',
			marginRight: 130,
			marginBottom: 25
		},
		title: {
			text: null,
			x: -20 //center
		},
		subtitle: {
			text: null,
			x: -20
		},
		xAxis: {
			categories: ['2005','2006','2007','2008','2009','2010']
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
					this.x +': '+ this.y;
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
			name: 'Balance Below KSh. 100,000',
			data: [1961996, 2525061, 4076465, 5747079, 7774007, 11066643]
		}, {
			name: 'Balance Above KSh. 100,000',
			data: [390233, 409812, 591448, 621869, 643629, 764457]
		}]
	});

var chart;
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'container2',
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			text: null
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
					formatter: function() {
						return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
					}
				}
			}
		},
		series: [{
			type: 'pie',
			name: 'Browser share',
			data: [
				['Commercial Bank',   12],
				['Postal Bank',       1],
				['Microfinance Institution',    4],
				['Credit Union/Cooperative',     1],
				['Insurance Provider',   2]
				['State Owned Bank',   1]
			]
		}]
	});

var chart;
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'container3',
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			text: null
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
					formatter: function() {
						return '<b>'+ this.point.name +'</b>: '+ this.percentage +' %';
					}
				}
			}
		},
		series: [{
			type: 'pie',
			name: 'Browser share',
			data: [
				['Current Account',   75],
				['Commitment Savings Account',       26],
				['Recurring Standard Deposit Account',    3],
			]
		}]
	});

var chart;
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'container4',
			type: 'line',
			marginRight: 130,
			marginBottom: 25
		},
		title: {
			text: null,
			x: -20 //center
		},
		subtitle: {
			text: null,
			x: -20
		},
		xAxis: {
			categories: ['2007','2008','2009','2010']
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
					this.x +': '+ this.y;
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
			name: 'Commercial Bank Branches',
			data: [740, 887, 990, 1016]
		},{
			name: 'MFI Branches',
			data: [0, 0, 6, 47]
		},{
			name: '# ATMs',
			data: [1012, 1325, 1717, 1979]
		},{
			name: 'Bank Agents',
			data: [0, 0, 0, 8809]
		},{
			name: 'M-PESA Agents',
			data: [355, 2606, 9521, 18103]
		}]
	});

var chart;
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'container5',
			type: 'line',
			marginRight: 130,
			marginBottom: 25
		},
		title: {
			text: null,
			x: -20 //center
		},
		subtitle: {
			text: null,
			x: -20
		},
		xAxis: {
			categories: ['Mar 2007', 'Jun 2007', 'Sept 2007', 'Dec 2007', 'Mar 2008', 'Jun 2008','Sept 2008', 'Dec 2008', 'Mar 2009', 'Jun 2009', 'Sept 2009', 'Dec 2009', 'Mar 2010', 'Jun 2010', 'Sept 2010', 'Dec 2010', 'Mar 2011', 'Jun 2011', 'Sept 2011', 'Dec 2011']
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
					this.x +': '+ this.y;
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
			name: 'All Mobile Money Agents',
			data: [307, 527, 960, 1582, 2329, 3011, 4230, 6104, 13358, 16641, 19803, 23012, 27622, 31902, 35373, 39449, 36198, 42840, 46234, 50471]
		},{
			name: 'M-PESA Agents',
			data: [355, 513, 960, 1582, 2329, 3011, 4230, 6104, 8650, 10735, 13326, 15216, 17652, 18977, 20563, 23397, 26948, null, null, null]
		},{
			name: 'Bank Agents',
			data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1500, 1500, 3647, 6513, 7999, null]
		}]
	});
});    
