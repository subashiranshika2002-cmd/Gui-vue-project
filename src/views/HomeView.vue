<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { RouterLink } from 'vue-router'

interface Product {
  id: number
  title: string
  price: number
  thumbnail: string
}

const products = ref<Product[]>([])
const search = ref('')

onMounted(async () => {
  const res = await fetch('https://dummyjson.com/products')
  const data = await res.json()
  products.value = data.products
})

const filteredProducts = computed(() => {
  return products.value.filter((product) =>
    product.title.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>

<template>
  <div class="p-6">
    <h1 class="mb-6 text-3xl font-bold text-blue-600">
      Product List
    </h1>

    <input
      v-model="search"
      type="text"
      placeholder="Search products..."
      class="mb-6 w-full rounded border p-3"
    />

    <div class="grid grid-cols-1 gap-4 md:grid-cols-3">
      <div
        v-for="product in filteredProducts"
        :key="product.id"
        class="rounded border p-4 shadow"
      >
        <img
          :src="product.thumbnail"
          :alt="product.title"
          class="mb-2 h-40 w-full object-cover"
        />
        <h2 class="font-bold">{{ product.title }}</h2>
        <p class="mb-3">${{ product.price }}</p>

        <RouterLink
          :to="`/product/${product.id}`"
          class="inline-block rounded bg-blue-600 px-4 py-2 text-white"
        >
          View Details
        </RouterLink>
      </div>
    </div>
  </div>
</template>