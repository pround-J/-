
 define(["jquery"], function($){
    function download(){
        $.ajax({
            type:"get",
            url:"../data/banner.json",
            success:function(data){
                var bannerArr = data.data.home_carousel;
                for(var i = 0;i < bannerArr.length; i++){
                     $(`<a href="">
                     <img src="${bannerArr[i].image}" alt="" class="banner-img">
                     </a>`).appendTo(".banner-item");
                     var node = $(`<span class="banner-bullet"></span>`);
                     node.appendTo(".banner-dots")
                     if(i == 0){
                         node.addClass("bullet-pitch");
                     }

                }
              
               
               
            },
            error:function(msg){
                console.log(msg);
            }
        })
    }
    //实现轮播效果
    function carousel(){
        var iNow = 0;//当前显示图标的下标
        var aImg = null;//记录图片
        var aBtn = null;//记录按钮
        var timer = setInterval(function(){
            iNow++;
            tab();
        },4000)

        //封装切换函数
        function tab(){
            if(!aImg){
                aImg = $(".banner-item").find("a");
            }
            if(!aBtn){
                aBtn = $(".banner-dots").find("span");
            }
            if(iNow==3){
                iNow = 0;
            }
            //图片切换
            aImg.hide().css("opacity",0.2).eq(iNow).show().animate({opacity:1},1000);
            // 圆点切换
            aBtn.removeClass("bullet-pitch").eq(iNow).addClass("bullet-pitch")
        }

         //添加移入移出
        $(".banner-wrap").mouseenter(function(){
        clearInterval(timer)
        });
        $(".banner-wrap").mouseleave(function(){
        timer = setInterval(function(){
            iNow++;
            tab();
        },4000);
        });

        //点击圆点进行切换【使用事件委托】
        $(".banner-dots").on("click","span",function(){
            iNow =$(this).index();
            tab()
        })


    }

   



    //  二级菜单
    function submenu(){
        $(function(){
            $(".nav-wrapper .nav-content li").mouseenter(function(){
                var index = $(this).index();
                console.log(index);
                $(".submenu .submenu-c").eq(index).show().siblings().hide();
                 $(".submenu").css({"height":"277px","opacity":"1"}) 
                 $(".nav-ipt").blur()

            })
            $(".nav").mouseleave(function(){
                var index = $(this).index();
                $(".submenu .submenu-c").eq(index).hide()
                $(".submenu").css({"height":"0px","opacity":"0"}) ;  
            });
        });
    };
  submenu();
//  购物车
    function headShop(){
        $(function(){
            $(".head-shopping").mouseenter(function(){
                $(".head-cart").css({"opacity":"1","visibility":"visible"})
            })
            $(".head-shopping").mouseleave(function(){
                $(".head-cart").css({"opacity":"0","visibility":"hidden"})
            })
        })
    };
    headShop()
//搜索框
function searchList(){
    $(function(){
        $(".nav-ipt").focus(function(){
            $(".nav-list").css("display","block")
            $(".nav-ipt").attr( "placeholder","请输入搜索的商品")
            $(".nav-recommends").hide()
        })
        $(".nav-ipt").blur(function(){
            $(".nav-list").css("display","none")
            $(".nav-ipt").removeAttr( "placeholder","请输入搜索的商品")
            $(".nav-recommends").show()
        })
        
    })
};
searchList()


//商品轮播
function slide(){
    var oBtn = $(".operation").find("button");
    var sub = 0;
    
    oBtn.click(function(){
       if($(this).index() == 0){
           sub--;
           sub = Math.max(0,sub)
       }else{
           sub++;
           sub = Math.min(1,sub)
       }
       table();
    })

    function table(){
        sub == 0? oBtn.eq(0).addClass("btn-arrow") : oBtn.eq(0).removeClass("btn-arrow");
        sub == 1? oBtn.eq(1).addClass("btn-arrow") : oBtn.eq(1).removeClass("btn-arrow");
        var iTarget =  sub * -1218;
        $(".common-box").css({
            transform: `translate3d(${iTarget}px, 0px, 0px)`,
        })
    }


}



    return {
        submenu:submenu,
        headShop:headShop,
        searchList:searchList,
        download:download,
        carousel:carousel,
        slide:slide


    }
  })

 

