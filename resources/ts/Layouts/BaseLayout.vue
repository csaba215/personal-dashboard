<template>
    <main class="flex">
        <header>
            <div class="flex min-h-screen justify-center">
                <Menu :model="items" class="min-h-screen w-full md:w-60">
                    <template #start>
                        <span class="inline-flex items-center gap-1 px-2 py-2">
                            <span class="text-xl font-semibold"><span class="text-primary">APP</span></span>
                        </span>
                    </template>
                    <template #item="{ item }">
                        <Link class="flex items-center" :href="item.action">
                            <span :class="item.icon" />
                            <span>{{ item.label }}</span>
                        </Link>
                    </template>
                </Menu>
            </div>
        </header>
        <div class="w-full">
            <header class="h-13 bg-green-500"></header>
            <article class="m-5 bg-white shadow sm:rounded-lg">
                <div class="flex min-h-64 w-full flex-col px-4 py-5 sm:p-6">
                    <h3 class="text-lg leading-6 font-medium text-gray-900">Title</h3>
                    <div class="mt-2 text-sm text-gray-500">
                        <slot />
                    </div>
                </div>
            </article>
        </div>
    </main>
</template>

<script setup lang="ts">
import { Link } from '@inertiajs/vue3';
import Menu from 'primevue/menu';
import { ref } from 'vue';

const items = ref([
    {
        separator: true,
    },
    {
        label: 'Token',
        items: [
            {
                label: 'New',
                icon: 'pi pi-plus',
                action: '/token/create',
            },
            {
                label: 'Tokenekek kezelése',
                icon: 'pi pi-search',
                action: '/token',
            },
        ],
    },
]);
</script>
