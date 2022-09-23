
//轮播图01
window.onload = function () {
	let swiperContainer = document.getElementsByClassName('swiper-container')[0];
	let wrap = document.getElementsByClassName("swiper-wrapper")[0];
	let wrapImg = document.getElementsByClassName("swiper-wrapper")[0].getElementsByTagName('img')
	//获取屏幕的宽度
	let windowWidth = window.screen.width;
	let wrapImgLeng = wrapImg.length;
	let timer = null;
	let index = -1;
	//屏幕宽度
	for (let i = 0; i < wrapImgLeng; i++) {
		//   wrapImg[i].style.width = windowWidth +'px'
		wrapImg[i].style.width = '1903' + 'px'
	}
	//淡入淡出效果，用的是层级的一个循环
	function swiper() {
		clearInterval(timer);
		opacity = 1;
		if (++index == wrapImgLeng) {
			index = 0;
		}
		for (let i = 0; i < wrapImgLeng; i++) {
			wrapImg[i].style.opacity = 1;
			if (index != i) {
				wrapImg[i].style.zIndex = 1;
			}
		}
		timer = setInterval(function () {
			if (opacity <= 0) {
				clearInterval(timer);
				setTimeout(function () {
					swiper();
				}, 5000);
			}
			opacity -= 0.01;
			console.log(index)
			wrapImg[index].style.zIndex = 3;
			wrapImg[index].style.opacity = opacity;
			if (index == wrapImgLeng - 1) {
				wrapImg[0].style.zIndex = 2;
			} else {
				wrapImg[index + 1].style.zIndex = 2;
			}
		}, 30);
	}
	swiper();
}


// 提交
function isempty(){
	var res = $('#myinput').val()
	if(res.length>0){
		window.alert("没写内容")
	}else{
		window.alert("请输入内容")
	}
}


// 选项卡01
//获得导航的所有选项
var li = document.querySelectorAll(".nav1 ul li");
//获得内容的所有div
// var div = document.querySelectorAll(".content div")

var div = document.getElementsByClassName("xia09")

for (var i = 0; i < li.length; i++) {
	//关键 让li与div建立联系
	li[i].index = i;
	li[i].onmouseover = function () {
		//将所有选项样式清空，所有内容隐藏
		for (var j = 0; j < li.length; j++) {
			li[j].className = "";
			div[j].style.display = "none"
			// table[j].style.display = "none"
		}
		//为鼠标悬浮的选项设置样式 其对应的div显现出来
		this.className = "selected";
		div[this.index].style.display = "block";
		// table[this.index].style.display = "block";
	}
}
$(document).ready(function(){
	
	$('ul.tabs li').mouseenter(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})
  
  $('.left').mouseenter(function(){
    
    console.log("I am testing");
    
  })

})
$(window).scroll(function () {
	if ($(window).scrollTop() > 80) {
		$(".xiao").addClass("company_introduce");
	}
	if ($(window).scrollTop() > 120) {
		$(".wenben1").addClass("company_name");
	}

	if ($(window).scrollTop() > 1500) {
		$(".div01").addClass("company_name");
	}
	if ($(window).scrollTop() > 1500) {
		$(".div02").addClass("company_introduce");
	}
	if ($(window).scrollTop() > 1700) {
		$(".div03").addClass("company_name");
	}
	if ($(window).scrollTop() > 1700) {
		$(".div04").addClass("company_introduce");
	}
	if ($(window).scrollTop() > 900) {
		$(".zjbj-table , .t001	").addClass("company_introduce");
	}

})

// 轮播图02

// 0. 获取元素
// 0-0. 获取可视区域盒子
const banner = document.querySelector('.banner')
// 0-1. 获取承载图片的大盒子
const imgBox = document.querySelector('.imgBox')
// 0-2. 获取承载焦点的大盒子
const pointBox = document.querySelector('.pointBox')

// 0. 准备变量
// 0-1. 准备一个变量, 表示当前张图片的索引
let index = 0
// 0-2. 准备一个变量, 接受定时器返回值
let timer = 0

