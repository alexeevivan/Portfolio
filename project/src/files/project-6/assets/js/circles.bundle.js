(()=>{const t=document.getElementById("circles"),e=t.getContext("2d"),l=t.width=document.getElementById("circles").clientWidth,i=t.height=document.getElementById("circles").clientHeight,n="rgba(4, 7, 15, 1)",o="rgba(4, 7, 15, 1)";let r=[];for(let t=0;t<18;t++)r.push(new a);function a(){this.x=Math.random()*l,this.y=Math.random()*i,this.vx=.2+.5*Math.random(),this.vy=-this.vx,this.r=3+2*Math.random(),this.color="rgba(22, 61, 79,"+(.5*Math.random()+.5).toFixed(1)+")"}setInterval((function(){const t=e.createLinearGradient(0,0,l,i);t.addColorStop(0,n),t.addColorStop(1,o),e.fillStyle=t,e.fillRect(0,0,l,i);for(let t=0;t<r.length;t++){let n=r[t];e.beginPath(),e.arc(n.x,n.y,n.r,2*Math.PI,!1),e.fillStyle=n.color,e.fill(),n.x-=n.vx,n.y+=n.vy,n.x<-20&&(n.x=l+20),n.y<-20&&(n.y=i+20)}}),10)})();