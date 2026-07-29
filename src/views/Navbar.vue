<script setup>
import { useTheme } from '../composables/useTheme'

const { isDark, toggleTheme } = useTheme()
</script>

<template>
  <button
    @click="toggleTheme"
    class="rounded-lg bg-white/20 px-4 py-2 font-semibold text-white backdrop-blur-md"
  >
    {{ isDark ? 'Light Mode' : 'Dark Mode' }}
  </button>
</template>