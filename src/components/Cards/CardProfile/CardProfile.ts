import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CardProfile',
  setup() {
    const team2 = ref('@/assets/img/team-2-800x800.jpg');
    return {
      team2,
    };
  },
});
