import { defineComponent, ref } from 'vue'
export default defineComponent({
    name: 'SelectThemeDropdown',
    setup() {

        const darkMode = ref<boolean>(false)

        const changeStateTheme = (): void => {
            if (darkMode.value ) {
                document.documentElement.classList.add('dark');
                return;
            }
            document.documentElement.classList.remove('dark');
        }
        return {
            changeStateTheme,
            darkMode
        };
    },
})
