<template>
  <div class="min-h-screen bg-gray-100 px-4 py-8">
    <div class="mx-auto max-w-6xl rounded-3xl bg-white p-6 shadow-xl sm:p-8">
      <RouterLink
        to="/products"
        class="mb-6 inline-block rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700"
      >
        ← Back to Products
      </RouterLink>

      <div class="mb-8 text-center">
        <h1 class="text-4xl font-extrabold text-yellow-400 sm:text-5xl">
          Order Confirmation
        </h1>
        <p class="mt-2 text-base font-medium text-green-600 sm:text-lg">
          All data is safeguarded
        </p>
      </div>

      <div class="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <!-- LEFT SIDE -->
        <div class="rounded-2xl bg-gray-50 p-5 shadow-sm sm:p-6">
          <h2 class="mb-5 text-2xl font-bold text-gray-800">
            Customer Details
          </h2>

          <form class="space-y-4">
            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Full Name
              </label>
              <input
                v-model="fullName"
                type="text"
                placeholder="Enter your name"
                class="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Phone Number
              </label>
              <input
                v-model="phone"
                type="tel"
                placeholder="Enter your phone number"
                class="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label class="mb-2 block text-sm font-semibold text-gray-700">
                Address
              </label>
              <textarea
                v-model="address"
                rows="3"
                placeholder="Enter your address"
                class="w-full rounded-xl border border-gray-300 p-3 outline-none transition focus:border-blue-500"
              ></textarea>
            </div>
          </form>
        </div>

        <!-- RIGHT SIDE -->
        <div class="rounded-2xl bg-gray-50 p-5 shadow-sm sm:p-6">
          <h2 class="mb-5 text-2xl font-bold text-gray-800">
            Payment Method
          </h2>

          <div class="space-y-4">
            <label class="flex cursor-pointer items-start gap-3 rounded-xl border border-gray-200 bg-white p-4">
              <input v-model="paymentMethod" type="radio" value="cod" name="payment" class="mt-1" />
              <div>
                <p class="font-semibold text-gray-800">Cash on Delivery</p>
                <p class="text-sm text-gray-500">Pay after receiving your order</p>
              </div>
            </label>

            <label class="flex cursor-pointer items-start gap-3 rounded-xl border border-blue-200 bg-blue-50 p-4">
              <input v-model="paymentMethod" type="radio" value="card" name="payment" class="mt-1" />
              <div class="w-full">
                <p class="font-semibold text-gray-800">Card Payment</p>
                <p class="text-sm text-gray-500">Visa / MasterCard</p>

                <!-- Card fields -->
                <div v-if="paymentMethod === 'card'" class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div class="sm:col-span-2">
                    <label class="mb-2 block text-sm font-semibold text-gray-700">
                      Card Detail
                    </label>
                    <input
                      v-model="cardDetail"
                      type="text"
                      placeholder="Enter card number"
                      class="w-full rounded-xl border border-gray-300 bg-white p-3 outline-none transition focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label class="mb-2 block text-sm font-semibold text-gray-700">
                      Valid Date
                    </label>
                    <input
                      v-model="validDate"
                      type="text"
                      placeholder="MM/YY"
                      class="w-full rounded-xl border border-gray-300 bg-white p-3 outline-none transition focus:border-blue-500"
                    />
                  </div>

                  <div>
                    <label class="mb-2 block text-sm font-semibold text-gray-700">
                      PIN Number
                    </label>
                    <input
                      v-model="pinNumber"
                      type="password"
                      maxlength="3"
                      inputmode="numeric"
                      placeholder="3 digits"
                      class="w-full rounded-xl border border-gray-300 bg-white p-3 outline-none transition focus:border-blue-500"
                    />
                  </div>

                  <div class="sm:col-span-2">
                    <label class="mb-2 block text-sm font-semibold text-gray-700">
                      Amount
                    </label>
                    <input
                      v-model="amount"
                      type="text"
                      placeholder="$10.53"
                      class="w-full rounded-xl border border-gray-300 bg-white p-3 outline-none transition focus:border-blue-500"
                    />
                  </div>
                </div>
              </div>
            </label>
          </div>

          <!-- Warranty message -->
          <div class="mt-6 rounded-2xl bg-gradient-to-r from-yellow-50 via-pink-50 to-purple-50 p-5">
            <p class="text-base font-semibold text-purple-700 sm:text-lg">
              Complete your order today and enjoy extra peace of mind — your purchase can include a warranty card for trusted protection and confident shopping.
            </p>
          </div>
          <button
            type="button"
            class="mt-6 w-full rounded-xl bg-blue-600 py-3 text-lg font-semibold text-white transition hover:bg-blue-700"
          >
            Submit Order
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const fullName = ref('')
const phone = ref('')
const address = ref('')

const paymentMethod = ref('card')
const cardDetail = ref('')
const validDate = ref('')
const pinNumber = ref('')
const amount = ref('$10.53')
</script>