import CardLineChart from '@/components/Cards/CardLineChart/CardLineChart.vue';
import CardBarChart from '@/components/Cards/CardBarChart/CardBarChart.vue';
import CardPageVisits from '@/components/Cards/CardPageVisits/CardPageVisits.vue';
import CardSocialTraffic from '@/components/Cards/CardSocialTraffic/CardSocialTraffic.vue';
import { loadingStore } from '../../../store';

export default {
  name: 'DashBoard',
  components: {
    CardLineChart,
    CardBarChart,
    CardPageVisits,
    CardSocialTraffic,
  },
  mounted() {
    setTimeout(() => {
      loadingStore.actions.finishLoading();
    }, 3000)
  }
};
