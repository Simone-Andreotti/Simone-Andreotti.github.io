var ot=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);import{e as at}from"./strega_bg.a0dc8f16.js";import{V as C,M as me,P as it,G as Ue,B as rt,a as Ke,S as Ge,C as ge,b as st,c as lt,d as dt,e as je,T as ct,L as ut,f as q,g as ft,A as pt,h as X,i as De,j as Fe,k as A,R,l as z,W as ht,m as mt,E as We,U as gt,n as yt,o as vt,p as wt,q as bt}from"./Lensflare.fbfcbbf5.js";var Ft=ot((Ze,xe)=>{var Le=function(){this._tweens={},this._tweensAddedDuringUpdate={}};Le.prototype={getAll:function(){return Object.keys(this._tweens).map(function(e){return this._tweens[e]}.bind(this))},removeAll:function(){this._tweens={}},add:function(e){this._tweens[e.getId()]=e,this._tweensAddedDuringUpdate[e.getId()]=e},remove:function(e){delete this._tweens[e.getId()],delete this._tweensAddedDuringUpdate[e.getId()]},update:function(e,t){var o=Object.keys(this._tweens);if(o.length===0)return!1;for(e=e!==void 0?e:u.now();0<o.length;){this._tweensAddedDuringUpdate={};for(var i=0;i<o.length;i++){var r=this._tweens[o[i]];r&&r.update(e)===!1&&(r._isPlaying=!1,t||delete this._tweens[o[i]])}o=Object.keys(this._tweensAddedDuringUpdate)}return!0}};var u=new Le;u.Group=Le,u._nextId=0,u.nextId=function(){return u._nextId++},typeof self>"u"&&typeof process<"u"&&process.hrtime?u.now=function(){var e=process.hrtime();return 1e3*e[0]+e[1]/1e6}:typeof self<"u"&&self.performance!==void 0&&self.performance.now!==void 0?u.now=self.performance.now.bind(self.performance):Date.now!==void 0?u.now=Date.now:u.now=function(){return new Date().getTime()},u.Tween=function(e,t){this._object=e,this._valuesStart={},this._valuesEnd={},this._valuesStartRepeat={},this._duration=1e3,this._repeat=0,this._repeatDelayTime=void 0,this._yoyo=!1,this._isPlaying=!1,this._reversed=!1,this._delayTime=0,this._startTime=null,this._easingFunction=u.Easing.Linear.None,this._interpolationFunction=u.Interpolation.Linear,this._chainedTweens=[],this._onStartCallback=null,this._onStartCallbackFired=!1,this._onUpdateCallback=null,this._onCompleteCallback=null,this._onStopCallback=null,this._group=t||u,this._id=u.nextId()},u.Tween.prototype={getId:function(){return this._id},isPlaying:function(){return this._isPlaying},to:function(e,t){return this._valuesEnd=Object.create(e),t!==void 0&&(this._duration=t),this},duration:function(e){return this._duration=e,this},start:function(e){for(var t in this._group.add(this),this._isPlaying=!0,this._onStartCallbackFired=!1,this._startTime=e!==void 0?typeof e=="string"?u.now()+parseFloat(e):e:u.now(),this._startTime+=this._delayTime,this._valuesEnd){if(this._valuesEnd[t]instanceof Array){if(this._valuesEnd[t].length===0)continue;this._valuesEnd[t]=[this._object[t]].concat(this._valuesEnd[t])}this._object[t]!==void 0&&(this._valuesStart[t]=this._object[t],!(this._valuesStart[t]instanceof Array)&&(this._valuesStart[t]*=1),this._valuesStartRepeat[t]=this._valuesStart[t]||0)}return this},stop:function(){return this._isPlaying&&(this._group.remove(this),this._isPlaying=!1,this._onStopCallback!==null&&this._onStopCallback(this._object),this.stopChainedTweens()),this},end:function(){return this.update(1/0),this},stopChainedTweens:function(){for(var e=0,t=this._chainedTweens.length;e<t;e++)this._chainedTweens[e].stop()},group:function(e){return this._group=e,this},delay:function(e){return this._delayTime=e,this},repeat:function(e){return this._repeat=e,this},repeatDelay:function(e){return this._repeatDelayTime=e,this},yoyo:function(e){return this._yoyo=e,this},easing:function(e){return this._easingFunction=e,this},interpolation:function(e){return this._interpolationFunction=e,this},chain:function(){return this._chainedTweens=arguments,this},onStart:function(e){return this._onStartCallback=e,this},onUpdate:function(e){return this._onUpdateCallback=e,this},onComplete:function(e){return this._onCompleteCallback=e,this},onStop:function(e){return this._onStopCallback=e,this},update:function(e){var t,o,i;if(e<this._startTime)return!0;for(t in this._onStartCallbackFired===!1&&(this._onStartCallback!==null&&this._onStartCallback(this._object),this._onStartCallbackFired=!0),o=(e-this._startTime)/this._duration,o=this._duration===0||1<o?1:o,i=this._easingFunction(o),this._valuesEnd)if(this._valuesStart[t]!==void 0){var r=this._valuesStart[t]||0,a=this._valuesEnd[t];a instanceof Array?this._object[t]=this._interpolationFunction(a,i):(typeof a=="string"&&(a=a.charAt(0)==="+"||a.charAt(0)==="-"?r+parseFloat(a):parseFloat(a)),typeof a=="number"&&(this._object[t]=r+(a-r)*i))}if(this._onUpdateCallback!==null&&this._onUpdateCallback(this._object),o!==1)return!0;if(0<this._repeat){for(t in isFinite(this._repeat)&&this._repeat--,this._valuesStartRepeat){if(typeof this._valuesEnd[t]=="string"&&(this._valuesStartRepeat[t]=this._valuesStartRepeat[t]+parseFloat(this._valuesEnd[t])),this._yoyo){var f=this._valuesStartRepeat[t];this._valuesStartRepeat[t]=this._valuesEnd[t],this._valuesEnd[t]=f}this._valuesStart[t]=this._valuesStartRepeat[t]}return this._yoyo&&(this._reversed=!this._reversed),this._repeatDelayTime!==void 0?this._startTime=e+this._repeatDelayTime:this._startTime=e+this._delayTime,!0}this._onCompleteCallback!==null&&this._onCompleteCallback(this._object);for(var g=0,oe=this._chainedTweens.length;g<oe;g++)this._chainedTweens[g].start(this._startTime+this._duration);return!1}},u.Easing={Linear:{None:function(e){return e}},Quadratic:{In:function(e){return e*e},Out:function(e){return e*(2-e)},InOut:function(e){return(e*=2)<1?.5*e*e:-.5*(--e*(e-2)-1)}},Cubic:{In:function(e){return e*e*e},Out:function(e){return--e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e:.5*((e-=2)*e*e+2)}},Quartic:{In:function(e){return e*e*e*e},Out:function(e){return 1- --e*e*e*e},InOut:function(e){return(e*=2)<1?.5*e*e*e*e:-.5*((e-=2)*e*e*e-2)}},Quintic:{In:function(e){return e*e*e*e*e},Out:function(e){return--e*e*e*e*e+1},InOut:function(e){return(e*=2)<1?.5*e*e*e*e*e:.5*((e-=2)*e*e*e*e+2)}},Sinusoidal:{In:function(e){return 1-Math.cos(e*Math.PI/2)},Out:function(e){return Math.sin(e*Math.PI/2)},InOut:function(e){return .5*(1-Math.cos(Math.PI*e))}},Exponential:{In:function(e){return e===0?0:Math.pow(1024,e-1)},Out:function(e){return e===1?1:1-Math.pow(2,-10*e)},InOut:function(e){return e===0?0:e===1?1:(e*=2)<1?.5*Math.pow(1024,e-1):.5*(2-Math.pow(2,-10*(e-1)))}},Circular:{In:function(e){return 1-Math.sqrt(1-e*e)},Out:function(e){return Math.sqrt(1- --e*e)},InOut:function(e){return(e*=2)<1?-.5*(Math.sqrt(1-e*e)-1):.5*(Math.sqrt(1-(e-=2)*e)+1)}},Elastic:{In:function(e){return e===0?0:e===1?1:-Math.pow(2,10*(e-1))*Math.sin(5*(e-1.1)*Math.PI)},Out:function(e){return e===0?0:e===1?1:Math.pow(2,-10*e)*Math.sin(5*(e-.1)*Math.PI)+1},InOut:function(e){return e===0?0:e===1?1:(e*=2)<1?-.5*Math.pow(2,10*(e-1))*Math.sin(5*(e-1.1)*Math.PI):.5*Math.pow(2,-10*(e-1))*Math.sin(5*(e-1.1)*Math.PI)+1}},Back:{In:function(e){return e*e*(2.70158*e-1.70158)},Out:function(e){return--e*e*(2.70158*e+1.70158)+1},InOut:function(e){var t=2.5949095;return(e*=2)<1?e*e*((1+t)*e-t)*.5:.5*((e-=2)*e*((1+t)*e+t)+2)}},Bounce:{In:function(e){return 1-u.Easing.Bounce.Out(1-e)},Out:function(e){return e<1/2.75?7.5625*e*e:e<2/2.75?7.5625*(e-=1.5/2.75)*e+.75:e<2.5/2.75?7.5625*(e-=2.25/2.75)*e+.9375:7.5625*(e-=2.625/2.75)*e+.984375},InOut:function(e){return e<.5?.5*u.Easing.Bounce.In(2*e):.5*u.Easing.Bounce.Out(2*e-1)+.5}}},u.Interpolation={Linear:function(e,t){var o=e.length-1,i=o*t,r=Math.floor(i),a=u.Interpolation.Utils.Linear;return t<0?a(e[0],e[1],i):1<t?a(e[o],e[o-1],o-i):a(e[r],e[o<r+1?o:r+1],i-r)},Bezier:function(e,t){for(var o=0,i=e.length-1,r=Math.pow,a=u.Interpolation.Utils.Bernstein,f=0;f<=i;f++)o+=r(1-t,i-f)*r(t,f)*e[f]*a(i,f);return o},CatmullRom:function(e,t){var o=e.length-1,i=o*t,r=Math.floor(i),a=u.Interpolation.Utils.CatmullRom;return e[0]===e[o]?(t<0&&(r=Math.floor(i=o*(1+t))),a(e[(r-1+o)%o],e[r],e[(r+1)%o],e[(r+2)%o],i-r)):t<0?e[0]-(a(e[0],e[0],e[1],e[1],-i)-e[0]):1<t?e[o]-(a(e[o],e[o],e[o-1],e[o-1],i-o)-e[o]):a(e[r?r-1:0],e[r],e[o<r+1?o:r+1],e[o<r+2?o:r+2],i-r)},Utils:{Linear:function(e,t,o){return(t-e)*o+e},Bernstein:function(e,t){var o=u.Interpolation.Utils.Factorial;return o(e)/o(t)/o(e-t)},Factorial:function(){var e=[1];return function(t){var o=1;if(e[t])return e[t];for(var i=t;1<i;i--)o*=i;return e[t]=o}}(),CatmullRom:function(e,t,o,i,r){var a=.5*(o-e),f=.5*(i-t),g=r*r;return(2*t-2*o+a+f)*(r*g)+(-3*t+3*o-2*a-f)*g+a*r+t}}},function(e){typeof define=="function"&&define.amd?define([],function(){return u}):typeof xe<"u"&&typeof Ze=="object"?xe.exports=u:e!==void 0&&(e.TWEEN=u)}(globalThis);let ye=!1;var E=1;sessionStorage.getItem("save")?(ye=sessionStorage.getItem("save"),E=JSON.parse(sessionStorage.getItem("save")).graphics):ye=!1;var te=0,ne=0;sessionStorage.getItem("difficulty")&&(te=sessionStorage.getItem("difficulty"));sessionStorage.getItem("punteggio")&&(ne=sessionStorage.getItem("punteggio")-1);let d,y,x,m,T,le,de,ce,K,ve,He=500,L=He,_=7;var G=1;let D=!1,F=!1,qe=performance.now();const p=new C;let j=!0;var S=!0,we=!1,Me=!1,O=!1,Q=!1,V=!1,Z=!1,$=!1,be=1,_e=1,ue=0,H=!1;/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)&&(H=!0);const _t=new me({color:"black"}),k={},N=1,Ye=new wt;Ye.set(N);d=new it(60,window.innerWidth/window.innerHeight,1,1e6);var n=[];for(var l=1;l<_;l++)n[l]=new Ue,n[l].a=new Ue,n[l].outer=200,n[l].inner=50;var h=[];for(var l=0;l<_;l++)h[l]=document.getElementById("planet"+l),h[l].open=!1;var P=!1,U=!1;const ee=document.getElementById("crossair"),Y=document.getElementById("crossair-text"),It=document.getElementById("commandList"),Et=document.getElementById("map");let M,fe=0,xt=5;const pe=25e3,Se=5e3,Je=Se;var Lt=[],Mt=[],St=[];const B=new Float32Array(Je*3),Qe=new Float32Array(Je);let b=0,Ie=0;for(let e=0;e<Se;e++){var Pt=(Math.random()-.5)*pe,Bt=(Math.random()-.5)*pe/1.5,Tt=(Math.random()-.5)*pe;B[b]=Pt,B[b+1]=Bt,B[b+2]=Tt,Lt[b]=B[b],Mt[b+1]=B[b+1],St[b+2]=B[b+2],Qe[Ie]=2,b+=3}const Pe=new rt;Pe.setAttribute("position",new Ke(B,3));Pe.setAttribute("scale",new Ke(Qe,1));const Ct=new Ge({uniforms:{color:{value:new ge(13421772)}},vertexShader:document.getElementById("vertexshader").textContent,fragmentShader:document.getElementById("fragmentshader").textContent});M=new st(Pe,Ct);Ot();Ve();function Ot(){const e=new bt;e.onLoad=function(){document.getElementById("preloader").style.display="none",ye&&Dt(sessionStorage.getItem("save"))},d.position.z=2500,d.position.y=1500,d.rotation.x=-.4,d.rotation.order="YXZ",y=new lt,ve=new dt(e).load(["model/skybox/1.png","model/skybox/2.png","model/skybox/3.png","model/skybox/4.png","model/skybox/5.png","model/skybox/6.png"]),y.background=ve,y.add(M);const o=new je(16777215,1,0);if(o.position.set(0,0,0),y.add(o),E==1){const s=new ct,c=s.load("model/planet1/lensflare0.png"),v=s.load("model/planet1/lensflare3.png"),w=new ut;w.addElement(new q(v,300,.3)),w.addElement(new q(c,650,.6,o.color)),w.addElement(new q(c,220,.7)),w.addElement(new q(v,220,.8)),w.addElement(new q(c,200,1,o.color)),o.add(w)}m=new ft(d,document.body);const i=document.getElementById("blocker"),r=document.getElementById("startButton"),a=document.getElementById("menu"),f=document.getElementById("pause");r.addEventListener("click",function(){H?(i.classList.add("transparent"),a.classList.add("reduce"),f.classList.add("reduce"),ee.classList.remove("display"),j=!0,G=1,S||setTimeout(function(){S=!0},3e3),document.getElementById("esc").style.display=""):m.lock();for(var s=0;s<_;s++)h[s].classList.add("reduce"),h[s].open=!1}),m.addEventListener("lock",function(){i.classList.add("transparent"),a.classList.add("reduce"),f.classList.add("reduce"),ee.classList.remove("display"),j=!0,G=1,S||setTimeout(function(){S=!0},3e3)}),m.addEventListener("unlock",function(){if(!Me){i.classList.remove("transparent"),f.classList.remove("reduce"),P=!1;for(var s=0;s<_;s++){if(h[s].open){P=!0;break}if(h[s].near&&!O){h[s].classList.remove("reduce"),P=!0;break}}P||a.classList.remove("reduce"),ee.classList.add("display")}j=!1,O=!1,G=0}),y.add(m.getObject());const g=function(s){switch(s.code){case"KeyQ":case"KeyP":m.unlock(),O=!0;break;case"ArrowUp":case"KeyW":D=!0;break;case"ArrowDown":case"KeyS":F=!0;break;case"KeyE":L=2e3;break;case"KeyC":It.classList.toggle("activemanual");break;case"KeyM":Et.classList.toggle("activemap");break}},oe=function(s){switch(s.code){case"ArrowUp":case"KeyW":D=!1;break;case"ArrowDown":case"KeyS":F=!1;break;case"KeyE":L=He;break}},$e=new pt(7368816);y.add($e);var I=[];I[0]=new X({transparent:!0,opacity:.1,color:16777215}),I[1]=new X({transparent:!0,opacity:.075,color:16777215}),I[2]=new X({transparent:!0,opacity:.06,color:16777215}),I[3]=new X({transparent:!0,opacity:.045,color:16777215}),I[4]=new X({transparent:!0,opacity:.035,color:16777215});const ke=new De(400,50,50),Be=new ge;Be.setHex(16100386);const et=new me({color:Be}),Te=new Fe(ke,et);Te.layers.enable(N),y.add(Te);let Ce;new A(e).load("model/space/planet1.glb",function(s){Ce=s.scene,n[1].a.position.x=850,n[1].rotation.y=Math.random()*6,y.add(n[1]),n[1].a.add(Ce),n[1].add(n[1].a),n[1].out=200,n[1].inner=50;for(var c=0;c<5;c++){var v=new R(850,850,30,1,c+c/10,1.1);v.rotateX(Math.PI/2),n[1].add(new z(v,I[c]))}},void 0,function(s){console.error(s)});let Oe;new A(e).load("model/space/planet2.glb",function(s){Oe=s.scene,n[2].a.position.x=1500,n[2].rotation.y=Math.random()*6,y.add(n[2]),n[2].a.add(Oe),n[2].add(n[2].a),n[2].out=200,n[2].inner=50;for(var c=0;c<5;c++){var v=new R(1500,1500,35,1,c+c/10,1.1);v.rotateX(Math.PI/2),n[2].add(new z(v,I[c]))}},void 0,function(s){console.error(s)});let Ae;new A(e).load("model/space/planet3.glb",function(s){Ae=s.scene,n[3].a.position.x=2050,n[3].rotation.y=Math.random()*6,y.add(n[3]),n[3].a.add(Ae),n[3].add(n[3].a),n[3].out=200,n[3].inner=50;for(var c=0;c<5;c++){var v=new R(2050,2050,40,1,c+c/10,1.1);v.rotateX(Math.PI/2),n[3].add(new z(v,I[c]))}},void 0,function(s){console.error(s)});let ae;new A(e).load("model/space/planet4.glb",function(s){ae=s.scene,n[4].a.position.x=3200,n[4].rotation.y=Math.random()*6,y.add(n[4]),n[4].a.add(ae),n[4].add(n[4].a),n[4].out=300,n[4].inner=80,ae.traverse(w=>{w.name.includes("Tube")&&w.layers.enable(N)});for(var c=0;c<5;c++){var v=new R(3200,3200,45,1,c+c/10,1.1);v.rotateX(Math.PI/2),n[4].add(new z(v,I[c]))}},void 0,function(s){console.error(s)});let ie;new A(e).load("model/space/planet5.glb",function(s){ie=s.scene,n[5].a.position.x=4050,n[5].rotation.y=Math.random()*6,y.add(n[5]),n[5].a.add(ie),n[5].add(n[5].a),n[5].out=200,n[5].inner=70;const c=new De(45,5,5),v=new ge;v.setHex(16729122);const w=new me({color:v}),Re=new Fe(c,w);Re.layers.enable(N),ie.add(Re);for(var W=0;W<5;W++){var ze=new R(4050,4050,50,1,W+W/10,1.1);ze.rotateX(Math.PI/2),n[5].add(new z(ze,I[W]))}},void 0,function(s){console.error(s)});let re;new A(e).load("model/space/planet6.glb",function(s){re=s.scene,n[6].a.position.x=4950,n[6].rotation.y=Math.random()*6,y.add(n[6]),n[6].a.add(re),n[6].add(n[6].a),n[6].out=200,n[6].inner=70,re.traverse(w=>{w.name.includes("Torus")&&w.layers.enable(N)});for(var c=0;c<5;c++){var v=new R(4950,4950,55,1,c+c/10,1.1);v.rotateX(Math.PI/2),n[6].add(new z(v,I[c]))}},void 0,function(s){console.error(s)}),window.addEventListener("click",function(){for(var s=0;s<_;s++)h[s].near&&j&&(m.unlock(),h[s].classList.remove("reduce"),h[s].open=!0)});const se=M.geometry.attributes.position.array,tt=M.geometry.attributes.scale.array;for(let s=0;s<Se;s++)se[b]+=Math.sin(fe),se[b+1]=Math.cos(fe),se[b+2]=Math.sin(fe),tt[Ie]=xt*(Math.random()+1),b+=3,Ie++;M.geometry.attributes.position.needsUpdate=!0,M.geometry.attributes.scale.needsUpdate=!0,document.addEventListener("keydown",g),document.addEventListener("keyup",oe),x=new ht({antialias:!0,preserveDrawingBuffer:!0}),x.setPixelRatio(window.devicePixelRatio),x.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(x.domElement),le=new mt(y,d),T=new We(x),T.renderToScreen=!1,T.addPass(le),de=new gt(new yt(window.innerWidth,window.innerHeight),1.4,.1,.1),de.threshold=.3,T.addPass(de),ce=new vt(new Ge({uniforms:{baseTexture:{value:null},bloomTexture:{value:T.renderTarget2.texture}},vertexShader:document.getElementById("vertexshaderB").textContent,fragmentShader:document.getElementById("fragmentshaderB").textContent,defines:{}}),"baseTexture"),ce.needsSwap=!0,K=new We(x),K.addPass(le),K.addPass(ce);const nt=new je(16777215,1,300,2);d.add(nt),window.addEventListener("resize",Xe),window.addEventListener("orientationchange",Xe)}function Xe(){d.aspect=window.innerWidth/window.innerHeight,d.updateProjectionMatrix(),x.setSize(window.innerWidth,window.innerHeight),T.setSize(window.innerWidth,window.innerHeight),K.setSize(window.innerWidth,window.innerHeight)}function he(e){if(m.getObject().position.y>0?m.getObject().position.y+=5:m.getObject().position.y-=5,H?S&&(Ee(),S=!1):S&&(m.unlock(),S=!1),p.y=-p.y/2,p.x=-p.x/2,p.z=-p.z/2,D=!1,F=!1,e==0){we=!0;var t=d.quaternion.clone(),o=new C(0,0,0);d.lookAt(o);var i=d.quaternion.clone();d.quaternion.copy(t),new u.Tween(d.quaternion).to(i,800).start(),setTimeout(function(){var f=window.location.origin;window.location.href=f},750)}if(e==1||e==2||e==5){var t=d.quaternion.clone(),o=new C(Math.cos(n[e].rotation.y)*n[e].a.position.x,0,-Math.sin(n[e].rotation.y)*n[e].a.position.x);d.lookAt(o);var i=d.quaternion.clone();d.quaternion.copy(t),new u.Tween(d.quaternion).to(i,800).start(),we=!0,Me=!0;var r=window.location.origin;r=r+"/"+e+".html",sessionStorage.setItem("img",!1);var a=JSON.stringify({page:r,graphics:E,sun:0,difficulty:te,punteggio:ne,position:0});sessionStorage.setItem("save",a),setTimeout(function(){window.location.href=r},2e3)}}var At=1e3/60,J=0;function Ve(){Date.now()>=J&&(Ut(),E==0?x.render(y,d):(y.background="",y.remove(M),y.traverse(Rt),T.render(),y.background=ve,y.add(M),y.traverse(zt),K.render()),J+=At,Date.now()>=J&&(J=Date.now())),requestAnimationFrame(Ve)}function Rt(e){e.isMesh&&Ye.test(e.layers)===!1&&(k[e.uuid]=e.material,e.material=_t)}function zt(e){k[e.uuid]&&(e.material=k[e.uuid],delete k[e.uuid])}function Ut(){ue++,we&&(u.update(),d.fov>0&&(d.fov-=.12,d.updateProjectionMatrix()));const e=performance.now();var t=new C;if(d.getWorldDirection(t),m.isLocked===!0||H){const g=(e-qe)/1e3;D&&(p.y=L*t.y,p.x=L*t.x,p.z=L*t.z),F&&(p.y=-L*t.y,p.x=-L*t.x,p.z=-L*t.z),p.y-=p.y*10*g,p.x-=p.x*10*g,p.z-=p.z*10*g,m.getObject().position.y+=p.y*g,m.getObject().position.x+=p.x*g,m.getObject().position.z+=p.z*g;var o=m.getObject().position.x,i=m.getObject().position.y,r=m.getObject().position.z;i<-2e3&&(p.y=0,m.getObject().position.y=-2e3),i>2e3&&(p.y=0,m.getObject().position.y=2e3),o<-7e3&&(p.x=0,m.getObject().position.x=-7e3),o>7e3&&(p.x=0,m.getObject().position.x=7e3),r<-7e3&&(p.z=0,m.getObject().position.z=-7e3),r>7e3&&(p.z=0,m.getObject().position.z=7e3)}for(qe=e,l=1;l<_;l++)n[l].rotation.y+=5e-5/(l*.3)*G,n[l].a.rotation.y+=.002;if(ue%2==1){var a=d.position.distanceTo(n[1].position);for(a<600?(h[0].near=!0,a<405&&he(0)):h[0].near=!1,l=1;l<_-4;l++){var f=new C(Math.cos(n[l].rotation.y)*n[l].a.position.x,0,-Math.sin(n[l].rotation.y)*n[l].a.position.x),a=d.position.distanceTo(f);a<n[l].outer?(h[l].near=!0,a<n[l].inner+5&&he(l)):h[l].near=!1}for(U=!1,l=0;l<_;l++)if(h[l].near){U=!0;break}U?Y.classList.add("active"):Y.classList.remove("active")}if(ue%2==0){for(l=_-4;l<_;l++){var f=new C(Math.cos(n[l].rotation.y)*n[l].a.position.x,0,-Math.sin(n[l].rotation.y)*n[l].a.position.x),a=d.position.distanceTo(f);a<n[l].outer?(h[l].near=!0,a<n[l].inner+5&&he(l)):h[l].near=!1}for(U=!1,l=0;l<_;l++)if(h[l].near){U=!0;break}U?Y.classList.add("active"):Y.classList.remove("active")}Q&&(d.rotation.y+=.01*be),V&&(d.rotation.y-=.01*be),Z&&(d.rotation.x+=.01*_e),$&&(d.rotation.x-=.01*_e)}function Ee(){if(!Me){blocker.classList.remove("transparent"),pause.classList.remove("reduce"),P=!1;for(var e=0;e<_;e++){if(h[e].open){P=!0;break}if(h[e].near&&!O){h[e].classList.remove("reduce"),h[e].open=!0,P=!0;break}}P||menu.classList.remove("reduce"),document.getElementById("esc").style.display="none",ee.classList.add("display")}j=!1,O=!0,G=0}if(H){document.getElementById("mobile").style.display="block",document.getElementById("commandList").style.display="none",document.getElementById("esc").addEventListener("click",Ee),document.getElementById("esc").addEventListener("click",function(){O=!0}),document.getElementById("crossair").addEventListener("touchstart",function(){for(var a=0;a<_;a++)h[a].near&&j&&(h[a].classList.remove("reduce"),h[a].open=!0,O=!1,Ee())});let e=document.getElementById("avanti"),t=document.getElementById("indietro");e.addEventListener("touchstart",function(){D=!0}),e.addEventListener("touchend",function(){D=!1}),t.addEventListener("touchstart",function(){F=!0}),t.addEventListener("touchend",function(){F=!1});const o=document.body;let i,r;o.addEventListener("touchstart",a=>{i=a.touches[0].clientX,r=a.touches[0].clientY}),o.addEventListener("touchmove",a=>{let f,g;f=a.changedTouches[0].clientX-i,g=a.changedTouches[0].clientY-r,g<-20?Z=!0:Z=!1,g>20?$=!0:$=!1,f<-20?Q=!0:Q=!1,f>20?V=!0:V=!1,be=Math.abs(f/50),_e=Math.abs(g/50)}),o.addEventListener("touchend",a=>{Z=!1,$=!1,Q=!1,V=!1})}document.getElementById("graph1").addEventListener("click",function(){E=0,sessionStorage.setItem("graphics",E),document.getElementById("graph1").style.borderColor="green",document.getElementById("graph2").style.borderColor=""});document.getElementById("graph2").addEventListener("click",function(){E=1,sessionStorage.setItem("graphics",E),document.getElementById("graph1").style.borderColor="",document.getElementById("graph2").style.borderColor="green"});E==0?document.getElementById("graph1").style.borderColor="green":document.getElementById("graph2").style.borderColor="green";document.getElementById("create-save").addEventListener("click",function(){let e=x.domElement.toDataURL("image/png",1);sessionStorage.setItem("img",e),document.getElementsByTagName("canvas")[0].toBlob(function(o){let i=new FileReader;i.readAsArrayBuffer(o),i.addEventListener("load",function(r){let a=r.target.result;const f=new Int8Array(a),g=at(f,Ne(),"png");jt([g],"png")})},"image/png",1),sessionStorage.setItem("save",Ne())});function jt(e,t){var o=window.document.createElement("a");o.href=window.URL.createObjectURL(new Blob(e)),o.download="save."+t,document.body.appendChild(o),o.click(),document.body.removeChild(o)}function Ne(){var e=JSON.stringify({page:window.location.pathname,graphics:E,cameraPosition:{x:d.position.x,y:d.position.y,z:d.position.z},cameraRotation:{x:d.rotation.x,y:d.rotation.y,z:d.rotation.z},planetPosition:n.reduce((t,o,i)=>({...t,[`pos${i}`]:o.rotation.y,[`rot${i}`]:o.a.rotation.y}),{}),difficulty:te,punteggio:ne});return e}function Dt(e){var t=JSON.parse(e);if(sessionStorage.getItem("graphics")||(E=t.graphics),!t.position)d.position.x=t.cameraPosition.x,d.position.y=t.cameraPosition.y,d.position.z=t.cameraPosition.z,d.rotation.x=t.cameraRotation.x,d.rotation.y=t.cameraRotation.y,d.rotation.z=t.cameraRotation.z,n[1].rotation.y=t.planetPosition.pos1,n[1].a.rotation.y=t.planetPosition.rot1,n[2].rotation.y=t.planetPosition.pos2,n[2].a.rotation.y=t.planetPosition.rot2,n[3].rotation.y=t.planetPosition.pos3,n[3].a.rotation.y=t.planetPosition.rot3,n[4].rotation.y=t.planetPosition.pos4,n[4].a.rotation.y=t.planetPosition.rot4,n[5].rotation.y=t.planetPosition.pos5,n[5].a.rotation.y=t.planetPosition.rot5,n[6].rotation.y=t.planetPosition.pos6,n[6].a.rotation.y=t.planetPosition.rot6;else{d.position.x=Math.cos(n[t.position].rotation.y)*n[t.position].a.position.x,d.position.y=200,d.position.z=-Math.sin(n[t.position].rotation.y)*n[t.position].a.position.x;var o=new C(0,0,0);d.lookAt(o)}sessionStorage.getItem("difficulty")||(te=t.difficulty),sessionStorage.getItem("punteggio")||(ne=t.punteggio-1)}});export default Ft();
