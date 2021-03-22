<template>
    <div>
      <!-- Header -->
      <section id="header">
        <div class="header-container">
          <div class="header-text">
            <h1 class="header-title"> {{ category }} </h1>
          </div>
        </div>
      </section>
      <!-- Articles -->
      <section id="articles">
        <div class="latest-articles-container">
          <h2 v-if="noArticles" class="title-light">Det finns för nuvarande inga artiklar i denna kategori</h2>
          <div v-if="!noArticles" class="article-container">
            <ArticleCard v-for="article in categoryArticles" :key="article" :title="article.title" :desc="article.preview" :img="article.img" />
          </div>
        </div>
      </section>
      <div class="hide-footer-wave"></div>
    </div>
</template>

<script>

import ArticleCard from '@/components/ArticleCard.vue'

export default {
  layout: 'default',
  components: {
    ArticleCard
  },
  beforeMount() {
    var i = 0;
    for(i = 0; i < this.articles.length; i++) {
      if(this.articles[i].category === this.$nuxt._route.params.id) {
        this.categoryArticles.push(this.articles[i])
        console.log(this.categoryArticles)
      }
    }
    if(this.categoryArticles.length < 1) {
      this.noArticles = true
    }
    // console.log(this.$nuxt._route.params.id)
    // console.log(this.articles[0].category)
    // this.categoryArticles = this.articles.find(articles => articles.category.replace(/[?]/g, "") === this.$nuxt._route.params.id )
    // console.log(categoryArticles)
  },
  computed: {
    category() {
      var category = this.$route.params.id
      category = this.$route.params.id.charAt(0).toUpperCase() + category.slice(1)
      return category
    }
  },
  data() {
    return {
      categoryArticles: [],
      noArticles: false,
      articles: [
        {
          "id": 1,
          "title": "Det viktigaste slaget i Englands historia",
          "preview": "England, idag en del av Storbritannien, är ett land med imponerande historia som går tillbaka tusentals år...",
          "img": "https://i.imgur.com/fqyuZhN.jpg",
          "category": "historia"
        },
      ],
    }
  }
}
</script>


<style scoped>
.hide-footer-wave {
  height: 20vh;
  width: 100%;
  background: #FA5183;
  margin-bottom: -20vh;
  z-index: 20;
}

.header-container {
  background: #FA5183;
  display: block !important;
  padding: 15vh 20vw 1vh 20vw !important;
}

.header-title {
  color: white;
  font-size: 4rem;
  text-align: center;
}

#articles {
  margin-top: -1%;
  padding: 10vh 0;
  background: #FA5183;
}


</style>