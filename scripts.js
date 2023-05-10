function btlrental(buytoletcalcrental) {
    var p= document.getElementById("rental_monthly_simple_cover").value;
    if ((test2(p)==true)&&p!=0) { var p = parseFloat(document.getElementById("rental_monthly_simple_cover").value);}
    else { alert( 'Monthly rental must not contain non numerical characters, except decimal points and cannot equal zero'); document.getElementById("rental_monthly_simple_cover").focus(); return false; }
    var b= document.getElementById("interest_rate_simple_cover").value;
    if ((test2(b)==true)&&b!=0) { var b = parseFloat(document.getElementById("interest_rate_simple_cover").value);}
    else { alert( 'Interest rate must not contain non numerical characters, except decimal points and cannot equal zero'); document.getElementById("interest_rate_simple_cover").focus(); return false; }
    var c= document.getElementById("coverage_percentage").value;
    if ((test2(c)==true)&&c!=0) { var c = parseFloat(document.getElementById("coverage_percentage").value);}
    else { alert( 'Rental coverage must not contain non numerical characters, except decimal points and cannot equal zero5'); document.getElementById("coverage_percentage").focus(); return false; }
    var coverage=c/100;
    var interest=b/100;
    var maxpayment=p/coverage;
    var maxpaymentannual=maxpayment*12;
    var maxloan=maxpaymentannual/interest;
    var maxloan2=maxloan.toFixed(2);
    document.getElementById('maximum_loan').value ='£'+maxloan2;
    }