# Russisch Trainer – GitHub Pages Version

## Inhalt
- `index.html`
- `manifest.json`
- `service-worker.js`
- `icon.svg`

## Für GitHub Pages hochladen
1. Neues Repository anlegen, z. B. `russisch-trainer`
2. Alle Dateien in das Hauptverzeichnis des Repos hochladen
3. In GitHub unter **Settings > Pages**:
   - Source: **Deploy from a branch**
   - Branch: **main**
   - Folder: **/root**
4. Nach kurzer Zeit bekommst du eine URL wie:
   - `https://DEINNAME.github.io/russisch-trainer/`

## Auf dem Handy als App speichern
1. GitHub-Pages-URL auf dem Handy öffnen
2. Browser-Menü öffnen
3. **Zum Startbildschirm hinzufügen**

## Was die App kann
- lokaler Kursstand per `localStorage`
- Chatverlauf lokal gespeichert
- JSON Export / Import
- einfache Progress-Anzeige
- ChatGPT-Anbindung über deinen OpenAI API-Key
- PWA-Grundfunktion mit Manifest und Service Worker

## Wichtig
Der API-Key wird lokal im Browser gespeichert. Für private Nutzung okay. Für öffentliche Nutzung nicht sauber genug.

## Nächste Ausbaustufen
- echtes Spaced Repetition
- Wortlisten pro Stufe
- Fehlerstatistik
- kleines Backend als Proxy zum Schutz des API-Keys
