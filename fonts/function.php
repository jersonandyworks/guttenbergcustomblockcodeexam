<?php

function load_roboto_font()
{
    // Enqueue the Roboto font from the "assets/fonts" directory
    wp_enqueue_style('roboto-font', get_template_directory_uri() . '/assets/fonts/fonts.css', array(), null);
}

// Hook the function to the 'wp_enqueue_scripts' action
add_action('wp_enqueue_scripts', 'load_roboto_font');
