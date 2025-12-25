# LSPD PA Prüfungssystem

Prüfungssystem für die LSPD Police Academy - Junior Officer, Officer & Wiedereinsteiger Prüfungen.

## Features

- **Junior Officer Prüfung** (60 Punkte System)
  - 23 Theoriefragen mit Antwortvorlagen (52 Punkte)
  - 8 Praxispunkte - Verkehrskontrolle (8 Punkte)
  - Bestanden ab 50 Punkte (Note 2)

- **Officer Prüfung** (50 Punkte System)
  - 6 Theoriefragen mit Antwortvorlagen (13 Punkte)
  - Verhandlungsführung (10 Punkte)
  - Einsatzleitung (10 Punkte)
  - Inhaftierung (9 Punkte)
  - Einsatzbericht (8 Punkte)
  - Bestanden ab 40 Punkte (Note 2)

- **Wiedereinsteiger Prüfung** (66 Punkte System)
  - 5 Theoriefragen (13 Punkte)
  - Funkabfrage (10 Punkte)
  - 3 Situationsfragen (qualitativ - bei Nichtbestehen durchgefallen)
  - 3 Gesetzfragen (10 Punkte)
  - Einsatzbericht (25 Punkte)
  - Praxis Stress 10-60 (8 Punkte)
  - Bestanden ab 56 Punkte (Note 2) + alle Situationen bestanden

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

### Officer (50 Punkte)
| Note | Punkte | Bewertung |
|------|--------|-----------|
| 1 | 48-50 | sehr gut |
| 2 | 40-47 | gut (bestanden) |
| 3 | 33-39 | befriedigend |
| 4 | 25-32 | ausreichend |
| 5 | 15-24 | mangelhaft |
| 6 | <15 | ungenügend |

### Wiedereinsteiger (66 Punkte)
| Note | Punkte | Bewertung |
|------|--------|-----------|
| 1 | 62-66 | sehr gut |
| 2 | 56-61 | gut (bestanden) |
| 3 | 43-55 | befriedigend |
| 4 | 33-42 | ausreichend |
| 5 | 20-32 | mangelhaft |
| 6 | <20 | ungenügend |

*Hinweis: Bei der Wiedereinsteiger Prüfung müssen zusätzlich alle 3 Situationsfragen bestanden werden.*

## Version

2.0.0

## Lizenz

MIT
