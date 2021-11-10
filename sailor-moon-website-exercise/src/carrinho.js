$('document').ready(function() {

    //avisa se o carrinho está vazio ou não
    var empty = $('ul li.empty');
  
    $('.btn-add').on('click', function(e) {
      e.preventDefault();
      var carinho = $('#shopping-cart ul');
      var name = $(this).siblings('h3').text();
      var price = parseInt($(this).siblings('.price').text());
      var thumb = $(this).siblings('img').attr('src');
      //var total = $('#total');
  
      //inclui no carrinho
      carinho.prepend("<li class='iten'><img src=" + thumb + " /> <span class='name'>" + name + "</span> <span class='price'>" + price + "</span> <a href='' class='btn-close'></a></li>");
  
      //remove msg de carrinho vazio
      if (empty) {
        empty.hide();
      }
  
      //inclui botao limpar todos se conter mais de 2 itens no carrinho
      if ($('#shopping-cart ul li.iten').length == 2) {
        $('#shopping-cart #info').append("<a href='' class='btn-limpar-car'>x</a>");
      }
  
      //incrementa itens no carrinho
      var itenAdd = $('ul li.iten').length;
      $('#itens strong').text(itenAdd);
  
      //caucula preço total incrementado e atualiza o valor
      var total = parseInt($('#total strong').text());
      $('#total strong').text(total + price);
    });
  
    // # botao remover item do carrinho
    $(this).on("click", ".btn-close", function(e) {
      e.preventDefault();
  
      //decrementa itens no carrinho
      var itenAdd = $('ul li.iten').length - 1;
      $('#itens strong').text(itenAdd--);
  
      //caucula preço total decrementado e atualiza o valor
      var total = parseInt($('#total strong').text());
      var priceRemove = parseInt($(this).siblings('.price').text());
      $('#total strong').text(total - priceRemove);
  
      //avisa se o carrinho está vazio
      $(this).parent().remove();
      if ($('#shopping-cart ul li').length == 1) {
        empty.show();
      }
      
      //remove botao remover todos se só conter 1 item
      if ($('#shopping-cart ul li').length == 2) {
        $('.btn-limpar-car').remove();
      }
  
    });
  
    // # botao remover tudo do carrinho
    $(this).on("click", ".btn-limpar-car", function(e) {
      e.preventDefault();
      $('#total strong').text('0');
      $('#itens strong').text('0');
      $('ul li.iten').remove();
      $(this).remove();
      empty.show();
    });
  });