<?php
function rgb_custom_rest()
{
  register_rest_field('advantages', 'popupContent', array(
    'get_callback' => function () {
      return get_field('popup_content');
    }
  ));
  register_rest_field('advantages', 'popupGallery', array(
    'get_callback' => function () {
      return get_field('gallery');
    }
  ));
}
add_action('rest_api_init', 'rgb_custom_rest');

// connect styles and scripts
function rgb_files()
{
  wp_enqueue_style('rgb_main_styles', get_theme_file_uri('/dist/css/style.min.css'));
  wp_enqueue_script('rgb_libs_js', get_theme_file_uri('/dist/js/libs.min.js'), array(), '1.1', true);
  wp_enqueue_script('rgb_main_js', get_theme_file_uri('/dist/js/script.min.js'), array(), '1.1', true);
  wp_localize_script('rgb_main_js', 'rgbData', array(
    'root_url' => get_site_url()
  ));
};
add_action('wp_enqueue_scripts', 'rgb_files');

// create menus
function rgb_features()
{
  add_theme_support('title-tag');
  add_theme_support('post-thumbnails');
  add_image_size('menus');
};

add_action('after_setup_theme', 'rgb_features');




function rgb_post_types()
{
  register_post_type('advantages', array(
    'map_meta_cap' => true,
    'show_in_rest' => true,
    'supports' => array('title', 'editor', 'excerpt', 'thumbnail'),
    'rewrite' => array(
      'slug' => 'advantages'
    ),
    'has_archive' => true,
    'public' => true,
    'labels' => array(
      'name' => 'Advantages',
      'add_new_item' => 'Add new Advantage',
      'edit_item' => 'Edit advantage',
      'all_items' => 'All advantages',
      'singular_name' => 'Advantage'
    ),
    'menu_icon' => 'dashicons-bell',
  ));
};

add_action('after_setup_theme', 'rgb_post_types');


function remove_img_attr($html)
{
  return preg_replace('/(width|height)="\d+"\s/', "", $html);
}

add_filter('post_thumbnail_html', 'remove_img_attr');
