import {computed, defineComponent} from 'vue';
import { loadingStore } from "@/store";

export default defineComponent({
    name: 'SpinnerLoading',
    setup() {

        const isLoading = computed<boolean>( () => loadingStore.getters.getLoading());

        return {
            isLoading,
        }
    }
})
