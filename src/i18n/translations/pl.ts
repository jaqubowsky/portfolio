export default {
  meta: {
    title: "Jakub Nalewajk — Programista Frontend & Next.js Developer",
    description:
      "Programista frontend z Pułtuska. Tworzę strony internetowe i aplikacje webowe na zamówienie w React i Next.js. 4+ lata doświadczenia. Napisz do mnie.",
    keywords:
      "Jakub Nalewajk, Jakub Nalewajk programista, programista, programista frontend, programista Pułtusk, programista w okolicy Pułtuska, programista mazowieckie, programista w okolicy, strona internetowa na zamówienie, strona na zlecenie, strona na zlecenie Pułtusk, tworzenie stron internetowych, tworzenie stron Pułtusk, aplikacje webowe na zamówienie, strona na zamówienie, strona internetowa na zlecenie, pozycjonowanie SEO, React, Next.js, Next.js developer, programista Next.js, TypeScript, portfolio, frontend developer, frontend developer Next.js, tworzenie aplikacji webowych, programista Warszawa, web developer Pułtusk, strony internetowe na zlecenie, freelancer programista",
    blogTitle: "Blog - Jakub Nalewajk",
    blogDescription:
      "Blog Jakuba Nalewajka — programisty frontend i Next.js developera z Pułtuska. Artykuły o programowaniu, Next.js, React, TypeScript i tworzeniu aplikacji webowych.",
    notFoundTitle: "404 — Nie znaleziono strony | Jakub Nalewajk",
    notFoundDescription:
      "Strona, której szukasz, nie istnieje. Wróć do portfolio Jakuba Nalewajka.",
  },
  nav: {
    home: "Strona główna",
    experience: "Doświadczenie",
    projects: "Projekty",
    services: "Usługi",
    skills: "Umiejętności",
    contact: "Kontakt",
    blog: "Blog",
    closeMenu: "Zamknij menu",
  },
  hero: {
    jobTitle: "Frontend Developer",
    description:
      "Programista frontend i Next.js developer z ponad 4-letnim doświadczeniem. Buduję szybkie aplikacje webowe i strony internetowe na zamówienie — od architektury po wdrożenie. Dostępny jako freelancer i jako developer w zespole.",
    cta: "Napisz do mnie",
    downloadCv: "Pobierz CV",
  },
  experience: {
    badge: "Doświadczenie",
    title: "Gdzie pracowałem",
    description:
      "Budowanie produktów, które mają znaczenie — od architektury po wdrożenie.",
    jobs: [
      {
        company: "CodeYourBrand",
        role: "Frontend Developer",
        tech: "Next.js, Nx, Turborepo",
        period: "Paź 2025 – Obecnie",
        location: "Zdalnie",
        bullets: [
          "Odpowiadałem za frontend Maspex Photo Service dla jednej z największych firm FMCG w Europie Środkowej — zbudowałem aplikację kliencką i panel administracyjny w Turborepo i Next.js; dostarczono w mniej niż 6 miesięcy i zaakceptowano przez klienta.",
          "Prowadziłem rozwój frontendu platformy Dubai Real Estate jako właściciel projektu, wdrażając warstwową architekturę z Nx, Next.js 16 i Strapi CMS; zbudowałem bibliotekę komponentów udokumentowaną w Storybook.",
          "Dostarczałem funkcjonalności i przeglądałem PR-y w zespole frontendowym platformy turystycznej TwoContinents, poprawiając jakość i spójność kodu.",
        ],
      },
      {
        company: "Haergi",
        role: "Fullstack Developer",
        tech: "Next.js, Express",
        period: "Sie 2023 – Paź 2025",
        location: "Warszawa",
        bullets: [
          "Zbudowałem platformę e-commerce do zamawiania jedzenia B2B obsługującą ponad 3500 zamówień miesięcznie.",
          "Stworzyłem intuicyjny interfejs zamawiania dla klientów B2B restauracji Mezze Foods, zastępujący telefoniczne zamówienia, z zintegrowanymi płatnościami PayU i Stripe.",
          "Opracowałem InstagoAI — kreator stron internetowych oparty na AI, umożliwiający nietechnicznym użytkownikom tworzenie stron w mniej niż 15 minut.",
        ],
      },
    ],
  },
  projects: {
    badge: "Projekty",
    title: "Co zbudowałem",
    description:
      "Projekty poboczne, w których eksperymentuję z nowymi technologiami i rozwiązuję prawdziwe problemy.",
    items: [
      {
        description:
          "Platforma dopasowywania ofert pracy oparta na AI, która scrapuje polskie portale z ofertami i rankinguje je względem Twojego profilu za pomocą embeddingów wektorowych i cross-encoder re-rankingu.",
      },
      {
        description:
          "Aplikacja do zarządzania subskrypcjami, która umożliwia śledzenie i zarządzanie subskrypcjami. Wykorzystuje Stripe do płatności i Sentry do śledzenia błędów.",
      },
      {
        description:
          "Gotowy do produkcji szablon z Better Auth (Google OAuth), płatnościami Stripe, monitoringiem Sentry. Wieloetapowe buildy Docker, zautomatyzowane CI/CD z GitHub Actions.",
      },
    ],
  },
  services: {
    badge: "Usługi",
    title: "Co mogę dla Ciebie zbudować",
    description:
      "Tworzę strony internetowe i aplikacje webowe na zamówienie dla firm i osób prywatnych. Fryzjer, ogrodnik, sklep online — każdy biznes zasługuje na profesjonalną obecność w sieci.",
    items: [
      {
        icon: "mdi:web",
        title: "Strona internetowa",
        description:
          "Szybka, responsywna strona wizytówka dla Twojej firmy — zoptymalizowana pod Google, żeby klienci Cię znajdowali.",
      },
      {
        icon: "mdi:application-outline",
        title: "System online",
        description:
          "Dedykowane rozwiązanie dopasowane do Twojego biznesu — system rezerwacji, panel do zarządzania zamówieniami czy formularz dla klientów.",
      },
      {
        icon: "mdi:chart-line",
        title: "Pozycjonowanie SEO",
        description:
          "Każdy projekt buduję z myślą o SEO od pierwszego dnia — żeby Twoja strona pojawiała się wysoko w Google.",
      },
    ],
    processTitle: "Jak wygląda współpraca",
    processDescription:
      "Pracujesz bezpośrednio ze mną — bez pośredników i zbędnych spotkań. Prosta strona firmowa? Gotowa w 2–3 tygodnie. Bez czekania na zespół — zbieramy wymagania i od razu działam.",
    steps: [
      {
        title: "Kontakt",
        description:
          "Napisz do mnie z krótkim opisem tego, czego potrzebujesz. Odpowiadam w ciągu 24 godzin.",
      },
      {
        title: "Wycena i plan",
        description:
          "Omawiamy szczegóły, ustalam zakres projektu i przedstawiam konkretną wycenę — bez ukrytych kosztów.",
      },
      {
        title: "Realizacja",
        description:
          "Buduję projekt, na bieżąco pokazuję postępy. Bez czekania na innych — szybko i konkretnie.",
      },
      {
        title: "Wdrożenie",
        description:
          "Strona ląduje w sieci, zoptymalizowana pod Google i gotowa na klientów. Zapewniam też wsparcie po wdrożeniu.",
      },
    ],
    cta: "Porozmawiajmy o Twoim projekcie",
  },
  skills: {
    badge: "Umiejętności",
    title: "Z czym pracuję",
    description:
      "Technologie, których używam na co dzień do budowania szybkich, skalowalnych aplikacji webowych.",
    categories: {
      frontend: "Frontend",
      backend: "Backend",
      devops: "DevOps",
      other: "Inne",
    },
  },
  contact: {
    badge: "Kontakt",
    title: "Współpracujmy",
    description:
      "Szukasz programisty frontend lub Next.js developera do zespołu? Potrzebujesz strony internetowej na zlecenie dla swojej firmy? Napisz — odpowiem w ciągu 24 godzin.",
    sendMessage: "Wyślij wiadomość",
    responseTime: "Odpowiem w ciągu 24 godzin.",
    reachOut: "Skontaktuj się bezpośrednio",
  },
  contactForm: {
    name: "Imię",
    namePlaceholder: "Jan Kowalski",
    email: "Email",
    emailPlaceholder: "jan@kowalski.pl",
    message: "Wiadomość",
    messagePlaceholder:
      "Opisz krótko, czego potrzebujesz — np. stronę dla firmy, system rezerwacji...",
    sending: "Wysyłanie...",
    send: "Wyślij wiadomość",
    success:
      "Wiadomość wysłana pomyślnie. Odezwę się najszybciej jak to możliwe.",
    error: "Nie udało się wysłać wiadomości. Spróbuj ponownie.",
    subject: "Kontakt z portfolio",
  },
  blog: {
    heading: "Blog",
    backToBlog: "Wróć do bloga",
    postsTagged: "Posty z tagiem",
    by: "autor:",
    on: "dnia",
    postMeta: "{author} · {date}",
    onThisPage: "Na tej stronie",
    sharePost: "Udostępnij ten post:",
    shareVia: "Udostępnij przez",
    prev: "Poprzednia",
    next: "Następna",
  },
  notFound: {
    heading: "404",
    subtitle: "Nic tu nie ma... jeszcze.",
    backHome: "Wróć na stronę główną",
    imgAlt: "Jakub Nalewajk szukający z lupą",
  },
  footer: {
    copyright: "Jakub Nalewajk",
    status: "Status systemów",
  },
  seo: {
    jobTitle: "Programista Frontend / Next.js Developer",
    knowsAbout: [
      "tworzenie stron internetowych",
      "aplikacje webowe",
      "strony na zamówienie",
      "strony na zlecenie",
      "programowanie frontend",
      "Next.js",
      "React",
      "pozycjonowanie SEO",
    ],
    serviceName: "Jakub Nalewajk — Programista Frontend & Next.js Developer",
    serviceType:
      "Tworzenie stron internetowych i aplikacji webowych na zamówienie i zlecenie",
    serviceDescription:
      "Programista frontend i Next.js developer z Pułtuska (mazowieckie) — tworzę strony internetowe na zamówienie i zlecenie, systemy online i aplikacje webowe w React i Next.js. Obsługuję firmy z Pułtuska, okolicy i całej Polski.",
    countryName: "Polska",
    offerCatalogName: "Usługi programistyczne",
    offers: [
      {
        name: "Strona internetowa na zamówienie i zlecenie",
        description:
          "Szybka, responsywna strona wizytówka dla firmy — zoptymalizowana pod Google. Idealna dla firm z Pułtuska i okolicy.",
      },
      {
        name: "System online na zamówienie",
        description:
          "Dedykowane rozwiązania — systemy rezerwacji, panele do zarządzania, formularze dla klientów",
      },
      {
        name: "Pozycjonowanie SEO",
        description:
          "Optymalizacja stron pod wyszukiwarki od pierwszego dnia — szybkie ładowanie, structured data, meta tagi",
      },
    ],
  },
} as const;
