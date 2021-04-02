import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'FooterSmall',
  props: {
    absolute: {
      type: Boolean,
      default: false,
    },
  },
  setup() {
    const date = ref<number>(new Date().getFullYear());
    return {
      date,
    };
  },
});
