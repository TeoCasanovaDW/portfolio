<template>
  <section class="portfolio">
    <h1>MES PROJETS</h1>
    <div class="projects-container">
      <a v-for="(project, index) in this.$store.state.allProjects" :key="index" :href="'/project/'+project.project_id">
        <img :src="require(`@/assets/${project.project_thumbnail_path}`)" alt="miniature projet">
      </a>
    </div>
  </section>
</template>

<script>
export default{
  name: 'portfolioView',
  mounted() {
    this.$store.commit('getAllProjects');
  },
}
</script>

<style lang="scss" scoped>
  h1{
    margin-bottom: 75px;
  }

  .projects-container{
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 5vw;
    width: 80vw;
    margin: 0 auto;
    a{
      width: 45%;
      img{
        max-width: 100%;
      }
    }
  }
</style>