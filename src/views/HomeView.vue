<template>
  <div class="min-h-screen bg-gray-100">
    <!-- Hero Section -->
    <section class="bg-white">
      <div class="mx-auto grid max-w-7xl items-center gap-8 px-6 py-10 md:grid-cols-2">
        <div>
          <h2 class="text-4xl font-extrabold text-gray-800 md:text-5xl">
            Discover Your
            <span class="text-blue-600">Best Products</span>
          </h2>

          <p class="mt-4 text-lg text-gray-600">
            Shop smart with stylish products, easy search, and fast details view.
          </p>

          <div class="mt-6 flex gap-4">
            <a
              href="#products"
              class="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
            >
              Shop Now
            </a>

            <button
              class="rounded-lg border border-blue-600 px-6 py-3 font-medium text-blue-600 transition hover:bg-blue-50"
            >
              Explore
            </button>
          </div>
        </div>

        <div class="flex justify-center">
          <img
            src="https://dummyjson.com/image/400x250/4b5563/ffffff?text=Shopping+Store"
            alt="Hero banner"
            class="w-full max-w-md rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>

    <!-- Search + Filter -->
    <div class="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-8 text-white shadow">
      <div class="mt-2 flex flex-col items-center gap-4 md:flex-row md:justify-center">
        <input
          v-model="search"
          type="text"
          placeholder="Search products..."
          class="w-full max-w-xl rounded-lg border-none p-3 text-black shadow outline-none"
        />

        <select
          v-model="selectedCategory"
          class="w-full max-w-xs rounded-lg border-none p-3 text-black shadow outline-none"
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

    <!-- Products -->
    <div id="products" class="p-6">
      <h2 class="mb-6 text-2xl font-bold text-gray-800">Popular Products</h2>

      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
import { ref, computed, onMounted } from 'vue'
import { RouterLink } from 'vue-router'

const products = ref([])
const search = ref('')
const selectedCategory = ref('')

onMounted(async () => {
  const res = await fetch('https://dummyjson.com/products')
  const data = await res.json()
  products.value = data.products
})

const categories = computed(() => {
  return [...new Set(products.value.map(product => product.category))]
})

const filteredProducts = computed(() => {
  return products.value.filter(product => {
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