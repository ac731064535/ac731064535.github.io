function onload() {
    var sw = window.innerWidth;
    var BASE_WIDTH = 640;
    var rootStyle = document.documentElement.style;
    var rem = 20;
    rem *= sw / BASE_WIDTH;
    /*if(sw  > BASE_WIDTH) {
      rem *= sw / BASE_WIDTH;
    } else {
      rem *= sw / BASE_WIDTH;
    }*/
    console.log('sw：'+sw+'，base-w：' + BASE_WIDTH);
    rootStyle.fontSize = rem + 'px';
}
onload()

window.addEventListener("orientationchange", function() {
    onload()
}, false)
