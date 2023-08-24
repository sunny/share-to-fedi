
const translations = {
  fr: {
    title: "toot — page de partage inter-instance pour Mastodon",
    for: "pour",
    postText: "Texte du toot",
    postTextPlaceholder: "Qu’avez-vous en tête ?",
    chooseInstance: "Choisissez votre instance Mastodon",
    rememberInstance: "Se souvenir de mon instance sur ce navigateur",
    toot: "TOOTER !",
    whatIsMastodon: "Qu’est-ce que Mastodon ?",
    mastodonUrl: "https://joinmastodon.org/fr",
    share2fediOnGithub: "share2fedi sur GitHub",
  },
  es: {
    title: "toot — página de compartir interinstancia para Mastodon",
    for: "para",
    postText: "Texto del toot",
    postTextPlaceholder: "¿Qué está pasando?",
    chooseInstance: "Elige tu instancia de Mastodon",
    rememberInstance: "Recordar mi instancia en este navegador",
    toot: "¡TOOT!",
    whatIsMastodon: "¿Qué es Mastodon?",
    mastodonUrl: "https://joinmastodon.org/es",
    share2fediOnGithub: "share2fedi en GitHub",
  },
  de: {
    title: "toot — Inter-Instanz-Sharing-Seite für Mastodon",
    for: "für",
    postText: "Toot-Text",
    postTextPlaceholder: "Was denkst du gerade?",
    chooseInstance: "Wähle deine Mastodon-Instanz",
    rememberInstance: "Diese Instanz merken",
    toot: "TOOTER!",
    whatIsMastodon: "Was ist Mastodon?",
    mastodonUrl: "https://joinmastodon.org/de",
    share2fediOnGithub: "share2fedi auf GitHub",
  },
  ru: {
    title: "toot — страница для обмена между инстанциями Mastodon",
    for: "для",
    postText: "Toot Текст",
    postTextPlaceholder: "О чем вы думаете?",
    chooseInstance: "Выберите вашу инстанцию Mastodon",
    rememberInstance: "Запомнить эту инстанцию в этом браузере",
    toot: "TOOTER!",
    whatIsMastodon: "Что такое Mastodon?",
    mastodonUrl: "https://joinmastodon.org/ru",
    share2fediOnGithub: "share2fedi на GitHub",
  },
}

function translate(lang) {
  const replacements = translations[lang];
  if (!replacements) return

  document.documentElement.lang = lang;

  const dataAttributes = [
    ["data-translate-inner", "innerHTML"],
    ["data-translate-value", "value"],
    ["data-translate-placeholder", "placeholder"],
    ["data-translate-href", "href"],
  ];

  for (const [data, attribute] of dataAttributes) {
    for (const node of document.querySelectorAll(`[${data}]`)) {
      const value = replacements[node.attributes[data].value];
      if (value) node[attribute] = value;
    }
  }
}

translate(new URLSearchParams(window.location.search).get("lang"));
