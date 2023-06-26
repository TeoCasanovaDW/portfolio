<template>
  <section class="contact">
    <h1>ME CONTACTER</h1>
    <p>Si vous avez, une question, un message, un projet / une offre à me partager, n'hésitez pas à le faire via mon formulaire de contact ci dessous. Pour l'instant, j'ai le temps de lire tout les messages que je reçois, alors, c'est le bon moment pour me contacter.</p>
    <form action="#" class="contact-form">
        <div class="input-container">
          <label for="lastname">Nom</label>
          <input type="text" name="lastname" id="lastname">
        </div>
        <div class="input-container">
          <label for="firstname">Prénom</label>
          <input type="text" name="firstname" id="firstname">
        </div>
        <div class="input-container">
          <label for="message">Message</label>
          <textarea type="text" name="message" id="message"></textarea>
        </div>
        <button type="submit" class="cta">Envoyer</button>
      </form>
  </section>
</template>

<script>
export default{
  name: 'ContactView'
}
</script>

<style lang="scss" scoped>

  .contact{
    p{
      width: 80vw;
      margin: 0 auto;
    }
  }

  form{
    margin-top: 5vh;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10%;
    width: 70vw;
    flex-wrap: wrap;
    .input-container{
      width: 100%;
      display: flex;
      flex-direction: column;
      gap: 20px;
      margin-bottom: 3vh;
      &:first-of-type,
      &:nth-of-type(2){
        width: 45%;
      }
      label{
        font-size: 1.2em;
      }
      input{
        padding: 12px 20px;
        border-radius: 8px;
        color: var(--dark-color);
      }
      textarea{
        padding: 15px;
        height: 20vh;
        border-radius: 8px;
        color: var(--dark-color);
      }
    }
  }
</style>