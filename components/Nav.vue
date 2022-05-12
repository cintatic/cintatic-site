<template>
  <div>
    <div
      class="z-50 fixed w-full bg-white backdrop-filter backdrop-blur-xl bg-opacity-60 shadow"
    >
      <div
        class="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
      >
        <div class="relative flex grid items-center grid-cols-2 lg:grid-cols-3">
          <ul class="flex items-center hidden space-x-8 lg:flex">
            <li>
              <NuxtLink
                to="/blog"
                aria-label="Blog"
                title="Blog"
                class="font-bold text-lg tracking-wide text-gray-700 transition-colors duration-200"
                >Blog</NuxtLink
              >
            </li>
            <li>
              <NuxtLink
                to="/servicios"
                aria-label="Servicios"
                title="Servicios"
                class="font-bold text-lg tracking-wide text-gray-700 transition-colors duration-200"
                >Servicios</NuxtLink
              >
            </li>
          </ul>
          <NuxtLink
            to="/"
            aria-label="Cintatic"
            title="Cintatic"
            class="inline-flex items-center lg:mx-auto"
          >
            <NuxtImg
              class="w-40"
              width="200"
              height="100"
              alt="CINTATIC"
              src="/logo.svg"
            />
          </NuxtLink>
          <ul class="flex items-center hidden ml-auto space-x-8 lg:flex">
            <li class="">
              <a aria-label="Instagram" href="https://instagram.com/cintaticmx">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline-block align-middle ml-3 text-3xl w-8 text-black hover:text-gray-600"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                >
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                  />
                </svg>
              </a>

              <a aria-label="Facebook" href="https://facebook.com/cintaticmx">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline-block align-middle ml-3 text-3xl w-8 text-black hover:text-gray-600"
                  viewBox="0 0 512 512"
                  fill="currentColor"
                >
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
                  />
                </svg>
              </a>
              <a
                aria-label="Whatsapp"
                href="https://api.whatsapp.com/send?phone=525628348062&text=%C2%A1Hola!%20Quisiera%20saber%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios."
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="inline-block align-middle ml-3 text-3xl w-8 text-black hover:text-gray-600"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                >
                  <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                  <path
                    d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
                  />
                </svg>
              </a>
            </li>
            <li></li>
          </ul>
          <div class="ml-auto lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              class="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              @click="isMenuOpen = !isMenuOpen"
            >
              <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                ></path>
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                ></path>
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                ></path>
              </svg>
            </button>
            <div>
              <transition name="my-page">
                <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
                  <div class="p-5 bg-white shadow rounded">
                    <div class="flex items-center justify-between mb-4">
                      <div>
                        <NuxtLink
                          to="/"
                          aria-label="Company"
                          title="Company"
                          class="inline-flex items-center"
                        >
                          <NuxtImg
                            width="100"
                            height="100"
                            alt="CINTATIC"
                            loading="lazy"
                            class="w-36"
                            src="/logo.svg"
                          />
                        </NuxtLink>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          class="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          @click="isMenuOpen = false"
                        >
                          <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            ></path>
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <ul class="space-y-4">
                        <li>
                          <NuxtLink
                            to="/blog"
                            aria-label="Blog"
                            title="Blog"
                            class="font-bold tracking-wide text-gray-700 transition-colors duration-200"
                            >Blog</NuxtLink
                          >
                        </li>
                        <li>
                          <NuxtLink
                            to="/servicios"
                            aria-label="Servicios"
                            title="Servicios"
                            class="font-bold tracking-wide text-gray-700 transition-colors duration-200"
                            >Servicios</NuxtLink
                          >
                        </li>
                      </ul>
                      <span class="flex mt-5 justify-center">
                        <a v-if="ios" href="fb://profile/106070931823082">
                          <NuxtImg
                            width="100"
                            height="100"
                            alt="Facebook"
                            loading="lazy"
                            class="mx-5 text-3xl w-8"
                            src="/icons/facebook-brands.svg"
                          />
                        </a>

                        <a v-else-if="android" href="fb://page/106070931823082">
                          <NuxtImg
                            width="100"
                            height="100"
                            alt="Facebook"
                            loading="lazy"
                            class="mx-5 text-3xl w-8"
                            src="/icons/facebook-brands.svg"
                          />
                        </a>

                        <a v-else href="https://facebook.com/cintaticmx">
                          <NuxtImg
                            width="100"
                            height="100"
                            alt="Facebook"
                            loading="lazy"
                            class="mx-5 text-3xl w-8"
                            src="/icons/facebook-brands.svg"
                          />
                        </a>
                        <a href="https://instagram.com/cintaticmx">
                          <NuxtImg
                            width="100"
                            height="100"
                            alt="Instagram"
                            loading="lazy"
                            class="mx-5 text-3xl w-8"
                            src="/icons/instagram-brands.svg"
                          />
                        </a>
                        <a
                          href="https://api.whatsapp.com/send?phone=525628348062&text=%C2%A1Hola!%20Quisiera%20saber%20m%C3%A1s%20informaci%C3%B3n%20acerca%20de%20sus%20servicios."
                        >
                          <NuxtImg
                            width="100"
                            height="100"
                            alt="Whatsapp"
                            loading="lazy"
                            class="mx-5 text-3xl w-8"
                            src="/icons/whatsapp-brands.svg"
                          />
                        </a>
                        <a href="tel:5628348062">
                          <NuxtImg
                            width="100"
                            height="100"
                            alt="Facebook"
                            loading="lazy"
                            class="mx-5 text-3xl w-8"
                            src="/icons/phone-solid.svg"
                          />
                        </a>
                      </span>
                    </nav>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="h-20"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false,
      ios: null,
      android: null,
    };
  },
  watch: {
    $route() {
      this.isMenuOpen = false;
    },
  },
  mounted() {
    if (navigator.userAgent.toLowerCase().includes("iphone")) this.ios = true;
    if (navigator.userAgent.toLowerCase().includes("android"))
      this.android = true;
  },
};
</script>

<style scoped>
.my-page-enter-active,
.my-page-leave-active {
  transition: opacity 0.5s;
}
.my-page-enter,
.my-page-leave-to {
  opacity: 0;
}

.home-enter-active,
.home-leave-active {
  animation: bounceIn 0.5s;
}
.home-enter,
.home-leave-active {
  animation: fadeOut 0.5s;
}
</style>
