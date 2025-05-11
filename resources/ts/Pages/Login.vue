<template>
    <div class="flex min-h-screen flex-col justify-center bg-gray-100 sm:py-12">
        <div class="xs:p-0 mx-auto p-10 md:w-full md:max-w-md">
            <div class="w-full divide-y divide-gray-200 rounded-lg bg-white shadow">
                <form @submit.prevent="submit">
                    <div class="flex flex-col gap-4 px-5 py-7">
                        <IftaLabel>
                            <InputText id="email" class="w-full" v-model="form.email" />
                            <label for="email">E-mail</label>
                        </IftaLabel>
                        <IftaLabel>
                            <Password inputId="password" variant="filled" toggleMask v-model="form.password" />
                            <label for="password">Password</label>
                        </IftaLabel>
                        <Button label="Login" class="mt-2 w-full" type="submit" />
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { router } from '@inertiajs/vue3';
import Button from 'primevue/button';
import IftaLabel from 'primevue/iftalabel';
import InputText from 'primevue/inputtext';
import Password from 'primevue/password';
import { reactive } from 'vue';

const form = reactive({
    email: null,
    password: null,
});
function submit() {
    router.post(route('auth.authenticate'), form);
}
console.log(route('auth.authenticate'));
</script>
