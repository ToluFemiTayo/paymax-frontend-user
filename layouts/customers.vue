<template>
  <div>
    <div id="wrapper">
      <Sidebar />
      <div id="content-wrapper" class="d-flex flex-column">
        <div id="content">
          <Navbar />
          <div class="row">
            <div class="col-lg-10">
              <Nuxt />
            </div>
            <div class="col-lg-2" style="padding-left: 0; heigh:100vh">
              <img
                src="https://via.placeholder.com/150x620/000000/FFFFFF?text=Ad"
                class="img-fluid img-responsive"
                style="width:100%; height:100vh;"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
    <a class="scroll-to-top rounded" href="#page-top">
      <i class="fas fa-angle-up"></i>
    </a>
  </div>
</template>

<script>
import Sidebar from "@/components/customers/Sidebar.vue";
import Navbar from "@/components/customers/Navbar.vue";
import Footer from "@/components/customers/Footer.vue";
export default {
  middleware: ['auth'],
  components: {
    Sidebar,
    Navbar,
    Footer
  },
  head() {
    return {
      titleTemplate: "Dashboard",
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
          src: "/custom/vendor/bootstrap/js/bootstrap.bundle.min.js",
          body: true
        },
        {
          src: "/custom/vendor/jquery-easing/jquery.easing.min.js",
          body: true
        },
        {
          src: "/custom/js/sb-admin-2.min.js",
          body: true
        },

        {
          src: "https://api.ravepay.co/flwv3-pug/getpaidx/api/flwpbf-inline.js"
        }
      ],
      link: [
        {
          once: true,
          rel: "stylesheet",
          href: "/custom/vendor/fontawesome-free/css/all.min.css"
        },
        {
          once: true,
          rel: "stylesheet",
          href:"https://fonts.googleapis.com/css?family=Nunito:200,200i,300,300i,400,400i,600,600i,700,700i,800,800i,900,900i"
        },
        {
          once: true,
          rel: "stylesheet",
          href: "/custom/css/sb-admin-2.min.css"
        }
      ],
      bodyAttrs: {
        id: "page-top"
      }
    };
  },
  mounted() {
    this.$store.dispatch("refreshUser");
  }
};
</script>