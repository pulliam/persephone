jQuery(document).ready(function(){
    
var $moneyBox = $('.money');
var $moneyInChecking = $('.ofchecking');
var $moneyInSavings = $('.ofsavings');
var $insertAmount = $('.amount-box');
var $insertAmountChecking = $('.amount-checking')
var $insertAmountSavings = $('amount-savings')
var $DepositChecking = $('deposit-checking');
var $DepositSavings = $('deposit-savings');
var $WithDrawChecking = $('withdraw-checking');
var $WithDrawSavings = $('withdraw-savings');
var checkingBalance = 0;
var savingsBalance = 0;
$moneyInChecking.text('$ ' + checkingBalance);
$moneyInSavings.text('$ ' + savingsBalance);
var howMuchImAddingtoSavings = parseInt($insertAmountChecking.val());
var howMuchImAddingtoChecking = parseInt($insertAmountSavings.val());

var depositOnChecking = function(){
	checkingBalance += howMuchImAddingtoChecking;
	$moneyInChecking.text('$ ' + checkingBalance);
}
});
