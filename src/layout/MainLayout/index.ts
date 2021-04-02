import { defineComponent, computed } from 'vue';
import MainSidebar from '@/components/layout/MainSidebar/MainSidebar.vue';
import HeaderNavbar from '@/components/layout/HeaderNavbar/HeaderNavbar.vue';
import { loadingStore } from '@/store';

export default defineComponent({
  components: {
    'main-sidebar': MainSidebar,
    'header-navbar': HeaderNavbar,
  },
  setup() {
    const loading = computed(() => loadingStore.getters.getLoading.value);
    console.log('loading', loading.value);
    return {
      loading,
    };
  },
});
