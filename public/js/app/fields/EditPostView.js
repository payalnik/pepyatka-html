define(["app/app", "ember"], function(App, Ember) {
  "use strict";

  App.EditPostView = Ember.TextArea.extend(Ember.TargetActionSupport, {
    classNames: ['edit-post-area'],
    valueBinding: 'parentView.controller.body',
    action: 'update',

    keyPress: function (e) {
      if (e.which === 13) {
        return false
      }
    },

    becomeFocused: function() {
      this.$().focus()
    }.on('didInsertElement')
  })
})
