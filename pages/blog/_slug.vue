<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <!--Container-->
    <div class="container w-full md:max-w-3xl mx-auto pt-6">
      <div
        class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
        style="font-family: Georgia, serif"
      >
        <!--Title-->
        <div class="font-sans">
          <p class="text-base md:text-sm font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline-block align-middle ml-3 text-3xl w-2 pb-1 text-blue-clever-light"
              viewBox="0 0 256 512"
              fill="currentColor"
            >
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M192 448c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L77.25 256l137.4 137.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448z"
              />
            </svg>
            <NuxtLink
              to="/blog"
              class="text-base md:text-sm font-bold no-underline hover:underline"
              >BLOG</NuxtLink
            >
          </p>
          <h1
            class="font-bold font-sans break-normal text-gray-900 pt-6 pb-4 text-3xl md:text-4xl"
          >
            {{ article.title }}
          </h1>
        </div>
        <h2 class="text-gray-700 italic pb-2">{{ article.description }}</h2>
        <span class="text-gray-600 text-base">{{
          formatDate(article.updatedAt)
        }}</span>
        <NuxtImg loading="lazy" class="py-4" :src="article.image" />
      </div>
      <div class="container w-full md:max-w-3xl mx-auto">
        <div
          class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
          style="font-family: Georgia, serif"
        >
          <div class="pb-16">
            <nuxt-content :document="article" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const article = await $content("blog", params.slug).fetch();
    return {
      article,
    };
  },
  methods: {
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("es", options);
    },
  },
};
</script>
