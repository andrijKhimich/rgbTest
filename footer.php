<?php
$card = new WP_Query(array(
  'posts_per_page' => 6,
  'post_type' => 'advantages',
));
while ($card->have_posts()) {
  $card->the_post();
  get_template_part('template-parts/_popup');
}
wp_reset_postdata();
?>

</main>
</div>
<?php wp_footer() ?>

</body>

</html>