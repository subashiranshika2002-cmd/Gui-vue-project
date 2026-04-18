<template>
  <div class="min-h-screen bg-gray-100">
    <div class="bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-8 text-white shadow">
      <h1 class="text-center text-4xl font-extrabold">Products Page</h1>
      <p class="mt-2 text-center text-blue-100">
        Browse products, search items, and filter by category
      </p>

      <div class="mt-6 flex flex-col items-center gap-4 md:flex-row md:justify-center">
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

    <div class="p-6">
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