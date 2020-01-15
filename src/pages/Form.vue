<template>
  <div>
    <h1 class="title">Form</h1>
    <pre>{{ person }}</pre>
    <validation-provider
      name="Username"
      v-slot="{ errors }"
      rules="required|min:5"
    >
      <div class="field">
        <input
          v-model.trim="person.username"
          placeholder="username"
          :class="className(errors)"
          type="text"
        />
        <p class="help is-danger">{{ errors[0] }}</p>
      </div>
    </validation-provider>
    <validation-provider
      name="Password"
      v-slot="{ errors }"
      rules="required|min:8"
    >
      <div class="field">
        <input
          maxlength="15"
          v-model.trim="person.password"
          placeholder="password"
          :class="className(errors)"
          type="password"
        />
        <p class="help is-danger">{{ errors[0] }}</p>
      </div>
    </validation-provider>
    <div class="field">
      <input v-model.trim="person.name" class="input" type="text" />
    </div>
    <div class="field">
      <input v-model.trim="person.suaname" class="input" type="text" />
    </div>
    <div class="field">
      <input v-model.number="person.age" class="input" type="number" />
    </div>
    <div class="field">
      <input
        v-model.number="person.hobbies"
        type="checkbox"
        value="cooking"
      />Cooking
      <input
        v-model.number="person.hobbies"
        type="checkbox"
        value="reading"
      />Reading
    </div>
    <div class="field">
      <input v-model.number="person.gender" type="radio" value="M" />Male
      <input v-model.number="person.gender" type="radio" value="F" />Female
    </div>
    <div class="field">
      <select v-model="person.level">
        <option v-for="each in options" :key="each" :value="'Level ' + each"
          >Level {{ each }}</option
        >
      </select>
    </div>
    <p>
      <button @click="submitForm()" class="button">Submit</button>
    </p>
  </div>
</template>
<script>
import "animate.css/animate.min.css";
export default {
  data() {
    return {
      options: [1, 2, 3, 4, 5],
      person: {
        hobbies: [],
        gender: "M",
        level: "Level 4"
      }
    };
  },
  methods: {
    submitForm() {
      console.log(this.person);
    },
    className(err) {
      return err.length === 0 ? "input" : "input is-danger animated pulse";
    }
  }
};
</script>
