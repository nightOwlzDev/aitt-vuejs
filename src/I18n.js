import Vue from "vue";

import VueI18n from "vue-i18n";

Vue.use(VueI18n);

const messages = {
  en: {
    navbar: {
      home: "Home",
      about: "About"
    },
    footer: {}
  },
  th: {
    navbar: {
      home: "หน้าแรก",
      about: "เกี่ยวกับ"
    },
    footer: {}
  }
};

const i18n = new VueI18n({
  messages: messages,
  locale: "th"
});

export default i18n;
