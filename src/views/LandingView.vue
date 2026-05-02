<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Hero section -->
    <section class="bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-400 px-4 py-10 text-white sm:px-6 sm:py-12 md:py-14">
      <div class="mx-auto max-w-6xl text-center">
        <p class="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-blue-80 sm:text-sm">
          Smart Electronics Store
        </p>

        <h1 class="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
          Welcome to <span class="text-yellow-300">VoltEdge</span>
        </h1>

        <p class="mx-auto mt-4 max-w-3xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
          Discover electronics for every lifestyle. Browse phones, laptops, TVs,
          fridges, and washing machines in one smart place.
        </p>

        <RouterLink
          to="/products"
          class="mt-6 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 shadow-lg transition hover:bg-gray-200"
        >
          Explore Products
        </RouterLink>
      </div>
    </section>

    <!-- Featured categories -->
    <section class="px-4 py-8 sm:px-6 sm:py-10">
      <div class="mx-auto max-w-6xl">
        <h2 class="mb-6 text-center text-3xl font-extrabold text-gray-800 sm:text-4xl">
          Featured Categories
        </h2>

        <div class="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <div
            v-for="item in categoryItems"
            :key="item.name"
            class="rounded-2xl bg-white p-3 shadow-md transition hover:-translate-y-1 hover:shadow-lg sm:p-4"
          >
            <img
              :src="item.image"
              :alt="item.name"
              class="h-28 w-full rounded-xl bg-gray-100 object-contain sm:h-36 md:h-40"
            />

            <h3 class="mt-3 text-center text-base font-bold text-gray-800 sm:text-lg">
              {{ item.name }}
            </h3>

            <p class="mt-1 text-center text-xs text-gray-500 sm:text-sm">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'

import phoneImg from '../assets/home-items/phone.jpg'
import laptopImg from '../assets/home-items/laptop.jpg'
import tvImg from '../assets/home-items/tv.jpg'
import fridgeImg from '../assets/home-items/fridge.jpg'
import washingMachineImg from '../assets/home-items/washing-machine.jpg'

const categoryItems = [
  {
    name: 'Phones',
    image: phoneImg,
    description: 'Smart phones',
  },
  {
    name: 'Laptops',
    image: laptopImg,
    description: 'Study and work',
  },
  {
    name: 'TVs',
    image: tvImg,
    description: 'Home entertainment',
  },
  {
    name: 'Fridges',
    image: fridgeImg,
    description: 'Cooling solutions',
  },
  {
    name: 'Washing Machines',
    image: washingMachineImg,
    description: 'Easy washing',
  },
]
</script>