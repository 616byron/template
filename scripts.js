function mostrarConteudo(texto) {
    var conteudo = document.getElementById('conteudo-template');
    conteudo.innerHTML = '<h1>' + texto + '</h1>';
  }
  
  $(document).ready(function() {
    $('.search-input').on('input', function() {
      var keyword = $(this).val().toLowerCase();
      
      $('.sidebar ul li').each(function() {
        var menuText = $(this).text().toLowerCase();
        
        if (menuText.includes(keyword)) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });
  });
  