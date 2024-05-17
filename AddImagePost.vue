<template>
  <form
    class="add-post"
    @submit.prevent="addImagePost"

  >
    <h2 class="add-post__title">
      Add an Image Post
    </h2>
    <label class="input">
      <input
        class="input__field"
        type="text"
        placeholder=" "
        v-model="textDescription"
      />
    </label>
    <label class="input">
      <input
        class="input__field"
        type="file"
        @change="onFileChange"
        ref="file"
        name="file"
        accept="image/*"
      />
    </label>
    <div class="options">
      <button type="submit" id="btn-post" class="btn-add" >
        add
      </button>
    </div>
  </form>
</template>
