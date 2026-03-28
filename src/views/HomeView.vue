<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <h1 class="mb-6 text-4xl font-bold text-center text-blue-700">
      Product Store
    </h1>

    <!-- Search -->
    <div class="mb-6 flex justify-center">
      <input
        v-model="search"
        type="text"
        placeholder="Search products..."
        class="w-full max-w-md rounded-lg border p-3 shadow"
      />
    </div>

    <!-- Product Grid -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="bg-white p-4 rounded-lg shadow"
      >
        <h2 class="text-lg font-semibold">{{ product.title }}</h2>
        <p class="text-gray-600">${{ product.price }}</p>

        <RouterLink
          :to="`/product/${product.id}`"
          class="mt-2 inline-block bg-blue-600 text-white px-4 py-2 rounded"
        >
          View Details
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'

const products = ref([])
const search = ref('')

// Fetch data
onMounted(async () => {
  const res = await fetch('https://dummyjson.com/products')
  const data = await res.json()
  products.value = data.products
})

// Filter products
const filteredProducts = computed(() => {
  return products.value.filter(product =>
    product.title.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>