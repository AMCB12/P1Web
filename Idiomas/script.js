// JSON data for different languages
const languageData = {
    "en": {
      "title": "Welcome",
      "description": "Thank you very much for visiting my page, have a good day"
    },
    "es": {
      "title": "Bienvenido",
      "description": "Muchas gracias por visitar mi pagina, que tengas un buen día"
    },
    "it": {
      "title": "Benvenuto",
      "description": "Grazie mille per aver visitato la mia pagina, buona giornata"
    },
    "de": {
      "title": "Willkommen",
      "description": "Vielen Dank für Ihren Besuch auf meiner Seite. Ich wünsche Ihnen einen schönen Tag"
    },
    "fr": {
      "title": "Bienvenue",
      "description": "Merci beaucoup d'avoir visité ma page, bonne journée"
    }
  };
  

  function changeLanguage(lang) {
    document.getElementById('title').innerText = languageData[lang]['title'];
    document.getElementById('description').innerText = languageData[lang]['description'];
  }
  