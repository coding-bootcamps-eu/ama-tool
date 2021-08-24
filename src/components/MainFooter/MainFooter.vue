<template>
  <footer>
    <div class="footer-wrapper">
      <ul>
        <li data-cy="footer-element">
          <a
            href="https://www.coding-bootcamps.eu/j/privacy"
            target="_blank"
            rel="noopener"
            data-cy="footer-element-privacy"
            >Datenschutz</a
          >
        </li>
        <li data-cy="footer-element">
          <a
            href="https://www.coding-bootcamps.eu/about/"
            target="_blank"
            rel="noopener"
            data-cy="footer-element-imprint"
            >Impressum</a
          >
        </li>
        <li data-cy="footer-element">
          <router-link to="/team" data-cy="footer-element-team"
            >Team</router-link
          >
        </li>
        <li data-cy="footer-element">
          <a
            href="https://www.coding-bootcamps.eu/bewerben/"
            target="_blank"
            rel="noopener"
            data-cy="footer-element-apply"
            >Bewerben</a
          >
        </li>
      </ul>
      <p>
        Coding Bootcamps Europe GmbH <br />
        Alle Rechte vorbehalten <br />
        ©
        {{ year }}
      </p>
      <div class="footer-social-wrapper">
        <ul>
          <li data-cy="footer-element">
            <a
              href="https://www.instagram.com/codingbootcamps.eu/"
              target="_blank"
              rel="noopener"
              data-cy="footer-element-instagram"
              >Instagram</a
            >
          </li>
          <li data-cy="footer-element">
            <a
              href="https://twitter.com/CodeCampEurope"
              target="_blank"
              rel="noopener"
              data-cy="footer-element-twitter"
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

<style lang="scss" scoped>
.image-footer {
  height: 1.5rem;
}
a {
  text-decoration: underline 1px solid var(--primary-color);
  color: var(--font-color);
  font-weight: bold;
}
li {
  list-style-type: none;
  text-align: left;
}
.footer-wrapper {
  margin: 2.8rem 4rem 1rem 2.5rem;
  padding: 0rem 0;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-top: 1px solid var(--primary-color);
  p {
    padding: 0 1rem;
  }
}
ul {
  padding: 0;
  margin: 0;
}
.footer-social-wrapper {
  padding: 0 0rem;
}
@media only screen and (max-width: 814px) {
  .footer-wrapper {
    margin: 2.8rem 2rem 1rem 2.5rem;
  }
  .footer-wrapper > * {
    font-size: 0.8em;
  }
}
</style>
