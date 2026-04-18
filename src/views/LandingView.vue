<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Hero -->
    <section class="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-16 text-white">
      <div class="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
        <div>
          <h1 class="text-5xl font-extrabold leading-tight">
            Welcome to <span class="text-yellow-300">My Product Store</span>
          </h1>

          <p class="mt-4 text-lg text-blue-100">
            Discover quality products with easy browsing, quick details, and smart shopping.
          </p>

          <p class="mt-6 text-base font-medium">
            📞 Contact us: +94 71 234 5678
          </p>

          <div class="mt-8 flex gap-4">
            <RouterLink
              to="/products"
              class="rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-gray-200"
            >
              Go to Products
            </RouterLink>

            <a
              href="#about"
              class="rounded-lg border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-blue-700"
            >
              About Us
            </a>
          </div>
        </div>

        <div class="flex justify-center">
          <img
            src="https://dummyjson.com/image/500x320/4f46e5/ffffff?text=Shopping+Store"
            alt="Shopping banner"
            class="w-full max-w-lg rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </section>

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