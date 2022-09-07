$(function(){
    
  
    //  头像
	
    // 	信息导航
	
    
    
    var winwh = parseInt($(window).width());
    if(winwh > 768){
        //添加HTML代码
        $('body').append(nav);
        $('body').append(footer);
         
        //修改源HTML代码
        $(".layout").css({"width":"85%","margin-left":"15%","right":"0"});
        $(".ant-divider-horizontal").css({"background-color":"rgba(0,0,0,0)"});
        $(".footer").css({"margin-bottom":"120px",});
        $(".footer div").hide();
        $(".footer button").css({"width":"120px","height":"30px","background-color":"#4ac8ff","border-radius":"3px","color":"#F9f9f9","letter-spacing":"2px"});
        $(".footer button").html("重构文档");
        $(".header").css({"width":"96%","position":"relative","padding-left":"7%"});
        $(".header a").hide();
        $(".ant-space").css({"width":"100%","height":"60px",});
        $(".header button").css({"position":"absolute","top":"10px","right":"10%","width":"40px","height":"40px","background-color":"#4ac8ff","border":"0","border-radius":"8px"});
        $(".path").css({"width":"96%","margin":"0 auto","padding-left":"7.2%"});
        $(".ant-breadcrumb-link path").addClass("iconfont icon-wenjian1");
        $(".ant-table-column-title").css({"padding-left":"-20%","box-sizing":"box-border"});
        $(".files").css({"padding-left":"8%","padding-right":"10%"});
    }
    
})


// 内置特效代码
$(function(){
    //二维码高度设置
	var ulwidth = $(".nav_ul_code").width();
	$(".nav_ul_code").height(ulwidth);
})



// JS生成二维码
$(function(){
    $(".but_qrcode").click(function(){
        
        // 替换图片
        $(".qrcode_img").attr("src", "https://pan.xvx88.cn/d/EonHide/File/Xpan/xpan_iphon.png?pw=c72c316ea6f35c07");
        
        // 点击二维码显示隐藏
        var codetop = parseInt($(".nav_ul_code").css("margin-top"));
        if(codetop == 10){
            $(".nav_ul_code").css({"margin-top":"-10px","opacity":"0"});
        }
        if(codetop == -10){
            $(".nav_ul_code").css({"margin-top":"10px","opacity":"1"});
        }
        
    })
    $(".but_pay").click(function(){
        
        // 替换图片
        $(".qrcode_img").attr("src", "https://pan.xvx88.cn/d/EonHide/File/Xpan/xpan_pay.png?pw=c72c316ea6f35c07");
        var codetop = parseInt($(".nav_ul_code").css("margin-top"));
        if(codetop == -10){
            $(".nav_ul_code").css({"margin-top":"10px","opacity":"1"});
        }
        
    })
})



         
