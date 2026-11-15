import type { SupportedLocale } from '@/features/i18n';

export interface MedicalSlideMeta {
  id: 'implantPlan' | 'suite';
  imageSrc: string;
  label: string;
  caption: string;
}

export interface HkpCostRow {
  label: string;
  note: string;
  amount: string;
  isTotal?: boolean;
}

export interface TreatmentPhaseItem {
  stage: string;
  title: string;
  detail: string;
}

export interface MedicalClinicPortalCopy {
  stepBadge: string;
  gallerySlides: readonly MedicalSlideMeta[];
  kpiCopayLabel: string;
  kpiCopayValue: string;
  kpiCopaySub: string;
  kpiImplantLabel: string;
  kpiImplantValue: string;
  kpiImplantSub: string;
  kpiWarrantyLabel: string;
  kpiWarrantyValue: string;
  kpiWarrantySub: string;
  hkpHeading: string;
  hkpBadge: string;
  hkpRows: readonly HkpCostRow[];
  timelineHeading: string;
  phases: readonly TreatmentPhaseItem[];
  careHeading: string;
  careRules: readonly string[];
  miniOfferBadge: string;
  miniOfferButton: string;
}

export const MEDICAL_CLINIC_PORTAL_DATA: Record<SupportedLocale, MedicalClinicPortalCopy> = {
  bg: {
    stepBadge: 'Демо #04 • Дентална Клиника Франкфурт',
    gallerySlides: [
      {
        id: 'implantPlan',
        imageSrc: '/images/medical/dental-3d-implant-plan.jpg',
        label: '3D DVT Имплантатен План',
        caption: 'Дигитално позициониране Regio 46/47 • 2x Straumann® Bone Level Titanium',
      },
      {
        id: 'suite',
        imageSrc: '/images/medical/clinic-treatment-suite.jpg',
        label: 'Клинична Зала • Франкфурт',
        caption: 'Стерилна хирургична зона с дигитален интраорален скенер и комфорт',
      },
    ],
    kpiCopayLabel: 'Лично доплащане (Eigenanteil)',
    kpiCopayValue: '3.940,00 €',
    kpiCopaySub: 'След GKV + допълнителна застраховка',
    kpiImplantLabel: 'Система & Коронки',
    kpiImplantValue: '2x Straumann®',
    kpiImplantSub: 'Титанови импланти + Цирконий',
    kpiWarrantyLabel: 'Гаранция на клиниката',
    kpiWarrantyValue: '5 Години',
    kpiWarrantySub: 'При ежегодна профилактика (PZR)',
    hkpHeading: 'Финансов Лечебен План (Heil- und Kostenplan)',
    hkpBadge: 'GOZ / BEMA • Regio 46 & 47',
    hkpRows: [
      { label: 'Общ хонорар (Хирургия + GOZ + Зъботехника)', note: 'Пълна стойност', amount: '6.850,00 €' },
      { label: 'Здравна каса (GKV Festzuschuss)', note: 'Директно приспадане', amount: '- 1.420,00 €' },
      { label: 'Допълнителна дентална застраховка', note: 'Одобрена сума', amount: '- 1.490,00 €' },
      { label: 'Окончателно доплащане от пациента', note: 'Или 12 x 328,33 € (0 % лихва)', amount: '3.940,00 €', isTotal: true },
    ],
    timelineHeading: 'Етапи на лечение (ок. 10 седмици)',
    phases: [
      { stage: 'Среща 1', title: 'Имплантация (60 мин.)', detail: 'Локална анестезия + поставяне на 2 импланта' },
      { stage: 'Ден 7', title: 'Сваляне на конци', detail: 'Контролен преглед и проверка на заздравяването' },
      { stage: 'Седм. 10', title: 'Финални циркониеви коронки', detail: 'Дигитален отпечатък и трайно фиксиране' },
    ],
    careHeading: 'Инструкции преди и след процедурата',
    careRules: [
      'Преди операция: Лека закуска сутрин, без алкохол 24 часа преди интервенцията.',
      'След операция (0–48 ч.): Интервално охлаждане на бузата и избягване на физическо натоварване.',
      '72 часа без кафе, черен чай и пушене; мека хладка храна през първите 3 дни.',
    ],
    miniOfferBadge: 'Гъвкаво финансиране',
    miniOfferButton: 'Активирай 0% Разсрочване (328 €/мес.)',
  },
  de: {
    stepBadge: 'Demo #04 • Zahnmedizin Frankfurt',
    gallerySlides: [
      {
        id: 'implantPlan',
        imageSrc: '/images/medical/dental-3d-implant-plan.jpg',
        label: '3D-DVT Implantatplanung',
        caption: 'Regio 46/47 • 2x Straumann® Titanimplantate inkl. digitaler Bohrschablone',
      },
      {
        id: 'suite',
        imageSrc: '/images/medical/clinic-treatment-suite.jpg',
        label: 'Behandlungssuite Frankfurt',
        caption: 'Steriler OP-Bereich mit 3D-Intraoralscanner & ruhiger Privatatmosphäre',
      },
    ],
    kpiCopayLabel: 'Patienten-Eigenanteil',
    kpiCopayValue: '3.940,00 €',
    kpiCopaySub: 'Nach GKV & Zusatzversicherung',
    kpiImplantLabel: 'Implantat & Zahnersatz',
    kpiImplantValue: '2x Straumann®',
    kpiImplantSub: 'Titanimplantate + Vollkeramik-Zirkon',
    kpiWarrantyLabel: 'Praxis-Garantie',
    kpiWarrantyValue: '5 Jahre',
    kpiWarrantySub: 'Bei jährlicher Prophylaxe (PZR)',
    hkpHeading: 'Heil- und Kostenplan (HKP) auf einen Blick',
    hkpBadge: 'GOZ / Festzuschuss • Regio 46/47',
    hkpRows: [
      { label: 'Gesamthonorar (Chirurgie, GOZ & Meisterlabor)', note: 'inkl. 3D-DVT Planung', amount: '6.850,00 €' },
      { label: 'Festzuschuss Gesetzliche Krankenkasse (GKV)', note: 'Direkte Anrechnung', amount: '- 1.420,00 €' },
      { label: 'Erstattung Zahnzusatzversicherung', note: 'Bereits bewilligt', amount: '- 1.490,00 €' },
      { label: 'Verbleibender Patienten-Eigenanteil', note: 'Optional 12 x 328,33 € (0 %)', amount: '3.940,00 €', isTotal: true },
    ],
    timelineHeading: 'Behandlungsablauf in 3 Terminen (ca. 10 Wochen)',
    phases: [
      { stage: 'Sitzung 1', title: 'Implantation (ca. 60 Min.)', detail: 'Schmerzfreie Lokalanästhesie Regio 46/47' },
      { stage: 'Tag 7', title: 'Nahtentfernung & Kontrolle', detail: 'Wundkontrolle & digitales Röntgen-Check-up' },
      { stage: 'Woche 10', title: 'Zirkonkronen Eingliederung', detail: 'Meisterlabor-Vollkeramik fest verschraubt' },
    ],
    careHeading: 'Merkblatt: Verhalten vor & nach der OP',
    careRules: [
      'Vor der OP: Leichtes Frühstück am Behandlungsmorgen; 24 Std. vorher kein Alkohol.',
      'Nach der OP (48 Std.): Wange intervallartig mit Kühlpad kühlen, kein schwerer Sport.',
      '72 Std. kein Kaffee, schwarzer Tee oder Rauchen; 3 Tage weiche, lauwarme Kost.',
    ],
    miniOfferBadge: 'Patientenfreundliche Teilzahlung',
    miniOfferButton: '0%-Ratenzahlung wählen (328,33 €/Mon.)',
  },
  en: {
    stepBadge: 'Demo #04 • Dental Implantology Frankfurt',
    gallerySlides: [
      {
        id: 'implantPlan',
        imageSrc: '/images/medical/dental-3d-implant-plan.jpg',
        label: '3D CBCT Implant Blueprint',
        caption: 'Region 46/47 • 2x Straumann® Titanium Implants with Digital Surgical Guide',
      },
      {
        id: 'suite',
        imageSrc: '/images/medical/clinic-treatment-suite.jpg',
        label: 'Frankfurt Clinical Suite',
        caption: 'Sterile surgical room with 3D intraoral scanning & calm patient comfort',
      },
    ],
    kpiCopayLabel: 'Net Patient Copay',
    kpiCopayValue: '3,940.00 €',
    kpiCopaySub: 'After public & private insurance',
    kpiImplantLabel: 'Implant & Crown Spec',
    kpiImplantValue: '2x Straumann®',
    kpiImplantSub: 'Titanium + Full-Zirconia Crowns',
    kpiWarrantyLabel: 'Clinic Warranty',
    kpiWarrantyValue: '5 Years',
    kpiWarrantySub: 'With annual professional hygiene',
    hkpHeading: 'Treatment & Cost Estimate (Heil- und Kostenplan)',
    hkpBadge: 'GOZ Schedule • Teeth 46/47',
    hkpRows: [
      { label: 'Total Clinical & Master Lab Fee', note: 'Includes 3D DVT planning', amount: '6,850.00 €' },
      { label: 'Statutory Health Fund Grant (GKV)', note: 'Deducted directly', amount: '- 1,420.00 €' },
      { label: 'Supplementary Dental Insurance', note: 'Pre-approved benefit', amount: '- 1,490.00 €' },
      { label: 'Final Patient Out-of-Pocket Balance', note: 'Or 12 x 328.33 € at 0% APR', amount: '3,940.00 €', isTotal: true },
    ],
    timelineHeading: '3-Appointment Clinical Timeline (~10 Weeks)',
    phases: [
      { stage: 'Session 1', title: 'Implant Placement (60 min)', detail: 'Gentle local anesthesia in region 46/47' },
      { stage: 'Day 7', title: 'Suture Removal', detail: 'Healing check & sterile wound inspection' },
      { stage: 'Week 10', title: 'Final Zirconia Crowns', detail: 'Digital scan fit & permanent restoration' },
    ],
    careHeading: 'Pre-Op & Post-Op Care Checklist',
    careRules: [
      'Before surgery: Light breakfast on the morning of surgery; zero alcohol for 24 hours.',
      'First 48 hours post-op: Apply intermittent cold packs to the cheek and avoid exertion.',
      'No coffee or smoking for 72 hours; soft lukewarm meals for the first 3 days.',
    ],
    miniOfferBadge: 'Flexible Zero-Interest Split',
    miniOfferButton: 'Select 0% Plan (328.33 €/mo)',
  },
  tr: {
    stepBadge: 'Demo #04 • Diş Kliniği Frankfurt',
    gallerySlides: [
      {
        id: 'implantPlan',
        imageSrc: '/images/medical/dental-3d-implant-plan.jpg',
        label: '3D DVT İmplant Planı',
        caption: 'Bölge 46/47 • 2x Straumann® Titanyum İmplant ve Dijital Cerrahi Kılavuz',
      },
      {
        id: 'suite',
        imageSrc: '/images/medical/clinic-treatment-suite.jpg',
        label: 'Frankfurt Klinik Odası',
        caption: 'Steril cerrahi donanım, 3D ağız içi tarayıcı ve konforlu özel oda',
      },
    ],
    kpiCopayLabel: 'Net Hasta Katkı Payı',
    kpiCopayValue: '3.940,00 €',
    kpiCopaySub: 'GKV + Ek Sigorta düşüldükten sonra',
    kpiImplantLabel: 'İmplant & Kuron Sistemi',
    kpiImplantValue: '2x Straumann®',
    kpiImplantSub: 'Titanyum İmplant + Zirkonyum',
    kpiWarrantyLabel: 'Klinik Garantisi',
    kpiWarrantyValue: '5 Yıl',
    kpiWarrantySub: 'Yıllık profesyonel diş bakımı ile',
    hkpHeading: 'Tedavi ve Maliyet Planı (Heil- und Kostenplan)',
    hkpBadge: 'GOZ Tarifesi • Diş 46/47',
    hkpRows: [
      { label: 'Toplam Klinik & Usta Laboratuvar Ücreti', note: '3D DVT tarama dahil', amount: '6.850,00 €' },
      { label: 'Kamu Sağlık Sigortası Desteği (GKV)', note: 'Doğrudan düşülür', amount: '- 1.420,00 €' },
      { label: 'Özel Ek Diş Sigortası Ödemesi', note: 'Onaylanmış kapsam', amount: '- 1.490,00 €' },
      { label: 'Kalan Hasta Ödeme Tutarı', note: 'Veya 12 x 328,33 € (%0 faiz)', amount: '3.940,00 €', isTotal: true },
    ],
    timelineHeading: '3 Seanslık Tedavi Takvimi (~10 Hafta)',
    phases: [
      { stage: '1. Seans', title: 'İmplant Yerleştirme (60 dk)', detail: 'Lokal anestezi ile ağrısız bölge 46/47 işlemi' },
      { stage: '7. Gün', title: 'Dikiş Alımı & Kontrol', detail: 'İyileşme muayenesi ve dijital röntgen kontrolü' },
      { stage: '10. Hafta', title: 'Kalıcı Zirkonyum Kuronlar', detail: 'Dijital ölçü ve üst yapıların sabitlenmesi' },
    ],
    careHeading: 'Operasyon Öncesi ve Sonrası Talimatlar',
    careRules: [
      'İşlem öncesi: Sabah hafif kahvaltı yapın; 24 saat öncesinden alkol almayın.',
      'İşlem sonrası (ilk 48 saat): Yanak bölgesine aralıklı soğuk kompres uygulayın.',
      '72 saat kahve ve sigaradan uzak durun; ilk 3 gün ılık ve yumuşak gıdalar tüketin.',
    ],
    miniOfferBadge: 'Faizsiz Taksit Seçeneği',
    miniOfferButton: '%0 Taksit Seç (328,33 €/ay)',
  },
};
