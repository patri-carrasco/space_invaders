class i{constructor(i){this.position=i}update(i,t,e){}draw(i,t){}keyboard_event(i,t){}}var t,e;(e=t||(t={}))[e.SPACE=0]="SPACE",e[e.LEFT=1]="LEFT",e[e.RIGHT=2]="RIGHT";let o={" ":t.SPACE,ArrowLeft:t.LEFT,ArrowRight:t.RIGHT};class s extends i{constructor(i,t,e={w:50,h:50}){super(i),this.keyboardMap=t,this.canyonSize=e,this.canyonColor="green",this.canyonSpeed=15}update(i,t,e){this.position.x>t-this.canyonSize.w&&(this.position.x=t-this.canyonSize.w),this.position.x<=0&&(this.position.x=5)}draw(i,t){t.fillStyle=this.canyonColor,t.fillRect(this.position.x,this.position.y,this.canyonSize.w,this.canyonSize.h),t.fill(),t.stroke()}keyboard_event_down(i,e){let o=this.keyboardMap[i];o==t.LEFT?this.position.x-=this.canyonSpeed:o==t.RIGHT?this.position.x+=this.canyonSpeed:o==t.SPACE&&(console.log(o,t.SPACE),this.canyonSpeed=0,e.beginPath(),e.moveTo(this.position.x,this.position.y),e.lineTo(this.position.x,900),e.strokeStyle="#ff0000",e.stroke())}}class n extends i{constructor(i,t={w:50,h:50}){super(i),this.enemySize=t,this.enemyColor="red",this.direction=1,this.enemySpeed=6*this.direction}update(i,t,e){let o={x:this.position.x+this.enemySpeed,y:this.position.y};((i,t,e,o)=>i.x<e-t&&i.x>0&&i.y<o&&i.y>0)(o,this.enemySize.w,t,e)&&(this.position=o),(this.position.x>=t-this.enemySize.w-this.enemySpeed||this.position.x<=1)&&(this.direction=this.position.x>=t-this.enemySize.w-this.enemySpeed?-1:1,this.enemySpeed=6*this.direction,this.position.y+=50,this.position.y>=e-300&&(console.log("Perdiste"),this.position.x=1,this.position.y=40))}draw(i,t){t.fillStyle=this.enemyColor,t.fillRect(this.position.x,this.position.y,this.enemySize.w,this.enemySize.h),t.fill(),t.stroke()}}class h extends i{update(){}keyboard_event(){}draw(i,t){const e=(1/i).toFixed(2);t.font="15px Arial",t.fillStyle="white",t.fillText(`FPS:${e}`,this.position.x,this.position.y)}}window.onload=()=>{var i=document.getElementById("canvas"),t=i.getContext("2d");t.fillStyle="gray",t.fillRect(0,0,i.width,i.height);let e=[new h({x:5,y:15}),new s({x:30,y:965},o),new n({x:1,y:40}),new s({x:30,y:i.height-250},o)],y=0;const d=o=>{let s=(o-y)/1e3;y=o,e.forEach((t=>t.update(s,i.width,i.height))),t.clearRect(0,0,i.width,i.height),t.fillStyle="gray",t.fillRect(0,0,i.width,i.height),e.forEach((i=>{i.draw(s,t)})),window.requestAnimationFrame(d)};window.requestAnimationFrame(d),document.body.addEventListener("keydown",(i=>{e.forEach((e=>{e.keyboard_event_down&&e.keyboard_event_down(i.key,t)}))}))};
//# sourceMappingURL=index.4f915dcf.js.map