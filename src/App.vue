<template>
  <div>
    <nav class="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-4 text-white shadow">
      <div class="mx-auto flex max-w-7xl items-center justify-between">
        <h1 class="text-2xl font-extrabold">Electronics Store</h1>

        <div class="flex gap-6 text-sm font-medium">
          <RouterLink to="/" class="hover:text-yellow-200">Home</RouterLink>
          <RouterLink to="/products" class="hover:text-yellow-200">Products</RouterLink>
        </div>
      </div>
    </nav>

    <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>