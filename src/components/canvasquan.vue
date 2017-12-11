<template>
  <div>
    <div>
      <canvas id="canvas" width="300" height="300"></canvas>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  var draw;
  var preHandler = function(e){e.preventDefault();}
  class Draw {
    constructor(el) {
    	var self = this
      this.el = el
      this.canvas = document.getElementById(this.el)
      this.cxt = this.canvas.getContext('2d')
      this.width = this.cxt.canvas.width
      this.height = this.cxt.canvas.height
      this.r = this.width / 2
      function drawback() {
        self.cxt.save()
        self.cxt.translate(self.r,self.r)
        self.cxt.beginPath()
        self.cxt.lineWidth = 10
        self.cxt.arc(0,0,self.r - 5,0,2*Math.PI,false)
        self.cxt.stroke()
//      时间数字
        self.hournum = [3,4,5,6,7,8,9,10,11,12,1,2]
        self.cxt.font = '18px Arial'
        self.cxt.textAlign = 'center'
        self.cxt.textBaseline = 'middle'
        self.hournum.forEach(function (number,i) {
          var rad = 2 * Math.PI /12 * i;
          var x = Math.cos(rad) * (self.r - 30)
          var y = Math.sin(rad) * (self.r - 30)
          self.cxt.fillText(number,x,y)
        })
//      时间60点
        for(var i = 0 ; i < 60 ; i++){
          var rad = 2 * Math.PI /60 * i;
          var x = Math.cos(rad) * (self.r - 18)
          var y = Math.sin(rad) * (self.r - 18)
          self.cxt.beginPath()
          if(i % 5===0){
            self.cxt.fillStyle = '#000'
            self.cxt.arc(x,y,2,0,2*Math.PI,false)
          }else {
            self.cxt.fillStyle = '#ccc'
            self.cxt.arc(x,y,2,0,2*Math.PI,false)
          }
//        self.cxt.arc(x,y,2,0,2*Math.PI,false)
          self.cxt.fill()
        }
      }


//      时间时针
      function drawhour(hour,min){
        self.cxt.save()
//        console.log(self.cxt)
        self.cxt.beginPath()
        var rad = 2 * Math.PI /12 * hour;
        var mrad = 2 * Math.PI /12/60 * min;
        self.cxt.rotate(rad + mrad)
        self.cxt.lineWidth = 6
        self.cxt.lineCap = 'round'
        self.cxt.moveTo(0,10)
        self.cxt.lineTo(0,-self.r / 2)
        self.cxt.stroke()
        self.cxt.restore()
      }
//      时间分针
      function drawmin(min){
        self.cxt.save()
        self.cxt.beginPath()
        var  rad = 2 * Math.PI /60 * min;
        self.cxt.rotate(rad)
        self.cxt.lineWidth = 3
        self.cxt.lineCap = 'round'
        self.cxt.moveTo(0,10)
        self.cxt.lineTo(0,-self.r + 30)
        self.cxt.stroke()
        self.cxt.restore()
      }
//      时间秒针
      function second(second){
        self.cxt.save()
        self.cxt.beginPath()
        self.cxt.fillStyle = 'red'
        var  rad = 2 * Math.PI /60 * second;
        self.cxt.rotate(rad)
        self.cxt.lineWidth = 3
        self.cxt.lineCap = 'round'
        self.cxt.moveTo(-2,20)
//        self.cxt.lineTo(0,-self.r + 30)
        self.cxt.lineTo(2,20)
        self.cxt.lineTo(1,-self.r+18)
        self.cxt.lineTo(-1,-self.r+18)
        self.cxt.fill()
        self.cxt.restore()
      }
      function drawyuan() {
        self.cxt.beginPath()
        self.cxt.fillStyle = 'white'
        self.cxt.arc(0,0,3,0,2*Math.PI,false)
        self.cxt.fill()
      }
      function d() {
        self.cxt.clearRect(0,0,self.width,self.height)
      	var now =new Date()
        var hour = now.getHours()
        var min = now.getMinutes()
        var sec = now.getSeconds()
        drawback()
        drawhour(hour,min)
        drawmin(min)
        second(sec)
        drawyuan()
        self.cxt.restore()
      }
      d()
      setInterval(d,1000)
//      this.stage_info = canvas.getBoundingClientRect()
//      this.path = {
//        beginX: 0,
//        beginY: 0,
//        endX: 0,
//        endY: 0
//      }
    }
    init(btn) {
    	console.log(btn)
    }
  }
	export default {
		data() {
			return {};
		},
    mounted() {
      draw=new Draw('canvas');
//      draw.init();
    },
		methods: {
    },
		components: {}
	};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
