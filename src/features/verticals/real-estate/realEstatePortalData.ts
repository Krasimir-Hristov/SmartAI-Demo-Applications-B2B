import type { SupportedLocale } from '@/features/i18n';

export interface GallerySlideMeta {
  id: 'terrace' | 'interior' | 'floorplan';
  imageSrc: string;
  label: string;
  caption: string;
}

export interface AcquisitionCostRow {
  label: string;
  rateOrNote: string;
  amount: string;
  isTotal?: boolean;
}

export interface RealEstatePortalCopy {
  stepBadge: string;
  gallerySlides: readonly GallerySlideMeta[];
  specPriceLabel: string;
  specPriceSub: string;
  specAreaLabel: string;
  specAreaValue: string;
  specAreaSub: string;
  specEnergyLabel: string;
  specEnergyValue: string;
  specEnergySub: string;
  costsHeading: string;
  costsBadge: string;
  costRows: readonly AcquisitionCostRow[];
  hausgeldLabel: string;
  hausgeldValue: string;
  techHeading: string;
  techSpecs: readonly string[];
  miniOfferBadge: string;
  miniOfferButton: string;
}

export const REAL_ESTATE_PORTAL_DATA: Record<SupportedLocale, RealEstatePortalCopy> = {
  bg: {
    stepBadge: 'Демо #02 • Имотно Exposé Мюнхен',
    gallerySlides: [
      {
        id: 'terrace',
        imageSrc: '/images/real-estate/penthouse-terrace-munich.jpg',
        label: 'Панорамна тераса 64 m²',
        caption: 'Югозападна тераса над Мюнхен-Bogenhausen с изглед към Изар и Алпите',
      },
      {
        id: 'interior',
        imageSrc: '/images/real-estate/penthouse-living-interior.jpg',
        label: 'Дневен тракт 218 m²',
        caption: 'Френски прозорци, височина 3,15 м и естествен дъбов паркет тип рибена кост',
      },
      {
        id: 'floorplan',
        imageSrc: '/images/real-estate/penthouse-floorplan-3d.jpg',
        label: '3D Разпределение (4,5 стаи)',
        caption: 'Частен асансьор с чип, Master Suite и обграждаща покривна тераса',
      },
    ],
    specPriceLabel: 'Продажна цена',
    specPriceSub: 'Вкл. 2 подземни паркоместа',
    specAreaLabel: 'Жилищна площ',
    specAreaValue: '218 m² • 4,5 стаи',
    specAreaSub: '+ 64 m² тераса • Нанасяне 01.07.2026',
    specEnergyLabel: 'Енергиен паспорт',
    specEnergyValue: 'Клас A+ (KfW 55)',
    specEnergySub: '24,5 kWh/(m²·a) • Геотермална помпа',
    costsHeading: 'Финансов план & Разходи в Бавария (Kaufnebenkosten)',
    costsBadge: 'Прозрачна калкулация за Мюнхен',
    costRows: [
      { label: 'Покупна цена (с 2 гаража)', rateOrNote: 'Базова цена', amount: '2.450.000,00 €' },
      { label: 'Данък придобиване Бавария (Grunderwerbsteuer)', rateOrNote: '3,5 %', amount: '85.750,00 €' },
      { label: 'Нотариус & Имотен регистър (Notar & Grundbuch)', rateOrNote: '≈ 1,5 %', amount: '36.750,00 €' },
      { label: 'Купуваческа комисиона (Käuferprovision с ДДС)', rateOrNote: '2,975 %', amount: '72.887,50 €' },
      { label: 'Обща инвестиция с всички такси', rateOrNote: 'Пълна сума', amount: '2.645.387,50 €', isTotal: true },
    ],
    hausgeldLabel: 'Месечна такса поддръжка (Hausgeld с фонд ремонт)',
    hausgeldValue: '685,00 € / мес.',
    techHeading: 'Архитектурни детайли & Правни гаранции',
    techSpecs: [
      'Частен асансьор с персонален чип достъп директно в пентхауса',
      'KNX Smart Home автоматизация, геотермално подово отопление и Wallbox 11 kW',
      'Чист имотен регистър (Grundbuch Abt. II & III без тежести) + 5 г. BGB гаранция',
    ],
    miniOfferBadge: 'Малка опция • Бързо блокиране',
    miniOfferButton: '14-дневна Резервация (0 €)',
  },
  de: {
    stepBadge: 'Demo #02 • Premium-Exposé München',
    gallerySlides: [
      {
        id: 'terrace',
        imageSrc: '/images/real-estate/penthouse-terrace-munich.jpg',
        label: 'Dachterrasse 64 m²',
        caption: 'Südwest-Dachterrasse am Isarhochufer in Bogenhausen mit Alpenblick',
      },
      {
        id: 'interior',
        imageSrc: '/images/real-estate/penthouse-living-interior.jpg',
        label: 'Wohnbereich 218 m²',
        caption: 'Bodentiefe Panoramafenster, 3,15 m Raumhöhe & Fischgrät-Eichenparkett',
      },
      {
        id: 'floorplan',
        imageSrc: '/images/real-estate/penthouse-floorplan-3d.jpg',
        label: '3D-Grundriss (4,5 Zi.)',
        caption: 'Privataufzug direkt in die Wohnung, Master-Suite & umlaufende Terrasse',
      },
    ],
    specPriceLabel: 'Kaufpreis',
    specPriceSub: 'Inkl. 2 Duplex-Tiefgaragenstellplätze',
    specAreaLabel: 'Wohnfläche (WoFlV)',
    specAreaValue: '218 m² • 4,5 Zimmer',
    specAreaSub: '+ 64 m² Terrasse • Bezug 01.07.2026',
    specEnergyLabel: 'Energieausweis',
    specEnergyValue: 'Klasse A+ (KfW 55)',
    specEnergySub: '24,5 kWh/(m²·a) • Erdwärmepumpe',
    costsHeading: 'Kaufnebenkosten & Finanzierungsplan (Bayern)',
    costsBadge: 'Offizielle Bayern-Kalkulation',
    costRows: [
      { label: 'Kaufpreis inkl. 2 Tiefgaragenstellplätze', rateOrNote: 'Notarwert', amount: '2.450.000,00 €' },
      { label: 'Grunderwerbsteuer Bayern', rateOrNote: '3,5 %', amount: '85.750,00 €' },
      { label: 'Notarkosten & Grundbucheintragung', rateOrNote: 'ca. 1,5 %', amount: '36.750,00 €' },
      { label: 'Käuferprovision (inkl. 19 % MwSt.)', rateOrNote: '2,975 %', amount: '72.887,50 €' },
      { label: 'Gesamtinvestition inkl. Nebenkosten', rateOrNote: 'Gesamtsumme', amount: '2.645.387,50 €', isTotal: true },
    ],
    hausgeldLabel: 'Monatliches Hausgeld (inkl. Instandhaltungsrücklage)',
    hausgeldValue: '685,00 € / Mon.',
    techHeading: 'Ausstattung & Rechtliche Sicherheit',
    techSpecs: [
      'Privataufzug mit Sicherheits-Transponder direkt in das Penthouse-Foyer',
      'KNX Smart-Home-Steuerung, Fußbodenheizung via Erdwärme & 11-kW-Wallbox',
      'Grundbuch Abteilung II & III komplett lastenfrei • 5 Jahre BGB-Gewährleistung',
    ],
    miniOfferBadge: 'Mini-Option • Sofort sichern',
    miniOfferButton: '14 Tage gratis reservieren (0 €)',
  },
  en: {
    stepBadge: 'Demo #02 • Munich Exposé Portal',
    gallerySlides: [
      {
        id: 'terrace',
        imageSrc: '/images/real-estate/penthouse-terrace-munich.jpg',
        label: '64 m² Rooftop Terrace',
        caption: 'Southwest sunset deck in Munich-Bogenhausen overlooking the Isar greenbelt',
      },
      {
        id: 'interior',
        imageSrc: '/images/real-estate/penthouse-living-interior.jpg',
        label: '218 m² Living Lounge',
        caption: 'Floor-to-ceiling glazing, 3.15 m ceilings, and herringbone oak parquet',
      },
      {
        id: 'floorplan',
        imageSrc: '/images/real-estate/penthouse-floorplan-3d.jpg',
        label: '3D Floorplan (4.5 Rooms)',
        caption: 'Private keycard elevator entrance, master suite, and wraparound deck',
      },
    ],
    specPriceLabel: 'Purchase Price',
    specPriceSub: 'Incl. 2 underground garage bays',
    specAreaLabel: 'Living Area',
    specAreaValue: '218 m² • 4.5 Rooms',
    specAreaSub: '+ 64 m² terrace • Ready 01.07.2026',
    specEnergyLabel: 'Energy Certificate',
    specEnergyValue: 'Class A+ (KfW 55)',
    specEnergySub: '24.5 kWh/(m²·a) • Geothermal pump',
    costsHeading: 'Bavaria Acquisition Cost Breakdown (Kaufnebenkosten)',
    costsBadge: 'Munich Transparent Schedule',
    costRows: [
      { label: 'Property Purchase Price (incl. 2 garages)', rateOrNote: 'Base price', amount: '2.450.000,00 €' },
      { label: 'Bavaria Property Transfer Tax', rateOrNote: '3.5 %', amount: '85.750,00 €' },
      { label: 'Notary & Land Registry Fees', rateOrNote: '≈ 1.5 %', amount: '36.750,00 €' },
      { label: 'Buyer Agency Commission (incl. VAT)', rateOrNote: '2.975 %', amount: '72.887,50 €' },
      { label: 'Total Acquisition Investment', rateOrNote: 'All-in total', amount: '2.645.387,50 €', isTotal: true },
    ],
    hausgeldLabel: 'Monthly Maintenance Fee (Hausgeld incl. reserve)',
    hausgeldValue: '685,00 € / mo',
    techHeading: 'Architecture Specs & Legal Guarantees',
    techSpecs: [
      'Private transponder elevator opening directly inside the penthouse foyer',
      'KNX smart home automation, geothermal floor heating & 11 kW EV wallbox',
      'Encumbrance-free land registry (Grundbuch) + 5-year German BGB warranty',
    ],
    miniOfferBadge: 'Mini-Option • Risk-Free Hold',
    miniOfferButton: '14-Day Free Hold (0 €)',
  },
  tr: {
    stepBadge: 'Demo #02 • Münih Emlak Dosyası',
    gallerySlides: [
      {
        id: 'terrace',
        imageSrc: '/images/real-estate/penthouse-terrace-munich.jpg',
        label: '64 m² Çatı Terası',
        caption: 'Münih-Bogenhausen’de gün batımı ve İsar manzaralı güneybatı teras',
      },
      {
        id: 'interior',
        imageSrc: '/images/real-estate/penthouse-living-interior.jpg',
        label: '218 m² Yaşam Alanı',
        caption: 'Yerden tavana panoramik camlar, 3,15 m tavan ve balıksırtı meşe parke',
      },
      {
        id: 'floorplan',
        imageSrc: '/images/real-estate/penthouse-floorplan-3d.jpg',
        label: '3D Kat Planı (4,5 Oda)',
        caption: 'Özel asansör girişi, ebeveyn süiti ve çevreleyen çatı terası',
      },
    ],
    specPriceLabel: 'Satış Fiyatı',
    specPriceSub: '2 yeraltı otopark yeri dahil',
    specAreaLabel: 'Yaşam Alanı',
    specAreaValue: '218 m² • 4,5 Oda',
    specAreaSub: '+ 64 m² teras • Teslim 01.07.2026',
    specEnergyLabel: 'Enerji Sınıfı',
    specEnergyValue: 'Sınıf A+ (KfW 55)',
    specEnergySub: '24,5 kWh/(m²·a) • Jeotermal pompa',
    costsHeading: 'Bavyera Satın Alma Masraf Planı (Kaufnebenkosten)',
    costsBadge: 'Münih Şeffaf Hesaplama',
    costRows: [
      { label: 'Satın Alma Bedeli (2 otopark dahil)', rateOrNote: 'Ana bedel', amount: '2.450.000,00 €' },
      { label: 'Bavyera Emlak Alım Vergisi', rateOrNote: '% 3,5', amount: '85.750,00 €' },
      { label: 'Noter ve Tapu Sicil Masrafları', rateOrNote: '≈ % 1,5', amount: '36.750,00 €' },
      { label: 'Alıcı Komisyonu (KDV dahil)', rateOrNote: '% 2,975', amount: '72.887,50 €' },
      { label: 'Toplam Yatırım Tutarı', rateOrNote: 'Genel toplam', amount: '2.645.387,50 €', isTotal: true },
    ],
    hausgeldLabel: 'Aylık Aidat (Hausgeld & bakım fonu dahil)',
    hausgeldValue: '685,00 € / ay',
    techHeading: 'Teknik Özellikler & Hukuki Güvenceler',
    techSpecs: [
      'Çipli özel asansör ile doğrudan çatı katı dairesine güvenli erişim',
      'KNX akıllı ev sistemi, jeotermal yerden ısıtma ve 11 kW elektrikli araç şarjı',
      'İpoteğinden arındırılmış temiz tapu (Grundbuch) ve 5 yıl BGB yapı garantisi',
    ],
    miniOfferBadge: 'Mini Seçenek • Ücretsiz Ayırtma',
    miniOfferButton: '14 Gün Ücretsiz Ayırt (0 €)',
  },
};
