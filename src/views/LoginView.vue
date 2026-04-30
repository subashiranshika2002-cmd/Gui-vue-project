<template>
  <div class="min-h-screen bg-gray-100">
    <div class="mx-auto grid min-h-screen max-w-7xl md:grid-cols-2">
      <!-- Left side: login form -->
      <div class="flex items-center justify-center bg-white px-8 py-12">
        <div class="w-full max-w-md">
          <h1 class="mb-2 text-4xl font-extrabold text-gray-800">
            Welcome to VoltEdge
          </h1>

          <p class="mb-8 text-gray-500">
            Sign in to explore electronics for every lifestyle and budget.
          </p>

          <form class="space-y-5">
            <div>
              <label class="mb-2 block text-sm font-medium text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                class="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label class="mb-2 block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                class="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label class="mb-2 block text-sm font-medium text-gray-700">
                Phone Number
              </label>
              <input
                type="tel"
                placeholder="Enter your phone number"
                class="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500"
              />
            </div>

            <div>
              <label class="mb-2 block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                placeholder="Enter your password"
                class="w-full rounded-lg border border-gray-300 p-3 outline-none transition focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              class="w-full rounded-lg bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Login
            </button>
          </form>

          <p class="mt-6 text-center text-sm text-gray-500">
            Don’t have an account?
            <span class="font-medium text-blue-600">Register now</span>
          </p>
        </div>
      </div>

      <!-- Right side: cover image -->
      <div class="relative hidden md:block">
        <img
          src="/src/assets/picture/login-cover.png"
          alt="Electronics store"
          class="h-full w-full object-cover"
        />

        <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

        <div class="absolute bottom-10 left-10 right-10 text-white">
          <h2 class="text-4xl font-extrabold leading-tight">
            Electronics for <br />
            Every Home
          </h2>

          <p class="mt-4 text-lg text-gray-200">
            Find phones, laptops, TVs, fridges, washers, and more in one smart place.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
</script>

          