<template>
  <div class="container">
    <div class="columns">
      <div class="column is-4 is-offset-4">
        <h1 class="title">Sing up</h1>
        <form @submit.prevent="submitForm">
          <div class="field">
            <label>Username</label>
            <div class="control">
              <input type="text" name="username" class="input" v-model="username">
            </div>
          </div>
          <div class="field">
            <label>Email</label>
            <div class="control">
              <input type="email" name="email" class="input" v-model="email">
            </div>
          </div>
          <div class="field">
            <label>Repeat password</label>
            <div class="control">
              <input type="password" name="password1" class="input" v-model="password1">
            </div>
          </div>
          <div class="field">
            <label>Repeat password</label>
            <div class="control">
              <input type="password" name="password2" class="input" v-model="password2">
            </div>
          </div>

          <div class="notification is-danger" v-if="errors.length">
            <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
          </div>

          <div class="field">
            <div class="control">
              <button class="button is-success">Submit</button>
            </div>
          </div>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import {toast} from "bulma-toast";


export default {
  name: 'SingUp',
  data() {
    return {
      username: '',
      email: '',
      password1: '',
      password2: '',
      errors: [],
    }
  },
  methods: {
    async submitForm() {
      this.$store.commit('setIsLoading', true)
      this.errors = []

      if (this.username === '') {
        this.errors.push('The username is missing')
      }

      if (this.password1 === '') {
        this.errors.push('The password is too short')
      }

      if (this.password1 !== this.password2) {
        this.errors.push('The password are not matching')
      }

      if (!this.errors.length) {
        const formData = {
          username: this.username,
          email: this.email,
          password: this.password1,
        }
        

        await axios
            .post('/api/v1/users/', formData, {
              config: {
                headers: {
                        'Access-Control-Allow-Origin': '*',
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                      }
                    }
                })
            .then(response => {
              toast({
                message: 'Account was created, please log in',
                type: "is-success",
                dismissible: true,
                pauseOnHover: true,
                duration: 2000,
                position: "bottom-right"
              })
              this.$router.push('/log-in')
            })
            .catch(error => {
              if (error.response) {
                for (const property in error.response.data) {
                  this.errors.push(`${property}: ${error.response.data[property]}`)
                }
              } else if (error.message) {
                this.errors.push('Something went wrong. Please try again!')
              }
            })
            this.$store.commit('setIsLoading', false)
      }

    }
  }
}
</script>