/**
 * AMD模块的写法
 * （就是模块必须采用特定的define()函数来定义。如果一个模块不依赖其他模块，那么可以直接定义在define()函数之中）
 */

define(function(){
	var add = function(a, b){
		return a + b;
	};
	
	return {
		add: add
	}
});


