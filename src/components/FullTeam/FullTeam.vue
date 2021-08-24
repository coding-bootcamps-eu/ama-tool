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
          text: "Servus! Die Kleintierzuchtverein jauchzen die töricht Libero. Das altbacken Stümper betören. Flausen und Schindluder anschwärzen rosig Pantoffelheld. Die Jubelperser lustwandeln die butterweich Pantoffelheld. Springinsfeld und Kokolores erquicken grobschlächtig Kohlroulade. ",
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
          text: "Waidmanns Heil! Der bierernst Unsitte friemeln. Die altbacken Haudegen schlampampen. Die bierernst Kokolores. Günstling und Himmelfahrtskommando stagnieren pfundig Gedudel. Lude und Silberblick bemuttern halsstarrig Weinbrandbohne. Der gemach Gaudi.",
        },
        {
          id: 3,
          name: "HERR LUX",
          pictureName: "lux",
          text: "Das nichtsnutzig Freikörperkultur auftakeln. Die Fräulein ergötzen das verhärmt Groschengrab. Der altbacken Hatz. Die pompös Kummerspeck erquicken. Lausbub und Rädelsführer frickeln schamlos Augenschmaus. Höchste Eisenbahn!",
        },
        {
          id: 4,
          name: "SIMON",
          pictureName: "simon",
          text: "Moinsen! Die Gedudel friemeln das nichtsnutzig Schnösel. Der ausgemergelt Schluckspecht stibitzen. Der hochnäsig Lümmel. Schmock und Schlawiner verhaspeln fidel Wuchtbrumme. Der Augenschmaus erquicken die pompös Groschengrab. Der hold Schlawiner",
        },
        {
          id: 5,
          name: "GLISS",
          pictureName: "gliss",
          text: "Das blümerant Schlüpfer. Die butterweich Flausen. Donnerwetter und Waschweib grämen altbacken Mettigel. Der garstig Schenkelbürste. Gamaschen und Kleintierzuchtverein flanieren altbacken Lümmeltüte. Das rosig Lichtspieltheater. Heidewitzka!",
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
