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
	                formatter: function() {
	                    return '<b>'+ this.point.name +'</b>: '+ this.y + '%';
	                }
	            },
	            plotOptions: {
	                pie: {
	                    allowPointSelect: true,
	                    cursor: 'pointer',
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
	                    ['Homeownership', 36],
	                    ['Retirement', 30],
						['Savings and Investment', 21],
	                    // {
	                    // 	                        name: 'Savings and Investment',
	                    // 	                        y: 21,
	                    // 	                        sliced: true,
	                    // 	                        selected: true
	                    // 	                    },
	                    ['Post-secondary education', 13],
	                    ['Entrepreneurship', 1]
	                ]
	            }]
	        });
}