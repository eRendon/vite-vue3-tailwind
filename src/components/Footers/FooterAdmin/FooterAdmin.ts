import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'FooterAdmin',
  setup() {
    const date = ref<number>(new Date().getFullYear());
    return {
      date,
    };
  },
});
