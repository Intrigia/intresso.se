<template>
  <div class="card">
    <div class="profile-picture">
      <img :src="author_img" alt="profile_picture not loaded">
    </div>
    <div class="information">
      <div class="information-header">
        <h3 class="information-name"> {{ author_name }} </h3>
        <p class="information-role"> {{ role }} </p>
      </div>
      <div class="information-desc-container">
        <p class="information-desc"> {{ desc }}...</p>
      </div>
      <div class="information-footer">
        <!-- !!Add later!! -->
        <!-- <div class="information-footer-button-container">
          <button class="information-footer-button">Läs mer</button>
        </div> -->
        <div class="information-footer-email-container">
          <a class="information-footer-email" href=""> {{ authorFirstName }}.{{ authorLastName }}@intresso.se </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['role', 'author_name', 'author_img', 'desc' ],
  data() {
    return {
      authorFirstName: null,
      authorLastName: null
    }
  },
  beforeMount() {
    this.authorFirstName = this.author_name.split(" ")[0].toLowerCase()
    this.authorLastName = this.author_name.split(" ")[1].toLowerCase()
  },
  data() {
    return {
      sources: ['Nationalencyklopedin, Platon. http://www.ne.se/uppslagsverk/encyklopedi/lång/platon (hämtad 2021-03-16)', 'Nationalencyklopedin, Platon. http://www.ne.se/uppslagsverk/encyklopedi/lång/platon (hämtad 2021-03-16)', 'Nationalencyklopedin, Platon. http://www.ne.se/uppslagsverk/encyklopedi/lång/platon (hämtad 2021-03-16)', 'Nationalencyklopedin, Platon. http://www.ne.se/uppslagsverk/encyklopedi/lång/platon (hämtad 2021-03-16)']
    }
  }
}
</script>

<style scoped>

.card {
  padding: 0;
  box-shadow: 0px 0px 16px 0 #34383E25;
  display: grid;
  grid-template-columns: 1fr 3fr;
  border-radius: 20px;
  background: white;
}

@media screen and (max-width: 1000px){
  .card {
    grid-template-columns: 1fr;
    grid-template-rows: 300px 1fr;
    width: 35vw;
  }
}

@media screen and (max-width: 500px){
  .card {
    grid-template-columns: 1fr;
    grid-template-rows: 300px 1fr;
    width: 80vw;
  }
}

h3 {
  font-size: 1.2rem;
  padding: 0;
  margin: 0;
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

/* Profile Picture */
.profile-picture {
  height: 200px;
  position: relative;
}

.profile-picture img {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  height: 100%;
}

@media screen and (max-width: 1000px){
  .profile-picture img {
    width: 100%;
    height: auto;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    border-bottom-left-radius: 0;
  }
}

/* Information */
.information {
  padding: 3%;
  display: grid;
}
 
@media screen and (max-width: 1000px) {
  .information {
    padding-top: 15% !important;
    padding: 8%;
  }
}

  .information-role {
    font-size: 0.875rem;
    margin: 0;
  }

  .information-footer-email-container {
    display: grid;
    height: 100%;
  }

  .information-footer-email {
    text-decoration: none;
    position: relative;
    bottom: 0;
  }


</style>