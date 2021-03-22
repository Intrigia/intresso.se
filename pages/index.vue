<template>
  <div>
    <!-- Header -->
    <header id="header">
      <div class="header-container">
        <div class="header-text">
          <img class="header-logo" src="../assets/logo-big.png" alt="logo-big">
          <h3 class="header-lead">En samhällsvetenskaplig ungdomstidning,<br>av elever för elever</h3>
        </div>
        <div class="header-spacer"></div>
      </div>
      <img class="header-bg" src="../assets/intresso-kim-bg-home.svg" alt="bg-not-loaded">
    </header>
    <!-- First Section of Chosen Articles -->
    <section id="chosen-articles">
      <div class="chosen-articles-container">
        <h2 class="title-dark">Utvalda upplagor</h2>
        <div class="article-container">
          <ArticleCard v-for="article in chosenArticles" :key="article.id" :title="article.title" :desc="article.preview" :img="article.img" />
        </div>
      </div>
    </section>

    <!-- Second Section of Latest Articles -->
    <section id="latest-articles">
      <img class="wave-up pink" src="../assets/wave-pink.svg" alt="wave-not-loaded">
      <div class="latest-articles-container">
        <h2 class="title-light">Våra senaste artiklar</h2>
        <div class="article-container">
          <ArticleCard v-for="article in articles" :key="article.id" :title="article.title" :desc="article.preview" :img="article.img" />
        </div>
      </div>
    </section>
    <img class="wave-down pink" src="../assets/wave-pink.svg" alt="wave-not-loaded">

    <!-- Third Section About Us -->
    <section id="about">
      <h2 class="title-dark">Om oss</h2>
      <div class="about-container">
        <div class="about-card">
          <div class="about-grid">
            <div class="about-info">
              <h3 class="about-title">Vilka är vi?</h3>
              <p class="about-desc">
                Vårt mål är att se till att så många ungomar som möjligt läser vidare på universitetet. För att åstadkomma detta har vi valt att
                engagera oss i den roliga aktiviteten att skriva artiklar om intressanta vetenskapliga ämnen. Vem var den första kvinnan som flög 
                över Atlanten? Chimpanspolitik, vad kan det säga om vårat samhälle? Eller kanske den intressanta frågan: vilken påverkan har sociala medier i samhällets strukturer? <br>
              </p>
              <button class="about-button" @click="$router.push('/om-oss')">Läs mer</button>
            </div>
            <div class="about-illustration">
              <img src="../assets/kimpossible.svg" alt="">
            </div>
          </div>
        </div>
      </div>
      
      <div class="about-container-mobile">
        <div class="about-card">
            <div class="about-illustration">
              <img src="../assets/kimpossible.svg" alt="">
            </div>
            <div class="about-info">
              <h3 class="about-title">Vilka är vi?</h3>
              <p class="about-desc">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. </p>
              <button class="about-button" onclick="window.location.href='om-oss'">Läs mer</button>
            </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import ArticleCard from '../components/ArticleCard.vue'

export default {
  layout: 'default',
  beforeMount() {
  },
  data() {
    return {
      articles: [
        {
          "id": 1,
          "title": "Det viktigaste slaget i Englands historia",
          "preview": "England, idag en del av Storbritannien, är ett land med imponerande historia som går tillbaka tusentals år...",
          "img": "https://i.imgur.com/fqyuZhN.jpg",
          "category": "historia"
        },
      ],
      chosenArticles:[
        {
          "id": 1,
          "title": "Det viktigaste slaget i Englands historia",
          "preview": "England, idag en del av Storbritannien, är ett land med imponerande historia som går tillbaka tusentals år...",
          "img": "https://i.imgur.com/fqyuZhN.jpg",
          "category": "historia"
        },
      ]
    }
  },
  components: {
    ArticleCard
  },
}

</script>


