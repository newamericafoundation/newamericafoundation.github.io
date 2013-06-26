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
var bill_interest = 3.66;
//var naf_interest = 4.81;
var obama_interest = 2.74;
var extension_interest = 3.4;
var months = 120;

function PMT(i, n, p) {
 return i * p * Math.pow((1 + i), n) / (1 - Math.pow((1 + i), n));
}

$(function(){
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
			$("#bill .interest .numb").text(bill_interest + '%');
			$("#obama .interest .numb").text(obama_interest + '%');
			$("#extension .interest .numb").text(extension_interest + '%');
//			$("#naf .interest .numb").text(naf_interest + '%');
			var bill_i = bill_interest / 1200;
			var obama_i = obama_interest / 1200;
			var extension_i = extension_interest / 1200;
//			var naf_i = naf_interest / 1200;
			var n = months;
			var p = your_loan;
			var bill_pmt = PMT(bill_i, n, -p);
			var obama_pmt = PMT(obama_i, n, -p);
			var extension_pmt = PMT(extension_i, n, -p);
//			var naf_pmt = PMT(naf_i, n, -p);
			$("#bill .payment .numb").text('$' + bill_pmt.toFixed(2));
			$("#obama .payment .numb").text('$' + obama_pmt.toFixed(2));
			$("#extension .payment .numb").text('$' + extension_pmt.toFixed(2));
//			$("#naf .payment .numb").text('$' + naf_pmt.toFixed(2));
			var bill_total = (bill_pmt * months) - your_loan;
			var obama_total = (obama_pmt * months) - your_loan;
			var extension_total = (extension_pmt * months) - your_loan;
//			var naf_total = (naf_pmt * months) - your_loan;
			var bill_total_clean = Math.floor(bill_total);
			var obama_total_clean = Math.floor(obama_total);
			var extension_total_clean = Math.floor(extension_total);
//			var naf_total_clean = Math.floor(naf_total);
			$("#bill .totals .monthly .numb").text('$' +commasNumber(Math.floor(bill_total_clean)));
			$("#obama .totals .monthly .numb").text('$' +commasNumber(Math.floor(obama_total_clean)));
			$("#extension .totals .monthly .numb").text('$' +commasNumber(Math.floor(extension_total_clean)));
//			$("#naf .totals .monthly .numb").text('$' +commasNumber(Math.floor(naf_total_clean)));
			var bill_loan = bill_pmt * months;
			var obama_loan = obama_pmt * months;
			var extension_loan = extension_pmt * months;
//			var naf_loan = naf_pmt * months;
			$("#bill .totals .total .numb").text('$' +commasNumber(Math.floor(bill_loan)));
			$("#obama .totals .total .numb").text('$' +commasNumber(Math.floor(obama_loan)));
			$("#extension .totals .total .numb").text('$' +commasNumber(Math.floor(extension_loan)));
//			$("#naf .totals .total .numb").text('$' +commasNumber(Math.floor(naf_loan)));
        }
	});
});
