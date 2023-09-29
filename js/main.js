/**
 * $File: main.js $
 * $Date: 2017-09-17 13:16:38 $
 * $Revision: $
 * $Creator: Jen-Chieh Shen $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright (c) 2017 by Shen, Jen-Chieh $
 */

"use strict";

(function ($) {
  /* assign Announcement Marquee */
  $('#announcement-text').text(announcement);

  // CAUTION(jenchieh): all the animate string cannot be the same.
  const link_init_anim_class_string = "fadeIn animated";
  const link_anim_class_string = "heartBeat animated";

  var link_images = $('.link-image');
  var game_logos = $('.game-logo');

  var anim_list = [];

  const link_anim_time_interval = (1000 * 0.5) * 1;  // in seconds
  var link_anim_run = false;
  var link_anim_index = -1;
  var line_anim_turn_delay_time = 1;  // `link_anim_time_interval' * this = actaul time.

  var stop_loop_anim = false;


  /* Init function */
  {
    link_images.addClass(link_init_anim_class_string);
    game_logos.addClass(link_init_anim_class_string);

    anim_list.push(link_images);
    anim_list.push(game_logos);
  }

  /* Register Event */

  for (let index = 0;
       index < anim_list.length;
       ++index) {
    anim_list[index].mouseenter(function () {

      let shinnySlot = $(this).siblings('.shinny-slot');
      shinnySlot.css('display', 'inline');

      // Remove unused class from `ready' event.
      $(this).removeClass(link_init_anim_class_string);

      // Apply animation once.
      $(this).addClass(link_anim_class_string);

      if ($(this).hasClass('link-image')) {
        stop_loop_anim = true;
      }
    });

    anim_list[index].mouseleave(function () {
      let shinnySlot = $(this).siblings('.shinny-slot');
      shinnySlot.css('display', 'none');

      $(this).removeClass(link_anim_class_string);

      stop_loop_anim = false;
    });
  }

  /* Timer Event */

  setInterval(function () {
    if (stop_loop_anim)
      return;

    if (link_anim_run) {
      link_images.removeClass(link_init_anim_class_string);
      link_anim_run = false;
    } else {
      link_images.addClass(function (arr_index) {
        if (arr_index == link_anim_index)
          return link_init_anim_class_string;
        else
          return "";
      });

      ++link_anim_index;
      if (link_images.length + line_anim_turn_delay_time <= link_anim_index)
        link_anim_index = 0;

      link_anim_run = true;
    }
  }, link_anim_time_interval);

}(this.jQuery));




/**
 * Main Entry Point.
 */
function main() {

}

// start the function.
main();
