<template>
    <header>
      <img src="../assets/pp.png" alt="photo de Téo Casanova">
      <div class="header-text">
        <span>Développeur web</span>
        <span>25 ans</span>
        <span>Vue.js / Node.js</span>
      </div>
    </header>
</template>

<script>
export default {
    name: 'Header'
}

</script>

<style lang="scss" scoped>

header{
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    gap: 4vw;
    padding-top: 50px;
    .header-text{
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 15px;
      h1, span{
        font-size: 1.3em;
        font-weight: 500;
      }
    }
  }
</style>