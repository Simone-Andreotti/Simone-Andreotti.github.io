import{e as Ae}from"./strega_bg.a0dc8f16.js";import{V as me,M as Le,P as Ce,G as Se,c as ke,d as De,F as de,g as Oe,D as Re,T as Fe,L as Ue,f as D,A as We,i as Ke,C as He,j as Ne,k as we,r as oe,e as O,W as Xe,s as Ye,m as Ge,E as ve,U as Je,n as _e,o as Ve,S as qe,p as Qe,q as Ze,t as $e}from"./Lensflare.fbfcbbf5.js";let ce=!1;var b=0;sessionStorage.getItem("save")?(ce=sessionStorage.getItem("save"),b=JSON.parse(sessionStorage.getItem("save")).graphics):ce=!1;sessionStorage.getItem("graphics")&&(b=sessionStorage.getItem("graphics"));var te=0,ne=0;sessionStorage.getItem("difficulty")&&(te=sessionStorage.getItem("difficulty"));sessionStorage.getItem("punteggio")&&(ne=sessionStorage.getItem("punteggio"));let e,c,h,u,be,z,ae,ie,se,F,le,ee=100,x=ee,L=4,U=!1,W=!1,he=performance.now();const p=new me;let T=!0;var A=1,fe=1,ue=1,V=!1,q=!1,Q=!1,Z=!1,K=!1;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(K=!0);const je=new Le({color:"black"}),$={},R=1,Ee=new Qe;Ee.set(R);e=new Ce(60,window.innerWidth/window.innerHeight,1,1e6);var n=[];for(var i=0;i<L;i++)n[i]=new Se,n[i].outer=80,n[i].inner=50,n[i].mixer;var J=new me(0,0,-80),B=new Se,f=[];for(var i=0;i<L;i++)f[i]=document.getElementById("planet"+i),f[i].open=!1;var I=!1,re=!1;const j=document.getElementById("crossair"),ye=document.getElementById("crossair-text"),et=document.getElementById("commandList");tt();ze();function tt(){const o=new Ze;o.onLoad=function(){document.getElementById("preloader").style.display="none",ce&&dt(sessionStorage.getItem("save"))},e.position.z=360,e.position.y=30,e.position.x=-60,e.rotation.x=-.4,e.rotation.order="YXZ",c=new ke,le=new De(o).load(["model/skybox/1.png","model/skybox/2.png","model/skybox/3.png","model/skybox/4.png","model/skybox/5.png","model/skybox/6.png"]),c.background=le,c.fog=new de(14524416,.001),u=new Oe(e,document.body);const l=document.getElementById("blocker"),w=document.getElementById("startButton"),y=document.getElementById("menu"),v=document.getElementById("pause");w.addEventListener("click",function(){K?(l.classList.add("transparent"),y.classList.add("reduce"),v.classList.add("reduce"),j.classList.remove("display"),T=!0,document.getElementById("esc").style.display=""):u.lock();for(var t=0;t<L;t++)f[t].classList.add("reduce"),f[t].open=!1}),u.addEventListener("lock",function(){l.classList.add("transparent"),y.classList.add("reduce"),v.classList.add("reduce"),j.classList.remove("display"),T=!0}),u.addEventListener("unlock",function(){l.classList.remove("transparent"),v.classList.remove("reduce"),I=!1;for(var t=0;t<L;t++)if(f[t].open){I=!0;break}I||y.classList.remove("reduce"),j.classList.add("display"),T=!1}),c.add(u.getObject());const r=function(t){switch(t.code){case"KeyQ":case"KeyP":u.unlock();break;case"ArrowUp":case"KeyW":U=!0;break;case"ArrowDown":case"KeyS":W=!0;break;case"KeyE":x=200*A;break;case"KeyC":et.classList.toggle("activemanual");break}},S=function(t){switch(t.code){case"ArrowUp":case"KeyW":U=!1;break;case"ArrowDown":case"KeyS":W=!1;break;case"KeyE":x=ee*A;break}},P=16777215,Ie=1,m=new Re(P,Ie);if(m.castShadow=!0,m.position.set(600,2e3,800),m.target.position.set(0,0,0),!K&&b!=0){m.shadow.bias=-.002,m.shadow.radius=5,m.shadow.mapSize.width=4e3,m.shadow.mapSize.height=4e3,c.add(m),c.add(m.target);const t=m.shadow.camera;t.near=1e3,t.far=3e3,t.left=-850,t.right=850,t.top=850,t.bottom=-850;const a=new Fe,s=a.load("model/planet1/lensflare0.png"),ge=a.load("model/planet1/lensflare3.png"),M=new Ue;M.addElement(new D(ge,700,.3)),M.addElement(new D(s,1250,.6,m.color)),M.addElement(new D(s,520,.7)),M.addElement(new D(ge,520,.8)),M.addElement(new D(s,400,1,m.color)),m.add(M)}const Be=new We(1052688);c.add(Be);const Pe=new Ke(800,50,50),pe=new He;pe.setHex(16100386);const Me=new Le({color:pe}),C=new Ne(Pe,Me);C.position.y=2e3,C.position.x=600,C.position.z=800,C.layers.enable(R),B.add(m),B.add(C),c.add(B);var g=0;let H;const k=new we(o);k.load("model/planet1/surface.glb",function(t){H=t.scene,c.add(H),H.traverse(a=>{a.name==="Landscape"&&(a.castShadow=!0,a.receiveShadow=!0),a.name==="Cube"&&a.scale.set(50,50,50)}),H.traverse(a=>{a.isMesh&&(a.material.roughness=.8,a.material.needUpdate=!0)})},void 0,function(t){console.error(t)});let N;new we(o).load("model/planet1/totem1.glb",function(t){N=t.scene,n[0].mixer=new oe(t.scene),n[0].mixer.clipAction(t.animations[0]).play();const a=new O(16777215,1,150,5);a.position.set(11,40,0),N.add(a),n[0].inner=35,n[0].outer=90,n[0].add(N),c.add(n[0]),n[0].position.set(-190,10,-160),n[0].rotation.y=5.82,g=0,N.traverse(s=>{s.castShadow!==void 0&&(g!=11&&(s.castShadow=!0),s.receiveShadow=!0,g++),s.name.includes("Pyramid")&&(s.layers.enable(R),s.receiveShadow=!1)})},void 0,function(t){console.error(t)});let X;k.load("model/planet1/totem1.glb",function(t){X=t.scene,n[1].inner=35,n[1].outer=90;const a=new O(16777215,1,150,5);a.position.set(11,40,0),X.add(a),n[1].mixer=new oe(t.scene),n[1].mixer.clipAction(t.animations[0]).play(),n[1].add(X),n[1].position.set(190,10,-160),n[1].rotation.y=3.68,c.add(n[1]),g=0,X.traverse(s=>{s.castShadow!==void 0&&(g!=11&&(s.castShadow=!0),s.receiveShadow=!0,g++),s.name.includes("Pyramid")&&(s.layers.enable(R),s.receiveShadow=!1)})},void 0,function(t){console.error(t)});let E;k.load("model/planet1/platform.glb",function(t){E=t.scene,E.position.z=-80,E.position.y=-9.5,E.rotation.y=5.78,c.add(E),E.traverse(a=>{a.castShadow!==void 0&&(a.castShadow=!0,a.receiveShadow=!0)}),E.traverse(a=>{a.isMesh&&(a.material.roughness=.8,a.material.needUpdate=!0)})},void 0,function(t){console.error(t)});let Y;k.load("model/ship.glb",function(t){Y=t.scene,n[2].inner=87,n[2].outer=140;const a=new O(16777215,1,150,5);a.position.set(0,10,0),Y.add(a),n[2].add(Y),n[2].position.set(-220,5,320),n[2].rotation.y=.2,c.add(n[2]),g=0,Y.traverse(s=>{s.castShadow!==void 0&&(g!=27&&(s.castShadow=!0),s.receiveShadow=!0,g++)})},void 0,function(t){console.error(t)});let G;k.load("model/planet1/totem1.glb",function(t){G=t.scene,n[3].inner=35,n[3].outer=90;const a=new O(16777215,1,150,5);a.position.set(11,40,0),G.add(a),n[3].mixer=new oe(t.scene),n[3].mixer.clipAction(t.animations[0]).play(),n[3].add(G),n[3].position.set(0,10,-285),n[3].rotation.y=-Math.PI/2,c.add(n[3]),g=0,G.traverse(s=>{s.castShadow!==void 0&&(g!=11&&(s.castShadow=!0),s.receiveShadow=!0,g++),s.name.includes("Pyramid")&&(s.layers.enable(R),s.receiveShadow=!1)})},void 0,function(t){console.error(t)}),window.addEventListener("click",function(){for(var t=0;t<L;t++)f[t].near&&T&&(u.unlock(),f[t].classList.remove("reduce"),f[t].open=!0)}),document.addEventListener("keydown",r),document.addEventListener("keyup",S),h=new Xe({antialias:!0,preserveDrawingBuffer:!0}),h.setPixelRatio(window.devicePixelRatio),h.setSize(window.innerWidth,window.innerHeight),h.shadowMap.enabled=!0,h.shadowMap.type=Ye,document.body.appendChild(h.domElement),ae=new Ge(c,e),z=new ve(h),z.renderToScreen=!1,z.addPass(ae),ie=new Je(new _e(window.innerWidth,window.innerHeight),1.2,.1,.1),ie.threshold=.2,z.addPass(ie),se=new Ve(new qe({uniforms:{baseTexture:{value:null},bloomTexture:{value:z.renderTarget2.texture}},vertexShader:document.getElementById("vertexshaderB").textContent,fragmentShader:document.getElementById("fragmentshaderB").textContent,defines:{}}),"baseTexture"),se.needsSwap=!0,F=new ve(h),F.addPass(ae),F.addPass(se);const Te=new O(16777215,1,120,3);e.add(Te),window.addEventListener("resize",nt),be=new $e}function nt(){e.aspect=window.innerWidth/window.innerHeight,e.updateProjectionMatrix(),h.setSize(window.innerWidth,window.innerHeight),z.setSize(window.innerWidth,window.innerHeight),F.setSize(window.innerWidth,window.innerHeight)}var ot=1e3/60,_=0;function ze(){Date.now()>=_&&(st(),b==0?h.render(c,e):(c.fog=new de(0,6e-4),c.background="",c.traverse(at),z.render(),c.fog=new de(14524416,.001),c.background=le,c.traverse(it),F.render()),_+=ot,Date.now()>=_&&(_=Date.now())),requestAnimationFrame(ze)}function at(o){o.isMesh&&Ee.test(o.layers)===!1&&($[o.uuid]=o.material,o.material=je)}function it(o){$[o.uuid]&&(o.material=$[o.uuid],delete $[o.uuid])}function st(){const o=performance.now();var d=new me;if(e.getWorldDirection(d),u.isLocked===!0||K){const r=(o-he)/1e3;U&&(p.x=x*d.x,p.z=x*d.z),W&&(p.x=-x*d.x,p.z=-x*d.z),p.x-=p.x*10*r,p.z-=p.z*10*r,u.getObject().position.x+=p.x*r,u.getObject().position.z+=p.z*r;var l=u.getObject().position.x,w=u.getObject().position.z;l<-470&&(p.x=0,u.getObject().position.x=-470),l>280&&(p.x=0,u.getObject().position.x=280),w<-450&&(p.z=0,u.getObject().position.z=-450),w>470&&(p.z=0,u.getObject().position.z=470)}B.rotation.z+=1e-4;let y=be.getDelta();for(i=0;i<L;i++){n[i].mixer&&n[i].mixer.update(y);{var v=e.position.distanceTo(n[i].position);v<n[i].outer?(f[i].near=!0,v<n[i].inner+5?(x=0,A=0,e.position.z<n[i].position.z&&(e.position.z-=2),e.position.z>n[i].position.z&&(e.position.z+=2),e.position.x<n[i].position.x&&(e.position.x-=2),e.position.x>n[i].position.x&&(e.position.x+=2)):(x=ee,A=1)):f[i].near=!1}}for(e.position.z<90&&e.position.distanceTo(J)<260&&e.position.distanceTo(J)>230?(x=0,A=0,e.position.distanceTo(J)<245&&(e.position.z<0&&(e.position.z+=.5),e.position.z>0&&(e.position.z-=.5),e.position.x<0&&(e.position.x+=.5),e.position.x>0&&(e.position.x-=.5)),e.position.distanceTo(J)>=245&&(e.position.z<0&&(e.position.z-=.5),e.position.z>0&&(e.position.z+=.5),e.position.x<0&&(e.position.x-=.5),e.position.x>0&&(e.position.x+=.5))):(x=ee,A=1),re=!1,i=0;i<L;i++)if(f[i].near){re=!0;break}re?ye.classList.add("active"):ye.classList.remove("active"),V&&(e.rotation.y+=.01*fe),q&&(e.rotation.y-=.01*fe),Q&&(e.rotation.x+=.01*ue),Z&&(e.rotation.x-=.01*ue),he=o}if(K){let o=function(){blocker.classList.remove("transparent"),pause.classList.remove("reduce"),I=!1;for(var r=0;r<L;r++){if(f[r].open){I=!0;break}if(f[r].near){f[r].classList.remove("reduce"),I=!0;break}}I||menu.classList.remove("reduce"),document.getElementById("esc").style.display="none",j.classList.add("display"),T=!1};document.getElementById("mobile").style.display="block",document.getElementById("commandList").style.display="none",document.getElementById("esc").addEventListener("click",o),document.getElementById("crossair").addEventListener("touchstart",function(){for(var r=0;r<L;r++)f[r].near&&T&&(f[r].classList.remove("reduce"),f[r].open=!0,o())});let d=document.getElementById("avanti"),l=document.getElementById("indietro");d.addEventListener("touchstart",function(){U=!0}),d.addEventListener("touchend",function(){U=!1}),l.addEventListener("touchstart",function(){W=!0}),l.addEventListener("touchend",function(){W=!1});const w=document.body;let y,v;w.addEventListener("touchstart",r=>{y=r.touches[0].clientX,v=r.touches[0].clientY}),w.addEventListener("touchmove",r=>{let S,P;S=r.changedTouches[0].clientX-y,P=r.changedTouches[0].clientY-v,P<-20?Q=!0:Q=!1,P>20?Z=!0:Z=!1,S<-20?V=!0:V=!1,S>20?q=!0:q=!1,fe=Math.abs(S/50),ue=Math.abs(P/50)}),w.addEventListener("touchend",r=>{Q=!1,Z=!1,V=!1,q=!1})}document.getElementById("graph1").addEventListener("click",function(){var o=window.location.pathname;sessionStorage.setItem("graphics",0),window.location.href=o});document.getElementById("graph2").addEventListener("click",function(){var o=window.location.pathname;sessionStorage.setItem("graphics",1),window.location.href=o});b==0?document.getElementById("graph1").style.borderColor="green":document.getElementById("graph2").style.borderColor="green";document.getElementById("create-save").addEventListener("click",function(){let o=h.domElement.toDataURL("image/png",1);sessionStorage.setItem("img",o),document.getElementsByTagName("canvas")[0].toBlob(function(l){let w=new FileReader;w.readAsArrayBuffer(l),w.addEventListener("load",function(y){let v=y.target.result;const r=new Int8Array(v),S=Ae(r,xe(),"png");rt([S],"png")})},"image/png",1),sessionStorage.setItem("save",xe())});function rt(o,d){var l=window.document.createElement("a");l.href=window.URL.createObjectURL(new Blob(o)),l.download="save."+d,document.body.appendChild(l),l.click(),document.body.removeChild(l)}function xe(){var o=JSON.stringify({page:window.location.pathname,graphics:b,cameraPosition:{x:e.position.x,y:e.position.y,z:e.position.z},cameraRotation:{x:e.rotation.x,y:e.rotation.y,z:e.rotation.z},sun:B.rotation.z,difficulty:te,punteggio:ne,position:1});return o}function dt(o){var d=JSON.parse(o);sessionStorage.getItem("graphics")||(b=d.graphics),console.log(d.position),d.position!=0&&(e.position.x=d.cameraPosition.x,e.position.y=d.cameraPosition.y,e.position.z=d.cameraPosition.z,e.rotation.x=d.cameraRotation.x,e.rotation.y=d.cameraRotation.y,e.rotation.z=d.cameraRotation.z),B.rotation.z=d.sun,sessionStorage.getItem("difficulty")||(te=d.difficulty),sessionStorage.getItem("punteggio")||(ne=d.punteggio-1)}window.onbeforeunload=function(){sessionStorage.setItem("img",!1);var o=JSON.stringify({page:"/space.html",graphics:b,sun:B.rotation.z,difficulty:te,punteggio:ne,position:1});sessionStorage.setItem("save",o)};
