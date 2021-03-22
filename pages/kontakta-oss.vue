<template>
  <div class="form-page">
    <div class="form-nav">
      <ul>
        <li class="back-container">
          <span class="go-back" @click="$router.go(-1)">
            <span class="arrow-back"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" transform="translate(3 6)"><polyline points="1.67 1.669 7.327 1.671 7.328 7.328" transform="scale(-1 1) rotate(45 0 -6.364)"/><line x1="13.5" x2=".5" y1="4.5" y2="4.5"/></g></svg></span>
            <p class="go-back-text">Gå tillbaka</p>
          </span>
        </li>
        <li class="lead-title-container">
          <p class="lead-title">Kontakta</p>
        </li>
        <li class="title-container">
          <h3 class="title">Intresso</h3>
        </li>
      </ul>
    </div>
    <div class="form">
      <form @submit.prevent>
        <div class="field-group first-name-container">
          <p class="label" >Förnamn</p>
          <input placeholder="Skriv ditt förnamn här..." required v-model="firstName" type="text" name="first_name">
        </div>
        <div class="field-group last-name-container">
          <p class="label" >Efternamn</p>
          <input placeholder="Skriv ditt efternamn här..." required v-model="lastName" type="text" name="last_name">
        </div>
        <div class="field-group email-container">
          <p class="label" >E-postadress</p>
          <input placeholder="Skriv din e-postadress här..." required v-model="email" type="text" name="email">
        </div>
        <div class="field-group message-container">
          <p class="label" for="message">Meddelande</p>
          <textarea placeholder="Skriv ditt meddelande här..." required v-model="message" name="message" cols="30" rows="5"></textarea>
        </div>
<!--         <div class="field-group human-auth">
          <p class="label">Är en katt ett djur?</p>
          <input @click="humanAuthFunction(value)" class="checkbox" value="true" type="checkbox" name="yes">
          <label for="yes"></label>
          <input @click="humanAuthFunction(value)" class="checkbox" value="false" type="checkbox" name="no">
          <label for="no"></label>
        </div> -->
        <button type="submit">Skicka! </button>
        <br>
        <small class="status-message success" v-if="success === true"> Ditt meddelande har skickats, vi återkommer inom kort! </small>
        <small class="status-message failure" v-if="success === false"> Något har gått fel, försök gärna igen. </small>
      </form>
    </div>
    <img src="~/assets/contact-bg.svg" class="contact-bg">
  </div>
</template>

<script>
export default {
  created() {
    if (process.browser) {
      console.log(window)
    }
  },
  scrollToTop: true,
  layout: 'form',
  data() {
    return {
      firstName: null,
      lastName: null,
      email: null,
      message: null,
      humanAuth: "",
      success: null
    }
  },
  methods: {
    humanAuthFunction(val) {
      console.log(val)
    }
  }
}
</script>

<style scoped>

ul {
  padding: 0;
  margin: 0;
}

.form-nav, .form {
  z-index: 10;
  position: relative;
}

.contact-bg {
  position: absolute; 
  top: 0;
  right: -2%;
  z-index: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

@media screen and (max-width: 1000px) {
  .contact-bg {
    display: none;
  }
}

/* Form Nav | Go Back Button */
.go-back {
  cursor: pointer;
}

  /* Form Nav | Go Back Button | Arrow */
  .arrow-back {
    position: relative;
    display: none;
  }

  /* Form Nav | Go Back Button | Text */
  .go-back-text {
    display: inline;
    margin-left: 1%;
    font-size: 0.875rem;
    font-weight: 300;
  }



/* Form */
.form {
  padding: 1% 0 0 5%;
}

@media screen and (max-width: 1000px) {
  .form {
    display: grid;
    padding: 0;
    justify-items: center;
  }
}

  /* Form | Field Group */
  .field-group {
    padding-bottom: 2%;
  }

  @media screen and (max-width: 1000px) {
    .field-group {
      padding-bottom: 10%;
    }    
  }

    /* Form | Field Group | Label */
    .label {
      color: #FA5183;
      font-weight: 500;
    }

    /* Form | Field Group | Input */
    input, label, textarea {
      width: 250px;
      height: auto;
      border: none;
      padding-bottom: 0.5%;
      border-bottom: 1px #34383E solid;
      outline: none !important;
      resize: none;
      font-family: 'Kumbh', sans-serif;
      font-size: 1rem;
      transition: all ease-in-out 2s;
    }

    input::placeholder, label::placeholder, textarea::placeholder {
      transition: 0.2s all ease-in-out;
      opacity: 1;
    }

    input:focus::placeholder, label:focus::placeholder, textarea:focus::placeholder {
      opacity: 0;
    }

  /* Form | Button */
  button {
    background-color: #FA5183;
    width: 252px;
    height: 40px;
    font-size: 1rem;
    border: none;
    color: white;
    font-family: 'Kumbh';
    font-weight: bold;
    border-radius: 20px;
    transition: all ease-in-out 0.3s;
    margin-bottom: 1%;
  }

  button:focus {
    outline: none !important;
  }

  button:hover {
    cursor: pointer;
    background-color: #f7638f;
  }

  /* Form | Status Message */
  .status-message {
    font-weight: 300;
    padding-left: 0.3%;
  }

  .success {
    color: #15daaf;
  }

  .failure {
    color: #f7638f;;
  }

</style>