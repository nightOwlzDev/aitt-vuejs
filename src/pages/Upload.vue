<template>
  <div>
    <h1 class="title">
      Upload
    </h1>
    <hr />
    <input ref="el" @change="handleChange($event)" class="input" type="file" />
    <hr />
    <button @click="handleUpload()" class="button">
      Upload
    </button>
    <hr />
    <h1 class="title">Upload image</h1>
    <img class="animated tada infinite" :src="imageUrl" alt="" />
    <hr />
    <h1 class="title">Preview image</h1>
    <img :src="imageBase64" alt="" />
  </div>
</template>
<script>
import axios from "axios";
const url = "https://api.cloudinary.com/v1_1/nightowlzdev/image/upload";

export default {
  data() {
    return {
      imageBase64: null,
      imageUrl: ""
    };
  },
  methods: {
    handleChange(e) {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(e.target.files[0]);
      fileReader.onload = e => {
        this.imageBase64 = e.target.result;
      };
    },
    async handleUpload() {
      try {
        const formData = new FormData();
        formData.append("file", this.$refs.el.files[0]);
        formData.append("upload_preset", "default");
        const { data } = await axios.post(url, formData);

        this.imageUrl = data.secure_url;
      } catch (error) {
        console.log(error.message);
      }
    }
  }
};
</script>
