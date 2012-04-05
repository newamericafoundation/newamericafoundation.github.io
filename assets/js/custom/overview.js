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
						$('#graphTooltip').append('<div><small>Numbers in billions</small><br/><b>'+ this.point.name +'</b>: $'+ Highcharts.numberFormat(this.y, 1) + '<br/> ('+ Highcharts.numberFormat(this.percentage,1) +'%)</div>');
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
	                data: [{
	                    name: 'Homeownership',
						y: 198.9
						},{
						name: 'Retirement',
						y: 165.4,
						color: '#2E1717'
						},{
						name: 'Savings and Investment',
						y: 115.4
						},{
	                    name:'Post-secondary education',
						y: 67.6
						},{
	                    name:'Entrepreneurship',
						y: 0.6
					}]
	            }]
	        });
}