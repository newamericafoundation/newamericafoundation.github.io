(function ($) { 
		var chart;
$(document).ready(function() {
		
			// $(document).ready(function() {
				chart = new Highcharts.Chart({
					chart: {
						renderTo: 'container',
						defaultSeriesType: 'area',
						zoomType: 'y',
						marginTop: 50
					},
					title: {
						text: 'Family Net Worth 1989-2007',
						y:5
					},
					subtitle: {
						text: 'Source: Federal Reserve Survey of Consumer Finances 89-07 <br/>Click and drag in the plot area to zoom in',
						y:20
					},
					xAxis: {
						categories: ['1989', '1992', '1995', '1998', '2001', '2004', '2007'],
						tickmarkPlacement: 'on',
						title: {
							text: 'Year'
						}
					},
					yAxis: {
						title: {
							text: '2007 Dollars',
						},
						labels: {
							formatter: function() {
								return '$'+Highcharts.numberFormat(this.value, 0, ',');
							}
						}
					},
					tooltip: {
						formatter: function() {
							return ''+
								 this.x +': $'+ Highcharts.numberFormat(this.y, 0, ',');
						}
					},
					plotOptions: {
						area: {
							stacking: 'normal',
							lineColor: '#666666',
							lineWidth: 1,
							marker: {
								lineWidth: 1,
								lineColor: '#666666'
							}
						}
					},

					series: [{
						data: [635900, 527900, 482800, 575800, 975000, 1016500, 1120100],
						name: 'Top 10%'
					}, {
						data: [215900, 173500, 173200, 240600, 306800, 344900, 357500],
						name: '80–89.9 Percentile'
					}, {
						data: [108700, 109100, 101900, 142200, 165600, 175700, 204700],
						name: '60–79.9 Percentile'
					}, {
						data: [67800, 57200, 61900, 67900, 74600, 79600, 88400],
						name: '40–59.9 Percentile'
					}, {
						data: [39900, 40200, 46900, 44100, 45100, 37700, 37800],
						name: '20–39.9 Percentile'
					}, {
						data: [3100, 5700, 8100, 7300, 9200, 8100, 8800],
						name: 'Bottom 20%',
					}]
				});
});
}(jQuery));