define(["jquery"],function($){
function download(){
    $.ajax({
        url:"../data/data.json",
        success:function(data){

            for(i = 0;i < data.length;i++){
                $(`<section class="spu-item-normal-box">
                <a href="goodsdesc.html?product_id=${data[i].product_id}">
                <figure class="item-cover">
                    <img src="${data[i].img1}" alt="">
                </figure>
                <article class="category-list-title">
                    <h3 class="category-list-title-h3">
                        ${data[i].tit}
                    </h3>
                    <h5 class="txt-product-title">
                    ${data[i].tit1}
                    </h5>
                </article>
                <aside class="item-attr-colors"></aside>
                <article class="item-price">
                    <span class="price-favorable">${data[i].price}</span>
                    <span class="orignal-price"></span>
                </article>
                </a>
            </section>`).appendTo(".category-list")
            }
        }
    })
}


return {
    download:download
}



})