import { reactive } from 'vue';
import { Item } from '@/server/models/Item';

const state = reactive({
  items: [] as Item[],
  bag: [] as Item[],
});

export default state;
