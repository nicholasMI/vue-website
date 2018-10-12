<template>
  <div>
    <div class="content w3layouts-agile-info">
      <div class="contact">
        <div class="container">
          <h2>Contact us</h2>
          <div class="google-map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26359195.17562375!2d-113.7156245614499!3d36.2473834534249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited+States!5e0!3m2!1sen!2sin!4v1471497559566" frameborder="0" style="border:0" allowfullscreen=""></iframe>
          </div>
          <div class="contact-info" >
            <div class="col-md-4 contact-grid-w3l-agile">
              <h4>Address 1</h4>
              <p>9870 St Vincent Place,Glasgow, DC 45 Fr 45..</p>
              <p>Telephone : +1 800 603 6035</p>
              <p>Freephone : + 1900 904 5898</p>
              <p>Email : <a href="mailto:info@example.com"> mail@example.com</a></p>
            </div>
            <div class="col-md-4 contact-grid-w3l-agile">
              <h4>Address 2</h4>
              <p>Freephone : + 1900 904 5898</p>
              <p>9863 - 9867 Mill Road, Cambridge, MG9 99H.</p>
              <p>Telephone: +1 800 603 6035</p>
              <p>Email : <a href="mailto:info@example.com"> mail@example.com</a></p>
            </div>
            <div class="col-md-4 contact-grid-w3l-agile">
              <h4>Address 3</h4>
              <p>Freephone : + 1900 904 5898</p>
              <p>8901 Marmora Road, Glasgow, D04 89GR</p>
              <p>Telephone: +1 800 603 6035</p>
              <p>Email : <a href="mailto:info@example.com"> mail@example.com</a></p>
            </div>
            <div class="clearfix"></div>
          </div>
          <div class="contact-form">
            <h4>Contact Form</h4>
            <form action="#" method="post">
              <input type="text" placeholder="Name" required="">
              <input type="email" placeholder="Email" required="">
              <input type="text" placeholder="Telephone" required="">
              <textarea placeholder="Message" required=""></textarea>
              <input type="submit" value="Submit" >


            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  const IMG_BASE_PATH = 'static/';
export default {
  name: 'contact',
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
