<template>
  <h2>Über das AMA-Tool</h2>
  <div class="text-wrapper">
    <p>
      Im Rahmen unseres Abschlussprojekts haben wir dieses Tool erstellt, um das
      Leben im Bootcamp einfacher zu gestalten und unsere Fähigkeiten zu
      erweitern.<br />
      Dieses Tool dient der
      <strong>Vorbereitung auf das Ask-me-anything</strong> und soll eine
      einfache Übersicht über Fragen und Themen geben. 🚀🎉🎉
    </p>
    <p>
      Im Navigationspunkt <strong>„Frageliste“</strong> seht ihr alle Fragen,
      die bisher gestellt wurden. Wenn eure Frage in dieser Übersicht bereits
      auftaucht, müsst ihr sie nicht erneut stellen. 🧭 Stattdessen könnt ihr
      sie <strong>Upvoten</strong>. 🔼 Je mehr Upvotes, desto schneller wird die
      Frage beantwortet.
      <br />
      Ihr könnt die Fragen auch <strong>filtern</strong>, um nur beantwortete
      oder unbeantwortete Fragen zu sehen. Allerdings können nur Teachers Fragen
      als „beantwortet“ markieren. ☕️🦸‍♂️
    </p>
    <p>
      Unter dem Punkt <strong>„Frage stellen“</strong> könnt ihr eure Fragen,
      die noch nicht in der Liste auftauchen, einreichen. Gebt der Frage einen
      aussagekräftigen Titel und beschreibt sie im Feld darunter genauer. Dort
      könnt ihr Markdown benutzen und auch eine Vorschau davon einblenden.
      🙋🏻‍♀️🙋🏼<br />
      Wählt eine <strong>Kategorie</strong>, die am besten zu eurer Frage passt,
      um sie einfacher einordnen zu können. Nach dem Senden erscheint die Frage
      in der Frageliste. ✅
    </p>
    <p>
      Auf der <strong>Team-Seite</strong> wird euch das Team vorgestellt, das
      diese Seite erstellt hat. Vielleicht findet ihr ja auch ein kleines
      Easteregg? 👩‍💻🥚👨‍💻
    </p>
  </div>
  <button class="button-element" @click="showOverlay">
    Dir Raucht der Kopf?
  </button>
  <Overlay v-show="showText" @click="showOverlay">
    ESST MEHR BANANEN!!🍌🍌
  </Overlay>
</template>

<script>
import Overlay from "@/components/AboutPage/Overlay.vue";
export default {
  name: "AboutComponent",
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
p {
  margin: auto;
  margin-top: 1rem;
  text-align: left;
  min-width: 17rem;
  max-width: 40rem;
  line-height: 2rem;
}
.text-wrapper {
  margin: 2.8rem 4rem 1rem 2.5rem;
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
@media only screen and (max-width: 814px) {
  .text-wrapper {
    margin: 2.8rem 2rem 1rem 2.5rem;
  }
}
@media only screen and (max-width: 600px) {
  .text-wrapper {
    margin-left: 1rem;
  }
}
</style>
