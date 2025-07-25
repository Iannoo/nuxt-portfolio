<template>
  <form @submit.prevent="onSubmit" class="space-y-4 max-w-lg mx-auto bg-blueprint/80 p-6 rounded-lg shadow">
    <div>
      <label class="block text-sm font-medium mb-1">Name</label>
      <input v-model="form.name" type="text" required class="w-full px-3 py-2 rounded bg-blueprint border border-electric text-white focus:outline-none focus:ring-2 focus:ring-electric" />
    </div>
    <div>
      <label class="block text-sm font-medium mb-1">Email</label>
      <input v-model="form.email" type="email" required class="w-full px-3 py-2 rounded bg-blueprint border border-electric text-white focus:outline-none focus:ring-2 focus:ring-electric" />
    </div>
    <div>
      <label class="block text-sm font-medium mb-1">Message</label>
      <textarea v-model="form.message" required rows="4" class="w-full px-3 py-2 rounded bg-blueprint border border-electric text-white focus:outline-none focus:ring-2 focus:ring-electric"></textarea>
    </div>
    <button type="submit" class="w-full py-2 px-4 rounded bg-electric text-blueprint font-bold hover:bg-white hover:text-electric transition">Send</button>
  </form>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const emit = defineEmits(['submit'])
const form = ref({ name: '', email: '', message: '' })
function onSubmit() {
  emit('submit', { ...form.value })
  form.value = { name: '', email: '', message: '' }
}
</script> 