<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Hero Section -->
    <section class="bg-gradient-to-r from-blue-700 via-indigo-700 to-blue-600 px-6 py-16 text-white">
      <div class="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2">
        <!-- Left side -->
        <div>
          <h1 class="text-5xl font-extrabold leading-tight">
            About <span class="text-yellow-300">VoltEdge</span>
          </h1>

          <p class="mt-5 text-lg leading-8 text-blue-100">
            VoltEdge is an electronics store for every lifestyle and every budget.
            We offer affordable, medium-range, and premium products including phones,
            laptops, TVs, fridges, and washing machines.
          </p>

          <div class="mt-8 grid gap-4 sm:grid-cols-2">
            <div class="rounded-xl bg-white/20 p-4 backdrop-blur-sm">
              🚚 Free Home Delivery
            </div>
            <div class="rounded-xl bg-white/20 p-4 backdrop-blur-sm">
              🛡️ Warranty Available
            </div>
            <div class="rounded-xl bg-white/20 p-4 backdrop-blur-sm">
              💳 Easy Payment Options
            </div>
            <div class="rounded-xl bg-white/20 p-4 backdrop-blur-sm">
              ⭐ Trusted Quality
            </div>
          </div>

          <RouterLink
            to="/products"
            class="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-700 transition hover:bg-gray-200"
          >
            Explore Products
          </RouterLink>
        </div>

        <!-- Right side - one by one image animation -->
        <div>
          <transition name="fade-slide" mode="out-in">
            <div
              :key="currentItem.name"
              class="rounded-3xl bg-white p-6 text-gray-800 shadow-2xl"
            >
              <img
                :src="currentItem.image"
                :alt="currentItem.name"
                class="h-80 w-full rounded-2xl bg-gray-50 object-contain p-4"
              />

              <h2 class="mt-5 text-center text-3xl font-extrabold">
                {{ currentItem.name }}
              </h2>

              <p class="mt-3 text-center text-gray-600">
                {{ currentItem.description }}
              </p>

              <p class="mt-3 text-center font-semibold text-blue-700">
                {{ currentItem.tagline }}
              </p>
            </div>
          </transition>

          <!-- dots -->
          <div class="mt-5 flex justify-center gap-3">
            <button
              v-for="(item, index) in items"
              :key="item.name"
              @click="currentIndex = index"
              class="h-3 w-3 rounded-full transition"
              :class="currentIndex === index ? 'bg-yellow-300' : 'bg-white/60'"
            ></button>
          </div>
        </div>
      </div>
    </section>

    <!-- Details section -->
    <section class="px-6 py-14">
      <div class="mx-auto max-w-6xl">
        <h2 class="mb-10 text-center text-3xl font-extrabold text-gray-800">
          Why Choose Us?
        </h2>

        <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div class="rounded-2xl bg-white p-6 shadow">
            <h3 class="mb-3 text-xl font-bold text-blue-700">Contact Us</h3>
            <p class="text-gray-600">📞 +94 71 234 5678</p>
            <p class="text-gray-600">✉️ support@voltedge.com</p>
            <p class="text-gray-600">📍 Galle, Sri Lanka</p>
          </div>

          <div class="rounded-2xl bg-white p-6 shadow">
            <h3 class="mb-3 text-xl font-bold text-green-700">Delivery</h3>
            <p class="text-gray-600">🚚 Free home delivery for selected products</p>
            <p class="text-gray-600">⏱️ Quick and safe delivery</p>
          </div>

          <div class="rounded-2xl bg-white p-6 shadow">
            <h3 class="mb-3 text-xl font-bold text-yellow-600">Payment</h3>
            <p class="text-gray-600">💳 Card payment accepted</p>
            <p class="text-gray-600">💵 Cash on delivery</p>
            <p class="text-gray-600">🏦 Bank transfer supported</p>
          </div>

          <div class="rounded-2xl bg-white p-6 shadow">
            <h3 class="mb-3 text-xl font-bold text-purple-700">Warranty</h3>
            <p class="text-gray-600">🛡️ Warranty on selected items</p>
            <p class="text-gray-600">🔧 Repair / replacement support</p>
            <p class="text-gray-600">⭐ Genuine product quality</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import { RouterLink } from 'vue-router'

import phoneImg from '../assets/about/phone.jpg'
import laptopImg from '../assets/about/laptop.jpg'
import tvImg from '../assets/about/tv.jpg'
import fridgeImg from '../assets/about/fridge.jpg'
import washingMachineImg from '../assets/about/washing-machine.jpg'

const items = [
  {
    name: 'Smart Phone',
    image: phoneImg,
    description: 'Modern smartphones for communication, study, work, and daily life.',
    tagline: 'Affordable to premium mobile choices',
  },
  {
    name: 'Laptop',
    image: laptopImg,
    description: 'Powerful laptops for students, office work, and professional tasks.',
    tagline: 'Smart learning and working solutions',
  },
  {
    name: 'Television',
    image: tvImg,
    description: 'Quality TVs for entertainment, family time, and modern living rooms.',
    tagline: 'Clear picture and enjoyable viewing',
  },
  {
    name: 'Fridge',
    image: fridgeImg,
    description: 'Reliable refrigerators to support comfortable and practical home life.',
    tagline: 'Essential cooling for every home',
  },
  {
    name: 'Washing Machine',
    image: washingMachineImg,
    description: 'Efficient washing machines for convenience and easy household care.',
    tagline: 'Modern comfort for busy families',
  },
]

const currentIndex = ref(0)

const currentItem = computed(() => items[currentIndex.value])

let sliderInterval = null

onMounted(() => {
  sliderInterval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % items.length
  }, 2500)
})

onUnmounted(() => {
  clearInterval(sliderInterval)
})
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.7s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
</style>