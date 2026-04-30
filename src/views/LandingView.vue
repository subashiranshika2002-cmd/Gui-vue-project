<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Hero section -->
    <section class="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-600 px-6 py-16 text-white">
      <div class="mx-auto max-w-6xl text-center">
        <p class="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-100">
          Smart Electronics Store
        </p>

        <h1 class="text-5xl font-extrabold md:text-6xl">
          Welcome to <span class="text-yellow-300">VoltEdge</span>
        </h1>

        <p class="mx-auto mt-5 max-w-3xl text-lg leading-8 text-blue-100">
          Discover electronics for every lifestyle. Browse phones, laptops, TVs,
          fridges, and washing machines in one smart place.
        </p>

        <RouterLink
          to="/products"
          class="mt-8 inline-block rounded-xl bg-white px-6 py-3 font-semibold text-blue-700 shadow-lg transition hover:bg-gray-200"
        >
          Explore Products
        </RouterLink>
      </div>
    </section>

    <!-- 5 category cards -->
    <section class="px-6 py-14">
      <div class="mx-auto max-w-7xl">
        <h2 class="mb-8 text-center text-3xl font-extrabold text-gray-800">
          Featured Categories
        </h2>

        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
          <div
            v-for="item in categoryItems"
            :key="item.name"
            class="rounded-2xl bg-white p-4 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
          >
            <img
              :src="item.image"
              :alt="item.name"
              class="h-44 w-full rounded-xl bg-gray-100 object-cover"
            />

            <h3 class="mt-4 text-center text-xl font-bold text-gray-800">
              {{ item.name }}
            </h3>

            <p class="mt-2 text-center text-sm text-gray-500">
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
    description: 'Smart phones for communication and daily life.',
  },
  {
    name: 'Laptops',
    image: laptopImg,
    description: 'Laptops for study, work, and creativity.',
  },
  {
    name: 'TVs',
    image: tvImg,
    description: 'Modern televisions for family entertainment.',
  },
  {
    name: 'Fridges',
    image: fridgeImg,
    description: 'Reliable refrigerators for every home.',
  },
  {
    name: 'Washing Machines',
    image: washingMachineImg,
    description: 'Efficient washing for modern living.',
  },
]
</script>