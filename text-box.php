<?php
/**
 * Plugin Name:       Text Box
<<<<<<< HEAD
 * Description:       A text box.
=======
 * Description:       A Box of Text.
>>>>>>> 69a60f10c2da4c5e58bdb24e82204cbf63e3f1d0
 * Requires at least: 5.7
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       text-box
 *
 * @package           blocks-course
 */

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
<<<<<<< HEAD
function blocks_course_text_box_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'blocks_course_text_box_block_init' );
=======
function block_course_text_box_block_init() {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', 'block_course_text_box_block_init' );
>>>>>>> 69a60f10c2da4c5e58bdb24e82204cbf63e3f1d0
