Highcharts.theme = {
  colors: ['#002929', '#00908F', '#00B2B1', '#EF4444', '#F69680', '#B3B3B3', '#969696', '#333333'],
  chart: {
	 plotBackgroundColor: null,
	 backgroundColor: null
  },
  title: {
	 text: null,
      style: {
         color: '#000',
         font: '22px Helvetica, Arial, sans-serif',
		 fontWeight: '100'
      }	 
  },
  subtitle: {
	 text: null,
      style: {
         color: '#666',
         font: '16px Helvetica, Arial, sans-serif',
		 fontWeight: '100'
      }	 
  },
  legend: {
      style: {
         color: '#000',
         font: 'Helvetica, Arial, sans-serif',
      }	 
  },
  xAxis: {
	  labels: {
		  style: {
		   color: '#000',
		   font: 'Helvetica, Arial, sans-serif',
		  }
      }	 
  },
  yAxis: {
	  labels: {
		  style: {
		   color: '#000',
		   font: 'Helvetica, Arial, sans-serif',
		  }
      }	 
  },
  labels: {
      style: {
         color: '#000',
         font: 'Helvetica, Arial, sans-serif',
      }	 
  },
  credits: {
	  enabled: false	
  },
  exporting: {
	  enabled: false	
  },
};

var highchartsOptions = Highcharts.setOptions(Highcharts.theme);

var chart;
$(document).ready(function() {
    var savings1annot = {
		'Commercial Bank':'Barclays Bank Kenya, Chase Bank, Co-operative Bank of Kenya, Equity Bank, Family Bank, Fina Bank, I&M Bank, Imperial Bank, Jamii Bora Bank, K-Rep Bank, Kenya Commercial Bank',
		'Postal Bank':'Kenya Post Office Savings Bank',
		'Microfinance Institution':'Faulu Kenya, Kenya Women Finance Trust, SMEP, Uwezo',
		'Credit Union/Cooperative':'Universal Traders SACCO',
		'Insurance Provider':'Changamka Microhealth, CIC Insurance Group',
		'State Owned Bank':'National Bank'};
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'savings1',
			plotBackgroundColor: null,
			plotBorderWidth: null,
			plotShadow: false
		},
		title: {
			text: 'Type of Institutions Surveyed'
		},
		tooltip: {
			formatter: function() {
				return '<strong>' + this.point.name + '</strong>: ' + savings1annot[this.point.name];
			},
			style: {
				width: '400px'
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
						return this.point.name;
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
				['Insurance Provider',   2],
				['State Owned Bank',   1]
			],
		}]
	});

//var chart;
//    var savings2annot = {
//		'Current Account':'75 products',
//		'Commitment Savings Account':'26 products',
//		'Recurring Standard Deposit Account':'3 products',
//	};
//	chart = new Highcharts.Chart({
//		chart: {
//			renderTo: 'savings2',
//			plotBackgroundColor: null,
//			plotBorderWidth: null,
//			plotShadow: false
//		},
//		title: {
//			text: 'Types of Savings Products'
//		},
//		tooltip: {
//			formatter: function() {
//				return '<strong>' + this.point.name + '</strong>: ' + this.y + ' products';
//			},
//			style: {
//				width: '200px'
//			}
//		},
//		plotOptions: {
//			pie: {
//				allowPointSelect: true,
//				cursor: 'pointer',
//				dataLabels: {
//					enabled: true,
//					color: '#000000',
//					connectorColor: '#000000',
//					formatter: function() {
//						return this.point.name;
//					}
//				}
//			}
//		},
//		series: [{
//			type: 'pie',
//			name: 'Browser share',
//			data: [
//				['Current Account',   75],
//				['Commitment Savings Account',       26],
//				['Recurring Standard Deposit Account',    3],
//			],
//		   dataLabels: {
//			 enabled: false
//		   },
//		}]
//	});

var chart;
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'technology1',
			type: 'line',
		},
		title: {
		   text: 'Increasing Access to Delivery Points Across Kenya'
		},
		subtitle: {
			text: null,
		},
		xAxis: {
			categories: ['2007','2008','2009','2010','2011']
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
					this.x +': '+ Highcharts.numberFormat(this.y, 0);
			}
		},
		series: [{
			name: 'MFI Branches',
			data: [0, 0, 6, 47,null],
			visible: false
		},{
			name: 'Commercial Bank Branches',
			data: [740, 887, 990, 1016, null],
			visible: false
		},{
			name: '# ATMs',
			data: [1012, 1325, 1717, 1979, 2183],
			visible: false
		},{
			name: 'Bank Agents',
			data: [0, 0, 0, 0, 8809 ],
			visible: false
		},{
			name: 'Mobile Money Agents',
			data: [307,2329,13358,27622,36198],
			visible: false
		}]
	});

var chart;
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'technology2',
			type: 'bar'
		},
		title: {
		   text: 'Delivery Methods of Surveyed Products'
		},
		xAxis: {
			categories: ['Agents', 'ATMs/kiosks', 'Passbook', 'Mobile phone', 'Debit card', 'Web'],
			title: {
				text: null
			}
		},
		yAxis: {
			min: 0,
			title: {
				text: 'Number of products',
			}
		},
		tooltip: {
			formatter: function() {
				return ''+
					this.y;
			}
		},
		plotOptions: {
			bar: {
				dataLabels: {
					enabled: true
				}
			}
		},
		credits: {
			enabled: false
		},
			series: [{
			name: '# Products',
			data: [15,24,10,31,20,14]
		}, {
			name: '# Institutions',
			data: [6,14,3,15,7,7]
		}]
	});	

var chart;
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'commercial1',
			type: 'line',
		},
		title: {
			text: 'Kenya Commercial Bank',
		},
		subtitle: {
			text: null,
		},
		xAxis: {
			categories: ['2006','2007','2008','2009','2010']
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
					this.x +': '+ Highcharts.numberFormat(this.y, 0);
			}
		},
		legend: {
		},
		series: [{
			name: 'Balance Below KSh. 100,000',
			data: [274840,402311,418942,654808,1214231]
		}, {
			name: 'Balance Above KSh. 100,000',
			data: [69424,85356,87040,97044,126733]
		}]
	});

var chart;
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'commercial2',
			type: 'line',
		},
		title: {
			text: 'Equity Bank',
		},
		subtitle: {
			text: null,
		},
		xAxis: {
			categories: ['2006','2007','2008','2009','2010']
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
					this.x +': '+ Highcharts.numberFormat(this.y, 0);
			}
		},
		legend: {
		},
		series: [{
			name: 'Balance Below KSh. 100,000',
			data: [987435,1710684,2873920,3930363,5264244]
		}, {
			name: 'Balance Above KSh. 100,000',
			data: [27039,129648,144436,107141,141488]
		}]
	});
});