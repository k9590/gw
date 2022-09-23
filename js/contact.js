// 返回顶部按钮

window.onscroll = function () {
	var currentHeight =
		document.documentElement.scrollTop ||
		window.pageYOffset ||
		document.body.scrollTop;
	console.log(currentHeight, "currentHeight");
	if (currentHeight > 300) {
		document.getElementById('backtop').style.display = 'block'
	} else {
		document.getElementById('backtop').style.display = 'none'
	}
}

function scrollToTop() {
	var topHeight =
		document.documentElement.scrollTop ||
		window.pageYOffset ||
		document.body.scrollTop;
	var speed = topHeight / 10 > 100 ? topHeight / 10 : 100;
	scrollBy(0, -speed);
	// 模拟鼠标向上滚动事件
	scrolldelay = setTimeout('scrollToTop()', 50);
	// 清除滚动事件，避免无法向下移动
	if (topHeight === 0) {
		clearTimeout(scrolldelay);
		scrolldelay = null;
	}
}


$(window).scroll(function () {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 10) {
        $(".ditu").addClass("company_introduce");
    }
   
});
