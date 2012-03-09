var chart;
  $(document).ready(function() {
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
			data: [80.2, 72.9],
		}]
	 });
  });
  
var chart;
  $(document).ready(function() {
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
		series: [{
		   name: 'Employee retirement plans',
		   data: [{
			  name: 'Employee participation',
			  y: 68.6,
		   }, {
			  name: 'No participation',
			  color: '#FCFAD0',
			  y: 31.4,
		   }],
		   showInLegend: false,
		   dataLabels: {
			  enabled: false
		   },
		   borderColor: '#000000',
		   size: 105,
		   innerSize: '70%',
		   innerSize: '70%',
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
			data: [74.3, 67.3],
		}]
	 });
  });

var chart;
  $(document).ready(function() {
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
		series: [{
		   type: 'pie',
		   name: 'Employee retirement plans',
		   data: [{
			  name: 'Employee participation',
			  y: 60.1,
		   }, {
			  name: 'No participation',
			  color: '#FCFAD0',
			  y: 39.9,
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
  });  

var chart;
  $(document).ready(function() {
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
			data: [66, 59.2],
		}]
	 });
  });
  
var chart;
  $(document).ready(function() {
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
		series: [{
		   type: 'pie',
		   name: 'Employee retirement plans',
		   data: [{
			  name: 'Employee participation',
			  y: 49.7,
		   }, {
			  name: 'No participation',
			  color: '#FCFAD0',
			  y: 50.3,
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
  });

var chart;
  $(document).ready(function() {
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
			data: [44.9, 38.4],
		}]
	 });
  });

var chart;
  $(document).ready(function() {
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
		series: [{
		   type: 'pie',
		   name: 'Employee retirement plans',
		   data: [{
			  name: 'Employee participation',
			  y: 27.7,
		   }, {
			  name: 'No participation',
			  color: '#FCFAD0',
			  y: 72.3,
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
  });
