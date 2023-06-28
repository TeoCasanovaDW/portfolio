<template>
  <main class="home">
    <Header></Header>

    <!-- DERNIERS PROJETS -->
    <section class="last_projects">
      <h1>DERNIERS PROJETS</h1>
      <div class="cards-container">
        <a v-for="(project, index) in this.$store.state.lastProjects" :href="'/project/'+project.project_id" :key="index">
          <span>{{ project.project_title }}</span>
          <img :src="require(`@/assets/${project.project_thumbnail_path}`)" alt="">
        </a>
      </div>
      <button class="cta" @click="this.$router.push('/portfolio')">Voir plus</button>
    </section>
    
    <!-- COMPÉTENCES ET ENVIRONNEMENT -->
    <section class="skills-environnement">
      <h1>COMPÉTENCES ET ENVIRONNEMENT</h1>
      <h2>STACK ACTUELLE</h2>
      <div class="actual-stack">
        <div class="skill-container frontend">
          <h3>FRONT-END</h3>
          <div class="icons-container">
            <img src="../assets/frontend.png" class="vue" alt="logo de vue.js">
          </div>
        </div>
        <div class="skill-container backend">
          <h3>BACK-END</h3>
          <div class="icons-container">
            <img src="../assets/backend.png" class="node" alt="logo de node.js">
          </div>
        </div>
      </div>
      <h2>ENVIRONNEMENT</h2>
      <div class="environnement">
        <div class="skill-container developpement">
          <h3>DEVELOPPEMENT</h3>
          <div class="icons-container">
            <img src="../assets/developpement.png" class="windows" alt="logo de windows">
          </div>
        </div>
        <div class="skill-container design">
          <h3>DESIGN</h3>
          <div class="icons-container">
            <img src="../assets/design.png" class="figma" alt="logo de figma">
          </div>
        </div>
      </div>
    </section>

    <!-- RECOMMANDATIONS -->
    <section class="recommendations">
      <h1>RECOMMANDATIONS</h1>
      <!-- <div class="reco-container" v-for="(reco, index) in this.$store.state.allReco" :key="index"> -->
       {{ this.$store.state.allReco }}
      <div class="reco-container">
        <div class="reco" v-for="(reco, index) in this.$store.state.allReco" :key="index">
          <h2>{{ reco.reco_author_firstname + ' ' + reco.reco_author_lastname }}</h2>
          <p>{{ reco.reco_description }}</p>
        </div>
        <div class="reco">
          <h2>Cécile B.</h2>
          <p>Téo a su répondre à mes attentes professionnelles pour la conception de mon site web. Il a également été à l'initiative de propositions pertinentes qui sont venues finaliser mon projet de création. Je le recommande vivement!</p>
        </div>
        <div class="reco">
          <h2></h2>
          <p>Téo a su répondre à mes attentes professionnelles pour la conception de mon site web. Il a également été à l'initiative de propositions pertinentes qui sont venues finaliser mon projet de création. Je le recommande vivement!</p>
        </div>
        <div class="reco">
          <h2>Alexandre S.</h2>
          <p>Téo a su répondre à mes attentes professionnelles pour la conception de mon site web. Il a également été à l'initiative de propositions pertinentes qui sont venues finaliser mon projet de création. Je le recommande vivement!</p>
        </div>
      </div>

      <h2>AJOUTER UNE RECOMMANDATION</h2>
      <div class="add-recommandation">
        <div class="input-container">
          <label for="reco_author_lastname">Nom</label>
          <input type="text" name="reco_author_lastname" id="reco_author_lastname" v-model="this.reco.reco_author_lastname">
        </div>
        <div class="input-container">
          <label for="reco_author_firstname">Prénom</label>
          <input type="text" name="reco_author_firstname" id="reco_author_firstname" v-model="this.reco.reco_author_firstname">
        </div>
        <div class="input-container">
          <label for="reco_description">Message</label>
          <textarea type="text" name="reco_description" id="reco_description" v-model="this.reco.reco_description"></textarea>
        </div>
        <button class="cta" @click="sendReco()">Envoyer</button>
      </div>
    </section>
  </main>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: 'HomeView',
  data(){
    return{
      reco: {
        reco_author_firstname: "",
        reco_author_lastname: "",
        reco_description: ""
      }
    }
  },
  components: {
    Header
  },
  methods: {
    sendReco(){
      this.$store.commit('addRecommandation', this.reco);
    }
  },
  mounted(){
    this.$store.commit('getLastProjects');
    this.$store.commit('getAllReco');
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
      a{
        width: 32%;
        height: fit-content;
        position: relative;
        transition: .4s;
        overflow: hidden;
        border-radius: 15px;
        &:hover{
          transform: translateY(-5px);
          span {
            transform: translateY(0);
          }
        }
        span{
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          padding: 10px 0;
          background-color: rgba(235, 251, 255, .8);
          text-align: center;
          text-transform: uppercase;
          color: var(--dark-color);
          font-weight: 800;
          z-index: 50;
          transform: translateY(-100%);
          transition: .4s;
        }
        img{
          width: 100%;
          border-radius: 15px;
        }
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
        justify-content: space-between;
        width: 42%;
        height: 150px;
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
          width: 75%;
          display: flex;
          align-items: center;
          justify-content: space-around;
          img{
            width: 100%;
          }
        }
      }
    }
  }

  section.recommendations{
    h2{
      margin: 25px auto;
      font-size: 1.6em;
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
    .add-recommandation{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10%;
      width: 70vw;
      max-width: 800px;
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
