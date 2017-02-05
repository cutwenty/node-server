
// 刷新、加载结束，要在回调函数中调用 stopRefresh、stopLoad
// 要使用两个类 down、up
//         .down {
//           transform: rotate(180deg) !important;
//           -webkit-transform: rotate(180deg) !important;
//         }
//         .up {
//           transform: rotate(360deg) !important;
//           -webkit-transform: rotate(360deg) !important;
//         }

(function (window, pullToRefresh) {
  if(typeof module !== "undefined" && module.exports) {
    module.exports = pullToRefresh;
  }else if(typeof define === "function" && (define.amd || define.cmd)) {
    define(pullToRefresh);
  }else {
    window.pullToRefresh = pullToRefresh;
  }
})(window, function (scrollContent, options) {
  var State = {
    NORMAL: 0,
    PULLDOWN: 1,
    CANREFRESH: 2,
    DRAGUP: 3,
    CANLOAD: 4,
    LOADING: 5
  };
  var defaultOptions = {
    pullToRefresh: true,
    dragToLoad: true,
    scrollHead: '.head',
    scrollFoot: '.foot',
    refreshCallBack: function() {},
    loadCallBack: function() {}
  };

  options = $.extend({}, defaultOptions, options);

  var myScroll = scrollContent;
  myScroll.pullOptions = options;

  if (typeof scrollContent === 'string') {
    // 传入选择器时，创建的scroll不提供options
    myScroll = new IScroll(scrollContent, {
      probeType: 3
    });
  }

  var $head;
  var headSpinner;
  var $foot;
  var footSpinner;

  init();

  myScroll.on('scrollEnd', function () {
    if (options.pullToRefresh) {
      onPullToRefresh();
    }
    if (options.dragToLoad) {
      onDragToLoad();
    }
  });

  function init () {
    if (options.pullToRefresh) {
      $head = $(options.scrollHead);
      headSpinner = $head.children('img');
      myScroll.scrollBy(0, -1*$head.height());
      $head.scrollState = State.NORMAL;
      $head.stopRefresh = stopRefresh;
    }
    if (options.dragToLoad) {
      $foot = $(options.scrollFoot);
      footSpinner = $foot.children('img');
      $foot.scrollState = State.NORMAL;
      $foot.stopLoad = stopLoad;
    }

    myScroll.on('scroll', function () {
      var currentY = this.y;
      var maxScrollY = this.maxScrollY - currentY;

      if (options.pullToRefresh && currentY >= 0) {
        ($head.scrollState === State.PULLDOWN) && headSpinner.addClass('up');
        $head.scrollState = State.CANREFRESH;
      } else if (options.pullToRefresh) {
        ($head.scrollState === State.CANREFRESH) && headSpinner.removeClass('up');
        $head.scrollState = State.PULLDOWN;
      }

      if (options.dragToLoad && maxScrollY >= 0) {
        ($foot.scrollState === State.DRAGUP) && footSpinner.addClass('down');
        $foot.scrollState = State.CANLOAD;
      } else if (options.dragToLoad) {
        ($foot.scrollState === State.CANLOAD) && footSpinner.removeClass('down');
        $foot.scrollState = State.DRAGUP;
      }
    });
  }


  function onPullToRefresh () {
    var headOffset = -1*$head.height();
    if ($head.scrollState === State.PULLDOWN && myScroll.y >= 1*headOffset) {
      myScroll.scrollTo(0, headOffset);
      headSpinner.removeClass('up');
    } else if ($head.scrollState === State.CANREFRESH) {
      $head.scrollState = State.LOADING;
      headSpinner.attr('src', '/dayfruit/images/huang/ajax-loader.gif');

      options.refreshCallBack($head);
    }
  }
  function stopRefresh () {
    myScroll.scrollTo(0, -1*$head.height());
    $head.scrollState = State.NORMAL;
    headSpinner.removeClass('up');
    headSpinner.attr('src', '/dayfruit/images/huang/arrow.png');
    myScroll.refresh();
  }

  function onDragToLoad () {
    var maxY = myScroll.maxScrollY - myScroll.y;
    var footHeight = $foot.height();
    if ($foot.scrollState === State.DRAGUP && maxY > -1*footHeight) {
      myScroll.scrollTo(0, myScroll.maxScrollY + footHeight);
      footSpinner.removeClass('down');
    } else if ($foot.scrollState === State.CANLOAD) {
      $foot.scrollState = State.LOADING;
      footSpinner.attr('src', '/dayfruit/images/huang/ajax-loader.gif');

      // ajax
      options.loadCallBack($foot);
    }
  }
  function stopLoad () {
    myScroll.refresh();
    myScroll.scrollTo(0, myScroll.y + $foot.height());
    $foot.scrollState = State.NORMAL;
    footSpinner.removeClass('down');
    footSpinner.attr('src', '/dayfruit/images/huang/arrow.png');
  }

  return myScroll;
});
