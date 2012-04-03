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
		   renderTo: 'retirementGraphBar',
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
			max:300,
			tickInterval: 100
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
					this.series.name  +': $'+ this.y + ' billion';
			  }
			  return s;
		   }
		},
		labels: {
			items: [{
				html: 'Tax spending',
				style: {
					left: '25px',
					top: '75px',
					color: '#777777',
					fontSize: '11px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				}
			},{
				html: 'Direct spending',
				style: {
					left: '104px',
					top: '75px',
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
		   type: 'column',
		   name: 'Tax spending',
		   color: '#a3a3a3',
		   borderColor: '#000000',
		   data: [165.430]
		}, {
		   type: 'column',
		   name: 'Direct spending',
		   color: '#2e1717',
		   borderColor: '#000000',
		   data: [0]
		},]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'savingsGraphBar',
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
			max:300,
			tickInterval: 100
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
					this.series.name  +': $'+ this.y + ' billion';
			  }
			  return s;
		   }
		},
		labels: {
			items: [{
				html: 'Tax spending',
				style: {
					left: '25px',
					top: '75px',
					color: '#777777',
					fontSize: '11px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				}
			},{
				html: 'Direct spending',
				style: {
					left: '104px',
					top: '75px',
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
		   type: 'column',
		   name: 'Tax spending',
		   color: '#a3a3a3',
		   borderColor: '#000000',
		   data: [115.370]
		}, {
		   type: 'column',
		   name: 'Direct spending',
		   color: '#2e1717',
		   borderColor: '#000000',
		   data: [0.052]
		},]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'homeownershipGraphBar',
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
			max:300,
			tickInterval: 100
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
					this.series.name  +': $'+ this.y + ' billion';
			  }
			  return s;
		   }
		},
		labels: {
			items: [{
				html: 'Tax spending',
				style: {
					left: '25px',
					top: '75px',
					color: '#777777',
					fontSize: '11px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				}
			},{
				html: 'Direct spending',
				style: {
					left: '104px',
					top: '75px',
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
		   type: 'column',
		   name: 'Tax spending',
		   color: '#a3a3a3',
		   borderColor: '#000000',
		   data: [197.750],
		}, {
		   type: 'column',
		   name: 'Direct spending',
		   color: '#2e1717',
		   borderColor: '#000000',
		   data: [1.191],
		}]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'postEdGraphBar',
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
			max:300,
			tickInterval: 100
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
					this.series.name  +': $'+ this.y + ' billion';
			  }
			  return s;
		   }
		},
		labels: {
			items: [{
				html: 'Tax spending',
				style: {
					left: '25px',
					top: '75px',
					color: '#777777',
					fontSize: '11px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				}
			},{
				html: 'Direct spending',
				style: {
					left: '104px',
					top: '75px',
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
		   type: 'column',
		   name: 'Tax spending',
		   color: '#a3a3a3',
		   borderColor: '#000000',
		   data: [29.602]
		}, {
		   type: 'column',
		   name: 'Direct spending',
		   color: '#2e1717',
		   borderColor: '#000000',
		   data: [38.005]
		},]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'entrepreneurshipGraphBar',
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
			max:300,
			tickInterval: 100
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
					this.series.name  +': $'+ this.y + ' billion';
			  }
			  return s;
		   }
		},
		labels: {
			items: [{
				html: 'Tax spending',
				style: {
					left: '25px',
					top: '75px',
					color: '#777777',
					fontSize: '11px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				}
			},{
				html: 'Direct spending',
				style: {
					left: '104px',
					top: '75px',
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
		   type: 'column',
		   name: 'Tax spending',
		   color: '#a3a3a3',
		   borderColor: '#000000',
		   data: [0]
		}, {
		   type: 'column',
		   name: 'Direct spending',
		   color: '#2e1717',
		   borderColor: '#000000',
		   data: [.602]
		},]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'savingsGraphPie',
		   plotBorderWidth: null,
		   spacingLeft:160
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
		tooltip: {
			enabled: false
		},
		labels: {
			items: [{
				html: '21%',
				style: {
					left: '73px',
					top: '19px',
					color: 'black',
					fontWeight: 'bold',
					fontSize: '16px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				}
			}]
		},
		series: [{
		   type: 'pie',
		   name: 'Budget slice',
		   data: [{
			  name: 'Other assets spending',
			  color: '#d0d0c3',
			  y: 432580,
		   }, {
			  name: 'Savings spending',
			  color: '#696930',
			  y: 115422,
		   }],
		   size: 60,
		   innerSize: '76%',
		   showInLegend: false,
		   borderColor: '#000000',
		   dataLabels: {
			 enabled: false
		   },
		}]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'retirementGraphPie',
		   plotBorderWidth: null,
		   spacingLeft:160
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
		tooltip: {
			enabled: false
		},
		labels: {
			items: [{
				html: '30%',
				style: {
					left: '73px',
					top: '19px',
					color: 'black',
					fontWeight: 'bold',
					fontSize: '16px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				}
			}]
		},
		series: [{
		   type: 'pie',
		   name: 'Budget slice',
		   data: [{
			  name: 'Other assets spending',
			  color: '#d0d0c3',
			  y: 382572,
		   }, {
			  name: 'Retirement spending',
			  color: '#696930',
			  y: 165430,
		   }],
		   size: 60,
		   innerSize: '76%',
		   showInLegend: false,
		   borderColor: '#000000',
		   dataLabels: {
			 enabled: false
		   },
		},]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'homeownershipGraphPie',
		   plotBorderWidth: null,
		   spacingLeft:160
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
		tooltip: {
			enabled: false
		},
		labels: {
			items: [{
				html: '36%',
				style: {
					left: '73px',
					top: '19px',
					color: 'black',
					fontWeight: 'bold',
					fontSize: '16px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				}
			}]
		},
		series: [{
		   type: 'pie',
		   name: 'Budget slice',
		   data: [{
			  name: 'Other assets spending',
			  color: '#d0d0c3',
			  y: 349061,
		   }, {
			  name: 'Homeownership spending',
			  color: '#696930',
			  y: 198941,
		   }],
		   size: 60,
		   innerSize: '76%',
		   showInLegend: false,
		   borderColor: '#000000',
		   dataLabels: {
			 enabled: false
		   },
		},]
	 });
  });


var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'postEdGraphPie',
		   plotBorderWidth: null,
		   spacingLeft:160
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
		tooltip: {
			enabled: false
		},
		labels: {
			items: [{
				html: '12%',
				style: {
					left: '73px',
					top: '19px',
					color: 'black',
					fontWeight: 'bold',
					fontSize: '16px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				    }
			}]
		},
		series: [{
		   type: 'pie',
		   name: 'Budget slice',
		   data: [{
			  name: 'Other assets spending',
			  color: '#d0d0c3',
			  y: 480395,
		   }, {
			  name: 'Post-secondary education spending',
			  color: '#696930',
			  y: 67607,
		   }],
		   size: 60,
		   innerSize: '76%',
		   showInLegend: false,
		   borderColor: '#000000',
		   dataLabels: {
			 enabled: false
		   },
		}]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'entrepreneurshipGraphPie',
		   plotBorderWidth: null,
		   spacingLeft:160
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
		tooltip: {
			enabled: false
		},
		labels: {
			items: [{
				html: '<1%',
				style: {
					left: '73px',
					top: '19px',
					color: 'black',
					fontWeight: 'bold',
					fontSize: '16px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				}
			}]
		},
		series: [{
		   type: 'pie',
		   name: 'Budget slice',
		   data: [{
			  name: 'Other assets spending',
			  color: '#d0d0c3',
			  y: 547400,
		   }, {
			  name: 'Entrepreneurship spending',
			  color: '#696930',
			  y: 602,
		   }],
		   size: 60,
		   innerSize: '76%',
		   showInLegend: false,
		   borderColor: '#000000',
		   dataLabels: {
			 enabled: false
		   },
		}]
	 });
  });