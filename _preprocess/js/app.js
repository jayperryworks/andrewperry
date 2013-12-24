(function($) {
  
  // ================================================================
  // andrewperry behaviors
  // ================================================================

  var andrewperry = { // namespace setup

    config : {

      // Settings
      // -> global vars go here
      // --------------------------------------------------------------- 

      // media query breakpoints
      breakpoints : ["30em", "48em", "80em", "90em"]

    },

    // Setup
    // ---------------------------------------------------------------
    init : function(config) {
      $.extend(andrewperry.config, config);

    },

    // Methods
    // ---------------------------------------------------------------
    equalHeight : function(el) {
      var currentShortest = 10000000000;

      // find the tallest DIV in the row, and set the heights of all of the DIVs to match it.
      el.each(function() {
        // "caching"
        var $el = $(this);
        currentShortest = (currentShortest > $el.height()) ? ($el.height()) : (currentShortest);

        // console.log(currentShortest + " | " + $el.height() + " | " + getOriginalHeight($el));
      });
      el.parent().height(currentShortest);
    }
    
  };

  
  $(document).ready(function() {
    // andrewperry.init();
    andrewperry.equalHeight($(".tile-thumb img"));
  });

  $(window).resize(function() {
    andrewperry.equalHeight($(".tile-thumb img"));
  });

})(jQuery);
