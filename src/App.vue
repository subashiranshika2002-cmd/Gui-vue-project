<template>
  <div>
    <nav class="bg-gradient-to-r from-blue-600 to-indigo-700 px-4 py-3 text-white shadow">
      <div class="mx-auto flex max-w-7xl flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
        <!-- Top row -->
        <div class="flex items-center justify-between gap-4">
          <div class="flex items-center gap-3">
            <button class="flex flex-col gap-1">
              <span class="h-2 w-8 rounded-full bg-white"></span>
              <span class="h-2 w-8 rounded-full bg-white"></span>
              <span class="h-2 w-8 rounded-full bg-white"></span>
            </button>

            <h1 class="text-2xl font-semibold italic sm:text-3xl">
              <span class="text-black">Volt</span>
              <span class="mx-1 text-xl text-orange-300 sm:text-2xl">⚡</span>
              <span class="text-pink-300">Edge</span>
            </h1>
          </div>
        </div>

        <!-- Search -->
        <div class="w-full lg:max-w-sm">
          <input
            type="text"
            placeholder="Search products..."
            class="w-full rounded-full border border-white/20 bg-white/15 px-4 py-2 text-white placeholder-white/70 outline-none backdrop-blur-sm"
          />
        </div>

        <!-- Links -->
        <div class="flex flex-wrap items-center gap-4 text-sm font-semibold sm:gap-6 sm:text-base">
          <RouterLink to="/login" class="hover:text-yellow-200">Login</RouterLink>
          <RouterLink to="/about" class="hover:text-yellow-200">About Us</RouterLink>
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