// 1. 设置焦点
setPoint()
function setPoint() {
	// 1-1. 拿到有多少个焦点
	const pointNum = imgBox.children.length

	// 1-2. 生成焦点插入
	const frg = document.createDocumentFragment()
	for (let i = 0; i < pointNum; i++) {
		const li = document.createElement('li')
		if (i === 0) li.classList.add('active')
		li.classList.add('point')
		li.dataset.i = i
		frg.appendChild(li)
	}
	pointBox.appendChild(frg)

	// 1-3. 调整宽度
	pointBox.style.width = pointNum * (20 + 10) + 'px'

	// 1-4. 调整 位置
	pointBox.style.marginLeft = pointNum * (20 + 10) * -0.5 + 'px'
}

// 2. 切换一张
// 利用参数
//   true  +1
//   false -1
//   否则  x = 参数
// 将来我们使用这个函数的时候, 只要传递 true 或者 false 或者 数字
function changeOne(type) {
	// 2-1. 让当前这一张消失
	// 目前当前这一张是谁, [index] 这一张
	imgBox.children[index].classList.remove('active')
	// 顺便把焦点干掉
	pointBox.children[index].classList.remove('active')

	// 2-2. 根据 type 参数调整 index
	if (type === true) {
		index++
	} else if (type === false) {
		index--
	} else {
		index = type
	}

	// 2-3. 不能让 index 超出边界
	if (index < 0) index = imgBox.children.length - 1
	if (index > imgBox.children.length - 1) index = 0

	// 2-4. 让下面准备的一张显示
	// 代码执行到这里, index 就表示下一张应该显示的索引了
	imgBox.children[index].classList.add('active')
	// 顺便把焦点干掉
	pointBox.children[index].classList.add('active')
}

// 3. 自动轮播
autoPlay()
function autoPlay() {
	// 3-1. 开启定时器
	timer = setInterval(() => changeOne(true), 5000)
}



// 5. 点击事件
bindEvent()
function bindEvent() {
	// 5-1. 给banner 进行事件绑定
	banner.addEventListener('click', e => {
		const t = e.target

		// 判断
		if (t.className === 'prev') changeOne(false)

		if (t.className === 'next') changeOne(true)

		if (t.className === 'point') changeOne(t.dataset.i - 0)
	})
}


//Tab		嵌套的   轮播图
var Box = document.querySelector('#box'), pic = Box.querySelectorAll('.pic'),
Idx = 0, INdex = 0, Timer = null,
ltDiv = Box.querySelector('.leftbar'), btDiv = Box.querySelector('.bottombar'),
Img = Box.querySelectorAll('img');

function createBtBar(len) {//动态创建底部切换按钮
var str = '';
for (var i = 0; i < len; i++) {
	str += `<div>${i + 1}</div>`;
}
btDiv.innerHTML = str;
btDiv.children[0].classList.add('checked');
}

function initialize() {//页面初始状态
createBtBar(pic[0].children.length);
}
initialize();

function clearZindex() {//重置所有图片的定位层级
for (var k = 0; k < Img.length; k++) {
	Img[k].classList.remove('show');
}
}

ltDiv.addEventListener('click', (e) => {//Tab栏项目切换
if (e.target.tagName.toLowerCase() === 'div') {
	for (var j = 0; j < ltDiv.children.length; j++) {
		ltDiv.children[j].classList.remove('checked');
	}

	clearZindex();
	Idx = 0;
	INdex = getEleIdx(e.target);
	ltDiv.children[INdex].classList.add('checked');
	pic[INdex].children[0].classList.add('show');
	createBtBar(pic[INdex].children.length);
}
});

btDiv.addEventListener('click', (e) => {//委托监听底部切换按钮
if (e.target.tagName.toLowerCase() === 'div') {
	function changePic(callback) {
		btDiv.children[Idx].classList.remove('checked');

		clearZindex();
		callback && callback();
		btDiv.children[Idx].classList.add('checked');
		pic[INdex].children[Idx].classList.add('show');
	}
	changePic(function () {
		Idx = getEleIdx(e.target);
	});
}
});

