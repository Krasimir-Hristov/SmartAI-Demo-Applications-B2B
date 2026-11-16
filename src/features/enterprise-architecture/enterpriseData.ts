import type { SupportedLocale } from '@/features/i18n';
import type { EnterpriseDiagramLabels } from './types';

export const ENTERPRISE_DIAGRAM_BY_LOCALE: Record<
  SupportedLocale,
  EnterpriseDiagramLabels
> = {
  bg: {
    title: 'Вътрешна Фирмена AI Система',
    subtitle: '1 Супервайзър + Jev + Отдели като Тулове (надгражда се модул по модул)',
    clickHint: 'Кликни върху отдел, за да осветиш пътя, или натисни „+ Добави Отдел“',
    level1Tag: '1. ВСИЧКИ СЛУЖИТЕЛИ (ЕДИН ОБЩ ЧАТ)',
    users: [
      { id: 'ceo', label: 'Управител' },
      { id: 'sales', label: 'Търговци' },
      { id: 'office', label: 'Офис & Счетоводство' },
      { id: 'field', label: 'Склад & Терен' },
    ],
    level2Tag: '2. ЦЕНТРАЛНО ЯДРО НА ФИРМАТА',
    dbNode: {
      title: 'База Данни',
      sub: 'SQL / ERP таблици',
    },
    supervisorNode: {
      tag: 'ГЛАВЕН АГЕНТ',
      title: 'AI Супервайзър',
      sub: 'Приема задачи & права',
    },
    jevNode: {
      tag: 'ПОД СУПЕРВАЙЗЪРА',
      title: 'Агент „Jev“',
      sub: 'Командва отделите',
    },
    ragNode: {
      title: 'RAG Чатбот',
      sub: 'Договори & PDF-и',
    },
    level3Tag: '3. ОТДЕЛИ КАТО „ТУЛОВЕ“ (ВСЕКИ СЕ ПРОДАВА И НАДСТРОЯВА ОТДЕЛНО)',
    level4Tag: '4. ПОД-ТУЛОВЕ ПОД ВСЕКИ ОТДЕЛ (ВЪРШАТ РАБОТАТА)',
    upgradeLockedLabel: '+ Добави Отдел',
    upgradeActiveLabel: 'Добавен ✓',
    departments: [
      {
        id: 'sales',
        toolTag: 'ТУЛ ОТДЕЛ #1',
        name: 'Продажби & CRM',
        accent: 'emerald',
        subTools: [
          { id: 's1', label: 'Нова Оферта' },
          { id: 's2', label: 'CRM Досие' },
          { id: 's3', label: 'Личен Линк' },
        ],
      },
      {
        id: 'finance',
        toolTag: 'ТУЛ ОТДЕЛ #2',
        name: 'Финанси & Фактури',
        accent: 'amber',
        subTools: [
          { id: 'f1', label: 'Проверка Плащане' },
          { id: 'f2', label: 'Нова Фактура' },
          { id: 'f3', label: 'Финансов Отчет' },
        ],
      },
      {
        id: 'warehouse',
        toolTag: 'ТУЛ ОТДЕЛ #3',
        name: 'Склад & Доставки',
        accent: 'sky',
        subTools: [
          { id: 'w1', label: 'Наличност Склад' },
          { id: 'w2', label: 'Резервирай Стока' },
          { id: 'w3', label: 'Товарителница' },
        ],
      },
      {
        id: 'legal',
        toolTag: 'ТУЛ ОТДЕЛ #4',
        name: 'Правен & Договори',
        accent: 'violet',
        subTools: [
          { id: 'l1', label: 'Нов Договор' },
          { id: 'l2', label: 'Проверка Клаузи' },
          { id: 'l3', label: 'Следене Срокове' },
        ],
      },
      {
        id: 'hr',
        toolTag: 'ТУЛ ОТДЕЛ #5',
        name: 'HR & Сервиз',
        accent: 'rose',
        isUpgradeable: true,
        subTools: [
          { id: 'h1', label: 'Отпуски & График' },
          { id: 'h2', label: 'Правилник (RAG)' },
          { id: 'h3', label: 'Сервизен Тикет' },
        ],
      },
    ],
  },
  de: {
    title: 'Internes KI-Unternehmenssystem',
    subtitle: '1 Supervisor + Jev + Abteilungen als Tools (modular erweiterbar)',
    clickHint: 'Abteilung anklicken für Pfad-Fokus oder „+ Abteilung“ testen',
    level1Tag: '1. ALLE MITARBEITER (EIN GEMEINSAMER CHAT)',
    users: [
      { id: 'ceo', label: 'Geschäftsführung' },
      { id: 'sales', label: 'Vertrieb' },
      { id: 'office', label: 'Backoffice' },
      { id: 'field', label: 'Lager & Technik' },
    ],
    level2Tag: '2. ZENTRALER UNTERNEHMENS-KERN',
    dbNode: {
      title: 'Datenbank',
      sub: 'SQL / ERP-Daten',
    },
    supervisorNode: {
      tag: 'HAUPT-AGENT',
      title: 'KI-Supervisor',
      sub: 'Zugang & Rechte',
    },
    jevNode: {
      tag: 'UNTER SUPERVISOR',
      title: 'Agent „Jev“',
      sub: 'Steuert Abteilungen',
    },
    ragNode: {
      title: 'RAG-Chatbot',
      sub: 'Verträge & PDFs',
    },
    level3Tag: '3. ABTEILUNGEN ALS „TOOLS“ (EINZELN BUCHBAR & ERWEITERBAR)',
    level4Tag: '4. SUB-TOOLS UNTER JEDER ABTEILUNG (FÜHREN ARBEIT AUS)',
    upgradeLockedLabel: '+ Abteilung',
    upgradeActiveLabel: 'Aktiviert ✓',
    departments: [
      {
        id: 'sales',
        toolTag: 'ABT.-TOOL #1',
        name: 'Vertrieb & CRM',
        accent: 'emerald',
        subTools: [
          { id: 's1', label: 'Neues Angebot' },
          { id: 's2', label: 'CRM-Akte' },
          { id: 's3', label: 'Kunden-Link' },
        ],
      },
      {
        id: 'finance',
        toolTag: 'ABT.-TOOL #2',
        name: 'Finanzen & Rechnung',
        accent: 'amber',
        subTools: [
          { id: 'f1', label: 'Zahlung prüfen' },
          { id: 'f2', label: 'PDF-Rechnung' },
          { id: 'f3', label: 'Finanzbericht' },
        ],
      },
      {
        id: 'warehouse',
        toolTag: 'ABT.-TOOL #3',
        name: 'Lager & Logistik',
        accent: 'sky',
        subTools: [
          { id: 'w1', label: 'Lagerbestand' },
          { id: 'w2', label: 'Ware reservieren' },
          { id: 'w3', label: 'Paketschein' },
        ],
      },
      {
        id: 'legal',
        toolTag: 'ABT.-TOOL #4',
        name: 'Recht & Verträge',
        accent: 'violet',
        subTools: [
          { id: 'l1', label: 'Neuer Vertrag' },
          { id: 'l2', label: 'Klausel-Check' },
          { id: 'l3', label: 'Fristen-Radar' },
        ],
      },
      {
        id: 'hr',
        toolTag: 'ABT.-TOOL #5',
        name: 'HR & Service',
        accent: 'rose',
        isUpgradeable: true,
        subTools: [
          { id: 'h1', label: 'Urlaub & Plan' },
          { id: 'h2', label: 'Richtlinien-RAG' },
          { id: 'h3', label: 'Service-Ticket' },
        ],
      },
    ],
  },
  en: {
    title: 'Internal Enterprise AI System',
    subtitle: '1 Supervisor + Jev + Departments as Tools (modularly expandable)',
    clickHint: 'Click any department to highlight its path or toggle “+ Add Dept”',
    level1Tag: '1. ALL EMPLOYEES (ONE UNIFIED CHAT)',
    users: [
      { id: 'ceo', label: 'Management' },
      { id: 'sales', label: 'Sales Team' },
      { id: 'office', label: 'Backoffice' },
      { id: 'field', label: 'Warehouse & Field' },
    ],
    level2Tag: '2. CENTRAL COMPANY CORE',
    dbNode: {
      title: 'Database',
      sub: 'SQL / ERP Tables',
    },
    supervisorNode: {
      tag: 'MASTER AGENT',
      title: 'AI Supervisor',
      sub: 'Entry & Permissions',
    },
    jevNode: {
      tag: 'UNDER SUPERVISOR',
      title: 'Agent “Jev”',
      sub: 'Routes to Depts',
    },
    ragNode: {
      title: 'RAG Chatbot',
      sub: 'Contracts & PDFs',
    },
    level3Tag: '3. DEPARTMENTS AS “TOOLS” (SOLD & UPGRADED INDIVIDUALLY)',
    level4Tag: '4. WORKER SUB-TOOLS UNDER EACH DEPARTMENT',
    upgradeLockedLabel: '+ Add Dept',
    upgradeActiveLabel: 'Added ✓',
    departments: [
      {
        id: 'sales',
        toolTag: 'DEPT TOOL #1',
        name: 'Sales & CRM',
        accent: 'emerald',
        subTools: [
          { id: 's1', label: 'New Quote' },
          { id: 's2', label: 'CRM Dossier' },
          { id: 's3', label: 'Client Link' },
        ],
      },
      {
        id: 'finance',
        toolTag: 'DEPT TOOL #2',
        name: 'Finance & Invoices',
        accent: 'amber',
        subTools: [
          { id: 'f1', label: 'Check Payment' },
          { id: 'f2', label: 'Issue Invoice' },
          { id: 'f3', label: 'Finance Report' },
        ],
      },
      {
        id: 'warehouse',
        toolTag: 'DEPT TOOL #3',
        name: 'Warehouse & Stock',
        accent: 'sky',
        subTools: [
          { id: 'w1', label: 'Stock Check' },
          { id: 'w2', label: 'Reserve Items' },
          { id: 'w3', label: 'Shipping Label' },
        ],
      },
      {
        id: 'legal',
        toolTag: 'DEPT TOOL #4',
        name: 'Legal & Contracts',
        accent: 'violet',
        subTools: [
          { id: 'l1', label: 'Draft Contract' },
          { id: 'l2', label: 'Clause Check' },
          { id: 'l3', label: 'Deadline Watch' },
        ],
      },
      {
        id: 'hr',
        toolTag: 'DEPT TOOL #5',
        name: 'HR & Support',
        accent: 'rose',
        isUpgradeable: true,
        subTools: [
          { id: 'h1', label: 'Leave & Shifts' },
          { id: 'h2', label: 'Policy RAG' },
          { id: 'h3', label: 'Service Ticket' },
        ],
      },
    ],
  },
  tr: {
    title: 'Kurumsal İç AI Sistemi',
    subtitle: '1 Supervisor + Jev + Araç Olarak Departmanlar (modüler büyütülür)',
    clickHint: 'Yolu aydınlatmak için departmana tıklayın veya “+ Departman Ekle” deneyin',
    level1Tag: '1. TÜM ÇALIŞANLAR (TEK ORTAK SOHBET)',
    users: [
      { id: 'ceo', label: 'Yönetim' },
      { id: 'sales', label: 'Satış Ekibi' },
      { id: 'office', label: 'Ofis & Muhasebe' },
      { id: 'field', label: 'Depo & Saha' },
    ],
    level2Tag: '2. MERKEZİ ŞİRKET ÇEKİRDEĞİ',
    dbNode: {
      title: 'Veritabanı',
      sub: 'SQL / ERP Tabloları',
    },
    supervisorNode: {
      tag: 'ANA AJAN',
      title: 'AI Supervisor',
      sub: 'Giriş & Yetkiler',
    },
    jevNode: {
      tag: 'SUPERVISOR ALTI',
      title: 'Ajan “Jev”',
      sub: 'Departman Yönetir',
    },
    ragNode: {
      title: 'RAG Sohbet Botu',
      sub: 'Sözleşme & PDF',
    },
    level3Tag: '3. “ARAÇ” OLARAK DEPARTMANLAR (TEK TEK SATILIR VE EKLENİR)',
    level4Tag: '4. HER DEPARTMANIN ALTINDAKİ İŞ YAPAN ALT ARAÇLAR',
    upgradeLockedLabel: '+ Departman Ekle',
    upgradeActiveLabel: 'Eklendi ✓',
    departments: [
      {
        id: 'sales',
        toolTag: 'ARAÇ #1',
        name: 'Satış & CRM',
        accent: 'emerald',
        subTools: [
          { id: 's1', label: 'Yeni Teklif' },
          { id: 's2', label: 'CRM Dosyası' },
          { id: 's3', label: 'Müşteri Linki' },
        ],
      },
      {
        id: 'finance',
        toolTag: 'ARAÇ #2',
        name: 'Finans & Fatura',
        accent: 'amber',
        subTools: [
          { id: 'f1', label: 'Ödeme Kontrol' },
          { id: 'f2', label: 'Fatura Kes' },
          { id: 'f3', label: 'Finans Raporu' },
        ],
      },
      {
        id: 'warehouse',
        toolTag: 'ARAÇ #3',
        name: 'Depo & Lojistik',
        accent: 'sky',
        subTools: [
          { id: 'w1', label: 'Stok Sorgula' },
          { id: 'w2', label: 'Ürün Ayır' },
          { id: 'w3', label: 'Kargo Barkodu' },
        ],
      },
      {
        id: 'legal',
        toolTag: 'ARAÇ #4',
        name: 'Hukuk & Sözleşme',
        accent: 'violet',
        subTools: [
          { id: 'l1', label: 'Yeni Sözleşme' },
          { id: 'l2', label: 'Madde Kontrol' },
          { id: 'l3', label: 'Süre Takibi' },
        ],
      },
      {
        id: 'hr',
        toolTag: 'ARAÇ #5',
        name: 'İK & Servis',
        accent: 'rose',
        isUpgradeable: true,
        subTools: [
          { id: 'h1', label: 'İzin & Vardiya' },
          { id: 'h2', label: 'Yönetmelik RAG' },
          { id: 'h3', label: 'Servis Kaydı' },
        ],
      },
    ],
  },
};

export const getEnterpriseCopy = (locale: SupportedLocale): EnterpriseDiagramLabels => {
  return ENTERPRISE_DIAGRAM_BY_LOCALE[locale] ?? ENTERPRISE_DIAGRAM_BY_LOCALE.de;
};
