import type { SupportedLocale } from '@/features/i18n';

export interface DealUiCopy {
  sectionHeading: string;
  sectionSubheading: string;
  confirmedBannerTitle: string;
  confirmedBannerSub: string;
  modalAcceptTitle: string;
  modalMeetingTitle: string;
  selectTierLabel: string;
  mainOfferBadge: string;
  miniOfferBadge: string;
  selectSlotLabel: string;
  slots: readonly string[];
  consentLabel: string;
  confirmNowButton: string;
  instantDemoButton: string;
  receiptTitle: string;
  receiptSubtitle: string;
  receiptRefLabel: string;
  receiptPackageLabel: string;
  receiptStatusLabel: string;
  receiptStatusValue: string;
  closeButton: string;
}

export const DEAL_UI_COPY: Record<SupportedLocale, DealUiCopy> = {
  bg: {
    sectionHeading: 'Готови ли сте да стартираме?',
    sectionSubheading: 'Приемете офертата веднага с 1 клик или изберете по-малкия стартов пакет.',
    confirmedBannerTitle: 'ОФЕРТАТА Е ОФИЦИАЛНО ПРИЕТА',
    confirmedBannerSub: 'Потвърждението е записано и изпратено към отговорния мениджър / нотариус.',
    modalAcceptTitle: 'Дигитално приемане на офертата',
    modalMeetingTitle: 'Бърза резервация на среща / оглед',
    selectTierLabel: 'Изберете вариант на офертата:',
    mainOfferBadge: 'Основна оферта',
    miniOfferBadge: 'Малка стартова оферта',
    selectSlotLabel: 'Предпочитан час (CET):',
    slots: ['Утре • 10:00 CET', 'Утре • 14:30 CET', 'Вдругиден • 11:00 CET'],
    consentLabel: 'Потвърждавам параметрите на офертата и желая стартиране по DSGVO стандарт.',
    confirmNowButton: 'Потвърди и завърши поръчката',
    instantDemoButton: '1-Клик Бързо потвърждение (Демо)',
    receiptTitle: 'Сделката е потвърдена!',
    receiptSubtitle: 'Автоматично изпратено към CRM / Нотариус и генериран PDF протокол.',
    receiptRefLabel: 'Код на потвърждение',
    receiptPackageLabel: 'Избран пакет',
    receiptStatusLabel: 'Статус на интеграция',
    receiptStatusValue: 'Синхронизирано с CRM & Имеил известие',
    closeButton: 'Затвори',
  },
  de: {
    sectionHeading: 'Bereit für den nächsten Schritt?',
    sectionSubheading: 'Nehmen Sie das Angebot direkt mit 1 Klick an oder wählen Sie die Starter-Option.',
    confirmedBannerTitle: 'ANGEBOT DIGITAL ANGENOMMEN',
    confirmedBannerSub: 'Die Freigabe wurde protokolliert und automatisch an CRM / Notariat übermittelt.',
    modalAcceptTitle: 'Digitale Angebotsannahme & Freigabe',
    modalMeetingTitle: 'Termin / VIP-Besichtigung vormerken',
    selectTierLabel: 'Gewünschte Angebotsvariante wählen:',
    mainOfferBadge: 'Hauptangebot',
    miniOfferBadge: 'Kleines Einstiegsangebot',
    selectSlotLabel: 'Wunschtermin (MEZ):',
    slots: ['Morgen • 10:00 Uhr', 'Morgen • 14:30 Uhr', 'Übermorgen • 11:00 Uhr'],
    consentLabel: 'Ich bestätige die Konditionen gemäß Dossier und DSGVO-konformer Auftragsverarbeitung.',
    confirmNowButton: 'Verbindlich annehmen & starten',
    instantDemoButton: '1-Klick Sofort-Freigabe (Demo)',
    receiptTitle: 'Abschluss bestätigt!',
    receiptSubtitle: 'Automatisch an CRM / Notar übermittelt und als PDF-Protokoll archiviert.',
    receiptRefLabel: 'Freigabe-Code',
    receiptPackageLabel: 'Gewählte Option',
    receiptStatusLabel: 'Workflow-Status',
    receiptStatusValue: 'An CRM & Team-Postfach übertragen',
    closeButton: 'Schließen',
  },
  en: {
    sectionHeading: 'Ready to move forward?',
    sectionSubheading: 'Accept the proposal in one click or start with the smaller starter option.',
    confirmedBannerTitle: 'PROPOSAL OFFICIALLY ACCEPTED',
    confirmedBannerSub: 'Confirmation recorded and routed automatically to CRM / Notary desk.',
    modalAcceptTitle: 'Digital Proposal Acceptance',
    modalMeetingTitle: 'Book Kick-Off / VIP Viewing',
    selectTierLabel: 'Choose your preferred option:',
    mainOfferBadge: 'Main Proposal',
    miniOfferBadge: 'Starter Mini-Offer',
    selectSlotLabel: 'Preferred time slot (CET):',
    slots: ['Tomorrow • 10:00 CET', 'Tomorrow • 14:30 CET', 'In 2 days • 11:00 CET'],
    consentLabel: 'I confirm the proposal terms and authorize GDPR-compliant onboarding.',
    confirmNowButton: 'Confirm & Complete Order',
    instantDemoButton: '1-Click Instant Approval (Demo)',
    receiptTitle: 'Deal Confirmed!',
    receiptSubtitle: 'Automatically routed to CRM / Notary desk with PDF confirmation generated.',
    receiptRefLabel: 'Confirmation Code',
    receiptPackageLabel: 'Selected Package',
    receiptStatusLabel: 'Pipeline Status',
    receiptStatusValue: 'Synced to CRM & Account Lead notified',
    closeButton: 'Close',
  },
  tr: {
    sectionHeading: 'Başlamaya hazır mısınız?',
    sectionSubheading: 'Teklifi tek tıkla onaylayın veya küçük başlangıç paketini seçin.',
    confirmedBannerTitle: 'TEKLİF DİJİTAL OLARAK ONAYLANDI',
    confirmedBannerSub: 'Onay kaydedildi ve otomatik olarak CRM / Noter ekibine iletildi.',
    modalAcceptTitle: 'Dijital Teklif Onayı',
    modalMeetingTitle: 'Toplantı / VIP İnceleme Planla',
    selectTierLabel: 'Teklif seçeneğinizi belirleyin:',
    mainOfferBadge: 'Ana Teklif',
    miniOfferBadge: 'Küçük Başlangıç Teklifi',
    selectSlotLabel: 'Tercih edilen zaman (CET):',
    slots: ['Yarın • 10:00 CET', 'Yarın • 14:30 CET', '2 gün sonra • 11:00 CET'],
    consentLabel: 'Dosyadaki şartları ve DSGVO uyumlu işlem başlatmayı onaylıyorum.',
    confirmNowButton: 'Onayla ve Siparişi Tamamla',
    instantDemoButton: '1-Tıkla Hızlı Onay (Demo)',
    receiptTitle: 'Anlaşma Onaylandı!',
    receiptSubtitle: 'CRM / Noter sistemine otomatik iletildi ve PDF belgesi oluşturuldu.',
    receiptRefLabel: 'Onay Kodu',
    receiptPackageLabel: 'Seçilen Paket',
    receiptStatusLabel: 'Entegrasyon Durumu',
    receiptStatusValue: 'CRM ile senkronize edildi ve ekip bilgilendirildi',
    closeButton: 'Kapat',
  },
};
