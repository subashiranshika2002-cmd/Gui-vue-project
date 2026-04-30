<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Hero -->
    <div class="bg-white px-6 py-10 text-center shadow">
  <h1 class="text-4xl font-bold text-gray-800">
    Electronics Store
  </h1>

  <p class="mt-2 text-gray-600">
    Explore TVs, Phones, Laptops and more
  </p>

  <RouterLink
    to="/products"
    class="mt-4 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
  >
    View Products
  </RouterLink>
</div>

    <!-- About Section -->
    <section id="about" class="bg-white px-6 py-16">
      <div class="mx-auto max-w-5xl text-center">
        <h2 class="text-3xl font-bold text-gray-800">About Our Store</h2>
        <p class="mt-4 text-lg leading-8 text-gray-600">
          Our store helps customers explore products in a clean and modern way.
          You can search, filter by category, and quickly move to product detail pages.
          This application is designed to give a simple and user-friendly shopping experience.
        </p>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>