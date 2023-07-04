<template>
  <div class="main-container">
    <nav>
      <ul>
        <li>
          <router-link to="/" data-replace="ACCUEIL"><span>ACCUEIL</span></router-link>
        </li>
        <li>
          <router-link to="/portfolio" data-replace="PROJETS"><span>PROJETS</span></router-link>
        </li>
        <li>
          <router-link to="/about" data-replace="A PROPOS"><span>A PROPOS</span></router-link>
        </li>
        <li>
          <router-link to="/contact" data-replace="CONTACT"><span>CONTACT</span></router-link>
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

ol{
    display: flex;
    flex-direction: column;
    gap: 15px;
    width: 75vw;
    margin: 0 auto;
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
  word-spacing: 12px;
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
  box-shadow: 0px 0px 8px 4px var(--light-color);
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
        overflow: hidden;
        line-height: 1.2em;
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
          background-color: var(--light-color);
          height: 2px;
          bottom: 0;
          transform-origin: 100% 50%;
          transform: scaleX(0);
        }
        &:hover::after{
            transform: translate(0, 0);
        }
        &:hover::before{
            transform-origin: 0% 50%;
            transform: scaleX(1);
        }
        
        &.router-link-active,
        &:hover{
          opacity: 1;
          span{
            transform: translateX(-200%);
          }
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
  }
}

#app{
  padding-top: 130px;
  background-color: var(--dark-color);
  min-height: 100vh;
}

</style>
