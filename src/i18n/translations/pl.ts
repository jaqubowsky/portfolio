export default {
  meta: {
    title: "Jakub Nalewajk - Fullstack Developer (Node.js, NestJS, Next.js)",
    description:
      "Fullstack developer z Warszawy, 3 lata komercyjnego doświadczenia. Node.js, NestJS, Next.js. Buduję logikę domenową, integracje API i warstwę danych w SaaS-ie z obszaru finansów i księgowości.",
    keywords:
      "Jakub Nalewajk, fullstack developer, fullstack developer Warszawa, Node.js developer, NestJS developer, Next.js developer, React developer, TypeScript, PostgreSQL, Redis, BullMQ, Prisma, Drizzle ORM, Nx, Turborepo, Playwright, Vitest, Testing Library, AWS, Strapi, open banking, portfolio programisty, praca fullstack Warszawa, praca zdalna programista",
    blogTitle: "Blog - Jakub Nalewajk",
    blogDescription:
      "Praktyczne artykuły o Next.js, React, TypeScript i tworzeniu stron internetowych. Poradniki, rozwiązania problemów i lekcje z realnych projektów.",
    notFoundTitle: "404 - Nie znaleziono strony | Jakub Nalewajk",
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
    skipToContent: "Przejdź do treści",
    closeMenu: "Zamknij menu",
  },
  hero: {
    jobTitle: "Fullstack Developer · Node.js, NestJS, Next.js",
    description:
      "Trzy lata komercyjnego doświadczenia. Dziś pracuję nad SaaS-em z obszaru finansów i księgowości: funkcje frontendowe i backendowe, integracje API, warstwa danych. Równolegle prowadzę platformę dubaj.estate jako jedyny developer, od architektury po proces releasowy.",
    cta: "Napisz do mnie",
    downloadCv: "Pobierz CV",
    availability: [
      { icon: "mdi:map-marker-outline", text: "Warszawa lub zdalnie" },
      { icon: "mdi:briefcase-outline", text: "Pełen etat" },
      { icon: "mdi:translate", text: "Angielski C1" },
      { icon: "mdi:school-outline", text: "Inżynier informatyki, WSB Merito" },
    ],
  },
  experience: {
    title: "Gdzie pracowałem",
    description:
      "Komercyjne projekty, w których brałem udział - od architektury po wdrożenie.",
    jobs: [
      {
        company: "autoMEE",
        url: "https://automee.pl/",
        role: "Fullstack Developer",
        tech: "TypeScript, Node.js, React",
        period: "Lip 2026 – Obecnie",
        location: "Pełen etat, zdalnie",
        bullets: [
          "Rozwijam SaaS z obszaru finansów i księgowości: funkcje frontendowe i backendowe oraz integracje API.",
          "Pracuję nad obsługą dokumentów, rozliczeń, walut i procesów księgowych.",
          "Integracje z usługami bankowymi i open banking, w tym import transakcji.",
          "Diagnozuję i usuwam błędy produkcyjne, regresje i problemy z danymi.",
          "Współpracuję przy wdrażaniu funkcji na rynki międzynarodowe.",
        ],
      },
      {
        company: "CodeYourBrand",
        url: "https://www.codeyourbrand.com/",
        role: "Frontend Developer → Project Lead",
        tech: "Next.js, NestJS, Nx, Strapi",
        period: "Paź 2025 – Obecnie",
        location: "Part-time od lip 2026",
        bullets: [
          "Project Lead od stycznia 2026. Jedyny developer na dubaj.estate, platformie nieruchomości w Dubaju: architektura, proces releasowy, komunikacja z biznesem.",
          "Zaprojektowałem platformę jako 5 pionowych modułów domenowych na czterech warstwach. Zależności idą w jedną stronę, w dół, więc żaden moduł nie sięga do wnętrza innego (Nx, Next.js, Strapi CMS).",
          "Napisałem testy jednostkowe, integracyjne i e2e dla dubaj.estate, Parkingowo i Maspex (Vitest, Testing Library, Playwright).",
          "Postawiłem visual regression testing w CI. Każdy PR porównuje zrzuty ekranu z baseline'em, więc rozjechany layout wywala build zamiast trafiać do klienta. W tym samym pipelinie leci Lighthouse, a Renovate z automerge trzyma zależności aktualne.",
          "Ustawiłem tagowane releasy z generowanym changelogiem, branch protection i rulesety wymuszające review przed mergem.",
          "Skonfigurowałem hosting produkcyjny: AWS Amplify dla aplikacji Next.js, Strapi CMS z osobną konfiguracją per środowisko. Problemy produkcyjne debuguję z logów CloudWatch.",
          "Ustawiłem w repo workflow pracy zespołu z Claude Code: wspólną konfigurację, własne komendy, konwencje i dokumentację, na której to działa.",
          "Wcześniej jako Mid Frontend Developer przebudowałem i otestowałem Maspex Photo Service z panelem administracyjnym dla dużej firmy FMCG, jako jedyny frontend na projekcie. Bundle mniejszy o ~30%. Oba trzymiesięczne milestone'y przed terminem, co dało awans na Project Leada w 3 miesiące.",
        ],
      },
      {
        company: "Haergi",
        url: "https://haergi.pl/",
        role: "Frontend → Fullstack Developer",
        tech: "Next.js, Express, MongoDB",
        period: "Sie 2023 – Paź 2025",
        location: "Warszawa",
        bullets: [
          "Zbudowałem fullstackową platformę LeadMe AI - SaaS do automatyzacji zadań klienckich i śledzenia operacji (React, React Query, Express).",
          "Stworzyłem InstagoAI od zera - kreator stron AI dla małych firm (Next.js, Express, MongoDB, TypeScript). Odpowiadałem za cały stack: auth, backend, frontend, modelowanie bazy danych, workflow AI.",
          "Zbudowałem platformę e-commerce B2B dla Mezze Foods (warszawska restauracja) na bazie InstagoAI, zintegrowaną z LeadMe AI do zamówień, fakturowania i komunikacji z klientami. 3500+ zamówień miesięcznie.",
          "Napisałem narzędzie i18n do CI/CD, które generowało tłumaczenia dla 15+ języków w ~1500 kluczach. Zdjęło ręczne tłumaczenia ze wszystkich projektów firmy.",
          "Zaczynałem jako frontend developer: 3 landing page'y produktów startupowych z wynikiem 90+ w Lighthouse (wydajność i dostępność). Po 12 miesiącach awans na fullstacka.",
        ],
      },
    ],
  },
  featuredWork: {
    title: "Projekt, który prowadzę sam",
    description:
      "Jak wygląda praca, w której odpowiadam za wszystko od architektury po release.",
    problemLabel: "Problem",
    decisionsLabel: "Decyzje",
    project: {
      name: "dubaj.estate",
      url: "https://dubaj.estate/",
      subtitle: "Platforma nieruchomości w Dubaju · Project Lead",
      problem:
        "Platforma miała rosnąć o kolejne obszary biznesowe, a zespół to jedna osoba. Przy takim układzie każdy skrót w strukturze kodu wraca po miesiącu jako godziny debugowania.",
      decisions: [
        "Pięć pionowych modułów domenowych na czterech warstwach. Zależności idą w jedną stronę, w dół, więc żaden moduł nie sięga do wnętrza innego.",
        "Testy jednostkowe, integracyjne i e2e pisane razem z funkcjami, nie po nich (Vitest, Testing Library, Playwright).",
        "Visual regression w CI. Każdy PR porównuje zrzuty ekranu z baseline'em, więc rozjechany layout wywala build zamiast trafiać do klienta.",
        "Tagowane releasy z generowanym changelogiem, branch protection i rulesety wymuszające review. Renovate z automerge trzyma zależności aktualne.",
      ],
      tech: [
        "Nx",
        "Next.js",
        "NestJS",
        "Strapi CMS",
        "Playwright",
        "AWS Amplify",
      ],
    },
  },
  projects: {
    title: "Co zbudowałem po godzinach",
    description:
      "Projekty prowadzone od schematu bazy po wdrożenie na własnym serwerze. Każdy powstał, bo napotkałem realny problem i chciałem go rozwiązać.",
    items: [
      {
        description:
          "Lecząc jelita z dietetykiem klinicznym, brałem 20+ suplementów i antybiotyków z kilku protokołów - totalny chaos. Zbudowałem fullstackową PWA, gdzie AI parsuje protokoły od lekarza (PDF, Excel, zdjęcia), łączy je z moim inwentarzem i tworzy dzienny plan - z prognozą zapasów, powiadomieniami push i odhaczaniem jednym tapnięciem. Schemat na 8+ tabelach, repository pattern, migracje Drizzle, testy jednostkowe, integracyjne i e2e.",
      },
      {
        description:
          "Miałem dość ręcznego przeglądania ofert pracy na kilku portalach. Zbudowałem fullstackową platformę w monorepo Turborepo - scrapuje polskie portale, generuje embeddingi wektorowe przez Transformers.js i re-rankinguje oferty. Supabase z pgvector do wyszukiwania podobieństwa, cała inferencja AI działa lokalnie w TypeScript.",
      },
      {
        description:
          "Straciłem kontrolę nad subskrypcjami - nie wiedziałem ile płacę miesięcznie. Zbudowałem fullstackową apkę z MySQL + Prisma, płatnościami Stripe za premium, synchronizacją kursów walut i analityką wydatków w Recharts. Warstwowe server actions z auth, rate limitingiem i Sentry.",
      },
    ],
  },
  services: {
    badge: "Usługi",
    title: "Co mogę dla Ciebie zbudować",
    description:
      "Strony i aplikacje na zamówienie dla firm i osób prywatnych. Fryzjer, warsztat, ogrodnik, sklep - postawię Cię w sieci i zdejmę z Ciebie ręczną robotę.",
    items: [
      {
        icon: "mdi:web",
        title: "Strona internetowa",
        description:
          "Szybka, responsywna strona wizytówka. Buduję ją pod wyszukiwarki od pierwszego dnia: szybkie ładowanie, poprawna struktura, meta tagi. Żeby klienci Cię znaleźli.",
      },
      {
        icon: "mdi:cellphone-cog",
        title: "Aplikacja dla Twojej firmy",
        description:
          "Rezerwacje, zamówienia, grafik pracowników, faktury. Zamiast zeszytu i Excela jedno miejsce, które to ogarnia i działa na telefonie.",
      },
      {
        icon: "mdi:autorenew",
        title: "Automatyzacja ręcznej roboty",
        description:
          "Co tydzień to samo przeklikiwanie? Przepisywanie danych z maila do arkusza? Napiszę coś, co zrobi to za Ciebie i nie pomyli się o północy.",
      },
    ],
    processBadge: "Współpraca",
    processTitle: "Jak wygląda współpraca",
    processDescription:
      "Pracujesz bezpośrednio ze mną, bez pośredników i zbędnych spotkań. Prosta strona firmowa? Gotowa w 2-3 tygodnie. Aplikacja z rezerwacjami albo zamówieniami? Zwykle miesiąc do dwóch, zależnie od zakresu.",
    steps: [
      {
        title: "Rozmowa",
        description:
          "Napisz do mnie - opowiedz czego potrzebujesz. Wstępne konsultacje są darmowe.",
      },
      {
        title: "Wycena i plan",
        description:
          "Razem ustalamy wygląd, funkcje i zakres. Ty decydujesz, ja doradzam i wyceniam. Bez ukrytych kosztów.",
      },
      {
        title: "Budowa",
        description:
          "Buduję i na bieżąco pokazuję postępy. Masz uwagi? Poprawiamy od razu, nie na koniec.",
      },
      {
        title: "Gotowe",
        description:
          "Projekt ląduje w sieci - szybki, gotowy pod Google i działający na każdym urządzeniu. Po starcie nie znikam, jestem w kontakcie.",
      },
    ],
    cta: "Porozmawiajmy o Twoim projekcie",
    supportNote:
      "Po wdrożeniu nie zostawiam Cię samego - zapewniam wsparcie techniczne i jestem w kontakcie na wypadek zmian lub pytań.",
  },
  caseStudy: {
    badge: "Realizacja",
    title: "Jak wygląda gotowy projekt",
    description:
      "Moja własna strona portfolio - zaprojektowana i zbudowana od zera.",
    project: {
      name: "jnalewajk.me",
      subtitle: "Strona firmowa z blogiem",
      problem:
        "Potrzebowałem strony, która pokaże co robię i jakie mam doświadczenie - z blogiem, formularzem kontaktowym i dwoma językami.",
      solution:
        "Ładuje się w mniej niż 1.5 sekundy, jest widoczna w Google i wygodna na telefonie. Formularz kontaktowy, blog i automatyczne przełączanie języka. Wszystko zbudowane przeze mnie od zera.",
      results: [
        { value: "95+", label: "Wydajność Google" },
        { value: "<1.5s", label: "Czas ładowania" },
        { value: "2", label: "Języki (PL/EN)" },
      ],
      tech: [
        "Szybka strona",
        "Formularz kontaktowy",
        "Blog",
        "Gotowa pod Google",
        "Responsywność",
      ],
      cta: "Chcesz coś podobnego?",
      timeline: "~3 tygodnie",
      timelineLabel: "Czas realizacji",
    },
  },
  skills: {
    title: "Z czym pracuję",
    description: "Technologie, których używam na co dzień w pracy komercyjnej.",
    categories: {
      languages: "Języki",
      backend: "Backend",
      data: "Dane i kolejki",
      frontend: "Frontend",
      styling: "Style i UI",
      testing: "Testy",
      architecture: "Architektura i tooling",
      ai: "Narzędzia AI",
      other: "Inne",
    },
  },
  contact: {
    title: "Współpracujmy",
    description:
      "Szukasz fullstacka do zespołu? Jestem dostępny na pełen etat z dwutygodniowym okresem wypowiedzenia. Napisz - odpowiem w ciągu 24 godzin.",
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
      "Napisz krótko, z czym przychodzisz - rekrutacja, projekt, pytanie techniczne.",
    sending: "Wysyłanie...",
    send: "Wyślij wiadomość",
    success:
      "Wiadomość wysłana pomyślnie. Odezwę się najszybciej jak to możliwe.",
    error: "Nie udało się wysłać wiadomości. Spróbuj ponownie.",
    subject: "Kontakt ze strony głównej",
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
  },
  servicesPage: {
    metaTitle:
      "Strony i aplikacje na zamówienie - Pułtusk i okolice | Jakub Nalewajk",
    metaDescription:
      "Robię strony internetowe i aplikacje, które zdejmują z firm ręczną robotę: rezerwacje, zamówienia, grafiki, faktury. Pułtusk, Warszawa i zdalnie w całej Polsce.",
    metaKeywords:
      "strony internetowe na zamówienie, strony internetowe Pułtusk, tworzenie stron Pułtusk, aplikacja dla firmy, aplikacja na zamówienie, system rezerwacji online, panel zamówień, grafik pracowników online, automatyzacja dla małych firm, strona dla firmy, strona wizytówka, programista Pułtusk, programista Warszawa, strony internetowe mazowieckie, profesjonalna strona www, strona dla fryzjera, strona dla mechanika, strona dla ogrodnika, aplikacja webowa na zamówienie, SEO optymalizacja",
    heroTitle: "Strona albo aplikacja, która zdejmie z Ciebie ręczną robotę",
    heroDescription:
      "Klienci dzwonią po godzinach, żeby umówić termin. Zamówienia spisujesz w zeszycie. Grafik układasz w Excelu. To wszystko da się zrobić raz i zapomnieć. Powiedz, co Cię najbardziej męczy, a ja to zbuduję.",
    heroCta: "Porozmawiajmy - za darmo",
    contactDescription:
      "Potrzebujesz strony dla swojej firmy? Masz pomysł na aplikację, która oszczędzi Ci kilka godzin tygodniowo? Napisz - odpowiem w ciągu 24 godzin. Wstępne konsultacje są darmowe.",
    contactSource: "Zapytanie ze strony usług",
    appIdea: {
      badge: "Masz pomysł?",
      title: "Każdy dobry projekt zaczyna się od problemu",
      description:
        "Nie musisz wiedzieć, jak to zbudować - wystarczy, że wiesz, co Ci przeszkadza. Opowiedz mi o swoim problemie, a ja zaproponuję rozwiązanie.",
      items: [
        {
          icon: "mdi:calendar-clock",
          problem:
            "Klienci dzwonią po godzinach, żeby umówić wizytę. Nie odbieram i termin przepada.",
          solution:
            "Rezerwacja online z potwierdzeniem. Kalendarz zapełnia się sam, także w nocy.",
        },
        {
          icon: "mdi:receipt-text-outline",
          problem:
            "Zamówienia spisuję w zeszycie, a potem przepisuję do faktur. Co miesiąc kilka godzin i zawsze jakaś pomyłka.",
          solution:
            "Panel z zamówieniami, który sam składa fakturę i wysyła ją do klienta.",
        },
        {
          icon: "mdi:account-clock-outline",
          problem:
            "Grafik pracowników układam w Excelu i co tydzień ktoś dzwoni z pytaniem, kto ma jutro zmianę.",
          solution: "Grafik online, każdy widzi swoje zmiany w telefonie.",
        },
      ],
      cta: "Porozmawiajmy o Twoim pomyśle",
      problemLabel: "Problem",
      solutionLabel: "Rozwiązanie",
    },
    faq: {
      badge: "FAQ",
      title: "Najczęstsze pytania",
      description:
        "Odpowiedzi na pytania, które najczęściej słyszę od klientów.",
      items: [
        {
          question: "Ile kosztuje strona internetowa?",
          answer:
            "Każdy projekt jest inny, więc nie podaję jednej ceny. Jedno mogę zagwarantować - pracując bezpośrednio ze mną, zapłacisz mniej i dostaniesz stronę szybciej niż w agencji. Bez zbędnych formalności, od razu lecimy do roboty. Napisz, powiedz czego potrzebujesz, dostaniesz konkretną wycenę bez ukrytych kosztów.",
          link: {
            href: "/blog/ile-kosztuje-strona-internetowa",
            text: "Zobacz ile kosztują strony w 2026 →",
          },
        },
        {
          question: "Robisz też aplikacje, nie tylko strony?",
          answer:
            "Tak, i często to właśnie one dają najwięcej. Rezerwacje online, panel zamówień, grafik pracowników, wystawianie faktur, powiadomienia do klientów. Na co dzień pracuję przy platformie księgowej dla ponad tysiąca użytkowników, więc systemy, które muszą się zgadzać co do złotówki, to mój chleb powszedni.",
        },
        {
          question: "Czy sam mogę potem edytować treść?",
          answer:
            "Masz dwie opcje. Mogę zbudować stronę z panelem administracyjnym - wtedy sam edytujesz teksty, zdjęcia i wszystko co chcesz, kiedy chcesz. Razem ustalimy, co ma być edytowalne, a co się nigdy nie zmienia, żebyś nie płacił za rzeczy, których nie potrzebujesz. Jeśli nie chcesz się tym zajmować, zostajemy w kontakcie i zmiany ogarniam za Ciebie na bieżąco.",
        },
        {
          question: "Mam już stronę, ale jest stara i wolna. Pomożesz?",
          answer:
            "Tak. Mogę przenieść Twój projekt na nowoczesne technologie, poprawić wygląd, przyspieszyć działanie i dostosować pod Google. Nie musisz zaczynać od zera.",
        },
        {
          question: "Czy muszę sam załatwiać domenę i hosting?",
          answer:
            "Nie, zajmuję się tym za Ciebie. Domena, hosting, konfiguracja, kłódka przy adresie - ogarniam wszystko od A do Z. Koszty domeny i hostingu pokrywasz Ty, ale pomagam wybrać najlepszą opcję i wszystko konfiguruję.",
        },
        {
          question: "Co po wdrożeniu? Zostanę sam?",
          answer:
            "Nie. Po uruchomieniu zapewniam wsparcie techniczne i jestem w kontakcie. Jak coś trzeba zmienić, poprawić lub dodać - wystarczy napisać.",
        },
      ],
    },
  },
  seo: {
    jobTitle: "Fullstack Developer (Node.js, NestJS, Next.js)",
    knowsAbout: [
      "rozwój aplikacji webowych",
      "architektura modułowa",
      "integracje API",
      "testy automatyczne",
      "CI/CD",
      "tworzenie stron internetowych",
      "aplikacje na zamówienie",
    ],
    serviceName:
      "Strona na Miarę – Jakub Nalewajk | Strony i aplikacje na zamówienie",
    serviceType: "Tworzenie stron internetowych i aplikacji na zamówienie",
    serviceDescription:
      "Strona na Miarę – programista z Pułtuska (mazowieckie). Robię strony internetowe i aplikacje, które zdejmują z firm ręczną robotę: rezerwacje, zamówienia, grafiki, faktury. Obsługuję firmy z Pułtuska, Warszawy i całej Polski.",
    countryName: "Polska",
    offerCatalogName: "Usługi programistyczne",
    offers: [
      {
        name: "Strona internetowa na zamówienie",
        description:
          "Szybka, responsywna strona wizytówka dla firmy, zoptymalizowana pod Google. Idealna dla firm z Pułtuska i okolicy.",
      },
      {
        name: "Aplikacja dla firmy",
        description:
          "Rezerwacje, panel zamówień, grafik pracowników, faktury. Jedno miejsce zamiast zeszytu i arkuszy.",
      },
      {
        name: "Automatyzacja powtarzalnej pracy",
        description:
          "Przepisywanie danych, cotygodniowe raporty, wysyłka powiadomień. Robi się samo, bez pomyłek.",
      },
    ],
  },
} as const;
