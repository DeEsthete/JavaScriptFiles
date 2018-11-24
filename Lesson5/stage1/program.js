//$('form').submit(function() {
//	var log = $('#logInp');
//	var pas = $('#pasInp');
//	if (log.val() != pas.val())
//		{
//			$('#logInp').css('border', '1px solid red');
//			$('#pasInp').css('border', '1px solid red');
//			return false;
//		}
//	else
//		{
//			return true;
//		}
//});
//$('#logInp').focus(function() {
//	$('#logInp').css('border', '1px solid black');
//});
//$('#pasInp').focus(function() {
//	$('#pasInp').css('border', '1px solid black');
//});

$('input').click(function(){
	$('div').animate({
		border:'1px solid green', 
		background:'Blue',
		height: '10000px'
	}, 5000);
});