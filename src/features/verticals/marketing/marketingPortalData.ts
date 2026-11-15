import type { SupportedLocale } from '@/features/i18n';

export interface BudgetLineItem {
  id: string;
  label: string;
  sublabel: string;
  amount: string;
  percent: number;
  barClass: string;
}

export interface TimelinePhase {
  dayRange: string;
  title: string;
  detail: string;
}

export interface MarketingPortalCopy {
  stepBadge: string;
  heroImageAlt: string;
  creativeImageAlt: string;
  kpiInvestmentLabel: string;
  kpiInvestmentSub: string;
  kpiLeadsLabel: string;
  kpiLeadsSub: string;
  kpiRoiLabel: string;
  kpiRoiSub: string;
  budgetHeading: string;
  budgetTotalBadge: string;
  budgetLines: readonly BudgetLineItem[];
  creativeHeading: string;
  creativeDeliverables: readonly string[];
  timelineHeading: string;
  timelinePhases: readonly TimelinePhase[];
  miniOfferBadge: string;
  miniOfferOrderButton: string;
}

export const MARKETING_PORTAL_DATA: Record<SupportedLocale, MarketingPortalCopy> = {
  bg: {
    stepBadge: 'Демо #01 • B2B Performance Портал',
    heroImageAlt: 'B2B Performance Marketing дашборд за TechVision DACH GmbH',
    creativeImageAlt: 'Преглед на 12 Motion-Video криейтива и A/B целеви страници',
    kpiInvestmentLabel: 'Q2 Инвестиция (нето)',
    kpiInvestmentSub: '≈ 4.933,33 € / месец',
    kpiLeadsLabel: 'Прогноза MQL Лийдове',
    kpiLeadsSub: 'Целеви CPL: 69 – 89 €',
    kpiRoiLabel: 'Очакван Pipeline ROI',
    kpiRoiSub: '≈ 62.160 € нов пайплайн',
    budgetHeading: 'Прозрачна разбивка на бюджета (14.800 €)',
    budgetTotalBadge: '100% Прозрачност • 0 скрити такси',
    budgetLines: [
      {
        id: 'retainer',
        label: 'Управление, стратегия & 12 Motion криейтива',
        sublabel: 'Server-Side тракинг, 4 A/B страници, седмичен Looker Studio отчет',
        amount: '7.200 €',
        percent: 48.6,
        barClass: 'from-violet-500 to-fuchsia-400',
      },
      {
        id: 'linkedin',
        label: 'LinkedIn ABM рекламен бюджет (DACH)',
        sublabel: 'Таргетиране на C-Level и IT директори в Мюнхен, Франкфурт и Цюрих',
        amount: '4.800 €',
        percent: 32.4,
        barClass: 'from-indigo-500 to-sky-400',
      },
      {
        id: 'google',
        label: 'Google Search High-Intent кампании',
        sublabel: 'Висококонвертиращи B2B ключови думи и ретаргетинг фуния',
        amount: '2.800 €',
        percent: 19.0,
        barClass: 'from-emerald-500 to-teal-400',
      },
    ],
    creativeHeading: 'Криейтив пакет & 10-дневен Go-Live план',
    creativeDeliverables: [
      '12 адаптирани Motion-Video реклами за LinkedIn (DE/EN)',
      '4 висококонвертиращи A/B целеви страници (DSGVO)',
      '100% собственост на клиента върху рекламните акаунти и данни',
    ],
    timelineHeading: 'Старт до 10 работни дни',
    timelinePhases: [
      { dayRange: 'Ден 1–2', title: 'Одит & Тракинг', detail: 'GTM, LinkedIn Insight & CRM връзка' },
      { dayRange: 'Ден 3–6', title: 'Криейтив & Страници', detail: '12 видеа + 4 A/B Landing страници' },
      { dayRange: 'Ден 7–9', title: 'QA & Тестване', detail: 'Проверка на аудитории и оферти' },
      { dayRange: 'Ден 10', title: 'Go-Live Старт', detail: 'Старт на кампаниите и Looker отчет' },
    ],
    miniOfferBadge: 'Малка стартова оферта',
    miniOfferOrderButton: 'Поръчай Пилотен Спринт (3.900 €)',
  },
  de: {
    stepBadge: 'Demo #01 • B2B Performance-Portal',
    heroImageAlt: 'B2B Performance Marketing Analytics Dashboard für TechVision DACH GmbH',
    creativeImageAlt: 'Vorschau auf 12 Motion-Video-Creatives und A/B-Landingpages',
    kpiInvestmentLabel: 'Q2 Gesamtinvestition',
    kpiInvestmentSub: '≈ 4.933,33 € / Monat netto',
    kpiLeadsLabel: 'Prognose B2B-MQLs',
    kpiLeadsSub: 'Ziel-CPL: 69 – 89 €',
    kpiRoiLabel: 'Pipeline-Multiplikator',
    kpiRoiSub: '≈ 62.160 € neue Pipeline',
    budgetHeading: 'Transparente Budgetverteilung (14.800 € netto)',
    budgetTotalBadge: '100 % Kostentransparenz • Keine versteckten Gebühren',
    budgetLines: [
      {
        id: 'retainer',
        label: 'Betreuung, Strategie & 12 Motion-Creatives',
        sublabel: 'Server-Side Tracking, 4 A/B-Landingpages, wöchentliches Looker Reporting',
        amount: '7.200 €',
        percent: 48.6,
        barClass: 'from-violet-500 to-fuchsia-400',
      },
      {
        id: 'linkedin',
        label: 'LinkedIn ABM Werbebudget (DACH)',
        sublabel: 'C-Level & IT-Entscheider in München, Frankfurt und Zürich',
        amount: '4.800 €',
        percent: 32.4,
        barClass: 'from-indigo-500 to-sky-400',
      },
      {
        id: 'google',
        label: 'Google Search High-Intent Kampagnen',
        sublabel: 'Kaufbereite B2B-Suchbegriffe & Retargeting-Funnel',
        amount: '2.800 €',
        percent: 19.0,
        barClass: 'from-emerald-500 to-teal-400',
      },
    ],
    creativeHeading: 'Creative-Paket & 10-Tage-Launch-Fahrplan',
    creativeDeliverables: [
      '12 maßgeschneiderte Motion-Video-Ads für LinkedIn (DE/EN)',
      '4 conversion-optimierte A/B-Landingpages (DSGVO-konform)',
      '100 % Kundeneigentum an allen Werbekonten und Rohdaten',
    ],
    timelineHeading: 'Go-Live innerhalb von 10 Werktagen',
    timelinePhases: [
      { dayRange: 'Tag 1–2', title: 'Audit & Tracking', detail: 'GTM, LinkedIn Insight & CRM-Sync' },
      { dayRange: 'Tag 3–6', title: 'Creatives & LPs', detail: '12 Videos + 4 A/B-Landingpages' },
      { dayRange: 'Tag 7–9', title: 'QA & Freigabe', detail: 'Zielgruppen-Check & Anzeigen-Setup' },
      { dayRange: 'Tag 10', title: 'Kampagnenstart', detail: 'Livegang & wöchentliches Reporting' },
    ],
    miniOfferBadge: 'Kleines Starter-Angebot',
    miniOfferOrderButton: 'Test-Sprint buchen (3.900 €)',
  },
  en: {
    stepBadge: 'Demo #01 • B2B Performance Portal',
    heroImageAlt: 'B2B Performance Marketing Analytics Dashboard for TechVision DACH GmbH',
    creativeImageAlt: 'Preview of 12 motion video creatives and A/B landing pages',
    kpiInvestmentLabel: 'Q2 Net Investment',
    kpiInvestmentSub: '≈ 4.933,33 € / month',
    kpiLeadsLabel: 'Projected B2B MQLs',
    kpiLeadsSub: 'Target CPL: 69 – 89 €',
    kpiRoiLabel: 'Expected Pipeline ROI',
    kpiRoiSub: '≈ 62.160 € qualified pipeline',
    budgetHeading: 'Transparent Budget Breakdown (14.800 € net)',
    budgetTotalBadge: '100% Transparent • Zero Hidden Fees',
    budgetLines: [
      {
        id: 'retainer',
        label: 'Management, Strategy & 12 Motion Creatives',
        sublabel: 'Server-side tracking, 4 A/B landing pages, weekly Looker Studio report',
        amount: '7.200 €',
        percent: 48.6,
        barClass: 'from-violet-500 to-fuchsia-400',
      },
      {
        id: 'linkedin',
        label: 'LinkedIn ABM Ad Spend (DACH)',
        sublabel: 'Targeting C-Level & IT decision makers across Munich, Frankfurt, Zurich',
        amount: '4.800 €',
        percent: 32.4,
        barClass: 'from-indigo-500 to-sky-400',
      },
      {
        id: 'google',
        label: 'Google Search High-Intent Budget',
        sublabel: 'High-intent B2B keywords and remarketing funnel',
        amount: '2.800 €',
        percent: 19.0,
        barClass: 'from-emerald-500 to-teal-400',
      },
    ],
    creativeHeading: 'Creative Deliverables & 10-Day Launch Plan',
    creativeDeliverables: [
      '12 tailored LinkedIn motion-video ad creatives (DE/EN)',
      '4 conversion-focused A/B landing pages (GDPR compliant)',
      '100% client ownership of all ad accounts and raw data',
    ],
    timelineHeading: 'Live within 10 business days',
    timelinePhases: [
      { dayRange: 'Day 1–2', title: 'Audit & Pixel', detail: 'GTM, LinkedIn Insight & CRM sync' },
      { dayRange: 'Day 3–6', title: 'Creatives & LPs', detail: '12 videos + 4 A/B landing pages' },
      { dayRange: 'Day 7–9', title: 'QA & Review', detail: 'Audience verification & ad approval' },
      { dayRange: 'Day 10', title: 'Go-Live', detail: 'Campaign launch & Looker reporting' },
    ],
    miniOfferBadge: 'Starter Mini-Offer',
    miniOfferOrderButton: 'Order Test Sprint (3.900 €)',
  },
  tr: {
    stepBadge: 'Demo #01 • B2B Performans Portalı',
    heroImageAlt: 'TechVision DACH GmbH için B2B Performans Pazarlama Paneli',
    creativeImageAlt: '12 hareketli video reklam ve A/B açılış sayfası önizlemesi',
    kpiInvestmentLabel: 'Q2 Net Yatırım',
    kpiInvestmentSub: '≈ 4.933,33 € / ay',
    kpiLeadsLabel: 'Tahmini B2B MQL',
    kpiLeadsSub: 'Hedef CPL: 69 – 89 €',
    kpiRoiLabel: 'Beklenen Pipeline ROI',
    kpiRoiSub: '≈ 62.160 € yeni satış hunisi',
    budgetHeading: 'Şeffaf Bütçe Dağılımı (14.800 € net)',
    budgetTotalBadge: '%100 Şeffaf • Gizli Ücret Yok',
    budgetLines: [
      {
        id: 'retainer',
        label: 'Yönetim, Strateji & 12 Motion Kreatif',
        sublabel: 'Sunucu taraflı takip, 4 A/B açılış sayfası, haftalık Looker raporu',
        amount: '7.200 €',
        percent: 48.6,
        barClass: 'from-violet-500 to-fuchsia-400',
      },
      {
        id: 'linkedin',
        label: 'LinkedIn ABM Reklam Bütçesi (DACH)',
        sublabel: 'Münih, Frankfurt ve Zürih C-Level karar vericileri hedefleme',
        amount: '4.800 €',
        percent: 32.4,
        barClass: 'from-indigo-500 to-sky-400',
      },
      {
        id: 'google',
        label: 'Google Search Yüksek Niyet Bütçesi',
        sublabel: 'Yüksek dönüşümlü B2B anahtar kelimeler & yeniden hedefleme',
        amount: '2.800 €',
        percent: 19.0,
        barClass: 'from-emerald-500 to-teal-400',
      },
    ],
    creativeHeading: 'Kreatif Paket & 10 Günlük Canlıya Geçiş Planı',
    creativeDeliverables: [
      'LinkedIn için 12 özel Motion-Video reklam tasarımı (DE/EN)',
      '4 dönüşüm odaklı A/B açılış sayfası (DSGVO uyumlu)',
      'Tüm reklam hesapları ve verilerde %100 müşteri mülkiyeti',
    ],
    timelineHeading: '10 iş günü içinde yayında',
    timelinePhases: [
      { dayRange: '1–2. Gün', title: 'Denetim & Takip', detail: 'GTM, LinkedIn Insight & CRM bağlantısı' },
      { dayRange: '3–6. Gün', title: 'Kreatif & Sayfa', detail: '12 video + 4 A/B açılış sayfası' },
      { dayRange: '7–9. Gün', title: 'Test & Onay', detail: 'Hedef kitle ve reklam kurulumu' },
      { dayRange: '10. Gün', title: 'Canlı Yayın', detail: 'Kampanya başlangıcı & Looker raporu' },
    ],
    miniOfferBadge: 'Küçük Başlangıç Teklifi',
    miniOfferOrderButton: 'Test Sprinti Başlat (3.900 €)',
  },
};
