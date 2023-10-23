<?php get_header(); ?>

<div class="section gallery">
  <div class="container">
    <div class="gallery-row">
      <?php
      $card = new WP_Query(array(
        'posts_per_page' => 6,
        'post_type' => 'advantages',
      ));
      while ($card->have_posts()) {
        $card->the_post();
        get_template_part('template-parts/_card');
      }
      wp_reset_postdata();
      ?>
    </div>
  </div>
</div>
<div class="overlay"></div>
<div class="popup-wrapper js-result-popup"></div>

<?php get_footer(); ?>