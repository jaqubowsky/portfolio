export default {
  meta: {
    title: 'Jakub Nalewajk - Programista Frontend & Next.js Developer',
    description:
      'Programista frontend z Pułtuska. Tworzę strony internetowe i aplikacje webowe na zamówienie w React i Next.js. 4+ lata doświadczenia. Napisz do mnie.',
    keywords:
      'Jakub Nalewajk, Jakub Nalewajk programista, Strona na Miarę, programista, programista frontend, programista Pułtusk, programista w okolicy Pułtuska, programista mazowieckie, programista w okolicy, strona internetowa na zamówienie, strona na zlecenie, strona na zlecenie Pułtusk, tworzenie stron internetowych, tworzenie stron Pułtusk, aplikacje webowe na zamówienie, strona na zamówienie, strona internetowa na zlecenie, pozycjonowanie SEO, React, Next.js, Next.js developer, programista Next.js, TypeScript, portfolio, frontend developer, frontend developer Next.js, tworzenie aplikacji webowych, programista Warszawa, web developer Pułtusk, strony internetowe na zlecenie, freelancer programista',
    blogTitle: 'Blog - Jakub Nalewajk',
    blogDescription:
      'Praktyczne artykuły o Next.js, React, TypeScript i tworzeniu stron internetowych. Poradniki, rozwiązania problemów i lekcje z realnych projektów.',
    notFoundTitle: '404 - Nie znaleziono strony | Jakub Nalewajk',
    notFoundDescription:
      'Strona, której szukasz, nie istnieje. Wróć do portfolio Jakuba Nalewajka.',
  },
  nav: {
    home: 'Strona główna',
    experience: 'Doświadczenie',
    projects: 'Projekty',
    services: 'Usługi',
    skills: 'Umiejętności',
    contact: 'Kontakt',
    blog: 'Blog',
    closeMenu: 'Zamknij menu',
  },
  hero: {
    jobTitle: 'Frontend Developer',
    description:
      'Programista frontend i Next.js developer z ponad 4-letnim doświadczeniem. Buduję szybkie aplikacje webowe i strony internetowe na zamówienie - od architektury po wdrożenie. Dostępny jako freelancer i jako developer w zespole.',
    cta: 'Napisz do mnie',
    downloadCv: 'Pobierz CV',
  },
  stats: {
    experience: 'Lat doświadczenia',
    projects: 'Dostarczonych projektów',
    clients: 'Zadowolonych klientów',
  },
  experience: {
    badge: 'Doświadczenie',
    title: 'Gdzie pracowałem',
    description: 'Komercyjne projekty, w których brałem udział - od architektury po wdrożenie.',
    jobs: [
      {
        company: 'CodeYourBrand',
        role: 'Frontend Developer',
        tech: 'Next.js, Nx, Turborepo',
        period: 'Paź 2025 – Obecnie',
        location: 'Zdalnie',
        bullets: [
          'Odpowiadałem za frontend Maspex Photo Service dla jednej z największych firm FMCG w Europie Środkowej - zbudowałem aplikację kliencką i panel administracyjny w Turborepo i Next.js; dostarczono w mniej niż 6 miesięcy i zaakceptowano przez klienta.',
          'Prowadziłem rozwój frontendu platformy Dubai Real Estate jako właściciel projektu, wdrażając warstwową architekturę z Nx, Next.js 16 i Strapi CMS; zbudowałem bibliotekę komponentów udokumentowaną w Storybook.',
          'Dostarczałem funkcjonalności i przeglądałem PR-y w zespole frontendowym platformy turystycznej TwoContinents, poprawiając jakość i spójność kodu.',
        ],
      },
      {
        company: 'Haergi',
        role: 'Fullstack Developer',
        tech: 'Next.js, Express',
        period: 'Sie 2023 – Paź 2025',
        location: 'Warszawa',
        bullets: [
          'Zbudowałem platformę e-commerce do zamawiania jedzenia B2B obsługującą ponad 3500 zamówień miesięcznie.',
          'Stworzyłem intuicyjny interfejs zamawiania dla klientów B2B restauracji Mezze Foods, zastępujący telefoniczne zamówienia, z zintegrowanymi płatnościami PayU i Stripe.',
          'Opracowałem InstagoAI - kreator stron internetowych oparty na AI, umożliwiający nietechnicznym użytkownikom tworzenie stron w mniej niż 15 minut.',
        ],
      },
    ],
  },
  projects: {
    badge: 'Projekty',
    title: 'Co zbudowałem',
    description:
      'Narzędzia, które stworzyłem na własne potrzeby i używam na co dzień. Każdy projekt powstał, bo napotkałem realny problem i postanowiłem go rozwiązać.',
    items: [
      {
        description:
          'Miałem dość ręcznego przeglądania ofert pracy na kilku portalach. Zbudowałem platformę, która scrapuje polskie portale i rankinguje oferty względem mojego profilu za pomocą embeddingów wektorowych i re-rankingu AI.',
      },
      {
        description:
          'Straciłem kontrolę nad subskrypcjami - nie wiedziałem ile płacę miesięcznie. Stworzyłem apkę do śledzenia i zarządzania subskrypcjami z płatnościami Stripe i monitoringiem Sentry.',
      },
      {
        description:
          'Przy każdym nowym projekcie konfigurowałem to samo od zera. Zbudowałem gotowy szablon z Better Auth (Google OAuth), Stripe, Sentry, Docker i CI/CD - teraz startuję nowy projekt w minuty zamiast godzin.',
      },
    ],
  },
  services: {
    badge: 'Usługi',
    title: 'Co mogę dla Ciebie zbudować',
    description:
      'Tworzę strony internetowe i aplikacje webowe na zamówienie dla firm i osób prywatnych. Fryzjer, ogrodnik, sklep online - każdy biznes zasługuje na profesjonalną obecność w sieci.',
    items: [
      {
        icon: 'mdi:web',
        title: 'Strona internetowa',
        description:
          'Szybka, responsywna strona wizytówka dla Twojej firmy - zoptymalizowana pod Google, żeby klienci Cię znajdowali.',
      },
      {
        icon: 'mdi:application-outline',
        title: 'System online',
        description:
          'Dedykowane rozwiązanie dopasowane do Twojego biznesu - system rezerwacji, panel do zarządzania zamówieniami czy formularz dla klientów.',
      },
      {
        icon: 'mdi:chart-line',
        title: 'Gotowość pod Google',
        description:
          'Każdy projekt buduję z myślą o wyszukiwarkach od pierwszego dnia - szybkość, poprawna struktura, meta tagi. Solidny fundament, żeby Google mógł Cię znaleźć.',
      },
    ],
    processBadge: 'Współpraca',
    processTitle: 'Jak wygląda współpraca',
    processDescription:
      'Pracujesz bezpośrednio ze mną - bez pośredników i zbędnych spotkań. Prosta strona firmowa? Gotowa w 2–3 tygodnie. Bez czekania na zespół - zbieramy wymagania i od razu działam.',
    steps: [
      {
        title: 'Rozmowa',
        description:
          'Napisz do mnie - opowiedz czego potrzebujesz. Wstępne konsultacje są darmowe.',
      },
      {
        title: 'Wycena i plan',
        description:
          'Razem ustalamy wygląd, funkcje i zakres. Ty decydujesz - ja doradzam i wyceniam. Bez ukrytych kosztów.',
      },
      {
        title: 'Budowa strony',
        description:
          'Buduję stronę i na bieżąco pokazuję postępy. Masz uwagi? Poprawiamy od razu, nie na koniec.',
      },
      {
        title: 'Strona gotowa',
        description:
          'Strona ląduje w sieci - szybka, gotowa pod Google i działająca na każdym urządzeniu. Po starcie nie znikam - jestem w kontakcie.',
      },
    ],
    cta: 'Porozmawiajmy o Twoim projekcie',
    supportNote:
      'Po wdrożeniu nie zostawiam Cię samego - zapewniam pełne wsparcie techniczne i jestem w kontakcie na wypadek zmian lub pytań.',
  },
  caseStudy: {
    badge: 'Realizacja',
    title: 'Jak wygląda gotowy projekt',
    description: 'Moja własna strona portfolio - zaprojektowana i zbudowana od zera.',
    project: {
      name: 'jnalewajk.me',
      subtitle: 'Strona firmowa z blogiem',
      problem:
        'Potrzebowałem profesjonalnej strony, która pokaże moje usługi, doświadczenie i projekty - z blogiem, formularzem kontaktowym i obsługą dwóch języków.',
      solution:
        'Strona działa błyskawicznie, jest widoczna w Google i wygodna na każdym urządzeniu. Ma formularz kontaktowy, blog z artykułami i automatyczne przełączanie języka. Wszystko zaprojektowane i zbudowane przeze mnie od zera.',
      results: [
        { value: '95+', label: 'Wydajność Google' },
        { value: '<1.5s', label: 'Czas ładowania' },
        { value: '2', label: 'Języki (PL/EN)' },
      ],
      tech: ['Szybka strona', 'Formularz kontaktowy', 'Blog', 'Gotowa pod Google', 'Responsywność'],
      cta: 'Chcesz coś podobnego?',
      timeline: '~3 tygodnie',
      timelineLabel: 'Czas realizacji',
    },
  },
  skills: {
    badge: 'Umiejętności',
    title: 'Z czym pracuję',
    description:
      'Technologie, których używam na co dzień do budowania szybkich, skalowalnych aplikacji webowych.',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      devops: 'DevOps',
      other: 'Inne',
    },
  },
  contact: {
    badge: 'Kontakt',
    title: 'Współpracujmy',
    description:
      'Szukasz programisty frontend lub Next.js developera do zespołu? Potrzebujesz strony internetowej na zlecenie dla swojej firmy? Napisz - odpowiem w ciągu 24 godzin.',
    sendMessage: 'Wyślij wiadomość',
    responseTime: 'Odpowiem w ciągu 24 godzin.',
    reachOut: 'Skontaktuj się bezpośrednio',
  },
  contactForm: {
    name: 'Imię',
    namePlaceholder: 'Jan Kowalski',
    email: 'Email',
    emailPlaceholder: 'jan@kowalski.pl',
    message: 'Wiadomość',
    messagePlaceholder:
      'Opisz krótko, czego potrzebujesz - np. stronę dla firmy, system rezerwacji...',
    sending: 'Wysyłanie...',
    send: 'Wyślij wiadomość',
    success: 'Wiadomość wysłana pomyślnie. Odezwę się najszybciej jak to możliwe.',
    error: 'Nie udało się wysłać wiadomości. Spróbuj ponownie.',
    subject: 'Kontakt ze strony głównej',
  },
  blog: {
    heading: 'Blog',
    backToBlog: 'Wróć do bloga',
    postsTagged: 'Posty z tagiem',
    by: 'autor:',
    on: 'dnia',
    postMeta: '{author} · {date}',
    onThisPage: 'Na tej stronie',
    sharePost: 'Udostępnij ten post:',
    shareVia: 'Udostępnij przez',
    prev: 'Poprzednia',
    next: 'Następna',
  },
  notFound: {
    heading: '404',
    subtitle: 'Nic tu nie ma... jeszcze.',
    backHome: 'Wróć na stronę główną',
    imgAlt: 'Jakub Nalewajk szukający z lupą',
  },
  footer: {
    copyright: 'Jakub Nalewajk',
    status: 'Status systemów',
  },
  servicesPage: {
    metaTitle: 'Usługi - Strony internetowe na zamówienie | Jakub Nalewajk',
    metaDescription:
      'Tworzę strony internetowe i aplikacje webowe na zamówienie dla firm i osób prywatnych. Fryzjer, ogrodnik, sklep online - każdy biznes zasługuje na profesjonalną obecność w sieci.',
    metaKeywords:
      'strony internetowe na zamówienie, strony internetowe Pułtusk, tworzenie stron Pułtusk, strona dla firmy, strona internetowa dla firmy, strona wizytówka, strona na zlecenie, programista Pułtusk, programista Warszawa, frontend developer na zlecenie, strony internetowe mazowieckie, tania strona internetowa, profesjonalna strona www, strona dla fryzjera, strona dla mechanika, strona dla ogrodnika, aplikacja webowa na zamówienie, system rezerwacji online, SEO optymalizacja',
    heroTitle: 'Profesjonalna strona internetowa dla Twojej firmy',
    heroDescription:
      'Potrzebujesz strony internetowej, która przyciągnie klientów? Powiedz mi czego potrzebujesz - ja to zbuduję. Szybko, bez zbędnego żargonu, dokładnie po Twojej myśli.',
    heroCta: 'Porozmawiajmy - za darmo',
    contactDescription:
      'Potrzebujesz strony internetowej dla swojej firmy? Masz pomysł na system online? Napisz - odpowiem w ciągu 24 godzin. Wstępne konsultacje są darmowe.',
    contactSource: 'Zapytanie ze strony usług',
    appIdea: {
      badge: 'Masz pomysł?',
      title: 'Każdy dobry projekt zaczyna się od problemu',
      description:
        'Nie musisz wiedzieć, jak to zbudować - wystarczy, że wiesz, co Ci przeszkadza. Opowiedz mi o swoim problemie, a ja zaproponuję rozwiązanie.',
      items: [
        {
          icon: 'mdi:briefcase-search-outline',
          problem: 'Przeglądałem oferty pracy na kilku portalach jednocześnie - traciłem czas na szukanie ręcznie.',
          solution: 'Zbudowałem aplikację, która zbiera oferty z wielu portali i pokazuje te najlepiej pasujące do mojego profilu.',
        },
        {
          icon: 'mdi:credit-card-outline',
          problem: 'Straciłem kontrolę nad subskrypcjami - nie wiedziałem ile płacę miesięcznie za różne usługi.',
          solution: 'Stworzyłem aplikację do śledzenia subskrypcji - widzę ile wydaję, kiedy co się odnawia i mogę szybko zrezygnować.',
        },
      ],
      cta: 'Porozmawiajmy o Twoim pomyśle',
      problemLabel: 'Problem',
      solutionLabel: 'Rozwiązanie',
    },
    faq: {
      badge: 'FAQ',
      title: 'Najczęstsze pytania',
      description: 'Odpowiedzi na pytania, które najczęściej słyszę od klientów.',
      items: [
        {
          question: 'Ile kosztuje strona internetowa?',
          answer:
            'Każdy projekt jest inny, więc nie podaję jednej ceny. Jedno mogę zagwarantować - pracując bezpośrednio ze mną, zapłacisz mniej i dostaniesz stronę szybciej niż w agencji. Bez zbędnych formalności - od razu lecimy do roboty. Napisz, powiedz czego potrzebujesz - dostaniesz konkretną wycenę bez ukrytych kosztów.',
          link: { href: '/blog/ile-kosztuje-strona-internetowa', text: 'Zobacz ile kosztują strony w 2026 →' },
        },
        {
          question: 'Czy sam mogę potem edytować treść na stronie?',
          answer:
            'Masz dwie opcje. Mogę zbudować stronę z panelem administracyjnym - wtedy sam edytujesz teksty, zdjęcia i wszystko co chcesz, kiedy chcesz. Razem ustalimy, co ma być edytowalne, a co się nigdy nie zmienia - nie płacisz za rzeczy, których nie potrzebujesz. Jeśli nie chcesz się tym zajmować - zostajemy w kontakcie i wszelkie zmiany ogarniam za Ciebie na bieżąco.',
        },
        {
          question: 'Mam już stronę, ale jest stara i wolna. Pomożesz?',
          answer:
            'Tak - mogę przenieść Twój projekt na nowoczesne technologie, poprawić wygląd, przyspieszyć działanie i dostosować pod Google. Nie musisz zaczynać od zera.',
        },
        {
          question: 'Czy muszę sam załatwiać domenę i hosting?',
          answer:
            'Nie - zajmuję się tym za Ciebie. Domena, hosting, konfiguracja, kłódka przy adresie - ogarniam wszystko od A do Z. Koszty domeny i hostingu pokrywasz Ty, ale pomagam wybrać najlepszą opcję i wszystko konfiguruję.',
        },
        {
          question: 'Co po wdrożeniu? Zostanę sam?',
          answer:
            'Nie. Po uruchomieniu strony zapewniam wsparcie techniczne i jestem w kontakcie. Jak coś trzeba zmienić, poprawić lub dodać - wystarczy napisać.',
        },
      ],
    },
  },
  seo: {
    jobTitle: 'Programista Frontend / Next.js Developer',
    knowsAbout: [
      'tworzenie stron internetowych',
      'aplikacje webowe',
      'strony na zamówienie',
      'strony na zlecenie',
      'programowanie frontend',
      'Next.js',
      'React',
      'optymalizacja techniczna pod Google',
    ],
    serviceName: 'Strona na Miarę – Jakub Nalewajk | Programista Frontend & Next.js Developer',
    serviceType: 'Tworzenie stron internetowych i aplikacji webowych na zamówienie i zlecenie',
    serviceDescription:
      'Strona na Miarę – programista frontend i Next.js developer z Pułtuska (mazowieckie). Tworzę strony internetowe na zamówienie i zlecenie, systemy online i aplikacje webowe w React i Next.js. Obsługuję firmy z Pułtuska, Warszawy i całej Polski.',
    countryName: 'Polska',
    offerCatalogName: 'Usługi programistyczne',
    offers: [
      {
        name: 'Strona internetowa na zamówienie i zlecenie',
        description:
          'Szybka, responsywna strona wizytówka dla firmy - zoptymalizowana pod Google. Idealna dla firm z Pułtuska i okolicy.',
      },
      {
        name: 'System online na zamówienie',
        description:
          'Dedykowane rozwiązania - systemy rezerwacji, panele do zarządzania, formularze dla klientów',
      },
      {
        name: 'Optymalizacja techniczna pod Google',
        description:
          'Strona zbudowana tak, żeby Google ją polubił - szybkie ładowanie, poprawna struktura, meta tagi, dane strukturalne',
      },
    ],
  },
} as const
