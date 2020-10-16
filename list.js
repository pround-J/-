define(["jquery"],function($){
    function download(){
        $.ajax({
            url:"../data/list.json",
            success:function(data){
                var listArr = data;
                for(var i = 0; i <listArr.length; i++){
                   
                   var node = $(`  <div class="common-normal-box">
                        <div class="common-normal-header">
                            <h5>${listArr[i].title}</h5>
                        </div>
                        <div class="multi-line">
                        <figure class="flex-2in4">
                            <img src="${listArr[i].img}" alt="">
                        </figure>
                       
                           
                        </div>
        
                    </div>`);
                    node.appendTo("#app-content-wrap");
                    var Tabs = listArr[i].childs;
                    for(j = 0;j <Tabs.length ;j++){
                        
                        
                        $(` <div class="common-item">
                        <a href="list.html">
                        <div class="commodity-item">
                            <img src="${Tabs[j].img1}" alt="" class="commodity-item-img">
                        </div>
                        <div class="item-cover">
                            <h3 class="">${Tabs[j].tit}</h3>
                            <h5>${Tabs[j].tit1}</h5>
                        </div>
                        <div class="item-attr-colors">
                            
                        </div>
                        <div class="item-price">
                            <span>${Tabs[j].price}</span>
                        </div>
                        </a>
                    </div> `).appendTo(node.find(".multi-line"));
                   
                    
                   
                    } 
                   
                } 
            }
        })
    }




return {
    download:download,
    
}

})