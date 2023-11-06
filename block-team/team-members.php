<?php
/**
 * Plugin Name:       Team Members
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.1
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       team-members
 *
 * @package           create-block
 */

if (!defined('ABSPATH')) {
    exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function team_members_team_members_block_init()
{
    register_block_type(__DIR__ . '/build');
}
add_action('init', 'team_members_team_members_block_init', 2);

function load_custom_fonts_from_plugin()
{
    // Assuming the plugin's folder is 'my-plugin' and is located in the WordPress plugin directory.
    $plugin_version = '1.0.0'; // Change this to your plugin's version.
    $plugin_url = plugins_url('team-members');
    var_dump($plugin_url);
    // Enqueue the style to inject our custom fonts
    wp_enqueue_style('my-plugin-fonts', $plugin_url . '/fonts/fonts.css', array(), $plugin_version, 'all');

}
add_action('wp_enqueue_scripts', 'load_custom_fonts_from_plugin', 1);
