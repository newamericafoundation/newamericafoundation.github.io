function commasNumber(n){
    s = ''+n;
    out = '';
    for(var i=s.length-1;i>=0;i--){
        out=s.substring(i,i+1)+out;
        if((s.length-i)%3==0 && i!=0){
            out=','+out;
        }
    }
    return out
}
var naf_interest = 4.81;
var naf_impact = 2;
var months = 120;

function PMT(i, n, p) {
 return i * p * Math.pow((1 + i), n) / (1 - Math.pow((1 + i), n));
}

$(function(){
//    var ocTime;
    $('#loan').change(function(){
        $(this).val('$'+commasNumber($(this).val().replace(/[^0-9\.]/g, '')));        
    })
    $("#calc").click(function() {
        var your_loan = $("#loan").attr("value");
        your_loan = your_loan.replace(/[^0-9\.]/g, '');
        if (!your_loan) {
		  $("#output").html("<span style='text-color:red'>Couldn't understand your loan total.</span>");
        } else {
			$('#bottom').show();
			$("#naf .interest .numb").text(naf_interest + '%');
			var i = naf_interest / 1200;
			var n = months;
			var p = your_loan;
			var pmt = PMT(i, n, -p);
			$("#naf .payment .numb").text('$' + pmt.toFixed(2));
			var total_interest = (pmt * months) - your_loan;
			var total_interest_clean = Math.floor(total_interest);
			$("#naf .totals .monthly .numb").text('$' + total_interest_clean.toFixed(2));
			var total_loan = pmt * months;
			$("#naf .totals .total .numb").text('$' + total_loan.toFixed(2));
			$("#naf .impact .numb").text('$' + naf_impact + 'B');
        }
	});
});
