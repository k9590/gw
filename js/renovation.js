$(window).scroll(function () {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 90) {
        $(".hui").removeClass("HT2");
        $(".HR1").addClass("company_name");
        $(".xhx").removeClass("HT2");
    }
    if ($(window).scrollTop() > 200) {
        $(".hui").removeClass("HT3");
        $(".HR2").addClass("company_introduce");
        $(".xhx").removeClass("HT3");
    }
});



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
