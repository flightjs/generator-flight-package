define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var defineComponent = require('flight/lib/component');


  /**
   * Module function
   */

  function <%= _.camelize(name) %>() {
    this.defaultAttrs({

    });

    this.after('initialize', function () {

    });
  }
  
  /**
   * Module exports
   */

  return defineComponent(<%= _.camelize(name) %>);

});
