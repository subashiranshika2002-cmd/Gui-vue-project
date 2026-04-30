<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Hero -->
    <div class="bg-white px-6 py-10 text-center shadow">
      <h1 class="text-4xl font-bold text-gray-800">
        Electronics Store
      </h1>

      <p class="mt-2 text-gray-600">
        Explore TVs, phones, laptops, fridges, and more
      </p>

      <RouterLink
        to="/products"
        class="mt-4 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
      >
        View Products
      </RouterLink>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>