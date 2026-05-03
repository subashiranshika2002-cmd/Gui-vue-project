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

    <!-- Featured + Offer section -->
    <section class="px-4 py-8 sm:px-6 sm:py-10">
      <div class="mx-auto max-w-6xl grid grid-cols-1 gap-8 lg:grid-cols-2">
        <!-- Left side: Featured categories -->
        <div>
          <h2 class="mb-6 text-center text-3xl font-extrabold text-gray-800 sm:text-4xl lg:text-left">
            Featured Categories
          </h2>

          <div class="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2">
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

        <!-- Right side: Special Offer -->
        <div class="rounded-3xl bg-gradient-to-br from-yellow-50 via-pink-50 to-purple-50 p-6 shadow-lg">
          <p class="inline-block rounded-full bg-red-100 px-4 py-1 text-sm font-bold text-red-600">
            SALE 🎧
          </p>

          <h2 class="mt-4 text-3xl font-extrabold text-gray-800 sm:text-4xl">
            Best Deal for You
          </h2>

          <p class="mt-3 text-base leading-7 text-gray-600 sm:text-lg">
            Grab the <span class="font-bold text-purple-700">Headset</span> and
            <span class="font-bold text-purple-700">iPhone 13 Pro</span>
            with an exciting
            <span class="font-bold text-red-500">25% OFF</span>.
          </p>

          <div class="mt-4 flex flex-wrap items-center gap-3 text-lg font-bold sm:text-xl">
            <span class="text-gray-400 line-through">$1200</span>
            <span class="text-purple-700">$900</span>
          </div>

          <div class="mt-6 grid grid-cols-2 gap-4">
            <div class="rounded-2xl bg-white p-4 shadow-md">
              <img
                :src="headsetOffer"
                alt="Headset"
                class="h-28 w-full object-contain sm:h-36"
              />
              <p class="mt-2 text-center font-bold text-gray-800">Headset</p>
            </div>

            <div class="rounded-2xl bg-white p-4 shadow-md">
              <img
                :src="iphoneOffer"
                alt="iPhone 13 Pro"
                class="h-28 w-full object-contain sm:h-36"
              />
              <p class="mt-2 text-center font-bold text-gray-800">iPhone 13 Pro</p>
            </div>
          </div>

          <div class="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
           <div class="star-badge">
  <span>25%<br />OFF</span>
</div>
            <RouterLink
              to="/products"
              class="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Shop Now
            </RouterLink>
          </div>

          <p class="mt-5 rounded-2xl bg-white p-4 text-sm leading-6 text-gray-700 shadow-sm sm:text-base">
            Upgrade your everyday tech with premium sound and flagship style — now at a smarter price for a limited time.
          </p>
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

import headsetOffer from '../assets/home-offer/headset.jpg'
import iphoneOffer from '../assets/home-offer/iphone13pro.jpg'

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
<style scoped>
.star-badge {
  width: 100px;
  height: 100px;
  background: linear-gradient(135deg, #ef4444, #f59e0b);
  clip-path: polygon(
    50% 0%,
    61% 18%,
    82% 10%,
    74% 30%,
    100% 50%,
    74% 70%,
    82% 90%,
    61% 82%,
    50% 100%,
    39% 82%,
    18% 90%,
    26% 70%,
    0% 50%,
    26% 30%,
    18% 10%,
    39% 18%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  font-weight: 800;
  line-height: 1.1;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

.star-badge span {
  font-size: 18px;
}
</style>