function $(s){
	'use strict';
	return document.querySelectorAll(s);
}

var container = $('.container')[0],
	times = 3,
	redirecturl = 'http://www.baidu.com';

var doCountDown = function (){
	'use strict';
	if(times === 0){
		location.href = redirecturl;
	}
	$('.login-success .notice span')[0].innerHTML = times;
	times --;
};

function login(){
	'use strict';
	container.style.cssText = 'transform: rotateY(180deg); opacity: 0; transition: opacity 700ms ease-in, transform 700ms ease-in; -webkit-transition: opacity 700ms ease-in, transform 700ms ease-in;';
	setTimeout(function(){
		container.style.cssText = 'transform: rotateY(360deg); opacity: 1; transition: opacity 700ms ease-out, transform 700ms ease-out; -webkit-transition: opacity 700ms ease-out, transform 700ms ease-out;';
		container.className = 'container login-success';
	}, 700);
	$('.after-login .avatar')[0].src = 'images/avatar.jpg';
	setTimeout(function(){
		setInterval(doCountDown, 1000);
	},1000);
}
