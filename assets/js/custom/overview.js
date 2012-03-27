function overview(){

	var chart;
	chart = new Highcharts.Chart({
	            chart: {
	                renderTo: 'mainPieChart',
	                plotBackgroundColor: null,
	                plotBorderWidth: null,
	                plotShadow: false
	            },
	            tooltip: {
					// can't just disable the tooltips you need to actually hide the style
					borderWidth: 0,
					backgroundColor:'transparent',
					shadow:false,
	                formatter: function() {
						$('#graphTooltip').empty();
						$('#graphTooltip').append('<div><small>Numbers in millions</small><br/><b>'+ this.point.name +'</b>: $'+ Highcharts.numberFormat(this.y, 0) + '<br/> ('+ Highcharts.numberFormat(this.percentage,1) +'%)</div>');
	                    // return '<b>'+ this.point.name +'</b>: '+ this.y + '%';
	                }
	            },
	            plotOptions: {
	                pie: {
	                    allowPointSelect: true,
	                    cursor: 'pointer',
						borderWidth: 2,
	                    dataLabels: {
	                        enabled: false,
							distance: 10,
	                        color: '#000000',
							softConnector:false,
	                        connectorColor: '#000000',
	                        formatter: function() {
	                            return '<b>'+ this.point.name +'</b>: '+ this.y + '%';
	                        }
	                    }
	                }
	            },
	            series: [{
	                type: 'pie',
	                name: '',
	                data: [
	                    ['Homeownership', 198941],
	                    ['Retirement', 165430],
						['Savings and Investment', 115422],
	                    ['Post-secondary education', 67607],
	                    ['Entrepreneurship', 602]
	                ]
	            }]
	        });
}