<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100 p-6">
    <div class="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
      <h2 class="mb-2 text-center text-3xl font-extrabold text-gray-800">
        Login
      </h2>

      <p class="mb-6 text-center text-gray-500">
        Welcome to VoltEdge
      </p>

      <form class="space-y-4">
        <div>
          <label class="mb-1 block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your full name"
            class="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label class="mb-1 block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="Enter your email"
            class="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
          />
        </div>

        <div>
          <label class="mb-1 block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Enter your phone number"
            class="w-full rounded-lg border border-gray-300 p-3 outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          class="w-full rounded-lg bg-blue-600 py-3 font-medium text-white transition hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
</script>