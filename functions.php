<?php
function my_custom_styles() {
  // Register my custom stylesheet
  wp_register_style( 'custom-styles', get_template_directory_uri().'/assets/css/main.css' );
  // Load my custom stylesheet
  wp_enqueue_style( 'custom-styles' );

  wp_enqueue_script('custom_script', get_template_directory_uri().'/assets/js/app.js','', '', true);
}
add_action( 'wp_enqueue_scripts', 'my_custom_styles' );
