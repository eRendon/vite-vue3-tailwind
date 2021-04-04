import {defineComponent, ref} from 'vue';
import {createPopper, StrictModifiers} from "@popperjs/core";

export default defineComponent({
    name: 'SelectThemeDropdown',
    setup() {
        const dropdownPopoverShow = ref<boolean>(false);
        const btnDropdownRef = ref<any>(null);
        const popoverDropdownRef = ref<any>(null);
        const selectedTheme = ref('Light')

        const toggleDropdown = (event: Event): void => {
            event.preventDefault();
            if (dropdownPopoverShow.value) {
                dropdownPopoverShow.value = false;
            } else {
                dropdownPopoverShow.value = true;
                createPopper<StrictModifiers>(btnDropdownRef.value, popoverDropdownRef.value, {
                    placement: 'bottom',
                });
            }
        };

        const changeStateTheme = (theme: 'light' | 'dark' ): void => {
            selectedTheme.value = theme;
            dropdownPopoverShow.value = false;
            if (theme === 'dark') {
                document.documentElement.classList.add('mode-dark');
                return;
            }
            document.documentElement.classList.remove('mode-dark');
        }
        return {
            dropdownPopoverShow,
            toggleDropdown,
            btnDropdownRef,
            popoverDropdownRef,
            changeStateTheme,
            selectedTheme
        };
    },
})
