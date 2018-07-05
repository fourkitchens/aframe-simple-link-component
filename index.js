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
    image: {default: '', type: 'asset'},
    on: {default: 'click'}
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

     el.setAttribute('geometry', {
       primitive: 'circle',
       radius: 1}
     );
     if (this.data.image) {
       el.setAttribute('material', {
         'src': typeof this.data.image === 'string' ? this.data.image : this.data.image.src,
         'color': this.data.color
       });
     }

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
  update: function (oldData) {
    var data = this.data;
    if (data.on !== oldData.on) {
      this.updateEventListener();
    }
  },

  /**
   * Called when a component is removed (e.g., via removeAttribute).
   * Generally undoes all modifications to the entity.
   */
  remove: function () {
    this.removeEventListener();
  },

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
  play: function () {
    this.updateEventListener();
  },

  updateEventListener: function () {
    var el = this.el;
    if (!el.isPlaying) { return; }
    this.removeEventListener();
    el.addEventListener(this.data.on, this.navigate);
  },

  removeEventListener: function () {
    var on = this.data.on;
    if (!on) { return; }
    this.el.removeEventListener(on, this.navigate);
  },

  /**
   * Called when the link is clicked.
   *
   */
  navigate: function () {
    window.location = this.data.href;
  }
});
