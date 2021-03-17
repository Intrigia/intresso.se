<template>
  <div>
    <img class="wave-up pink" src="../assets/wave-pink.svg" alt="wave-not-loaded">
    <footer id="footer">
      <div class="footer-nav">
        <div class="footer-nav-list footer-logo-container">
          <img class="footer-nav-logo" src="../assets/logo-big.png" alt="">
          <p class="footer-nav-logo-desc">Vårt mål är att se till att så många ungdomar som möjligt läser vidare på universitetet genom att göra vetenskap lättillgängligt och roligt.</p>
        </div>
        <div class="footer-nav-list">
          <h3 class="footer-nav-title">Kontakt</h3>
          <ul class="footer-nav-links-list">
            <li class="footer-nav-link"><a href="">@intresso</a></li>
            <li class="footer-nav-link"><a href="">kontakt@intresso.se</a></li>
            <li class="footer-nav-link"><a href="">Intresso</a></li>
            <li class="footer-nav-link"><a href="">+46123123123</a></li>
            <li class="footer-nav-link"><a href="">Chatta med oss!</a></li>
          </ul>
        </div>
        <div class="footer-nav-list">
          <h3 class="footer-nav-title">Kategorier</h3>
          <ul class="footer-nav-links-list">
            <li class="footer-nav-link"><a href="">Filosofi</a></li>
            <li class="footer-nav-link"><a href="">Statsvetenskap</a></li>
            <li class="footer-nav-link"><a href="">Juridik</a></li>
            <li class="footer-nav-link"><a href="">Sociologi</a></li>
            <li class="footer-nav-link"><a href="">Historia</a></li>
            <li class="footer-nav-link"><a href="">Litteratur</a></li>
          </ul>
        </div>
        <div class="footer-nav-list">
          <h3 class="footer-nav-title">Intresso</h3>
          <ul class="footer-nav-links-list">
            <li class="footer-nav-link"><a href="">Bli medlem</a></li>
            <li class="footer-nav-link"><a href="">Om oss</a></li>
            <li class="footer-nav-link"><a href="">FAQ</a></li>
            <li class="footer-nav-link"><a href="">Integritetspolicy</a></li>
            <li class="footer-nav-link"><nuxt-link to="/kontakta-oss"><a>Kontakta oss</a></nuxt-link></li>
          </ul>
        </div>
      </div>
      <div class="footer-credits">
        <p class="footer-credit-text credit-left">© 2021 Intresso, Alla rättigheter förbehållna.</p>
        <p class="footer-credit-text credit-middle">Organisationsnummer: 802530-4257</p>
        <p class="footer-credit-text credit-right">Hemsida utvecklad av <a target="_blank" href="https://www.linkedin.com/in/ohmandaniel/">Daniel Öhman</a></p>
      </div>
    </footer>
  </div>
</template>

<style scoped>
/* #Footer */
#footer {
  background-color: #FA5183;
  display: grid;
}

  /* Footer Nav */
  .footer-nav {
    padding: 2%;
    display: grid;
    gap: 5vw;
    grid-template-columns: repeat(4, minmax(200px, 1fr));
  }

  @media screen and (max-width: 1300px) {
    .footer-nav {
      grid-template-columns: repeat(4, 200px);
    }
  }

  @media screen and (max-width: 1000px) {
    .footer-nav {
      grid-template-columns: repeat(1, 300px);
      justify-self: center;
      padding: 4% 0;
    }
  }
    
    /* Footer Nav | Title */
    .footer-nav-title {
      color: white;
    }

    .footer-nav-logo {
      height: 100px;
      margin-top: -7%;
    }

    .footer-nav-logo-desc {
      font-weight: normal;
      color: white;
      margin: -4% 0 0 5.5%;
    }

    /* Footer Nav | Links List */
    .footer-nav-links-list {
      list-style-type: none;
      padding: 0;
      font-weight: regular;
    }

    /* Footer Nav | Link */
    .footer-nav-link a {
      text-decoration: none;
      color: white;
      font-weight: normal;
    }

    @media screen and (max-width: 1000px) {
      .footer-nav-logo {
        height: 80px;
        margin-left: -5.5%;
      }

      .footer-nav-logo-desc {
        margin-left: 0;
      }
    }

  /* Footer Credits */
  .footer-credits {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    padding: 0.5% 2%;
    background-color: white;
  }

  @media screen and (max-width: 1000px) {
    .footer-credits {
      grid-template-columns: 1fr;
      justify-items: center;
    }
  }

  /* Footer Credits | Text */
  .footer-credit-text {
    font-weight: 300;
    color: #818181;
    font-size: 0.875rem;
  }

  .footer-credit-text a{
    color: #818181;
  }

  .credit-middle {
    justify-self: center;
  }

  .credit-right {
    justify-self: right;
  }

  @media screen and (max-width: 1000px) {
    .credit-right {
      justify-self: center;
    }

    .footer-credit-text {
      text-align: center;
    }
  }
</style>