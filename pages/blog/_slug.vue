<template>
  <div class="bg-gray-100 font-sans leading-normal tracking-normal">
    <!--Container-->
    <div class="container w-full md:max-w-3xl mx-auto pt-20">
      <div
        class="w-full px-4 md:px-6 text-xl text-gray-800 leading-normal"
        style="font-family: Georgia, serif"
      >
        <!--Title-->
        <div class="font-sans">
          <p class="text-base md:text-sm font-bold">
            &lt;
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
        <p class="text-gray-500 italic">{{ article.description }}</p>
        <NuxtImg loading="lazy" class="py-8" :src="article.image" />
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
};
</script>
