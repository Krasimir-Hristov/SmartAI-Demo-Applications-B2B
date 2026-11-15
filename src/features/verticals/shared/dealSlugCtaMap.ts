import type { DemoVerticalSlug } from '@/features/catalog';
import type { SupportedLocale } from '@/features/i18n';

export interface SlugCtaCopy {
  primaryLabel: string;
  secondaryLabel: string;
  crmDestination: string;
}

export const SLUG_CTA_MAP: Record<DemoVerticalSlug, Record<SupportedLocale, SlugCtaCopy>> = {
  'marketing-agency': {
    bg: {
      primaryLabel: 'Приемам офертата (14.800 €) & Стартирай кампанията',
      secondaryLabel: 'Запази 15-мин Kick-off видео среща',
      crmDestination: 'HubSpot CRM & Bergmann Account Lead',
    },
    de: {
      primaryLabel: 'Angebot annehmen (14.800 €) & Kampagne starten',
      secondaryLabel: '15-Min. Kick-off Video-Call buchen',
      crmDestination: 'HubSpot CRM & Bergmann Account Lead',
    },
    en: {
      primaryLabel: 'Accept Proposal (14.800 €) & Launch Campaign',
      secondaryLabel: 'Book 15-Min Kick-Off Video Call',
      crmDestination: 'HubSpot CRM & Bergmann Account Lead',
    },
    tr: {
      primaryLabel: 'Teklifi Onayla (14.800 €) & Kampanyayı Başlat',
      secondaryLabel: '15 Dk. Kick-off Görüşmesi Ayarla',
      crmDestination: 'HubSpot CRM & Bergmann Hesap Yöneticisi',
    },
  },
  'real-estate': {
    bg: {
      primaryLabel: 'Резервирай имота за 14 дни (0 € такса) & Заяви покупка',
      secondaryLabel: 'Запази час за VIP оглед на място',
      crmDestination: 'Нотариална кантора Мюнхен & Von Kronberg Desk',
    },
    de: {
      primaryLabel: '14 Tage kostenlos reservieren (0 €) & Kauf anfragen',
      secondaryLabel: 'VIP-Vor-Ort-Besichtigung buchen',
      crmDestination: 'Notariat München & Von Kronberg Desk',
    },
    en: {
      primaryLabel: 'Reserve Property 14 Days (0 € Fee) & Request Purchase',
      secondaryLabel: 'Book Private VIP Viewing',
      crmDestination: 'Munich Notary Office & Von Kronberg Desk',
    },
    tr: {
      primaryLabel: '14 Gün Ücretsiz Ayırt (0 €) & Satın Alma Başlat',
      secondaryLabel: 'Özel VIP Yerinde Gezi Planla',
      crmDestination: 'Münih Noterliği & Von Kronberg Masası',
    },
  },
  'auto-leasing': {
    bg: {
      primaryLabel: 'Заяви лизинг (1.190 €/мес.) & Резервирай автомобила',
      secondaryLabel: 'Запази тест драйв в Щутгарт',
      crmDestination: 'Autohaus Stern Leasing & DEKRA Desk',
    },
    de: {
      primaryLabel: 'Leasing beantragen (1.190 €/Mon.) & Fahrzeug sichern',
      secondaryLabel: 'Probefahrt in Stuttgart buchen',
      crmDestination: 'Autohaus Stern Leasing & DEKRA Desk',
    },
    en: {
      primaryLabel: 'Request Lease (1.190 €/mo) & Reserve Vehicle',
      secondaryLabel: 'Book Stuttgart Test Drive',
      crmDestination: 'Autohaus Stern Leasing & DEKRA Desk',
    },
    tr: {
      primaryLabel: 'Leasing Başlat (1.190 €/ay) & Aracı Ayırt',
      secondaryLabel: 'Stuttgart Test Sürüşü Planla',
      crmDestination: 'Autohaus Stern Leasing & DEKRA Masası',
    },
  },
  'medical-clinic': {
    bg: {
      primaryLabel: 'Потвърждавам лечебния план (3.940 € доплащане)',
      secondaryLabel: 'Запази час за 1-ва процедура',
      crmDestination: 'Praxis Dr. Weber Kalender & HKP Desk',
    },
    de: {
      primaryLabel: 'Heil- und Kostenplan freigeben (3.940 € Eigenanteil)',
      secondaryLabel: 'OP-Termin verbindlich reservieren',
      crmDestination: 'Praxis Dr. Weber Kalender & HKP Desk',
    },
    en: {
      primaryLabel: 'Approve Treatment Plan (3.940 € Copay)',
      secondaryLabel: 'Schedule First Clinical Session',
      crmDestination: 'Dr. Weber Clinic Calendar & HKP Desk',
    },
    tr: {
      primaryLabel: 'Tedavi Planını Onayla (3.940 € Hasta Payı)',
      secondaryLabel: 'İlk Klinik Randevusunu Planla',
      crmDestination: 'Dr. Weber Klinik Takvimi & HKP Masası',
    },
  },
  'construction-interior': {
    bg: {
      primaryLabel: 'Одобрявам КСС офертата (84.500 € нето)',
      secondaryLabel: 'Запази среща на обекта в Берлин',
      crmDestination: 'BauWerk Projektleitung Berlin',
    },
    de: {
      primaryLabel: 'Kostenvoranschlag freigeben (84.500 € netto)',
      secondaryLabel: 'Baustellen-Begehung in Berlin buchen',
      crmDestination: 'BauWerk Projektleitung Berlin',
    },
    en: {
      primaryLabel: 'Approve Renovation Quote (84.500 € net)',
      secondaryLabel: 'Book Berlin Site Walkthrough',
      crmDestination: 'BauWerk Project Desk Berlin',
    },
    tr: {
      primaryLabel: 'Tadilat Teklifini Onayla (84.500 € net)',
      secondaryLabel: 'Berlin Şantiye İncelemesi Planla',
      crmDestination: 'BauWerk Proje Yönetimi Berlin',
    },
  },
  'hospitality-stay': {
    bg: {
      primaryLabel: 'Потвърди дигитален Check-in & Екстри',
      secondaryLabel: 'Заяви късен Check-out (+45 €)',
      crmDestination: 'AlpenGlüh SmartScan Concierge',
    },
    de: {
      primaryLabel: 'Digitalen Check-in & Extras bestätigen',
      secondaryLabel: 'Late Check-out bis 13:00 Uhr (+45 €)',
      crmDestination: 'AlpenGlüh SmartScan Concierge',
    },
    en: {
      primaryLabel: 'Confirm Digital Check-in & Add-ons',
      secondaryLabel: 'Request Late Check-out (+45 €)',
      crmDestination: 'AlpenGlüh SmartScan Concierge',
    },
    tr: {
      primaryLabel: 'Dijital Check-in & Ekstraları Onayla',
      secondaryLabel: '13:00 Geç Çıkış Talep Et (+45 €)',
      crmDestination: 'AlpenGlüh SmartScan Konsiyerj',
    },
  },
  'legal-contracts': {
    bg: {
      primaryLabel: 'Подпиши пълномощно & Стартирай Redline',
      secondaryLabel: 'Запази адвокатска консултация',
      crmDestination: 'Kanzlei Dr. Lindner Aktenverwaltung',
    },
    de: {
      primaryLabel: 'Vollmacht freigeben & Redline starten',
      secondaryLabel: 'Anwalts-Gespräch vereinbaren',
      crmDestination: 'Kanzlei Dr. Lindner Aktenverwaltung',
    },
    en: {
      primaryLabel: 'Approve Mandate & Start Redline',
      secondaryLabel: 'Schedule Counsel Briefing',
      crmDestination: 'Dr. Lindner Law Firm Dossier Desk',
    },
    tr: {
      primaryLabel: 'Vekaleti Onayla & Redline Başlat',
      secondaryLabel: 'Avukat Görüşmesi Planla',
      crmDestination: 'Dr. Lindner Hukuk Bürosu Dosya Masası',
    },
  },
  'finance-accounting': {
    bg: {
      primaryLabel: 'Одобри Q4 данъчно плащане (42.860 €)',
      secondaryLabel: 'Запази данъчна консултация',
      crmDestination: 'FinanzHaus Rhein DATEV Desk',
    },
    de: {
      primaryLabel: 'Q4-Steuerzahlung freigeben (42.860 €)',
      secondaryLabel: 'Steuerberatungs-Call buchen',
      crmDestination: 'FinanzHaus Rhein DATEV Desk',
    },
    en: {
      primaryLabel: 'Approve Q4 Tax Execution (42.860 €)',
      secondaryLabel: 'Book Tax & Liquidity Review',
      crmDestination: 'FinanzHaus Rhein DATEV Desk',
    },
    tr: {
      primaryLabel: 'Q4 Vergi Ödemesini Onayla (42.860 €)',
      secondaryLabel: 'Vergi & Likidite Görüşmesi Planla',
      crmDestination: 'FinanzHaus Rhein DATEV Masası',
    },
  },
};
