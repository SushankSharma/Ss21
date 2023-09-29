/**
/**
 * $File: main.js $
 * $Date: 2023-09-29 13:59:44 $
 * $Revision: $
 * $Creator: Sushank-Sharma $
 * $Notice: See LICENSE.txt for modification and distribution information
 *                   Copyright (c) 2023 by Ss21, Sushank-Sharma $
 */

"use strict";

(function ($) {
  /* assign Announcement Marquee */

  const announcementText = $("#announcement-text");
  let currentIndex = 0;

  // Function to display the current quote
  function displayCurrentQuote() {
    announcementText.text(announcement[currentIndex]);
  }

  // Function to change the quote to the next one with a fade effect
  function changeToNextQuote() {
    announcementText.addClass("hide"); // Add the hide class to fade out
    setTimeout(function () {
      currentIndex = (currentIndex + 1) % announcement.length;
      displayCurrentQuote();
      announcementText.removeClass("hide"); // Remove the hide class to fade in
    }, 1000); // Wait for 1 second for the fade-out effect to complete
  }

  // Call the initial display function
  displayCurrentQuote();

  // Set up an event listener to change the quote when the previous one finishes
  announcementText.on("animationiteration", function () {
    changeToNextQuote();
  });

  // Automatically change the quote every 30 seconds
  setInterval(function () {
    changeToNextQuote();
  }, 30000); // 30 seconds

  // CAUTION(jenchieh): all the animate string cannot be the same.
  const link_init_anim_class_string = "fadeIn animated";
  const link_anim_class_string = "heartBeat animated";

  var link_images = $(".link-image");
  var game_logos = $(".game-logo");

  var anim_list = [];

  const link_anim_time_interval = 1000 * 0.5 * 1; // in seconds
  var link_anim_run = false;
  var link_anim_index = -1;
  var line_anim_turn_delay_time = 1; // `link_anim_time_interval' * this = actaul time.

  var stop_loop_anim = false;

  /* Init function */
  {
    link_images.addClass(link_init_anim_class_string);
    game_logos.addClass(link_init_anim_class_string);

    anim_list.push(link_images);
    anim_list.push(game_logos);
  }

  /* Register Event */

  for (let index = 0; index < anim_list.length; ++index) {
    anim_list[index].mouseenter(function () {
      let shinnySlot = $(this).siblings(".shinny-slot");
      shinnySlot.css("display", "inline");

      // Remove unused class from `ready' event.
      $(this).removeClass(link_init_anim_class_string);

      // Apply animation once.
      $(this).addClass(link_anim_class_string);

      if ($(this).hasClass("link-image")) {
        stop_loop_anim = true;
      }
    });

    anim_list[index].mouseleave(function () {
      let shinnySlot = $(this).siblings(".shinny-slot");
      shinnySlot.css("display", "none");

      $(this).removeClass(link_anim_class_string);

      stop_loop_anim = false;
    });
  }

  /* Timer Event */

  setInterval(function () {
    if (stop_loop_anim) return;

    if (link_anim_run) {
      link_images.removeClass(link_init_anim_class_string);
      link_anim_run = false;
    } else {
      link_images.addClass(function (arr_index) {
        if (arr_index == link_anim_index) return link_init_anim_class_string;
        else return "";
      });

      ++link_anim_index;
      if (link_images.length + line_anim_turn_delay_time <= link_anim_index)
        link_anim_index = 0;

      link_anim_run = true;
    }
  }, link_anim_time_interval);

  document.addEventListener("DOMContentLoaded", function () {
    const scrollButton = document.getElementById("scroll-up-button");

    // Show the button when the user scrolls down
    window.addEventListener("scroll", function () {
      if (window.scrollY > 300) {
        scrollButton.style.display = "block";
      } else {
        scrollButton.style.display = "none";
      }
    });

    // Scroll to the top when the button is clicked
    scrollButton.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scrolling behavior
      });
    });
  });
})(this.jQuery);

/**
 * Main Entry Point.
 */
function main() {}

// start the function.
main();
