import type { DemoVerticalSlug } from './types';

export const EXTRA_RAG_FACTS: Record<DemoVerticalSlug, string> = {
  'marketing-agency': `
[VERIFIZIERTE AKTE: Bergmann Digital Performance GmbH | Ref: ANG-2026-MUC-041]
- Kurzfassung Angebot: B2B Lead-Generation & Performance-Paket (LinkedIn ABM + Google Search + 12 Motion-Creatives).
- Kunde: TechVision DACH GmbH | Hauptangebot Q2 Gesamtinvestition: 14.800 € netto/Quartal (ca. 4.933,33 €/Monat).
- Aufschlüsselung Hauptangebot (14.800 €):
  1) Betreuungs-, Strategie- & Kreations-Retainer: 7.200 € netto (48,6 % — inkl. 12 Motion-Video-Creatives, 4 A/B-Landingpages, Server-Side Tracking, wöchentliches Looker Studio Reporting).
  2) LinkedIn ABM Werbebudget (München, Frankfurt, Zürich — C-Level & Entscheider): 4.800 € netto (32,4 %).
  3) Google Search High-Intent Werbebudget: 2.800 € netto (19,0 %).
- Prognostizierte KPIs (Hauptangebot): 85–110 qualifizierte B2B-MQLs pro Quartal, Ziel-CPL 69–89 €, erwarteter Pipeline-Multiplikator 4,2x (ca. 62.160 € neue qualifizierte Vertriebspipeline).
- KLEINES STARTER-ANGEBOT (30-Tage Test-Sprint): 3.900 € netto einmalig für 30 Tage Pilotphase (beinhaltet 1.900 € Setup & 4 Motion-Creatives + 1 A/B-Landingpage + 2.000 € Media-Spend in 1 Kanal nach Wahl, Prognose 20–25 qualifizierte B2B-Testleads mit anschließendem Upgrade-Recht auf Q2).
- Kampagnenstart, Laufzeit & Rechte: Go-Live in 10 Werktagen nach Kick-off (Tag 1–2 Audit & Pixel, Tag 3–6 Creatives & Landingpages, Tag 7–9 QA & A/B Setup, Tag 10 Livegang). Mindestlaufzeit Hauptangebot: 3 Monate, Kündigungsfrist 30 Tage zum Quartalsende. Kunde behält 100 % Eigentum an Werbekonten, Pixeln und Rohdaten. DSGVO-konformes EU-Hosting.`,

  'real-estate': `
[VERIFIZIERTE AKTE: Von Kronberg Immobilien GmbH | Ref: EXP-MUC-2026-884]
- Kurzfassung Angebot: Luxus-Penthouse München-Bogenhausen (218 m², 64 m² Dachterrasse, 2 Tiefgaragen-Stellplätze).
- Käufer: Dr. Tobias & Elena Hartmann | Objekt: Isarhochufer 14, 81679 München-Bogenhausen (4. OG / Dachgeschoss mit Privataufzug).
- Eckdaten: 218 m² Wohnfläche nach WoFlV, 4,5 Zimmer, 64 m² Südwest-Dachterrasse, Deckenhöhe 3,15 m, Fischgrät-Eichenparkett, KNX Smart Home, Privataufzug mit Chip-Zugang direkt in die Wohnung.
- Kaufpreis (Hauptangebot): 2.450.000 € inklusive 2 Duplex-Tiefgaragenstellplätze (Wert 90.000 € inkludiert) und E-Mobilität Wallbox-Vorrüstung. Bezugsfrei / Übergabe: 01.07.2026.
- Energieausweis & Hausgeld: Energieeffizienzklasse A+ (Bedarfsausweis 24,5 kWh/(m²·a), Erdwärmepumpe, KfW 55 Standard, Dreifachverglasung). Monatliches Hausgeld: 685 € (inkl. 165 € Instandhaltungsrücklage, Heizung und Aufzugswartung).
- Kaufnebenkosten Bayern (transparente Kalkulation):
  * Grunderwerbsteuer Bayern (3,5 %): 85.750,00 €
  * Notar- & Grundbuchkosten (ca. 1,5 %): 36.750,00 €
  * Käuferprovision (2,975 % inkl. 19 % MwSt., fällig erst bei notarieller Beurkundung): 72.887,50 €
  * Gesamterwerbsnebenkosten: ca. 195.387,50 € (Gesamtinvestition inkl. Nebenkosten: 2.645.387,50 €).
- KLEINES ANGEBOT / RESERVIERUNG & INTERIOR-OPTION:
  1) 14-tägige unverbindliche Prioritäts-Reservierung für 0 € Gebühr (nimmt das Objekt sofort vom Markt).
  2) Optionales Paket „Schlüsselfertiges Design-Interior“ durch Von Kronberg Interior: 48.000 € netto (beinhaltet maßgefertigte Outdoor-Lounge für die 64 m² Terrasse, Einbauschränke Master-Suite & Lichtdesign).
- Recht & Gewährleistung: 5 Jahre BGB-Neubau-Gewährleistung, Grundbuch Abteilung II & III komplett lastenfrei.`,

  'auto-leasing': `
[VERIFIZIERTE AKTE: Autohaus Stern Premium Leasing Stuttgart | Ref: LEA-STR-2026-904]
- Fahrzeug: Porsche Taycan 4S Performance Plus (Erstzulassung 04/2025, 14.200 km, Vulkangraumetallic), FIN: WP0ZZZ99ZPS214890, 1. Hand, unfallfrei.
- Gewerbeleasing-Konditionen: 1.190 € netto/Monat, 0 € Sonderzahlung (Anzahlung), 48 Monate Laufzeit, 15.000 km/Jahr (+2.500 km Kulanzgrenze).
- Kilometerabrechnung & Wartung: Mehrkilometer 0,14 €/km netto; Minderkilometer-Erstattung 0,08 €/km. Optionales Full-Service-Inspektionspaket +85 € netto/Monat.
- DEKRA & Batteriegarantie: DEKRA-zertifizierter Batteriezustand (SoH) 98,4 %, Werksgarantie auf Hochvoltbatterie bis 04/2033, 24 Monate Porsche Approved Garantie + 20-Zoll Winterkompletträder inklusive. Berechtigt zur 0,25 % Dienstwagenbesteuerung in Deutschland. Auslieferung in 5 Werktagen.`,

  'medical-clinic': `
[VERIFIZIERTE AKTE: Praxis Dr. med. dent. Weber Frankfurt | Ref: HKP-FFM-2026-312]
- Patientin: Katrin Hoffmann | Behandlung: 2 Straumann-Titanimplantate Regio 46/47 + 2 vollkeramische Zirkonkronen + 3D-DVT digitale OP-Planung.
- Gesamtkosten & Eigenanteil: Gesamthonorar GOZ & Meisterlabor 6.850 €. Gesetzlicher Krankenkassen-Festzuschuss (GKV) -1.420 €; Zahnzusatzversicherung -1.490 €. Verbleibender Patienten-Eigenanteil: 3.940 €.
- Ratenzahlung & Garantie: 0 % zinsfreie Ratenzahlung über 12 Monate möglich (328,33 €/Monat). 5 Jahre Praxisgarantie bei jährlicher professioneller Zahnreinigung (PZR).
- Behandlungsablauf: Sitzung 1 Implantation unter Lokalanästhesie (ca. 60 Min.); Sitzung 2 Nahtentfernung nach 7 Tagen; Sitzung 3 Finale Kroneneingliederung nach 10 Wochen Einheilphase.
- Verhaltensregeln: Leichtes Frühstück am OP-Morgen, 24 Std. vorher kein Alkohol. Nach OP Wange intervallartig 48 Std. kühlen, 72 Std. kein Kaffee/Rauchen, weiche lauwarme Kost für 3 Tage.`,

  'construction-interior': `
[VERIFIZIERTE AKTE: BauWerk Interior & Architektur GmbH Berlin | Ref: KV-BER-2026-507]
- Bauvorhaben: 145 m² Altbau-Loft Prenzlauer Berg bezugsfertige Komplettsanierung (Auftraggeber: Familie Lindemann), 12 Wochen Bauzeit, Gesamtsumme netto: 84.500 € (90 Tage Festpreisgarantie). Optionales Smart KNX Upgrade: +4.900 € netto.
- Bauphasen: Phase 1 Abbruch & Rohbau (14.200 €); Phase 2 Sanitär/Elektro/KNX-Installation (24.800 €); Phase 3 Eichen-Landhausdielen, Trockenbau, Malerarbeiten (19.500 €); Phase 4 Maßgefertigte Designerküche mit Dekton-Arbeitsplatte & Schreiner-Einbaumöbel (26.000 €).
- Zahlungsmeilensteine nach MaBV: 30 % bei Baubeginn, 35 % nach Rohinstallation Haustechnik (Phase 2), 25 % nach Bodenbelägen & Malerarbeiten (Phase 3), 10 % nach mängelfreier Endabnahme.
- Gewährleistung & Verzug: 5 Jahre Gewährleistung nach BGB § 634a, Vertragsstrafe bei Verzug 0,2 %/Werktag nach Woche 12, DIN VDE 0100-600 Messprotokoll inklusive.`,

  'hospitality-stay': `
[VERIFIZIERTE AKTE: AlpenGlüh Boutique Chalets (SmartScan Stay) | Ref: STAY-GAP-2026-409]
- Gast: Lukas & Mia Schneider | Reisezeitraum: 19.11.–24.11.2026 (5 Nächte) | Chalet Zugspitze #4, Garmisch-Partenkirchen.
- Zugang & WLAN: Kontaktloser 24/7 Check-in ab 15:00 Uhr via Nuki Smart Keypad PIN #849201. Highspeed Glasfaser-WLAN SSID "AlpenGlueh_5G", Passwort "demo-wifi". Check-out bis 10:30 Uhr (Late Check-out bis 13:00 Uhr für +45 € buchbar).
- Ausstattung & Wellness: Private finnische Zirbensauna im Chalet (Schalter rechts neben Badezimmerspiegel, heizt in ca. 25 Min. auf 85 °C). 11 kW Wallbox an Carport #4 (Aktivierung mit RFID-Chip am Schlüsselbund).
- Services & Gastronomie: Frühstückskorb "Gipfelglück" (18 €/Tag für 2 Personen) wird um 07:30 Uhr vor die Tür geliefert (Vorbestellung bis 18:00 Uhr). Zugspitzbahn 8 Min. Fahrt. Restaurants im Ort: Gasthof Zum Wildschütz (600 m), Alpenhof Bistro. Ruhezeiten auf der Terrasse ab 22:00 Uhr.`,

  'legal-contracts': `
[VERIFIZIERTE AKTE: Kanzlei Dr. Lindner & Partner mbB Frankfurt | Ref: AKTE-FFM-2026-119]
- Mandant: Thomas Müller (NordTech GmbH) | Mandat: B2B Rahmen-Liefer- und SaaS-Vertrag (Vertragsvolumen: 185.000 €).
- § 8 Haftungsbegrenzung: Anwaltliche Empfehlung lautet Haftungsdeckelung bei einfacher Fahrlässigkeit auf 185.000 € (1x Vertragswert) statt unbegrenzter Haftung.
- § 11 Geheimhaltung (NDA) & Kündigung: 5 Jahre nachvertragliche Vertraulichkeit; 25.000 € Vertragsstrafe je schuldhaftem Verstoß. Ordentliche Kündigungsfrist: 3 Monate zum Jahresende; außerordentliche fristlose Kündigung bei Zahlungsverzug > 30 Tage.
- § 14 Anwendbares Recht & Gerichtsstand: Deutsches Recht (BGB/HGB), ausschließlicher Gerichtsstand Frankfurt am Main.
- Fristen & Honorar: Unterzeichnung der Mandatsvollmacht bis 21.11.2026 erforderlich; Rücksendung des Gegenentwurfs (Redline) bis 28.11.2026 16:00 Uhr. Pauschalhonorar Verhandlung: 3.400 € netto. Archivierung 6 Jahre (§ 50 BRAO) auf deutschen ISO-27001 Servern. Hinweis: Der KI-Assistent erläutert das Dossier, ersetzt jedoch keine persönliche Rechtsberatung.`,

  'finance-accounting': `
[VERIFIZIERTE AKTE: FinanzHaus Rhein Steuer & Versicherung Hamburg | Ref: FIN-HAM-2026-603]
- Mandant: Weber Logistik GmbH (Steuernummer 48/712/09412) | BWA-Umsatz YTD per 31.10.2026: 1.940.000 € (+14,2 % ggü. Vorjahr), EBITDA-Marge 16,8 %.
- Q4 Steuerfälligkeiten (Fällig am 10.12.2026, Gesamt 42.860 €): Körperschaftsteuer-Vorauszahlung 18.400 €; Gewerbesteuer-Vorauszahlung Hamburg 11.960 €; USt-Sondervorauszahlung November 12.500 € via SEPA-Lastschrift (Konto DE89...4410).
- Versicherungspolicen (Allianz Gewerbe): Betriebshaftpflicht 5.000.000 € Deckungssumme (2.940 €/Jahr Prämie); Cyber-Risk-Police 1.000.000 € Deckungssumme (2.500 € Selbstbehalt). Kündigungsfrist: 3 Monate vor dem 30.09.
- KfW-Unternehmerkredit: Restschuld 214.000 €, fester Sollzins 2,85 % bis 2031. Monatliche Rate 3.120 € (508 € Zins, 2.612 € Tilgung). Jährliche kostenfreie Sondertilgung bis 15.000 € zum 30.12. möglich.`,
};
