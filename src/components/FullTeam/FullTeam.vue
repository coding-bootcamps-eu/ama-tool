<template>
  <div class="team">
    <div v-for="(member, id) in shuffle(members)" v-bind:key="id">
      <TeamMember class="member" :member="member" />
    </div>
  </div>
</template>

<script>
import TeamMember from "@/components/TeamMember/TeamMember.vue";

export default {
  name: "FullTeam",
  components: {
    TeamMember,
  },
  data() {
    return {
      members: [
        {
          id: 0,
          name: "INGA",
          pictureName: "inga",
          text: "Die Designerin: Schneller als Lucky Lukes den Colt zieht, haut sie Prototypen raus, entdeckt jede Ecke und Kante, kennt jede Komplementärfarbe, hat die passende Schriftart- und Größe im Kopf und teilt glücklicherweiße ihr Wissen. Ein verdientes und wichtiges Member unserer Class#2",
        },
        {
          id: 1,
          name: "ATEF",
          pictureName: "atef",
          text: "Der immerfröhliche, unfreiwillige Frühaufsteher, gut gelaunt, zuverlässig und am multitasken, wenn die Arbeit ruft. Schon jetzt hauptberuflicher CSS-Virtuose, der noch jedes Element in eine Flexbox gequetscht bekommen hat. Wir sind froh, dass wir Dich haben",
        },
        {
          id: 2,
          name: "DENIZ",
          pictureName: "deniz",
          text: "Ein sehr zuvorkommender und ehrgeiziger Mensch, immer darauf bedacht sein Bestes zu geben und die Gruppe so gut wie möglich zu unterstützen. Geht jedes Problem an und scheut sich nicht, auch mal Fragen zu stellen. Hatte er vorher nicht viel mit Programmierung zu tun, so kommt er mittlerweile super klar.",
        },
        {
          id: 3,
          name: "HERR LUX",
          pictureName: "lux",
          text: "Zwar wird er nicht geschrieben wie das Tier “Luchs”,aber: “In Gebieten, in denen der Luchs umherschweift, sind diese sehr aufmerksam.” Dies kann man auch auf Christian übertragen, in neuen Gebieten wie “VUE” testet er viel herum und findet immer wieder neue Wege und Lösungen. Einfach LUXtastisch",
        },
        {
          id: 4,
          name: "SIMON",
          pictureName: "simon",
          text: "Weil Toner und Tinte nicht mehr passten, haut Simon nun top motiviert in die Tasten. Fliegende Kometen & Dartpfeile sind seine Spezialität. Aber auch vor End2End Testing schreckt er nicht mehr zurück. Stets mit einem lustigen Spruch auf den Lippen, ist er ein Muss für jedes Team! War schön mit dir!",
        },
        {
          id: 5,
          name: "GLISS",
          pictureName: "gliss",
          text: "Ruhe und Pokerface sind sein Markenzeichen, hat immer ein Trumpf im Ärmel und einen guten Rat parat. Geduldig, ausdauernd und fokussiert, kriegt er jedes Problem gelöst. Mit Dir zu coden und zu diskutieren ist immer eine wahre Freude. Allerdings mit Dir zu wetten ist niemals eine gute Idee.",
        },
      ],
    };
  },
  methods: {
    shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      return array;
    },
  },
};
</script>

<style lang="scss" scoped>
.team {
  margin-left: 2rem;
  margin-right: 2.2rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  .member {
    margin: 1rem;
  }
}

@media screen and (max-width: 700px) {
  .team {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>
