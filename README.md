# LSPD PA Prüfungssystem

Prüfungssystem für die LSPD Police Academy - Junior Officer & Officer Prüfungen.

## Features

- **Junior Officer Prüfung** (60 Punkte System)
  - 23 Theoriefragen (52 Punkte)
  - 8 Praxispunkte - Verkehrskontrolle (8 Punkte)
  - Bestanden ab 50 Punkte (Note 2)

- **Officer Prüfung** (30 Punkte System)
  - Verhandlungsführung (10 Punkte)
  - Einsatzleitung (10 Punkte)
  - Einsatzbericht (10 Punkte)
  - Bestanden ab 25 Punkte (Note 2)

- **Funk & Codes** - Nachschlagewerk für Funkcodes und NATO-Alphabet

- **PDF Export** - Prüfungsergebnisse als PDF exportieren

- **Automatisches Speichern** - Alle Eingaben werden lokal gespeichert

## Installation

### Option 1: Als .exe ausführen
Die portable `LSPD_PA_Pruefungssystem.exe` im `dist` Ordner direkt starten.

### Option 2: Selbst bauen

1. Node.js installieren (https://nodejs.org)
2. Dependencies installieren:
   ```bash
   npm install
   ```
3. App starten (Entwicklungsmodus):
   ```bash
   npm start
   ```
4. .exe erstellen:
   ```bash
   npm run build
   ```

## Projektstruktur

```
PA Ausbildungen/
├── index.html        # Hauptanwendung (HTML/CSS/JS)
├── main.js           # Electron Hauptprozess
├── package.json      # Projektkonfiguration
├── LSPD_logo.png     # Logo für die Anwendung
├── README.md         # Diese Datei
└── .gitignore        # Git Ignore Regeln
```

## Notenspiegel

### Junior Officer (60 Punkte)
| Note | Punkte | Bewertung |
|------|--------|-----------|
| 1 | 55-60 | sehr gut |
| 2 | 50-54 | gut (bestanden) |
| 3 | 45-49 | befriedigend |
| 4 | 40-44 | ausreichend |
| 5 | 35-39 | mangelhaft |
| 6 | <35 | ungenügend |

### Officer (30 Punkte)
| Note | Punkte | Bewertung |
|------|--------|-----------|
| 1 | 28-30 | sehr gut |
| 2 | 25-27 | gut (bestanden) |
| 3 | 22-24 | befriedigend |
| 4 | 19-21 | ausreichend |
| 5 | 16-18 | mangelhaft |
| 6 | <15 | ungenügend |

## Version

1.3.0

## Lizenz

MIT
