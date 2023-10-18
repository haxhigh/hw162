AFRAME.registerComponent('car', {
    schema: {
      model:{type:"string",default:"../models/CAR.glb"},
      clickNum:{type:"number",default: 0}
    },
    init: function(){
      console.log("car")
      this.el.setAttribute("gltf-model",this.data.model)
      const position = {x:0 ,y:-20,z:0}
      const rotation = {x:0 , y:-100,z:0}
      this.el.setAttribute("position",position)
      this.el.setAttribute("rotation",rotation)
    },
    update:function(){
      window.addEventListener("click",e=>{
        this.data.clickNum = this.data.clickNum + 1
        if(this.data.clickNum ===0){
          const rotation = {x:0,y:0,z:0}
        }
        if(this.data.clickNum === 1){
          const rotation = {x:0,y:90,z:0}
          this.el.setAttribute("rotation",rotation)
        }
        if(this.data.clickNum === 2){
          const rotation = {x:0,y:180,z:0}
          this.el.setAttribute("rotation",rotation)
        }
        if(this.data.clickNum === 3){
          const rotation = {x:0,y:270,z:0}
          this.el.setAttribute("rotation",rotation)
        }
        if(this.data.clickNum === 4){
          this.data.clickNum = this.data.clickNum - this.data.clickNum
        }
        console.log(this.data.clickNum)

      })
    }
  }
);
