$(document).ready(function() {
    $(".js-menuBtn").bind("click",function(){
        $(".js-menuBtn").removeClass("active");
        $(this).addClass("active");
        myscroll($(this).data("page"));
    });
    var voice = document.createElement("Audio");
        //var path = document.createAttribute()
        //设置路径属性以及路径属性值
        voice.setAttribute("src","media/Time_Travel.mp3");
        //设置autoplay属性，值为autoplay，让音频加载好就播放
        voice.setAttribute("autoplay","autoplay");

    function myscroll(type) {
        var $pageHeight = $("#"+type).offset().top-100;
        $("body,html").animate({
            scrollTop : $pageHeight
        },400);
    }
    $(window).scroll(function(){
        if($(window).scrollTop() > 20) {
            $(".top").css("display","block");
        } else {
           $(".top").css("display","none");
        }
    });
    $(".top").bind("click",function(){
       $("body,html").animate({
            scrollTop : 0
        },400);
    });
   
});
