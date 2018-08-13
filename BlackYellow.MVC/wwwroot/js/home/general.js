﻿$(document).ready(function () {
  
    getProducts();
});







function fillProducts(products)
{
    var html = "";
    
    $.each(products, function (item, value) {
       
        html = '<div class="col-sm-6 col-md-4">' +
                '<div class="single-product">' +
                    '<div class="product-f-image">' +
                       '  <img src="'+ value.galeryProduct[0].pathImage+'"  class="img-responsive" alt="">' +
                        '<div class="product-hover">' +
                            '<a href="#" onclick="buy(' + value.productId + ')" class="add-to-cart-link"><i class="fa fa-shopping-cart"></i> Comprar</a>' +
                            '<a href="Product/Details/' + value.productId + '" class="view-details-link"><i class="fa fa-link"></i> Detalhes</a>' +
                        '</div>' +
                    '</div>' +
                   ' <h2><a href="Product/Details/' + value.productId + '">' + value.name + '</a></h2>' +
                   ' <div class="product-carousel-price">' +
                       ' <ins>R$'+value.price+'</ins> <del>'+value.lastprice+'</del>' +
                   '</div>' +
               ' </div>' +
           ' </div>';
      
        $(".list-products").append(html);
        console.log(html);
    });
}

function fillCarrousel(products) {
    var html = "";
   
    $.each(products, function (item, value) {

        html = '<div class="item active">'+
               ' <div class="single-slide">'+
                    '<div class="slide-bg slide-one"></div>'+
                    '<div class="slide-text-wrapper">'+
                       ' <div class="slide-text">'+
                           ' <div class="container">'+
                               ' <div class="row">'+
                                    '<div class="col-md-6 col-md-offset-6">'+
                                        '<div class="slide-content">'+
                                           ' <h2>We are awesome</h2>'+
                                           ' <p>'+value.Description +'</p>'+
                                           ' <a href="" class="readmore">Detalhes</a>'+
                                    '    </div>'+
                                 '   </div>'+
                               ' </div>'+
                           ' </div>'+
                       ' </div>'+
                   ' </div>'+
                '</div>'+
                '</div>'

        $("#carrousel").append(html);
    });
}




function getProducts()
{
    
    $.ajax({
        contentType: "application/json",
        method: "GET",
        url: "/Product/ListTop12",
        success: function (data) {
            fillProducts(data);
        }
    })
}





