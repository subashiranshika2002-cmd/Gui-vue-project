<template>
  <div class="min-h-screen bg-gray-100 p-6">
    <div class="mx-auto max-w-5xl">
      <RouterLink
        to="/"
        class="mb-6 inline-block rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700"
      >
        ← Back to Products
      </RouterLink>

      <div
        v-if="product"
        class="grid gap-8 rounded-2xl bg-white p-6 shadow md:grid-cols-2"
      >
        <div class="flex items-center justify-center rounded-2xl bg-gray-100 p-6">
          <img
            :src="product.images?.[0] || product.thumbnail"
            :alt="product.title"
            class="h-80 w-full object-contain"
          />
        </div>

        <div class="flex flex-col justify-center">
          <p class="mb-2 text-sm font-semibold uppercase tracking-wide text-blue-600">
            {{ product.category }}
          </p>

          <h1 class="mb-4 text-3xl font-extrabold text-gray-800">
            {{ product.title }}
          </h1>

          <p class="mb-6 leading-7 text-gray-600">
            {{ product.description }}
          </p>

          <p class="mb-4 text-3xl font-bold text-green-600">
            ${{ product.price }}
          </p>

          <div class="mb-6 flex gap-3">
            <span class="rounded-full bg-yellow-100 px-4 py-2 text-sm font-medium text-yellow-700">
              Rating: {{ product.rating ?? 'N/A' }}
            </span>

            <span class="rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700">
              Stock: {{ product.stock ?? 'N/A' }}
            </span>
          </div>

          <button
            class="w-fit rounded-lg bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, RouterLink } from 'vue-router'

const route = useRoute()
const product = ref(null)

onMounted(async () => {
  const res = await fetch(`https://dummyjson.com/products/${route.params.id}`)
  product.value = await res.json()
})
</script>