/**
 * Created by Administrator on 2016/8/21.
 */
window.onload=function(){
    var mySwiper = new Swiper('.slider-touch', {
        autoplay: 2000,//可选选项，自动滑动,手指触屏滑动会自动停止轮播
        autoplayDisableOnInteraction: false,//手指触屏滑动之后，重新开启自动轮播
        pagination: ".swiper-pagination", //下面的图标跟随切换
        loop: true,//无缝轮播 自动在li列表前面添加最后一个，再最后一个添加第一个
        speed: 1000,
        observer: true,//当li节点被修改的时候自动初始化swiper
        observeParents: true,//当容器container宽度改变的时候
        initialSlide: 0, //初始化slider的索引
        grabCursor: true //手指抓手形状
    });
    var mySwiper1 = new Swiper('.advert-pro1', {
        autoplay: 2000,//可选选项，自动滑动,手指触屏滑动会自动停止轮播
        pagination: ".swiper-pagination1", //下面的图标跟随切换
        loop: true,//无缝轮播 自动在li列表前面添加最后一个，再最后一个添加第一个
        speed: 1000,
        observer: true,//当li节点被修改的时候自动初始化swiper
        observeParents: true,//当容器container宽度改变的时候
        initialSlide: 0, //初始化slider的索引
    });
    var mySwiper2 = new Swiper('.advert-pro2', {
        autoplay: 2000,//可选选项，自动滑动,手指触屏滑动会自动停止轮播
        pagination: ".swiper-pagination2", //下面的图标跟随切换
        loop: true,//无缝轮播 自动在li列表前面添加最后一个，再最后一个添加第一个
        speed: 1000,
        observer: true,//当li节点被修改的时候自动初始化swiper
        observeParents: true,//当容器container宽度改变的时候
        initialSlide: 0, //初始化slider的索引
    });
    var mySwiper3 = new Swiper('.advert-pro3', {
        autoplay: 2000,//可选选项，自动滑动,手指触屏滑动会自动停止轮播
        pagination: ".swiper-pagination3", //下面的图标跟随切换
        loop: true,//无缝轮播 自动在li列表前面添加最后一个，再最后一个添加第一个
        speed: 1000,
        observer: true,//当li节点被修改的时候自动初始化swiper
        observeParents: true,//当容器container宽度改变的时候
        initialSlide: 0, //初始化slider的索引
    });
    var mySwiper4 = new Swiper('.secskill-content', {
        speed: 1000,
        observer: true,//当li节点被修改的时候自动初始化swiper
        observeParents: true,//当容器container宽度改变的时候
        initialSlide: 0, //初始化slider的索引
        slidesPerView : 3 //一个ul显示三张图片
    });
    var gotop=document.getElementById("goTop");
        gotop.onclick=function(e){
            e.preventDefault();
            scrollTop(0);
        };
    document.addEventListener("scroll",scrollEvent,false);
//倒计时
    //设置结束时间
    var endTime = new Date();
    endTime.setFullYear(2016);
    endTime.setMonth(8);
    endTime.setDate(29);
    endTime.setHours(23);
    endTime.setMinutes(0);
    endTime.setSeconds(0);
    var endTimer = endTime.getTime();//获取结束时间
    //console.log(endTimer);
    var secskill_hour = document.getElementById("secskill-hour");
    var secskill_min = document.getElementById("secskill-min");
    var secskill_sec = document.getElementById("secskill-sec");
    //转换时间
    function changeTime(time,obj1,obj2,obj3){
        var nowTime = new Date();
        var sec = (time - nowTime.getTime())/1000;
        //console.log(sec);
        if (sec > 0)
        {
            var hour = Math.floor(sec/3600);//小时
            sec = sec%3600;//剩下多少毫秒
            var min = Math.floor(sec/60);//分钟
            sec = Math.floor(sec%60);//秒
            obj1.innerHTML = addZero(hour,2);
            obj2.innerHTML = addZero(min,2);
            obj3.innerHTML = addZero(sec,2);
        }else{
            clearInterval(timer);
        }
    }
    var timer = setInterval(function(){
        changeTime(endTimer,secskill_hour,secskill_min,secskill_sec);
    },1000);
    changeTime(endTimer,secskill_hour,secskill_min,secskill_sec);

    //补零功能
    function addZero(time,n){
        var str = '' + time;
        while (str.length < n)
        {
            str = "0" + time;
        }
        return str;
    }
};
function scrollEvent(e){
    var curScrollTop=scrollTop();
    var search=document.getElementById("search");
    var gotop=document.getElementById("goTop");
    console.log("curScrollTop:"+curScrollTop);
    if(curScrollTop>0){
        search.style.backgroundColor="rgba(208,55,67,0.85)";
    }
    else {
        search.style.backgroundColor="rgba(0,0,0,0)";;
    }
    if(curScrollTop>350){
        gotop.style.display="block";
    }
    else {
        gotop.style.display="none";
    }
}
function scrollTop(distance) {
    var scrollPos;
    if (window.pageYOffset) {
        if(distance||distance==0){
            window.pageYOffset=distance;
        }
        else {
            scrollPos = window.pageYOffset;
        }

    } else if (document.compatMode && document.compatMode != 'BackCompat') {
        if(distance||distance==0) {
            document.documentElement.scrollTop=distance;
        }
        else {
            scrollPos = document.documentElement.scrollTop;
        }
    } else if (document.body) {
        if(distance||distance==0){
            document.body.scrollTop=distance;
        }
        else {
            scrollPos = document.body.scrollTop;
        }
    }
    if(scrollPos){
        return scrollPos;
    }
}

