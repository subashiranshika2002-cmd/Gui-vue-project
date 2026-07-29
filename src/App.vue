<template>
  <div class="min-h-screen">
    <nav
      :class="
        darkMode
          ? 'bg-gradient-to-r from-gray-900 to-gray-800 px-4 py-3 text-white shadow'
          : 'bg-gradient-to-r from-blue-600 to-indigo-700 px-4 py-3 text-white shadow'
      "
    >
      <div class="mx-auto flex max-w-7xl flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
     <div class="flex items-center gap-3">
          <button class="flex flex-col gap-1">
            <span class="h-2 w-8 rounded-full bg-white"></span>
            <span class="h-2 w-8 rounded-full bg-white"></span>
            <span class="h-2 w-8 rounded-full bg-white"></span>
          </button>

          <h1 class="text-2xl font-semibold italic sm:text-3xl">
            <span :class="darkMode ? 'text-white' : 'text-black'">Volt</span>
            <span class="mx-1 text-xl text-orange-300 sm:text-2xl">⚡</span>
            <span class="text-pink-300">Edge</span>
          </h1>
        </div>

       <div class="w-full lg:max-w-sm">
          <input
            type="text"
            placeholder="Search products..."
            :class="
              darkMode
                ? 'w-full rounded-full border border-white/20 bg-gray-800 px-4 py-2 text-white placeholder-gray-300 outline-none'
                : 'w-full rounded-full border border-white/20 bg-white/15 px-4 py-2 text-white placeholder-white/70 outline-none backdrop-blur-sm'
            "
          />
        </div>

      <div class="flex flex-wrap items-center gap-4 text-sm font-semibold sm:gap-6 sm:text-base">
          <RouterLink to="/login" class="hover:text-yellow-200">Login</RouterLink>
          <RouterLink to="/about" class="hover:text-yellow-200">About Us</RouterLink>
          <RouterLink to="/" class="hover:text-yellow-200">Home</RouterLink>
          <RouterLink to="/products" class="hover:text-yellow-200">Products</RouterLink>

        <button
            @click="toggleDarkMode"
            class="rounded-lg bg-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:bg-white/30"
          >
            {{ darkMode ? 'Light Mode' : 'Dark Mode' }}
          </button>
        </div>
      </div>
    </nav>

    <main class="min-h-screen bg-gray-100 text-black dark:bg-gray-900 dark:text-white">
      <RouterView />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

const darkMode = ref(false)

onMounted(() => {
  const savedMode = localStorage.getItem('darkMode')
  darkMode.value = savedMode === 'true'
  applyDarkClass()
})

watch(darkMode, () => {
  applyDarkClass()
  localStorage.setItem('darkMode', darkMode.value)
})

function toggleDarkMode() {
  darkMode.value = !darkMode.value
}

function applyDarkClass() {
  if (darkMode.value) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
}
</script>