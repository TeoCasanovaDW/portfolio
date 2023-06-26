<template>
  <section class="projects">
    <h1>{{ actualProject.project_title }}</h1>
    <img :src="require(`@/assets/${actualProject.project_thumbnail_path}`)" alt="miniature projet">

    <div class="labels">
      <div class="timing">
        <div :class="`label ${actualProject.project_timing}`">{{ actualProject.project_timing }}</div>
      </div>
      <div class="technos">
        <div v-for="(label, index) in actualProject.project_labels" :key="index"  :class="`label ${label}`">{{label}}</div>
      </div>
      <div class="responsive">
        <div v-if="actualProject.project_responsive" class="label">Responsive</div>
      </div>
    </div>

    <div class="project-description"></div>
  </section>
</template>


<script>
import { mapState } from 'vuex';

export default {
  name: 'PortfolioView',
  methods: {
    fetchData(){
      console.log(parseInt(this.$route.params.id));
      let project_id = parseInt(this.$route.params.id);
      this.$store.commit('getProject', project_id);
    }
  },
  computed: {
    ...mapState(['actualProject'])
  },
  mounted(){
    document.querySelector('.project-description').innerHTML = this.actualProject.project_description;
  },
  created(){

    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData()
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    )

  }
}
</script>

<style lang="scss" scoped>
  .labels,
  img,
  .project-description{
    width: 80vw;
    font-size: 1.2em;
  }
  h1{
    text-transform: uppercase;
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