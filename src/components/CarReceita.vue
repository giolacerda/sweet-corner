<script lang="ts">
import type IReceita from '@/interface/IReceita';
import type { PropType } from 'vue';

export default {
  props: {
    receita: { type: Object as PropType<IReceita>, required: true }
  },
  emits: ['mostrar-receitas']
}
</script>
<template>
  <article class="receita">
    <header class="receita__cabecalho">
      <img :src="`/receitas/${receita.imagem}`" :alt="`Foto de ${receita.nome}`" class="receita__imagem"
        @click="$emit('mostrar-receitas', receita)" />
    </header>
    <section class="receita__corpo">
      <h2 class="paragrafo receita__nome">
        {{ receita.nome }}
      </h2>
    </section>
  </article>
</template>

<style scoped>
.receita {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 18rem;
  /* tamanho fixo para todos os cards */
  max-width: 100%;
  /* garante responsividade */
  border-radius: 1rem;
  background: var(--bege-claro, #FFF6ED);
  box-shadow: 4px 4px 12px rgba(68, 68, 68, 0.08);
  overflow: hidden;
}

.receita__corpo {
  padding: 1rem 1rem;
  text-align: center;
}

.receita__imagem {
  width: 100%;
  /* imagem ocupa a largura total do card */
  height: 12rem;
  /* altura fixa para manter padrão */
  object-fit: cover;
  /* mantém proporção e corta se necessário */
  display: block;
}


.receita__nome {
  font-weight: 700;
  color: var(--cinza, #444);
  margin-top: 0.5rem;
}
</style>
