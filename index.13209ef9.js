class i{constructor(i){this.position=i}update(i,t,e){}draw(i,t){}keyboard_event(i,t){}}var t,e;(e=t||(t={}))[e.SPACE=0]="SPACE",e[e.LEFT=1]="LEFT",e[e.RIGHT=2]="RIGHT";let o={" ":t.SPACE,ArrowLeft:t.LEFT,ArrowRight:t.RIGHT};class s extends i{constructor(i,t,e={w:50,h:50}){super(i),this.keyboardMap=t,this.canyonSize=e,this.canyonColor="white",this.canyonSpeed=15}update(i,t,e){this.position.x>t-this.canyonSize.w&&(this.position.x=t-this.canyonSize.w),this.position.x<=0&&(this.position.x=5)}draw(i,t){t.fillStyle=this.canyonColor,t.fillRect(this.position.x,this.position.y,this.canyonSize.w,this.canyonSize.h),t.fill(),t.stroke()}keyboard_event_down(i,e){let o=this.keyboardMap[i];o==t.LEFT?this.position.x-=this.canyonSpeed:o==t.RIGHT?this.position.x+=this.canyonSpeed:o==t.SPACE&&(this.canyonSpeed=0,e.beginPath(),e.moveTo(this.position.x,this.position.y),e.lineTo(this.position.x,900),e.strokeStyle="#ff0000",e.stroke())}}class n extends i{update(){}keyboard_event(){}draw(i,t){const e=(1/i).toFixed(2);t.font="15px Arial",t.fillStyle="white",t.fillText(`FPS:${e}`,this.position.x,this.position.y)}}class h extends i{constructor(i,t={w:105,h:50}){super(i),this.barrierSize=t,this.barrierColor="green"}update(i,t,e){}draw(i,t){t.fillStyle=this.barrierColor,t.fillRect(this.position.x,this.position.y,this.barrierSize.w,this.barrierSize.h),t.fill(),t.stroke()}}let r;class l extends i{constructor(i,t={w:50,h:50}){super(i),this.enemySize=t,this.enemyColor="red",this.direction=1,this.enemySpeed=2*this.direction}update(i,t,e){let o={x:this.position.x+this.enemySpeed,y:this.position.y};((i,t,e,o)=>i.x<e-t&&i.x>0&&i.y<o&&i.y>0)(o,this.enemySize.w,t,e)&&(this.position=o),(this.position.x>=t-this.enemySize.w-this.enemySpeed||this.position.x<=1)&&(this.direction=this.position.x>=t-this.enemySize.w-this.enemySpeed?-1:1,this.enemySpeed=2*this.direction,this.position.y+=50,this.position.y>=e-300&&(console.log("Perdiste"),this.position.x=1,this.position.y=40))}draw(i,t){t.fillStyle=this.enemyColor,t.fillRect(this.position.x,this.position.y,this.enemySize.w,this.enemySize.h),t.fill(),t.stroke()}}class a{constructor(i){let t=[],e=[];for(let i=0;i<=5;i++)e.push(new h({x:1*i*105+200*i,y:774}));this.barriers=e;for(let i=0;i<=5;i++){t[i]=[];for(let e=0;e<=5;e++)t[i][e]=new l({x:60*i+1,y:60*e+120})}this.matrixEnemy=t}}window.onload=()=>{var i=document.getElementById("canvas"),t=i.getContext("2d");t.fillStyle="gray",t.fillRect(0,0,i.width,i.height);let e=new n({x:5,y:15}),h=new s({x:30,y:965},o);r=new a;let l=[];r.matrixEnemy.forEach((i=>l=[...l,...i]));let y=[e,h,...l,...r.barriers],d=0;const p=e=>{let o=(e-d)/1e3;d=e,y.forEach((t=>t.update(o,i.width,i.height))),t.clearRect(0,0,i.width,i.height),t.fillStyle="gray",t.fillRect(0,0,i.width,i.height),y.forEach((i=>{i.draw(o,t)})),window.requestAnimationFrame(p)};window.requestAnimationFrame(p),document.body.addEventListener("keydown",(i=>{y.forEach((e=>{e.keyboard_event_down&&e.keyboard_event_down(i.key,t)}))}))};
//# sourceMappingURL=index.13209ef9.js.map