function retirement(){

	var chart;
		 chart = new Highcharts.Chart({
			chart: {
			   renderTo: 'top-quartile',
			   plotBackgroundColor: null,
			   plotBorderWidth: null,
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
				tickInterval: 30,
				offset: 10,
				minorGridLineWidth: 0,
				gridLineWidth: 0,
			},
			xAxis: {
				categories: ["'00", "'08"],
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
						this.y + '%';
				  }
				  return s;
			   }
			},
			plotOptions: {
				area: {
					dataLabels: {
						enabled: true,
						formatter: function() {
							return this.y + '%';
						},
						style: {
							fontSize: '14px',
							fontWeight: 'bold'					
						},
					},
				}
			},
			series: [
	        {
				type: 'area',
				data: [80, 73]
			}]
		 });
  
	var chart;
		 chart = new Highcharts.Chart({
			chart: {
			   renderTo: 'top-quartile-pie',
			   plotBackgroundColor: null,
			   plotBorderWidth: null,
			   type: 'pie',
			},
			labels: {
				items: [{
					html: '69%',
					style: {
						left: '28px',
						top: '51px',
						color: 'black',
						fontWeight: 'bold',
						fontSize: '32px',
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
			series: [{
			   name: 'Employee retirement plans',
			   data: [{
				  name: 'Employee participation',
				  y: 69,
			   }, {
				  name: 'No participation',
				  color: '#f4f4f4',
				  y: 31,
			   }],
			   showInLegend: false,
			   dataLabels: {
				  enabled: false
			   },
			   borderColor: '#000000',
			   size: 105,
			   innerSize: '70%',
			}]
		 });

	var chart;
		 chart = new Highcharts.Chart({
			chart: {
			   renderTo: 'second-quartile',
			   plotBackgroundColor: null,
			   plotBorderWidth: null,
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
				tickInterval: 30,
				offset: 10,
				minorGridLineWidth: 0,
				gridLineWidth: 0,
			},
			xAxis: {
				categories: ["'00", "'08"],
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
						this.y + '%';
				  }
				  return s;
			   }
			},
			plotOptions: {
				area: {
					dataLabels: {
						enabled: true,
						formatter: function() {
							return this.y + '%';
						},
						style: {
							fontSize: '14px',
							fontWeight: 'bold'					
						},
					},
				}
			},
			series: [{
				type: 'area',
				data: [74, 67],
			}]
		 });

	var chart;
		 chart = new Highcharts.Chart({
			chart: {
			   renderTo: 'second-quartile-pie',
			   plotBackgroundColor: null,
			   plotBorderWidth: null,
			},
			labels: {
				items: [{
					html: '60%',
					style: {
						left: '28px',
						top: '51px',
						color: 'black',
						fontWeight: 'bold',
						fontSize: '32px',
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
			series: [{
			   type: 'pie',
			   name: 'Employee retirement plans',
			   data: [{
				  name: 'Employee participation',
				  y: 60,
			   }, {
				  name: 'No participation',
				  color: '#f4f4f4',
				  y: 40,
			   }],
			   size: 105,
			   innerSize: '70%',
			   showInLegend: false,
			   dataLabels: {
				  enabled: false
			   },
			   borderColor: '#000000',
			}]
		 });

	var chart;
		 chart = new Highcharts.Chart({
			chart: {
			   renderTo: 'third-quartile',
			   plotBackgroundColor: null,
			   plotBorderWidth: null,
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
				tickInterval: 30,
				offset: 10,
				minorGridLineWidth: 0,
				gridLineWidth: 0,
			},
			xAxis: {
				categories: ["'00", "'08"],
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
						this.y + '%';
				  }
				  return s;
			   }
			},
			plotOptions: {
				area: {
					dataLabels: {
						enabled: true,
						formatter: function() {
							return this.y + '%';
						},
						style: {
							fontSize: '14px',
							fontWeight: 'bold'					
						},
					},
				}
			},
			series: [{
				type: 'area',
				data: [66, 59],
			}]
		 });
  
	var chart;
		 chart = new Highcharts.Chart({
			chart: {
			   renderTo: 'third-quartile-pie',
			   plotBackgroundColor: null,
			   plotBorderWidth: null,
			},
			labels: {
				items: [{
					html: '50%',
					style: {
						left: '28px',
						top: '51px',
						color: 'black',
						fontWeight: 'bold',
						fontSize: '32px',
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
			series: [{
			   type: 'pie',
			   name: 'Employee retirement plans',
			   data: [{
				  name: 'Employee participation',
				  y: 50,
			   }, {
				  name: 'No participation',
				  color: '#f4f4f4',
				  y: 50,
			   }],
			   size: 105,
			   innerSize: '70%',
			   showInLegend: false,
			   dataLabels: {
				  enabled: false
			   },
			   borderColor: '#000000',
			}]
		 });

	var chart;
		 chart = new Highcharts.Chart({
			chart: {
			   renderTo: 'bottom-quartile',
			   plotBackgroundColor: null,
			   plotBorderWidth: null,
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
				tickInterval: 30,
				offset: 10,
				minorGridLineWidth: 0,
				gridLineWidth: 0,
			},
			xAxis: {
				categories: ["'00", "'08"],
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
						this.y + '%';
				  }
				  return s;
			   }
			},
			plotOptions: {
				area: {
					dataLabels: {
						enabled: true,
						formatter: function() {
							return this.y + '%';
						},
						style: {
							fontSize: '14px',
							fontWeight: 'bold'					
						},
					},
				}
			},
			series: [{
				type: 'area',
				data: [45, 38],
			}]
		 });

	var chart;
		 chart = new Highcharts.Chart({
			chart: {
			   renderTo: 'bottom-quartile-pie',
			   plotBackgroundColor: null,
			   plotBorderWidth: null,
			},
			labels: {
				items: [{
					html: '28%',
					style: {
						left: '28px',
						top: '51px',
						color: 'black',
						fontWeight: 'bold',
						fontSize: '32px',
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
			series: [{
			   type: 'pie',
			   name: 'Employee retirement plans',
			   data: [{
				  name: 'Employee participation',
				  y: 28,
			   }, {
				  name: 'No participation',
				  color: '#f4f4f4',
				  y: 72,
			   }],
			   size: 105,
			   innerSize: '70%',
			   showInLegend: false,
			   dataLabels: {
				  enabled: false
			   },
			   borderColor: '#000000',
			}]
		 });
		
		// bar chart
		
		var chart;
			 chart = new Highcharts.Chart({
				chart: {
				   renderTo: 'retirement-bar',
				   plotBackgroundColor: null,
				   plotBorderWidth: null,
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
					max:100,
					min:0,
					tickInterval: 25,
					offset: 10,
					minorGridLineWidth: 0,
					gridLineWidth: 0.2,
				},
				xAxis: {
					categories: ["Highest", "Second Highest","Middle","Second Lowest","Lowest"],
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
							this.y + '%';
					  }
					  return s;
				   }
				},
				plotOptions: {
					bar: {
						dataLabels: {
							enabled: true,
							formatter: function() {
								return this.y + '%';
							},
							style: {
								fontSize: '14px',
								fontWeight: 'bold'					
							},
						},
					}
				},
				series: [{
					type: 'bar',
					data: [80,13,6,2,0],
				}]
			 });
} // end retirement
