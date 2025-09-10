 <template>
    <div class="banner"></div>
 </template>

<style scoped>
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 300px; /* ajuste conforme a necessidade */
  background: url('/src/assets/imagens-main/fundo-banner.png') no-repeat center;
  background-size: cover;
  padding: 1rem 2rem;
  color: var(--bege);
}

.banner .logo {
  height: 100px; /* ajuste conforme sua logotipo */
}

.banner .conteudo {
  position: absolute; /* permite centralizar textos ou botões sobre a imagem */
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.banner h1 {
  font-family: var(--cabecalhos);
  font-size: 2.5em;
  margin-bottom: 0.5rem;
}

.banner p {
  font-size: 1.2em;
  line-height: 1.4;
}

.banner button {
  margin-top: 1rem;
  padding: 0.6rem 1.5rem;
  background-color: var(--marrom);
  color: var(--bege);
  border-radius: 8px;
  cursor: pointer;
  font-weight: 600;
  border: none;
}

.banner button:hover {
  background-color: var(--marrom-escuro);
}
</style>
