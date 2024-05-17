<template>
  <form class="add-post" @submit.prevent="addTextPost" v-if="openAddPost">
    <h2 class="add-post__title">
      Add Post
    </h2>
    <label class="input">
      <input
        class="input__field"
        type="text"
        placeholder=" "
        v-model="textDescription"
      />
      <span class="input__label">Description</span>
    </label>
    <span class="input__label warn" v-if="fillError"
      >Please fill in all fields</span
    >
    <div class="options">
      <button class="btn-add" id="btn-post" type="submit" >
        Add
      </button>
    </div>
  </form>
</template>
