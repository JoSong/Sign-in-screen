$('button').on('click',function(e){

$('.modal').fadeIn();

});

$('.close').on('click',function(e){

$('.modal').fadeOut();
});



$('.submit').focus(function(e){

if($('input').val() =="")
{
	$('input').addClass('error')
}

});

$('input').keydown(function(e){

	if($('input').val() !== "")
	{
		
		$('input').removeClass('error')
	}


});