function changeLanguage(lang) {
    $.getJSON("languajes.json", function(data) {
      document.documentElement.lang = lang;
      $("#title").text(data[lang].title);
      $("#subtitle").text(data[lang].subtitle);
    });
  }
  
  // Por defecto, cargar el idioma en español
  $(document).ready(function() {
    changeLanguage('es');
  });
  