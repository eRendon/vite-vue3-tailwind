import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Footer',
  setup() {
    const date = ref<number>(new Date().getFullYear());
    return {
      date,
    };
  },
});
