const app = Vue.createApp({
  data() {
    return {
      casualEmails: [],
    };
  },
  mounted() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((result) => {
          this.casualEmails.push(result.data.response);
        });
    }
  },
});
app.mount("#app");
