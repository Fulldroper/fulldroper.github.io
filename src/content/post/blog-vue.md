---
title: "Blog Vue"
description: "The project aims to create a web application using Vue.js for a blogging platform that supports user authentication, post creation, and media content handling.."
publishDate: "26 Jul 2022"
updatedDate: 01 Jul 2024
tags: ["vue.js", "Axios", "api", "HLS"]
---
## Objective

The project aims to create a web application using Vue.js for a blogging platform that supports user authentication, post creation, and media content handling. This frontend project integrates with the backend to provide a complete blogging experience.
### Repository
- You can find the project repository on GitHub: https://github.com/Fulldroper/blog.vue
- back-end repo: https://github.com/Fulldroper/blog.node
- back-end post: [/blog-node](../../posts/blog-node)
## Main Components
### Vue.js
  A progressive JavaScript framework used for building user interfaces.
  The application uses Vue Router for navigation and Vuex for state management.
### Axios
  A promise-based HTTP client for making requests to the backend API.
### Vuex
  A state management pattern + library for managing application state.
### Vuetify
  A Material Design component framework for Vue.js to provide a rich UI experience.

## How It Works
### User Registration and Login
  The user can register and log in using forms that send requests to the backend API.
  User authentication status is managed using Vuex and tokens are stored in local storage.
```js
// store/auth.js
import axios from 'axios';
import router from '../router';

const state = {
  token: localStorage.getItem('token') || '',
  user: {},
  status: ''
};

const actions = {
  async login({commit}, user) {
    commit('auth_request');
    try {
      let res = await axios.post('http://localhost:3000/api/login', user);
      const token = res.data.token;
      const user = res.data.user;
      localStorage.setItem('token', token);
      axios.defaults.headers.common['Authorization'] = token;
      commit('auth_success', {token, user});
      router.push('/');
    } catch (err) {
      commit('auth_error');
      localStorage.removeItem('token');
    }
  },
  async register({commit}, user) {
    commit('auth_request');
    try {
      let res = await axios.post('http://localhost:3000/api/register', user);
      if (res.data.success !== undefined) {
        commit('auth_success');
      }
    } catch (err) {
      commit('auth_error', err);
    }
  }
};

const mutations = {
  auth_request(state) {
    state.status = 'loading';
  },
  auth_success(state, {token, user}) {
    state.status = 'success';
    state.token = token;
    state.user = user;
  },
  auth_error(state) {
    state.status = 'error';
  }
};

export default {
  state,
  actions,
  mutations
};
```
### Post Creation and Management
  Users can create, edit, and delete posts.
  The posts are fetched from the backend API and displayed using Vuetify components.
```js
<!-- components/PostForm.vue -->
<template>
  <v-form @submit.prevent="submitPost">
    <v-text-field v-model="title" label="Title" required></v-text-field>
    <v-textarea v-model="content" label="Content" required></v-textarea>
    <v-btn type="submit" color="primary">Submit</v-btn>
  </v-form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      title: '',
      content: ''
    };
  },
  methods: {
    async submitPost() {
      const post = {
        title: this.title,
        content: this.content
      };
      try {
        await axios.post('http://localhost:3000/api/posts', post);
        this.$router.push('/');
      } catch (err) {
        console.error(err);
      }
    }
  }
};
</script>
```
## Media Content Handling
  Users can upload media files to their posts.
  The uploaded media is displayed within the posts.
```js
<!-- components/MediaUpload.vue -->
<template>
  <v-form @submit.prevent="uploadMedia">
    <v-file-input v-model="file" label="Media File" required></v-file-input>
    <v-btn type="submit" color="primary">Upload</v-btn>
  </v-form>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      file: null
    };
  },
  methods: {
    async uploadMedia() {
      let formData = new FormData();
      formData.append('file', this.file);
      try {
        await axios.post('http://localhost:3000/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        });
        this.$router.push('/');
      } catch (err) {
        console.error(err);
      }
    }
  }
};
</script>
```
## Post Display and Navigation
  Posts are displayed in a feed format with navigation handled by Vue Router.
```js
<!-- components/PostList.vue -->
<template>
  <v-container>
    <v-row>
      <v-col v-for="post in posts" :key="post.id" cols="12" md="4">
        <v-card>
          <v-card-title>{{ post.title }}</v-card-title>
          <v-card-text>{{ post.content }}</v-card-text>
          <v-card-actions>
            <v-btn @click="viewPost(post.id)" color="primary">View</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      posts: []
    };
  },
  async created() {
    try {
      let res = await axios.get('http://localhost:3000/api/posts');
      this.posts = res.data;
    } catch (err) {
      console.error(err);
    }
  },
  methods: {
    viewPost(id) {
      this.$router.push(`/post/${id}`);
    }
  }
};
</script>
```
## Skills Acquired
### Vue.js Development
  Setting up and configuring a Vue.js application.
  Implementing components, routes, and state management using Vuex.
### API Integration
    Using Axios to make HTTP requests to the backend API.
    Handling authentication and data fetching.
### State Management
  Managing application state using Vuex.
  Handling user authentication and token management.
### UI Design with Vuetify
  Using Vuetify to create a responsive and visually appealing user interface.
  Implementing forms, navigation, and layout components.
### Handling Media Content
  Uploading and displaying media content within posts.
  Managing file uploads and handling form data.
## Conclusion
This project provides practical experience in creating a comprehensive front-end application for a blogging platform, integrating with a backend API, and managing state and user authentication.