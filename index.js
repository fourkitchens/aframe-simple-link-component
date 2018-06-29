/* global AFRAME */

if (typeof AFRAME === 'undefined') {
  throw new Error('Component attempted to register before AFRAME was available.');
}

/**
 * Simple Link component for A-Frame.
 */
AFRAME.registerComponent('simple-link', {
  schema: {
    lookAtCamera: {default: 'true', type: 'boolean'},
    href: {default: '', type: 'string'},
    title: {default: '', type: 'string'},
    color: {default: '#fff', type: 'color'},
    titleColor: {default: '#fff', type: 'color'},
    icon: {default: '', type: 'asset'}

  },

  /**
   * Set if component needs multiple instancing.
   */
  multiple: false,

  /**
   * Called once when component is attached. Generally for initial setup.
   */
  init: function () {
    this.navigate = this.navigate.bind(this);
    var el = this.el;
    var textEl;

     el.setAttribute('geometry', {primitive: 'circle', radius: 1.0, segments: 64});

    textEl = this.textEl || document.createElement('a-entity');
    textEl.setAttribute('text', {
      color: this.data.textColor,
      align: 'center',
      font: 'kelsonsans',
      value: this.data.title || this.data.href,
      width: 4
    });
    textEl.setAttribute('position', '0 1.5 0');
    el.appendChild(textEl);
  },

  /**
   * Called when component is attached and when component data changes.
   * Generally modifies the entity based on the data.
   */
  update: function (oldData) { },

  /**
   * Called when a component is removed (e.g., via removeAttribute).
   * Generally undoes all modifications to the entity.
   */
  remove: function () { },

  /**
   * Called on each scene tick.
   */
  // tick: function (t) { },

  /**
   * Called when entity pauses.
   * Use to stop or remove any dynamic or background behavior such as events.
   */
  pause: function () { },

  /**
   * Called when entity resumes.
   * Use to continue or add any dynamic or background behavior such as events.
   */
  play: function () { },

  /**
   * Called when the link is clicked.
   *
   */
  navigate: function () {
    window.location = this.data.href;
  }
});
