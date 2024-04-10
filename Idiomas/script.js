// JSON data for different languages
const languageData = {
    "en": {
      "title": "Welcome",
      "description": "This is a simple language switcher example."
    },
    "es": {
      "title": "Bienvenido",
      "description": "Este es un ejemplo simple de cambio de idioma."
    },
    "it": {
      "title": "Benvenuto",
      "description": "Questo è un semplice esempio di cambio lingua."
    },
    "de": {
      "title": "Willkommen",
      "description": "Dies ist ein einfaches Beispiel für den Sprachwechsel."
    },
    "fr": {
      "title": "Bienvenue",
      "description": "Ceci est un exemple simple de commutation de langue."
    }
  };
  
  // Function to change language
  function changeLanguage(lang) {
    document.getElementById('title').innerText = languageData[lang]['title'];
    document.getElementById('description').innerText = languageData[lang]['description'];
  }
  