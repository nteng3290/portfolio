(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

$(function () {
    AOS.init({
        duration: 600
        // disable: 'mobile'
    });
    $('.hamburger').on('click', function () {
        $('.hamburger').toggleClass('open');
        $('.mainNav').toggleClass('show');
    });
    $('#homelink a').smoothScroll({
        speed: 500
    });
    $('.arrowDown a').smoothScroll({
        speed: 500,
        offset: -200
    });
    $('#aboutlink a').smoothScroll({
        speed: 500,
        offset: -400
    });
    $('#skillslink a').smoothScroll({
        speed: 500
    });
    $('#portfoliolink a').smoothScroll({
        speed: 500,
        offset: -100
    });
    $('.contactButton').smoothScroll({
        speed: 500
    });
    // Cache selectors
    var lastId,
        topMenu = $("#top-menu"),
        topMenuHeight = topMenu.outerHeight() + 15,

    // All list items
    menuItems = topMenu.find("a"),

    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function () {
        var item = $($(this).attr("href"));
        if (item.length) {
            return item;
        }
    });

    // Bind click handler to menu items
    // so we can get a fancy scroll animation
    menuItems.click(function (e) {
        var href = $(this).attr("href"),
            offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
        $('html, body').stop().animate({
            scrollTop: offsetTop
        }, 300);
        e.preventDefault();
    });

    // Bind to scroll
    $(window).scroll(function () {
        // Get container scroll position
        var fromTop = $(this).scrollTop() + topMenuHeight;

        // Get id of current scroll item
        var cur = scrollItems.map(function () {
            if ($(this).offset().top < fromTop) return this;
        });
        // Get the id of the current element
        cur = cur[cur.length - 1];
        var id = cur && cur.length ? cur[0].id : "";

        if (lastId !== id) {
            lastId = id;
            // Set/remove active class
            menuItems.parent().removeClass("active").end().filter("[href='#" + id + "']").parent().addClass("active");
        }
    });
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXZcXHNjcmlwdHNcXGFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsRUFBRSxZQUFVO0FBQ1IsUUFBSSxJQUFKLENBQVM7QUFDTCxrQkFBVTtBQUNWO0FBRkssS0FBVDtBQUlBLE1BQUUsWUFBRixFQUFnQixFQUFoQixDQUFtQixPQUFuQixFQUE0QixZQUFNO0FBQzlCLFVBQUUsWUFBRixFQUFnQixXQUFoQixDQUE0QixNQUE1QjtBQUNBLFVBQUUsVUFBRixFQUFjLFdBQWQsQ0FBMEIsTUFBMUI7QUFDSCxLQUhEO0FBSUEsTUFBRSxhQUFGLEVBQWlCLFlBQWpCLENBQThCO0FBQzFCLGVBQU87QUFEbUIsS0FBOUI7QUFHQSxNQUFFLGNBQUYsRUFBa0IsWUFBbEIsQ0FBK0I7QUFDM0IsZUFBTyxHQURvQjtBQUUzQixnQkFBUSxDQUFDO0FBRmtCLEtBQS9CO0FBSUEsTUFBRSxjQUFGLEVBQWtCLFlBQWxCLENBQStCO0FBQzNCLGVBQU8sR0FEb0I7QUFFM0IsZ0JBQVEsQ0FBQztBQUZrQixLQUEvQjtBQUlBLE1BQUUsZUFBRixFQUFtQixZQUFuQixDQUFnQztBQUM1QixlQUFPO0FBRHFCLEtBQWhDO0FBR0EsTUFBRSxrQkFBRixFQUFzQixZQUF0QixDQUFtQztBQUMvQixlQUFPLEdBRHdCO0FBRS9CLGdCQUFRLENBQUM7QUFGc0IsS0FBbkM7QUFJQSxNQUFFLGdCQUFGLEVBQW9CLFlBQXBCLENBQWlDO0FBQzdCLGVBQU87QUFEc0IsS0FBakM7QUFHQTtBQUNBLFFBQUksTUFBSjtBQUFBLFFBQ0ksVUFBVSxFQUFFLFdBQUYsQ0FEZDtBQUFBLFFBRUksZ0JBQWdCLFFBQVEsV0FBUixLQUF3QixFQUY1Qzs7QUFHSTtBQUNBLGdCQUFZLFFBQVEsSUFBUixDQUFhLEdBQWIsQ0FKaEI7O0FBS0k7QUFDQSxrQkFBYyxVQUFVLEdBQVYsQ0FBYyxZQUFZO0FBQ3BDLFlBQUksT0FBTyxFQUFFLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxNQUFiLENBQUYsQ0FBWDtBQUNBLFlBQUksS0FBSyxNQUFULEVBQWlCO0FBQUUsbUJBQU8sSUFBUDtBQUFjO0FBQ3BDLEtBSGEsQ0FObEI7O0FBV0E7QUFDQTtBQUNBLGNBQVUsS0FBVixDQUFnQixVQUFVLENBQVYsRUFBYTtBQUN6QixZQUFJLE9BQU8sRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLE1BQWIsQ0FBWDtBQUFBLFlBQ0ksWUFBWSxTQUFTLEdBQVQsR0FBZSxDQUFmLEdBQW1CLEVBQUUsSUFBRixFQUFRLE1BQVIsR0FBaUIsR0FBakIsR0FBdUIsYUFBdkIsR0FBdUMsQ0FEMUU7QUFFQSxVQUFFLFlBQUYsRUFBZ0IsSUFBaEIsR0FBdUIsT0FBdkIsQ0FBK0I7QUFDM0IsdUJBQVc7QUFEZ0IsU0FBL0IsRUFFRyxHQUZIO0FBR0EsVUFBRSxjQUFGO0FBQ0gsS0FQRDs7QUFTQTtBQUNBLE1BQUUsTUFBRixFQUFVLE1BQVYsQ0FBaUIsWUFBWTtBQUN6QjtBQUNBLFlBQUksVUFBVSxFQUFFLElBQUYsRUFBUSxTQUFSLEtBQXNCLGFBQXBDOztBQUVBO0FBQ0EsWUFBSSxNQUFNLFlBQVksR0FBWixDQUFnQixZQUFZO0FBQ2xDLGdCQUFJLEVBQUUsSUFBRixFQUFRLE1BQVIsR0FBaUIsR0FBakIsR0FBdUIsT0FBM0IsRUFDSSxPQUFPLElBQVA7QUFDUCxTQUhTLENBQVY7QUFJQTtBQUNBLGNBQU0sSUFBSSxJQUFJLE1BQUosR0FBYSxDQUFqQixDQUFOO0FBQ0EsWUFBSSxLQUFLLE9BQU8sSUFBSSxNQUFYLEdBQW9CLElBQUksQ0FBSixFQUFPLEVBQTNCLEdBQWdDLEVBQXpDOztBQUVBLFlBQUksV0FBVyxFQUFmLEVBQW1CO0FBQ2YscUJBQVMsRUFBVDtBQUNBO0FBQ0Esc0JBQ0ssTUFETCxHQUNjLFdBRGQsQ0FDMEIsUUFEMUIsRUFFSyxHQUZMLEdBRVcsTUFGWCxDQUVrQixhQUFhLEVBQWIsR0FBa0IsSUFGcEMsRUFFMEMsTUFGMUMsR0FFbUQsUUFGbkQsQ0FFNEQsUUFGNUQ7QUFHSDtBQUNKLEtBcEJEO0FBcUJILENBM0VEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIiQoZnVuY3Rpb24oKXtcclxuICAgIEFPUy5pbml0KHtcclxuICAgICAgICBkdXJhdGlvbjogNjAwLFxyXG4gICAgICAgIC8vIGRpc2FibGU6ICdtb2JpbGUnXHJcbiAgICB9KTtcclxuICAgICQoJy5oYW1idXJnZXInKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgJCgnLmhhbWJ1cmdlcicpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgJCgnLm1haW5OYXYnKS50b2dnbGVDbGFzcygnc2hvdycpO1xyXG4gICAgfSlcclxuICAgICQoJyNob21lbGluayBhJykuc21vb3RoU2Nyb2xsKHtcclxuICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgfSk7XHJcbiAgICAkKCcuYXJyb3dEb3duIGEnKS5zbW9vdGhTY3JvbGwoe1xyXG4gICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgb2Zmc2V0OiAtMjAwXHJcbiAgICB9KTtcclxuICAgICQoJyNhYm91dGxpbmsgYScpLnNtb290aFNjcm9sbCh7XHJcbiAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICBvZmZzZXQ6IC00MDBcclxuICAgIH0pO1xyXG4gICAgJCgnI3NraWxsc2xpbmsgYScpLnNtb290aFNjcm9sbCh7XHJcbiAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgIH0pO1xyXG4gICAgJCgnI3BvcnRmb2xpb2xpbmsgYScpLnNtb290aFNjcm9sbCh7XHJcbiAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICBvZmZzZXQ6IC0xMDBcclxuICAgIH0pO1xyXG4gICAgJCgnLmNvbnRhY3RCdXR0b24nKS5zbW9vdGhTY3JvbGwoe1xyXG4gICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICB9KTtcclxuICAgIC8vIENhY2hlIHNlbGVjdG9yc1xyXG4gICAgdmFyIGxhc3RJZCxcclxuICAgICAgICB0b3BNZW51ID0gJChcIiN0b3AtbWVudVwiKSxcclxuICAgICAgICB0b3BNZW51SGVpZ2h0ID0gdG9wTWVudS5vdXRlckhlaWdodCgpICsgMTUsXHJcbiAgICAgICAgLy8gQWxsIGxpc3QgaXRlbXNcclxuICAgICAgICBtZW51SXRlbXMgPSB0b3BNZW51LmZpbmQoXCJhXCIpLFxyXG4gICAgICAgIC8vIEFuY2hvcnMgY29ycmVzcG9uZGluZyB0byBtZW51IGl0ZW1zXHJcbiAgICAgICAgc2Nyb2xsSXRlbXMgPSBtZW51SXRlbXMubWFwKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSAkKCQodGhpcykuYXR0cihcImhyZWZcIikpO1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5sZW5ndGgpIHsgcmV0dXJuIGl0ZW07IH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAvLyBCaW5kIGNsaWNrIGhhbmRsZXIgdG8gbWVudSBpdGVtc1xyXG4gICAgLy8gc28gd2UgY2FuIGdldCBhIGZhbmN5IHNjcm9sbCBhbmltYXRpb25cclxuICAgIG1lbnVJdGVtcy5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBocmVmID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKSxcclxuICAgICAgICAgICAgb2Zmc2V0VG9wID0gaHJlZiA9PT0gXCIjXCIgPyAwIDogJChocmVmKS5vZmZzZXQoKS50b3AgLSB0b3BNZW51SGVpZ2h0ICsgMTtcclxuICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IG9mZnNldFRvcFxyXG4gICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQmluZCB0byBzY3JvbGxcclxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIEdldCBjb250YWluZXIgc2Nyb2xsIHBvc2l0aW9uXHJcbiAgICAgICAgdmFyIGZyb21Ub3AgPSAkKHRoaXMpLnNjcm9sbFRvcCgpICsgdG9wTWVudUhlaWdodDtcclxuXHJcbiAgICAgICAgLy8gR2V0IGlkIG9mIGN1cnJlbnQgc2Nyb2xsIGl0ZW1cclxuICAgICAgICB2YXIgY3VyID0gc2Nyb2xsSXRlbXMubWFwKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykub2Zmc2V0KCkudG9wIDwgZnJvbVRvcClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIEdldCB0aGUgaWQgb2YgdGhlIGN1cnJlbnQgZWxlbWVudFxyXG4gICAgICAgIGN1ciA9IGN1cltjdXIubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgdmFyIGlkID0gY3VyICYmIGN1ci5sZW5ndGggPyBjdXJbMF0uaWQgOiBcIlwiO1xyXG5cclxuICAgICAgICBpZiAobGFzdElkICE9PSBpZCkge1xyXG4gICAgICAgICAgICBsYXN0SWQgPSBpZDtcclxuICAgICAgICAgICAgLy8gU2V0L3JlbW92ZSBhY3RpdmUgY2xhc3NcclxuICAgICAgICAgICAgbWVudUl0ZW1zXHJcbiAgICAgICAgICAgICAgICAucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIilcclxuICAgICAgICAgICAgICAgIC5lbmQoKS5maWx0ZXIoXCJbaHJlZj0nI1wiICsgaWQgKyBcIiddXCIpLnBhcmVudCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KSJdfQ==
