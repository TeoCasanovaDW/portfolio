<template>
  <section class="portfolio">
    <h1>MES PROJETS</h1>
    <div class="projects-container">
      <a v-for="(project, index) in this.$store.state.allProjects" :href="'/project/'+project.project_id" :key="index">
        <span>{{ project.project_title }}</span>
        <img :src="require(`@/assets/${project.project_thumbnail_path}`)" alt="miniature projet">
      </a>
    </div>
  </section>
</template>

<script>
export default{
  name: 'portfolioView',
  methods: {
    // getProject(project_id){
    //   this.$store.commit('getProject', project_id);
    //   this.$router.push("/project/" + project_id);
    // }
  },
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
        max-width: 100%;
        border-radius: 15px;
      }
    }
  }
</style>