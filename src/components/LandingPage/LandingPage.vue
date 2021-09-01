<template>
  <h2>Das Tool</h2>

  <p>
    Im Rahmen unseres Abschlussprojekts haben wir dieses Tool erstellt, um das
    Leben im Bootcamp einfacher zu gestalten und unsere Fähigkeiten zu
    erweitern.<br />
    Dieses Tool dient der Vorbereitung auf das Ask me anything und soll eine
    einfache Übersicht über Fragen und Themen bieten. erweitern.🎉🎉🎉 <br />
    🚀Dieses Tool dient der Vorbereitung auf das Ask me anything und soll eine
    einfache Übersicht über Fragen und Themen bieten.🚀
  </p>
  <p>
    Im Navigationspunkt „Frageliste“ seht ihr alle Fragen, die bisher gestellt
    wurden. Wenn eure Frage in dieser Übersicht bereits auftaucht, müsst ihr sie
    nicht erneut stellen. Stattdessen könnt ihr sie upvoten. Je mehr Upvotes,
    desto schneller wird die Frage beantwortet.🧭 <br />
    Ihr könnt die Fragen auch filtern, um nur beantwortete oder unbeantwortete
    Fragen zu sehen. Allerdings können nur Teachers Fragen als „beantwortet“
    markieren.☕️🦸‍♂️
  </p>
  <p>
    Unter dem Punkt „Frage stellen“ könnt ihr eure Fragen, die noch nicht in der
    Liste auftauchen, einreichen. Gebt der Frage einen aussagekräftigen Titel
    und beschreibt sie im Feld darunter genauer. Dort könnt ihr Markdown
    benutzen und auch eine Vorschau davon einblenden.🙋🏻‍♀️🙋🏼<br />
    Wählt eine Kategorie, die am besten zu eurer Frage passt, um sie einfacher
    einordnen zu können. Nach dem Senden erscheint die Frage in der Frageliste.
    einordnen zu können. Nach dem Senden erscheint die Frage in der
    Frageliste.✅
  </p>
  <p>
    Auf der Team-Seite wird euch das Team vorgestellt, das diese Seite erstellt
    hat. Vielleicht findet ihr ja auch ein kleines Easteregg?👩‍💻🥚👨‍💻
  </p>
  <button class="button-element" @click="showOverlay">
    Dir Raucht der Kopf?
  </button>
  <Overlay v-show="showText" @click="showOverlay">
    ESST MEHR BANANEN!!🍌🍌
  </Overlay>
</template>

<script>
import Overlay from "@/components/LandingPage/Overlay.vue";
export default {
  name: "Landing Page",
  components: {
    Overlay,
  },
  data() {
    return {
      showText: false,
    };
  },
  methods: {
    showOverlay() {
      return (this.showText = !this.showText);
    },
  },
};
</script>

<style lang="scss" scoped>
* {
  box-sizing: border-box;
}
p {
  margin: auto;
  margin-top: 1rem;
  font-family: "Open Sans", sans-serif;
  font-size: 18px;
  text-align: left;
  width: 60vw;
  min-width: 27rem;
  max-width: 40rem;
  line-height: 1.7rem;
}
h2 {
  font-size: 2rem;
}

.button-element {
  height: 35px;
  text-align: center;
  width: 150px;
  cursor: pointer;
  margin-top: 50px;
  border: 0.5px solid var(--primary-color);
  border-radius: 0.25rem;
  background-color: #fafafa;
  margin-top: 30px;
}
</style>
