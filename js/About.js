$(window).scroll(function () {
    console.log($(window).scrollTop());

    if ($(window).scrollTop() > 200) {

        $(".xxx1").addClass("company_name");
    }
    if ($(window).scrollTop() > 100) {
        $(".xxx2").addClass("company_introduce");
    }
    // 底部四个div
    if ($(window).scrollTop() > 400) {
        $(".div01").addClass("company_name");
    }
    if ($(window).scrollTop() > 400) {
        $(".div02").addClass("company_introduce");
    }
    if ($(window).scrollTop() > 620) {
        $(".div03").addClass("company_name");
    }
    if ($(window).scrollTop() > 620) {
        $(".div04").addClass("company_introduce");
    }
});


// 返回顶部按钮
function goTop() {
    $(window).scroll(function (e) {
        //若滚动条离顶部大于100元素
        if ($(window).scrollTop() > 100)
            $("#gotop").fadeIn(1000);//以1秒的间隔渐显id=gotop的元素
        else
            $("#gotop").fadeOut(1000);//以1秒的间隔渐隐id=gotop的元素
    });
};
$(window).scroll(function () {
    console.log($(window).scrollTop());
    if ($(window).scrollTop() > 20) {
        $("#huad1").css({
            display: 'block'
            // display: 'b'
        })
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
