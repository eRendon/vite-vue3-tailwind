import { defineComponent, toRefs } from 'vue';
import { Item } from '@/server/models/Item';
import { products } from '@/store';

export default defineComponent({
  name: 'DetailItem',
  props: {
    showModal: Boolean,
    item: {
      type: Object,
      default: {} as Item,
    },
  },
  setup(props) {
    const { item } = toRefs(props);
    const addBag = () => {
      console.log(item.value);
      products.actions.addBag(item.value);
    };
    return {
      addBag,
    };
  },
});
