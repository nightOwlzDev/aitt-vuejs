import Vue from "vue";
import { ValidationProvider, extend, localize } from "vee-validate";
import * as rules from "vee-validate/dist/rules";

import th from "vee-validate/dist/locale/th.json";
import en from "vee-validate/dist/locale/en.json";

Object.keys(rules).forEach(key => {
  extend(key, rules[key]);
});

localize({
  th: th,
  en: en
});

localize("th");

Vue.component("validation-provider", ValidationProvider);
