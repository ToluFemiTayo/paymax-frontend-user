<template>
  <div class="limiter">
      <Nuxt/>
  </div>
</template>

<script>
export default {
  components: {
  
  },
  head() {
    return {
      titleTemplate: "Account",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no"
        },
        { hid: "description", name: "description", content: "Meta description" }
      ],
      script: [
        {
          src: "/account/vendor/bootstrap/js/bootstrap.min.js",
          body: true
        },
        {
          src: "/account/vendor/bootstrap/js/popper.min.js",
          body: true
        },
        {
          src: "/account/js/main.js",
          body: true
        },
      ],
      link: [
        {
          once: true,
          rel: "stylesheet",
          href: "/account/vendor/bootstrap/css/bootstrap.min.css"
        },
        {
          once: true,
          rel: "stylesheet",
          href:"/account/fonts/font-awesome-4.7.0/css/font-awesome.min.css"
        },
        {
          once: true,
          rel: "stylesheet",
          href: "/account/fonts/Linearicons-Free-v1.0.0/icon-font.min.css"
        },
        {
          once: true,
          rel: "stylesheet",
          href: "/account/vendor/animate/animate.css"
        },
        {
          once: true,
          rel: "stylesheet",
          href: "/account/vendor/css-hamburgers/hamburgers.min.css"
        },
        {
          once: true,
          rel: "stylesheet",
          href: "/account/css/util.css"
        },
        {
          once: true,
          rel: "stylesheet",
          href: "/account/css/main.css"
        },
      ],
    };
  }
};
</script>