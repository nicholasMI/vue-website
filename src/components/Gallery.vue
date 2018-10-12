<template>
  <div class="content w3layouts-agile-info">
    <!-- gallery -->
    <div class="gallery-top w3ls-agileits">
      <!-- container -->
      <div class="container">
        <div class="gallery-info wthree-agile">
          <h2>Gallery</h2>
        </div>
        <div class="gallery-grids-top">
          <div class="gallery-grids">
            <div class="col-md-3 gallery-grid">
              <a class="example-image-link" :href="basePath + 'images/g1.jpg'" data-lightbox="example-set" data-title=""><img class="example-image" :src="basePath + 'images/g1.jpg'" alt=""/></a>
            </div>
            <div class="col-md-3 gallery-grid">
              <a class="example-image-link" :href="basePath + 'images/g2.jpg'" data-lightbox="example-set" data-title=""><img class="example-image" :src="basePath + 'images/g2.jpg'" alt=""/></a>
            </div>
            <div class="col-md-3 gallery-grid">
              <a class="example-image-link" :href="basePath + 'images/g3.jpg'" data-lightbox="example-set" data-title=""><img class="example-image" :src="basePath + 'images/g3.jpg'" alt=""/></a>
            </div>
            <div class="col-md-3 gallery-grid">
              <a class="example-image-link" :href="basePath + 'images/g4.jpg'" data-lightbox="example-set" data-title=""><img class="example-image" :src="basePath + 'images/g4.jpg'" alt=""/></a>
            </div>
            <div class="clearfix"> </div>
          </div>
          <div class="gallery-grids gallery-grids-middle">
            <div class="col-md-3 gallery-grid">
              <a class="example-image-link" :href="basePath + 'images/g5.jpg'" data-lightbox="example-set" data-title=""><img class="example-image" :src="basePath + 'images/g5.jpg'" alt=""/></a>
            </div>
            <div class="col-md-3 gallery-grid">
              <a class="example-image-link" :href="basePath + 'images/g6.jpg'" data-lightbox="example-set" data-title=""><img class="example-image" :src="basePath + 'images/g6.jpg'" alt=""/></a>
            </div>
            <div class="col-md-3 gallery-grid">
              <a class="example-image-link" :href="basePath + 'images/g7.jpg'" data-lightbox="example-set" data-title=""><img class="example-image" :src="basePath + 'images/g7.jpg'" alt=""/></a>
            </div>
            <div class="col-md-3 gallery-grid">
              <a class="example-image-link" :href="basePath + 'images/g8.jpg'" data-lightbox="example-set" data-title=""><img class="example-image" :src="basePath + 'images/g8.jpg'" alt=""/></a>
            </div>
            <div class="clearfix"> </div>
          </div>
          <div class="gallery-grids">
            <div class="col-md-3 gallery-grid">
              <a class="example-image-link" :href="basePath + 'images/g4.jpg'" data-lightbox="example-set" data-title=""><img class="example-image" :src="basePath + 'images/g4.jpg'" alt=""/></a>
            </div>
            <div class="col-md-3 gallery-grid">
              <a class="example-image-link" :href="basePath + 'images/g3.jpg'" data-lightbox="example-set" data-title=""><img class="example-image" :src="basePath + 'images/g3.jpg'" alt=""/></a>
            </div>
            <div class="col-md-3 gallery-grid">
              <a class="example-image-link" :href="basePath + 'images/g2.jpg'" data-lightbox="example-set" data-title=""><img class="example-image" :src="basePath + 'images/g2.jpg'" alt=""/></a>
            </div>
            <div class="col-md-3 gallery-grid">
              <a class="example-image-link" :href="basePath + 'images/g1.jpg'" data-lightbox="example-set" data-title=""><img class="example-image" :src="basePath + 'images/g1.jpg'" alt=""/></a>
            </div>
            <div class="clearfix"> </div>
          </div>
        </div>
      </div>
      <!-- //container -->
    </div>
    <!-- //gallery -->
  </div>
</template>

<script>
  const IMG_BASE_PATH = 'static/';
export default {
  name: 'Gallery',
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
