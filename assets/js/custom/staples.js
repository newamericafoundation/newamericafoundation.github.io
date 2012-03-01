// JavaScript Document

Highcharts.theme = {
  colors: ['#A90641', '#464646', '#5B605F', '#A1A194', '#FCFAD0'],
  chart: {
	 plotBackgroundColor: '#FEFCE5',
	 backgroundColor: '#FEFCE5'
  },
};

var highchartsOptions = Highcharts.setOptions(Highcharts.theme);

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'retirementGraph',
		   plotBorderWidth: null,
		   spacingRight:100
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
		yAxis: {
			title: {
				text: null
			},
			labels: {
			  formatter: function() {
				return '$'+this.value +'B';
			  }
			},
			max:220,
			tickInterval: 75,
		},
		xAxis: {
			labels: {
				enabled: false	
			},
			endOnTick: true,
			startOnTick: true,
		},
		tooltip: {
			style: {
				fontSize: '9px',	
			},
			formatter: function() {
			  var s;
			  if (this.point.name) { // the pie chart
				 s = ''+
					this.point.name +': $'+ this.y + ' billion';
			  } else {
				 s = ''+
					this.series.name  +': '+ this.y;
			  }
			  return s;
		   }
		},
		plotOptions: {
			column: {
				pointWidth: 25,
				pointPadding: .5,
				groupPadding: .3,
				minPointLength: 1,
			}
		},
		series: [{
		   type: 'pie',
		   name: 'Budget slice',
		   data: [{
			  name: 'Total assets spending',
			  y: 394.595,
		   }, {
			  name: 'Retirement spending',
			  y: 146.8,
		   }],
		   center: [20, 28],
		   spacingLeft: 100,
		   size: 40,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		},{
		   type: 'column',
		   name: 'Tax spending',
		   borderColor: '#000000',
		   data: [146.8]
		}, {
		   type: 'column',
		   name: 'Direct spending',
		   borderColor: '#000000',
		   data: [0]
		},]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'savingsGraph',
		   plotBorderWidth: null,
		   spacingRight:100
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
		yAxis: {
			title: {
				text: null
			},
			labels: {
			  formatter: function() {
				return '$'+this.value +'B';
			  }
			},
			max:220,
			tickInterval: 75,
		},
		xAxis: {
			labels: {
				enabled: false	
			},
			endOnTick: true,
			startOnTick: true,
		},
		tooltip: {
			style: {
				fontSize: '9px',	
			},
			formatter: function() {
			  var s;
			  if (this.point.name) { // the pie chart
				 s = ''+
					this.point.name +': $'+ this.y + ' billion';
			  } else {
				 s = ''+
					this.series.name  +': '+ this.y;
			  }
			  return s;
		   }
		},
		plotOptions: {
			column: {
				pointWidth: 25,
				pointPadding: .5,
				groupPadding: .3,
				minPointLength: 1,
			}
		},
		series: [{
		   type: 'pie',
		   name: 'Budget slice',
		   data: [{
			  name: 'Total assets spending',
			  y: 415.322,
		   }, {
			  name: 'Savings spending',
			  y: 126.073,
		   }],
		   center: [20, 28],
		   spacingLeft: 100,
		   size: 40,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		},{
		   type: 'column',
		   name: 'Tax spending',
		   borderColor: '#000000',
		   data: [126]
		}, {
		   type: 'column',
		   name: 'Direct spending',
		   borderColor: '#000000',
		   data: [0.073]
		},]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'homeownershipGraph',
		   plotBorderWidth: null,
		   spacingRight:100
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
		yAxis: {
			title: {
				text: null
			},
			labels: {
			  formatter: function() {
				return '$'+this.value +'B';
			  }
			},
			max:220,
			tickInterval: 75,
		},
		xAxis: {
			labels: {
				enabled: false	
			},
			endOnTick: true,
			startOnTick: true,
		},
		tooltip: {
			style: {
				fontSize: '9px',	
			},
			formatter: function() {
			  var s;
			  if (this.point.name) { // the pie chart
				 s = ''+
					this.point.name +': $'+ this.y + ' billion';
			  } else {
				 s = ''+
					this.series.name  +': '+ this.y;
			  }
			  return s;
		   }
		},
		plotOptions: {
			column: {
				pointWidth: 25,
				pointPadding: .5,
				groupPadding: .3,
				minPointLength: 1,
			}
		},
		series: [{
		   type: 'pie',
		   name: 'Budget slice',
		   data: [{
			  name: 'Total assets spending',
			  y: 330.194,
		   }, {
			  name: 'Homeownership spending',
			  y: 211.201,
		   }],
		   center: [20, 28],
		   spacingLeft: 100,
		   size: 40,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		},{
		   type: 'column',
		   name: 'Tax spending',
		   borderColor: '#000000',
		   data: [209.3]
		}, {
		   type: 'column',
		   name: 'Direct spending',
		   borderColor: '#000000',
		   data: [1.901]
		},]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'postEdGraph',
		   plotBorderWidth: null,
		   spacingRight:100
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
		yAxis: {
			title: {
				text: null
			},
			labels: {
			  formatter: function() {
				return '$'+this.value +'B';
			  }
			},
			max:220,
			tickInterval: 75,
		},
		xAxis: {
			labels: {
				enabled: false	
			},
			endOnTick: true,
			startOnTick: true,
		},
		tooltip: {
			style: {
				fontSize: '9px',	
			},
			formatter: function() {
			  var s;
			  if (this.point.name) { // the pie chart
				 s = ''+
					this.point.name +': $'+ this.y + ' billion';
			  } else {
				 s = ''+
					this.series.name  +': '+ this.y;
			  }
			  return s;
		   }
		},
		plotOptions: {
			column: {
				pointWidth: 25,
				pointPadding: .5,
				groupPadding: .3,
				minPointLength: 1,
			}
		},
		series: [{
		   type: 'pie',
		   name: 'Budget slice',
		   data: [{
			  name: 'Total assets spending',
			  y: 484.431,
		   }, {
			  name: 'Post-secondary education spending',
			  y: 56.964,
		   }],
		   center: [20, 28],
		   spacingLeft: 100,
		   size: 40,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		},{
		   type: 'column',
		   name: 'Tax spending',
		   borderColor: '#000000',
		   data: [13.58]
		}, {
		   type: 'column',
		   name: 'Direct spending',
		   borderColor: '#000000',
		   data: [43.384]
		},]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'entrepreneurshipGraph',
		   plotBorderWidth: null,
		   spacingRight:100
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
		yAxis: {
			title: {
				text: null
			},
			labels: {
			  formatter: function() {
				return '$'+this.value +'B';
			  }
			},
			max:220,
			tickInterval: 75,
		},
		xAxis: {
			labels: {
				enabled: false	
			},
			endOnTick: true,
			startOnTick: true,
		},
		tooltip: {
			style: {
				fontSize: '9px',	
			},
			formatter: function() {
			  var s;
			  if (this.point.name) { // the pie chart
				 s = ''+
					this.point.name +': $'+ this.y + ' billion';
			  } else {
				 s = ''+
					this.series.name  +': '+ this.y;
			  }
			  return s;
		   }
		},
		plotOptions: {
			column: {
				pointWidth: 25,
				pointPadding: .5,
				groupPadding: .3,
				minPointLength: 1,
			}
		},
		series: [{
		   type: 'pie',
		   name: 'Budget slice',
		   data: [{
			  name: 'Total assets spending',
			  y: 541.038,
		   }, {
			  name: 'Retirement spending',
			  y: 146.8,
		   }],
		   center: [20, 28],
		   spacingLeft: 100,
		   size: 40,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		},{
		   type: 'column',
		   name: 'Tax spending',
		   borderColor: '#000000',
		   data: [0]
		}, {
		   type: 'column',
		   name: 'Direct spending',
		   borderColor: '#000000',
		   data: [0.]
		},]
	 });
  });
