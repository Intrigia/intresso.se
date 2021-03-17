<template>
  <NuxtLink class="nuxt-link" :to="'/artikel/' + this.title">
    <div class="article-card">
      <div :style="imageVar" class="article-header"></div>
      <h3 class="article-title"> {{ title }} </h3>
      <p class="article-desc"> {{ desc }} </p>
      <a class="article-read-more" href="">Läs mer</a>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  props: ['title', 'desc', 'img'],
  computed: {
    imageVar() {
      return {
        "--img-url": "url('" + this.img + "')"
      }
    }
  }
}
</script>

<style scoped>
.nuxt-link {
  text-decoration: none;
}

/* Chosen Articles Container | Article Container | Article */
.article-card {
  position: relative;
  padding-bottom: 5%;
  border-radius: 20px;
  background-color: white;
  box-shadow: 0px 0px 16px 0 #34383E25;
}

  /* Chosen Articles Container | Article Container | Article | Items */
  .article-header {
    width: 100%;
    height: 250px;
    background-image: var(--img-url);
    background-position: center;
    background-size: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
  }

  @media screen and (max-width: 1000px) {
    .article-header {
      background-position: top;
      height: 200px;
    }
  }

  .article-title {
    padding: 3% 8% 0% 8%;
    color: #34383E;
  }

  @media screen and (max-width: 500px) {
    
  }

  .article-desc {
    padding: 0% 8% 10% 8%;
    color: #34383E;
    font-size: 1.05rem;
    font-weight: normal;
  }

  .article-read-more {
    color: #FA5183;
    text-decoration: none;
    padding: 0 8%;
  }
</style>