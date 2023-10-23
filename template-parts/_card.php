<div class="gallery__col">
  <a href="<?php echo get_the_ID(); ?>" class="gallery-card js-openPopup">
    <div class="gallery-card__image">
      <?php echo get_the_post_thumbnail() ?>
    </div>
    <div class="gallery-card__content">
      <div class="gallery-card__text">
        <h6><?php echo get_the_title() ?></h6>
        <?php echo get_the_content() ?>
      </div>
      <div class="gallery-card__icon <?php echo esc_html(get_field('bg_color')); ?>">
        <?php
        $icon = get_field('icon');
        if (!empty($icon)) : ?>
          <img src="<?php echo esc_url($icon['url']); ?>" alt="<?php echo esc_attr($icon['alt']); ?>" />
        <?php endif; ?>
      </div>
    </div>
  </a>
</div>