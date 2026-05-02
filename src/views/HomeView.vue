<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Top header section -->
    <div class="bg-gradient-to-r from-blue-600 to-indigo-700 px-4 py-5 text-white shadow sm:px-6 sm:py-6">
      <div class="mx-auto max-w-7xl">
        <div class="mb-4">
          <RouterLink
            to="/"
            class="inline-block rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
          >
            ← Back to Home
          </RouterLink>
        </div>

        <!-- Responsive header content -->
        <div class="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <!-- LEFT SIDE IMAGE -->
          <div class="flex justify-center md:justify-start">
            <transition name="fade-slide" mode="out-in">
              <div
                :key="currentItem.name"
                class="w-full max-w-[220px] rounded-2xl bg-white/10 p-3 backdrop-blur-sm shadow-lg sm:max-w-[240px]"
              >
                <img
                  :src="currentItem.image"
                  :alt="currentItem.name"
                  class="h-36 w-full rounded-xl bg-white object-contain p-2 sm:h-40"
                />
                <h3 class="mt-2 text-center text-xl font-bold text-yellow-300">
                  {{ currentItem.name }}
                </h3>
              </div>
            </transition>
          </div>

          <!-- RIGHT SIDE TITLE + SEARCH -->
          <div>
            <h1 class="text-center text-4xl font-extrabold text-yellow-300 tracking-wide sm:text-5xl md:text-left">
              Electronics Products
            </h1>

            <p class="mt-2 text-center text-base text-blue-100 sm:text-lg md:text-left">
              Browse phones, laptops, TVs, fridges, and washing machines
            </p>

            <div class="mt-4 flex flex-col gap-3 md:flex-row">
              <input
                v-model="search"
                type="text"
                placeholder="Search products..."
                class="w-full rounded-lg border-none p-3 text-black placeholder-black shadow outline-none"
              />

              <select
                v-model="selectedCategory"
                class="w-full rounded-lg border-none p-3 text-black shadow outline-none md:max-w-xs"
              >
                <option value="">All Categories</option>
                <option
                  v-for="category in categories"
                  :key="category"
                  :value="category"
                >
                  {{ category }}
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Products -->
    <div class="p-4 sm:p-6">
      <h2 class="mb-6 text-2xl font-bold text-gray-800">Popular Products</h2>

      <div
        v-if="filteredProducts.length === 0"
        class="rounded-xl bg-white p-6 text-center text-gray-600 shadow"
      >
        No products found.
      </div>

      <div v-else class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="product in filteredProducts"
          :key="product.id"
          class="rounded-2xl bg-white p-4 shadow transition hover:-translate-y-1 hover:shadow-lg"
        >
          <img
            :src="product.thumbnail"
            :alt="product.title"
            class="mb-4 h-48 w-full rounded-xl bg-gray-100 object-contain p-3"
          />

          <h3 class="mb-2 text-lg font-semibold text-gray-800">
            {{ product.title }}
          </h3>

          <p class="mb-2 text-sm text-gray-500">
            {{ product.category }}
          </p>

          <div class="mb-4 flex items-center justify-between">
            <span class="text-xl font-bold text-green-600">
              ${{ product.price }}
            </span>
          </div>

          <RouterLink
            :to="`/product/${product.id}`"
            class="block rounded-lg bg-blue-600 py-2 text-center font-medium text-white transition hover:bg-blue-700"
          >
            View Details
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { RouterLink } from 'vue-router'

import phoneImg from '../assets/header-slider/phone.jpg'
import laptopImg from '../assets/header-slider/laptop.jpg'
import tvImg from '../assets/header-slider/tv.jpg'
import fridgeImg from '../assets/header-slider/fridge.jpg'
import washingMachineImg from '../assets/header-slider/washing-machine.jpg'

import tvExtraImg from '../assets/product-extra/tv.jpg'
import fridgeExtraImg from '../assets/product-extra/fridge.jpg'
import washingMachineExtraImg from '../assets/product-extra/washing-machine.jpg'

const apiProducts = ref([])
const search = ref('')
const selectedCategory = ref('')

const sliderItems = [
  { name: 'Phones', image: phoneImg },
  { name: 'Laptops', image: laptopImg },
  { name: 'TVs', image: tvImg },
  { name: 'Fridges', image: fridgeImg },
  { name: 'Washing Machines', image: washingMachineImg },
]

const currentIndex = ref(0)
const currentItem = computed(() => sliderItems[currentIndex.value])

let sliderInterval = null

onMounted(async () => {
  const res = await fetch('https://dummyjson.com/products?limit=200')
  const data = await res.json()

  apiProducts.value = data.products
    .filter(product => ['smartphones', 'laptops'].includes(product.category))
    .map(product => ({
      id: product.id,
      title: product.title,
      category: product.category === 'smartphones' ? 'mobile phones' : 'laptops',
      price: product.price,
      thumbnail: product.thumbnail,
    }))

  sliderInterval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % sliderItems.length
  }, 2200)
})

onUnmounted(() => {
  clearInterval(sliderInterval)
})

const extraProducts = [
  {
    id: 1001,
    title: 'Samsung Smart TV 55 Inch',
    category: 'tv',
    price: 899.99,
    thumbnail: tvExtraImg,
  },
  {
    id: 1002,
    title: 'LG Double Door Fridge',
    category: 'fridge',
    price: 1299.99,
    thumbnail: fridgeExtraImg,
  },
  {
    id: 1003,
    title: 'Samsung Washing Machine',
    category: 'washing machine',
    price: 799.99,
    thumbnail: washingMachineExtraImg,
  },
]

const allProducts = computed(() => {
  return [...apiProducts.value, ...extraProducts]
})

const categories = computed(() => {
  return [...new Set(allProducts.value.map(product => product.category))]
})

const filteredProducts = computed(() => {
  return allProducts.value.filter(product => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.value.toLowerCase())

    const matchesCategory =
      selectedCategory.value === '' ||
      product.category === selectedCategory.value

    return matchesSearch && matchesCategory
  })
})
</script>

<style scoped>
.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.6s ease;
}

.fade-slide-enter-from {
  opacity: 0;
  transform: translateY(12px);
}

.fade-slide-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
</style>