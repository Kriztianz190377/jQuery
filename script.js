$(function () {
  var $mainsMenuItems = $("#main-menu ul").children("li"),
    totalMainsMenuItems = $mainsMenuItems.length,
    openIndex = 2;

  var init = function () {
      bindEvents();

      if (validIndex(openIndex)) {
        animateItem($mainsMenuItems.eq(openIndex), true, 700);
      }
    },
    bindEvents = function () {
      $mainsMenuItems.children(".image").click(function () {
        var newIndex = $(this).parent().index();

        checkAndAnimateItem(newIndex);
      });

      $(".buttons").hover(
        function () {
          $(this).addClass("hovered");
        },

        function () {
          $(this).removeClass("hovered");
        }
      );
      $(".buttons").click(function () {
        var newIndex = $(this).index();
        checkAndAnimateItem(newIndex);
      });
    };

  validIndex = function (indexToCheck) {
    return indexToCheck >= 0 && indexToCheck < totalMainsMenuItems;
  };

  (animateItem = function ($item, toOpen, speed) {
    var $colorImage = $item.find(".color"),
      itemParam = toOpen ? { width: "420px" } : { width: "140px" },
      colorImageParam = toOpen ? { left: "0px" } : { left: "140px" };

    $colorImage.animate(colorImageParam, speed);
    $item.animate(itemParam, speed);
  }),
    checkAndAnimateItem = function (indexToCheckAnimate) {
      if (openIndex === indexToCheckAnimate) {
        animateItem($mainsMenuItems.eq(indexToCheckAnimate), false, 250);
        openIndex = -1;
      } else {
        if (validIndex(indexToCheckAnimate)) {
          animateItem($mainsMenuItems.eq(openIndex), false, 250);
          openIndex = indexToCheckAnimate;
          animateItem($mainsMenuItems.eq(indexToCheckAnimate), true, 250);
        }
      }
    };

  init();
});
