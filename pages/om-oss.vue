<template>
  <div>
    <!-- Header -->
    <header id="header">
      <div class="header-container">
        <div class="header-text">
          <h1 class="header-title">Om oss</h1>
        </div>
      </div>
    </header>
    <!-- First Section of Chosen Articles -->
    <section id="about-us">
      <div class="about-container">
        <h2 class="title-dark">Samhällskunskap ska vara roligt och lättilgängligt</h2>
        <p class="paragraph">Vårt mål är att se till att så många ungomar som möjligt läser vidare på universitetet. För att åstadkomma detta har vi valt att
          engagera oss i den roliga aktiviteten att skriva artiklar om intressanta vetenskapliga ämnen. Vem var den första kvinnan som flög 
          över Atlanten? Chimpanspolitik, vad kan det säga om vårat samhälle? Eller kanske den intressanta frågan: vilken påverkan har sociala medier i samhällets strukturer? 

        </p>
      </div>
      <div class="about-container">
        <h2 class="title-dark">Vi drivs av donationer och medlemmernas välvilja</h2>
        <p class="paragraph">För att kunna låta våra läsare ge vårt innehåll en ärlig chans utan att blanda in ekonomisk vinning har vi valt att bedriva verksamheten ideellt. Vi mottar generösa donationer av våra läsare och det är tack vare dessa som vi kan upprätthålla Partikular och våra digitala lösningar. Våra skribenter enas under en gemensam passion som driver oss att arbeta med verksamheten på vår fritid.</p>
      </div>
      <div class="about-container">
        <h2 class="title-dark">Vi är just nu ett team av {{ volunteers.length }} engagerade ungdomar</h2>
        <p class="paragraph"></p>
      </div>
      <div v-for="volunteer in volunteers" :key="volunteer.id" class="profile-container">
        <ProfileCard :role="volunteer.role" :author_name="volunteer.name" :author_img="volunteer.img" :desc="volunteer.desc" />
      </div>
    </section>
  </div>
</template>

<script>
import ProfileCard from '@/components/ProfileCard.vue'

export default {
  components: {
    ProfileCard
  },
  data() {
    return {
      volunteers: [
        {
          id: 1,
          name: "Daniel Öhman",
          role: "Chefredaktör för Intresso och Webbutvecklare för Intrigia Student Media",
          desc: "Jag gillar att lära mig om nya saker för att sedan skapa något. Framförallt älskar jag att förenkla svåra koncept!",
          img: "https://lh3.googleusercontent.com/fife/ABSRlIqStw-DICm52emysuCLwkrXrH506eoqNEeRzy2Q4vwJcXizJLUH_Qny3vP657V0dSPHw2eQLBE1bE7qsNq45MN4JzHVywA6hAUjDwq2SpBCJq9d7Cdr-lA8rtQJ2QNHpC4Nke2E_v3FnDhQZ_4RHMrnqcAKIdq3jmynBeKx9X0ewhmUCWv_2ThGsWBCvsZ_-HRpS8OQmCpMLz4PmWTCqPAaI5D7l94rXPVAJZ7gndhwq3fo861Yy8MsizPy4kiuqiCaH43kV0yKc8SJEodDEtAXGpprnKeILqxiWXfpoOSyZTBfparf1L_hYiE1YDx_9AoCw7GMxuHBHE1slRKvBg7ucTOFsltXsE420lDHj0SDkO7gowmyJjmIZBJRxQjKGBSmkVAWyBbdcIZzOOt_eLIDDUmVXdLmf8RN01vmAzEcYDAeN1q23N2zoa4ef6uD2cPUzPGiizmfkIlg416S2f0_yCYSMYo4inniEiF4lKGVHt4M3aAIElLB9qhVEFVSdk_aivZ4vYdzDyM6YF9pv0wI0LZuMKotQZknJhrZ8EY4solD74uk60WHTEbjEahC5547xxjbEuv6SgViONMeQOkFM9hXVdk-ueJyGxN0BaL2GkCI5l9irCbKDUu_8t9vpJk1jkQPsVuNN6jKNRaJEUSD19Smgx6ZEN9iXCOD2IYPGd0FtIcqKzmxWflzA4-XCwT_tQve-BnQLqDMFTwrcXimMbfn4ToAjXSbnz2MstRPABs=s400"
        },
        {
          id: 2,
          name: "Olle Nilsson",
          role: "Skribent",
          desc: "Jag gillar att lära mig om nya saker för att sedan skapa något. Framförallt älskar jag att förenkla svåra koncept!",
          img: "https://lh3.googleusercontent.com/a-/AOh14GioCtDjsD5KhAFfUuA5wnCgvIeJPpZIrK4guEKT=s400"
        },
        {
          id: 3,
          name: "Ludvig Wallman",
          role: "Skribent",
          desc: "Jag gillar att lära mig om nya saker för att sedan skapa något. Framförallt älskar jag att förenkla svåra koncept!",
          img: "https://scontent.fmmx3-1.fna.fbcdn.net/v/t1.0-1/p100x100/75478423_1211110389075690_287639689299492864_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_ohc=ucbzWn7z_t0AX8cDlp9&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fmmx3-1.fna&tp=6&oh=2ba248b9e2b6a41dbfa7b4062d6cf23e&oe=60766E2F"
        }
      ]
    }
  }
}
</script>


<style scoped>
.header-container {
  background: #FA5183;
  display: block !important;
  padding: 30vh 20vh !important;
}

.header-title {
  color: white;
  font-size: 4rem;
  text-align: center;
}

.title-dark {
  margin: 1vw 0;
  padding: 0;
  font-size: 2.2rem;
}

.paragraph {
  font-weight: 500;
  margin: 0 0 4vw 0;
  letter-spacing: 0.5px;
}

#about-us {
  padding: 10vw 29vw 10vw 29vw !important;
  display: grid !important;
}

@media screen and (max-width: 1000px) {
  #about-us {
    padding: 10vw 0vw 10vw 0vw !important;
  }
}

.profile-container {
  margin-bottom: 10%;
}

@media screen and (max-width: 1000px) {
  .profile-container {
    justify-self: center;
  }
}

</style>