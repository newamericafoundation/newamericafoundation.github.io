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

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'top-quartile',
		   plotBackgroundColor: null,
		   plotBorderWidth: null,
		   spacingRight:100
		},
		title: {
		   text: 'Top quartile'
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
		yAxis: {
			title: {
				text: null
			},
			labels: {
			  formatter: function() {
				return this.value +'%';
			  }
			},
			max:90,
			min:30,
//			tickInterval: 75,
		},
		xAxis: {
//			labels: {
//				enabled: false	
//			},
//			endOnTick: true,
//			startOnTick: true,
			categories: ["'00", "'08"]
		},
		tooltip: {
			style: {
				fontSize: '9px',	
			},
			formatter: function() {
			  var s;
			  if (this.point.name) { // the pie chart
				 s = ''+
					this.point.name +': '+ this.y + '%';
			  } else {
				 s = ''+
					this.series.name  +': '+ this.y;
			  }
			  return s;
		   }
		},
		plotOptions: {
			line: {
				pointWidth: 25,
				pointPadding: .5,
				groupPadding: .3,
				minPointLength: 1,
			}
		},
		labels: {
			items: [{
				html: '2000',
				style: {
					left: '40px',
					top: '8px',
					color: 'black'
				}
			}]
		},
		series: [{
		   type: 'pie',
		   name: 'Employee retirement plans',
		   data: [{
			  name: 'Employee participation',
			  y: 75.5,
			  color: '#660033'
		   }, {
			  name: 'No participation',
			  y: 24.5,
			  color: '#EEEEEE'
		   }],
		   center: [60, 30],
		   spacingLeft: 100,
		   size: 60,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		},{
		   type: 'pie',
		   name: 'Employee retirement plans',
		   data: [{
			  name: 'Employee participation',
			  y: 68.6,
			  color: '#660033'
		   }, {
			  name: 'No participation',
			  y: 31.4,
			  color: '#EEEEEE'
		   }],
		   center: [550, 30],
		   spacingLeft: 100,
		   size: 60,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		},{
			type: 'line',
			data: [80.2, 72.9],
			color: '#0D253F',
		}]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'second-quartile',
		   plotBackgroundColor: null,
		   plotBorderWidth: null,
		   spacingRight:100
		},
		title: {
		   text: 'Top quartile'
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
		yAxis: {
			title: {
				text: null
			},
			labels: {
			  formatter: function() {
				return this.value +'%';
			  }
			},
			max:90,
			min:30,
//			tickInterval: 75,
		},
		xAxis: {
//			labels: {
//				enabled: false	
//			},
//			endOnTick: true,
//			startOnTick: true,
			categories: ["'00", "'08"]
		},
		tooltip: {
			style: {
				fontSize: '9px',	
			},
			formatter: function() {
			  var s;
			  if (this.point.name) { // the pie chart
				 s = ''+
					this.point.name +': '+ this.y + '%';
			  } else {
				 s = ''+
					this.series.name  +': '+ this.y;
			  }
			  return s;
		   }
		},
		plotOptions: {
			line: {
				pointWidth: 25,
				pointPadding: .5,
				groupPadding: .3,
				minPointLength: 1,
			}
		},
		series: [{
		   type: 'pie',
		   name: 'Employee retirement plans',
		   data: [{
			  name: 'Employee participation',
			  y: 75.5,
			  color: '#660033'
		   }, {
			  name: 'No participation',
			  y: 24.5,
			  color: '#EEEEEE'
		   }],
		   center: [60, 30],
		   spacingLeft: 100,
		   size: 60,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		},{
		   type: 'pie',
		   name: 'Employee retirement plans',
		   data: [{
			  name: 'Employee participation',
			  y: 68.6,
			  color: '#660033'
		   }, {
			  name: 'No participation',
			  y: 31.4,
			  color: '#EEEEEE'
		   }],
		   center: [550, 30],
		   spacingLeft: 100,
		   size: 60,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		},{
			type: 'line',
			data: [80.2, 72.9],
			color: '#0D253F',
		}]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'third-quartile',
		   plotBackgroundColor: null,
		   plotBorderWidth: null,
		   spacingRight:100
		},
		title: {
		   text: 'Top quartile'
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
		yAxis: {
			title: {
				text: null
			},
			labels: {
			  formatter: function() {
				return this.value +'%';
			  }
			},
			max:90,
			min:30,
//			tickInterval: 75,
		},
		xAxis: {
//			labels: {
//				enabled: false	
//			},
//			endOnTick: true,
//			startOnTick: true,
			categories: ["'00", "'08"]
		},
		tooltip: {
			style: {
				fontSize: '9px',	
			},
			formatter: function() {
			  var s;
			  if (this.point.name) { // the pie chart
				 s = ''+
					this.point.name +': '+ this.y + '%';
			  } else {
				 s = ''+
					this.series.name  +': '+ this.y;
			  }
			  return s;
		   }
		},
		plotOptions: {
			line: {
				pointWidth: 25,
				pointPadding: .5,
				groupPadding: .3,
				minPointLength: 1,
			}
		},
		series: [{
		   type: 'pie',
		   name: 'Employee retirement plans',
		   data: [{
			  name: 'Employee participation',
			  y: 75.5,
			  color: '#660033'
		   }, {
			  name: 'No participation',
			  y: 24.5,
			  color: '#EEEEEE'
		   }],
		   center: [60, 30],
		   spacingLeft: 100,
		   size: 60,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		},{
		   type: 'pie',
		   name: 'Employee retirement plans',
		   data: [{
			  name: 'Employee participation',
			  y: 68.6,
			  color: '#660033'
		   }, {
			  name: 'No participation',
			  y: 31.4,
			  color: '#EEEEEE'
		   }],
		   center: [550, 30],
		   spacingLeft: 100,
		   size: 60,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		},{
			type: 'line',
			data: [80.2, 72.9],
			color: '#0D253F',
		}]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'bottom-quartile',
		   plotBackgroundColor: null,
		   plotBorderWidth: null,
		   spacingRight:100
		},
		title: {
		   text: 'Top quartile'
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
		yAxis: {
			title: {
				text: null
			},
			labels: {
			  formatter: function() {
				return this.value +'%';
			  }
			},
			max:90,
			min:30,
//			tickInterval: 75,
		},
		xAxis: {
//			labels: {
//				enabled: false	
//			},
//			endOnTick: true,
//			startOnTick: true,
			categories: ["'00", "'08"]
		},
		tooltip: {
			style: {
				fontSize: '9px',	
			},
			formatter: function() {
			  var s;
			  if (this.point.name) { // the pie chart
				 s = ''+
					this.point.name +': '+ this.y + '%';
			  } else {
				 s = ''+
					this.series.name  +': '+ this.y;
			  }
			  return s;
		   }
		},
		plotOptions: {
			line: {
				pointWidth: 25,
				pointPadding: .5,
				groupPadding: .3,
				minPointLength: 1,
			}
		},
		series: [{
		   type: 'pie',
		   name: 'Employee retirement plans',
		   data: [{
			  name: 'Employee participation',
			  y: 75.5,
			  color: '#660033'
		   }, {
			  name: 'No participation',
			  y: 24.5,
			  color: '#EEEEEE'
		   }],
		   center: [60, 30],
		   spacingLeft: 100,
		   size: 60,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		},{
		   type: 'pie',
		   name: 'Employee retirement plans',
		   data: [{
			  name: 'Employee participation',
			  y: 68.6,
			  color: '#660033'
		   }, {
			  name: 'No participation',
			  y: 31.4,
			  color: '#EEEEEE'
		   }],
		   center: [550, 30],
		   spacingLeft: 100,
		   size: 60,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		},{
			type: 'line',
			data: [80.2, 72.9],
			color: '#0D253F',
		}]
	 });
  });
