// pages/common/picker-box.js
Component({
  /**
   * Component properties
   */
  properties: {
   /**
    * CSS icon class name. E.g. 'icon-profile-grey-36'.
    * See /lib/icon.wxss.
    */
    // TODO:
    // change to iconName, iconSize, and iconColor
    iconClass: {
      type: String,
      value: ''
    },

    /**
     * The values to pick.
     */
    range: {
      type: Array,
      value: ['a', 'b', 'c']
    },

    /**
     * Input box placeholder
     */
    curIndex: {
      type: Number,
      value: 0
    },

    /**
     * The suggestions.
     * Must be { index: xx }
     */
    suggestions: {
      type: Array,
      value: []
    },

    /**
     * The limit of number to display suggestions.
     */
    suggestionsLimit: {
      type: Number,
      value: 4
    }
  },

  /**
   * Component initial data
   */
  data: {
  },

  /**
   * Component methods
   */
  methods: {

    tapSuggestion: function (e) {
      var index = e.currentTarget.dataset.index;
      console.log('select suggestion: ' + this.data.range[index]);
      this.setData({
        curIndex: index,
        suggestions: [],
      });
      this.triggerEvent('suggestionTapEvent', { suggestion: index }, {})
    },

    pickChanged: function (e) {
      this.setData({
        curIndex: e.detail.value
      });
      this.triggerEvent('pickChangedEvent', e.detail, {})
    }
  }
})