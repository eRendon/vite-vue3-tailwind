import { defineComponent, ref } from 'vue';

export default defineComponent({
  setup() {
    const isActiveMenuUser = ref(false);
    const changeStatusMenu = () => isActiveMenuUser.value = !isActiveMenuUser.value;
    return {
      isActiveMenuUser,
      changeStatusMenu,
    };
  },
});

// export default class HeaderNavbar extends Vue {
// }
