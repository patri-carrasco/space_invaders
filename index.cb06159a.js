class e{constructor(e){this.position=e}update(e,t){}draw(e,t){}keyboard_event(e,t){}}var t,i;(i=t||(t={}))[i.SPACE=0]="SPACE",i[i.LEFT=1]="LEFT",i[i.RIGHT=2]="RIGHT";let o={" ":t.SPACE,ArrowLeft:t.LEFT,ArrowRight:t.RIGHT};class n extends e{constructor(e,t,i={w:50,h:50}){super(e),this.keyboardMap=t,this.canyonSize=i,this.canyonColor="green",this.canyonSpeed=15}update(e){}draw(e,t){t.fillStyle=this.canyonColor,t.fillRect(this.position.x,this.position.y,this.canyonSize.w,this.canyonSize.h),t.fill(),t.stroke()}keyboard_event_down(e,i){let o=this.keyboardMap[e];o==t.LEFT?this.position.x-=this.canyonSpeed:o==t.RIGHT?this.position.x+=this.canyonSpeed:o==t.SPACE&&(console.log(o,t.SPACE),this.canyonSpeed=0,i.beginPath(),i.moveTo(this.position.x,this.position.y),i.lineTo(this.position.x,900),i.strokeStyle="#ff0000",i.stroke())}}class s extends e{constructor(e,t={w:50,h:50}){super(e),this.enemySize=t,this.enemyColor="red",this.direction=1,this.enemySpeed=6*this.direction}update(e,t){let i={x:this.position.x+this.enemySpeed,y:this.position.y};((e,t,i)=>e.x<i-t&&e.x>0&&e.y<1024&&e.y>0)(i,this.enemySize.w,t)&&(this.position=i),(this.position.x>=t-this.enemySize.w-this.enemySpeed||this.position.x<=1)&&(this.direction=this.position.x>=t-this.enemySize.w-this.enemySpeed?-1:1,this.enemySpeed=6*this.direction,this.position.y+=50)}draw(e,t){t.fillStyle=this.enemyColor,t.fillRect(this.position.x,this.position.y,this.enemySize.w,this.enemySize.h),t.fill(),t.stroke()}}class h extends e{update(){}keyboard_event(){}draw(e,t){const i=(1/e).toFixed(2);t.font="15px Arial",t.fillStyle="white",t.fillText(`FPS:${i}`,this.position.x,this.position.y)}}window.onload=()=>{var e=document.getElementById("canvas"),t=e.getContext("2d");t.fillStyle="gray",t.fillRect(0,0,e.width,e.height);let i=e.width,d=[new h({x:5,y:15}),new n({x:30,y:965},o),new s({x:1,y:40})],y=0;const r=o=>{let n=(o-y)/1e3;y=o,d.forEach((e=>e.update(n,i))),t.clearRect(0,0,e.width,e.height),t.fillStyle="gray",t.fillRect(0,0,e.width,e.height),d.forEach((e=>{e.draw(n,t)})),window.requestAnimationFrame(r)};window.requestAnimationFrame(r),document.body.addEventListener("keydown",(e=>{d.forEach((i=>{i.keyboard_event_down&&i.keyboard_event_down(e.key,t)}))}))};
//# sourceMappingURL=index.cb06159a.js.map
