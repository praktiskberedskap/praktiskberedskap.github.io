/* ==========================================================================
   Cookie consent
   ========================================================================== */
CookieConsent.run({

  // Synkroniser med Google Consent Mode v2
  onFirstConsent: ({ cookie }) => { updateGoogleConsent(cookie.categories); },
  onConsent:      ({ cookie }) => { updateGoogleConsent(cookie.categories); },
  onChange:       ({ cookie }) => { updateGoogleConsent(cookie.categories); },

  categories: {
    necessary: {
      enabled: true,
      readOnly: true
    },
    analytics: {
      autoClear: {
        cookies: [
          { name: /^_ga/ },   // Fjerner GA-cookies om brukeren trekker samtykke
          { name: '_gid' }
        ]
      }
    },
    marketing: {
      autoClear: {
        cookies: [
          { name: /^_gcl/ }
        ]
      }
    }
  },

  guiOptions: {
    consentModal: {
      layout: 'box inline',
      position: 'bottom left'
    },
    preferencesModal: {
      layout: 'box'
    }
  },

  language: {
    default: 'no',
    translations: {
      no: {
        consentModal: {
          title: '🍪 Vi bruker informasjonskapsler',
          description: 'Vi bruker cookies for å analysere trafikk og forbedre opplevelsen din. Du velger selv hva du tillater.',
          acceptAllBtn: 'Godta alle',
          acceptNecessaryBtn: 'Kun nødvendige',
          showPreferencesBtn: 'Tilpass',
          footer: '<a href="/personvern">Personvernerklæring</a>'
        },
        preferencesModal: {
          title: 'Administrer samtykker',
          acceptAllBtn: 'Godta alle',
          acceptNecessaryBtn: 'Kun nødvendige',
          savePreferencesBtn: 'Lagre valg',
          closeIconLabel: 'Lukk',
          sections: [
            {
              title: 'Nødvendige',
              description: 'Disse er påkrevd for at siden skal fungere korrekt og kan ikke deaktiveres.',
              linkedCategory: 'necessary'
            },
            {
              title: 'Analyse (Google Analytics 4)',
              description: 'Hjelper oss å forstå hvordan besøkende bruker siden. Dataene er anonymiserte.',
              linkedCategory: 'analytics'
            },
            {
              title: 'Markedsføring',
              description: 'Brukes til å vise relevante annonser på tvers av nettsteder.',
              linkedCategory: 'marketing'
            }
          ]
        }
      }
    }
  }
});

// Oppdater Google Consent Mode basert på brukerens valg
function updateGoogleConsent(categories) {
  gtag('consent', 'update', {
    'analytics_storage':       categories.includes('analytics') ? 'granted' : 'denied',
    'functionality_storage':   categories.includes('analytics') ? 'granted' : 'denied',
    'personalization_storage': categories.includes('analytics') ? 'granted' : 'denied',
    'ad_storage':              categories.includes('marketing') ? 'granted' : 'denied',
    'ad_user_data':            categories.includes('marketing') ? 'granted' : 'denied',
    'ad_personalization':      categories.includes('marketing') ? 'granted' : 'denied',
  });
}