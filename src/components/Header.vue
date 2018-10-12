<template>
  <div class="hello">
    {{rout}}
    <div class="header" :class="{'banr': isNotIndex}">
      <div class="container">
        <div class="header-top">
          <nav class="navbar navbar-default">
            <div class="container-fluid">
              <!-- Brand and toggle get grouped for better mobile display -->
              <div class="navbar-header">
                <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                  <span class="sr-only">Toggle navigation</span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                  <span class="icon-bar"></span>
                </button>
                <div class="navbar-brand">
                  <h1><a href="index.html"><span>Go</span> Travel</a></h1>
                </div>
              </div>

              <!-- Collect the nav links, forms, and other content for toggling -->
              <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                  <li :class="{'active': activeRoute === 'Home'}">
                    <router-link to="/">HOME</router-link>
                  </li>
                  <li  :class="{'active': activeRoute === 'About'}">
                    <router-link to="/about">ABOUT</router-link>
                  </li>
                  <li  :class="{'active': activeRoute === 'Services'}">
                    <router-link to="/services">Services</router-link>
                  </li>
                  <li class="dropdown">
                    <a style="cursor: pointer;" class="dropdown-toggle" @click="showDrop">Pages  <span
                      class="caret"></span></a>
                    <ul class="dropdown-menu" style="display: block" v-if="isShow">
                      <li @click="showDrop">
                        <router-link to="/gallery">Gallery</router-link>
                      </li>
                      <li @click="showDrop">
                        <router-link to="/codes">Codes</router-link>
                      </li>
                      <li @click="showDrop">
                        <router-link to="/icons">Icons</router-link>
                      </li>
                    </ul>
                  </li>

                  <li  :class="{'active': activeRoute === 'Contact'}">
                    <router-link to="/contact">CONTACT</router-link>
                  </li>
                </ul>

              </div><!-- /.navbar-collapse -->
            </div><!-- /.container-fluid -->
          </nav>

        </div>
        <div class="slider" v-show="!isNotIndex">
          <div class="callbacks_container">
            <ul class="rslides" id="slider">
              <li>
                <div class="caption">
                  <h3>Adventure is <span>worthwhile</span></h3>
                </div>
              </li>
              <li>
                <div class="caption">
                  <h3>Take Your <span>Dream</span></h3>
                </div>
              </li>
              <li>
                <div class="caption">
                  <h3>Adventure is <span>worthwhile</span></h3>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Header',
    data () {
      return {
        msg: 'Welcome to Your Vue.js App',
        isShow: false
      }
    },
    methods: {
//    navigateLink(){
//        console.log(1);
//        this.$router.push({name: 'About'})
//    }
      showDrop(){
        console.log('show');
        this.isShow = !this.isShow;
      }
    },
    computed: {
      isNotIndex(){
        return this.$router.app._route.name !== 'Home';
      },
      activeRoute(){
        return this.$router.app._route.name
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