function getEleIdx(item) {//获取DOM元素下标
var elements = item.parentNode.children;
for (var i = 0, len = elements.length; i < len; i++) {
	if (item === elements[i]) {
		return i;
	}
}
}

function loopShow() {//循环自动展示
clearInterval(Timer);
Timer = setInterval(function () {
	pic[INdex].children[Idx].classList.remove('show');
	btDiv.children[Idx].classList.remove('checked');
	Idx += 1;
	if (Idx < 0 || Idx > pic[INdex].children.length - 1) {
		Idx = 0;
	}
	pic[INdex].children[Idx].classList.add('show');
	btDiv.children[Idx].classList.add('checked');
}, 3000);
}

loopShow();

Box.addEventListener('mouseover', function () {
clearInterval(Timer);//鼠标移入展示区停止轮播
});
Box.addEventListener('mouseout', function () {
loopShow();//鼠标移出展示区自动轮播
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

// var items = document.getElementsByClassName('item');//图片
// var points = document.getElementsByClassName("point");//点
// var goPreBtn = document.getElementById('goPre');
// var goNextBtn = document.getElementById('goNext');
// var Index = 0; //index表示第几张图片在展示----》第 index 张图片有active这个类名 第几个在展示
// var clearActive = function () {
// 	for (var i = 0; i < items.length; i++) {
// 		items[i].className = 'item';
// 	}
// 	for (var i = 0; i < points.length; i++) {
// 		points[i].className = 'point';
// 	}
// }
// var goIndex = function () {
// 	clearActive();
// 	console.log(Index);
// 	points[Index].className = 'point active';
// 	items[Index].className = 'item active';
// }
// var goNext = function () {
// 	if (Index < 2) {
// 		Index++;
// 	} else {
// 		Index = 0;
// 	}
// 	goIndex();
// }
// var goPre = function () {
// 	if (Index == 0) {
// 		Index = 2;
// 	} else {
// 		Index--;
// 	}
// 	goIndex();
// }
// goNextBtn.addEventListener('click', function () {
// 	goNext()
// })
// goPreBtn.addEventListener('click', function () {
// 	goPre()
// })
// for (var i = 0; i < points.length; i++) {
// 	points[i].addEventListener('click', function () {
// 		var pointIndex = this.getAttribute('data-index');
// 		index = pointIndex;
// 		goIndex();
// 	})
// }



// $(".selected").mouseenter(function () {
// 	var items = document.getElementsByClassName('item');//图片
// 	var points = document.getElementsByClassName("point");//点
// 	var goPreBtn = document.getElementById('goPre');
// 	var goNextBtn = document.getElementById('goNext');
// 	var index = 0; //index表示第几张图片在展示----》第 index 张图片有active这个类名 第几个在展示
// 	var clearActive = function () {
// 		for (var i = 0; i < items.length; i++) {
// 			items[i].className = 'item';
// 		}
// 		for (var i = 0; i < points.length; i++) {
// 			points[i].className = 'point';
// 		}
// 	}
// 	var goIndex = function () {
// 		clearActive();
// 		console.log(index);
// 		points[index].className = 'point active';
// 		items[index].className = 'item active';
// 	}
// 	var goNext = function () {
// 		if (index < 2) {
// 			index++;
// 		} else {
// 			index = 0;
// 		}
// 		goIndex();
// 	}
// 	var goPre = function () {
// 		if (index == 0) {
// 			index = 2;
// 		} else {
// 			index--;
// 		}
// 		goIndex();
// 	}
// 	goNextBtn.addEventListener('click', function () {
// 		goNext()
// 	})
// 	goPreBtn.addEventListener('click', function () {
// 		goPre()
// 	})
// 	for (var i = 0; i < points.length; i++) {
// 		points[i].addEventListener('click', function () {
// 			var pointIndex = this.getAttribute('data-index');
// 			index = pointIndex;
// 			goIndex();
// 		})
// 	}
// })