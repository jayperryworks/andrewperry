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

    
  };

  
  $(window).load(function() {
    andrewperry.init();
  });
})(jQuery);
