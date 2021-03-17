<template>
  <nav id="nav">
    <div class="nav-grid">
      <nuxt-link to="/">
        <div class="nav-logo-column">
          <img src="../assets/logo-small.png" alt="logo-not-loaded">
        </div>
      </nuxt-link>
      <div class="nav-links-column">
        <ul>
          <li><nuxt-link to="/kategori/filosofi">Filosofi</nuxt-link></li>
          <li><nuxt-link to="/kategori/statsvetenskap">Statsvetenskap</nuxt-link></li>
          <li><nuxt-link to="/kategori/sociologi">Sociologi</nuxt-link></li>
          <li><nuxt-link to="/kategori/juridik">Juridik</nuxt-link></li>
          <li><nuxt-link to="/kategori/historia">Historia</nuxt-link></li>
          <li><nuxt-link to="/kategori/litteratur">Litteratur</nuxt-link></li>
          <li class="dropdown-container">
            <a class="dropdown" href="javascript:void(0);">Mer</a>
            <div class="dropdown-box">
              <nuxt-link to="/om-oss" class="dropdown-item" href="">Om oss</nuxt-link>
              <!-- <nuxt-link to="/kontakta-oss" class="dropdown-item" href="">Kontakta oss</nuxt-link> -->
              <!-- <nuxt-link to="/faq" class="dropdown-item" href="">FAQ</nuxt-link> -->
              <!-- <nuxt-link to="/integritetspolicy" class="dropdown-item" href="">Integritetspolicy</nuxt-link> -->
            </div>
          </li>
        </ul>
      </div>
      <div class="nav-contact-column">
        <ul><!-- Donera -->
          <li class=""><a href=""></a></li>
          <li>
            <button class="nav-member-button" onclick="window.location.href='bli-medlem'">Bli Medlem</button>
          </li>
        </ul>
        <img @click="menuOpen" class="nav-hamburger" src="../assets/hamburger-menu.svg" alt="hamburger_menu">
      </div>
    </div>
    <div :class="{'menu-open': drawer}" class="menu">
      <div class="mobile-nav-links nav-links-column">
        <ul>
          <li><nuxt-link to="/kategori/filosofi">Filosofi</nuxt-link></li>
          <li><nuxt-link to="/kategori/statsvetenskap">Statsvetenskap</nuxt-link></li>
          <li><nuxt-link to="/kategori/sociologi">Sociologi</nuxt-link></li>
          <li><nuxt-link to="/kategori/juridik">Juridik</nuxt-link></li>
          <li><nuxt-link to="/kategori/historia">Historia</nuxt-link></li>
          <li><nuxt-link to="/kategori/litteratur">Litteratur</nuxt-link></li>
          <li><nuxt-link to="/om-oss">Om oss</nuxt-link></li>
          <li><nuxt-link to="/kontakta-oss">Kontakta oss</nuxt-link></li>
          <li><nuxt-link to="/faq">FAQ</nuxt-link></li>
          <li><nuxt-link to="/integritetspolicy">Integritetspolicy</nuxt-link></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>

</style>

<script>
export default {
  data() {
    return {
      drawer: true
    }
  },
  methods: {
    scrollHandler() {
      console.log(window.scrollY)
    },
    menuOpen() {
      console.log(this.drawer)
      return this.drawer = !this.drawer
    }
  },
  computed: {
    
  }
}
</script>

<style scoped>
.dropdown-container {
  position: relative;
  text-align: left;
}

.dropdown:hover {
  color: white !important;
}

.dropdown-box {
  position: absolute;
  left: 0;
  background: white;
  min-width: 5vw;
  padding: 50%;
  border-top-left-radius: 0 !important;
  border-radius: 20px;

  opacity: 0;
  box-shadow: 0px 0px 16px 0 #34383E25;
}

.dropdown-item {
  color: #34383E !important;
  font-weight: 300;
}

.dropdown-item:hover {
  color: #797d85 !important;
}

.dropdown-container:hover .dropdown-box {
  opacity: 1 !important;
  transition: all ease-in-out 0.3s;
}


/* #Nav */
#nav {
  position: fixed;
  width: 100%;
  padding: 1%;
  z-index: 10;
  background: #FA5183;
}

.nav-grid {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
}

@media screen and (max-width: 1300px) {
  .nav-grid {
    grid-template-columns: 2fr 5fr 2fr;
  }
}

@media screen and (max-width: 1000px) {
  .nav-grid {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

  /* Nav Grid Columns */
  .nav-links-column {
    align-self: center;
    width: 100%;
  }

  @media screen and (max-width: 1100px) {
    .nav-links-column ul {
      display: none;
    }
  }

    /* Logo Left Side */
    .nav-logo-column {
      align-self: center;
    }

      /* Logo Left Side | Image */
      .nav-logo-column img {
        height: 2rem;
      }

      @media screen and (max-width: 1300px) {
        .nav-logo-column img {
          padding: 2% 1%;
        }
      }

    /* Mobile Nav */
    .nav-hamburger {
      display: none;
      z-index: 10;
    }
    
    @media screen and (max-width: 1000px) {
      .nav-hamburger {
        display: block;
        height: 1.5rem;
        align-self: center;
        justify-self: right;
        margin-right: 10%;
      }
    }

    /* Links Middle | List */
    .nav-links-column ul {
      text-align: center;
      margin: 0;
      list-style-type: none;
      padding: 0;
    }

      /* Links Middle | List | List Item */
      .nav-links-column li {
        display: inline-block;
        margin: 0 2%;
      }

      @media screen and (max-width: 1300px) {
        .nav-links-column li {
          margin: 0 1%;
        }
      }

      @media screen and (max-width: 1300px) {
        .nav-links-column li {
          margin: 0 0.5%;
        }
      }

        /* Links Middle | List | List Item | List Links */
        .nav-links-column a {
          text-decoration: none;
          color: white;
        }

        .nav-links-column a:hover {
          color: #ffc3d5;
          transition: all ease-in-out 0.3s;
        }
  
    /* Contact Right Side */
    .nav-contact-column {
      display: grid;
      width: 100%;
    }

      /* Contact Right Side | List */
      .nav-contact-column ul {
        list-style-type: none;
        margin: 0;
        padding-right: 10%;
        justify-items: right;
        display: grid;
        height: 100%;
        grid-template-columns: 1fr 2fr;
      }

      @media screen and (max-width: 1000px) {
        .nav-contact-column ul {
          display: none;
        }
      }

        /* Contact Right Side | List | List Items */
        .nav-contact-column li {
          display: inline-block;
          align-self: center;
          width: 100%;
          display: grid;
          justify-items: right;
        }

        .nav-contact-column a {
          color: white;
          text-decoration: none;
          text-align: right;
        }

        .nav-member-button {
          background-color: white;
          height: 4.5vh;
          width: 15vh;
          border: none;
          font-size: 1rem;
          color: #FA5183;
          font-family: 'Kumbh';
          font-weight: bold;
          border-radius: 20px;
        }

.menu {
  position: fixed;
  width: 100%;
  top: 0;
  left: 100%;
  height: 100%;
  z-index: 1;
  background: #FA5183;
  transition: all ease-in-out 0.3s;
}

.menu-open {
  left: 0;
}

.mobile-nav-links {
  display: grid;
  grid-template-rows: 1fr;
  height: 100%;
}

.mobile-nav-links ul {
  display: block !important;
  align-self: center;
}

.mobile-nav-links ul li {
  display: block !important;
  display: inline;
  font-size: 1.5rem;
  margin: 5% 0;
} 

</style>