<?php
/*
 * Plugin Name: Hitch & Sparrow Custom Blog Block
 * Author: Brad Siefert
 * Version: v1
*/

add_action('enqueue_block_editor_assets', 'loadBlogBlockFiles');

function loadBlogBlockFiles() {
  wp_enqueue_script(
    'hitch-and-sparrow-custom-blog-block',
    plugins_url( 'blog-block.js', __FILE__ ),
    array('wp-blocks', 'wp-i18n', 'wp-editor'),
    true
  );
  
  // Enqueue block editor styles
  wp_enqueue_style(
    'hitch-and-sparrow-custom-blog-block-editor-css',
    plugins_url( 'editor-styles.css', __FILE__ ),
    filemtime( plugin_dir_path( __FILE__ ) . 'editor-styles.css' )
  );
}