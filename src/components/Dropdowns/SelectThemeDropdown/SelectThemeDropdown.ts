import {defineComponent, ref} from 'vue';
import {createPopper, StrictModifiers} from "@popperjs/core";

export default defineComponent({
    name: 'SelectThemeDropdown',
    setup() {
        const darkMode = ref<boolean>(false)


        const changeStateTheme = (): void => {
            if (darkMode.value ) {
                document.documentElement.classList.add('mode-dark');
                return;
            }
            document.documentElement.classList.remove('mode-dark');
        }
        return {
            changeStateTheme,
            darkMode
        };
    },
})
