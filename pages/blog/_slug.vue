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
        <span class="flex text-gray-600 text-base">
          {{ formatDate(article.updatedAt) }}

          <ShareNetwork
            network="facebook"
            :url="'https://cintatic.com/blog/' + article.slug"
            :title="article.title"
            :description="article.description"
            :hashtags="article.hashtags"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline-block align-middle ml-3 text-3xl w-6 text-black hover:text-gray-600"
              viewBox="0 0 512 512"
              fill="currentColor"
            >
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"
              />
            </svg>
          </ShareNetwork>
          <ShareNetwork
            network="whatsapp"
            :url="'https://cintatic.com/blog/' + article.slug"
            :title="article.title"
            :description="article.description"
            :hashtags="article.hashtags"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="inline-block align-middle ml-3 text-3xl w-6 text-black hover:text-gray-600"
              viewBox="0 0 448 512"
              fill="currentColor"
            >
              <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
              <path
                d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"
              />
            </svg>
          </ShareNetwork>
        </span>
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
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: "og:description-blog",
          property: "og:description",
          content: this.article.description,
        },
        {
          hid: "og:title",
          property: "og:title",
          content: this.article.title,
        },
        {
          hid: "og:site_name",
          property: "og:site_name",
          content: "CINTATIC",
        },

        {
          hid: "og:type",
          property: "og:type",
          content: "website",
        },
        {
          hid: "og:image",
          property: "og:image",
          content: this.article.imageog,
        },
        {
          hid: "og:url",
          property: "og:url",
          content: "cintatic.com",
        },
      ],
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
