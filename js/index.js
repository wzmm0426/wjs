whatScreen();

// 屏幕的宽度改变之后 会自动触发
onresize=function () {
  whatScreen();
  
}
function whatScreen() {
  var width = document.querySelector("html").offsetWidth;
  var title = document.querySelector("title");
  if (width <= 768) {
    title.innerHTML = "极小屏幕-" + width;
  } else if (width > 768 && width <= 992) {
    title.innerHTML = "小屏幕-" + width;
  } else if (width > 992 && width <= 1200) {
    title.innerHTML = "普通屏幕-" + width;
  } else if (width > 1200) {
    title.innerHTML = "大屏幕-" + width;
  }
}
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

var ul=$(".buy .nav-tabs")
var lis=ul.find("li");
var totalWidth=0;
lis.each(function (i,v) {
  totalWidth=totalWidth+$(v).innerWidth()
  console.log($(v).innerWidth());
})
console.log("totalWidth:"+totalWidth);