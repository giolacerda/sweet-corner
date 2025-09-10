<script lang="ts">
import type { PropType } from 'vue';
import CarReceita from '../components/CarReceita.vue';
import type IReceita from '@/interface/IReceita';
import { obterReceitas } from '@/http';
import MostrarDetalhes from '../components/MostrarDetalhes.vue';


export default {
    components: { CarReceita, MostrarDetalhes },

    data() {
        return {
            receitas: [] as IReceita[],
            receitaAberta: -1
        }
    },
    async created() {
        this.receitas = await obterReceitas()
        console.log(this.receitas)

    },
    methods: {
        abrirDetalhes(indice: number) {
            // Se a receita clicada já estiver aberta, fecha; caso contrário, abre
            this.receitaAberta = this.receitaAberta === indice ? -1 : indice;
        }
    }


}
</script>

<template>
    <section class="mostrar-receitas">
        <h1 class="cabecalho titulo-receitas"> Receitas Disponíveis</h1>

        <ul class="receitas">
            <li v-for="(item, index) in receitas" :key="item.nome">
                <CarReceita :receita="item" @mostrar-receitas="() => abrirDetalhes(index)" />

                <MostrarDetalhes v-if="receitaAberta === index" :receita="item" />


            </li>


        </ul>
    </section>
</template>


<style scoped>
.receitas {
    display: flex;
    flex-wrap: wrap;
    /* quebra linha em telas menores */
    gap: 1.5rem;
    /* espaço entre os cards */
    justify-content: center;
    /* centraliza os cards */
    padding: 1rem 0;
}

.receitas li {
    list-style: none;
    flex: 0 1 18rem;
    /* cada li terá o mesmo tamanho do card */
    display: flex;
    justify-content: center;
}

.titulo-receitas {
    text-align: center;
    color: var(--bege-claro);
    margin-bottom: 2rem;
    padding: 1rem 2rem;
    background: linear-gradient(90deg, var(--marrom) 0%, var(--marrom-escuro) 100%);
    border-radius: 0.5rem;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
    letter-spacing: 1px;
}
</style>
