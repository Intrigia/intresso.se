<template>
  <div class="card">
    <img class="source-kim" src="../assets/source-kim.svg" alt="">
    <h3> Källor: </h3>
    <div>
      <p v-for="source in sources" :key="source"> <nuxt-link to="/"> {{ source }} </nuxt-link> </p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      sources: ['Nationalencyklopedin, Harald Godwinsson. http://www.ne.se/uppslagsverk/encyklopedi/lång/harald-godwinsson (hämtad 2021-03-22)', 'Nationalencyklopedin, Vilhelm I. http://www.ne.se/uppslagsverk/encyklopedi/lång/vilhelm-i (hämtad 2021-03-22)', 'Nationalencyklopedin, Harald Hårdråde. http://www.ne.se/uppslagsverk/encyklopedi/lång/harald-hårdråde (hämtad 2021-03-22)']
    }
  }
}
</script>

<style scoped>

.card {
  padding: 1% 3%;
  box-shadow: 0px 0px 16px 0 #34383E25;
  position: relative;
  border-radius: 20px;
  background: white;
}

@media screen and (max-width: 1000px){
  .card {
    padding: 5vw 10vw;
  }
}

  /* Source Kim */
  .source-kim {
    position: absolute;
    height: 20vh;
    top: -12.3vh;
    right: -5vh;
  }

  /* iPad */
  @media screen and (max-width: 1024px){
    .source-kim {
      position: absolute;
      height: 11vh;
      top: -6.8vh;
      right: 0;
    }
  }

  /* Surface Duo */
  @media screen and (max-width: 540px){
    .source-kim {
      position: absolute;
      height: 22vh;
      top: -13.5vh;
      right: 0;
    }
  }

  /* Surface Duo */
  @media screen and (max-width: 823px){
    .source-kim {
      position: absolute;
      height: 22vh;
      top: -13.5vh;
      right: -4vh;
    }
  }

h3 {
  font-size: 1.2rem;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

p {
  font-weight: 400;
  overflow-wrap: break-word;
}

a {
  color: #34383E;
}

</style>