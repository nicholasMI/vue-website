<template>
  <div>
    <div class="content w3layouts-agileits">
      <!--services-->
      <div class="services">
        <div class="container">
          <h2>Services</h2>
          <div class="services-grids w3ls-agileits">
            <div class="col-md-4 services-grid">
              <div class="ser1">
                <img :src="basePath + 'images/p1.jpg'" class="img-responsive" alt="" />
                <h4>Solor sit amet</h4>
                <p>Were dolor in hendrerit in vulputate velit esse molestie con sequat,Nulla consectetur maximus sem vel aliquet. Donec blandit condimentum varius</p>
              </div>
            </div>
            <div class="col-md-4 services-grid">
              <div class="ser1">
                <img :src="basePath + 'images/p2.jpg'" class="img-responsive" alt="" />
                <h4>Lorem ipsum dolor</h4>
                <p>Were dolor in hendrerit in vulputate velit esse molestie con sequat,Nulla consectetur maximus sem vel aliquet. Donec blandit condimentum varius</p>
              </div>
            </div>
            <div class="col-md-4 services-grid">
              <div class="ser1">
                <img :src="basePath + 'images/p3.jpg'" class="img-responsive" alt="" />
                <h4>Pamet erosorem</h4>
                <p>Were dolor in hendrerit in vulputate velit esse molestie con sequat,Nulla consectetur maximus sem vel aliquet. Donec blandit condimentum varius</p>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
      <!--feature-->
      <div class="features w3layouts-agileits">
        <div class="container">
          <h3>features</h3>
          <div class="features-grids w3ls-agileits">
            <div class="col-md-3 feature-grid">
              <div class="feature">
                <div class="feature1">
                  <span class="glyphicon glyphicon-pencil" aria-hidden="true"></span>
                  <h4>scelerisque eget</h4>
                </div>
                <div class="feature2">
                  <p>Quisque nulla. Vestibulum libero nisl, porta vel, scelerisque eget, lesuada at, neque. Viv eget nibh. Etam cus. Nulla facilisi. </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 feature-grid">
              <div class="feature">
                <div class="feature1">
                  <span class="glyphicon glyphicon-gift" aria-hidden="true"></span>
                  <h4>scelerisque eget</h4>
                </div>
                <div class="feature2">
                  <p>Quisque nulla. Vestibulum libero nisl, porta vel, scelerisque eget, lesuada at, neque. Viv eget nibh. Etam cus. Nulla facilisi. </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 feature-grid">
              <div class="feature">
                <div class="feature1">
                  <span class="glyphicon glyphicon-camera" aria-hidden="true"></span>
                  <h4>scelerisque eget</h4>
                </div>
                <div class="feature2">
                  <p>Quisque nulla. Vestibulum libero nisl, porta vel, scelerisque eget, lesuada at, neque. Viv eget nibh. Etam cus. Nulla facilisi. </p>
                </div>
              </div>
            </div>
            <div class="col-md-3 feature-grid">
              <div class="feature">
                <div class="feature1">
                  <span class="glyphicon glyphicon-calendar" aria-hidden="true"></span>
                  <h4>scelerisque eget</h4>
                </div>
                <div class="feature2">
                  <p>Quisque nulla. Vestibulum libero nisl, porta vel, scelerisque eget, lesuada at, neque. Viv eget nibh. Etam cus. Nulla facilisi. </p>
                </div>
              </div>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
      <div class="service w3layouts-agileits">
        <div class="container">
          <h3>What we offer</h3>
          <div class="servic-grids w3ls-agileits">
            <div class="service1">
              <div class="col-md-3 service-grid">
                <img :src="basePath + 'images/e1.jpg'" class="img-responsive" alt="">
              </div>
              <div class="col-md-3 service-grid1">
                <h4>Mauris non magna ul </h4>
                <p>Fusce feugiat malesuada odio. Morbi orci. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna.</p>
              </div>
              <div class="col-md-3 service-grid">
                <img :src="basePath + 'images/e2.jpg'" class="img-responsive" alt="">
              </div>
              <div class="col-md-3 service-grid1">
                <h4>Mauris non magna ul </h4>
                <p>Fusce feugiat malesuada odio. Morbi orci. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna.</p>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="service2">
              <div class="col-md-3 service-grid">
                <img :src="basePath + 'images/e3.jpg'" class="img-responsive" alt="">
              </div>
              <div class="col-md-3 service-grid1">
                <h4>Mauris non magna ul </h4>
                <p>Fusce feugiat malesuada odio. Morbi orci. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna.</p>
              </div>
              <div class="col-md-3 service-grid">
                <img :src="basePath + 'images/e4.jpg'" class="img-responsive" alt="">
              </div>
              <div class="col-md-3 service-grid1">
                <h4>Mauris non magna ul </h4>
                <p>Fusce feugiat malesuada odio. Morbi orci. Donec sit amet eros. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Mauris fermentum dictum magna.</p>
              </div>
              <div class="clearfix"></div>
            </div>
            <div class="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  const IMG_BASE_PATH = 'static/';
export default {
  name: 'Services',
  data () {
    return {
      basePath: IMG_BASE_PATH
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
