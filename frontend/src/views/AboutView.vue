<template>
  <section class="about">
    <Header></Header>
    <p class="my-description">
      Bonjour ! Je suis Téo Casanova, un développeur Web spécialisé dans les technologies Vue.js, Sass, Node.js/Express.js et Sequelize. Je crée des applications web modernes et performantes en utilisant ces outils.<br/><br/>

      Avec Vue.js, je conçois des interfaces réactives et conviviales. Sass me permet de créer des styles CSS modulaires et personnalisables. En utilisant Node.js/Express.js, j'élabore des API robustes et sécurisées. Et avec Sequelize, je gère facilement les interactions avec les bases de données relationnelles.<br/><br/>

      De plus, grâce à Figma, j'apporte ma connaissance en conception UX/UI, en créant des maquettes et des interfaces utilisateur facile à utiliser et attrayantes.<br/><br/>

      Explorez mon portfolio pour découvrir mes compétences et mes réalisations. Contactez-moi pour discuter de votre projet. Ensemble, créons une application web exceptionnelle.
    </p>
    <h1>MON PARCOURS</h1>
    <section class="timeline">
      <div class="main-line"></div>
      <div class="experience-container">
        <div class="experience">
          <p>Développeur | NOVANUM</p>
          <p>Environnement : C#, .NET, ITL (language propriétaire), XML, Wordpress<br/>
            Une année d'alternance à été effectuée dans cette entreprise</p>
        </div>
        <div class="dot"></div>
        <div class="date">Octobre 2022 - Aujoud'hui</div>
      </div>
      <div class="experience-container">
        <div class="experience">
          <p>Formation Concepteur développeur d'applications | CESI</p>
          <p>Formation bachelor visant à savoir, concevoir, mettre en production, sécuriser, une application web</p>
        </div>
        <div class="dot"></div>
        <div class="date">Octobre 2022 - Septembre 2023</div>
      </div>
      <div class="experience-container">
        <div class="experience">
          <p>Développeur freelance | MIRAMAS</p>
          <p>Environnement : Vue.js, SCSS, Node.js, Sequelize / Wordpress</p>
        </div>
        <div class="dot"></div>
        <div class="date">2022</div>
      </div>
      <div class="experience-container">
        <div class="experience">
          <p>Site vitrine conception site web | Learn-web-dev.com</p>
          <p>Environnement : HTML, CSS, JS, PHP<br/><br/>
            Conception d'un site web permettant de mettre en avant mes compétences et mes services de freelance.</p>
        </div>
        <div class="dot"></div>
        <div class="date">Septembre 2022</div>
      </div>
      <div class="experience-container">
        <div class="experience">
          <p>Sophrologie Bucchini</p>
          <p>Environnement : HTML, CSS, JS, PHP<br/><br/>
            Conception d'un site web permettant de mettre en avant une activité de sophrologue.</p>
        </div>
        <div class="dot"></div>
        <div class="date">Août 2022</div>
      </div>
      <div class="experience-container">
        <div class="experience">
          <p>Maquettage web</p>
          <p>Environnement : Figma<br/><br/>
            Conception de plusieurs maquettes conçues pour des sites web / applications web.</p>
        </div>
        <div class="dot"></div>
        <div class="date">2021</div>
      </div>
      <div class="experience-container">
        <div class="experience">
          <p>Formation OpenClassRooms</p>
          <p>Environnement : HTML, CSS, JS, PHP, MySQL<br/><br/>
            Formation diplômante Développeur web junior (RNCP3)</p>
        </div>
        <div class="dot"></div>
        <div class="date">2020</div>
      </div>
      <div class="experience-container">
        <div class="experience">
          <p>Formation Udemy</p>
          <p>Environnement : HTML, CSS, JS<br/><br/>
            Formation développeur web permettant de connaitre les bases du développement web.</p>
        </div>
        <div class="dot"></div>
        <div class="date">2019</div>
      </div>
      <div class="experience-container">
        <div class="experience">
          <p>Intérimaire</p>
          <p>Manutention, Mise en rayon, Cariste</p>
        </div>
        <div class="dot"></div>
        <div class="date">2019 - 2021</div>
      </div>
      <div class="experience-container">
        <div class="experience">
          <p>Maître Nageur Sauveteur</p>
          <p>Surveillance de bassin, cours de natation, cours d'aquafitness.</p>
        </div>
        <div class="dot"></div>
        <div class="date">2017 - 2019</div>
      </div>
    </section>
  </section>
</template>

<script>
import Header from '@/components/Header'

export default{
  name: 'aboutView',
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
section.about{
  padding-top: 0;
  p.my-description{
    width: 80vw;
    margin: 50px auto 100px auto;
  }
}
 .timeline{
  position: relative;
  width: 80vw;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 50px;
  padding: 50px 0;
  .main-line{
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 100%;
    width: 4px;
    background-color: var(--light-color);
    border-radius: 10px;
  }
  .experience-container{
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    width: 100%;
    .experience{
      width: 35%;
      padding: 25px;
      border-radius: 10px;
      background-color: var(--light-color);
      display: flex;
      flex-direction: column;
      gap: 15px;
      p{
        color: var(--dark-color);
        &:first-of-type{
          font-size: 1.3em;
          font-weight: 600;
        }
      }
    }
    .dot{
      width: 16px;
      height: 16px;
      background-color: var(--cta-color);
      border-radius: 50%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
    }
    .date{
      width: 45%;
    }
    &:nth-child(even){
        align-self: start;
      .experience{
        margin-left: 5%;
      }
    }
    &:nth-child(odd){
      flex-direction: row-reverse;
      
      .date{
        text-align: right;
      }
      .experience{
        margin-right: 5%;
    }
    }
  }
 }
</style>
