import { defineComponent, ref } from 'vue';
import { createPopper } from '@popperjs/core';
import type { StrictModifiers } from '@popperjs/core';

export default defineComponent({
  name: 'TableDropdown',
  setup() {
    const dropdownPopoverShow = ref<boolean>(false);
    const btnDropdownRef = ref<any>(null);
    const popoverDropdownRef = ref<any>(null);
    const toggleDropdown = (event: Event): void => {
      event.preventDefault();
      if (dropdownPopoverShow.value) {
        dropdownPopoverShow.value = false;
      } else {
        dropdownPopoverShow.value = true;
        createPopper<StrictModifiers>(btnDropdownRef.value, popoverDropdownRef.value, {
          placement: 'bottom-start',
        });
      }
    };
    return {
      dropdownPopoverShow,
      toggleDropdown,
      btnDropdownRef,
      popoverDropdownRef,
    };
  },
});
