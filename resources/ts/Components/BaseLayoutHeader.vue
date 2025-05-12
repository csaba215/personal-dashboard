<template>
    <header class="flex h-13 justify-end bg-gray-100 pt-0.5 pr-4 shadow-lg">
        <Avatar label="P" size="large" shape="circle" @click.stop="dropdown = !dropdown" />
        <OnClickOutside @trigger="dropdown = false">
            <Menu :model="profileMenu" v-if="dropdown" class="fixed top-13 right-4 w-20 bg-gray-200">
                <template #start>
                    <span class="inline-flex items-center gap-1 px-2 py-2">
                        <span class="text-xl font-semibold"><span class="text-primary">Username</span></span>
                    </span>
                </template>
                <template #item="{ item }">
                    <Link class="flex items-center" :href="item.action">
                        <span :class="item.icon" />
                        <span>{{ item.label }}</span>
                    </Link>
                </template>
            </Menu>
        </OnClickOutside>
    </header>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import { OnClickOutside } from '@vueuse/components';
import Avatar from 'primevue/avatar';
import Menu from 'primevue/menu';
import { ref } from 'vue';

const dropdown = ref(false);
const profileMenu = ref([
    {
        separator: true,
    },
    {
        label: 'Kijelentkezés',
        action: route('auth.logout'),
    },
]);
</script>
