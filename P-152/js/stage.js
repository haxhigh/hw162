AFRAME.registerComponent('stage', {
    schema: {
      radius:{type:"number",default:50},
      height:{type:"number",default:3}
    },

    init: function () {
      this.el.setAttribute("geometry",{
          primitive:"cylinder",
          radius:this.data.radius,
          height:this.data.height
      })
      this.el.setAttribute("material",{color:"blue"})
    },

    update: function () {
      // Do something when component's data is updated.
    },

    remove: function () {
      // Do something the component or its entity is detached.
    },

    tick: function (time, timeDelta) {
      // Do something on every scene tick or frame.
    }
});
