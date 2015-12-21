
require.config({
	baseUrl: 'js/test/',  // 必须从项目根目录开始
	paths: {
		'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min',
		'math': 'math',
		'test': 'test'
	}
});

require(['jquery'], function($){
//	alert($().jquery);
	$('#a').click(function(){
		var value = $(this).html();
		console.log(value);
		$(this).html(parseFloat(value) + 1); 
	})
});

require(['jquery', 'math', 'test'], function($, math, test){
	$('#a').click(function(){
		var value = $(this).html();
		console.log(value);
		$(this).html(parseFloat(value) + 1); 
	});
	console.log('1111111111111');
	var a = math.add(5, 2);
	test.addOne('a', a);
});
