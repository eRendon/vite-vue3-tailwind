import { defineRule, configure  } from 'vee-validate';
import { localize, setLocale  } from '@vee-validate/i18n';
import es from '@vee-validate/i18n/dist/locale/es.json'
import { email, min, required, confirmed } from '@vee-validate/rules';

configure({
    generateMessage: localize({
        es
    })
})

setLocale('es')

defineRule('email', email)
defineRule('required', required)
defineRule('min', min)
defineRule('confirmed', confirmed)
