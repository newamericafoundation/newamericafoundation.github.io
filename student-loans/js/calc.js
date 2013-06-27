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
var bill_interest_sub = 3.66;
var obama_interest_sub = 2.74;
var extension_interest_sub = 3.4;
var bill_interest_unsub = 3.66;
var obama_interest_unsub = 4.74;
var extension_interest_unsub = 6.8;
var months = 120;

function PMT(i, n, p) {
 return i * p * Math.pow((1 + i), n) / (1 - Math.pow((1 + i), n));
}

$(function(){
    $('#loan-sub').change(function(){
        $(this).val('$'+commasNumber($(this).val().replace(/[^0-9\.]/g, '')));        
    })
    $('#loan-unsub').change(function(){
        $(this).val('$'+commasNumber($(this).val().replace(/[^0-9\.]/g, '')));        
    })
    $("#calc").click(function() {
        var sub_loan = $("#loan-sub").attr("value");
        var unsub_loan = $("#loan-unsub").attr("value");
        sub_loan = sub_loan.replace(/[^0-9\.]/g, '');
        unsub_loan = unsub_loan.replace(/[^0-9\.]/g, '');
		 if ($('#loan_sub').attr("value") > 5000) {
			 var sub_loan = 5000;
			 $("loan_sub").text('$5,000'); 
		 };
        if (!sub_loan) {
		  $("#output").html("<span style='text-color:red'>Couldn't understand your loan total.</span>");
        } else {
			$('#bottom').show();
			$("#bill .interest .subsidized").text(bill_interest_sub + '%');
			$("#obama .interest .subsidized").text(obama_interest_sub + '%');
			$("#extension .interest .subsidized").text(extension_interest_sub + '%');
			$("#bill .interest .unsubsidized").text(bill_interest_unsub + '%');
			$("#obama .interest .unsubsidized").text(obama_interest_unsub + '%');
			$("#extension .interest .unsubsidized").text(extension_interest_unsub + '%');
			var bill_i_sub = bill_interest_sub / 1200;
			var obama_i_sub = obama_interest_sub / 1200;
			var extension_i_sub = extension_interest_sub / 1200;
			var bill_i_unsub = bill_interest_unsub / 1200;
			var obama_i_unsub = obama_interest_unsub / 1200;
			var extension_i_unsub = extension_interest_unsub / 1200;
			var n = months;
			var p_sub = sub_loan;
			var p_unsub = unsub_loan;
			var bill_pmt_sub = PMT(bill_i_sub, n, -p_sub);
			var obama_pmt_sub = PMT(obama_i_sub, n, -p_sub);
			var extension_pmt_sub = PMT(extension_i_sub, n, -p_sub);
			var bill_pmt_unsub = PMT(bill_i_unsub, n, -p_unsub);
			var obama_pmt_unsub = PMT(obama_i_unsub, n, -p_unsub);
			var extension_pmt_unsub = PMT(extension_i_unsub, n, -p_unsub);
			var bill_payment = bill_pmt_sub + bill_pmt_unsub;
			var obama_payment = obama_pmt_sub + obama_pmt_unsub;
			var extension_payment = extension_pmt_sub + extension_pmt_unsub;
			$("#bill .payment .numb").text('$' + bill_payment.toFixed(2));
			$("#obama .payment .numb").text('$' + obama_payment.toFixed(2));
			$("#extension .payment .numb").text('$' + extension_payment.toFixed(2));
			var bill_total = ((bill_pmt_sub + bill_pmt_unsub) * months) - sub_loan;
			var obama_total = ((obama_pmt_sub + obama_pmt_unsub) * months) - sub_loan;
			var extension_total = ((extension_pmt_sub + extension_pmt_unsub) * months) - sub_loan;
			var bill_total_clean = Math.floor(bill_total);
			var obama_total_clean = Math.floor(obama_total);
			var extension_total_clean = Math.floor(extension_total);
			$("#bill .totals .monthly .numb").text('$' +commasNumber(Math.floor(bill_total_clean)));
			$("#obama .totals .monthly .numb").text('$' +commasNumber(Math.floor(obama_total_clean)));
			$("#extension .totals .monthly .numb").text('$' +commasNumber(Math.floor(extension_total_clean)));
			var bill_loan = (bill_pmt_sub + bill_pmt_unsub) * months;
			var obama_loan = (obama_pmt_sub + bill_pmt_unsub) * months;
			var extension_loan = (extension_pmt_sub + bill_pmt_unsub) * months;
			$("#bill .totals .total .numb").text('$' +commasNumber(Math.floor(bill_loan)));
			$("#obama .totals .total .numb").text('$' +commasNumber(Math.floor(obama_loan)));
			$("#extension .totals .total .numb").text('$' +commasNumber(Math.floor(extension_loan)));
        }
	});
});
