define(["jquery","jquery-cookie"],function($){


    function download(){

        var product_id = valueByname(location.search,"product_id");
        //  alert(product_id);
        $.ajax({

            type:"get",
            url:"../data/goodsdesc.json",
            success:function(arr){
                var goodsMsg = arr.find(item => item.product_id == product_id);
                
               var node = $(`    
                    <li id="thumb-li">
                        <img src="${goodsMsg.img1}" alt="" class="thumb-img">
                        <div class="mark"></div>
                    </li>
                    <div class="amplification">
                            <img src="${goodsMsg.img1}" alt=""  class="amplification-img">
                        </div>
                
                `);
                node.appendTo(".thumb ul");
                var node2 = $(`<h1>${goodsMsg.tit}</h1>
                <h3>${goodsMsg.tit1}</h3>
                <div class="item-price">
                <span>${goodsMsg.price}</span>
                </div>`);
                node2.appendTo(".item-title")




               
            }
            
        })
    }





function valueByname(search,name){
    var start = search.indexOf(name + "=");
    if(start == -1){
        return null;
    }else{
        var end = search.indexOf("&",start);
        if(end == -1){
            end = search.length;
        }
        var str = search.substring(start,end);
        var arr = str.split("=")
        return arr[1];
    }
}


// 放大镜效果
    function zoom(){
      $(".gallery").on("mouseenter","#thumb-li",function(){
        $(".mark").show()
        $(".amplification").show()
      })
      $(".gallery").on("mouseleave","#thumb-li",function(){
        $(".mark").hide()
        $(".amplification").hide()
      })
        $(".gallery").on("mousemove","#thumb-li",function(ev){
            var l = ev.clientX - $("#thumb-li").offset().left - 50;
            var t = ev.clientY - $("#thumb-li").offset().top - 50;

					//限制出界
					if(l <= 0){
						l = 0;
					}
					if(l >= 300){
						l = 300
					}

					if(t <= 0){
						t = 0;
					}
					if(t >= 300){
						t = 300;
					}

					//改变遮罩层的位置
					$(".mark").css({
						left: l,
						top: t
					})
					//同时移动大图片的位置，反向四倍的距离
					$(".amplification-img").css({
						left: -l * 2,
						top: - t * 2
					})
        })
    }
// 选项卡

function tab(){
   
    var aBtns = $(".pro-detail-hd-fixed").find("li");
    var aDivs = $(".guarantee")
            //通过循环，添加点击函数
            for(var i = 0; i < aBtns.length; i++){
              //index 自定义
              aBtns[i].inde = i;
              aBtns[i].onclick = function(){
                //取消所有按钮的样式
                for(var j = 0; j < aBtns.length; j++){
                  aBtns[j].className = '';
                  aDivs[j].style.display = 'none';
                }
                this.className = 'click';
                //通过按钮的下标找到对应div的下标，显示
                aDivs[this.inde].style.display = 'block';
              }
            }
}
//回到顶部
function backTop(){
    $(".bar-item").click(function(){
        $('html,body').animate({ scrollTop: 0 }, 500);
    })
}

//点击按钮
function btnClick(){
    var Btn1 = $(".down");
    var Btn2 = $(".up");
    var num = $(".num");

    Btn1.click(function(){
        if(num.text()<=1){
            num.text()=1
            num.text()=1 ? Btn1.addClass("disabled") : Btn1.removeClass("disabled");            
        }else{
            num.text(parseInt(num.text())-1);
        }
    })
    Btn2.click(function(){
        num.text(parseInt(num.text())+1)
    })
}
    





return {
     download:download,
     zoom:zoom,
     btnClick:btnClick,
     tab:tab,
     backTop:backTop
}


})