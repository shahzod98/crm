<template>
  <div class="navbar is-dark">
    <div class="navbar-brand" style="align-items: center">
      <router-link to="/" class="navber-item">
        <strong>CRM</strong>
      </router-link>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/dashboard/leads" class="has-text-white">
              <strong>Leads</strong>
            </router-link>
            <!-- <router-link to="/log-in" class="button is-light"> -->
              <!-- <strong>Sing in</strong> -->
            <!-- </router-link> -->
          </div>
        </div>
        <div class="navbar-item">
          <div class="buttons">
            <router-link to="/sing-up" class="button is-success">
              <strong>Sing up</strong>
            </router-link>
            <router-link to="/log-in" class="button is-light">
              <strong>Sing in</strong>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Navbar'
}
</script>