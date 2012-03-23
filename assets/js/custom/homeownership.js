// JavaScript Document
function homeowernship(){
		$('#netWorth').click(function(){
			$('.btn-home').removeClass('disabled');
			$(this).addClass('disabled');
			switchGraph('netWorth')
			
		});
		$('#recessionLoss').click(function(){
			switchGraph('recessionLoss')
			$('.btn-home').removeClass('disabled');
			
			$(this).addClass('disabled');
		});
		$('#equityLoss').click(function(){
			switchGraph('equityLoss')
			$('.btn-home').removeClass('disabled');
			
			$(this).addClass('disabled');
		});
	
}//end homeownership

	var titles = {
		netWorth:{
		'barWhite':['99','$134,992'],
		'barHispanic':['25','$18,359'],
		'barBlack':['20','$12,124']
	},
		recessionLoss:{
		'barWhite':['16','16%'],
		'barHispanic':['66','66%'],
		'barBlack':['53','53%']
	},
		equityLoss:{
		'barWhite':['83','83%'],
		'barHispanic':['96','96%'],
		'barBlack':['90','90%']
	}
}
