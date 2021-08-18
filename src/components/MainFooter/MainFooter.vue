<template>
  <footer>
    <div class="footer-wrapper">
      <ul>
        <li>
          <a
            href="https://www.coding-bootcamps.eu/j/privacy"
            target="_blank"
            rel="noopener"
            >Datenschutz</a
          >
        </li>
        <li>
          <a
            href="https://www.coding-bootcamps.eu/about/"
            target="_blank"
            rel="noopener"
            >Impressum</a
          >
        </li>
        <li>
          <router-link to="/team">Team</router-link>
        </li>
        <li>
          <a
            href="https://www.coding-bootcamps.eu/bewerben/"
            target="_blank"
            rel="noopener"
            >Bewerben</a
          >
        </li>
      </ul>
      <p>Copyright {{ year }}</p>
      <div class="footer-social-wrapper">
        <ul>
          <li>
            <a
              href="https://www.instagram.com/codingbootcamps.eu/"
              target="_blank"
              rel="noopener"
              >Instagram</a
            >
          </li>
          <li>
            <a
              href="https://twitter.com/CodeCampEurope"
              target="_blank"
              rel="noopener"
              >Twitter</a
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "MainFooter",
  data() {
    return {
      year: "",
    };
  },
  methods: {
    getYear() {
      this.year = new Date();
      this.year = this.year.getFullYear();
    },
  },
  created() {
    this.getYear();
  },
};
</script>

<style scoped>
.image-footer {
  height: 1.5rem;
}
a {
  text-decoration: none;
}
li {
  list-style-type: none;
  text-align: left;
}
.footer-wrapper {
  display: flex;
  justify-content: start;
  align-items: flex-end;
}
ul {
  padding-right: 4rem;
}
.footer-social-wrapper {
  padding: 0 4rem;
}
</style>
