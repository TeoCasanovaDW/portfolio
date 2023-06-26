<template>
  <section class="projects">
    <h1>RESTAURANT ADMINISTRABLE</h1>
    <img src="../assets/restaurant_administrable.png" alt="">
    <div class="labels">
      <div class="timing">
        <div class="label">En cours</div>
      </div>
      <div class="technos">
        <div class="label">Vue.js</div>
        <div class="label">Scss</div>
        <div class="label">Axios</div>
        <div class="label">Node.js</div>
        <div class="label">Sequelize</div>
      </div>
      <div class="responsive">
        <div class="label">Responsive</div>
      </div>
    </div>

    <div class="project-description">
      Ce projet à pour but de présenter des restaurants français en mettant en avant leur concept, leur carte, des photos, un espace de réservation, et une partie contact présentant l’emplacement du restaurant ainsi que ses coordonnées et différents réseaux sociaux.<br/><br/>
      
      La partie réservation permet au client d'envoyer une demande de réservation qui sera pré confirmée automatiquement en fonction des places disponibles dans le restaurant ce soir la. Le restaurateur recevra donc la réservation sur la partie administration du site.<br/><br/>
      
      La partie administration à plusieurs fonctionnalités :<br/>
      - Changer les textes du site,<br/>
      - Changer les couleurs du site,<br/>
      - Changer la devise du site,<br/>
      - Ajouter et retirer des plats de la carte,<br/>
      - Recevoir les réservations planifiées<br/><br/>

      Le site est responsive car une importante partie des internautes cherchant un restaurant son sur leurs smartphones.<br/><br/>

      Il est fluide car il est basé sur des technologies récentes, Vue.js et Node.js.
    </div>
  </section>
</template>


<script>

export default {
  name: 'PortfolioView'
}
</script>

<style lang="scss" scoped>
  .labels,
  img,
  .project-description{
    width: 80vw;
  }

  .labels{
    display: flex;
    align-items: center;
    justify-content: space-between;
    .technos{
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .5vw;
    }
    .label{
      padding: 8px 30px;
      border-radius: 50px;
      background-color: var(--cta-color);
    }
  }
</style>