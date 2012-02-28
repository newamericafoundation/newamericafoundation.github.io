// JavaScript Document
// 
// var chart;
// $(document).ready(function() {
// 	chart = new Highcharts.Chart({
// 		chart: {
// 			renderTo: 'education-graph',
// 			type: 'line',
// 		},
// 		title: {
// 			text: 'Students enrolled in college after graduation',
// 		},
// 		subtitle: {
// 			text: 'Percentage',
// 		},
// 		xAxis: {
// 			categories: ['2005', '2006', '2007', '2008', '2009']
// 		},
// 		yAxis: {
// 			title: {
// 				text: null
// 			},
// 			plotLines: [{
// 				value: 0,
// 				width: 1,
// 				color: '#808080'
// 			}]
// 		},
// 		tooltip: {
// 			formatter: function() {
// 					return '<b>'+ this.series.name +'</b><br/>'+
// 					this.x +': '+ this.y +'%';
// 			}
// 		},
// 		series: [{
// 			name: 'High-income',
// 			data: [81.2, 80.7, 78.2, 81.9, 84.2]
// 		},{
// 			name: 'Middle-income',
// 			data: [65.1, 61.4, 63.3, 65.3, 66.8]
// 		},{
// 			name: 'Low-income',
// 			data: [51, 54.5, 55.2, 56, 54]
// 		}]
// 	});
// });

//var chart;
//$(document).ready(function() {
//	chart = new Highcharts.Chart({
//		chart: {
//			renderTo: 'education-graph2',
//			type: 'column'
//		},
//		title: {
//			text: 'Net College Costs as a Percent of Median Family Income'
//		},
//		xAxis: {
//			categories: ['Lowest income quintile', 'Second lowest income quintile', 'Middle income quintile', 'Second highest income quintile', 'Highest income quintile']
//		},
//		yAxis: {
//			min: 0,
//			title: {
//				text: 'Percentage'
//			}
//		},
////		legend: {
////			layout: 'vertical',
////			backgroundColor: '#FFFFFF',
////			align: 'left',
////			verticalAlign: 'top',
////			x: 100,
////			y: 70,
////			floating: true,
////			shadow: true
////		},
//		tooltip: {
//			formatter: function() {
//				return ''+
//					this.x +': '+ this.y +' mm';
//			}
//		},
//		plotOptions: {
//			column: {
//				pointPadding: 0.2,
//				borderWidth: 0
//			}
//		},
//			series: [{
//			name: '1990-2000',
//			data: [39, 23, 18, 12, 7]
//
//		},{
//			name: '2007-2008',
//			data: [55, 33, 25, 16, 9]
//
//		}]
//	});
//});

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'pie1',
		   plotBackgroundColor: null,
		   plotBorderWidth: null,
		   backgroundColor: '#F2DEDE',
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
					left: '45px',
					top: '29px',
					color: 'black',
					fontWeight: 'bold'
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
			  color: '#660033'
		   }, {
			  name: 'Other income',
			  y: 61,
			  color: '#EEEEEE'
		   }],
		   size: 70,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		   innerSize: '40%',
		}]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'pie2',
		   plotBackgroundColor: null,
		   plotBorderWidth: null,
		   backgroundColor: '#F2DEDE',
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
					left: '45px',
					top: '29px',
					color: 'black',
					fontWeight: 'bold'
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
			  color: '#660033'
		   }, {
			  name: 'Other income',
			  y: 77,
			  color: '#EEEEEE'
		   }],
		   size: 70,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		   innerSize: '40%',
		}]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'pie3',
		   plotBackgroundColor: null,
		   plotBorderWidth: null,
		   backgroundColor: '#F2DEDE',
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
					left: '45px',
					top: '29px',
					color: 'black',
					fontWeight: 'bold'
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
			  color: '#660033'
		   }, {
			  name: 'Other income',
			  y: 82,
			  color: '#EEEEEE'
		   }],
		   size: 70,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		   innerSize: '40%',
		}]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'pie4',
		   plotBackgroundColor: null,
		   plotBorderWidth: null,
		   backgroundColor: '#F2DEDE',
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
					left: '45px',
					top: '29px',
					color: 'black',
					fontWeight: 'bold'
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
			  color: '#660033'
		   }, {
			  name: 'Other income',
			  y: 88,
			  color: '#EEEEEE'
		   }],
		   size: 70,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		   innerSize: '40%',
		}]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'pie5',
		   plotBackgroundColor: null,
		   plotBorderWidth: null,
		   backgroundColor: '#F2DEDE',
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
					left: '49px',
					top: '29px',
					color: 'black',
					fontWeight: 'bold'
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
			  color: '#660033'
		   }, {
			  name: 'Other income',
			  y: 93,
			  color: '#EEEEEE'
		   }],
		   size: 70,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		   innerSize: '40%',
		}]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'pie6',
		   plotBackgroundColor: null,
		   plotBorderWidth: null,
		   backgroundColor: '#F2DEDE',
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
					left: '45px',
					top: '29px',
					color: 'black',
					fontWeight: 'bold'
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
			  color: '#660033'
		   }, {
			  name: 'Other income',
			  y: 45,
			  color: '#EEEEEE'
		   }],
		   size: 70,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		   innerSize: '40%',
		}]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'pie7',
		   plotBackgroundColor: null,
		   plotBorderWidth: null,
		   backgroundColor: '#F2DEDE',
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
					left: '45px',
					top: '29px',
					color: 'black',
					fontWeight: 'bold'
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
			  color: '#660033'
		   }, {
			  name: 'Other income',
			  y: 67,
			  color: '#EEEEEE'
		   }],
		   size: 70,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		   innerSize: '40%',
		}]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'pie8',
		   plotBackgroundColor: null,
		   plotBorderWidth: null,
		   backgroundColor: '#F2DEDE',
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
					left: '45px',
					top: '29px',
					color: 'black',
					fontWeight: 'bold'
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
			  color: '#660033'
		   }, {
			  name: 'Other income',
			  y: 75,
			  color: '#EEEEEE'
		   }],
		   size: 70,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		   innerSize: '40%',
		}]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'pie9',
		   plotBackgroundColor: null,
		   plotBorderWidth: null,
		   backgroundColor: '#F2DEDE',
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
					left: '45px',
					top: '29px',
					color: 'black',
					fontWeight: 'bold'
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
			  color: '#660033'
		   }, {
			  name: 'Other income',
			  y: 84,
			  color: '#EEEEEE'
		   }],
		   size: 70,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		   innerSize: '40%',
		}]
	 });
  });

var chart;
  $(document).ready(function() {
	 chart = new Highcharts.Chart({
		chart: {
		   renderTo: 'pie10',
		   plotBackgroundColor: null,
		   plotBorderWidth: null,
		   backgroundColor: '#F2DEDE',
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
					left: '49px',
					top: '29px',
					color: 'black',
					fontWeight: 'bold'
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
			  color: '#660033'
		   }, {
			  name: 'Other income',
			  y: 91,
			  color: '#EEEEEE'
		   }],
		   size: 70,
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		   innerSize: '40%',
		}]
	 });
  });
