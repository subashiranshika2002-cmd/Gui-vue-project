<template>
  <div class="min-h-screen bg-gray-100 dark:bg-gray-900">
    <!-- Top section -->
    <section class="bg-gradient-to-r from-blue-500 to-indigo-700 px-4 py-8 text-white sm:px-6 sm:py-10">
      <div class="mx-auto max-w-6xl text-center">
        <h1 class="text-3xl font-extrabold sm:text-4xl md:text-5xl">
          About <span class="text-yellow-300">VoltEdge</span>
        </h1>

        <p class="mx-auto mt-3 max-w-3xl text-sm leading-7 text-blue-100 sm:text-base md:text-lg">
          VoltEdge is your trusted electronics store for every family and every budget.
          We provide quality electronics with reliable service, easy payment methods,
          fast delivery, and warranty support.
        </p>
      </div>
    </section>

    <!-- Combined section -->
    <section class="px-4 py-8 sm:px-6 sm:py-10">
      <div class="mx-auto max-w-6xl rounded-3xl bg-white p-5 shadow-lg dark:bg-gray-800 sm:p-8">
        <div class="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
          <!-- Left -->
          <div>
            <p class="mb-3 inline-block rounded-full bg-purple-100 px-4 py-1 text-xs font-semibold text-purple-700 sm:text-sm dark:bg-purple-900 dark:text-purple-200">
              Why Customers Love VoltEdge
            </p>

            <h2 class="mb-4 text-3xl font-extrabold text-purple-700 dark:text-purple-300 sm:text-4xl">
              Why Choose Us?
            </h2>

            <div class="space-y-4">
              <div class="flex items-center gap-3 rounded-xl bg-gray-50 p-3 shadow-sm dark:bg-gray-700">
                <span class="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-lg">🚚</span>
                <p class="text-sm font-medium text-gray-700 dark:text-white sm:text-base">Fast and safe delivery service</p>
              </div>

              <div class="flex items-center gap-3 rounded-xl bg-gray-50 p-3 shadow-sm dark:bg-gray-700">
                <span class="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-lg">💳</span>
                <p class="text-sm font-medium text-gray-700 dark:text-white sm:text-base">Easy payment options</p>
              </div>

              <div class="flex items-center gap-3 rounded-xl bg-gray-50 p-3 shadow-sm dark:bg-gray-700">
                <span class="flex h-10 w-10 items-center justify-center rounded-full bg-orange-100 text-lg">🛡️</span>
                <p class="text-sm font-medium text-gray-700 dark:text-white sm:text-base">Warranty available on selected products</p>
              </div>
            </div>

            <div class="mt-6 rounded-2xl bg-gray-50 p-4 dark:bg-gray-700">
              <h3 class="mb-3 text-xl font-bold text-blue-700 dark:text-blue-300">Contact Details</h3>
              <div class="space-y-2 text-sm text-gray-700 dark:text-gray-200 sm:text-base">
                <p><span class="font-semibold">Phone:</span> 07916452</p>
                <p><span class="font-semibold">Email:</span> voltedge@.com</p>
                <p><span class="font-semibold">Address:</span> Galle Rd, Galle</p>
              </div>
            </div>

            <div class="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="mailto:voltedge@.com"
                class="rounded-xl bg-purple-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-purple-700"
              >
                Contact Us
              </a>

              <RouterLink
                to="/products"
                class="rounded-xl border-2 border-pink-300 bg-white px-6 py-3 text-center font-semibold text-pink-600 transition hover:bg-pink-50 dark:border-pink-400 dark:bg-gray-800 dark:text-pink-300 dark:hover:bg-gray-700"
              >
                View Products
              </RouterLink>
            </div>
          </div>

          <!-- Right -->
          <div class="flex justify-center rounded-3xl bg-gray-50 p-4 dark:bg-gray-700">
            <img
              :src="contactImage"
              alt="Contact details"
              class="w-full max-w-md rounded-2xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import contactImage from '../assets/about/contact-image.png'</script>