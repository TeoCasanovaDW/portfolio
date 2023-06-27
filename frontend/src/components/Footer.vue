<template>
  <footer>
    <!-- SITE MAP -->
    <div class="site-map">
      <h3>Liens utiles</h3>
      <a href="/" data-replace="Accueil"><span>Accueil</span></a>
      <a href="/projects" data-replace="Projets"><span>Projets</span></a>
      <a href="/about" data-replace="A propos"><span>A propos</span></a>
      <a href="/contact" data-replace="Contact"><span>Contact</span></a>
    </div>
    <!-- RÉSEAUX SOCIAUX -->
    <div class="social-medias">
      <h3>Me contacter</h3>
      <div class="line">
        <img src="../assets/social_media_1.png" alt="linkedIn">
        <span>Téo Casanova</span>
      </div>
      <div class="line">
        <img src="../assets/social_media_2.png" alt="e-mail">
        <span>teo.casanova13@gmail.com</span>
      </div>
      <div class="line">
        <img src="../assets/social_media_3.png" alt="téléphone">
        <span>06 28 22 48 80</span>
      </div>
    </div>
    <!-- INFORMATIONS LÉGALES -->
    <div class="legal-infos">
      <h3>Informations légales</h3>
      <a href="/legal-mentions" data-replace="Mentions légales"><span>Mentions légales</span></a>
      <a href="/cookies-gestion" data-replace="Gestion des cookies"><span>Gestion des cookies</span></a>
      <a href="/privacy-policy" data-replace="Politique de confidentialité"><span>Politique de confidentialité</span></a>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  footer{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    margin-top: 10vh;
    background-color: var(--light-color);
    h3{
      color: var(--dark-color);
      margin-bottom: 25px;
      font-size: 1.3em;
      font-weight: 800;
    }
    
    .site-map{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
      a{
        font-weight: 600;
        transition: .3s;
        overflow: hidden;
        &, span{
          position: relative;
          display: inline-block;
          transition: .4s;
          color: var(--dark-color);
        }
        span{
          padding: 3px 0;
          transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
        }
        &:hover span{
          transform: translateX(-200%);
        }
        &::before,
        &::after {
          content: '';
          position: absolute;
          width: 100%;
          left: 0;
          transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
        }
        &::after{
          content: attr(data-replace);
          top: 0;
          transform-origin: 100% 50%;
          transform: translateX(200%);
        }
        &::before{
          background-color: var(--dark-color);
          height: 2px;
          bottom: 0;
          transform-origin: 100% 50%;
          transform: scaleX(0);
        }
        &:hover{
          &::after{
            transform: translate(0, 0);
          }
          &::before{
            transform-origin: 0% 50%;
            transform: scaleX(1);
          }
        }
      }
    }
    .legal-infos,
    .social-medias{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 25px;
      span, a{
        color: var(--dark-color);
        font-weight: 600;
        transition: .3s;
      }
      .line{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
        cursor: pointer;
      }
    }
    .social-medias .line:hover span{
      transform: translateX(5px);
    }
    .legal-infos a{
      overflow: hidden;
      &, span{
        position: relative;
        display: inline-block;
        transition: .4s;
      }
      span{
        padding: 3px 0;
        transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
      }
      &:hover span{
        transform: translateX(-200%);
      }
      &::before,
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        left: 0;
        transition: transform .3s cubic-bezier(0.76, 0, 0.24, 1);
      }
      &::after{
        content: attr(data-replace);
        top: 0;
        transform-origin: 100% 50%;
        transform: translateX(200%);
      }
      &::before{
        background-color: var(--dark-color);
        height: 2px;
        bottom: 0;
        transform-origin: 100% 50%;
        transform: scaleX(0);
      }
      &:hover{
        &::after{
          transform: translate(0, 0);
        }
        &::before{
          transform-origin: 0% 50%;
          transform: scaleX(1);
        }
      }
    }
  }
</style>
