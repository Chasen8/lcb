/*
* @Author: Pearl8
* @Date:   2018-02-10 11:42:50
* @Last Modified by:   Pearl8
* @Last Modified time: 2018-02-12 15:42:42
*/

'use strict';
/*
 *  Default theme - Owl Carousel CSS File
 */
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true
    });
});