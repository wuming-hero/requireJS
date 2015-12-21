/**
 * AMD模块的写法2(模块自身需要依赖其他模块)
 * 如果这个模块还依赖其他模块，那么define()函数的第一个参数，必须是一个数组，指明该模块的依赖性。
 */

define(['jquery'], function($){
	alert($().jquery);
	var addOne = function(id, value){
		$('#'+id).html(value);
	}
	return {
		addOne: addOne
	}
})