<template>
  <main class="home">
    <Header></Header>

    <!-- DERNIERS PROJETS -->
    <section class="last_projects">
      <h1>DERNIERS PROJETS</h1>
      <div class="cards-container">
        <img src="../assets/restaurant_administrable.png" alt="">
        <img src="../assets/type_train.png" alt="">
        <img src="../assets/gite_moisson.png" alt="">
      </div>
      <button class="cta">Voir plus</button>
    </section>
    
    <!-- COMPÉTENCES ET ENVIRONNEMENT -->
    <section class="skills-environnement">
      <h1>COMPÉTENCES ET ENVIRONNEMENT</h1>
      <h2>STACK ACTUELLE</h2>
      <div class="actual-stack">
        <div class="skill-container frontend">
          <h3>FRONT-END</h3>
          <div class="icons-container">
            <img src="../assets/frontend_1.png" alt="logo de vue.js">
            <img src="../assets/frontend_2.png" alt="logo de sass">
            <img src="../assets/frontend_3.png" alt="logo de axios">
          </div>
        </div>
        <div class="skill-container backend">
          <h3>BACK-END</h3>
          <div class="icons-container">
            <img src="../assets/backend_1.png" alt="logo de node.js">
            <img src="../assets/backend_2.png" alt="logo de sequelize">
          </div>
        </div>
      </div>
      <h2>ENVIRONNEMENT</h2>
      <div class="environnement">
        <div class="skill-container developpement">
          <h3>DEVELOPPEMENT</h3>
          <div class="icons-container">
            <img src="../assets/developpement_1.png" alt="logo de windows">
            <img src="../assets/developpement_2.png" alt="logo de chrome">
            <img src="../assets/developpement_3.png" alt="logo de visual studio code">
            <img src="../assets/developpement_4.png" alt="logo de wamp">
          </div>
        </div>
        <div class="skill-container design">
          <h3>DESIGN</h3>
          <div class="icons-container">
            <img src="../assets/design_1.png" alt="logo de figma">
            <img src="../assets/design_2.png" alt="logo de dribbble">
          </div>
        </div>
      </div>
    </section>

    <!-- RECOMMANDATIONS -->
    <section class="recommendations">
      <h1>RECOMMANDATIONS</h1>
      <div class="reco-container">
        <div class="reco">
          <h2>Cécile B.</h2>
          <p>Téo a su répondre à mes attentes professionnelles pour la conception de mon site web. Il a également été à l'initiative de propositions pertinentes qui sont venues finaliser mon projet de création. Je le recommande vivement!</p>
        </div>
        <div class="reco">
          <h2>Laurent D.</h2>
          <p>Téo a su répondre à mes attentes professionnelles pour la conception de mon site web. Il a également été à l'initiative de propositions pertinentes qui sont venues finaliser mon projet de création. Je le recommande vivement!</p>
        </div>
        <div class="reco">
          <h2>Alexandre S.</h2>
          <p>Téo a su répondre à mes attentes professionnelles pour la conception de mon site web. Il a également été à l'initiative de propositions pertinentes qui sont venues finaliser mon projet de création. Je le recommande vivement!</p>
        </div>
      </div>

      <h2>AJOUTER UNE RECOMMANDATION</h2>
      <form action="#" class="add-recommandation">
        <div class="input-container">
          <label for="lastname">Nom</label>
          <input type="text" name="lastname" id="lastname">
        </div>
        <div class="input-container">
          <label for="firstname">Prénom</label>
          <input type="text" name="firstname" id="firstname">
        </div>
        <div class="input-container">
          <label for="message">Message</label>
          <textarea type="text" name="message" id="message"></textarea>
        </div>
        <button type="submit" class="cta">Envoyer</button>
      </form>
    </section>
  </main>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: 'HomeView',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>

  section.last_projects{
    .cards-container{
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 96vw;
      img{
        width: 32%;
      }
    }
  }

  section.skills-environnement{
    h2{
      font-weight: 500;
      font-size: 1.3em;
    }
    .actual-stack,
    .environnement{
      display: flex;
      align-items: center;
      justify-content: space-around;
      width: 80vw;
      .skill-container{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 25px;
        width: 42%;
        padding: 25px;
        background-color: var(--light-color);
        border-radius: 25px;
        h3{
          font-size: 1.3em;
          font-weight: 500;
          color: var(--dark-color);
          padding-bottom: 25px;
        }
        .icons-container{
          width: 80%;
          display: flex;
          align-items: center;
          justify-content: space-around;
        }
      }
    }
  }

  section.recommendations{
    h2{
      margin: 25px auto;
      font-size: 1.4em;
    }
    .reco-container{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 4vh;
      .reco{
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
        gap: 40px;
        border-radius: 15px;
        padding: 50px;
        background-color: var(--light-color);
        width: 80vw;
        margin: 0 auto;
        h2{
          margin: 0;
          font-size: 1.3em;
          font-weight: 600;
          color: var(--dark-color);
        }
        p{
          font-size: 1em;
          font-weight: 400;
          color: var(--dark-color);
        }
      }
    }
    form{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10%;
      width: 70vw;
      flex-wrap: wrap;
      .input-container{
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-bottom: 3vh;
        &:first-of-type,
        &:nth-of-type(2){
          width: 45%;
        }
        label{
          font-size: 1.2em;
        }
        input{
          padding: 12px 20px;
          border-radius: 8px;
          color: var(--dark-color);
        }
        textarea{
          padding: 15px;
          height: 20vh;
          border-radius: 8px;
          color: var(--dark-color);
        }
      }
    }
  }
</style>
