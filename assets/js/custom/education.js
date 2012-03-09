var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'pie1',
		   plotBorderWidth: null,
		   type: 'pie'
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
		labels: {
			items: [{
				html: '39%',
				style: {
					left: '37px',
					top: '45px',
					color: 'black',
					fontWeight: 'bold',
					fontSize: '28px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				}
			}]
		},
		tooltip: {
			style: {
				fontSize: '9px',	
			},
			formatter: function() {
			  var s;
			  if (this.point.name) { // the pie chart
				 s = ''+
					this.y + '%';
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
		   data: [{
			  name: 'Percent of income',
			  y: 39,
		   }, {
			  name: 'Other income',
			  color: '#FCFAD0',
			  y: 61,
		   }],
		   size: 105,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		   innerSize: '70%',
		}]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'pie2',
		   plotBorderWidth: null,
		   type: 'pie'
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
		labels: {
			items: [{
				html: '23%',
				style: {
					left: '37px',
					top: '45px',
					color: 'black',
					fontWeight: 'bold',
					fontSize: '28px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				}
			}]
		},
		tooltip: {
			style: {
				fontSize: '9px',	
			},
			formatter: function() {
			  var s;
			  if (this.point.name) { // the pie chart
				 s = ''+
					this.y + '%';
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
		   data: [{
			  name: 'Percent of income',
			  y: 23,
		   }, {
			  name: 'Other income',
			  color: '#FCFAD0',
			  y: 77,
		   }],
		   size: 105,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		   innerSize: '70%',
		}]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'pie3',
		   plotBorderWidth: null,
		   type: 'pie'
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
		labels: {
			items: [{
				html: '18%',
				style: {
					left: '37px',
					top: '45px',
					color: 'black',
					fontWeight: 'bold',
					fontSize: '28px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				}
			}]
		},
		tooltip: {
			style: {
				fontSize: '9px',	
			},
			formatter: function() {
			  var s;
			  if (this.point.name) { // the pie chart
				 s = ''+
					this.y + '%';
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
		   data: [{
			  name: 'Percent of income',
			  y: 18,
		   }, {
			  name: 'Other income',
			  color: '#FCFAD0',
			  y: 82,
		   }],
		   size: 105,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		   innerSize: '70%',
		}]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'pie4',
		   plotBorderWidth: null,
		   type: 'pie'
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
		labels: {
			items: [{
				html: '12%',
				style: {
					left: '37px',
					top: '45px',
					color: 'black',
					fontWeight: 'bold',
					fontSize: '28px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				}
			}]
		},
		tooltip: {
			style: {
				fontSize: '9px',	
			},
			formatter: function() {
			  var s;
			  if (this.point.name) { // the pie chart
				 s = ''+
					this.y + '%';
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
		   data: [{
			  name: 'Percent of income',
			  y: 12,
		   }, {
			  name: 'Other income',
			  color: '#FCFAD0',
			  y: 88,
		   }],
		   size: 105,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		   innerSize: '70%',
		}]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'pie5',
		   plotBorderWidth: null,
		   type: 'pie'
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
		labels: {
			items: [{
				html: '7%',
				style: {
					left: '43px',
					top: '45px',
					color: 'black',
					fontWeight: 'bold',
					fontSize: '28px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				}
			}]
		},
		tooltip: {
			style: {
				fontSize: '9px',	
			},
			formatter: function() {
			  var s;
			  if (this.point.name) { // the pie chart
				 s = ''+
					this.y + '%';
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
		   data: [{
			  name: 'Percent of income',
			  y: 7,
		   }, {
			  name: 'Other income',
			  color: '#FCFAD0',
			  y: 93,
		   }],
		   size: 105,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		   innerSize: '70%',
		}]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'pie6',
		   plotBorderWidth: null,
		   type: 'pie'
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
		labels: {
			items: [{
				html: '55%',
				style: {
					left: '37px',
					top: '45px',
					color: 'black',
					fontWeight: 'bold',
					fontSize: '28px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				}
			}]
		},
		tooltip: {
			style: {
				fontSize: '9px',	
			},
			formatter: function() {
			  var s;
			  if (this.point.name) { // the pie chart
				 s = ''+
					this.y + '%';
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
		   data: [{
			  name: 'Percent of income',
			  y: 55,
		   }, {
			  name: 'Other income',
			  color: '#FCFAD0',
			  y: 45,
		   }],
		   size: 105,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		   innerSize: '70%',
		}]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'pie7',
		   plotBorderWidth: null,
		   type: 'pie'
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
		labels: {
			items: [{
				html: '33%',
				style: {
					left: '37px',
					top: '45px',
					color: 'black',
					fontWeight: 'bold',
					fontSize: '28px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				}
			}]
		},
		tooltip: {
			style: {
				fontSize: '9px',	
			},
			formatter: function() {
			  var s;
			  if (this.point.name) { // the pie chart
				 s = ''+
					this.y + '%';
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
		   data: [{
			  name: 'Percent of income',
			  y: 33,
		   }, {
			  name: 'Other income',
			  color: '#FCFAD0',
			  y: 67,
		   }],
		   size: 105,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		   innerSize: '70%',
		}]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'pie8',
		   plotBorderWidth: null,
		   type: 'pie'
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
		labels: {
			items: [{
				html: '25%',
				style: {
					left: '37px',
					top: '45px',
					color: 'black',
					fontWeight: 'bold',
					fontSize: '28px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				}
			}]
		},
		tooltip: {
			style: {
				fontSize: '9px',	
			},
			formatter: function() {
			  var s;
			  if (this.point.name) { // the pie chart
				 s = ''+
					this.y + '%';
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
		   data: [{
			  name: 'Percent of income',
			  y: 25,
		   }, {
			  name: 'Other income',
			  color: '#FCFAD0',
			  y: 75,
		   }],
		   size: 105,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		   innerSize: '70%',
		}]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'pie9',
		   plotBorderWidth: null,
		   type: 'pie'
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
		labels: {
			items: [{
				html: '16%',
				style: {
					left: '37px',
					top: '45px',
					color: 'black',
					fontWeight: 'bold',
					fontSize: '28px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				}
			}]
		},
		tooltip: {
			style: {
				fontSize: '9px',	
			},
			formatter: function() {
			  var s;
			  if (this.point.name) { // the pie chart
				 s = ''+
					this.y + '%';
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
		   data: [{
			  name: 'Percent of income',
			  y: 16,
		   }, {
			  name: 'Other income',
			  color: '#FCFAD0',
			  y: 84,
		   }],
		   size: 105,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		   innerSize: '70%',
		}]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'pie10',
		   plotBorderWidth: null,
		   type: 'pie'
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
		labels: {
			items: [{
				html: '9%',
				style: {
					left: '43px',
					top: '45px',
					color: 'black',
					fontWeight: 'bold',
					fontSize: '28px',
					fontFamily: "'Helvetica Neue',Helvetica,Arial,sans-serif"
				}
			}]
		},
		tooltip: {
			style: {
				fontSize: '9px',	
			},
			formatter: function() {
			  var s;
			  if (this.point.name) { // the pie chart
				 s = ''+
					this.y + '%';
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
		   data: [{
			  name: 'Percent of income',
			  y: 9,
		   }, {
			  name: 'Other income',
			  color: '#FCFAD0',
			  y: 91,
		   }],
		   size: 105,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		   innerSize: '70%',
		}]
	 });
  });
