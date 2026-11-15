import type { SupportedLocale } from '@/features/i18n';

export interface AutoGallerySlideMeta {
  id: 'exterior' | 'cockpit' | 'dekra';
  imageSrc: string;
  label: string;
  caption: string;
}

export interface LeasingCostRow {
  label: string;
  note: string;
  value: string;
  highlight?: boolean;
}

export interface AutoLeasingPortalCopy {
  stepBadge: string;
  gallerySlides: readonly AutoGallerySlideMeta[];
  kpiRateLabel: string;
  kpiRateSub: string;
  kpiPowerLabel: string;
  kpiPowerValue: string;
  kpiPowerSub: string;
  kpiBatteryLabel: string;
  kpiBatteryValue: string;
  kpiBatterySub: string;
  leaseHeading: string;
  leaseBadge: string;
  leaseRows: readonly LeasingCostRow[];
  taxAdvantageLabel: string;
  taxAdvantageValue: string;
  dekraHeading: string;
  dekraSpecs: readonly string[];
  miniOfferBadge: string;
  miniOfferButton: string;
}

export const AUTO_LEASING_PORTAL_DATA: Record<SupportedLocale, AutoLeasingPortalCopy> = {
  bg: {
    stepBadge: 'Демо #03 • Премиум Автолизинг Щутгарт',
    gallerySlides: [
      {
        id: 'exterior',
        imageSrc: '/images/auto/taycan-exterior-stuttgart.jpg',
        label: 'Екстериор • Vulkangraumetallic',
        caption: 'Porsche Taycan 4S Performance Plus (04/2025) • 20" алуминиеви джанти',
      },
      {
        id: 'cockpit',
        imageSrc: '/images/auto/taycan-cockpit-interior.jpg',
        label: 'Кокпит & Интериор',
        caption: 'Изцяло дигитално табло, кожени спортни седалки & матрични светлини',
      },
      {
        id: 'dekra',
        imageSrc: '/images/auto/taycan-dekra-battery-check.jpg',
        label: 'DEKRA SoH Диагностика (98,4 %)',
        caption: 'Официална проверка на батерията 93,4 kWh & пълна сервизна история',
      },
    ],
    kpiRateLabel: 'Месечна вноска (Бизнес)',
    kpiRateSub: '0 € първоначална вноска • 48 мес.',
    kpiPowerLabel: 'Задвижване & Пробег',
    kpiPowerValue: '408 PS • 93,4 kWh',
    kpiPowerSub: '14.200 km • Първа рег. 04/2025',
    kpiBatteryLabel: 'DEKRA Батерия (SoH)',
    kpiBatteryValue: '98,4 %',
    kpiBatterySub: 'Гаранция на батерията до 04/2033',
    leaseHeading: 'Калкулация Бизнес Лизинг (Gewerbeleasing)',
    leaseBadge: 'VIN: WP0ZZZ99ZPS214890 • 1-ви собственик',
    leaseRows: [
      { label: 'Месечна лизингова вноска', note: 'Без ДДС (нето)', value: '1.190,00 € / мес.', highlight: true },
      { label: 'Първоначална вноска (Anzahlung)', note: 'Без капиталов разход', value: '0,00 €' },
      { label: 'Срок & Годишен пробег', note: 'Толеранс +2.500 km гратис', value: '48 мес. • 15.000 km/год.' },
      { label: 'Надвишени / Спестени километри', note: 'При финално отчитане', value: '+0,14 €/km • -0,08 €/km' },
      { label: 'Доставка & Регистрация в Германия', note: 'Бързо предаване Щутгарт', value: 'До 5 работни дни' },
    ],
    taxAdvantageLabel: 'Данъчно предимство служебен автомобил (DE)',
    taxAdvantageValue: '0,25 % правило (Електромобил)',
    dekraHeading: 'DEKRA Доклад, VIN Проверка & Гаранции',
    dekraSpecs: [
      'VIN WP0ZZZ99ZPS214890: Без ПТП, без пребоядисвани детайли, 1-ви собственик в Германия',
      'DEKRA Сертификат: Капацитет на батерията (SoH) 98,4 % — протокол с високоволтов тест',
      '24 месеца Porsche Approved гаранция + фабрична гаранция на батерията до 04/2033',
      'Включен втори комплект 20-инчови зимни гуми Porsche с оригинални джанти',
    ],
    miniOfferBadge: 'Опционален пакет поддръжка',
    miniOfferButton: 'Добави Full-Service (+85 €/мес.)',
  },
  de: {
    stepBadge: 'Demo #03 • Gewerbeleasing Stuttgart',
    gallerySlides: [
      {
        id: 'exterior',
        imageSrc: '/images/auto/taycan-exterior-stuttgart.jpg',
        label: 'Exterieur • Vulkangraumetallic',
        caption: 'Porsche Taycan 4S Performance Plus (04/2025) • 20" Aero-Leichtmetallräder',
      },
      {
        id: 'cockpit',
        imageSrc: '/images/auto/taycan-cockpit-interior.jpg',
        label: 'Cockpit & Interieur',
        caption: 'Curved Display, perforierte Ledersportsitze & Ambientebeleuchtung',
      },
      {
        id: 'dekra',
        imageSrc: '/images/auto/taycan-dekra-battery-check.jpg',
        label: 'DEKRA SoH Check (98,4 %)',
        caption: 'Zertifizierter Batterietest (93,4 kWh) & lückenloses Porsche Scheckheft',
      },
    ],
    kpiRateLabel: 'Gewerbe-Leasingrate',
    kpiRateSub: '0 € Sonderzahlung • 48 Monate',
    kpiPowerLabel: 'Antrieb & Laufleistung',
    kpiPowerValue: '408 PS • 93,4 kWh',
    kpiPowerSub: '14.200 km • EZ 04/2025 • 1. Hand',
    kpiBatteryLabel: 'DEKRA Batterie-SoH',
    kpiBatteryValue: '98,4 %',
    kpiBatterySub: 'Hochvolt-Garantie bis 04/2033',
    leaseHeading: 'Transparente Gewerbeleasing-Kalkulation',
    leaseBadge: 'FIN: WP0ZZZ99ZPS214890 • Unfallfrei',
    leaseRows: [
      { label: 'Monatliche Leasingrate', note: 'Netto zzgl. 19 % MwSt.', value: '1.190,00 € / Mon.', highlight: true },
      { label: 'Sonderzahlung / Anzahlung', note: '100 % liquiditätsschonend', value: '0,00 €' },
      { label: 'Laufzeit & Jahresfahrleistung', note: 'Inkl. 2.500 km Kulanzgrenze', value: '48 Mon. • 15.000 km/Jahr' },
      { label: 'Mehr- / Minderkilometer', note: 'Faire Kilometerabrechnung', value: '0,14 €/km • -0,08 €/km' },
      { label: 'Zulassung & Auslieferung', note: 'Standort Stuttgart', value: 'In 5 Werktagen abholbereit' },
    ],
    taxAdvantageLabel: 'Steuervorteil Dienstwagen (Deutschland)',
    taxAdvantageValue: '0,25 %-Versteuerung (E-Auto)',
    dekraHeading: 'DEKRA-Gutachten, FIN-Historie & Garantien',
    dekraSpecs: [
      'FIN WP0ZZZ99ZPS214890: Nachweislich unfallfrei, 1. Hand, lückenloses Porsche Zentrum Scheckheft',
      'DEKRA-Batteriezertifikat mit 98,4 % State of Health (SoH) auf alle Hochvolt-Module',
      '24 Monate Porsche Approved Anschlussgarantie + Werksgarantie auf HV-Batterie bis 04/2033',
      'Inklusive 20-Zoll Porsche Winterkompletträder & 11/22 kW Ladekabel-Set',
    ],
    miniOfferBadge: 'Optionales Service-Upgrade',
    miniOfferButton: 'Full-Service buchen (+85 €/Mon.)',
  },
  en: {
    stepBadge: 'Demo #03 • Business Leasing Stuttgart',
    gallerySlides: [
      {
        id: 'exterior',
        imageSrc: '/images/auto/taycan-exterior-stuttgart.jpg',
        label: 'Exterior • Volcano Grey',
        caption: 'Porsche Taycan 4S Performance Plus (04/2025) • 20" Aero Alloy Wheels',
      },
      {
        id: 'cockpit',
        imageSrc: '/images/auto/taycan-cockpit-interior.jpg',
        label: 'Cockpit & Cabin',
        caption: 'Curved digital cluster, black leather sport seats & ambient lighting',
      },
      {
        id: 'dekra',
        imageSrc: '/images/auto/taycan-dekra-battery-check.jpg',
        label: 'DEKRA SoH Check (98.4%)',
        caption: 'Certified 93.4 kWh high-voltage battery test & full dealership service log',
      },
    ],
    kpiRateLabel: 'Monthly Business Rate',
    kpiRateSub: '0 € down payment • 48 months',
    kpiPowerLabel: 'Powertrain & Mileage',
    kpiPowerValue: '408 PS • 93.4 kWh',
    kpiPowerSub: '14,200 km • First reg. 04/2025',
    kpiBatteryLabel: 'DEKRA Battery SoH',
    kpiBatteryValue: '98.4 %',
    kpiBatterySub: 'HV battery warranty until 04/2033',
    leaseHeading: 'Commercial Leasing Structure & Terms',
    leaseBadge: 'VIN: WP0ZZZ99ZPS214890 • 1st Owner',
    leaseRows: [
      { label: 'Monthly Lease Installment', note: 'Net excl. 19% VAT', value: '1,190.00 € / mo', highlight: true },
      { label: 'Upfront Capital Deposit', note: 'Zero initial outlay', value: '0.00 €' },
      { label: 'Term & Annual Allowance', note: 'Includes 2,500 km grace buffer', value: '48 mo • 15,000 km/yr' },
      { label: 'Excess / Unused Mileage Rate', note: 'End-of-term adjustment', value: '0.14 €/km • -0.08 €/km' },
      { label: 'Registration & Handover', note: 'Stuttgart flagship hub', value: 'Ready in 5 business days' },
    ],
    taxAdvantageLabel: 'German Company Car Tax Benefit',
    taxAdvantageValue: '0.25% EV Tax Rate',
    dekraHeading: 'DEKRA Report, VIN History & Warranties',
    dekraSpecs: [
      'VIN WP0ZZZ99ZPS214890: Verified accident-free, 1st corporate owner, official Porsche logbook',
      'DEKRA Battery Health Report confirming 98.4% State of Health (SoH) across cell modules',
      '24-month Porsche Approved warranty + OEM high-voltage battery coverage through 04/2033',
      'Includes second set of 20-inch Porsche winter wheels & Type-2 / Mode-3 charging cables',
    ],
    miniOfferBadge: 'Optional Maintenance Add-On',
    miniOfferButton: 'Add Full-Service (+85 €/mo)',
  },
  tr: {
    stepBadge: 'Demo #03 • Kurumsal Leasing Stuttgart',
    gallerySlides: [
      {
        id: 'exterior',
        imageSrc: '/images/auto/taycan-exterior-stuttgart.jpg',
        label: 'Dış Tasarım • Volkan Grisi',
        caption: 'Porsche Taycan 4S Performance Plus (04/2025) • 20" Aero Jantlar',
      },
      {
        id: 'cockpit',
        imageSrc: '/images/auto/taycan-cockpit-interior.jpg',
        label: 'Kokpit & İç Mekan',
        caption: 'Kavisli dijital gösterge, siyah deri spor koltuklar ve ambiyans aydınlatma',
      },
      {
        id: 'dekra',
        imageSrc: '/images/auto/taycan-dekra-battery-check.jpg',
        label: 'DEKRA SoH Testi (%98,4)',
        caption: 'Sertifikalı 93,4 kWh batarya sağlık raporu ve eksiksiz servis geçmişi',
      },
    ],
    kpiRateLabel: 'Aylık Leasing Taksiti',
    kpiRateSub: '0 € peşinat • 48 ay vade',
    kpiPowerLabel: 'Güç & Kilometre',
    kpiPowerValue: '408 PS • 93,4 kWh',
    kpiPowerSub: '14.200 km • İlk tescil 04/2025',
    kpiBatteryLabel: 'DEKRA Batarya SoH',
    kpiBatteryValue: '%98,4',
    kpiBatterySub: '04/2033’e kadar batarya garantisi',
    leaseHeading: 'Ticari Leasing Hesaplaması & Koşullar',
    leaseBadge: 'Şasi: WP0ZZZ99ZPS214890 • Kazasız',
    leaseRows: [
      { label: 'Aylık Leasing Ödemesi', note: 'KDV hariç net tutar', value: '1.190,00 € / ay', highlight: true },
      { label: 'Peşinat / Ön Ödeme', note: 'Sermaye bağlamadan kullanım', value: '0,00 €' },
      { label: 'Süre & Yıllık Kilometre', note: '+2.500 km tolerans dahil', value: '48 Ay • 15.000 km/yıl' },
      { label: 'Ek / Eksik Kilometre Bedeli', note: 'Dönem sonu mahsuplaşma', value: '0,14 €/km • -0,08 €/km' },
      { label: 'Tescil & Teslimat Süresi', note: 'Stuttgart teslim noktası', value: '5 iş gününde teslim' },
    ],
    taxAdvantageLabel: 'Almanya Şirket Aracı Vergi Avantajı',
    taxAdvantageValue: '%0,25 Elektrikli Araç Vergisi',
    dekraHeading: 'DEKRA Raporu, Şasi Geçmişi & Garanti',
    dekraSpecs: [
      'Şasi WP0ZZZ99ZPS214890: Kayıtlı ilk sahip, kazasız ve tam yetkili Porsche servis bakımlı',
      'DEKRA Batarya Raporu ile %98,4 Devlet Sağlığı (SoH) doğrulaması',
      '24 ay Porsche Approved garantisi + 04/2033’e kadar fabrika yüksek voltaj batarya garantisi',
      '20 inç Porsche kış lastiği jant seti ve hızlı şarj kablosu fiyata dahildir',
    ],
    miniOfferBadge: 'Opsiyonel Bakım Paketi',
    miniOfferButton: 'Full-Service Ekle (+85 €/ay)',
  },
};
