import type { DemoVerticalSlug } from './types';
import type { SupportedLocale } from '@/features/i18n';

export interface MiniOfferSummary {
  shortSummary: string;
  miniOfferTitle: string;
  miniOfferPrice: string;
  miniOfferDetails: string;
}

export const MINI_OFFER_SUMMARIES: Record<
  DemoVerticalSlug,
  Record<SupportedLocale, MiniOfferSummary>
> = {
  'marketing-agency': {
    bg: {
      shortSummary: 'B2B Лийд-Генерация & Performance Пакет',
      miniOfferTitle: 'Малка стартова оферта: 30-дневен Тестов Спринт',
      miniOfferPrice: '3.900 € нето',
      miniOfferDetails: '1.900 € управление + 4 криейтива + 2.000 € бюджет за 20–25 B2B лийда',
    },
    de: {
      shortSummary: 'B2B Lead-Gen & Performance-Paket',
      miniOfferTitle: 'Starter-Mini-Angebot: 30-Tage-Test-Sprint',
      miniOfferPrice: '3.900 € netto',
      miniOfferDetails: '1.900 € Betreuung & 4 Creatives + 2.000 € Budget für 20–25 B2B-Leads',
    },
    en: {
      shortSummary: 'B2B Lead-Gen & Performance Package',
      miniOfferTitle: 'Starter Mini-Offer: 30-Day Test Sprint',
      miniOfferPrice: '3.900 € net',
      miniOfferDetails: '1.900 € management & 4 creatives + 2.000 € ad spend for 20–25 B2B leads',
    },
    tr: {
      shortSummary: 'B2B Lead-Gen & Performans Paketi',
      miniOfferTitle: 'Küçük Başlangıç Teklifi: 30 Günlük Test Sprinti',
      miniOfferPrice: '3.900 € net',
      miniOfferDetails: '1.900 € yönetim + 4 kreatif + 2.000 € reklam bütçesi (20–25 B2B lead)',
    },
  },
  'real-estate': {
    bg: {
      shortSummary: 'Пентхаус 218 m² Мюнхен + 2 гаража',
      miniOfferTitle: 'Малка опция: 14-дневна Резервация & Интериорен пакет',
      miniOfferPrice: '0 € резервация (+48.000 € до ключ)',
      miniOfferDetails: 'Блокира имота за 14 дни без такса; опция дизайнерско обзавеждане на тераса и спални',
    },
    de: {
      shortSummary: 'Penthouse 218 m² München + 2 Stellplätze',
      miniOfferTitle: 'Mini-Option: 14-Tage-Reservierung & Interior-Paket',
      miniOfferPrice: '0 € Reservierung (+48.000 € schlüsselfertig)',
      miniOfferDetails: '14 Tage Exklusiv-Reservierung gratis; optionales Design-Möbelpaket für Terrasse & Suiten',
    },
    en: {
      shortSummary: '218 m² Munich Penthouse + 2 Garages',
      miniOfferTitle: 'Mini-Option: 14-Day Priority Hold & Turnkey Interior',
      miniOfferPrice: '0 € hold (+48.000 € turnkey)',
      miniOfferDetails: '14-day fee-free exclusivity hold; optional designer furnishing for terrace & suites',
    },
    tr: {
      shortSummary: 'Münih 218 m² Çatı Katı + 2 Garaj',
      miniOfferTitle: 'Mini Seçenek: 14 Günlük Rezervasyon & İç Tasarım',
      miniOfferPrice: '0 € rezervasyon (+48.000 € anahtar teslim)',
      miniOfferDetails: '14 gün ücretsiz öncelikli ayırtma; teras ve süitler için opsiyonel tasarım paketi',
    },
  },
  'auto-leasing': {
    bg: {
      shortSummary: 'Porsche Taycan 4S Бизнес Лизинг',
      miniOfferTitle: 'Малка опция: Full-Service Поддръжка & 7-дневен Тест',
      miniOfferPrice: '+85 € / месец',
      miniOfferDetails: 'Пълно техническо обслужване, гуми и приоритетна регистрация за 5 дни',
    },
    de: {
      shortSummary: 'Porsche Taycan 4S Gewerbeleasing',
      miniOfferTitle: 'Mini-Option: Full-Service-Paket & Auslieferung',
      miniOfferPrice: '+85 € / Monat',
      miniOfferDetails: 'Inkl. Wartung, Verschleiß, Winterräder-Wechsel & Zulassung in 5 Werktagen',
    },
    en: {
      shortSummary: 'Porsche Taycan 4S Business Lease',
      miniOfferTitle: 'Mini-Option: Full-Service Maintenance Pack',
      miniOfferPrice: '+85 € / month',
      miniOfferDetails: 'Covers scheduled maintenance, wear parts & 5-day registration delivery',
    },
    tr: {
      shortSummary: 'Porsche Taycan 4S Kurumsal Leasing',
      miniOfferTitle: 'Mini Seçenek: Full-Service Bakım Paketi',
      miniOfferPrice: '+85 € / ay',
      miniOfferDetails: 'Periyodik bakım, kış lastiği değişimi ve 5 günde tescil teslimatı dahil',
    },
  },
  'medical-clinic': {
    bg: {
      shortSummary: '2 Импланта Straumann + Цирконий',
      miniOfferTitle: 'Малка опция: 3D DVT Диагностика & Разсрочване 0%',
      miniOfferPrice: '328,33 € / мес. (12 вноски)',
      miniOfferDetails: 'Безлихвено плащане на доплащането от 3.940 € + включен 3D скенер',
    },
    de: {
      shortSummary: '2 Straumann-Implantate + Zirkonkronen',
      miniOfferTitle: 'Mini-Option: 0%-Ratenzahlung & 3D-DVT Check',
      miniOfferPrice: '328,33 € / Monat (12 Raten)',
      miniOfferDetails: 'Zinsfreie Teilzahlung für den Eigenanteil (3.940 €) inkl. digitaler OP-Planung',
    },
    en: {
      shortSummary: '2 Straumann Implants + Zirconia Crowns',
      miniOfferTitle: 'Mini-Option: 0% Installment Plan & 3D Scan',
      miniOfferPrice: '328,33 € / month (12x)',
      miniOfferDetails: 'Interest-free split for the 3.940 € copay including 3D DVT digital planning',
    },
    tr: {
      shortSummary: '2 Straumann İmplant + Zirkonyum Kuron',
      miniOfferTitle: 'Mini Seçenek: %0 Faizli Taksit & 3D Tarama',
      miniOfferPrice: '328,33 € / ay (12 taksit)',
      miniOfferDetails: '3.940 € hasta payı için faizsiz ödeme planı ve 3D dijital cerrahi planlama',
    },
  },
  'construction-interior': {
    bg: {
      shortSummary: 'Ремонт Лофт 145 m² до ключ',
      miniOfferTitle: 'Малка опция: Пакет „Смарт KNX Осветление & Сценарии“',
      miniOfferPrice: '4.900 € нето (надграждане)',
      miniOfferDetails: 'Автоматизация на щори, подово отопление и светлинни сцени през телефон',
    },
    de: {
      shortSummary: '145 m² Loft-Kernsanierung schlüsselfertig',
      miniOfferTitle: 'Mini-Option: Smart KNX Licht- & Klimapaket',
      miniOfferPrice: '4.900 € netto (Upgrade)',
      miniOfferDetails: 'App-Steuerung für Fußbodenheizung, Raffstores & Lichtszenen nach DIN VDE',
    },
    en: {
      shortSummary: '145 m² Loft Turnkey Renovation',
      miniOfferTitle: 'Mini-Option: Smart KNX Lighting & Climate',
      miniOfferPrice: '4.900 € net (Upgrade)',
      miniOfferDetails: 'Mobile scenes for underfloor heating, blinds & architectural LED lighting',
    },
    tr: {
      shortSummary: '145 m² Loft Anahtar Teslim Tadilat',
      miniOfferTitle: 'Mini Seçenek: Akıllı KNX Aydınlatma & İklim',
      miniOfferPrice: '4.900 € net (Ek Paket)',
      miniOfferDetails: 'Yerden ısıtma, panjur ve LED senaryoları için akıllı kontrol modülü',
    },
  },
  'hospitality-stay': {
    bg: {
      shortSummary: 'Бутиков престой Шале #4 Гармиш',
      miniOfferTitle: 'Малка опция: Закуска „Gipfelglück“ & Късно напускане',
      miniOfferPrice: '18 €/ден • +45 € Late Check-out',
      miniOfferDetails: 'Доставка на алпийска закуска в 07:30 ч. и престой до 13:00 ч.',
    },
    de: {
      shortSummary: 'Boutique Chalet #4 Garmisch-Partenkirchen',
      miniOfferTitle: 'Mini-Option: Frühstückskorb & Late Check-out',
      miniOfferPrice: '18 €/Tag • +45 € bis 13:00 Uhr',
      miniOfferDetails: 'Regionaler Frühstückskorb um 07:30 Uhr & entspannter Check-out bis 13:00 Uhr',
    },
    en: {
      shortSummary: 'Boutique Chalet #4 Garmisch Stay',
      miniOfferTitle: 'Mini-Option: Alpine Breakfast & Late Check-out',
      miniOfferPrice: '18 €/day • +45 € until 13:00',
      miniOfferDetails: 'Fresh breakfast basket at 07:30 AM & extended checkout until 1:00 PM',
    },
    tr: {
      shortSummary: 'Garmisch Butik Dağ Evi #4 Konaklama',
      miniOfferTitle: 'Mini Seçenek: Kahvaltı Sepeti & Geç Çıkış',
      miniOfferPrice: '18 €/gün • +45 € 13:00’e kadar',
      miniOfferDetails: 'Saat 07:30’da kapıya kahvaltı servisi ve 13:00’e kadar geç çıkış imkanı',
    },
  },
  'legal-contracts': {
    bg: {
      shortSummary: 'B2B Договор 185.000 € & Правен преглед',
      miniOfferTitle: 'Малка опция: Експресен Redline & Преговори на § 8',
      miniOfferPrice: '3.400 € нето (Фиксиран хонорар)',
      miniOfferDetails: 'Пълна корекция на клаузата за отговорност и NDA до 28.11.2026',
    },
    de: {
      shortSummary: 'B2B-Rahmenvertrag 185.000 € & Redline',
      miniOfferTitle: 'Mini-Option: Express-Redline & § 8 Verhandlung',
      miniOfferPrice: '3.400 € netto (Pauschale)',
      miniOfferDetails: 'Vollständige Haftungsbegrenzung auf 1x Vertragswert & NDA-Prüfung bis 28.11.',
    },
    en: {
      shortSummary: '185.000 € B2B Contract & Redline Review',
      miniOfferTitle: 'Mini-Option: Express Redline & § 8 Cap',
      miniOfferPrice: '3.400 € net (Flat Fee)',
      miniOfferDetails: 'Full liability cap negotiation & NDA markup delivered by Nov 28, 2026',
    },
    tr: {
      shortSummary: '185.000 € B2B Sözleşme & Hukuki İnceleme',
      miniOfferTitle: 'Mini Seçenek: Hızlı Redline & § 8 Müzakere',
      miniOfferPrice: '3.400 € net (Sabit Ücret)',
      miniOfferDetails: 'Sorumluluk sınırı ve gizlilik (NDA) revizyonunun 28.11’e kadar teslimi',
    },
  },
  'finance-accounting': {
    bg: {
      shortSummary: 'BWA 1,94 Mio € & Q4 Данъчен Календар',
      miniOfferTitle: 'Малка опция: Годишно KfW Предсрочно Погасяване',
      miniOfferPrice: 'до 15.000 € без такса (30.12.)',
      miniOfferDetails: 'Спестява лихва по кредита с 2,85% фиксирана ставка и оптимизира Q4 ликвидност',
    },
    de: {
      shortSummary: 'BWA 1,94 Mio. € & Q4 Steuerkalender',
      miniOfferTitle: 'Mini-Option: KfW-Sondertilgung zum 30.12.',
      miniOfferPrice: 'bis 15.000 € kostenfrei',
      miniOfferDetails: 'Reduziert 214.000 € Restschuld (2,85 % Zins) & sichert Q4-Steuerliquidität',
    },
    en: {
      shortSummary: '1.94M € P&L & Q4 Tax Liquidity',
      miniOfferTitle: 'Mini-Option: Fee-Free KfW Prepayment (Dec 30)',
      miniOfferPrice: 'up to 15.000 € fee-free',
      miniOfferDetails: 'Lowers 214.000 € principal (2.85% fixed) while preserving Q4 tax cashflow',
    },
    tr: {
      shortSummary: '1,94 Milyon € Ciro & Q4 Vergi Takvimi',
      miniOfferTitle: 'Mini Seçenek: 30.12 Ücretsiz KfW Erken Ödeme',
      miniOfferPrice: '15.000 €’ya kadar ücretsiz',
      miniOfferDetails: '214.000 € kredi anaparasını (%2,85 sabit faiz) azaltır, Q4 nakit akışını korur',
    },
  },
};
