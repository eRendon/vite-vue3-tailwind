import { defineComponent } from 'vue';

export default defineComponent({
  name: 'CardStats',
  props: {
    statSubtitle: {
      type: String,
      default: 'Traffic',
    },
    statTitle: {
      type: String,
      default: '350,897',
    },
    statArrow: {
      default: 'up',
      validator(value: string) {
        // The value must match one of these strings
        return ['up', 'down'].indexOf(value) !== -1;
      },
    },
    statPercent: {
      type: String,
      default: '3.48',
    },
    // can be any of the text color utilities
    // from tailwindcss
    statPercentColor: {
      type: String,
      default: 'text-emerald-500',
    },
    statDescripiron: {
      type: String,
      default: 'Since last month',
    },
    statIconName: {
      type: String,
      default: 'far fa-chart-bar',
    },
    // can be any of the background color utilities
    // from tailwindcss
    statIconColor: {
      type: String,
      default: 'bg-red-500',
    },
  },
});
