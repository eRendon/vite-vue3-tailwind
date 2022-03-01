import { reactive } from 'vue'

const storageTheme = reactive({
    theme: ''
})

const setTheme = (theme: string): void => {
    storageTheme.theme = theme
}

export { storageTheme, setTheme }