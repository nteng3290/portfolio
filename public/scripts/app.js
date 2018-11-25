(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBLEVBQUUsWUFBVTtBQUNSLFFBQUksSUFBSixDQUFTO0FBQ0wsa0JBQVU7QUFDVjtBQUZLLEtBQVQ7QUFJQSxNQUFFLFlBQUYsRUFBZ0IsRUFBaEIsQ0FBbUIsT0FBbkIsRUFBNEIsWUFBTTtBQUM5QixVQUFFLFlBQUYsRUFBZ0IsV0FBaEIsQ0FBNEIsTUFBNUI7QUFDQSxVQUFFLFVBQUYsRUFBYyxXQUFkLENBQTBCLE1BQTFCO0FBQ0gsS0FIRDtBQUlBLE1BQUUsYUFBRixFQUFpQixZQUFqQixDQUE4QjtBQUMxQixlQUFPO0FBRG1CLEtBQTlCO0FBR0EsTUFBRSxjQUFGLEVBQWtCLFlBQWxCLENBQStCO0FBQzNCLGVBQU8sR0FEb0I7QUFFM0IsZ0JBQVEsQ0FBQztBQUZrQixLQUEvQjtBQUlBLE1BQUUsY0FBRixFQUFrQixZQUFsQixDQUErQjtBQUMzQixlQUFPLEdBRG9CO0FBRTNCLGdCQUFRLENBQUM7QUFGa0IsS0FBL0I7QUFJQSxNQUFFLGVBQUYsRUFBbUIsWUFBbkIsQ0FBZ0M7QUFDNUIsZUFBTztBQURxQixLQUFoQztBQUdBLE1BQUUsa0JBQUYsRUFBc0IsWUFBdEIsQ0FBbUM7QUFDL0IsZUFBTyxHQUR3QjtBQUUvQixnQkFBUSxDQUFDO0FBRnNCLEtBQW5DO0FBSUEsTUFBRSxnQkFBRixFQUFvQixZQUFwQixDQUFpQztBQUM3QixlQUFPO0FBRHNCLEtBQWpDO0FBR0E7QUFDQSxRQUFJLE1BQUo7QUFBQSxRQUNJLFVBQVUsRUFBRSxXQUFGLENBRGQ7QUFBQSxRQUVJLGdCQUFnQixRQUFRLFdBQVIsS0FBd0IsRUFGNUM7O0FBR0k7QUFDQSxnQkFBWSxRQUFRLElBQVIsQ0FBYSxHQUFiLENBSmhCOztBQUtJO0FBQ0Esa0JBQWMsVUFBVSxHQUFWLENBQWMsWUFBWTtBQUNwQyxZQUFJLE9BQU8sRUFBRSxFQUFFLElBQUYsRUFBUSxJQUFSLENBQWEsTUFBYixDQUFGLENBQVg7QUFDQSxZQUFJLEtBQUssTUFBVCxFQUFpQjtBQUFFLG1CQUFPLElBQVA7QUFBYztBQUNwQyxLQUhhLENBTmxCOztBQVdBO0FBQ0E7QUFDQSxjQUFVLEtBQVYsQ0FBZ0IsVUFBVSxDQUFWLEVBQWE7QUFDekIsWUFBSSxPQUFPLEVBQUUsSUFBRixFQUFRLElBQVIsQ0FBYSxNQUFiLENBQVg7QUFBQSxZQUNJLFlBQVksU0FBUyxHQUFULEdBQWUsQ0FBZixHQUFtQixFQUFFLElBQUYsRUFBUSxNQUFSLEdBQWlCLEdBQWpCLEdBQXVCLGFBQXZCLEdBQXVDLENBRDFFO0FBRUEsVUFBRSxZQUFGLEVBQWdCLElBQWhCLEdBQXVCLE9BQXZCLENBQStCO0FBQzNCLHVCQUFXO0FBRGdCLFNBQS9CLEVBRUcsR0FGSDtBQUdBLFVBQUUsY0FBRjtBQUNILEtBUEQ7O0FBU0E7QUFDQSxNQUFFLE1BQUYsRUFBVSxNQUFWLENBQWlCLFlBQVk7QUFDekI7QUFDQSxZQUFJLFVBQVUsRUFBRSxJQUFGLEVBQVEsU0FBUixLQUFzQixhQUFwQzs7QUFFQTtBQUNBLFlBQUksTUFBTSxZQUFZLEdBQVosQ0FBZ0IsWUFBWTtBQUNsQyxnQkFBSSxFQUFFLElBQUYsRUFBUSxNQUFSLEdBQWlCLEdBQWpCLEdBQXVCLE9BQTNCLEVBQ0ksT0FBTyxJQUFQO0FBQ1AsU0FIUyxDQUFWO0FBSUE7QUFDQSxjQUFNLElBQUksSUFBSSxNQUFKLEdBQWEsQ0FBakIsQ0FBTjtBQUNBLFlBQUksS0FBSyxPQUFPLElBQUksTUFBWCxHQUFvQixJQUFJLENBQUosRUFBTyxFQUEzQixHQUFnQyxFQUF6Qzs7QUFFQSxZQUFJLFdBQVcsRUFBZixFQUFtQjtBQUNmLHFCQUFTLEVBQVQ7QUFDQTtBQUNBLHNCQUNLLE1BREwsR0FDYyxXQURkLENBQzBCLFFBRDFCLEVBRUssR0FGTCxHQUVXLE1BRlgsQ0FFa0IsYUFBYSxFQUFiLEdBQWtCLElBRnBDLEVBRTBDLE1BRjFDLEdBRW1ELFFBRm5ELENBRTRELFFBRjVEO0FBR0g7QUFDSixLQXBCRDtBQXFCSCxDQTNFRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIiQoZnVuY3Rpb24oKXtcclxuICAgIEFPUy5pbml0KHtcclxuICAgICAgICBkdXJhdGlvbjogNjAwLFxyXG4gICAgICAgIC8vIGRpc2FibGU6ICdtb2JpbGUnXHJcbiAgICB9KTtcclxuICAgICQoJy5oYW1idXJnZXInKS5vbignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgJCgnLmhhbWJ1cmdlcicpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAgICAgJCgnLm1haW5OYXYnKS50b2dnbGVDbGFzcygnc2hvdycpO1xyXG4gICAgfSlcclxuICAgICQoJyNob21lbGluayBhJykuc21vb3RoU2Nyb2xsKHtcclxuICAgICAgICBzcGVlZDogNTAwLFxyXG4gICAgfSk7XHJcbiAgICAkKCcuYXJyb3dEb3duIGEnKS5zbW9vdGhTY3JvbGwoe1xyXG4gICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICAgICAgb2Zmc2V0OiAtMjAwXHJcbiAgICB9KTtcclxuICAgICQoJyNhYm91dGxpbmsgYScpLnNtb290aFNjcm9sbCh7XHJcbiAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICBvZmZzZXQ6IC00MDBcclxuICAgIH0pO1xyXG4gICAgJCgnI3NraWxsc2xpbmsgYScpLnNtb290aFNjcm9sbCh7XHJcbiAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgIH0pO1xyXG4gICAgJCgnI3BvcnRmb2xpb2xpbmsgYScpLnNtb290aFNjcm9sbCh7XHJcbiAgICAgICAgc3BlZWQ6IDUwMCxcclxuICAgICAgICBvZmZzZXQ6IC0xMDBcclxuICAgIH0pO1xyXG4gICAgJCgnLmNvbnRhY3RCdXR0b24nKS5zbW9vdGhTY3JvbGwoe1xyXG4gICAgICAgIHNwZWVkOiA1MDAsXHJcbiAgICB9KTtcclxuICAgIC8vIENhY2hlIHNlbGVjdG9yc1xyXG4gICAgdmFyIGxhc3RJZCxcclxuICAgICAgICB0b3BNZW51ID0gJChcIiN0b3AtbWVudVwiKSxcclxuICAgICAgICB0b3BNZW51SGVpZ2h0ID0gdG9wTWVudS5vdXRlckhlaWdodCgpICsgMTUsXHJcbiAgICAgICAgLy8gQWxsIGxpc3QgaXRlbXNcclxuICAgICAgICBtZW51SXRlbXMgPSB0b3BNZW51LmZpbmQoXCJhXCIpLFxyXG4gICAgICAgIC8vIEFuY2hvcnMgY29ycmVzcG9uZGluZyB0byBtZW51IGl0ZW1zXHJcbiAgICAgICAgc2Nyb2xsSXRlbXMgPSBtZW51SXRlbXMubWFwKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGl0ZW0gPSAkKCQodGhpcykuYXR0cihcImhyZWZcIikpO1xyXG4gICAgICAgICAgICBpZiAoaXRlbS5sZW5ndGgpIHsgcmV0dXJuIGl0ZW07IH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAvLyBCaW5kIGNsaWNrIGhhbmRsZXIgdG8gbWVudSBpdGVtc1xyXG4gICAgLy8gc28gd2UgY2FuIGdldCBhIGZhbmN5IHNjcm9sbCBhbmltYXRpb25cclxuICAgIG1lbnVJdGVtcy5jbGljayhmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgIHZhciBocmVmID0gJCh0aGlzKS5hdHRyKFwiaHJlZlwiKSxcclxuICAgICAgICAgICAgb2Zmc2V0VG9wID0gaHJlZiA9PT0gXCIjXCIgPyAwIDogJChocmVmKS5vZmZzZXQoKS50b3AgLSB0b3BNZW51SGVpZ2h0ICsgMTtcclxuICAgICAgICAkKCdodG1sLCBib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICAgICAgICBzY3JvbGxUb3A6IG9mZnNldFRvcFxyXG4gICAgICAgIH0sIDMwMCk7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQmluZCB0byBzY3JvbGxcclxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIC8vIEdldCBjb250YWluZXIgc2Nyb2xsIHBvc2l0aW9uXHJcbiAgICAgICAgdmFyIGZyb21Ub3AgPSAkKHRoaXMpLnNjcm9sbFRvcCgpICsgdG9wTWVudUhlaWdodDtcclxuXHJcbiAgICAgICAgLy8gR2V0IGlkIG9mIGN1cnJlbnQgc2Nyb2xsIGl0ZW1cclxuICAgICAgICB2YXIgY3VyID0gc2Nyb2xsSXRlbXMubWFwKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKCQodGhpcykub2Zmc2V0KCkudG9wIDwgZnJvbVRvcClcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIEdldCB0aGUgaWQgb2YgdGhlIGN1cnJlbnQgZWxlbWVudFxyXG4gICAgICAgIGN1ciA9IGN1cltjdXIubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgdmFyIGlkID0gY3VyICYmIGN1ci5sZW5ndGggPyBjdXJbMF0uaWQgOiBcIlwiO1xyXG5cclxuICAgICAgICBpZiAobGFzdElkICE9PSBpZCkge1xyXG4gICAgICAgICAgICBsYXN0SWQgPSBpZDtcclxuICAgICAgICAgICAgLy8gU2V0L3JlbW92ZSBhY3RpdmUgY2xhc3NcclxuICAgICAgICAgICAgbWVudUl0ZW1zXHJcbiAgICAgICAgICAgICAgICAucGFyZW50KCkucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIilcclxuICAgICAgICAgICAgICAgIC5lbmQoKS5maWx0ZXIoXCJbaHJlZj0nI1wiICsgaWQgKyBcIiddXCIpLnBhcmVudCgpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59KSJdfQ==
