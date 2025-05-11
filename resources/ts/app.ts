import { createInertiaApp } from '@inertiajs/vue3';
import Aura from '@primeuix/themes/aura';
import PrimeVue from 'primevue/config';
import type { DefineComponent } from 'vue';
import { createApp, h } from 'vue';
import { createI18n } from 'vue-i18n';
import { ZiggyVue } from 'ziggy-js';
import messages from '../json/frontend.json';
import './bootstrap';
import BaseLayout from './Layouts/BaseLayout.vue';

createInertiaApp({
    resolve: (name) => {
        const pages = import.meta.glob<DefineComponent>('./Pages/**/*.vue', { eager: true });
        const page = pages[`./Pages/${name}.vue`];
        page.default.layout = name === 'Login' ? undefined : BaseLayout;
        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(
                createI18n({
                    locale: 'hu',
                    fallbackLocale: 'en',
                    messages: messages,
                }),
            )
            .use(plugin)
            .use(PrimeVue, {
                theme: {
                    preset: Aura,
                    options: {
                        darkModeSelector: '.my-app-dark',
                    },
                },
            })
            .use(ZiggyVue)
            .mount(el);
    },
});
