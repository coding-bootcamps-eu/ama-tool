<template>
  <div class="nav-wrapper">
    <div ref="sideNav" class="bm-menu">
      <nav class="bm-item-list">
        <slot>
          <router-link
            @click="closeMenu"
            v-show="isUserLoggedIn"
            to="/questionlist"
            >Fragen Liste</router-link
          >

          <router-link
            v-show="isUserLoggedIn"
            @click="closeMenu"
            to="/askquestion"
            >Frage stellen</router-link
          >
          <UserLogin />
        </slot>
      </nav>
      <span
        class="bm-cross-button cross-style"
        @click="closeMenu"
        :class="{ hidden: !crossIcon }"
      >
        <span
          v-for="(x, index) in 2"
          :key="x"
          class="bm-cross"
          :style="{
            position: 'absolute',
            width: '3px',
            height: '25px',
            transform: index === 1 ? 'rotate(45deg)' : 'rotate(-45deg)',
          }"
        >
        </span>
      </span>
    </div>

    <div
      ref="bmBurgerButton"
      class="bm-burger-button"
      @click="openMenu"
      :class="{ hidden: !burgerIcon }"
    >
      <span
        class="bm-burger-bars line-style"
        :style="{ top: 18 * (index * 1.8) + '%' }"
        v-for="(x, index) in 3"
        :key="index"
      ></span>
    </div>
  </div>
</template>

<script>
import UserLogin from "@/components/UserLogin/UserLogin.vue";
export default {
  name: "menubar",
  components: { UserLogin },
  data() {
    return {
      isSideBarOpen: false,
    };
  },
  props: {
    isOpen: {
      type: Boolean,
      required: false,
    },
    right: {
      type: Boolean,
      required: false,
    },
    width: {
      type: [String],
      required: false,
      default: "300",
    },
    disableEsc: {
      type: Boolean,
      required: false,
    },
    noOverlay: {
      type: Boolean,
      required: false,
    },
    onStateChange: {
      type: Function,
      required: false,
    },
    burgerIcon: {
      type: Boolean,
      required: false,
      default: true,
    },
    crossIcon: {
      type: Boolean,
      required: false,
      default: true,
    },
    disableOutsideClick: {
      type: Boolean,
      required: false,
      default: false,
    },
    closeOnNavigation: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  computed: {
    isUserLoggedIn() {
      return sessionStorage.getItem("userID") === null ? false : true;
    },
  },
  methods: {
    openMenu() {
      this.$emit("openMenu");
      this.isSideBarOpen = true;
      if (!this.noOverlay) {
        document.body.classList.add("bm-overlay");
      }
      if (this.right) {
        this.$refs.sideNav.style.left = "auto";
        this.$refs.sideNav.style.right = "0px";
      }
      this.$nextTick(function () {
        this.$refs.sideNav.style.width = this.width
          ? this.width + "px"
          : "300px";
      });
    },
    closeMenu() {
      this.$emit("closeMenu");
      this.isSideBarOpen = false;
      document.body.classList.remove("bm-overlay");
      this.$refs.sideNav.style.width = "0px";
    },
    closeMenuOnEsc(e) {
      e = e || window.event;
      if (e.key === "Escape" || e.keyCode === 27) {
        this.closeMenu();
      }
    },
    documentClick(e) {
      let element = this.$refs.bmBurgerButton;
      let target = null;
      if (e && e.target) {
        target = e.target;
      }
      if (
        element &&
        element !== target &&
        !element.contains(target) &&
        !this.hasClass(target, "bm-menu") &&
        this.isSideBarOpen &&
        !this.disableOutsideClick
      ) {
        this.closeMenu();
      } else if (
        element &&
        this.hasClass(target, "bm-menu") &&
        this.isSideBarOpen &&
        this.closeOnNavigation
      ) {
        this.closeMenu();
      }
    },
    hasClass(element, className) {
      do {
        if (element.classList && element.classList.contains(className)) {
          return true;
        }
        element = element.parentNode;
      } while (element);
      return false;
    },
  },
  mounted() {
    if (!this.disableEsc) {
      document.addEventListener("keyup", this.closeMenuOnEsc);
    }
  },
  created: function () {
    document.addEventListener("click", this.documentClick);
  },
  unmounted: function () {
    document.removeEventListener("keyup", this.closeMenuOnEsc);
    document.removeEventListener("click", this.documentClick);
  },
  watch: {
    isOpen: {
      deep: true,
      immediate: true,
      handler(newValue, oldValue) {
        this.$nextTick(() => {
          if (!oldValue && newValue) {
            this.openMenu();
          }
          if (oldValue && !newValue) {
            this.closeMenu();
          }
        });
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.nav-wrapper {
  height: 0;
}
.bm-burger-button {
  display: none;
  position: absolute;
  width: 2rem;
  height: 2rem;
  top: -5rem;
  cursor: pointer;
  border-radius: 1rem;
}

.bm-burger-bars {
  background-color: var(--secondary-color);
  border-radius: 2rem;
}
.line-style {
  position: absolute;
  height: 19%;
  left: 0;
  right: 0;
}
.cross-style {
  position: absolute;
  top: 12px;
  right: 2px;
  cursor: pointer;
}
.bm-cross {
  background: #bdc3c7;
}
.bm-cross-button {
  height: 2rem;
  width: 2rem;
}
.bm-cross-button.hidden {
  display: none;
}
.bm-menu {
  height: 100%; /* 100% Full-height */
  width: 0; /* 0 width - change this with JavaScript */
  position: fixed; /* Stay in place */
  z-index: 1000; /* Stay on top */
  top: 0;
  left: 0;
  background-color: #fafafa; /* Black*/
  overflow-x: hidden; /* Disable horizontal scroll */
  padding-top: 60px; /* Place content 60px from the top */
  transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
}
.bm-overlay {
  background: rgba(0, 0, 0, 0.15);
}
.bm-item-list {
  color: var(--font-color);
  margin-left: 10%;
  font-size: 20px;
  a {
    color: var(--font-color);
    font-weight: bold;
  }
  .router-link-active {
    color: var(--primary-color);
  }
}
.bm-item-list > * {
  display: flex;
  text-decoration: none;
  padding: 0.7em;
}
.bm-item-list > * > span {
  margin-left: 10px;
  font-weight: 700;
  color: white;
}
@media screen and (max-width: 669px) {
  .bm-burger-button {
    display: block;
    position: relative;
    _top: -5rem;
    margin: 1.4rem;
  }
}
</style>
