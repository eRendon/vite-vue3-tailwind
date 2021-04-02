import { db } from '@/server/firebase/firebase';
import { Item } from '@/server/models/Item';
import fromJsonMap from '@/server/utils/fromJsonMap';
import state from './state';
import mutations from './mutations';

export default {
  getProducts(): void {
    const items: Item[] = [];
    db.collection('products').get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
          console.log(doc.data());
          const item: Item = doc.data();
          item.id = doc.id;
          items.push(item);
        });
      });
    mutations.setItems(items);
  },
  searchItem(id: string): Promise<Item | undefined> {
    let item: Item | undefined = {};
    return db.collection('products').doc(id).get()
      .then((querySnapshot) => item = fromJsonMap(querySnapshot.data(), querySnapshot.id));
  },
  addBag(item: Item): void {
    const items = state.bag;
    const existItem = items.find((itemBag) => {
      if (item.id === itemBag.id) {
        const itemBagTep = itemBag;
        itemBagTep.quantity! += 1;
        return itemBagTep;
      }
      return null;
    });
    if (!existItem) {
      items.push(item);
    }
    mutations.setBag(items);
  },
};
