import { defineComponent } from 'vue';
import TableDropdown from '@/components/Dropdowns/TableDropdown/TableDropdown.vue';

export default defineComponent({
  name: 'CardTable',
  props: {
    color: {
      default: 'light',
      validator(value: string) {
        // The value must match one of these strings
        return ['light', 'dark'].indexOf(value) !== -1;
      },
    },
  },
  components: {
    TableDropdown,
  },
  setup() {
    const bootstrap = '@/assets/img/bootstrap.jpg';
    const angular = '@/assets/img/angular.jpg';
    const sketch = '@/assets/img/sketch.jpg';
    const react = '@/assets/img/react.jpg';
    const vue = '@/assets/img/vue.jpg';
    const team1 = '@/assets/img/team-1-800x800.jpg';
    const team2 = '@/assets/img/team-2-800x800.jpg';
    const team3 = '@/assets/img/team-3-800x800.jpg';
    const team4 = '@/assets/img/team-4-800x800.jpg';

    return {
      bootstrap,
      angular,
      sketch,
      react,
      vue,
      team1,
      team2,
      team3,
      team4,
    };
  },
});
