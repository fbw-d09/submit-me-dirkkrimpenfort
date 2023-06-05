# Submit me
[![Statusübersicht-Badge](../../blob/badges/.github/badges/autograding/badge.svg)](#Ergebnisse)


**Anleitung**:

* Schau dir das Formular auf HTML an. Erstelle in der Datei `index.js` eine Post-Anfrage bei Submit.

**Voraussetzungen**:
* Verwende fetch, um Daten zu posten.
* Verwende die Syntax `async await`.
* Wenn du dein promise auflöst, gibst du das rohe JSON auf der Konsole aus.
* Benachrichtige den Nutzer, sobald er das Formular abgeschickt hat.

* Du kannst [JSONPlaceholder](https://jsonplaceholder.typicode.com/) verwenden, um eine POST-Anfrage zu stellen.

![alt text](image/reference.png "On Submission")

[//]: # (autograding info start)
## Ergebnisse


### Erstellen der Postanforderung bei Submit

| Status | Prüfen |
| :-------------------------------------: | :--------------------------------------------------------------------------------------- |
| ![Status](../../blob/badges/.github/badges/autograding/status0.svg) | check fetch has been called |
| ![Status](../../blob/badges/.github/badges/autograding/status1.svg) | prüfen, ob fetch durch async await-Anweisung aufgerufen wurde |
| ![Status](../../blob/badges/.github/badges/autograding/status2.svg) | prüfen, ob die Konsole die richtigen Daten von fetch protokolliert |
| ![Status](../../blob/badges/.github/badges/autograding/status3.svg) | prüfen, ob nach dem Holen der Daten ein Alert aufgerufen wird |



[🔬 Ergebnisdetails](https://github.com/DigitalCareerInstitute/Browser-fetch-post/actions)

[📢 Feedback geben oder Problem melden](https://docs.google.com/forms/d/e/1FAIpQLSfS8wPh6bCMTLF2wmjiE5_UhPiOEnubEwwPLN_M8zTCjx5qbg/viewform?usp=pp_url&entry.652569746=Browser-fetch-post&entry.2115011968=https%3A%2F%2Fgithub.com%2FDigitalCareerInstitute%2FBrowser-fetch-post)

### Debugging deines Codes
> [Lesen der Testausgaben](https://github.com/DCI-EdTech/autograding-setup/wiki/Reading-test-outputs)

Es gibt zwei Möglichkeiten, um herauszufinden, warum Aufgaben nicht erledigt werden können:
#### 1. Tests lokal ausführen
- Führe `npm install` aus
- Führe `npm test` im Terminal aus. Du wirst sehen, wo deine Lösung vom erwarteten Ergebnis abweicht.

#### 2. Überprüfen der Testausgabe auf GitHub
- Gehe auf die [Registerkarte Aktionen deines Übungsrepos](https://github.com/DigitalCareerInstitute/Browser-fetch-post/actions)
- Dort siehst du eine Liste mit den Testläufen. Klicke auf den obersten.
- Klicke auf "Autograding".
- Erweitere den Punkt 'Run DCI-EdTech/autograding-action@main'
- Hier siehst du alle Ausgaben des Testlaufs

[//]: # (autograding info end)
