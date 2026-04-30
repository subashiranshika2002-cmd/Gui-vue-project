<template>
  <div class="min-h-screen bg-gray-100">
    <section class="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16 px-6">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">

        <!-- Left text -->
        <div>
          <h1 class="text-5xl font-extrabold">
            Welcome to <span class="text-yellow-300">VoltEdge</span>
          </h1>

          <p class="mt-4 text-lg text-blue-100">
            Smart electronics shopping made simple.
          </p>

          <RouterLink
            to="/products"
            class="mt-6 inline-block bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200"
          >
            Explore Products
          </RouterLink>
        </div>

        <!-- Right image -->
        <div class="flex justify-center">
          <img
            src="https://dummyjson.com/image/500x300/111827/ffffff?text=Electronics"
            class="rounded-2xl shadow-xl"
          />
        </div>

      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>