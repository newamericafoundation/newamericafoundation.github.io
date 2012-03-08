// JavaScript Document

Highcharts.theme = {
  colors: ['#6E022A', '#464646', '#5B605F', '#A1A194', '#FCFAD0'],
  chart: {
	 plotBackgroundColor: null,
	 backgroundColor: null
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
			max:485,
		},
		xAxis: {
			labels: {
				enabled: false	
			},
			endOnTick: true,
			startOnTick: true,
			tickLength: 0,
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
		labels: {
			items: [{
				html: 'Tax spending',
				style: {
					left: '25px',
					top: '55px',
					color: '#777777',
					fontSize: '11px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				}
			},{
				html: 'Direct spending',
				style: {
					left: '104px',
					top: '55px',
					color: '#777777',
					fontSize: '11px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				}
			}]
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
			  name: 'Other assets spending',
			  y: 389.448,
		   }, {
			  name: 'Retirement spending',
			  y: 165.430,
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
		   data: [165.430]
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
			max:485,
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
		labels: {
			items: [{
				html: 'Tax spending',
				style: {
					left: '25px',
					top: '55px',
					color: '#777777',
					fontSize: '11px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				}
			},{
				html: 'Direct spending',
				style: {
					left: '104px',
					top: '55px',
					color: '#777777',
					fontSize: '11px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				}
			}]
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
			  name: 'Other assets spending',
			  y: 439.456,
		   }, {
			  name: 'Savings spending',
			  y: 115.422,
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
		   data: [115.370]
		}, {
		   type: 'column',
		   name: 'Direct spending',
		   borderColor: '#000000',
		   data: [0.052]
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
			max:485,
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
		labels: {
			items: [{
				html: 'Tax spending',
				style: {
					left: '25px',
					top: '55px',
					color: '#777777',
					fontSize: '11px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				}
			},{
				html: 'Direct spending',
				style: {
					left: '104px',
					top: '55px',
					color: '#777777',
					fontSize: '11px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				}
			}]
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
			  name: 'Other assets spending',
			  y: 198.941,
			  color: '#d0d0c3',
		   }, {
			  name: 'Homeownership spending',
			  y: 355.937,
			  color: '#696930',
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
		   data: [197.750],
		   color: '#a3a3a3'
		}, {
		   type: 'column',
		   name: 'Direct spending',
		   borderColor: '#000000',
		   data: [1.191],
		   color: '#2e1717'
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
			max:485,
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
		labels: {
			items: [{
				html: 'Tax spending',
				style: {
					left: '25px',
					top: '55px',
					color: '#777777',
					fontSize: '11px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				}
			},{
				html: 'Direct spending',
				style: {
					left: '104px',
					top: '55px',
					color: '#777777',
					fontSize: '11px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				}
			}]
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
			  name: 'Other assets spending',
			  y: 480.395,
		   }, {
			  name: 'Post-secondary education spending',
			  y: 74.483,
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
		   data: [28.930]
		}, {
		   type: 'column',
		   name: 'Direct spending',
		   borderColor: '#000000',
		   data: [45.553]
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
			max:485,
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
		labels: {
			items: [{
				html: 'Tax spending',
				style: {
					left: '25px',
					top: '55px',
					color: '#777777',
					fontSize: '11px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				}
			},{
				html: 'Direct spending',
				style: {
					left: '104px',
					top: '55px',
					color: '#777777',
					fontSize: '11px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				}
			}]
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
			  name: 'Other assets spending',
			  y: 554.276,
		   }, {
			  name: 'Entrepreneurship spending',
			  y: .602,
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
		   data: [.602]
		},]
	 });
  });
