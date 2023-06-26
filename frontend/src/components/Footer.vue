<template>
  <footer>
    <!-- SITE MAP -->
    <div class="site-map">
      <a href="/">Accueil</a>
      <a href="/projects">Projets</a>
      <a href="/about">A propos</a>
      <a href="/contact">Contact</a>
    </div>
    <!-- RÉSEAUX SOCIAUX -->
    <div class="social-medias">
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
      <a href="/legal-mentions">Mentions légales</a>
      <a href="/cookies-gestion">Gestion des cookies</a>
      <a href="/privacy-policy">Politique de confidentialité</a>
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
    .site-map{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 20px;
    }
    .legal-infos,
    .social-medias{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 25px;
      .line{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
      }
    }
  }
</style>
