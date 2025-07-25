<script setup lang="ts">
let content = {}
let error = null
try {
  const { data, error: fetchError } = await useFetch('/json/contactContent.json')
  if (fetchError.value) {
    error = fetchError.value
    console.error('Failed to load contactContent.json:', error)
  }
  content = data.value ?? {}
} catch (err) {
  error = err
  console.error('Failed to load contactContent.json:', err)
}
const hero = content.hero ?? {
  title: 'Get In Touch',
  description: "Let's build something meaningful.",
  cta: 'Send a Message'
}
function handleSubmit(form) {
  alert('Thank you for reaching out, ' + form.name + '!')
}
</script>
<template>
  <BaseSection :title="hero.title" center>
    <div class="space-y-6">
      <p class="text-xl text-electric font-semibold mb-2">{{ hero.description }}</p>
      <div class="flex flex-col items-center gap-2 mb-4">
        <div class="text-white/90 mb-2">Email: <a :href="`mailto:${content.email}`" class="text-electric underline">{{ content.email }}</a></div>
        <div class="text-white/90 mb-2">Location: {{ content.location }}</div>
        <div class="flex gap-4">
          <a v-if="content?.socials?.github" :href="content.socials.github" target="_blank" class="text-electric underline">GitHub</a>
          <a v-if="content?.socials?.linkedin" :href="content.socials.linkedin" target="_blank" class="text-electric underline">LinkedIn</a>
        </div>
      </div>
      <BaseContactForm @submit="handleSubmit" />
      <div class="mt-4">
        <NuxtLink to="/projects" class="inline-block px-6 py-3 rounded bg-electric text-blueprint font-bold text-lg shadow hover:bg-white hover:text-electric transition">{{ hero.cta }}</NuxtLink>
      </div>
    </div>
  </BaseSection>
</template> 