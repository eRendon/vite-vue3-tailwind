import {computed, defineComponent} from 'vue';
import { loadingStore } from "@/store";

export default defineComponent({
    name: 'SpinnerLoading',
    setup() {

        const storageLoading = computed( () => loadingStore.getters.getLoading());

        return {
            storageLoading,
        }
    }
})
