<script lang="ts">
import { obterReceitas } from '@/http';
import type IReceita from '@/interface/IReceita';

export default {
    data() {
        return {
            receitas: [] as IReceita[],

        }
    },
    async created() {
        this.receitas = await obterReceitas();
    },

}
</script>
