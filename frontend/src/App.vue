<template>
  <div class="main-container">
    <nav>
      <ul>
        <li>
          <router-link to="/">ACCUEIL</router-link>
        </li>
        <li>
          <router-link to="/portfolio">PROJETS</router-link>
        </li>
        <li>
          <router-link to="/about">A PROPOS</router-link>
        </li>
        <li>
          <router-link to="/contact">CONTACT</router-link>
        </li>
      </ul>
    </nav>
    <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "@/components/Footer";

export default{
  name: "App",
  components: {
    Footer
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
  text-decoration: none;
  outline: none;
  color: var(--light-color);
  font-family: 'Inter', sans-serif;
}

/* width */
::-webkit-scrollbar {
  width: 1.3vw;
}

/* Track */
::-webkit-scrollbar-track {
  background-color: var(--light-color);
}

/* Handle */
::-webkit-scrollbar-thumb {
  background-color: var(--dark-color);
  border-radius: 4px;
  border: 2px solid var(--light-color);
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background-color: var(--cta-color);
}

.cta{
  color: #111617;
  font-size: 1.1em;
  font-weight: 600;
  padding: 8px 40px;
  border-radius: 50px;
  background-image: linear-gradient(.05turn,var(--dark-color) 50%, var(--cta-color) 50%);
  background-size: 300% 300%;
  background-position: right;
  border: 2px solid var(--cta-color);
  cursor: pointer;
  transition: .4s;
  &:hover{
    background-position: left;
    color: var(--cta-color);
  }
}

:root{
  --dark-color: #234658;
  --light-color: #EBFBFF;
  --cta-color: #F97068;
}

h1{
  font-weight: 900;
  font-size: 2em;
  letter-spacing: 0.1em;
  padding: 25px 0;
  margin: 0 auto;
  width: fit-content;
}

section{
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 50px;
  padding-top: 4vh;
}

nav{
  width: 100vw;
  height: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: var(--dark-color);
  z-index: 99;
  ul{
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 3vw;
    li {
      a{
        width: 100%;
        height: 100%;
        opacity: .7;
        font-weight: 600;
        font-size: 1.3em;
        position: relative;
        transition: .4s;
        &::after{
          content: "";
          display: block;
          position: absolute;
          bottom: -5px;
          width: 0%;
          left: 0;
          height: 2px;
          background-color: var(--light-color);
          transition: .4s;
        }
        &.router-link-active,
        &:hover{
          opacity: 1;
          &::after{
            width: 100%;
          }
        }
      }
    }
  }
}

#app{
  padding-top: 130px;
  background-color: var(--dark-color);
  min-height: 100vh;
}

</style>
