var Od=0,du=1,Fd=2;var Cs=1,Bd=2,Cr=3,ss=0,vn=1,Pt=2,Ui=0,Pr=1,jt=2,pu=3,mu=4,zd=5;var Ps=100,Hd=101,kd=102,Gd=103,Vd=104,Wd=200,Xd=201,qd=202,Yd=203,gu=204,_u=205,Zd=206,Jd=207,$d=208,Kd=209,Qd=210,jd=211,ep=212,tp=213,np=214,hl=0,ul=1,fl=2,hr=3,dl=4,pl=5,ml=6,gl=7,xu=0,ip=1,sp=2,yi=0,Ga=1,Va=2,Wa=3,Is=4,Xa=5,qa=6,Ya=7;var vu=300,Ls=301,Ir=302,ql=303,Yl=304,ur=1e3,pi=1001,_l=1002,pn=1003,rp=1004;var Za=1005;var Pn=1006,Zl=1007;var Oi=1008;var On=1009,yu=1010,Mu=1011,Lr=1012,Jl=1013,ci=1014,Jn=1015,yn=1016,$l=1017,Kl=1018,Ds=1020,Su=35902,Eu=35899,bu=1021,Tu=1022,hi=1023,Ii=1026,Fi=1027,Ql=1028,jl=1029,rs=1030,ec=1031;var tc=1033,Ja=33776,$a=33777,Ka=33778,Qa=33779,nc=35840,ic=35841,sc=35842,rc=35843,ac=36196,oc=37492,lc=37496,cc=37488,hc=37489,ja=37490,uc=37491,fc=37808,dc=37809,pc=37810,mc=37811,gc=37812,_c=37813,xc=37814,vc=37815,yc=37816,Mc=37817,Sc=37818,Ec=37819,bc=37820,Tc=37821,wc=36492,Ac=36494,Rc=36495,Cc=36283,Pc=36284,eo=36285,Ic=36286;var la=2300,xl=2301,ll=2302,jh=2303,eu=2400,tu=2401,nu=2402;var ap=3200;var Lc=0,op=1,Bi="",_n="srgb",ca="srgb-linear",ha="linear",Mt="srgb";var cl=7680;var lp=519,cp=512,hp=513,up=514,wu=515,fp=516,dp=517,Au=518,Ru=519,Cu=35044,ui=35048;var Pu="300 es",Zn=2e3,fr=2001;function lg(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function cg(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function ua(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function pp(){let i=ua("canvas");return i.style.display="block",i}var Zf={},dr=null;function fa(...i){let e="THREE."+i.shift();dr?dr("log",e,...i):console.log(e,...i)}function mp(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Xe(...i){i=mp(i);let e="THREE."+i.shift();if(dr)dr("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ye(...i){i=mp(i);let e="THREE."+i.shift();if(dr)dr("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ms(...i){let e=i.join(" ");e in Zf||(Zf[e]=!0,Xe(...i))}function gp(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var _p={[hl]:hl,[fl]:ml,[dl]:dl,[hr]:pl,[ul]:ul,[ml]:fl,[gl]:gl,[pl]:hr},mi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},bn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var wh=Math.PI/180,da=180/Math.PI;function as(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(bn[i&255]+bn[i>>8&255]+bn[i>>16&255]+bn[i>>24&255]+"-"+bn[e&255]+bn[e>>8&255]+"-"+bn[e>>16&15|64]+bn[e>>24&255]+"-"+bn[t&63|128]+bn[t>>8&255]+"-"+bn[t>>16&255]+bn[t>>24&255]+bn[n&255]+bn[n>>8&255]+bn[n>>16&255]+bn[n>>24&255]).toLowerCase()}function ct(i,e,t){return Math.max(e,Math.min(t,i))}function hg(i,e){return(i%e+e)%e}function Ah(i,e,t){return(1-t)*i+t*e}function xp(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Dc(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function vp(i,e){if(e.constructor===Float32Array)return i;let t=Dc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function yp(i,e){if(e.constructor===Float32Array)return i;let t=Dc(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Ou=class Ou{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Ou.prototype.isVector2=!0;var ie=Ou,gi=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],u=r[a+0],f=r[a+1],g=r[a+2],_=r[a+3];if(d!==_||l!==u||c!==f||h!==g){let p=l*u+c*f+h*g+d*_;p<0&&(u=-u,f=-f,g=-g,_=-_,p=-p);let m=1-o;if(p<.9995){let v=Math.acos(p),S=Math.sin(v);m=Math.sin(m*v)/S,o=Math.sin(o*v)/S,l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+_*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+_*o;let v=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=v,c*=v,h*=v,d*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),u=l(n/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=n+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(n>o&&n>d){let f=2*Math.sqrt(1+n-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-n-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-n-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Fu=class Fu{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Jf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Jf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Rh.copy(this).projectOnVector(e),this.sub(Rh)}reflect(e){return this.sub(Rh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Fu.prototype.isVector3=!0;var A=Fu,Rh=new A,Jf=new gi,Bu=class Bu{constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],u=n[2],f=n[5],g=n[8],_=s[0],p=s[3],m=s[6],v=s[1],S=s[4],y=s[7],w=s[2],T=s[5],x=s[8];return r[0]=a*_+o*v+l*w,r[3]=a*p+o*S+l*T,r[6]=a*m+o*y+l*x,r[1]=c*_+h*v+d*w,r[4]=c*p+h*S+d*T,r[7]=c*m+h*y+d*x,r[2]=u*_+f*v+g*w,r[5]=u*p+f*S+g*T,r[8]=u*m+f*y+g*x,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=t*d+n*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let _=1/g;return e[0]=d*_,e[1]=(s*c-h*n)*_,e[2]=(o*n-s*a)*_,e[3]=u*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-o*t)*_,e[6]=f*_,e[7]=(n*l-c*t)*_,e[8]=(a*t-n*r)*_,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ms("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ch.makeScale(e,t)),this}rotate(e){return Ms("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ch.makeRotation(-e)),this}translate(e,t){return Ms("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ch.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Bu.prototype.isMatrix3=!0;var Qe=Bu,Ch=new Qe,$f=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kf=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ug(){let i={enabled:!0,workingColorSpace:ca,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Mt&&(s.r=Pi(s.r),s.g=Pi(s.g),s.b=Pi(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Mt&&(s.r=cr(s.r),s.g=cr(s.g),s.b=cr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Bi?ha:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ca]:{primaries:e,whitePoint:n,transfer:ha,toXYZ:$f,fromXYZ:Kf,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:_n},outputColorSpaceConfig:{drawingBufferColorSpace:_n}},[_n]:{primaries:e,whitePoint:n,transfer:Mt,toXYZ:$f,fromXYZ:Kf,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:_n}}}),i}var ut=ug();function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function cr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Xs,vl=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Xs===void 0&&(Xs=ua("canvas")),Xs.width=e.width,Xs.height=e.height;let s=Xs.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Xs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=ua("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Pi(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},fg=0,pr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:fg++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Ph(s[a].image)):r.push(Ph(s[a]))}else r=Ph(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Ph(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}var dg=0,Ih=new A,In=class i extends mi{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=pi,s=pi,r=Pn,a=Oi,o=hi,l=On,c=i.DEFAULT_ANISOTROPY,h=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:dg++}),this.uuid=as(),this.name="",this.source=new pr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ih).x}get height(){return this.source.getSize(Ih).y}get depth(){return this.source.getSize(Ih).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ur:e.x=e.x-Math.floor(e.x);break;case pi:e.x=e.x<0?0:1;break;case _l:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ur:e.y=e.y-Math.floor(e.y);break;case pi:e.y=e.y<0?0:1;break;case _l:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=vu;In.DEFAULT_ANISOTROPY=1;var zu=class zu{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],_=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-_)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+_)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(c+1)/2,y=(f+1)/2,w=(m+1)/2,T=(h+u)/4,x=(d+_)/4,E=(g+p)/4;return S>y&&S>w?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=T/n,r=x/n):y>w?y<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(y),n=T/s,r=E/s):w<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),n=x/r,s=E/r),this.set(n,s,r,t),this}let v=Math.sqrt((p-g)*(p-g)+(d-_)*(d-_)+(u-h)*(u-h));return Math.abs(v)<.001&&(v=1),this.x=(p-g)/v,this.y=(d-_)/v,this.z=(u-h)/v,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};zu.prototype.isVector4=!0;var Vt=zu,yl=class extends mi{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Vt(0,0,e,t),this.scissorTest=!1,this.viewport=new Vt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new In({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new pr(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},on=class extends yl{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},pa=class extends In{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var Ml=class extends In{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=pn,this.minFilter=pn,this.wrapR=pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Xl=class Xl{constructor(e,t,n,s,r,a,o,l,c,h,d,u,f,g,_,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,u,f,g,_,p)}set(e,t,n,s,r,a,o,l,c,h,d,u,f,g,_,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=s,m[1]=r,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=_,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Xl().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/qs.setFromMatrixColumn(e,0).length(),r=1/qs.setFromMatrixColumn(e,1).length(),a=1/qs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-_*c,t[9]=-o*l,t[2]=_-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u+_*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=_+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,_=c*d;t[0]=u-_*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=_-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,_=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+_,t[1]=l*d,t[5]=_*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=_-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-_*d}else if(e.order==="XZY"){let u=a*l,f=a*c,g=o*l,_=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+_,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=_*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(pg,e,mg)}lookAt(e,t,n){let s=this.elements;return zn.subVectors(e,t),zn.lengthSq()===0&&(zn.z=1),zn.normalize(),Xi.crossVectors(n,zn),Xi.lengthSq()===0&&(Math.abs(n.z)===1?zn.x+=1e-4:zn.z+=1e-4,zn.normalize(),Xi.crossVectors(n,zn)),Xi.normalize(),Lo.crossVectors(zn,Xi),s[0]=Xi.x,s[4]=Lo.x,s[8]=zn.x,s[1]=Xi.y,s[5]=Lo.y,s[9]=zn.y,s[2]=Xi.z,s[6]=Lo.z,s[10]=zn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],u=n[9],f=n[13],g=n[2],_=n[6],p=n[10],m=n[14],v=n[3],S=n[7],y=n[11],w=n[15],T=s[0],x=s[4],E=s[8],D=s[12],C=s[1],O=s[5],L=s[9],z=s[13],P=s[2],G=s[6],Z=s[10],q=s[14],ce=s[3],$=s[7],te=s[11],re=s[15];return r[0]=a*T+o*C+l*P+c*ce,r[4]=a*x+o*O+l*G+c*$,r[8]=a*E+o*L+l*Z+c*te,r[12]=a*D+o*z+l*q+c*re,r[1]=h*T+d*C+u*P+f*ce,r[5]=h*x+d*O+u*G+f*$,r[9]=h*E+d*L+u*Z+f*te,r[13]=h*D+d*z+u*q+f*re,r[2]=g*T+_*C+p*P+m*ce,r[6]=g*x+_*O+p*G+m*$,r[10]=g*E+_*L+p*Z+m*te,r[14]=g*D+_*z+p*q+m*re,r[3]=v*T+S*C+y*P+w*ce,r[7]=v*x+S*O+y*G+w*$,r[11]=v*E+S*L+y*Z+w*te,r[15]=v*D+S*z+y*q+w*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],_=e[7],p=e[11],m=e[15],v=l*f-c*u,S=o*f-c*d,y=o*u-l*d,w=a*f-c*h,T=a*u-l*h,x=a*d-o*h;return t*(_*v-p*S+m*y)-n*(g*v-p*w+m*T)+s*(g*S-_*w+m*x)-r*(g*y-_*T+p*x)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],_=e[13],p=e[14],m=e[15],v=t*o-n*a,S=t*l-s*a,y=t*c-r*a,w=n*l-s*o,T=n*c-r*o,x=s*c-r*l,E=h*_-d*g,D=h*p-u*g,C=h*m-f*g,O=d*p-u*_,L=d*m-f*_,z=u*m-f*p,P=v*z-S*L+y*O+w*C-T*D+x*E;if(P===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/P;return e[0]=(o*z-l*L+c*O)*G,e[1]=(s*L-n*z-r*O)*G,e[2]=(_*x-p*T+m*w)*G,e[3]=(u*T-d*x-f*w)*G,e[4]=(l*C-a*z-c*D)*G,e[5]=(t*z-s*C+r*D)*G,e[6]=(p*y-g*x-m*S)*G,e[7]=(h*x-u*y+f*S)*G,e[8]=(a*L-o*C+c*E)*G,e[9]=(n*C-t*L-r*E)*G,e[10]=(g*T-_*y+m*v)*G,e[11]=(d*y-h*T-f*v)*G,e[12]=(o*D-a*O-l*E)*G,e[13]=(t*O-n*D+s*E)*G,e[14]=(_*S-g*w-p*v)*G,e[15]=(h*w-d*S+u*v)*G,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,_=a*h,p=a*d,m=o*d,v=l*c,S=l*h,y=l*d,w=n.x,T=n.y,x=n.z;return s[0]=(1-(_+m))*w,s[1]=(f+y)*w,s[2]=(g-S)*w,s[3]=0,s[4]=(f-y)*T,s[5]=(1-(u+m))*T,s[6]=(p+v)*T,s[7]=0,s[8]=(g+S)*x,s[9]=(p-v)*x,s[10]=(1-(u+_))*x,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=qs.set(s[0],s[1],s[2]).length(),o=qs.set(s[4],s[5],s[6]).length(),l=qs.set(s[8],s[9],s[10]).length();r<0&&(a=-a),ei.copy(this);let c=1/a,h=1/o,d=1/l;return ei.elements[0]*=c,ei.elements[1]*=c,ei.elements[2]*=c,ei.elements[4]*=h,ei.elements[5]*=h,ei.elements[6]*=h,ei.elements[8]*=d,ei.elements[9]*=d,ei.elements[10]*=d,t.setFromRotationMatrix(ei),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=Zn,l=!1){let c=this.elements,h=2*r/(t-e),d=2*r/(n-s),u=(t+e)/(t-e),f=(n+s)/(n-s),g,_;if(l)g=r/(a-r),_=a*r/(a-r);else if(o===Zn)g=-(a+r)/(a-r),_=-2*a*r/(a-r);else if(o===fr)g=-a/(a-r),_=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=Zn,l=!1){let c=this.elements,h=2/(t-e),d=2/(n-s),u=-(t+e)/(t-e),f=-(n+s)/(n-s),g,_;if(l)g=1/(a-r),_=a/(a-r);else if(o===Zn)g=-2/(a-r),_=-(a+r)/(a-r);else if(o===fr)g=-1/(a-r),_=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=_,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Xl.prototype.isMatrix4=!0;var St=Xl,qs=new A,ei=new St,pg=new A(0,0,0),mg=new A(1,1,1),Xi=new A,Lo=new A,zn=new A,Qf=new St,jf=new gi,Li=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(t){case"XYZ":this._y=Math.asin(ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Qf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return jf.setFromEuler(this),this.setFromQuaternion(jf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Li.DEFAULT_ORDER="XYZ";var mr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},gg=0,ed=new A,Ys=new gi,bi=new St,Do=new A,Jr=new A,_g=new A,xg=new gi,td=new A(1,0,0),nd=new A(0,1,0),id=new A(0,0,1),sd={type:"added"},vg={type:"removed"},Zs={type:"childadded",child:null},Lh={type:"childremoved",child:null},bt=class i extends mi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:gg++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new A,t=new Li,n=new gi,s=new A(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new St},normalMatrix:{value:new Qe}}),this.matrix=new St,this.matrixWorld=new St,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.multiply(Ys),this}rotateOnWorldAxis(e,t){return Ys.setFromAxisAngle(e,t),this.quaternion.premultiply(Ys),this}rotateX(e){return this.rotateOnAxis(td,e)}rotateY(e){return this.rotateOnAxis(nd,e)}rotateZ(e){return this.rotateOnAxis(id,e)}translateOnAxis(e,t){return ed.copy(e).applyQuaternion(this.quaternion),this.position.add(ed.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(td,e)}translateY(e){return this.translateOnAxis(nd,e)}translateZ(e){return this.translateOnAxis(id,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Do.copy(e):Do.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(Jr,Do,this.up):bi.lookAt(Do,Jr,this.up),this.quaternion.setFromRotationMatrix(bi),s&&(bi.extractRotation(s.matrixWorld),Ys.setFromRotationMatrix(bi),this.quaternion.premultiply(Ys.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ye("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sd),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null):Ye("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vg),Lh.child=e,this.dispatchEvent(Lh),Lh.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sd),Zs.child=e,this.dispatchEvent(Zs),Zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,e,_g),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,xg,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),u.length>0&&(n.skeletons=u),f.length>0&&(n.animations=f),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};bt.DEFAULT_UP=new A(0,1,0);bt.DEFAULT_MATRIX_AUTO_UPDATE=!0;bt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var fe=class extends bt{constructor(){super(),this.isGroup=!0,this.type="Group"}},yg={type:"move"},gr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fe,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fe,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new A,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new A),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fe,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new A,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new A,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let _ of e.hand.values()){let p=t.getJointPose(_,n),m=this._getHandJoint(c,_);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.quaternion,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(yg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new fe;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Mp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qi={h:0,s:0,l:0},No={h:0,s:0,l:0};function Dh(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var de=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=_n){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ut.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=ut.workingColorSpace){return this.r=e,this.g=t,this.b=n,ut.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=ut.workingColorSpace){if(e=hg(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=Dh(a,r,e+1/3),this.g=Dh(a,r,e),this.b=Dh(a,r,e-1/3)}return ut.colorSpaceToWorking(this,s),this}setStyle(e,t=_n){function n(r){r!==void 0&&parseFloat(r)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=_n){let n=Mp[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=_n){return ut.workingToColorSpace(Tn.copy(this),e),Math.round(ct(Tn.r*255,0,255))*65536+Math.round(ct(Tn.g*255,0,255))*256+Math.round(ct(Tn.b*255,0,255))}getHexString(e=_n){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ut.workingColorSpace){ut.workingToColorSpace(Tn.copy(this),t);let n=Tn.r,s=Tn.g,r=Tn.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ut.workingColorSpace){return ut.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=_n){ut.workingToColorSpace(Tn.copy(this),e);let t=Tn.r,n=Tn.g,s=Tn.b;return e!==_n?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(qi),this.setHSL(qi.h+e,qi.s+t,qi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(qi),e.getHSL(No);let n=Ah(qi.h,No.h,t),s=Ah(qi.s,No.s,t),r=Ah(qi.l,No.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Tn=new de;de.NAMES=Mp;var ma=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new de(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},_r=class extends bt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Li,this.environmentIntensity=1,this.environmentRotation=new Li,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},ti=new A,Ti=new A,Nh=new A,wi=new A,Js=new A,$s=new A,rd=new A,Uh=new A,Oh=new A,Fh=new A,Bh=new Vt,zh=new Vt,Hh=new Vt,Ci=class i{constructor(e=new A,t=new A,n=new A){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),ti.subVectors(e,t),s.cross(ti);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){ti.subVectors(s,t),Ti.subVectors(n,t),Nh.subVectors(e,t);let a=ti.dot(ti),o=ti.dot(Ti),l=ti.dot(Nh),c=Ti.dot(Ti),h=Ti.dot(Nh),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,wi)===null?!1:wi.x>=0&&wi.y>=0&&wi.x+wi.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,wi.x),l.addScaledVector(a,wi.y),l.addScaledVector(o,wi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Bh.setScalar(0),zh.setScalar(0),Hh.setScalar(0),Bh.fromBufferAttribute(e,t),zh.fromBufferAttribute(e,n),Hh.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Bh,r.x),a.addScaledVector(zh,r.y),a.addScaledVector(Hh,r.z),a}static isFrontFacing(e,t,n,s){return ti.subVectors(n,t),Ti.subVectors(e,t),ti.cross(Ti).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ti.subVectors(this.c,this.b),Ti.subVectors(this.a,this.b),ti.cross(Ti).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Js.subVectors(s,n),$s.subVectors(r,n),Uh.subVectors(e,n);let l=Js.dot(Uh),c=$s.dot(Uh);if(l<=0&&c<=0)return t.copy(n);Oh.subVectors(e,s);let h=Js.dot(Oh),d=$s.dot(Oh);if(h>=0&&d<=h)return t.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0&&l-h>0)return a=l/(l-h),t.copy(n).addScaledVector(Js,a);Fh.subVectors(e,r);let f=Js.dot(Fh),g=$s.dot(Fh);if(g>=0&&f<=g)return t.copy(r);let _=f*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector($s,o);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return rd.subVectors(r,s),o=(d-h)/(d-h+(f-g)),t.copy(s).addScaledVector(rd,o);let m=1/(p+_+u);return a=_*m,o=u*m,t.copy(n).addScaledVector(Js,a).addScaledVector($s,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_i=class{constructor(e=new A(1/0,1/0,1/0),t=new A(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ni.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ni.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=ni.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ni):ni.fromBufferAttribute(r,a),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Uo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Uo.copy(n.boundingBox)),Uo.applyMatrix4(e.matrixWorld),this.union(Uo)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),Oo.subVectors(this.max,$r),Ks.subVectors(e.a,$r),Qs.subVectors(e.b,$r),js.subVectors(e.c,$r),Yi.subVectors(Qs,Ks),Zi.subVectors(js,Qs),gs.subVectors(Ks,js);let t=[0,-Yi.z,Yi.y,0,-Zi.z,Zi.y,0,-gs.z,gs.y,Yi.z,0,-Yi.x,Zi.z,0,-Zi.x,gs.z,0,-gs.x,-Yi.y,Yi.x,0,-Zi.y,Zi.x,0,-gs.y,gs.x,0];return!kh(t,Ks,Qs,js,Oo)||(t=[1,0,0,0,1,0,0,0,1],!kh(t,Ks,Qs,js,Oo))?!1:(Fo.crossVectors(Yi,Zi),t=[Fo.x,Fo.y,Fo.z],kh(t,Ks,Qs,js,Oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Ai=[new A,new A,new A,new A,new A,new A,new A,new A],ni=new A,Uo=new _i,Ks=new A,Qs=new A,js=new A,Yi=new A,Zi=new A,gs=new A,$r=new A,Oo=new A,Fo=new A,_s=new A;function kh(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){_s.fromArray(i,r);let o=s.x*Math.abs(_s.x)+s.y*Math.abs(_s.y)+s.z*Math.abs(_s.z),l=e.dot(_s),c=t.dot(_s),h=n.dot(_s);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var rn=new A,Bo=new ie,Mg=0,Gt=class extends mi{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Mg++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cu,this.updateRanges=[],this.gpuType=Jn,this.version=0,this._normalizationScale=e!==void 0?Dc(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Bo.fromBufferAttribute(this,t),Bo.applyMatrix3(e),this.setXY(t,Bo.x,Bo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix3(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyMatrix4(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.applyNormalMatrix(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)rn.fromBufferAttribute(this,t),rn.transformDirection(e),this.setXYZ(t,rn.x,rn.y,rn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):vp(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):yp(e,this.array)}};var ga=class extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var _a=class extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var Ke=class extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sg=new _i,Kr=new A,Gh=new A,xi=class{constructor(e=new A,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Sg.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Kr.subVectors(e,this.center);let t=Kr.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Kr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Gh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Kr.copy(e.center).add(Gh)),this.expandByPoint(Kr.copy(e.center).sub(Gh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Eg=0,Yn=new St,Vh=new bt,er=new A,Hn=new _i,Qr=new _i,dn=new A,At=class i extends mi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Eg++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(lg(e)?_a:ga)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new Qe().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Yn.makeRotationFromQuaternion(e),this.applyMatrix4(Yn),this}rotateX(e){return Yn.makeRotationX(e),this.applyMatrix4(Yn),this}rotateY(e){return Yn.makeRotationY(e),this.applyMatrix4(Yn),this}rotateZ(e){return Yn.makeRotationZ(e),this.applyMatrix4(Yn),this}translate(e,t,n){return Yn.makeTranslation(e,t,n),this.applyMatrix4(Yn),this}scale(e,t,n){return Yn.makeScale(e,t,n),this.applyMatrix4(Yn),this}lookAt(e){return Vh.lookAt(e),Vh.updateMatrix(),this.applyMatrix4(Vh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(er).negate(),this.translate(er.x,er.y,er.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ke(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _i);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new A(-1/0,-1/0,-1/0),new A(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];Hn.setFromBufferAttribute(r),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Hn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Hn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Hn.min),this.boundingBox.expandByPoint(Hn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ye('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new xi);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ye("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new A,1/0);return}if(e){let n=this.boundingSphere.center;if(Hn.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];Qr.setFromBufferAttribute(o),this.morphTargetsRelative?(dn.addVectors(Hn.min,Qr.min),Hn.expandByPoint(dn),dn.addVectors(Hn.max,Qr.max),Hn.expandByPoint(dn)):(Hn.expandByPoint(Qr.min),Hn.expandByPoint(Qr.max))}Hn.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)dn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(dn));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)dn.fromBufferAttribute(o,c),l&&(er.fromBufferAttribute(e,c),dn.add(er)),s=Math.max(s,n.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ye('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ye("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Gt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));let o=[],l=[],c=new Uint8Array(n.count);for(let D=0;D<n.count;D++)o[D]=new A,l[D]=new A;let h=new A,d=new A,u=new A,f=new ie,g=new ie,_=new ie,p=new A,m=new A;function v(D,C,O){c[D]=c[C]=c[O]=1,h.fromBufferAttribute(n,D),d.fromBufferAttribute(n,C),u.fromBufferAttribute(n,O),f.fromBufferAttribute(r,D),g.fromBufferAttribute(r,C),_.fromBufferAttribute(r,O),d.sub(h),u.sub(h),g.sub(f),_.sub(f);let L=1/(g.x*_.y-_.x*g.y);isFinite(L)&&(p.copy(d).multiplyScalar(_.y).addScaledVector(u,-g.y).multiplyScalar(L),m.copy(u).multiplyScalar(g.x).addScaledVector(d,-_.x).multiplyScalar(L),o[D].add(p),o[C].add(p),o[O].add(p),l[D].add(m),l[C].add(m),l[O].add(m))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let D=0,C=S.length;D<C;++D){let O=S[D],L=O.start,z=O.count;for(let P=L,G=L+z;P<G;P+=3)v(e.getX(P+0),e.getX(P+1),e.getX(P+2))}let y=new A,w=new A,T=new A,x=new A;function E(D){T.fromBufferAttribute(s,D),x.copy(T);let C=o[D];y.copy(C),y.sub(T.multiplyScalar(T.dot(C))).normalize(),w.crossVectors(x,C);let L=w.dot(l[D])<0?-1:1;a.setXYZW(D,y.x,y.y,y.z,L)}for(let D=0,C=n.count;D<C;++D)c[D]&&E(D);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,f=n.count;u<f;u++)n.setXYZ(u,0,0,0);let s=new A,r=new A,a=new A,o=new A,l=new A,c=new A,h=new A,d=new A;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),_=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),a.fromBufferAttribute(t,p),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,p),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let _=0,p=l.length;_<p;_++){o.isInterleavedBufferAttribute?f=l[_]*o.data.stride+o.offset:f=l[_]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new Gt(u,h,d)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Sl=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cu,this.updateRanges=[],this.version=0,this.uuid=as()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=ad(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=this.array.slice(0).buffer);let n=new this.array.constructor(e.arrayBuffers[t]),s=new this.constructor(n,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let t=ad(this.array);e.arrayBuffers[t]===void 0&&(e.arrayBuffers[t]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let n={uuid:this.uuid,buffer:t,type:this.array.constructor.name,stride:this.stride};return n.usage=this.usage,n}};function ad(i){return i.buffer._uuid===void 0&&(i.buffer._uuid=as()),i.byteOffset===0&&i.byteLength===i.buffer.byteLength?i.buffer._uuid:i.buffer._uuid+":"+i.byteOffset+":"+i.byteLength}var Cn=new A,xa=class i{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s,this._normalizationScale=e!==void 0?Dc(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyMatrix4(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.applyNormalMatrix(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Cn.fromBufferAttribute(this,t),Cn.transformDirection(e),this.setXYZ(t,Cn.x,Cn.y,Cn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=this._denormalize(t)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=this._denormalize(t)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=this._denormalize(t)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=this._denormalize(t)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){fa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Gt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new i(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){fa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):vp(e,this.data.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):yp(e,this.data.array)}},Wh=new A,bg=new A,Tg=new Qe,kn=class{constructor(e=new A(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=Wh.subVectors(n,t).cross(bg.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta(Wh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Tg.getNormalMatrix(e),s=this.coplanarPoint(Wh).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},wg=0,ii=class extends mi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wg++}),this.uuid=as(),this.name="",this.type="Material",this.blending=Pr,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=gu,this.blendDst=_u,this.blendEquation=Ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new de(0,0,0),this.blendAlpha=0,this.depthFunc=hr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=cl,this.stencilZFail=cl,this.stencilZPass=cl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new de().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new kn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new ie().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ie().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},$i=class extends ii{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},tr,jr=new A,nr=new A,ir=new A,sr=new ie,ea=new ie,Sp=new St,zo=new A,ta=new A,Ho=new A,od=new ie,Xh=new ie,ld=new ie,Ss=class extends bt{constructor(e=new $i){if(super(),this.isSprite=!0,this.type="Sprite",tr===void 0){tr=new At;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Sl(t,5);tr.setIndex([0,1,2,0,2,3]),tr.setAttribute("position",new xa(n,3,0,!1)),tr.setAttribute("uv",new xa(n,2,3,!1))}this.geometry=tr,this.material=e,this.center=new ie(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ye('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),nr.setFromMatrixScale(this.matrixWorld),Sp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ir.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&nr.multiplyScalar(-ir.z);let n=this.material.rotation,s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));let a=this.center;ko(zo.set(-.5,-.5,0),ir,a,nr,s,r),ko(ta.set(.5,-.5,0),ir,a,nr,s,r),ko(Ho.set(.5,.5,0),ir,a,nr,s,r),od.set(0,0),Xh.set(1,0),ld.set(1,1);let o=e.ray.intersectTriangle(zo,ta,Ho,!1,jr);if(o===null&&(ko(ta.set(-.5,.5,0),ir,a,nr,s,r),Xh.set(0,1),o=e.ray.intersectTriangle(zo,Ho,ta,!1,jr),o===null))return;let l=e.ray.origin.distanceTo(jr);l<e.near||l>e.far||t.push({distance:l,point:jr.clone(),uv:Ci.getInterpolation(jr,zo,ta,Ho,od,Xh,ld,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}toJSON(e){let t=super.toJSON(e);return t.object.center=this.center.toArray(),t}};function ko(i,e,t,n,s,r){sr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(ea.x=r*sr.x-s*sr.y,ea.y=s*sr.x+r*sr.y):ea.copy(sr),i.copy(e),i.x+=ea.x,i.y+=ea.y,i.applyMatrix4(Sp)}var Ri=new A,qh=new A,Go=new A,Vo=new A,Es=class{constructor(e=new A,t=new A(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){qh.copy(e).add(t).multiplyScalar(.5),Go.copy(t).sub(e).normalize(),Vo.copy(this.origin).sub(qh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Go),o=Vo.dot(this.direction),l=-Vo.dot(Go),c=Vo.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let _=1/h;d*=_,u*=_,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(qh).addScaledVector(Go,u),f}intersectSphere(e,t){if(e.radius<0)return null;Ri.subVectors(e.center,this.origin);let n=Ri.dot(this.direction),s=Ri.dot(Ri)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(n=(e.min.x-u.x)*c,s=(e.max.x-u.x)*c):(n=(e.max.x-u.x)*c,s=(e.min.x-u.x)*c),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,n,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,_=t.y-a.y,p=t.z-a.z,m=n.x-a.x,v=n.y-a.y,S=n.z-a.z,y=Math.abs(l),w=Math.abs(c),T=Math.abs(h),x,E,D,C,O,L,z,P,G,Z,q,ce;if(y>=w&&y>=T?(D=l,L=d,G=g,ce=m,l>=0?(x=c,E=h,C=u,O=f,z=_,P=p,Z=v,q=S):(x=h,E=c,C=f,O=u,z=p,P=_,Z=S,q=v)):w>=T?(D=c,L=u,G=_,ce=v,c>=0?(x=h,E=l,C=f,O=d,z=p,P=g,Z=S,q=m):(x=l,E=h,C=d,O=f,z=g,P=p,Z=m,q=S)):(D=h,L=f,G=p,ce=S,h>=0?(x=l,E=c,C=d,O=u,z=g,P=_,Z=m,q=v):(x=c,E=l,C=u,O=d,z=_,P=g,Z=v,q=m)),D===0)return null;let $=x/D,te=E/D,re=1/D,Ie=C-$*L,Ge=O-te*L,H=z-$*G,oe=P-te*G,Pe=Z-$*ce,Fe=q-te*ce,we=Pe*oe-Fe*H,He=Ie*Fe-Ge*Pe,Dt=H*Ge-oe*Ie;if(s){if(we<0||He<0||Dt<0)return null}else if((we<0||He<0||Dt<0)&&(we>0||He>0||Dt>0))return null;let qe=we+He+Dt;if(qe===0)return null;let lt=re*(we*L+He*G+Dt*ce);return(qe>0?lt<0:lt>0)?null:this.at(lt/qe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Zt=class extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new de(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.combine=xu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},cd=new St,xs=new Es,Wo=new xi,hd=new A,Xo=new A,qo=new A,Yo=new A,Yh=new A,Zo=new A,ud=new A,Jo=new A,ae=class extends bt{constructor(e=new At,t=new Zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Zo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(Yh.fromBufferAttribute(d,e),a?Zo.addScaledVector(Yh,h):Zo.addScaledVector(Yh.sub(t),h))}t.add(Zo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Wo.copy(n.boundingSphere),Wo.applyMatrix4(r),xs.copy(e.ray).recast(e.near),!(Wo.containsPoint(xs.origin)===!1&&(xs.intersectSphere(Wo,hd)===null||xs.origin.distanceToSquared(hd)>(e.far-e.near)**2))&&(cd.copy(r).invert(),xs.copy(e.ray).applyMatrix4(cd),!(n.boundingBox!==null&&xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,xs)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=a[p.materialIndex],v=Math.max(p.start,f.start),S=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,w=S;y<w;y+=3){let T=o.getX(y),x=o.getX(y+1),E=o.getX(y+2);s=$o(this,m,e,n,c,h,d,T,x,E),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let v=o.getX(p),S=o.getX(p+1),y=o.getX(p+2);s=$o(this,a,e,n,c,h,d,v,S,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=u.length;g<_;g++){let p=u[g],m=a[p.materialIndex],v=Math.max(p.start,f.start),S=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=v,w=S;y<w;y+=3){let T=y,x=y+1,E=y+2;s=$o(this,m,e,n,c,h,d,T,x,E),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let g=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=g,m=_;p<m;p+=3){let v=p,S=p+1,y=p+2;s=$o(this,a,e,n,c,h,d,v,S,y),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function Ag(i,e,t,n,s,r,a,o){let l;if(e.side===vn?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===ss,o),l===null)return null;Jo.copy(o),Jo.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(Jo);return c<t.near||c>t.far?null:{distance:c,point:Jo.clone(),object:i}}function $o(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Xo),i.getVertexPosition(l,qo),i.getVertexPosition(c,Yo);let h=Ag(i,e,t,n,Xo,qo,Yo,ud);if(h){let d=new A;Ci.getBarycoord(ud,Xo,qo,Yo,d),s&&(h.uv=Ci.getInterpolatedAttribute(s,o,l,c,d,new ie)),r&&(h.uv1=Ci.getInterpolatedAttribute(r,o,l,c,d,new ie)),a&&(h.normal=Ci.getInterpolatedAttribute(a,o,l,c,d,new A),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new A,materialIndex:0};Ci.getNormal(Xo,qo,Yo,u.normal),h.face=u,h.barycoord=d}return h}var va=class extends In{constructor(e=null,t=1,n=1,s,r,a,o,l,c=pn,h=pn,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ya=class extends Gt{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},rr=new St,fd=new St,Ko=[],dd=new _i,Rg=new St,na=new ae,ia=new xi,Un=class extends ae{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new ya(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Rg)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new _i),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rr),dd.copy(e.boundingBox).applyMatrix4(rr),this.boundingBox.union(dd)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new xi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,rr),ia.copy(e.boundingSphere).applyMatrix4(rr),this.boundingSphere.union(ia)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,a=e*r+1;for(let o=0;o<n.length;o++)n[o]=s[a+o]}raycast(e,t){let n=this.matrixWorld,s=this.count;if(na.geometry=this.geometry,na.material=this.material,na.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ia.copy(this.boundingSphere),ia.applyMatrix4(n),e.ray.intersectsSphere(ia)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,rr),fd.multiplyMatrices(n,rr),na.matrixWorld=fd,na.raycast(e,Ko);for(let a=0,o=Ko.length;a<o;a++){let l=Ko[a];l.instanceId=r,l.object=this,t.push(l)}Ko.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new ya(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new va(new Float32Array(s*this.count),s,this.count,Ql,Jn));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<n.length;c++)a+=n[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*e;return r[l]=o,r.set(n,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},vs=new xi,Cg=new ie(.5,.5),Qo=new A,Ki=class{constructor(e=new kn,t=new kn,n=new kn,s=new kn,r=new kn,a=new kn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Zn,n=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],_=r[9],p=r[10],m=r[11],v=r[12],S=r[13],y=r[14],w=r[15];if(s[0].setComponents(c-a,f-h,m-g,w-v).normalize(),s[1].setComponents(c+a,f+h,m+g,w+v).normalize(),s[2].setComponents(c+o,f+d,m+_,w+S).normalize(),s[3].setComponents(c-o,f-d,m-_,w-S).normalize(),n)s[4].setComponents(l,u,p,y).normalize(),s[5].setComponents(c-l,f-u,m-p,w-y).normalize();else if(s[4].setComponents(c-l,f-u,m-p,w-y).normalize(),t===Zn)s[5].setComponents(c+l,f+u,m+p,w+y).normalize();else if(t===fr)s[5].setComponents(l,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(e){vs.center.set(0,0,0);let t=Cg.distanceTo(e.center);return vs.radius=.7071067811865476+t,vs.applyMatrix4(e.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Qo.x=s.normal.x>0?e.max.x:e.min.x,Qo.y=s.normal.y>0?e.max.y:e.min.y,Qo.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Qo)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},pd=new St,El=class i{constructor(){this.coordinateSystem=Zn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];pd.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new Ki),n[s].setFromProjectionMatrix(pd,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new Ki),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var Qi=class extends ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new de(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},bl=new A,Tl=new A,md=new St,sa=new Es,jo=new xi,Zh=new A,gd=new A,xr=class extends bt{constructor(e=new At,t=new Qi){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)bl.fromBufferAttribute(t,s-1),Tl.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=bl.distanceTo(Tl);e.setAttribute("lineDistance",new Ke(n,1))}else Xe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),jo.copy(n.boundingSphere),jo.applyMatrix4(s),jo.radius+=r,e.ray.intersectsSphere(jo)===!1)return;md.copy(s).invert(),sa.copy(e.ray).applyMatrix4(md);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,u=n.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=c){let m=h.getX(_),v=h.getX(_+1),S=el(this,e,sa,l,m,v,_);S&&t.push(S)}if(this.isLineLoop){let _=h.getX(g-1),p=h.getX(f),m=el(this,e,sa,l,_,p,g-1);m&&t.push(m)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=f,p=g-1;_<p;_+=c){let m=el(this,e,sa,l,_,_+1,_);m&&t.push(m)}if(this.isLineLoop){let _=el(this,e,sa,l,g-1,f,g-1);_&&t.push(_)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function el(i,e,t,n,s,r,a){let o=i.geometry.attributes.position;if(bl.fromBufferAttribute(o,s),Tl.fromBufferAttribute(o,r),t.distanceSqToSegment(bl,Tl,Zh,gd)>n)return;Zh.applyMatrix4(i.matrixWorld);let c=e.ray.origin.distanceTo(Zh);if(!(c<e.near||c>e.far))return{distance:c,point:gd.clone().applyMatrix4(i.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:i}}var _d=new A,xd=new A,Ma=class extends xr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)_d.fromBufferAttribute(t,s),xd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+_d.distanceTo(xd);e.setAttribute("lineDistance",new Ke(n,1))}else Xe("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}};var wl=class extends ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new de(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},vd=new St,iu=new Es,tl=new xi,nl=new A,Sa=class extends bt{constructor(e=new At,t=new wl){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),tl.copy(n.boundingSphere),tl.applyMatrix4(s),tl.radius+=r,e.ray.intersectsSphere(tl)===!1)return;vd.copy(s).invert(),iu.copy(e.ray).applyMatrix4(vd);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,_=f;g<_;g++){let p=c.getX(g);nl.fromBufferAttribute(d,p),yd(nl,p,l,s,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,_=f;g<_;g++)nl.fromBufferAttribute(d,g),yd(nl,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function yd(i,e,t,n,s,r,a){let o=iu.distanceSqToPoint(i);if(o<t){let l=new A;iu.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ea=class extends In{constructor(e=[],t=Ls,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},vr=class extends In{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Di=class extends In{constructor(e,t,n=ci,s,r,a,o=pn,l=pn,c,h=Ii,d=1){if(h!==Ii&&h!==Fi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new pr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},ba=class extends Di{constructor(e,t=ci,n=Ls,s,r,a=pn,o=pn,l,c=Ii){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ta=class extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},vi=class i extends At{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(d,2));function g(_,p,m,v,S,y,w,T,x,E,D){let C=y/x,O=w/E,L=y/2,z=w/2,P=T/2,G=x+1,Z=E+1,q=0,ce=0,$=new A;for(let te=0;te<Z;te++){let re=te*O-z;for(let Ie=0;Ie<G;Ie++){let Ge=Ie*C-L;$[_]=Ge*v,$[p]=re*S,$[m]=P,c.push($.x,$.y,$.z),$[_]=0,$[p]=0,$[m]=T>0?1:-1,h.push($.x,$.y,$.z),d.push(Ie/x),d.push(1-te/E),q+=1}}for(let te=0;te<E;te++)for(let re=0;re<x;re++){let Ie=u+re+G*te,Ge=u+re+G*(te+1),H=u+(re+1)+G*(te+1),oe=u+(re+1)+G*te;l.push(Ie,Ge,oe),l.push(Ge,H,oe),ce+=6}o.addGroup(f,ce,D),f+=ce,u+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},yr=class i extends At{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=t/2,d=Math.PI/2*e,u=t,f=2*d+u,g=n*2+r,_=s+1,p=new A,m=new A;for(let v=0;v<=g;v++){let S=0,y=0,w=0,T=0;if(v<=n){let D=v/n,C=D*Math.PI/2;y=-h-e*Math.cos(C),w=e*Math.sin(C),T=-e*Math.cos(C),S=D*d}else if(v<=n+r){let D=(v-n)/r;y=-h+D*t,w=e,T=0,S=d+D*u}else{let D=(v-n-r)/n,C=D*Math.PI/2;y=h+e*Math.sin(C),w=e*Math.cos(C),T=e*Math.sin(C),S=d+u+D*d}let x=Math.max(0,Math.min(1,S/f)),E=0;v===0?E=.5/s:v===g&&(E=-.5/s);for(let D=0;D<=s;D++){let C=D/s,O=C*Math.PI*2,L=Math.sin(O),z=Math.cos(O);m.x=-w*z,m.y=y,m.z=w*L,o.push(m.x,m.y,m.z),p.set(-w*z,T,w*L),p.normalize(),l.push(p.x,p.y,p.z),c.push(C+E,x)}if(v>0){let D=(v-1)*_;for(let C=0;C<s;C++){let O=D+C,L=D+C+1,z=v*_+C,P=v*_+C+1;a.push(O,L,z),a.push(L,P,z)}}}this.setIndex(a),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(l,3)),this.setAttribute("uv",new Ke(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Ni=class i extends At{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new A,h=new ie;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=t;d++,u+=3){let f=n+d/t*s;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Ke(a,3)),this.setAttribute("normal",new Ke(o,3)),this.setAttribute("uv",new Ke(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},mn=class i extends At{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,_=[],p=n/2,m=0;v(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Ke(d,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(f,2));function v(){let y=new A,w=new A,T=0,x=(t-e)/n;for(let E=0;E<=r;E++){let D=[],C=E/r,O=C*(t-e)+e;for(let L=0;L<=s;L++){let z=L/s,P=z*l+o,G=Math.sin(P),Z=Math.cos(P);w.x=O*G,w.y=-C*n+p,w.z=O*Z,d.push(w.x,w.y,w.z),y.set(G,x,Z).normalize(),u.push(y.x,y.y,y.z),f.push(z,1-C),D.push(g++)}_.push(D)}for(let E=0;E<s;E++)for(let D=0;D<r;D++){let C=_[D][E],O=_[D+1][E],L=_[D+1][E+1],z=_[D][E+1];(e>0||D!==0)&&(h.push(C,O,z),T+=3),(t>0||D!==r-1)&&(h.push(O,L,z),T+=3)}c.addGroup(m,T,0),m+=T}function S(y){let w=g,T=new ie,x=new A,E=0,D=y===!0?e:t,C=y===!0?1:-1;for(let L=1;L<=s;L++)d.push(0,p*C,0),u.push(0,C,0),f.push(.5,.5),g++;let O=g;for(let L=0;L<=s;L++){let P=L/s*l+o,G=Math.cos(P),Z=Math.sin(P);x.x=D*Z,x.y=p*C,x.z=D*G,d.push(x.x,x.y,x.z),u.push(0,C,0),T.x=G*.5+.5,T.y=Z*.5*C+.5,f.push(T.x,T.y),g++}for(let L=0;L<s;L++){let z=w+L,P=O+L;y===!0?h.push(P,P+1,z):h.push(P+1,P,z),E+=3}c.addGroup(m,E,y===!0?1:2),m+=E}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},si=class i extends mn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Mr=class i extends At{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new Ke(r,3)),this.setAttribute("normal",new Ke(r.slice(),3)),this.setAttribute("uv",new Ke(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let S=new A,y=new A,w=new A;for(let T=0;T<t.length;T+=3)f(t[T+0],S),f(t[T+1],y),f(t[T+2],w),l(S,y,w,v)}function l(v,S,y,w){let T=w+1,x=[];for(let E=0;E<=T;E++){x[E]=[];let D=v.clone().lerp(y,E/T),C=S.clone().lerp(y,E/T),O=T-E;for(let L=0;L<=O;L++)L===0&&E===T?x[E][L]=D:x[E][L]=D.clone().lerp(C,L/O)}for(let E=0;E<T;E++)for(let D=0;D<2*(T-E)-1;D++){let C=Math.floor(D/2);D%2===0?(u(x[E][C+1]),u(x[E+1][C]),u(x[E][C])):(u(x[E][C+1]),u(x[E+1][C+1]),u(x[E+1][C]))}}function c(v){let S=new A;for(let y=0;y<r.length;y+=3)S.x=r[y+0],S.y=r[y+1],S.z=r[y+2],S.normalize().multiplyScalar(v),r[y+0]=S.x,r[y+1]=S.y,r[y+2]=S.z}function h(){let v=new A;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];let y=p(v)/2/Math.PI+.5,w=m(v)/Math.PI+.5;a.push(y,1-w)}g(),d()}function d(){for(let v=0;v<a.length;v+=6){let S=a[v+0],y=a[v+2],w=a[v+4],T=Math.max(S,y,w),x=Math.min(S,y,w);T>.9&&x<.1&&(S<.2&&(a[v+0]+=1),y<.2&&(a[v+2]+=1),w<.2&&(a[v+4]+=1))}}function u(v){r.push(v.x,v.y,v.z)}function f(v,S){let y=v*3;S.x=e[y+0],S.y=e[y+1],S.z=e[y+2]}function g(){let v=new A,S=new A,y=new A,w=new A,T=new ie,x=new ie,E=new ie;for(let D=0,C=0;D<r.length;D+=9,C+=6){v.set(r[D+0],r[D+1],r[D+2]),S.set(r[D+3],r[D+4],r[D+5]),y.set(r[D+6],r[D+7],r[D+8]),T.set(a[C+0],a[C+1]),x.set(a[C+2],a[C+3]),E.set(a[C+4],a[C+5]),w.copy(v).add(S).add(y).divideScalar(3);let O=p(w);_(T,C+0,v,O),_(x,C+2,S,O),_(E,C+4,y,O)}}function _(v,S,y,w){w<0&&v.x===1&&(a[S]=v.x-1),y.x===0&&y.z===0&&(a[S]=w/2/Math.PI+.5)}function p(v){return Math.atan2(v.z,-v.x)}function m(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}},ji=class i extends Mr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=1/n,r=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-s,-n,0,-s,n,0,s,-n,0,s,n,-s,-n,0,-s,n,0,s,-n,0,s,n,0,-n,0,-s,n,0,-s,-n,0,s,n,0,s],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(r,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],u=n[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new ie:new A);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new A,s=[],r=[],a=[],o=new A,l=new St;for(let f=0;f<=e;f++){let g=f/e;s[f]=this.getTangentAt(g,new A)}r[0]=new A,a[0]=new A;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),u<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(ct(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(t===!0){let f=Math.acos(ct(r[0].dot(r[e]),-1,1));f/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},Sr=class extends Gn{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new ie){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Al=class extends Sr{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Iu(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var Md=new A,Sd=new A,Jh=new Iu,$h=new Iu,Kh=new Iu,bs=class extends Gn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new A){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Sd.subVectors(s[0],s[1]).add(s[0]),c=Sd);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Md.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Md),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(u),f),p=Math.pow(u.distanceToSquared(h),f);_<1e-4&&(_=1),g<1e-4&&(g=_),p<1e-4&&(p=_),Jh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,_,p),$h.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,_,p),Kh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,_,p)}else this.curveType==="catmullrom"&&(Jh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),$h.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),Kh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return n.set(Jh.calc(l),$h.calc(l),Kh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new A().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Ed(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function Pg(i,e){let t=1-i;return t*t*e}function Ig(i,e){return 2*(1-i)*i*e}function Lg(i,e){return i*i*e}function aa(i,e,t,n){return Pg(i,e)+Ig(i,t)+Lg(i,n)}function Dg(i,e){let t=1-i;return t*t*t*e}function Ng(i,e){let t=1-i;return 3*t*t*i*e}function Ug(i,e){return 3*(1-i)*i*i*e}function Og(i,e){return i*i*i*e}function oa(i,e,t,n,s){return Dg(i,e)+Ng(i,t)+Ug(i,n)+Og(i,s)}var wa=class extends Gn{constructor(e=new ie,t=new ie,n=new ie,s=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new ie){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(oa(e,s.x,r.x,a.x,o.x),oa(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Rl=class extends Gn{constructor(e=new A,t=new A,n=new A,s=new A){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new A){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(oa(e,s.x,r.x,a.x,o.x),oa(e,s.y,r.y,a.y,o.y),oa(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Aa=class extends Gn{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Cl=class extends Gn{constructor(e=new A,t=new A){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new A){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new A){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ra=class extends Gn{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(aa(e,s.x,r.x,a.x),aa(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ri=class extends Gn{constructor(e=new A,t=new A,n=new A){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new A){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(aa(e,s.x,r.x,a.x),aa(e,s.y,r.y,a.y),aa(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ts=class extends Gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Ed(o,l.x,c.x,h.x,d.x),Ed(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new ie().fromArray(s))}return this}},Pl=Object.freeze({__proto__:null,ArcCurve:Al,CatmullRomCurve3:bs,CubicBezierCurve:wa,CubicBezierCurve3:Rl,EllipseCurve:Sr,LineCurve:Aa,LineCurve3:Cl,QuadraticBezierCurve:Ra,QuadraticBezierCurve3:ri,SplineCurve:Ts}),Il=class extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Pl[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Pl[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},Ca=class extends Il{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Aa(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Ra(this.currentPoint.clone(),new ie(e,t),new ie(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new wa(this.currentPoint.clone(),new ie(e,t),new ie(n,s),new ie(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Ts(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Sr(e,t,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},ai=class extends Ca{constructor(e){super(e),this.uuid=as(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new Ca().fromJSON(s))}return this}};function Fg(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Ep(i,0,s,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(n&&(r=Gg(i,e,r,t)),i.length>80*t){o=i[0],l=i[1];let h=o,d=l;for(let u=t;u<s;u+=t){let f=i[u],g=i[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Pa(r,a,t,o,l,c,0),a}function Ep(i,e,t,n,s){let r;if(s===jg(i,e,t,n)>0)for(let a=e;a<t;a+=n)r=bd(a/n|0,i[a],i[a+1],r);else for(let a=t-n;a>=e;a-=n)r=bd(a/n|0,i[a],i[a+1],r);return r&&Er(r,r.next)&&(La(r),r=r.next),r}function ws(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(Er(t,t.next)||qt(t.prev,t,t.next)===0)){if(La(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function Pa(i,e,t,n,s,r,a){if(!i)return;!a&&r&&Yg(i,n,s,r);let o=i;for(;i.prev!==i.next;){let l=i.prev,c=i.next;if(r?zg(i,n,s,r):Bg(i)){e.push(l.i,i.i,c.i),La(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=Hg(ws(i),e),Pa(i,e,t,n,s,r,2)):a===2&&kg(i,e,t,n,s,r):Pa(ws(i),e,t,n,s,r,1);break}}}function Bg(i){let e=i.prev,t=i,n=i.next;if(qt(e,t,n)>=0)return!1;let s=e.x,r=t.x,a=n.x,o=e.y,l=t.y,c=n.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&ra(s,o,r,l,a,c,g.x,g.y)&&qt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function zg(i,e,t,n){let s=i.prev,r=i,a=i.next;if(qt(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),_=Math.max(o,l,c),p=Math.max(h,d,u),m=su(f,g,e,t,n),v=su(_,p,e,t,n),S=i.prevZ,y=i.nextZ;for(;S&&S.z>=m&&y&&y.z<=v;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=p&&S!==s&&S!==a&&ra(o,h,l,d,c,u,S.x,S.y)&&qt(S.prev,S,S.next)>=0||(S=S.prevZ,y.x>=f&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&ra(o,h,l,d,c,u,y.x,y.y)&&qt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;S&&S.z>=m;){if(S.x>=f&&S.x<=_&&S.y>=g&&S.y<=p&&S!==s&&S!==a&&ra(o,h,l,d,c,u,S.x,S.y)&&qt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;y&&y.z<=v;){if(y.x>=f&&y.x<=_&&y.y>=g&&y.y<=p&&y!==s&&y!==a&&ra(o,h,l,d,c,u,y.x,y.y)&&qt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function Hg(i,e){let t=i;do{let n=t.prev,s=t.next.next;!Er(n,s)&&Tp(n,t,t.next,s)&&Ia(n,s)&&Ia(s,n)&&(e.push(n.i,t.i,s.i),La(t),La(t.next),t=i=s),t=t.next}while(t!==i);return ws(t)}function kg(i,e,t,n,s,r){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&$g(a,o)){let l=wp(a,o);a=ws(a,a.next),l=ws(l,l.next),Pa(a,e,t,n,s,r,0),Pa(l,e,t,n,s,r,0);return}o=o.next}a=a.next}while(a!==i)}function Gg(i,e,t,n){let s=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*n,l=r<a-1?e[r+1]*n:i.length,c=Ep(i,o,l,n,!1);c===c.next&&(c.steiner=!0),s.push(Jg(c))}s.sort(Vg);for(let r=0;r<s.length;r++)t=Wg(s[r],t);return t}function Vg(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Wg(i,e){let t=Xg(i,e);if(!t)return e;let n=wp(t,i);return ws(n,n.next),ws(t,t.next)}function Xg(i,e){let t=e,n=i.x,s=i.y,r=-1/0,a;if(Er(i,t))return t;do{if(Er(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=n&&d>r&&(r=d,a=t.x<t.next.x?t:t.next,d===n))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;t=a;do{if(n>=t.x&&t.x>=l&&n!==t.x&&bp(s<c?n:r,s,l,c,s<c?r:n,s,t.x,t.y)){let d=Math.abs(s-t.y)/(n-t.x);Ia(t,i)&&(d<h||d===h&&(t.x>a.x||t.x===a.x&&qg(a,t)))&&(a=t,h=d)}t=t.next}while(t!==o);return a}function qg(i,e){return qt(i.prev,i,e.prev)<0&&qt(e.next,i,i.next)<0}function Yg(i,e,t,n){let s=i;do s.z===0&&(s.z=su(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Zg(s)}function Zg(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let a=n,o=0;for(let c=0;c<t&&(o++,a=a.nextZ,!!a);c++);let l=t;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||n.z<=a.z)?(s=n,n=n.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=a}r.nextZ=null,t*=2}while(e>1);return i}function su(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Jg(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function bp(i,e,t,n,s,r,a,o){return(s-a)*(e-o)>=(i-a)*(r-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(s-a)*(n-o)}function ra(i,e,t,n,s,r,a,o){return!(i===a&&e===o)&&bp(i,e,t,n,s,r,a,o)}function $g(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Kg(i,e)&&(Ia(i,e)&&Ia(e,i)&&Qg(i,e)&&(qt(i.prev,i,e.prev)||qt(i,e.prev,e))||Er(i,e)&&qt(i.prev,i,i.next)>0&&qt(e.prev,e,e.next)>0)}function qt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function Er(i,e){return i.x===e.x&&i.y===e.y}function Tp(i,e,t,n){let s=sl(qt(i,e,t)),r=sl(qt(i,e,n)),a=sl(qt(t,n,i)),o=sl(qt(t,n,e));return!!(s!==r&&a!==o||s===0&&il(i,t,e)||r===0&&il(i,n,e)||a===0&&il(t,i,n)||o===0&&il(t,e,n))}function il(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function sl(i){return i>0?1:i<0?-1:0}function Kg(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Tp(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function Ia(i,e){return qt(i.prev,i,i.next)<0?qt(i,e,i.next)>=0&&qt(i,i.prev,e)>=0:qt(i,e,i.prev)<0||qt(i,i.next,e)<0}function Qg(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function wp(i,e){let t=ru(i.i,i.x,i.y),n=ru(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function bd(i,e,t,n){let s=ru(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function La(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function ru(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function jg(i,e,t,n){let s=0;for(let r=e,a=t-n;r<t;r+=n)s+=(i[a]-i[r])*(i[r+1]+i[a+1]),a=r;return s}var au=class{static triangulate(e,t,n=2){return Fg(e,t,n)}},ys=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Td(e),wd(n,e);let a=e.length;t.forEach(Td);for(let l=0;l<t.length;l++)s.push(a),a+=t[l].length,wd(n,t[l]);let o=au.triangulate(n,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};function Td(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function wd(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var oi=class i extends At{constructor(e=new ai([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let o=0,l=e.length;o<l;o++){let c=e[o];a(c)}this.setAttribute("position",new Ke(s,3)),this.setAttribute("uv",new Ke(r,2)),this.computeVertexNormals();function a(o){let l=[],c=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,d=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,_=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,m=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:e0,S,y=!1,w,T,x,E;if(m){S=m.getSpacedPoints(h),y=!0,u=!1;let se=m.isCatmullRomCurve3?m.closed:!1;w=m.computeFrenetFrames(h,se),T=new A,x=new A,E=new A}u||(p=0,f=0,g=0,_=0);let D=o.extractPoints(c),C=D.shape,O=D.holes;if(!ys.isClockWise(C)){C=C.reverse();for(let se=0,xe=O.length;se<xe;se++){let me=O[se];ys.isClockWise(me)&&(O[se]=me.reverse())}}function z(se){let me=10000000000000001e-36,Le=se[0];for(let Te=1;Te<=se.length;Te++){let nt=Te%se.length,ze=se[nt],pt=ze.x-Le.x,mt=ze.y-Le.y,yt=pt*pt+mt*mt,B=Math.max(Math.abs(ze.x),Math.abs(ze.y),Math.abs(Le.x),Math.abs(Le.y)),nn=me*B*B;if(yt<=nn){se.splice(nt,1),Te--;continue}Le=ze}}z(C),O.forEach(z);let P=O.length,G=C;for(let se=0;se<P;se++){let xe=O[se];C=C.concat(xe)}function Z(se,xe,me){return xe||Ye("ExtrudeGeometry: vec does not exist"),se.clone().addScaledVector(xe,me)}let q=C.length;function ce(se,xe,me){let Le,Te,nt,ze=se.x-xe.x,pt=se.y-xe.y,mt=me.x-se.x,yt=me.y-se.y,B=ze*ze+pt*pt,nn=ze*yt-pt*mt;if(Math.abs(nn)>Number.EPSILON){let ht=Math.sqrt(B),Nt=Math.sqrt(mt*mt+yt*yt),Se=xe.x-pt/ht,Yt=xe.y+ze/ht,We=me.x-yt/Nt,Ze=me.y+mt/Nt,R=((We-Se)*yt-(Ze-Yt)*mt)/(ze*yt-pt*mt);Le=Se+ze*R-se.x,Te=Yt+pt*R-se.y;let M=Le*Le+Te*Te;if(M<=2)return new ie(Le,Te);nt=Math.sqrt(M/2)}else{let ht=!1;ze>Number.EPSILON?mt>Number.EPSILON&&(ht=!0):ze<-Number.EPSILON?mt<-Number.EPSILON&&(ht=!0):Math.sign(pt)===Math.sign(yt)&&(ht=!0),ht?(Le=-pt,Te=ze,nt=Math.sqrt(B)):(Le=ze,Te=pt,nt=Math.sqrt(B/2))}return new ie(Le/nt,Te/nt)}let $=[];for(let se=0,xe=G.length,me=xe-1,Le=se+1;se<xe;se++,me++,Le++)me===xe&&(me=0),Le===xe&&(Le=0),$[se]=ce(G[se],G[me],G[Le]);let te=[],re,Ie=$.concat();for(let se=0,xe=P;se<xe;se++){let me=O[se];re=[];for(let Le=0,Te=me.length,nt=Te-1,ze=Le+1;Le<Te;Le++,nt++,ze++)nt===Te&&(nt=0),ze===Te&&(ze=0),re[Le]=ce(me[Le],me[nt],me[ze]);te.push(re),Ie=Ie.concat(re)}let Ge;if(p===0)Ge=ys.triangulateShape(G,O);else{let se=[],xe=[];for(let me=0;me<p;me++){let Le=me/p,Te=f*Math.cos(Le*Math.PI/2),nt=g*Math.sin(Le*Math.PI/2)+_;for(let ze=0,pt=G.length;ze<pt;ze++){let mt=Z(G[ze],$[ze],nt);He(mt.x,mt.y,-Te),Le===0&&se.push(mt)}for(let ze=0,pt=P;ze<pt;ze++){let mt=O[ze];re=te[ze];let yt=[];for(let B=0,nn=mt.length;B<nn;B++){let ht=Z(mt[B],re[B],nt);He(ht.x,ht.y,-Te),Le===0&&yt.push(ht)}Le===0&&xe.push(yt)}}Ge=ys.triangulateShape(se,xe)}let H=Ge.length,oe=g+_;for(let se=0;se<q;se++){let xe=u?Z(C[se],Ie[se],oe):C[se];y?(x.copy(w.normals[0]).multiplyScalar(xe.x),T.copy(w.binormals[0]).multiplyScalar(xe.y),E.copy(S[0]).add(x).add(T),He(E.x,E.y,E.z)):He(xe.x,xe.y,0)}for(let se=1;se<=h;se++)for(let xe=0;xe<q;xe++){let me=u?Z(C[xe],Ie[xe],oe):C[xe];y?(x.copy(w.normals[se]).multiplyScalar(me.x),T.copy(w.binormals[se]).multiplyScalar(me.y),E.copy(S[se]).add(x).add(T),He(E.x,E.y,E.z)):He(me.x,me.y,d/h*se)}for(let se=p-1;se>=0;se--){let xe=se/p,me=f*Math.cos(xe*Math.PI/2),Le=g*Math.sin(xe*Math.PI/2)+_;for(let Te=0,nt=G.length;Te<nt;Te++){let ze=Z(G[Te],$[Te],Le);He(ze.x,ze.y,d+me)}for(let Te=0,nt=O.length;Te<nt;Te++){let ze=O[Te];re=te[Te];for(let pt=0,mt=ze.length;pt<mt;pt++){let yt=Z(ze[pt],re[pt],Le);y?He(yt.x,yt.y+S[h-1].y,S[h-1].x+me):He(yt.x,yt.y,d+me)}}}Pe(),Fe();function Pe(){let se=s.length/3;if(u){let xe=0,me=q*xe;for(let Le=0;Le<H;Le++){let Te=Ge[Le];Dt(Te[2]+me,Te[1]+me,Te[0]+me)}xe=h+p*2,me=q*xe;for(let Le=0;Le<H;Le++){let Te=Ge[Le];Dt(Te[0]+me,Te[1]+me,Te[2]+me)}}else{for(let xe=0;xe<H;xe++){let me=Ge[xe];Dt(me[2],me[1],me[0])}for(let xe=0;xe<H;xe++){let me=Ge[xe];Dt(me[0]+q*h,me[1]+q*h,me[2]+q*h)}}n.addGroup(se,s.length/3-se,0)}function Fe(){let se=s.length/3,xe=0;we(G,xe),xe+=G.length;for(let me=0,Le=O.length;me<Le;me++){let Te=O[me];we(Te,xe),xe+=Te.length}n.addGroup(se,s.length/3-se,1)}function we(se,xe){let me=se.length;for(;--me>=0;){let Le=me,Te=me-1;Te<0&&(Te=se.length-1);for(let nt=0,ze=h+p*2;nt<ze;nt++){let pt=q*nt,mt=q*(nt+1),yt=xe+Le+pt,B=xe+Te+pt,nn=xe+Te+mt,ht=xe+Le+mt;qe(yt,B,nn,ht)}}}function He(se,xe,me){l.push(se),l.push(xe),l.push(me)}function Dt(se,xe,me){lt(se),lt(xe),lt(me);let Le=s.length/3,Te=v.generateTopUV(n,s,Le-3,Le-2,Le-1);dt(Te[0]),dt(Te[1]),dt(Te[2])}function qe(se,xe,me,Le){lt(se),lt(xe),lt(Le),lt(xe),lt(me),lt(Le);let Te=s.length/3,nt=v.generateSideWallUV(n,s,Te-6,Te-3,Te-2,Te-1);dt(nt[0]),dt(nt[1]),dt(nt[3]),dt(nt[1]),dt(nt[2]),dt(nt[3])}function lt(se){s.push(l[se*3+0]),s.push(l[se*3+1]),s.push(l[se*3+2])}function dt(se){r.push(se.x),r.push(se.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return t0(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];n.push(o)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Pl[s.type]().fromJSON(s)),new i(n,e.options)}},e0={generateTopUV:function(i,e,t,n,s){let r=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[s*3],h=e[s*3+1];return[new ie(r,a),new ie(o,l),new ie(c,h)]},generateSideWallUV:function(i,e,t,n,s,r){let a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],h=e[n*3+1],d=e[n*3+2],u=e[s*3],f=e[s*3+1],g=e[s*3+2],_=e[r*3],p=e[r*3+1],m=e[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new ie(a,1-l),new ie(c,1-d),new ie(u,1-g),new ie(_,1-m)]:[new ie(o,1-l),new ie(h,1-d),new ie(f,1-g),new ie(p,1-m)]}};function t0(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Da=class i extends Mr{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},es=class i extends At{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=ct(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,d=new A,u=new ie,f=new A,g=new A,_=new A,p=0,m=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:p=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-p,f.z=m*0,_.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:_.normalize(),l.push(_.x,_.y,_.z);break;default:p=e[v+1].x-e[v].x,m=e[v+1].y-e[v].y,f.x=m*1,f.y=-p,f.z=m*0,g.copy(f),f.x+=_.x,f.y+=_.y,f.z+=_.z,f.normalize(),l.push(f.x,f.y,f.z),_.copy(g)}for(let v=0;v<=t;v++){let S=n+v*h*s,y=Math.sin(S),w=Math.cos(S);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*y,d.y=e[T].y,d.z=e[T].x*w,a.push(d.x,d.y,d.z),u.x=v/t,u.y=T/(e.length-1),o.push(u.x,u.y);let x=l[3*T+0]*y,E=l[3*T+1],D=l[3*T+0]*w;c.push(x,E,D)}}for(let v=0;v<t;v++)for(let S=0;S<e.length-1;S++){let y=S+v*e.length,w=y,T=y+e.length,x=y+e.length+1,E=y+1;r.push(w,T,E),r.push(x,E,T)}this.setIndex(r),this.setAttribute("position",new Ke(a,3)),this.setAttribute("uv",new Ke(o,2)),this.setAttribute("normal",new Ke(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},Na=class i extends Mr{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,s,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}},Ln=class i extends At{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],_=[],p=[];for(let m=0;m<h;m++){let v=m*u-a;for(let S=0;S<c;S++){let y=S*d-r;g.push(y,-v,0),_.push(0,0,1),p.push(S/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let v=0;v<o;v++){let S=v+c*m,y=v+c*(m+1),w=v+1+c*(m+1),T=v+1+c*m;f.push(S,y,T),f.push(y,w,T)}this.setIndex(f),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(_,3)),this.setAttribute("uv",new Ke(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},Ua=class i extends At{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=e,u=(t-e)/s,f=new A,g=new ie;for(let _=0;_<=s;_++){for(let p=0;p<=n;p++){let m=r+p/n*a;f.x=d*Math.cos(m),f.y=d*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/t+1)/2,g.y=(f.y/t+1)/2,h.push(g.x,g.y)}d+=u}for(let _=0;_<s;_++){let p=_*(n+1);for(let m=0;m<n;m++){let v=m+p,S=v,y=v+n+1,w=v+n+2,T=v+1;o.push(S,y,T),o.push(y,w,T)}}this.setIndex(o),this.setAttribute("position",new Ke(l,3)),this.setAttribute("normal",new Ke(c,3)),this.setAttribute("uv",new Ke(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Rt=class i extends At{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new A,u=new A,f=[],g=[],_=[],p=[];for(let m=0;m<=n;m++){let v=[],S=m/n,y=a+S*o,w=e*Math.cos(y),T=Math.sqrt(e*e-w*w),x=0;m===0&&a===0?x=.5/t:m===n&&l===Math.PI&&(x=-.5/t);for(let E=0;E<=t;E++){let D=E/t,C=s+D*r;d.x=-T*Math.cos(C),d.y=w,d.z=T*Math.sin(C),g.push(d.x,d.y,d.z),u.copy(d).normalize(),_.push(u.x,u.y,u.z),p.push(D+x,1-S),v.push(c++)}h.push(v)}for(let m=0;m<n;m++)for(let v=0;v<t;v++){let S=h[m][v+1],y=h[m][v],w=h[m+1][v],T=h[m+1][v+1];(m!==0||a>0)&&f.push(S,y,T),(m!==n-1||l<Math.PI)&&f.push(y,w,T)}this.setIndex(f),this.setAttribute("position",new Ke(g,3)),this.setAttribute("normal",new Ke(_,3)),this.setAttribute("uv",new Ke(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Ft=class i extends At{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},n=Math.floor(n),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new A,f=new A,g=new A;for(let _=0;_<=n;_++){let p=a+_/n*o;for(let m=0;m<=s;m++){let v=m/s*r;f.x=(e+t*Math.cos(p))*Math.cos(v),f.y=(e+t*Math.cos(p))*Math.sin(v),f.z=t*Math.sin(p),c.push(f.x,f.y,f.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(m/s),d.push(_/n)}}for(let _=1;_<=n;_++)for(let p=1;p<=s;p++){let m=(s+1)*_+p-1,v=(s+1)*(_-1)+p-1,S=(s+1)*(_-1)+p,y=(s+1)*_+p;l.push(m,v,y),l.push(v,S,y)}this.setIndex(l),this.setAttribute("position",new Ke(c,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var li=class i extends At{constructor(e=new ri(new A(-1,-1,0),new A(-1,1,0),new A(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new A,l=new A,c=new ie,h=new A,d=[],u=[],f=[],g=[];_(),this.setIndex(g),this.setAttribute("position",new Ke(d,3)),this.setAttribute("normal",new Ke(u,3)),this.setAttribute("uv",new Ke(f,2));function _(){for(let S=0;S<t;S++)p(S);p(r===!1?t:0),v(),m()}function p(S){h=e.getPointAt(S/t,h);let y=a.normals[S],w=a.binormals[S];for(let T=0;T<=s;T++){let x=T/s*Math.PI*2,E=Math.sin(x),D=-Math.cos(x);l.x=D*y.x+E*w.x,l.y=D*y.y+E*w.y,l.z=D*y.z+E*w.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+n*l.x,o.y=h.y+n*l.y,o.z=h.z+n*l.z,d.push(o.x,o.y,o.z)}}function m(){for(let S=1;S<=t;S++)for(let y=1;y<=s;y++){let w=(s+1)*(S-1)+(y-1),T=(s+1)*S+(y-1),x=(s+1)*S+y,E=(s+1)*(S-1)+y;g.push(w,T,E),g.push(T,x,E)}}function v(){for(let S=0;S<=t;S++)for(let y=0;y<=s;y++)c.x=S/t,c.y=y/s,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Pl[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Ns(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Ad(s))s.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Ad(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function wn(i){let e={};for(let t=0;t<i.length;t++){let n=Ns(i[t]);for(let s in n)e[s]=n[s]}return e}function Ad(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function n0(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Lu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ut.workingColorSpace}var zi={clone:Ns,merge:wn},i0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,s0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Tt=class extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=i0,this.fragmentShader=s0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ns(e.uniforms),this.uniformsGroups=n0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new de().setHex(s.value);break;case"v2":this.uniforms[n].value=new ie().fromArray(s.value);break;case"v3":this.uniforms[n].value=new A().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Vt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new Qe().fromArray(s.value);break;case"m4":this.uniforms[n].value=new St().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},br=class extends Tt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ft=class extends ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new de(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new de(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Lc,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Li,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},xt=class extends ft{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new de(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new de(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new de(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Ms('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Ms('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var Ll=class extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ap,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Dl=class extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ar(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function rl(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var ts=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Nl=class extends ts{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:eu,endingEnd:eu}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case tu:r=e,o=2*t-n;break;case nu:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case tu:a=e,l=2*n-t;break;case nu:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(n-t)/(s-t),_=g*g,p=_*g,m=-u*p+2*u*_-u*g,v=(1+u)*p+(-1.5-2*u)*_+(-.5+u)*g+1,S=(-1-f)*p+(1.5+f)*_+.5*g,y=f*p-f*_;for(let w=0;w!==o;++w)r[w]=m*a[h+w]+v*a[c+w]+S*a[l+w]+y*a[d+w];return r}},Ul=class extends ts{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},Ol=class extends ts{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Fl=class extends ts{interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(n-t)/(s-t),_=1-g;for(let p=0;p!==o;++p)r[p]=a[c+p]*_+a[l+p]*g;return r}let u=o*2,f=e-1;for(let g=0;g!==o;++g){let _=a[c+g],p=a[l+g],m=f*u+g*2,v=d[m],S=d[m+1],y=e*u+g*2,w=h[y],T=h[y+1],x=a0(n,t,v,w,s);r[g]=Ap(x,_,S,T,p)}return r}};function Ap(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function r0(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function a0(i,e,t,n,s){let r=(i-e)/(s-e);for(let a=0;a<8;a++){let o=Ap(r,e,t,n,s)-i;if(Math.abs(o)<1e-10)break;let l=r0(r,e,t,n,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}var Vn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ar(t,this.TimeBufferType),this.values=ar(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ar(e.times,Array),values:ar(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),rl(e.settings)&&(n.settings={inTangents:ar(e.settings.inTangents,Array),outTangents:ar(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ol(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ul(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Nl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Fl(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case la:t=this.InterpolantFactoryMethodDiscrete;break;case xl:t=this.InterpolantFactoryMethodLinear;break;case ll:t=this.InterpolantFactoryMethodSmooth;break;case jh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return la;case this.InterpolantFactoryMethodLinear:return xl;case this.InterpolantFactoryMethodSmooth:return ll;case this.InterpolantFactoryMethodBezier:return jh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;rl(this.settings)&&(Rd(this.settings.inTangents,e),Rd(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;rl(this.settings)&&(Cd(this.settings.inTangents,e),Cd(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ye("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(Ye("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){Ye("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){Ye("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&cg(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){Ye("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===ll,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,u=d-n,f=d+n;for(let g=0;g!==n;++g){let _=t[d+g];if(_!==t[u+g]||_!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,u=a*n;for(let f=0;f!==n;++f)t[u+f]=t[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,rl(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function Rd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function Cd(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}Vn.prototype.ValueTypeName="";Vn.prototype.TimeBufferType=Float32Array;Vn.prototype.ValueBufferType=Float32Array;Vn.prototype.DefaultInterpolation=xl;var ns=class extends Vn{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName="bool";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=la;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var Bl=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}};Bl.prototype.ValueTypeName="color";var zl=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}};zl.prototype.ValueTypeName="number";var Hl=class extends ts{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)gi.slerpFlat(r,0,a,c-o,a,c,l);return r}},Oa=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Hl(this.times,this.values,this.getValueSize(),e)}};Oa.prototype.ValueTypeName="quaternion";Oa.prototype.InterpolantFactoryMethodSmooth=void 0;var is=class extends Vn{constructor(e,t,n){super(e,t,n)}};is.prototype.ValueTypeName="string";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=la;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var kl=class extends Vn{constructor(e,t,n,s){super(e,t,n,s)}};kl.prototype.ValueTypeName="vector";var Gl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Rp=new Gl,Vl=class{constructor(e){this.manager=e!==void 0?e:Rp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Vl.DEFAULT_MATERIAL_NAME="__DEFAULT";var As=class extends bt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new de(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Fa=class extends As{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new de(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Qh=new St,Pd=new A,Id=new A,Tr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new St,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ki,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new Vt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Pd.setFromMatrixPosition(e.matrixWorld),t.position.copy(Pd),Id.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Id),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){Qh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Qh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===fr||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Qh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},al=new A,ol=new gi,di=new A,Ba=class extends bt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new St,this.projectionMatrix=new St,this.projectionMatrixInverse=new St,this.coordinateSystem=Zn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(al,ol,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(al,ol,di.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(al,ol,di),di.x===1&&di.y===1&&di.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(al,ol,di.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},Ji=new A,Ld=new ie,Dd=new ie,xn=class extends Ba{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=da*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(wh*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return da*2*Math.atan(Math.tan(wh*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,t){return this.getViewBounds(e,Ld,Dd),t.subVectors(Dd,Ld)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(wh*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},ou=class extends Tr{constructor(){super(new xn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,n=da*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},wr=class extends As{constructor(e,t,n=0,s=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new ou}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},lu=class extends Tr{constructor(){super(new xn(90,1,.5,500)),this.isPointLightShadow=!0}},za=class extends As{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new lu}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Rs=class extends Ba{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},cu=class extends Tr{constructor(){super(new Rs(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ar=class extends As{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(bt.DEFAULT_UP),this.updateMatrix(),this.target=new bt,this.shadow=new cu}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var or=-90,lr=1,Rr=class extends bt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xn(or,lr,e,t);s.layers=this.layers,this.add(s);let r=new xn(or,lr,e,t);r.layers=this.layers,this.add(r);let a=new xn(or,lr,e,t);a.layers=this.layers,this.add(a);let o=new xn(or,lr,e,t);o.layers=this.layers,this.add(o);let l=new xn(or,lr,e,t);l.layers=this.layers,this.add(l);let c=new xn(or,lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===Zn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===fr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let _=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.mipmapsAutoUpdate=_,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Wl=class extends xn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Ha=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=o0.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function o0(){this._document.hidden===!1&&this.reset()}var Du="\\[\\]\\.:\\/",l0=new RegExp("["+Du+"]","g"),Nu="[^"+Du+"]",c0="[^"+Du.replace("\\.","")+"]",h0=/((?:WC+[\/:])*)/.source.replace("WC",Nu),u0=/(WCOD+)?/.source.replace("WCOD",c0),f0=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Nu),d0=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Nu),p0=new RegExp("^"+h0+u0+f0+d0+"$"),m0=["material","materials","bones","map"],hu=class{constructor(e,t,n){let s=n||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Bt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(l0,"")}static parseTrackName(e){let t=p0.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);m0.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ye("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ye("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ye("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ye("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){Ye("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){Ye("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;Ye("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ye("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=hu;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var r1=new Float32Array(1);var Nd=new St,ka=class{constructor(e,t,n=0,s=1/0){this.ray=new Es(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new mr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ye("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Nd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Nd),this}intersectObject(e,t=!0,n=[]){return uu(e,this,n,t),n.sort(Ud),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)uu(e[s],this,n,t);return n.sort(Ud),n}};function Ud(i,e){return i.distance-e.distance}function uu(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let a=0,o=r.length;a<o;a++)uu(r[a],e,t,!0)}}var Hu=class Hu{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};Hu.prototype.isMatrix2=!0;var fu=Hu;function Uu(i,e,t,n){let s=g0(n);switch(t){case bu:return i*e;case Ql:return i*e/s.components*s.byteLength;case jl:return i*e/s.components*s.byteLength;case rs:return i*e*2/s.components*s.byteLength;case ec:return i*e*2/s.components*s.byteLength;case Tu:return i*e*3/s.components*s.byteLength;case hi:return i*e*4/s.components*s.byteLength;case tc:return i*e*4/s.components*s.byteLength;case Ja:case $a:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ka:case Qa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ic:case rc:return Math.max(i,16)*Math.max(e,8)/4;case nc:case sc:return Math.max(i,8)*Math.max(e,8)/2;case ac:case oc:case cc:case hc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case lc:case ja:case uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case dc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case pc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case mc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case gc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case _c:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case xc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case vc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case yc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Mc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Sc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Ec:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case bc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Tc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case wc:case Ac:case Rc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Cc:case Pc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case eo:case Ic:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function g0(i){switch(i){case On:case yu:return{byteLength:1,components:1};case Lr:case Mu:case yn:return{byteLength:2,components:1};case $l:case Kl:return{byteLength:2,components:4};case ci:case Jl:case Jn:return{byteLength:4,components:1};case Su:case Eu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function $p(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function x0(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=i.createBuffer();i.bindBuffer(l,u),i.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],_=d[f];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++u,d[u]=_)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let _=d[f];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var v0=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,y0=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,M0=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,S0=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,E0=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,b0=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,T0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,w0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,A0=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,R0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,C0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,P0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,I0=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,L0=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,D0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,N0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,U0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,O0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,F0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,B0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,z0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,H0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,k0=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,G0=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,V0=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,W0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,X0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,q0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Y0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Z0="gl_FragColor = linearToOutputTexel( gl_FragColor );",J0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$0=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,K0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Q0=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,j0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,t_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,i_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,s_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,r_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,a_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,l_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,h_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,u_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,f_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,d_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,p_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,m_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,g_=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,__=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,x_=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,v_=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y_=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,M_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S_=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b_=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,T_=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,w_=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A_=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,R_=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,C_=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,P_=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,I_=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L_=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,D_=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,N_=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,U_=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O_=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,F_=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,B_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z_=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,H_=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,k_=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,G_=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V_=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W_=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X_=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q_=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y_=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Z_=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,J_=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$_=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,K_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Q_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,j_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ex=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,tx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,nx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,ix=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rx=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ax=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ox=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,lx=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,cx=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hx=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ux=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fx=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dx=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,px=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,mx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gx=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,_x=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,xx=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vx=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mx=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ex=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Tx=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,wx=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Ax=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Rx=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cx=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Px=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ix=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lx=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Dx=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nx=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ux=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ox=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Fx=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bx=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,zx=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Hx=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kx=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gx=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Vx=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wx=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Xx=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qx=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Yx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Zx=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jx=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$x=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Kx=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ot={alphahash_fragment:v0,alphahash_pars_fragment:y0,alphamap_fragment:M0,alphamap_pars_fragment:S0,alphatest_fragment:E0,alphatest_pars_fragment:b0,aomap_fragment:T0,aomap_pars_fragment:w0,batching_pars_vertex:A0,batching_vertex:R0,begin_vertex:C0,beginnormal_vertex:P0,bsdfs:I0,iridescence_fragment:L0,bumpmap_pars_fragment:D0,clipping_planes_fragment:N0,clipping_planes_pars_fragment:U0,clipping_planes_pars_vertex:O0,clipping_planes_vertex:F0,color_fragment:B0,color_pars_fragment:z0,color_pars_vertex:H0,color_vertex:k0,common:G0,defaultnormal_vertex:V0,displacementmap_pars_vertex:W0,displacementmap_vertex:X0,emissivemap_fragment:q0,emissivemap_pars_fragment:Y0,colorspace_fragment:Z0,colorspace_pars_fragment:J0,envmap_fragment:$0,envmap_common_pars_fragment:K0,envmap_pars_fragment:Q0,envmap_pars_vertex:j0,envmap_physical_pars_fragment:h_,envmap_vertex:e_,fog_vertex:t_,fog_pars_vertex:n_,fog_fragment:i_,fog_pars_fragment:s_,gradientmap_pars_fragment:r_,lightmap_pars_fragment:a_,lights_lambert_fragment:o_,lights_lambert_pars_fragment:l_,lights_pars_begin:c_,lights_toon_fragment:u_,lights_toon_pars_fragment:f_,lights_phong_fragment:d_,lights_phong_pars_fragment:p_,lights_physical_fragment:m_,lights_physical_pars_fragment:g_,lights_fragment_begin:__,lights_fragment_maps:x_,lights_fragment_end:v_,lightprobes_pars_fragment:y_,logdepthbuf_fragment:M_,logdepthbuf_pars_fragment:S_,logdepthbuf_pars_vertex:E_,logdepthbuf_vertex:b_,map_fragment:T_,map_pars_fragment:w_,map_particle_fragment:A_,map_particle_pars_fragment:R_,metalnessmap_fragment:C_,metalnessmap_pars_fragment:P_,morphinstance_vertex:I_,morphcolor_vertex:L_,morphnormal_vertex:D_,morphtarget_pars_vertex:N_,morphtarget_vertex:U_,normal_fragment_begin:O_,normal_fragment_maps:F_,normal_pars_fragment:B_,normal_pars_vertex:z_,normal_vertex:H_,normalmap_pars_fragment:k_,clearcoat_normal_fragment_begin:G_,clearcoat_normal_fragment_maps:V_,clearcoat_pars_fragment:W_,iridescence_pars_fragment:X_,opaque_fragment:q_,packing:Y_,premultiplied_alpha_fragment:Z_,project_vertex:J_,dithering_fragment:$_,dithering_pars_fragment:K_,roughnessmap_fragment:Q_,roughnessmap_pars_fragment:j_,shadowmap_pars_fragment:ex,shadowmap_pars_vertex:tx,shadowmap_vertex:nx,shadowmask_pars_fragment:ix,skinbase_vertex:sx,skinning_pars_vertex:rx,skinning_vertex:ax,skinnormal_vertex:ox,specularmap_fragment:lx,specularmap_pars_fragment:cx,tonemapping_fragment:hx,tonemapping_pars_fragment:ux,transmission_fragment:fx,transmission_pars_fragment:dx,uv_pars_fragment:px,uv_pars_vertex:mx,uv_vertex:gx,worldpos_vertex:_x,background_vert:xx,background_frag:vx,backgroundCube_vert:yx,backgroundCube_frag:Mx,cube_vert:Sx,cube_frag:Ex,depth_vert:bx,depth_frag:Tx,distance_vert:wx,distance_frag:Ax,equirect_vert:Rx,equirect_frag:Cx,linedashed_vert:Px,linedashed_frag:Ix,meshbasic_vert:Lx,meshbasic_frag:Dx,meshlambert_vert:Nx,meshlambert_frag:Ux,meshmatcap_vert:Ox,meshmatcap_frag:Fx,meshnormal_vert:Bx,meshnormal_frag:zx,meshphong_vert:Hx,meshphong_frag:kx,meshphysical_vert:Gx,meshphysical_frag:Vx,meshtoon_vert:Wx,meshtoon_frag:Xx,points_vert:qx,points_frag:Yx,shadow_vert:Zx,shadow_frag:Jx,sprite_vert:$x,sprite_frag:Kx},Re={common:{diffuse:{value:new de(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new de(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new de(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new de(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},Si={basic:{uniforms:wn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ot.meshbasic_vert,fragmentShader:ot.meshbasic_frag},lambert:{uniforms:wn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new de(0)},envMapIntensity:{value:1}}]),vertexShader:ot.meshlambert_vert,fragmentShader:ot.meshlambert_frag},phong:{uniforms:wn([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new de(0)},specular:{value:new de(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ot.meshphong_vert,fragmentShader:ot.meshphong_frag},standard:{uniforms:wn([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new de(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag},toon:{uniforms:wn([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new de(0)}}]),vertexShader:ot.meshtoon_vert,fragmentShader:ot.meshtoon_frag},matcap:{uniforms:wn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ot.meshmatcap_vert,fragmentShader:ot.meshmatcap_frag},points:{uniforms:wn([Re.points,Re.fog]),vertexShader:ot.points_vert,fragmentShader:ot.points_frag},dashed:{uniforms:wn([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ot.linedashed_vert,fragmentShader:ot.linedashed_frag},depth:{uniforms:wn([Re.common,Re.displacementmap]),vertexShader:ot.depth_vert,fragmentShader:ot.depth_frag},normal:{uniforms:wn([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ot.meshnormal_vert,fragmentShader:ot.meshnormal_frag},sprite:{uniforms:wn([Re.sprite,Re.fog]),vertexShader:ot.sprite_vert,fragmentShader:ot.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ot.background_vert,fragmentShader:ot.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:ot.backgroundCube_vert,fragmentShader:ot.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ot.cube_vert,fragmentShader:ot.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ot.equirect_vert,fragmentShader:ot.equirect_frag},distance:{uniforms:wn([Re.common,Re.displacementmap,{referencePosition:{value:new A},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ot.distance_vert,fragmentShader:ot.distance_frag},shadow:{uniforms:wn([Re.lights,Re.fog,{color:{value:new de(0)},opacity:{value:1}}]),vertexShader:ot.shadow_vert,fragmentShader:ot.shadow_frag}};Si.physical={uniforms:wn([Si.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new de(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new de(0)},specularColor:{value:new de(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:ot.meshphysical_vert,fragmentShader:ot.meshphysical_frag};var Nc={r:0,b:0,g:0},Qx=new St,Kp=new Qe;Kp.set(-1,0,0,0,1,0,0,0,1);function jx(i,e,t,n,s,r){let a=new de(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let y=v.backgroundBlurriness>0;S=e.get(S,y)}return S}function g(v){let S=!1,y=f(v);y===null?p(a,o):y&&y.isColor&&(p(y,1),S=!0);let w=i.xr.getEnvironmentBlendMode();w==="additive"?t.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function _(v,S){let y=f(S);y&&y.isCubeTexture?(c===void 0&&(c=new ae(new vi(1,1,1),new Tt({name:"BackgroundCubeMaterial",uniforms:Ns(Si.backgroundCube.uniforms),vertexShader:Si.backgroundCube.vertexShader,fragmentShader:Si.backgroundCube.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(w,T,x){this.matrixWorld.copyPosition(x.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Qx.makeRotationFromEuler(S.backgroundRotation)).transpose(),y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Kp),c.material.toneMapped=ut.getTransfer(y.colorSpace)!==Mt,(h!==y||d!==y.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new ae(new Ln(2,2),new Tt({name:"BackgroundMaterial",uniforms:Ns(Si.background.uniforms),vertexShader:Si.background.vertexShader,fragmentShader:Si.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=ut.getTransfer(y.colorSpace)!==Mt,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=i.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null))}function p(v,S){v.getRGB(Nc,Lu(i)),t.buffers.color.setClear(Nc.r,Nc.g,Nc.b,S,r)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),o=S,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,p(a,o)},render:g,addToRenderList:_,dispose:m}}function ev(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,a=!1;function o(O,L,z,P,G){let Z=!1,q=d(O,P,z,L);r!==q&&(r=q,c(r.object)),Z=f(O,P,z,G),Z&&g(O,P,z,G),G!==null&&e.update(G,i.ELEMENT_ARRAY_BUFFER),(Z||a)&&(a=!1,y(O,L,z,P),G!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function l(){return i.createVertexArray()}function c(O){return i.bindVertexArray(O)}function h(O){return i.deleteVertexArray(O)}function d(O,L,z,P){let G=P.wireframe===!0,Z=n[L.id];Z===void 0&&(Z={},n[L.id]=Z);let q=O.isInstancedMesh===!0?O.id:0,ce=Z[q];ce===void 0&&(ce={},Z[q]=ce);let $=ce[z.id];$===void 0&&($={},ce[z.id]=$);let te=$[G];return te===void 0&&(te=u(l()),$[G]=te),te}function u(O){let L=[],z=[],P=[];for(let G=0;G<t;G++)L[G]=0,z[G]=0,P[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:z,attributeDivisors:P,object:O,attributes:{},index:null}}function f(O,L,z,P){let G=r.attributes,Z=L.attributes,q=0,ce=z.getAttributes();for(let $ in ce)if(ce[$].location>=0){let re=G[$],Ie=Z[$];if(Ie===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(Ie=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(Ie=O.instanceColor)),re===void 0||re.attribute!==Ie||Ie&&re.data!==Ie.data)return!0;q++}return r.attributesNum!==q||r.index!==P}function g(O,L,z,P){let G={},Z=L.attributes,q=0,ce=z.getAttributes();for(let $ in ce)if(ce[$].location>=0){let re=Z[$];re===void 0&&($==="instanceMatrix"&&O.instanceMatrix&&(re=O.instanceMatrix),$==="instanceColor"&&O.instanceColor&&(re=O.instanceColor));let Ie={};Ie.attribute=re,re&&re.data&&(Ie.data=re.data),G[$]=Ie,q++}r.attributes=G,r.attributesNum=q,r.index=P}function _(){let O=r.newAttributes;for(let L=0,z=O.length;L<z;L++)O[L]=0}function p(O){m(O,0)}function m(O,L){let z=r.newAttributes,P=r.enabledAttributes,G=r.attributeDivisors;z[O]=1,P[O]===0&&(i.enableVertexAttribArray(O),P[O]=1),G[O]!==L&&(i.vertexAttribDivisor(O,L),G[O]=L)}function v(){let O=r.newAttributes,L=r.enabledAttributes;for(let z=0,P=L.length;z<P;z++)L[z]!==O[z]&&(i.disableVertexAttribArray(z),L[z]=0)}function S(O,L,z,P,G,Z,q){q===!0?i.vertexAttribIPointer(O,L,z,G,Z):i.vertexAttribPointer(O,L,z,P,G,Z)}function y(O,L,z,P){_();let G=P.attributes,Z=z.getAttributes(),q=L.defaultAttributeValues;for(let ce in Z){let $=Z[ce];if($.location>=0){let te=G[ce];if(te===void 0&&(ce==="instanceMatrix"&&O.instanceMatrix&&(te=O.instanceMatrix),ce==="instanceColor"&&O.instanceColor&&(te=O.instanceColor)),te!==void 0){let re=te.normalized,Ie=te.itemSize,Ge=e.get(te);if(Ge===void 0)continue;let H=Ge.buffer,oe=Ge.type,Pe=Ge.bytesPerElement,Fe=oe===i.INT||oe===i.UNSIGNED_INT||te.gpuType===Jl;if(te.isInterleavedBufferAttribute){let we=te.data,He=we.isInterleavedBuffer===!0?we.stride:we.itemSize,Dt=te.offset;if(we.isInstancedInterleavedBuffer||we.isInstancedBufferAttribute){for(let qe=0;qe<$.locationSize;qe++)m($.location+qe,we.meshPerAttribute);O.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let qe=0;qe<$.locationSize;qe++)p($.location+qe);i.bindBuffer(i.ARRAY_BUFFER,H);for(let qe=0;qe<$.locationSize;qe++)S($.location+qe,Ie/$.locationSize,oe,re,He*Pe,(Dt+Ie/$.locationSize*qe)*Pe,Fe)}else{if(te.isInstancedBufferAttribute){for(let we=0;we<$.locationSize;we++)m($.location+we,te.meshPerAttribute);O.isInstancedMesh!==!0&&P._maxInstanceCount===void 0&&(P._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let we=0;we<$.locationSize;we++)p($.location+we);i.bindBuffer(i.ARRAY_BUFFER,H);for(let we=0;we<$.locationSize;we++)S($.location+we,Ie/$.locationSize,oe,re,Ie*Pe,Ie/$.locationSize*we*Pe,Fe)}}else if(q!==void 0){let re=q[ce];if(re!==void 0)switch(re.length){case 2:i.vertexAttrib2fv($.location,re);break;case 3:i.vertexAttrib3fv($.location,re);break;case 4:i.vertexAttrib4fv($.location,re);break;default:i.vertexAttrib1fv($.location,re)}}}}v()}function w(){D();for(let O in n){let L=n[O];for(let z in L){let P=L[z];for(let G in P){let Z=P[G];for(let q in Z)h(Z[q].object),delete Z[q];delete P[G]}}delete n[O]}}function T(O){if(n[O.id]===void 0)return;let L=n[O.id];for(let z in L){let P=L[z];for(let G in P){let Z=P[G];for(let q in Z)h(Z[q].object),delete Z[q];delete P[G]}}delete n[O.id]}function x(O){for(let L in n){let z=n[L];for(let P in z){let G=z[P];if(G[O.id]===void 0)continue;let Z=G[O.id];for(let q in Z)h(Z[q].object),delete Z[q];delete G[O.id]}}}function E(O){for(let L in n){let z=n[L],P=O.isInstancedMesh===!0?O.id:0,G=z[P];if(G!==void 0){for(let Z in G){let q=G[Z];for(let ce in q)h(q[ce].object),delete q[ce];delete G[Z]}delete z[P],Object.keys(z).length===0&&delete n[L]}}}function D(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:C,dispose:w,releaseStatesOfGeometry:T,releaseStatesOfObject:E,releaseStatesOfProgram:x,initAttributes:_,enableAttribute:p,disableUnusedAttributes:v}}function tv(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function nv(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let x=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(x.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(x){return!(x!==hi&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(x){let E=x===yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(x!==On&&x!==Jn&&!E&&n.convert(x)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(x){if(x==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";x="mediump"}return x==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Xe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&d===!1;t.reversedDepthBuffer===!0&&d===!1&&Xe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&d===!0&&Xe("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),v=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),y=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),w=i.getParameter(i.MAX_SAMPLES),T=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:y,maxSamples:w,samples:T}}function iv(i){let e=this,t=null,n=0,s=!1,r=!1,a=new kn,o=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||n!==0||s;return s=u,n=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,_=d.clipIntersection,p=d.clipShadows,m=i.get(d);if(!s||g===null||g.length===0||r&&!p)r?h(null):c();else{let v=r?0:n,S=v*4,y=m.clippingState||null;l.value=y,y=h(g,u,S,f);for(let w=0;w!==S;++w)y[w]=t[w];m.clippingState=y,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,u,f,g){let _=d!==null?d.length:0,p=null;if(_!==0){if(p=l.value,g!==!0||p===null){let m=f+_*4,v=u.matrixWorldInverse;o.getNormalMatrix(v),(p===null||p.length<m)&&(p=new Float32Array(m));for(let S=0,y=f;S!==_;++S,y+=4)a.copy(d[S]).applyMatrix4(v,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,p}}var io=class extends on{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Ea(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new vi(5,5,5),r=new Tt({name:"CubemapFromEquirect",uniforms:Ns(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:vn,blending:Ui});r.uniforms.tEquirect.value=t;let a=new ae(s,r),o=t.minFilter;return t.minFilter===Oi&&(t.minFilter=Pn),new Rr(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},Cp=256,sv=3,rv=20,Qp=256,jp=16,av=3,ov=new A,lv=new de,Nr=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Rr(1,10,null),this._boxMesh=new ae(new vi(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:a=256,position:o=ov}=r,l=this._renderer;this._setSize(a);let c=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let d=l.autoClear,u=l.autoClearColor,f=l.autoClearDepth,g=l.autoClearStencil,_=e.background;l.autoClear=!0,l.autoClearColor=!0,l.autoClearDepth=!0,l.autoClearStencil=!0,_===null&&(e.background=l.getClearColor(lv));let p=new Rr(n,s,h);return p.position.copy(o),p.update(l,e),l.autoClear=d,l.autoClearColor=u,l.autoClearDepth=f,l.autoClearStencil=g,e.background=_,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(c,t)),this._applyPMREM(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Lp(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ip(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Cp,xp(e))}_fromTexture(e,t){e.mapping===Ls||e.mapping===Ir?this._setSize(e.image.length===0?Cp:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Pp(e,!1,!1),n=Math.log2(e)-sv;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Pp(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let a=e.width>>t;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Ls||e.mapping===Ir?(this._cubemapMaterial===null&&(this._cubemapMaterial=Lp()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ip()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=cv(),this._integrationMaterial=hv());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/jp);for(let a=0;a<=n;a++){let o=i.lodToRoughness(a,n);if(a>n-av)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let l=o>0?Math.log2(t)+.5*Math.log2(6/(Qp*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=l,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=uv());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Pp(i,e,t){return new io(i,{minFilter:Oi,generateMipmaps:e,type:yn,colorSpace:ca,depthBuffer:t})}function so(i,e,t){return new Tt({name:i,uniforms:e,vertexShader:ot.cube_vert,fragmentShader:t,side:vn,blending:Ui,depthTest:!1,depthWrite:!1})}function cv(){return so("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Qp}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function hv(){return so("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:jp}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function uv(){return so("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${rv}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Ip(){return so("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Lp(){return so("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function fv(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===ql||f===Yl)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let _=new io(g.height);return _.fromEquirectangularTexture(i,u),e.set(u,_),u.addEventListener("dispose",c),o(_.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,g=f===ql||f===Yl,_=f===Ls||f===Ir;if(g||_){let p=t.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return n===null&&(n=new Nr(i)),p=g?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let v=u.image;return g&&v&&v.height>0||_&&v&&l(v)?(n===null&&(n=new Nr(i)),p=g?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===ql?u.mapping=Ls:f===Yl&&(u.mapping=Ir),u}function l(u){let f=0,g=6;for(let _=0;_<g;_++)u[_]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:d}}function dv(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Ms("WebGLRenderer: "+n+" extension not supported."),s}}}function pv(i,e,t,n){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){l(g.target)}function l(g){g.index!==null&&e.remove(g.index);for(let p in g.attributes)e.remove(g.attributes[p]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let _=r.get(g);_&&(e.remove(_),r.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function c(g,_){return s[_.id]!==void 0||(_.addEventListener("dispose",o),s[_.id]=new WeakRef(_),a.register(_,_.id,_),t.memory.geometries++),_}function h(g){let _=g.attributes;for(let p in _)e.update(_[p],i.ARRAY_BUFFER)}function d(g){let _=g.index,p=g.attributes.position,m=0;if(p===void 0)return;let v=_!==null?_.array.length:p.array.length/3-1,S=p.count>=65535?_a:ga,y=new S(Math.ceil(v/3)*6,1),w=y.array;if(_!==null){let x=_.array;m=_.version;for(let E=0,D=0;E<v;E+=3){let C=x[E+0],O=x[E+1],L=x[E+2];w[D++]=C,w[D++]=O,w[D++]=O,w[D++]=L,w[D++]=L,w[D++]=C}}else{m=p.version;for(let x=0,E=0;x<v;x+=3){let D=x+0,C=x+1,O=x+2;w[E++]=D,w[E++]=C,w[E++]=C,w[E++]=O,w[E++]=O,w[E++]=D}}y.version=m;let T=r.get(g);T&&e.remove(T),r.set(g,y)}function u(g){let _=r.get(g);if(_){let p=g.index;p!==null&&_.version<p.version&&d(g)}else d(g);return r.get(g)}function f(){for(let g in s){let _=s[g].deref();_!==void 0&&l(_)}}return{get:c,update:h,getWireframeAttribute:u,dispose:f}}function mv(i,e,t){let n;function s(d){n=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){i.drawElements(n,u,r,d*a),t.update(u,n,1)}function c(d,u,f){f!==0&&(i.drawElementsInstanced(n,u,r,d*a,f),t.update(u,n,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,d,0,f);let _=0;for(let p=0;p<f;p++)_+=u[p];t.update(_,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function gv(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Ye("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function _v(i,e,t){let n=new WeakMap,s=new Vt;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=n.get(o);if(u===void 0||u.count!==d){let D=function(){x.dispose(),n.delete(o),o.removeEventListener("dispose",D)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],S=0;f===!0&&(S=1),g===!0&&(S=2),_===!0&&(S=3);let y=o.attributes.position.count*S,w=1;y>e.maxTextureSize&&(w=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let T=new Float32Array(y*w*4*d),x=new pa(T,y,w,d);x.type=Jn,x.needsUpdate=!0;let E=S*4;for(let C=0;C<d;C++){let O=p[C],L=m[C],z=v[C],P=y*w*4*C;for(let G=0;G<O.count;G++){let Z=G*E;f===!0&&(s.fromBufferAttribute(O,G),T[P+Z+0]=s.x,T[P+Z+1]=s.y,T[P+Z+2]=s.z,T[P+Z+3]=0),g===!0&&(s.fromBufferAttribute(L,G),T[P+Z+4]=s.x,T[P+Z+5]=s.y,T[P+Z+6]=s.z,T[P+Z+7]=0),_===!0&&(s.fromBufferAttribute(z,G),T[P+Z+8]=s.x,T[P+Z+9]=s.y,T[P+Z+10]=s.z,T[P+Z+11]=z.itemSize===4?s.w:1)}}u={count:d,texture:x,size:new ie(y,w)},n.set(o,u),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let _=0;_<c.length;_++)f+=c[_];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function xv(i,e,t,n,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=e.get(c,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var vv={[Ga]:"LINEAR_TONE_MAPPING",[Va]:"REINHARD_TONE_MAPPING",[Wa]:"CINEON_TONE_MAPPING",[Is]:"ACES_FILMIC_TONE_MAPPING",[qa]:"AGX_TONE_MAPPING",[Ya]:"NEUTRAL_TONE_MAPPING",[Xa]:"CUSTOM_TONE_MAPPING"};function yv(i,e,t,n,s,r){let a=new on(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=null,h=new At;h.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Ke([0,2,0,0,2,0],2));let d=new br({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ae(h,d),f=new Rs(-1,1,1,-1,0,1),g=null,_=null,p=!1,m,v=null,S=[],y=!1;this.setSize=function(w,T){a.setSize(w,T),o!==null&&o.setSize(w,T),l!==null&&l.setSize(w,T);for(let x=0;x<S.length;x++){let E=S[x];E.setSize&&E.setSize(w,T)}},this.setEffects=function(w){S=w,y=S.length>0&&S[0].isRenderPass===!0;let T=a.width,x=a.height;S.length>0&&o===null&&(o=new on(T,x,{type:yn,depthBuffer:!1,stencilBuffer:!1}),l=new on(T,x,{type:yn,depthBuffer:!1,stencilBuffer:!1}));let E=s===!0&&S.some(D=>D.needsDepthTexture===!0);E!==(a.depthTexture!==null)&&(E===!0&&c===null&&(c=new Di(T,x),r===!0&&(c.format=Fi,c.type=Ds)),a.dispose(),a.depthTexture=E?c:null,a.resolveDepthBuffer=E,a.storeMultisampledDepthBuffer=E);for(let D=0;D<S.length;D++){let C=S[D];C.setSize&&C.setSize(T,x),E&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(c)}},this.begin=function(w,T){if(p||w.toneMapping===yi&&S.length===0)return!1;if(v=T,T!==null){let x=T.width,E=T.height;(a.width!==x||a.height!==E)&&this.setSize(x,E)}return y===!1&&w.setRenderTarget(a),m=w.toneMapping,w.toneMapping=yi,!0},this.hasRenderPass=function(){return y},this.end=function(w,T){w.toneMapping=m,p=!0;let x=a,E=o;for(let D=0;D<S.length;D++){let C=S[D];C.enabled!==!1&&(C.render(w,E,x,T),C.needsSwap!==!1&&(x=E,E=E===o?l:o))}if(g!==w.outputColorSpace||_!==w.toneMapping){g=w.outputColorSpace,_=w.toneMapping,d.defines={},ut.getTransfer(g)===Mt&&(d.defines.SRGB_TRANSFER="");let D=vv[_];D&&(d.defines[D]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=x.texture,w.setRenderTarget(v),w.render(u,f),v=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),h.dispose(),d.dispose()}}var em=new In,tm=new Di(1,1),nm=new ba(1),im=new pa,sm=new Ml,rm=new Ea,Dp=[],Np=[],Up=new Float32Array(16),Op=new Float32Array(9),Fp=new Float32Array(4);function Ur(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Dp[s];if(r===void 0&&(r=new Float32Array(s),Dp[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function ln(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function cn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Fc(i,e){let t=Np[e];t===void 0&&(t=new Int32Array(e),Np[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Mv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Sv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2fv(this.addr,e),cn(t,e)}}function Ev(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(ln(t,e))return;i.uniform3fv(this.addr,e),cn(t,e)}}function bv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4fv(this.addr,e),cn(t,e)}}function Tv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;Fp.set(n),i.uniformMatrix2fv(this.addr,!1,Fp),cn(t,n)}}function wv(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;Op.set(n),i.uniformMatrix3fv(this.addr,!1,Op),cn(t,n)}}function Av(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(ln(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),cn(t,e)}else{if(ln(t,n))return;Up.set(n),i.uniformMatrix4fv(this.addr,!1,Up),cn(t,n)}}function Rv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Cv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2iv(this.addr,e),cn(t,e)}}function Pv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;i.uniform3iv(this.addr,e),cn(t,e)}}function Iv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4iv(this.addr,e),cn(t,e)}}function Lv(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Dv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(ln(t,e))return;i.uniform2uiv(this.addr,e),cn(t,e)}}function Nv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(ln(t,e))return;i.uniform3uiv(this.addr,e),cn(t,e)}}function Uv(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(ln(t,e))return;i.uniform4uiv(this.addr,e),cn(t,e)}}function Bc(i){return i.version===0&&(i.compareFunction=Ru,i.needsUpdate=!0),i}function Ov(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Bc(tm):r=em,t.setTexture2D(e||r,s)}function Fv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||sm,s)}function Bv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Bc(nm):r=rm,t.setTextureCube(e||r,s)}function zv(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||im,s)}function Hv(i){switch(i){case 5126:return Mv;case 35664:return Sv;case 35665:return Ev;case 35666:return bv;case 35674:return Tv;case 35675:return wv;case 35676:return Av;case 5124:case 35670:return Rv;case 35667:case 35671:return Cv;case 35668:case 35672:return Pv;case 35669:case 35673:return Iv;case 5125:return Lv;case 36294:return Dv;case 36295:return Nv;case 36296:return Uv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ov;case 35679:case 36299:case 36307:return Fv;case 35680:case 36300:case 36308:case 36293:return Bv;case 36289:case 36303:case 36311:case 36292:return zv}}function kv(i,e){i.uniform1fv(this.addr,e)}function Gv(i,e){let t=Ur(e,this.size,2);i.uniform2fv(this.addr,t)}function Vv(i,e){let t=Ur(e,this.size,3);i.uniform3fv(this.addr,t)}function Wv(i,e){let t=Ur(e,this.size,4);i.uniform4fv(this.addr,t)}function Xv(i,e){let t=Ur(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function qv(i,e){let t=Ur(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Yv(i,e){let t=Ur(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Zv(i,e){i.uniform1iv(this.addr,e)}function Jv(i,e){i.uniform2iv(this.addr,e)}function $v(i,e){i.uniform3iv(this.addr,e)}function Kv(i,e){i.uniform4iv(this.addr,e)}function Qv(i,e){i.uniform1uiv(this.addr,e)}function jv(i,e){i.uniform2uiv(this.addr,e)}function ey(i,e){i.uniform3uiv(this.addr,e)}function ty(i,e){i.uniform4uiv(this.addr,e)}function ny(i,e,t){let n=this.cache,s=e.length,r=Fc(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Bc(tm):a=em;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function iy(i,e,t){let n=this.cache,s=e.length,r=Fc(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||sm,r[a])}function sy(i,e,t){let n=this.cache,s=e.length,r=Fc(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));let a;this.type===i.SAMPLER_CUBE_SHADOW?a=Bc(nm):a=rm;for(let o=0;o!==s;++o)t.setTextureCube(e[o]||a,r[o])}function ry(i,e,t){let n=this.cache,s=e.length,r=Fc(t,s);ln(n,r)||(i.uniform1iv(this.addr,r),cn(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||im,r[a])}function ay(i){switch(i){case 5126:return kv;case 35664:return Gv;case 35665:return Vv;case 35666:return Wv;case 35674:return Xv;case 35675:return qv;case 35676:return Yv;case 5124:case 35670:return Zv;case 35667:case 35671:return Jv;case 35668:case 35672:return $v;case 35669:case 35673:return Kv;case 5125:return Qv;case 36294:return jv;case 36295:return ey;case 36296:return ty;case 35678:case 36198:case 36298:case 36306:case 35682:return ny;case 35679:case 36299:case 36307:return iy;case 35680:case 36300:case 36308:case 36293:return sy;case 36289:case 36303:case 36311:case 36292:return ry}}var Vu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Hv(t.type)}},Wu=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ay(t.type)}},Xu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},ku=/(\w+)(\])?(\[|\.)?/g;function Bp(i,e){i.seq.push(e),i.map[e.id]=e}function oy(i,e,t){let n=i.name,s=n.length;for(ku.lastIndex=0;;){let r=ku.exec(n),a=ku.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Bp(t,c===void 0?new Vu(o,i,e):new Wu(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new Xu(o),Bp(t,d)),t=d}}}var Dr=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);oy(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function zp(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var ly=37297,cy=0;function hy(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}var Hp=new Qe;function uy(i){ut._getMatrix(Hp,ut.workingColorSpace,i);let e=`mat3( ${Hp.elements.map(t=>t.toFixed(4))} )`;switch(ut.getTransfer(i)){case ha:return[e,"LinearTransferOETF"];case Mt:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function kp(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+hy(i.getShaderSource(e),o)}else return r}function fy(i,e){let t=uy(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var dy={[Ga]:"Linear",[Va]:"Reinhard",[Wa]:"Cineon",[Is]:"ACESFilmic",[qa]:"AgX",[Ya]:"Neutral",[Xa]:"Custom"};function py(i,e){let t=dy[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Uc=new A;function my(){ut.getLuminanceCoefficients(Uc);let i=Uc.x.toFixed(4),e=Uc.y.toFixed(4),t=Uc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gy(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(no).join(`
`)}function _y(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function xy(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function no(i){return i!==""}function Gp(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Vp(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var vy=/^[ \t]*#include +<([\w\d./]+)>/gm;function qu(i){return i.replace(vy,yy)}function yy(i,e){let t=ot[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return qu(t)}var My=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wp(i){return i.replace(My,Sy)}function Sy(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Xp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var Ey={[Cs]:"SHADOWMAP_TYPE_PCF",[Cr]:"SHADOWMAP_TYPE_VSM"};function by(i){return Ey[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Ty={[Ir]:"ENVMAP_MODE_REFRACTION"};function wy(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":Ty[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var Ay={[xu]:"ENVMAP_BLENDING_MULTIPLY",[ip]:"ENVMAP_BLENDING_MIX",[sp]:"ENVMAP_BLENDING_ADD"};function Ry(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":Ay[i.combine]||"ENVMAP_BLENDING_NONE"}function Cy(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=by(t),c=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=wy(t),d=Ry(t),u=gy(t),f=_y(r),g=s.createProgram(),_,p,m=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(no).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f].filter(no).join(`
`),p.length>0&&(p+=`
`)):(_=[Xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(no).join(`
`),p=[Xp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,f,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==yi?"#define TONE_MAPPING":"",t.toneMapping!==yi?ot.tonemapping_pars_fragment:"",t.toneMapping!==yi?py("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ot.colorspace_pars_fragment,fy("linearToOutputTexel",t.outputColorSpace),my(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(no).join(`
`)),a=qu(a),a=Gp(a,t),a=Vp(a,t),o=qu(o),o=Gp(o,t),o=Vp(o,t),a=Wp(a),o=Wp(o),t.isRawShaderMaterial!==!0&&(m=`#version 300 es
`,_=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",t.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=m+_+a,S=m+p+o,y=zp(s,s.VERTEX_SHADER,v),w=zp(s,s.FRAGMENT_SHADER,S);s.attachShader(g,y),s.attachShader(g,w),t.index0AttributeName!==void 0?s.bindAttribLocation(g,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function T(C){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(g)||"",L=s.getShaderInfoLog(y)||"",z=s.getShaderInfoLog(w)||"",P=O.trim(),G=L.trim(),Z=z.trim(),q=!0,ce=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,g,y,w);else{let $=kp(s,y,"vertex"),te=kp(s,w,"fragment");Ye("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+P+`
`+$+`
`+te)}else P!==""?Xe("WebGLProgram: Program Info Log:",P):(G===""||Z==="")&&(ce=!1);ce&&(C.diagnostics={runnable:q,programLog:P,vertexShader:{log:G,prefix:_},fragmentShader:{log:Z,prefix:p}})}s.deleteShader(y),s.deleteShader(w),x=new Dr(s,g),E=xy(s,g)}let x;this.getUniforms=function(){return x===void 0&&T(this),x};let E;this.getAttributes=function(){return E===void 0&&T(this),E};let D=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(g,ly)),D},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=cy++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=y,this.fragmentShader=w,this}var Py=0,Yu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Zu(e),t.set(e,n)),n}},Zu=class{constructor(e){this.id=Py++,this.code=e,this.usedTimes=0}};function Iy(i){return i===rs||i===ja||i===eo}function Ly(i,e,t,n,s,r){let a=new mr,o=new Yu,l=new Set,c=[],h=new Map,d=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(x){return l.add(x),x===0?"uv":`uv${x}`}function g(x,E,D,C,O,L){let z=C.fog,P=O.geometry,G=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?C.environment:null,Z=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,q=e.get(x.envMap||G,Z),ce=u[x.type],$=n.precision;x.precision!==null&&($=n.getMaxPrecision(x.precision),$!==x.precision&&Xe("WebGLProgram.getParameters:",x.precision,"not supported, using",$,"instead."));let te=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,re=te!==void 0?te.length:0,Ie=0;P.morphAttributes.position!==void 0&&(Ie=1),P.morphAttributes.normal!==void 0&&(Ie=2),P.morphAttributes.color!==void 0&&(Ie=3);let Ge,H,oe,Pe;if(ce){let Ae=Si[ce];Ge=Ae.vertexShader,H=Ae.fragmentShader}else{Ge=x.vertexShader,H=x.fragmentShader;let Ae=o.getVertexShaderStage(x),wt=o.getFragmentShaderStage(x);o.update(x,Ae,wt),oe=Ae.id,Pe=wt.id}let Fe=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),He=O.isInstancedMesh===!0,Dt=O.isBatchedMesh===!0,qe=!!x.map,lt=!!x.matcap,dt=!!q,se=dt&&q.isPMREMTexture===!0,xe=!!x.aoMap,me=!!x.lightMap,Le=!!x.bumpMap&&x.wireframe===!1,Te=!!x.normalMap,nt=!!x.displacementMap,ze=!!x.emissiveMap,pt=!!x.metalnessMap,mt=!!x.roughnessMap,yt=x.anisotropy>0,B=x.clearcoat>0,nn=x.diffuseRoughness>0,ht=x.dispersion>0,Nt=x.retroreflectivity>0,Se=x.iridescence>0,Yt=x.sheen>0,We=x.transmission>0,Ze=yt&&!!x.anisotropyMap,R=B&&!!x.clearcoatMap,M=B&&!!x.clearcoatNormalMap,W=B&&!!x.clearcoatRoughnessMap,he=nn&&!!x.diffuseRoughnessMap,ne=Se&&!!x.iridescenceMap,ge=Se&&!!x.iridescenceThicknessMap,Ee=Yt&&!!x.sheenColorMap,Q=Yt&&!!x.sheenRoughnessMap,j=!!x.specularMap,ve=!!x.specularColorMap,N=!!x.specularIntensityMap,ee=We&&!!x.transmissionMap,K=We&&!!x.thicknessMap,ye=!!x.gradientMap,pe=!!x.alphaMap,_e=x.alphaTest>0,ke=!!x.alphaHash,at=!!x.extensions,ue=yi;x.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(ue=i.toneMapping);let Ve=se?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,rt={shaderID:ce,shaderType:x.type,shaderName:x.name,vertexShader:Ge,fragmentShader:H,defines:x.defines,customVertexShaderID:oe,customFragmentShaderID:Pe,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:$,batching:Dt,batchingColor:Dt&&O._colorsTexture!==null,instancing:He,instancingColor:He&&O.instanceColor!==null,instancingMorph:He&&O.morphTexture!==null,outputColorSpace:Fe===null?i.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:ut.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:qe,matcap:lt,envMap:dt,envMapMode:dt&&q.mapping,envMapPMREM:se,envMapMaxLod:se?Ve.length-1:null,envMapSize:se?Ve[0].width:null,aoMap:xe,lightMap:me,bumpMap:Le,normalMap:Te,displacementMap:nt,emissiveMap:ze,normalMapObjectSpace:Te&&x.normalMapType===op,normalMapTangentSpace:Te&&x.normalMapType===Lc,packedNormalMap:Te&&x.normalMapType===Lc&&Iy(x.normalMap.format),metalnessMap:pt,roughnessMap:mt,anisotropy:yt,anisotropyMap:Ze,clearcoat:B,clearcoatMap:R,clearcoatNormalMap:M,clearcoatRoughnessMap:W,diffuseRoughness:nn,diffuseRoughnessMap:he,dispersion:ht,retroreflection:Nt,iridescence:Se,iridescenceMap:ne,iridescenceThicknessMap:ge,sheen:Yt,sheenColorMap:Ee,sheenRoughnessMap:Q,specularMap:j,specularColorMap:ve,specularIntensityMap:N,transmission:We,transmissionMap:ee,thicknessMap:K,gradientMap:ye,opaque:x.transparent===!1&&x.blending===Pr&&x.alphaToCoverage===!1,alphaMap:pe,alphaTest:_e,alphaHash:ke,combine:x.combine,mapUv:qe&&f(x.map.channel),aoMapUv:xe&&f(x.aoMap.channel),lightMapUv:me&&f(x.lightMap.channel),bumpMapUv:Le&&f(x.bumpMap.channel),normalMapUv:Te&&f(x.normalMap.channel),displacementMapUv:nt&&f(x.displacementMap.channel),emissiveMapUv:ze&&f(x.emissiveMap.channel),metalnessMapUv:pt&&f(x.metalnessMap.channel),roughnessMapUv:mt&&f(x.roughnessMap.channel),anisotropyMapUv:Ze&&f(x.anisotropyMap.channel),clearcoatMapUv:R&&f(x.clearcoatMap.channel),clearcoatNormalMapUv:M&&f(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:W&&f(x.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:he&&f(x.diffuseRoughnessMap.channel),iridescenceMapUv:ne&&f(x.iridescenceMap.channel),iridescenceThicknessMapUv:ge&&f(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&f(x.sheenColorMap.channel),sheenRoughnessMapUv:Q&&f(x.sheenRoughnessMap.channel),specularMapUv:j&&f(x.specularMap.channel),specularColorMapUv:ve&&f(x.specularColorMap.channel),specularIntensityMapUv:N&&f(x.specularIntensityMap.channel),transmissionMapUv:ee&&f(x.transmissionMap.channel),thicknessMapUv:K&&f(x.thicknessMap.channel),alphaMapUv:pe&&f(x.alphaMap.channel),vertexTangents:!!P.attributes.tangent&&(Te||yt),vertexNormals:!!P.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!P.attributes.uv&&(qe||pe),fog:!!z,useFog:x.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||P.attributes.normal===void 0&&Te===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:we,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:P.attributes.position!==void 0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Ie,numSunLights:E.sun.length,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numSunLightShadows:E.sunShadowMap.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numLightProbeGrids:L.filter(Ae=>Ae.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&D.length>0,shadowMapType:i.shadowMap.type,toneMapping:ue,decodeVideoTexture:qe&&x.map.isVideoTexture===!0&&ut.getTransfer(x.map.colorSpace)===Mt,decodeVideoTextureEmissive:ze&&x.emissiveMap.isVideoTexture===!0&&ut.getTransfer(x.emissiveMap.colorSpace)===Mt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Pt,flipSided:x.side===vn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:at&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(at&&x.extensions.multiDraw===!0||Dt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return rt.vertexUv1s=l.has(1),rt.vertexUv2s=l.has(2),rt.vertexUv3s=l.has(3),l.clear(),rt}function _(x){let E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(let D in x.defines)E.push(D),E.push(x.defines[D]);return x.isRawShaderMaterial===!1&&(p(E,x),m(E,x),E.push(i.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function p(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapPMREM),x.push(E.envMapMaxLod),x.push(E.envMapSize),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.diffuseRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.numSunLights),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numSunLightShadows),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.numLightProbeGrids),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function m(x,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.retroreflection&&a.enable(24),E.diffuseRoughness&&a.enable(25),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),E.packedNormalMap&&a.enable(22),E.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),E.numLightProbeGrids>0&&a.enable(22),E.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function v(x){let E=u[x.type],D;if(E){let C=Si[E];D=zi.clone(C.uniforms)}else D=x.uniforms;return D}function S(x,E){let D=h.get(E);return D!==void 0?++D.usedTimes:(D=new Cy(i,E,x,s),c.push(D),h.set(E,D)),D}function y(x){if(--x.usedTimes===0){let E=c.indexOf(x);c[E]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function T(){o.dispose()}return{getParameters:g,getProgramCacheKey:_,getUniforms:v,acquireProgram:S,releaseProgram:y,releaseShaderCache:w,programs:c,dispose:T}}function Dy(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ny(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function qp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Yp(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,_,p,m){let v=i[e];return v===void 0?(v={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:_,renderOrder:u.renderOrder,z:p,group:m},i[e]=v):(v.id=u.id,v.object=u,v.geometry=f,v.material=g,v.materialVariant=a(u),v.groupOrder=_,v.renderOrder=u.renderOrder,v.z=p,v.group=m),e++,v}function l(u,f,g,_,p,m,v){v.reversedDepth===!0&&(p=-p);let S=o(u,f,g,_,p,m);g.transmission>0?n.push(S):g.transparent===!0?s.push(S):t.push(S)}function c(u,f,g,_,p,m){let v=o(u,f,g,_,p,m);g.transmission>0?n.unshift(v):g.transparent===!0?s.unshift(v):t.unshift(v)}function h(u,f){t.length>1&&t.sort(u||Ny),n.length>1&&n.sort(f||qp),s.length>1&&s.sort(f||qp)}function d(){for(let u=e,f=i.length;u<f;u++){let g=i[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Uy(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new Yp,i.set(n,[a])):s>=r.length?(a=new Yp,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Oy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new A,color:new de};break;case"SpotLight":t={position:new A,direction:new A,color:new de,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new A,color:new de,distance:0,decay:0};break;case"HemisphereLight":t={direction:new A,skyColor:new de,groundColor:new de};break;case"RectAreaLight":t={color:new de,position:new A,halfWidth:new A,halfHeight:new A};break}return i[e.id]=t,t}}}function Fy(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var By=0;function zy(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Hy(i){let e=new Oy,t=Fy(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new A);let s=new A,r=new St,a=new St;function o(c){let h=0,d=0,u=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let f=0,g=0,_=0,p=0,m=0,v=0,S=0,y=0,w=0,T=0,x=0,E=0,D=0,C=0;c.sort(zy);for(let L=0,z=c.length;L<z;L++){let P=c[L],G=P.color,Z=P.intensity,q=P.distance,ce=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===rs?ce=P.shadow.map.texture:ce=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=G.r*Z,d+=G.g*Z,u+=G.b*Z;else if(P.isLightProbe){for(let $=0;$<9;$++)n.probe[$].addScaledVector(P.sh.coefficients[$],Z);C++}else if(P.isSunLight){let $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let te=P.shadow,re=t.get(P);re.shadowIntensity=te.intensity,re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize.copy(te.mapSize).multiply(te.getFrameExtents()),n.sunShadow[g]=re,n.sunShadowMap[g]=ce;let Ie=te.getViewportCount();for(let Ge=0;Ge<Ie;Ge++)n.sunShadowMatrix[_+Ge]=te.getMatrix(Ge),n.sunShadowCascade[_+Ge]=te._cascadeData[Ge];_+=Ie,g++}n.sun[f]=$,f++}else if(P.isDirectionalLight){let $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let te=P.shadow,re=t.get(P);re.shadowIntensity=te.intensity,re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,n.directionalShadow[p]=re,n.directionalShadowMap[p]=ce,n.directionalShadowMatrix[p]=P.shadow.matrix,w++}n.directional[p]=$,p++}else if(P.isSpotLight){let $=e.get(P);$.position.setFromMatrixPosition(P.matrixWorld),$.color.copy(G).multiplyScalar(Z),$.distance=q,$.coneCos=Math.cos(P.angle),$.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),$.decay=P.decay,n.spot[v]=$;let te=P.shadow;if(P.map&&(n.spotLightMap[E]=P.map,E++,te.updateMatrices(P),P.castShadow&&D++),n.spotLightMatrix[v]=te.matrix,P.castShadow){let re=t.get(P);re.shadowIntensity=te.intensity,re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,n.spotShadow[v]=re,n.spotShadowMap[v]=ce,x++}v++}else if(P.isRectAreaLight){let $=e.get(P);$.color.copy(G).multiplyScalar(Z),$.halfWidth.set(P.width*.5,0,0),$.halfHeight.set(0,P.height*.5,0),n.rectArea[S]=$,S++}else if(P.isPointLight){let $=e.get(P);if($.color.copy(P.color).multiplyScalar(P.intensity),$.distance=P.distance,$.decay=P.decay,P.castShadow){let te=P.shadow,re=t.get(P);re.shadowIntensity=te.intensity,re.shadowBias=te.bias,re.shadowNormalBias=te.normalBias,re.shadowRadius=te.radius,re.shadowMapSize=te.mapSize,re.shadowCameraNear=te.camera.near,re.shadowCameraFar=te.camera.far,n.pointShadow[m]=re,n.pointShadowMap[m]=ce,n.pointShadowMatrix[m]=P.shadow.matrix,T++}n.point[m]=$,m++}else if(P.isHemisphereLight){let $=e.get(P);$.skyColor.copy(P.color).multiplyScalar(Z),$.groundColor.copy(P.groundColor).multiplyScalar(Z),n.hemi[y]=$,y++}}S>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Re.LTC_FLOAT_1,n.rectAreaLTC2=Re.LTC_FLOAT_2):(n.rectAreaLTC1=Re.LTC_HALF_1,n.rectAreaLTC2=Re.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=u;let O=n.hash;(O.sunLength!==f||O.directionalLength!==p||O.pointLength!==m||O.spotLength!==v||O.rectAreaLength!==S||O.hemiLength!==y||O.numSunShadows!==g||O.numDirectionalShadows!==w||O.numPointShadows!==T||O.numSpotShadows!==x||O.numSpotMaps!==E||O.numLightProbes!==C)&&(n.sun.length=f,n.directional.length=p,n.spot.length=v,n.rectArea.length=S,n.point.length=m,n.hemi.length=y,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=w,n.directionalShadowMap.length=w,n.directionalShadowMatrix.length=w,n.pointShadow.length=T,n.pointShadowMap.length=T,n.pointShadowMatrix.length=T,n.spotShadow.length=x,n.spotShadowMap.length=x,n.spotLightMatrix.length=x+E-D,n.spotLightMap.length=E,n.numSpotLightShadowsWithMaps=D,n.numLightProbes=C,O.sunLength=f,O.directionalLength=p,O.pointLength=m,O.spotLength=v,O.rectAreaLength=S,O.hemiLength=y,O.numSunShadows=g,O.numDirectionalShadows=w,O.numPointShadows=T,O.numSpotShadows=x,O.numSpotMaps=E,O.numLightProbes=C,n.version=By++)}function l(c,h){let d=0,u=0,f=0,g=0,_=0,p=0,m=h.matrixWorldInverse;for(let v=0,S=c.length;v<S;v++){let y=c[v];if(y.isSunLight){let w=n.sun[d];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let w=n.directional[u];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(y.isSpotLight){let w=n.spot[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let w=n.rectArea[_];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),_++}else if(y.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let w=n.hemi[p];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:n}}function Zp(i){let e=new Hy(i),t=[],n=[],s=[];function r(d){h.camera=d,t.length=0,n.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):t.push(d)}function o(d){n.push(d)}function l(){e.setup(t),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function c(d){e.setupView(t,d)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function ky(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Zp(i),e.set(s,[o])):r>=a.length?(o=new Zp(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Gy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Wy=[new A(1,0,0),new A(-1,0,0),new A(0,1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1)],Xy=[new A(0,-1,0),new A(0,-1,0),new A(0,0,1),new A(0,0,-1),new A(0,-1,0),new A(0,-1,0)],Jp=new St,to=new A,Gu=new A;function qy(i,e,t){let n=new Ki,s=new ie,r=new ie,a=new Vt,o=new Ll,l=new Dl,c={},h=t.maxTextureSize,d={[ss]:vn,[vn]:ss,[Pt]:Pt},u=new Tt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:Gy,fragmentShader:Vy}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new At;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let _=new ae(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Cs;let m=this.type;this.render=function(T,x,E){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;this.type===Bd&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Cs);let D=i.getRenderTarget(),C=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),L=i.state;L.setBlending(Ui),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);let z=m!==this.type;z&&x.traverse(function(P){P.material&&(Array.isArray(P.material)?P.material.forEach(G=>G.needsUpdate=!0):P.material.needsUpdate=!0)});for(let P=0,G=T.length;P<G;P++){let Z=T[P],q=Z.shadow;if(q===void 0){Xe("WebGLShadowMap:",Z,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;s.copy(q.mapSize);let ce=q.getFrameExtents();s.multiply(ce),r.copy(q.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ce.x),s.x=r.x*ce.x,q.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ce.y),s.y=r.y*ce.y,q.mapSize.y=r.y));let $=i.state.buffers.depth.getReversed();if(q.camera._reversedDepth=$,q.map===null||z===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===Cr){if(Z.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new on(s.x,s.y,{format:rs,type:yn,minFilter:Pn,magFilter:Pn,generateMipmaps:!1}),q.map.texture.name=Z.name+".shadowMap",q.map.depthTexture=new Di(s.x,s.y,Jn),q.map.depthTexture.name=Z.name+".shadowMapDepth",q.map.depthTexture.format=Ii,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=pn,q.map.depthTexture.magFilter=pn}else Z.isPointLight?(q.map=new io(s.x),q.map.depthTexture=new ba(s.x,ci)):(q.map=new on(s.x,s.y),q.map.depthTexture=new Di(s.x,s.y,ci)),q.map.depthTexture.name=Z.name+".shadowMap",q.map.depthTexture.format=Ii,this.type===Cs?(q.map.depthTexture.compareFunction=$?Au:wu,q.map.depthTexture.minFilter=Pn,q.map.depthTexture.magFilter=Pn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=pn,q.map.depthTexture.magFilter=pn);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==s.x||q.map.height!==s.y)&&q.map.setSize(s.x,s.y);let te=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();Z.isPointLight!==!0&&q.updateMatrices(Z,E);let re=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:E.layers;for(let Ie=0;Ie<te;Ie++){let Ge=q.getCamera(Ie);if(Z.isPointLight){let H=q.camera,oe=q.matrix,Pe=Z.distance||H.far;Pe!==H.far&&(H.far=Pe,H.updateProjectionMatrix()),to.setFromMatrixPosition(Z.matrixWorld),H.position.copy(to),Gu.copy(H.position),Gu.add(Wy[Ie]),H.up.copy(Xy[Ie]),H.lookAt(Gu),H.updateMatrixWorld(),oe.makeTranslation(-to.x,-to.y,-to.z),Jp.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Jp,H.coordinateSystem,H.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)i.setRenderTarget(q.map,Ie),i.clear();else{Ie===0&&(i.setRenderTarget(q.map),i.clear());let H=q.getViewport(Ie);a.set(r.x*H.x,r.y*H.y,r.x*H.z,r.y*H.w),L.viewport(a)}n=q.getFrustum(Ie),y(x,E,Ge,Z,re,this.type)}q.isPointLightShadow!==!0&&this.type===Cr&&v(q,E),q.needsUpdate=!1}m=this.type,p.needsUpdate=!1,i.setRenderTarget(D,C,O)};function v(T,x){let E=e.update(_);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null?T.mapPass=new on(s.x,s.y,{format:rs,type:yn}):(T.mapPass.width!==T.map.width||T.mapPass.height!==T.map.height)&&T.mapPass.setSize(T.map.width,T.map.height),u.uniforms.shadow_pass.value=T.map.depthTexture,u.uniforms.resolution.value.set(T.map.width,T.map.height),u.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(x,null,E,u,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value.set(T.map.width,T.map.height),f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(x,null,E,f,_,null)}function S(T,x,E,D){let C=null,O=E.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(O!==void 0)C=O;else if(C=E.isPointLight===!0?l:o,i.localClippingEnabled&&x.clipShadows===!0&&Array.isArray(x.clippingPlanes)&&x.clippingPlanes.length!==0||x.displacementMap&&x.displacementScale!==0||x.alphaMap&&x.alphaTest>0||x.map&&x.alphaTest>0||x.alphaToCoverage===!0){let L=C.uuid,z=x.uuid,P=c[L];P===void 0&&(P={},c[L]=P);let G=P[z];G===void 0&&(G=C.clone(),P[z]=G,x.addEventListener("dispose",w)),C=G}if(C.visible=x.visible,C.wireframe=x.wireframe,D===Cr?C.side=x.shadowSide!==null?x.shadowSide:x.side:C.side=x.shadowSide!==null?x.shadowSide:d[x.side],C.alphaMap=x.alphaMap,C.alphaTest=x.alphaToCoverage===!0?.5:x.alphaTest,C.map=x.map,C.clipShadows=x.clipShadows,C.clippingPlanes=x.clippingPlanes,C.clipIntersection=x.clipIntersection,C.displacementMap=x.displacementMap,C.displacementScale=x.displacementScale,C.displacementBias=x.displacementBias,C.wireframeLinewidth=x.wireframeLinewidth,C.linewidth=x.linewidth,E.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let L=i.properties.get(C);L.light=E}return C}function y(T,x,E,D,C,O){if(T.visible===!1)return;if(T.layers.test(C)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&O===Cr)&&(!T.frustumCulled||T.intersectsFrustum(n))){T.modelViewMatrix.multiplyMatrices(E.matrixWorldInverse,T.matrixWorld);let P=e.update(T),G=T.material;if(Array.isArray(G)){let Z=P.groups;for(let q=0,ce=Z.length;q<ce;q++){let $=Z[q],te=G[$.materialIndex];if(te&&te.visible){let re=S(T,te,D,O);T.onBeforeShadow(i,T,x,E,P,re,$),i.renderBufferDirect(E,null,P,re,T,$),T.onAfterShadow(i,T,x,E,P,re,$)}}}else if(G.visible){let Z=S(T,G,D,O);T.onBeforeShadow(i,T,x,E,P,Z,null),i.renderBufferDirect(E,null,P,Z,T,null),T.onAfterShadow(i,T,x,E,P,Z,null)}}let z=T.children;for(let P=0,G=z.length;P<G;P++)y(z[P],x,E,D,C,O)}function w(T){T.target.removeEventListener("dispose",w);for(let E in c){let D=c[E],C=T.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}function Yy(i,e){function t(){let N=!1,ee=new Vt,K=null,ye=new Vt(0,0,0,0);return{setMask:function(pe){K!==pe&&!N&&(i.colorMask(pe,pe,pe,pe),K=pe)},setLocked:function(pe){N=pe},setClear:function(pe,_e,ke,at,ue){ue===!0&&(pe*=at,_e*=at,ke*=at),ee.set(pe,_e,ke,at),ye.equals(ee)===!1&&(i.clearColor(pe,_e,ke,at),ye.copy(ee))},reset:function(){N=!1,K=null,ye.set(-1,0,0,0)}}}function n(){let N=!1,ee=!1,K=null,ye=null,pe=null;return{setReversed:function(_e){if(ee!==_e){let ke=e.get("EXT_clip_control");_e?ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.ZERO_TO_ONE_EXT):ke.clipControlEXT(ke.LOWER_LEFT_EXT,ke.NEGATIVE_ONE_TO_ONE_EXT),ee=_e;let at=pe;pe=null,this.setClear(at)}},getReversed:function(){return ee},setTest:function(_e){_e?we(i.DEPTH_TEST):He(i.DEPTH_TEST)},setMask:function(_e){K!==_e&&!N&&(i.depthMask(_e),K=_e)},setFunc:function(_e){if(ee&&(_e=_p[_e]),ye!==_e){switch(_e){case hl:i.depthFunc(i.NEVER);break;case ul:i.depthFunc(i.ALWAYS);break;case fl:i.depthFunc(i.LESS);break;case hr:i.depthFunc(i.LEQUAL);break;case dl:i.depthFunc(i.EQUAL);break;case pl:i.depthFunc(i.GEQUAL);break;case ml:i.depthFunc(i.GREATER);break;case gl:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ye=_e}},setLocked:function(_e){N=_e},setClear:function(_e){pe!==_e&&(pe=_e,ee&&(_e=1-_e),i.clearDepth(_e))},reset:function(){N=!1,K=null,ye=null,pe=null,ee=!1}}}function s(){let N=!1,ee=null,K=null,ye=null,pe=null,_e=null,ke=null,at=null,ue=null;return{setTest:function(Ve){N||(Ve?we(i.STENCIL_TEST):He(i.STENCIL_TEST))},setMask:function(Ve){ee!==Ve&&!N&&(i.stencilMask(Ve),ee=Ve)},setFunc:function(Ve,rt,Ae){(K!==Ve||ye!==rt||pe!==Ae)&&(i.stencilFunc(Ve,rt,Ae),K=Ve,ye=rt,pe=Ae)},setOp:function(Ve,rt,Ae){(_e!==Ve||ke!==rt||at!==Ae)&&(i.stencilOp(Ve,rt,Ae),_e=Ve,ke=rt,at=Ae)},setLocked:function(Ve){N=Ve},setClear:function(Ve){ue!==Ve&&(i.clearStencil(Ve),ue=Ve)},reset:function(){N=!1,ee=null,K=null,ye=null,pe=null,_e=null,ke=null,at=null,ue=null}}}let r=new t,a=new n,o=new s,l={},c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],_=null,p=!1,m=null,v=null,S=null,y=null,w=null,T=null,x=null,E=new de(0,0,0),D=0,C=!1,O=null,L=null,z=null,P=null,G=null,Z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),q=!1,ce=0,$=i.getParameter(i.VERSION);$.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec($)[1]),q=ce>=1):$.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec($)[1]),q=ce>=2);let te=null,re={},Ie=i.getParameter(i.SCISSOR_BOX),Ge=i.getParameter(i.VIEWPORT),H=new Vt().fromArray(Ie),oe=new Vt().fromArray(Ge);function Pe(N,ee,K,ye){let pe=new Uint8Array(4),_e=i.createTexture();i.bindTexture(N,_e),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ke=0;ke<K;ke++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ee,0,i.RGBA,1,1,ye,0,i.RGBA,i.UNSIGNED_BYTE,pe):i.texImage2D(ee+ke,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pe);return _e}let Fe={};Fe[i.TEXTURE_2D]=Pe(i.TEXTURE_2D,i.TEXTURE_2D,1),Fe[i.TEXTURE_CUBE_MAP]=Pe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Fe[i.TEXTURE_2D_ARRAY]=Pe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Fe[i.TEXTURE_3D]=Pe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),we(i.DEPTH_TEST),a.setFunc(hr),Le(!1),Te(du),we(i.CULL_FACE),xe(Ui);function we(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function He(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function Dt(N,ee){return u[N]!==ee?(i.bindFramebuffer(N,ee),u[N]=ee,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ee),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ee),!0):!1}function qe(N,ee){let K=g,ye=!1;if(N){K=f.get(ee),K===void 0&&(K=[],f.set(ee,K));let pe=N.textures;if(K.length!==pe.length||K[0]!==i.COLOR_ATTACHMENT0){for(let _e=0,ke=pe.length;_e<ke;_e++)K[_e]=i.COLOR_ATTACHMENT0+_e;K.length=pe.length,ye=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,ye=!0);ye&&i.drawBuffers(K)}function lt(N){return _!==N?(i.useProgram(N),_=N,!0):!1}let dt={[Ps]:i.FUNC_ADD,[Hd]:i.FUNC_SUBTRACT,[kd]:i.FUNC_REVERSE_SUBTRACT};dt[Gd]=i.MIN,dt[Vd]=i.MAX;let se={[Wd]:i.ZERO,[Xd]:i.ONE,[qd]:i.SRC_COLOR,[gu]:i.SRC_ALPHA,[Qd]:i.SRC_ALPHA_SATURATE,[$d]:i.DST_COLOR,[Zd]:i.DST_ALPHA,[Yd]:i.ONE_MINUS_SRC_COLOR,[_u]:i.ONE_MINUS_SRC_ALPHA,[Kd]:i.ONE_MINUS_DST_COLOR,[Jd]:i.ONE_MINUS_DST_ALPHA,[jd]:i.CONSTANT_COLOR,[ep]:i.ONE_MINUS_CONSTANT_COLOR,[tp]:i.CONSTANT_ALPHA,[np]:i.ONE_MINUS_CONSTANT_ALPHA};function xe(N,ee,K,ye,pe,_e,ke,at,ue,Ve){if(N===Ui){p===!0&&(He(i.BLEND),p=!1);return}if(p===!1&&(we(i.BLEND),p=!0),N!==zd){if(N!==m||Ve!==C){if((v!==Ps||w!==Ps)&&(i.blendEquation(i.FUNC_ADD),v=Ps,w=Ps),Ve)switch(N){case Pr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jt:i.blendFunc(i.ONE,i.ONE);break;case pu:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case mu:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ye("WebGLState: Invalid blending: ",N);break}else switch(N){case Pr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jt:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case pu:Ye("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case mu:Ye("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ye("WebGLState: Invalid blending: ",N);break}S=null,y=null,T=null,x=null,E.set(0,0,0),D=0,m=N,C=Ve}return}pe=pe||ee,_e=_e||K,ke=ke||ye,(ee!==v||pe!==w)&&(i.blendEquationSeparate(dt[ee],dt[pe]),v=ee,w=pe),(K!==S||ye!==y||_e!==T||ke!==x)&&(i.blendFuncSeparate(se[K],se[ye],se[_e],se[ke]),S=K,y=ye,T=_e,x=ke),(at.equals(E)===!1||ue!==D)&&(i.blendColor(at.r,at.g,at.b,ue),E.copy(at),D=ue),m=N,C=!1}function me(N,ee){N.side===Pt?He(i.CULL_FACE):we(i.CULL_FACE);let K=N.side===vn;ee&&(K=!K),Le(K),N.blending===Pr&&N.transparent===!1?xe(Ui):xe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);let ye=N.stencilWrite;o.setTest(ye),ye&&(o.setMask(N.stencilWriteMask),o.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),o.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ze(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?we(i.SAMPLE_ALPHA_TO_COVERAGE):He(i.SAMPLE_ALPHA_TO_COVERAGE)}function Le(N){O!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),O=N)}function Te(N){N!==Od?(we(i.CULL_FACE),N!==L&&(N===du?i.cullFace(i.BACK):N===Fd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):He(i.CULL_FACE),L=N}function nt(N){N!==z&&(q&&i.lineWidth(N),z=N)}function ze(N,ee,K){N?(we(i.POLYGON_OFFSET_FILL),(P!==ee||G!==K)&&(P=ee,G=K,a.getReversed()&&(ee=-ee,K=-K),i.polygonOffset(ee,K))):He(i.POLYGON_OFFSET_FILL)}function pt(N){N?we(i.SCISSOR_TEST):He(i.SCISSOR_TEST)}function mt(N){N===void 0&&(N=i.TEXTURE0+Z-1),te!==N&&(i.activeTexture(N),te=N)}function yt(N,ee,K){K===void 0&&(te===null?K=i.TEXTURE0+Z-1:K=te);let ye=re[K];ye===void 0&&(ye={type:void 0,texture:void 0},re[K]=ye),(ye.type!==N||ye.texture!==ee)&&(te!==K&&(i.activeTexture(K),te=K),i.bindTexture(N,ee||Fe[N]),ye.type=N,ye.texture=ee)}function B(){let N=re[te];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function nn(){try{i.compressedTexImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function ht(){try{i.compressedTexImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function Nt(){try{i.texSubImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function Se(){try{i.texSubImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function Yt(){try{i.compressedTexSubImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function We(){try{i.compressedTexSubImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function Ze(){try{i.texStorage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function R(){try{i.texStorage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function M(){try{i.texImage2D(...arguments)}catch(N){Ye("WebGLState:",N)}}function W(){try{i.texImage3D(...arguments)}catch(N){Ye("WebGLState:",N)}}function he(N){return d[N]!==void 0?d[N]:i.getParameter(N)}function ne(N,ee){d[N]!==ee&&(i.pixelStorei(N,ee),d[N]=ee)}function ge(N){H.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),H.copy(N))}function Ee(N){oe.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),oe.copy(N))}function Q(N,ee){let K=c.get(ee);K===void 0&&(K=new WeakMap,c.set(ee,K));let ye=K.get(N);ye===void 0&&(ye=i.getUniformBlockIndex(ee,N.name),i.uniformBlockBinding(ee,ye,ye),K.set(N,ye))}function j(N,ee,K){let pe=c.get(ee).get(N);l[pe]!==K&&(i.bindBufferBase(i.UNIFORM_BUFFER,pe,K),l[pe]=K)}function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},d={},te=null,re={},u={},l={},f=new WeakMap,g=[],_=null,p=!1,m=null,v=null,S=null,y=null,w=null,T=null,x=null,E=new de(0,0,0),D=0,C=!1,O=null,L=null,z=null,P=null,G=null,H.set(0,0,i.canvas.width,i.canvas.height),oe.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:we,disable:He,bindFramebuffer:Dt,drawBuffers:qe,useProgram:lt,setBlending:xe,setMaterial:me,setFlipSided:Le,setCullFace:Te,setLineWidth:nt,setPolygonOffset:ze,setScissorTest:pt,activeTexture:mt,bindTexture:yt,unbindTexture:B,compressedTexImage2D:nn,compressedTexImage3D:ht,texImage2D:M,texImage3D:W,pixelStorei:ne,getParameter:he,updateUBOMapping:Q,uniformBlockBinding:j,texStorage2D:Ze,texStorage3D:R,texSubImage2D:Nt,texSubImage3D:Se,compressedTexSubImage2D:Yt,compressedTexSubImage3D:We,scissor:ge,viewport:Ee,reset:ve}}function Zy(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,h=new WeakMap,d=new Set,u,f=new WeakMap,g=new Set,_=new FinalizationRegistry(R=>g.delete(R)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,M){return p?new OffscreenCanvas(R,M):ua("canvas")}function v(R,M,W){let he=1,ne=Ze(R);if((ne.width>W||ne.height>W)&&(he=W/Math.max(ne.width,ne.height)),he<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let ge=Math.floor(he*ne.width),Ee=Math.floor(he*ne.height);u===void 0&&(u=m(ge,Ee));let Q=M?m(ge,Ee):u;return Q.width=ge,Q.height=Ee,Q.getContext("2d").drawImage(R,0,0,ge,Ee),Xe("WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+ge+"x"+Ee+")."),Q}else return"data"in R&&Xe("WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),R;return R}function S(R){return R.generateMipmaps}function y(R){i.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function T(R,M,W,he,ne,ge=!1){if(R!==null){if(i[R]!==void 0)return i[R];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Ee;he&&(Ee=e.get("EXT_texture_norm16"),Ee||Xe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Q=M;if(M===i.RED&&(W===i.FLOAT&&(Q=i.R32F),W===i.HALF_FLOAT&&(Q=i.R16F),W===i.UNSIGNED_BYTE&&(Q=i.R8),W===i.UNSIGNED_SHORT&&Ee&&(Q=Ee.R16_EXT),W===i.SHORT&&Ee&&(Q=Ee.R16_SNORM_EXT)),M===i.RED_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.R8UI),W===i.UNSIGNED_SHORT&&(Q=i.R16UI),W===i.UNSIGNED_INT&&(Q=i.R32UI),W===i.BYTE&&(Q=i.R8I),W===i.SHORT&&(Q=i.R16I),W===i.INT&&(Q=i.R32I)),M===i.RG&&(W===i.FLOAT&&(Q=i.RG32F),W===i.HALF_FLOAT&&(Q=i.RG16F),W===i.UNSIGNED_BYTE&&(Q=i.RG8),W===i.UNSIGNED_SHORT&&Ee&&(Q=Ee.RG16_EXT),W===i.SHORT&&Ee&&(Q=Ee.RG16_SNORM_EXT)),M===i.RG_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.RG8UI),W===i.UNSIGNED_SHORT&&(Q=i.RG16UI),W===i.UNSIGNED_INT&&(Q=i.RG32UI),W===i.BYTE&&(Q=i.RG8I),W===i.SHORT&&(Q=i.RG16I),W===i.INT&&(Q=i.RG32I)),M===i.RGB_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.RGB8UI),W===i.UNSIGNED_SHORT&&(Q=i.RGB16UI),W===i.UNSIGNED_INT&&(Q=i.RGB32UI),W===i.BYTE&&(Q=i.RGB8I),W===i.SHORT&&(Q=i.RGB16I),W===i.INT&&(Q=i.RGB32I)),M===i.RGBA_INTEGER&&(W===i.UNSIGNED_BYTE&&(Q=i.RGBA8UI),W===i.UNSIGNED_SHORT&&(Q=i.RGBA16UI),W===i.UNSIGNED_INT&&(Q=i.RGBA32UI),W===i.BYTE&&(Q=i.RGBA8I),W===i.SHORT&&(Q=i.RGBA16I),W===i.INT&&(Q=i.RGBA32I)),M===i.RGB&&(W===i.UNSIGNED_SHORT&&Ee&&(Q=Ee.RGB16_EXT),W===i.SHORT&&Ee&&(Q=Ee.RGB16_SNORM_EXT),W===i.UNSIGNED_INT_5_9_9_9_REV&&(Q=i.RGB9_E5),W===i.UNSIGNED_INT_10F_11F_11F_REV&&(Q=i.R11F_G11F_B10F)),M===i.RGBA){let j=ge?ha:ut.getTransfer(ne);W===i.FLOAT&&(Q=i.RGBA32F),W===i.HALF_FLOAT&&(Q=i.RGBA16F),W===i.UNSIGNED_BYTE&&(Q=j===Mt?i.SRGB8_ALPHA8:i.RGBA8),W===i.UNSIGNED_SHORT&&Ee&&(Q=Ee.RGBA16_EXT),W===i.SHORT&&Ee&&(Q=Ee.RGBA16_SNORM_EXT),W===i.UNSIGNED_SHORT_4_4_4_4&&(Q=i.RGBA4),W===i.UNSIGNED_SHORT_5_5_5_1&&(Q=i.RGB5_A1)}return(Q===i.R16F||Q===i.R32F||Q===i.RG16F||Q===i.RG32F||Q===i.RGBA16F||Q===i.RGBA32F)&&e.get("EXT_color_buffer_float"),Q}function x(R,M){let W;return R?M===null||M===ci||M===Ds?W=i.DEPTH24_STENCIL8:M===Jn?W=i.DEPTH32F_STENCIL8:M===Lr&&(W=i.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===ci||M===Ds?W=i.DEPTH_COMPONENT24:M===Jn?W=i.DEPTH_COMPONENT32F:M===Lr&&(W=i.DEPTH_COMPONENT16),W}function E(R,M){return S(R)===!0||R.isFramebufferTexture&&R.minFilter!==pn&&R.minFilter!==Pn?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function D(R){let M=new WeakRef(R);n.get(R).__ref=M,g.add(M),_.register(R,M,M)}function C(R){let M=n.get(R).__ref;M!==void 0&&(g.delete(M),_.unregister(M))}function O(R){z(R.target)}function L(R){P(R.target)}function z(R){R.removeEventListener("dispose",O),C(R),Z(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&d.delete(R)}function P(R){R.removeEventListener("dispose",L),C(R),ce(R)}function G(){for(let R of g){let M=R.deref();M!==void 0&&(M.isRenderTarget===!0?P(M):z(M))}g.clear(),d.clear()}function Z(R){let M=n.get(R);if(M.__webglInit===void 0)return;let W=R.source,he=f.get(W);if(he){let ne=he[M.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&q(R),Object.keys(he).length===0&&f.delete(W)}n.remove(R)}function q(R){let M=n.get(R);i.deleteTexture(M.__webglTexture);let W=R.source,he=f.get(W);delete he[M.__cacheKey],a.memory.textures--}function ce(R){let M=n.get(R);M.__depthDisposeCallback&&M.__depthDisposeCallback();let W=R.depthTexture;if(W&&W.renderTarget===R&&z(W),R.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(M.__webglFramebuffer[ne]))for(let ge=0;ge<M.__webglFramebuffer[ne].length;ge++)i.deleteFramebuffer(M.__webglFramebuffer[ne][ge]);else i.deleteFramebuffer(M.__webglFramebuffer[ne]);M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer[ne])}else{if(Array.isArray(M.__webglFramebuffer))for(let ne=0;ne<M.__webglFramebuffer.length;ne++)i.deleteFramebuffer(M.__webglFramebuffer[ne]);else i.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&i.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&i.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let ne=0;ne<M.__webglColorRenderbuffer.length;ne++)M.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(M.__webglColorRenderbuffer[ne]);M.__webglDepthRenderbuffer&&i.deleteRenderbuffer(M.__webglDepthRenderbuffer)}let he=R.textures;for(let ne=0,ge=he.length;ne<ge;ne++){let Ee=n.get(he[ne]);Ee.__webglTexture&&(i.deleteTexture(Ee.__webglTexture),a.memory.textures--),n.remove(he[ne])}n.remove(R)}let $=0;function te(){$=0}function re(){return $}function Ie(R){$=R}function Ge(){let R=$;return R>=s.maxTextures&&Xe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),$+=1,R}function H(R){let M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.mipmapsAutoUpdate),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function oe(R,M){let W=n.get(R);if(R.isVideoTexture&&Yt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&W.__version!==R.version){let he=R.image;if(he===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if(he.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{me(W,R,M);return}}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,W.__webglTexture,i.TEXTURE0+M)}function Pe(R,M){let W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){me(W,R,M);return}else R.isExternalTexture&&(W.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,W.__webglTexture,i.TEXTURE0+M)}function Fe(R,M){let W=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&W.__version!==R.version){me(W,R,M);return}t.bindTexture(i.TEXTURE_3D,W.__webglTexture,i.TEXTURE0+M)}function we(R,M){let W=n.get(R);if(R.version>0&&W.__version!==R.version){Le(W,R,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,W.__webglTexture,i.TEXTURE0+M)}let He={[ur]:i.REPEAT,[pi]:i.CLAMP_TO_EDGE,[_l]:i.MIRRORED_REPEAT},Dt={[pn]:i.NEAREST,[rp]:i.NEAREST_MIPMAP_NEAREST,[Za]:i.NEAREST_MIPMAP_LINEAR,[Pn]:i.LINEAR,[Zl]:i.LINEAR_MIPMAP_NEAREST,[Oi]:i.LINEAR_MIPMAP_LINEAR},qe={[cp]:i.NEVER,[Ru]:i.ALWAYS,[hp]:i.LESS,[wu]:i.LEQUAL,[up]:i.EQUAL,[Au]:i.GEQUAL,[fp]:i.GREATER,[dp]:i.NOTEQUAL};function lt(R,M){if(M.type===Jn&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Pn||M.magFilter===Zl||M.magFilter===Za||M.magFilter===Oi||M.minFilter===Pn||M.minFilter===Zl||M.minFilter===Za||M.minFilter===Oi)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,He[M.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,He[M.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,He[M.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Dt[M.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Dt[M.minFilter]),M.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,qe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===pn||M.minFilter!==Za&&M.minFilter!==Oi||M.type===Jn&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||n.get(M).__currentAnisotropy){let W=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,W.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,s.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy}}}function dt(R,M){let W=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",O),D(M));let he=M.source,ne=f.get(he);ne===void 0&&(ne={},f.set(he,ne));let ge=H(M);if(ge!==R.__cacheKey){ne[ge]===void 0&&(ne[ge]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,W=!0),ne[ge].usedTimes++;let Ee=ne[R.__cacheKey];Ee!==void 0&&(ne[R.__cacheKey].usedTimes--,Ee.usedTimes===0&&q(M)),R.__cacheKey=ge,R.__webglTexture=ne[ge].texture}return W}function se(R,M,W){return Math.floor(Math.floor(R/W)/M)}function xe(R,M,W,he){let ge=R.updateRanges;if(ge.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,M.width,M.height,W,he,M.data);else{ge.sort((N,ee)=>N.start-ee.start);let Ee=0;for(let N=1;N<ge.length;N++){let ee=ge[Ee],K=ge[N],ye=ee.start+ee.count,pe=se(K.start,M.width,4),_e=se(ee.start,M.width,4);K.start<=ye+1&&pe===_e&&se(K.start+K.count-1,M.width,4)===pe?ee.count=Math.max(ee.count,K.start+K.count-ee.start):(++Ee,ge[Ee]=K)}ge.length=Ee+1;let Q=t.getParameter(i.UNPACK_ROW_LENGTH),j=t.getParameter(i.UNPACK_SKIP_PIXELS),ve=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,M.width);for(let N=0,ee=ge.length;N<ee;N++){let K=ge[N],ye=Math.floor(K.start/4),pe=Math.ceil(K.count/4),_e=ye%M.width,ke=Math.floor(ye/M.width),at=pe,ue=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(i.UNPACK_SKIP_ROWS,ke),t.texSubImage2D(i.TEXTURE_2D,0,_e,ke,at,ue,W,he,M.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,Q),t.pixelStorei(i.UNPACK_SKIP_PIXELS,j),t.pixelStorei(i.UNPACK_SKIP_ROWS,ve)}}function me(R,M,W){let he=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(he=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(he=i.TEXTURE_3D);let ne=dt(R,M),ge=M.source;t.bindTexture(he,R.__webglTexture,i.TEXTURE0+W);let Ee=n.get(ge);if(ge.version!==Ee.__version||ne===!0){if(t.activeTexture(i.TEXTURE0+W),(typeof ImageBitmap<"u"&&M.image instanceof ImageBitmap)===!1){let ue=ut.getPrimaries(ut.workingColorSpace),Ve=M.colorSpace===Bi?null:ut.getPrimaries(M.colorSpace),rt=M.colorSpace===Bi||ue===Ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,rt)}t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment);let j=v(M.image,!1,s.maxTextureSize);j=We(M,j);let ve=r.convert(M.format,M.colorSpace),N=r.convert(M.type),ee=T(M.internalFormat,ve,N,M.normalized,M.colorSpace,M.isVideoTexture);lt(he,M);let K,ye=M.mipmaps,pe=M.isVideoTexture!==!0,_e=Ee.__version===void 0||ne===!0,ke=ge.dataReady,at=E(M,j);if(M.isDepthTexture)ee=x(M.format===Fi,M.type),_e&&(pe?t.texStorage2D(i.TEXTURE_2D,1,ee,j.width,j.height):t.texImage2D(i.TEXTURE_2D,0,ee,j.width,j.height,0,ve,N,null));else if(M.isDataTexture)if(ye.length>0){pe&&_e&&t.texStorage2D(i.TEXTURE_2D,at,ee,ye[0].width,ye[0].height);for(let ue=0,Ve=ye.length;ue<Ve;ue++)K=ye[ue],pe?ke&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,K.width,K.height,ve,N,K.data):t.texImage2D(i.TEXTURE_2D,ue,ee,K.width,K.height,0,ve,N,K.data);M.generateMipmaps=!1}else pe?(_e&&t.texStorage2D(i.TEXTURE_2D,at,ee,j.width,j.height),ke&&xe(M,j,ve,N)):t.texImage2D(i.TEXTURE_2D,0,ee,j.width,j.height,0,ve,N,j.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){pe&&_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,at,ee,ye[0].width,ye[0].height,j.depth);for(let ue=0,Ve=ye.length;ue<Ve;ue++)if(K=ye[ue],M.format!==hi)if(ve!==null)if(pe){if(ke)if(M.layerUpdates.size>0){let rt=Uu(K.width,K.height,M.format,M.type);for(let Ae of M.layerUpdates){let wt=K.data.subarray(Ae*rt/K.data.BYTES_PER_ELEMENT,(Ae+1)*rt/K.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,Ae,K.width,K.height,1,ve,wt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,K.width,K.height,j.depth,ve,K.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ue,ee,K.width,K.height,j.depth,0,K.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else pe?ke&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ue,0,0,0,K.width,K.height,j.depth,ve,N,K.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ue,ee,K.width,K.height,j.depth,0,ve,N,K.data);M.layerUpdates.size>0&&M.clearLayerUpdates()}else{pe&&_e&&t.texStorage2D(i.TEXTURE_2D,at,ee,ye[0].width,ye[0].height);for(let ue=0,Ve=ye.length;ue<Ve;ue++)K=ye[ue],M.format!==hi?ve!==null?pe?ke&&t.compressedTexSubImage2D(i.TEXTURE_2D,ue,0,0,K.width,K.height,ve,K.data):t.compressedTexImage2D(i.TEXTURE_2D,ue,ee,K.width,K.height,0,K.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):pe?ke&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,K.width,K.height,ve,N,K.data):t.texImage2D(i.TEXTURE_2D,ue,ee,K.width,K.height,0,ve,N,K.data)}else if(M.isDataArrayTexture)if(pe){if(_e&&t.texStorage3D(i.TEXTURE_2D_ARRAY,at,ee,j.width,j.height,j.depth),ke)if(M.layerUpdates.size>0){let ue=Uu(j.width,j.height,M.format,M.type);for(let Ve of M.layerUpdates){let rt=j.data.subarray(Ve*ue/j.data.BYTES_PER_ELEMENT,(Ve+1)*ue/j.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ve,j.width,j.height,1,ve,N,rt)}M.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ve,N,j.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ee,j.width,j.height,j.depth,0,ve,N,j.data);else if(M.isData3DTexture)pe?(_e&&t.texStorage3D(i.TEXTURE_3D,at,ee,j.width,j.height,j.depth),ke&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ve,N,j.data)):t.texImage3D(i.TEXTURE_3D,0,ee,j.width,j.height,j.depth,0,ve,N,j.data);else if(M.isFramebufferTexture){if(_e)if(pe)t.texStorage2D(i.TEXTURE_2D,at,ee,j.width,j.height);else{let ue=j.width,Ve=j.height;for(let rt=0;rt<at;rt++)t.texImage2D(i.TEXTURE_2D,rt,ee,ue,Ve,0,ve,N,null),ue>>=1,Ve>>=1}}else if(M.isHTMLTexture){if("texElementImage2D"in i){let ue=i.canvas;if(ue.hasAttribute("layoutsubtree")||ue.setAttribute("layoutsubtree","true"),j.parentNode!==ue){ue.appendChild(j),d.add(M),ue.onpaint=Ve=>{let rt=Ve.changedElements;for(let Ae of d)rt.includes(Ae.image)&&(Ae.needsUpdate=!0)},ue.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,j);else{let rt=i.RGBA,Ae=i.RGBA,wt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,rt,Ae,wt,j)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(ye.length>0){if(pe&&_e){let ue=Ze(ye[0]);t.texStorage2D(i.TEXTURE_2D,at,ee,ue.width,ue.height)}for(let ue=0,Ve=ye.length;ue<Ve;ue++)K=ye[ue],pe?ke&&t.texSubImage2D(i.TEXTURE_2D,ue,0,0,ve,N,K):t.texImage2D(i.TEXTURE_2D,ue,ee,ve,N,K);M.generateMipmaps=!1}else if(pe){if(_e){let ue=Ze(j);t.texStorage2D(i.TEXTURE_2D,at,ee,ue.width,ue.height)}ke&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ve,N,j)}else t.texImage2D(i.TEXTURE_2D,0,ee,ve,N,j);S(M)&&M.mipmapsAutoUpdate===!0&&y(he),Ee.__version=ge.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Le(R,M,W){if(M.image.length!==6)return;let he=dt(R,M),ne=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+W);let ge=n.get(ne);if(ne.version!==ge.__version||he===!0){t.activeTexture(i.TEXTURE0+W);let Ee=ut.getPrimaries(ut.workingColorSpace),Q=M.colorSpace===Bi?null:ut.getPrimaries(M.colorSpace),j=M.colorSpace===Bi||Ee===Q?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ve=M.isCompressedTexture||M.image[0].isCompressedTexture,N=M.image[0]&&M.image[0].isDataTexture,ee=[];for(let Ae=0;Ae<6;Ae++)!ve&&!N?ee[Ae]=v(M.image[Ae],!0,s.maxCubemapSize):ee[Ae]=N?M.image[Ae].image:M.image[Ae],ee[Ae]=We(M,ee[Ae]);let K=ee[0],ye=r.convert(M.format,M.colorSpace),pe=r.convert(M.type),_e=T(M.internalFormat,ye,pe,M.normalized,M.colorSpace),ke=M.isVideoTexture!==!0,at=ge.__version===void 0||he===!0,ue=ne.dataReady,Ve=E(M,K);lt(i.TEXTURE_CUBE_MAP,M);let rt;if(M.isDepthTexture){if(_e=x(M.format===Fi,M.type),at)if(ke)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,_e,K.width,K.height);else for(let Ae=0;Ae<6;Ae++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,_e,K.width,K.height,0,ye,pe,null)}else if(ve){ke&&at&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,_e,K.width,K.height);for(let Ae=0;Ae<6;Ae++){rt=ee[Ae].mipmaps;for(let wt=0;wt<rt.length;wt++){let un=rt[wt];M.format!==hi?ye!==null?ke?ue&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,wt,0,0,un.width,un.height,ye,un.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,wt,_e,un.width,un.height,0,un.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,wt,0,0,un.width,un.height,ye,pe,un.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,wt,_e,un.width,un.height,0,ye,pe,un.data)}}}else{if(rt=M.mipmaps,ke&&at){rt.length>0&&Ve++;let Ae=Ze(ee[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ve,_e,Ae.width,Ae.height)}for(let Ae=0;Ae<6;Ae++)if(N){ke?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,ee[Ae].width,ee[Ae].height,ye,pe,ee[Ae].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,_e,ee[Ae].width,ee[Ae].height,0,ye,pe,ee[Ae].data);for(let wt=0;wt<rt.length;wt++){let Vi=rt[wt].image[Ae].image;ke?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,wt+1,0,0,Vi.width,Vi.height,ye,pe,Vi.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,wt+1,_e,Vi.width,Vi.height,0,ye,pe,Vi.data)}}else{ke?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,0,0,ye,pe,ee[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,0,_e,ye,pe,ee[Ae]);for(let wt=0;wt<rt.length;wt++){let un=rt[wt];ke?ue&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,wt+1,0,0,ye,pe,un.image[Ae]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ae,wt+1,_e,ye,pe,un.image[Ae])}}}S(M)&&M.mipmapsAutoUpdate===!0&&y(i.TEXTURE_CUBE_MAP),ge.__version=ne.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function Te(R,M,W,he,ne,ge){let Ee=r.convert(W.format,W.colorSpace),Q=r.convert(W.type),j=T(W.internalFormat,Ee,Q,W.normalized,W.colorSpace),ve=n.get(M),N=n.get(W);if(N.__renderTarget=M,!ve.__hasExternalTextures){let ee=Math.max(1,M.width>>ge),K=Math.max(1,M.height>>ge);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,ge,j,ee,K,M.depth,0,Ee,Q,null):t.texImage2D(ne,ge,j,ee,K,0,Ee,Q,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Se(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,he,ne,N.__webglTexture,0,Nt(M)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,he,ne,N.__webglTexture,ge),t.bindFramebuffer(i.FRAMEBUFFER,null)}function nt(R,M,W){if(i.bindRenderbuffer(i.RENDERBUFFER,R),M.depthBuffer){let he=M.depthTexture,ne=he&&he.isDepthTexture?he.type:null,ge=x(M.stencilBuffer,ne),Ee=M.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Se(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt(M),ge,M.width,M.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt(M),ge,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,ge,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ee,i.RENDERBUFFER,R)}else{let he=M.textures;for(let ne=0;ne<he.length;ne++){let ge=he[ne],Ee=r.convert(ge.format,ge.colorSpace),Q=r.convert(ge.type),j=T(ge.internalFormat,Ee,Q,ge.normalized,ge.colorSpace);Se(M)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt(M),j,M.width,M.height):W?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt(M),j,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,j,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ze(R,M,W){let he=M.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ne=n.get(M.depthTexture);ne.__renderTarget=M;let ge=he?M.depthTexture.image[0]:M.depthTexture.image;(!ne.__webglTexture||ge.width!==M.width||ge.height!==M.height)&&(ge.width=M.width,ge.height=M.height,M.depthTexture.needsUpdate=!0),he?we(M.depthTexture,0):oe(M.depthTexture,0);let Ee=ne.__webglTexture,Q=Nt(M),j=he?i.TEXTURE_CUBE_MAP_POSITIVE_X+W:i.TEXTURE_2D,ve=M.depthTexture.format===Fi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(M.depthTexture.format===Ii)Se(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,j,Ee,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,ve,j,Ee,0);else if(M.depthTexture.format===Fi)Se(M)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,j,Ee,0,Q):i.framebufferTexture2D(i.FRAMEBUFFER,ve,j,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pt(R){let M=n.get(R),W=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){let he=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),he){let ne=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,he.removeEventListener("dispose",ne)};he.addEventListener("dispose",ne),M.__depthDisposeCallback=ne}M.__boundDepthTexture=he}if(R.depthTexture&&!M.__autoAllocateDepthBuffer)if(W)for(let he=0;he<6;he++)ze(M.__webglFramebuffer[he],R,he);else R.texture.mipmaps.length>0?ze(M.__webglFramebuffer[0],R,0):ze(M.__webglFramebuffer,R,0);else if(W){M.__webglDepthbuffer=[];for(let he=0;he<6;he++)if(t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[he]),M.__webglDepthbuffer[he]===void 0)M.__webglDepthbuffer[he]=i.createRenderbuffer(),nt(M.__webglDepthbuffer[he],R,!1);else{let ne=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=M.__webglDepthbuffer[he];i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,ge)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=i.createRenderbuffer(),nt(M.__webglDepthbuffer,R,!1);else{let ne=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ge=M.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ge),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,ge)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(R,M,W){let he=n.get(R);M!==void 0&&Te(he.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),W!==void 0&&pt(R)}function yt(R){let M=R.texture,W=n.get(R),he=n.get(M);R.addEventListener("dispose",L),D(R);let ne=R.textures,ge=R.isWebGLCubeRenderTarget===!0,Ee=ne.length>1;if(Ee||(he.__webglTexture===void 0&&(he.__webglTexture=i.createTexture()),he.__version=M.version,a.memory.textures++),ge){W.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(M.mipmaps.length>0){W.__webglFramebuffer[Q]=[];for(let j=0;j<M.mipmaps.length;j++)W.__webglFramebuffer[Q][j]=i.createFramebuffer()}else W.__webglFramebuffer[Q]=i.createFramebuffer()}else{if(M.mipmaps.length>0){W.__webglFramebuffer=[];for(let Q=0;Q<M.mipmaps.length;Q++)W.__webglFramebuffer[Q]=i.createFramebuffer()}else W.__webglFramebuffer=i.createFramebuffer();if(Ee)for(let Q=0,j=ne.length;Q<j;Q++){let ve=n.get(ne[Q]);ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Se(R)===!1){W.__webglMultisampledFramebuffer=i.createFramebuffer(),W.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,W.__webglMultisampledFramebuffer);for(let Q=0;Q<ne.length;Q++){let j=ne[Q];W.__webglColorRenderbuffer[Q]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,W.__webglColorRenderbuffer[Q]);let ve=r.convert(j.format,j.colorSpace),N=r.convert(j.type),ee=T(j.internalFormat,ve,N,j.normalized,j.colorSpace,R.isXRRenderTarget===!0),K=Nt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,K,ee,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Q,i.RENDERBUFFER,W.__webglColorRenderbuffer[Q])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(W.__webglDepthRenderbuffer=i.createRenderbuffer(),nt(W.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ge){t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),lt(i.TEXTURE_CUBE_MAP,M);for(let Q=0;Q<6;Q++)if(M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)Te(W.__webglFramebuffer[Q][j],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,j);else Te(W.__webglFramebuffer[Q],R,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);S(M)?y(i.TEXTURE_CUBE_MAP):M.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}else if(Ee){for(let Q=0,j=ne.length;Q<j;Q++){let ve=ne[Q],N=n.get(ve),ee=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ee=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ee,N.__webglTexture),lt(ee,ve),Te(W.__webglFramebuffer,R,ve,i.COLOR_ATTACHMENT0+Q,ee,0),S(ve)&&y(ee)}t.unbindTexture()}else{let Q=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(Q=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Q,he.__webglTexture),lt(Q,M),M.mipmaps.length>0)for(let j=0;j<M.mipmaps.length;j++)Te(W.__webglFramebuffer[j],R,M,i.COLOR_ATTACHMENT0,Q,j);else Te(W.__webglFramebuffer,R,M,i.COLOR_ATTACHMENT0,Q,0);S(M)?y(Q):M.mipmaps.length>0&&i.texParameteri(Q,i.TEXTURE_MAX_LEVEL,M.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&pt(R)}function B(R){let M=R.textures;for(let W=0,he=M.length;W<he;W++){let ne=M[W];if(S(ne)&&ne.mipmapsAutoUpdate===!0){let ge=w(R),Ee=n.get(ne).__webglTexture;t.bindTexture(ge,Ee),y(ge),t.unbindTexture()}}}let nn=[];function ht(R){if(R.samples>0){if(Se(R)===!1){let M=R.textures,W=R.width,he=R.height,ne=i.COLOR_BUFFER_BIT,ge=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=n.get(R),Q=M.length>1;if(Q)for(let ve=0;ve<M.length;ve++)t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let ve=0;ve<M.length;ve++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),Q){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[ve]);let N=n.get(M[ve]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,N,0)}i.blitFramebuffer(0,0,W,he,0,0,W,he,ne,i.NEAREST),l===!0&&(nn.length=0,nn.push(i.COLOR_ATTACHMENT0+ve),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&nn.push(ge),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,nn))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Q)for(let ve=0;ve<M.length;ve++){t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,Ee.__webglColorRenderbuffer[ve]);let N=n.get(M[ve]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ee.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.TEXTURE_2D,N,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let M=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[M])}}}function Nt(R){return Math.min(s.maxSamples,R.samples)}function Se(R){let M=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Yt(R){let M=a.render.frame;h.get(R)!==M&&(h.set(R,M),R.update())}function We(R,M){let W=R.colorSpace,he=R.format,ne=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||W!==ca&&W!==Bi&&(ut.getTransfer(W)===Mt?(he!==hi||ne!==On)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ye("WebGLTextures: Unsupported texture color space:",W)),M}function Ze(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Ge,this.resetTextureUnits=te,this.getTextureUnits=re,this.setTextureUnits=Ie,this.setTexture2D=oe,this.setTexture2DArray=Pe,this.setTexture3D=Fe,this.setTextureCube=we,this.rebindTextures=mt,this.setupRenderTarget=yt,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=ht,this.setupDepthRenderbuffer=pt,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=Se,this.dispose=G}function Jy(i,e){function t(n,s=Bi){let r,a=ut.getTransfer(s);if(n===On)return i.UNSIGNED_BYTE;if(n===$l)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Kl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Su)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Eu)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===yu)return i.BYTE;if(n===Mu)return i.SHORT;if(n===Lr)return i.UNSIGNED_SHORT;if(n===Jl)return i.INT;if(n===ci)return i.UNSIGNED_INT;if(n===Jn)return i.FLOAT;if(n===yn)return i.HALF_FLOAT;if(n===bu)return i.ALPHA;if(n===Tu)return i.RGB;if(n===hi)return i.RGBA;if(n===Ii)return i.DEPTH_COMPONENT;if(n===Fi)return i.DEPTH_STENCIL;if(n===Ql)return i.RED;if(n===jl)return i.RED_INTEGER;if(n===rs)return i.RG;if(n===ec)return i.RG_INTEGER;if(n===tc)return i.RGBA_INTEGER;if(n===Ja||n===$a||n===Ka||n===Qa)if(a===Mt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ja)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ja)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$a)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ka)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nc||n===ic||n===sc||n===rc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===ac||n===oc||n===lc||n===cc||n===hc||n===ja||n===uc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===ac||n===oc)return a===Mt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===lc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===cc)return r.COMPRESSED_R11_EAC;if(n===hc)return r.COMPRESSED_SIGNED_R11_EAC;if(n===ja)return r.COMPRESSED_RG11_EAC;if(n===uc)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===fc||n===dc||n===pc||n===mc||n===gc||n===_c||n===xc||n===vc||n===yc||n===Mc||n===Sc||n===Ec||n===bc||n===Tc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===fc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===dc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===pc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===mc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===gc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===_c)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===xc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===vc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===yc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Mc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Sc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ec)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===bc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Tc)return a===Mt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===wc||n===Ac||n===Rc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===wc)return a===Mt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Ac)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Rc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Cc||n===Pc||n===eo||n===Ic)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Cc)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Pc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===eo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ic)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ds?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var $y=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ky=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Ju=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Ta(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Tt({vertexShader:$y,fragmentShader:Ky,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ae(new Ln(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$u=class extends mi{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,_=typeof XRWebGLBinding<"u",p=new Ju,m={},v=t.getContextAttributes(),S=null,y=null,w=[],T=[],x=new ie,E=null,D=null,C=new xn;C.viewport=new Vt;let O=new xn;O.viewport=new Vt;let L=[C,O],z=new Wl,P=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(H){let oe=w[H];return oe===void 0&&(oe=new gr,w[H]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(H){let oe=w[H];return oe===void 0&&(oe=new gr,w[H]=oe),oe.getGripSpace()},this.getHand=function(H){let oe=w[H];return oe===void 0&&(oe=new gr,w[H]=oe),oe.getHandSpace()};function Z(H){let oe=T.indexOf(H.inputSource);if(oe===-1)return;let Pe=w[oe];Pe!==void 0&&(Pe.update(H.inputSource,H.frame,c||a),Pe.dispatchEvent({type:H.type,data:H.inputSource}))}function q(){s.removeEventListener("select",Z),s.removeEventListener("selectstart",Z),s.removeEventListener("selectend",Z),s.removeEventListener("squeeze",Z),s.removeEventListener("squeezestart",Z),s.removeEventListener("squeezeend",Z),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",ce);for(let H=0;H<w.length;H++){let oe=T[H];oe!==null&&(T[H]=null,w[H].disconnect(oe))}P=null,G=null,p.reset();for(let H in m)delete m[H];if(e.setRenderTarget(S),f=null,u=null,d=null,s=null,y=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(x.width,x.height,!1),D!==null){let H=D.camera;H.fov=D.fov,H.zoom=D.zoom,H.updateProjectionMatrix(),D=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(H){r=H,n.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(H){o=H,n.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(H){c=H},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(H){if(s=H,s!==null){if(S=e.getRenderTarget(),s.addEventListener("select",Z),s.addEventListener("selectstart",Z),s.addEventListener("selectend",Z),s.addEventListener("squeeze",Z),s.addEventListener("squeezestart",Z),s.addEventListener("squeezeend",Z),s.addEventListener("end",q),s.addEventListener("inputsourceschange",ce),v.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(x),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pe=null,Fe=null,we=null;v.depth&&(we=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Pe=v.stencil?Fi:Ii,Fe=v.stencil?Ds:ci);let He={colorFormat:t.RGBA8,depthFormat:we,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(He),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new on(u.textureWidth,u.textureHeight,{format:hi,type:On,depthTexture:new Di(u.textureWidth,u.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,Pe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Pe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,t,Pe),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new on(f.framebufferWidth,f.framebufferHeight,{format:hi,type:On,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ge.setContext(s),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function ce(H){for(let oe=0;oe<H.removed.length;oe++){let Pe=H.removed[oe],Fe=T.indexOf(Pe);Fe>=0&&(T[Fe]=null,w[Fe].disconnect(Pe))}for(let oe=0;oe<H.added.length;oe++){let Pe=H.added[oe],Fe=T.indexOf(Pe);if(Fe===-1){for(let He=0;He<w.length;He++)if(He>=T.length){T.push(Pe),Fe=He;break}else if(T[He]===null){T[He]=Pe,Fe=He;break}if(Fe===-1)break}let we=w[Fe];we&&we.connect(Pe)}}function $(H,oe){oe===null?H.matrixWorld.copy(H.matrix):H.matrixWorld.multiplyMatrices(oe.matrixWorld,H.matrix),H.matrixWorldInverse.copy(H.matrixWorld).invert()}this.updateCamera=function(H){if(s===null)return;let oe=H.near,Pe=H.far;p.texture!==null&&(p.depthNear>0&&(oe=p.depthNear),p.depthFar>0&&(Pe=p.depthFar)),z.near=O.near=C.near=oe,z.far=O.far=C.far=Pe,(P!==z.near||G!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),P=z.near,G=z.far),z.layers.mask=H.layers.mask|6,C.layers.mask=z.layers.mask&-5,O.layers.mask=z.layers.mask&-3;let Fe=H.parent,we=z.cameras;$(z,Fe);for(let He=0;He<we.length;He++)$(we[He],Fe);z.projectionMatrix.copy(C.projectionMatrix),z.projectionMatrixInverse.copy(C.projectionMatrixInverse),D===null&&H.isPerspectiveCamera&&(D={camera:H,fov:H.fov,zoom:H.zoom}),te(H,z,Fe)};function te(H,oe,Pe){Pe===null?H.matrix.copy(oe.matrixWorld):(H.matrix.copy(Pe.matrixWorld),H.matrix.invert(),H.matrix.multiply(oe.matrixWorld)),H.matrix.decompose(H.position,H.quaternion,H.scale),H.updateMatrixWorld(!0),H.projectionMatrix.copy(oe.projectionMatrix),H.projectionMatrixInverse.copy(oe.projectionMatrixInverse),H.isPerspectiveCamera&&(H.fov=da*2*Math.atan(1/H.projectionMatrix.elements[5]),H.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(H){l=H,u!==null&&(u.fixedFoveation=H),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=H)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(H){return m[H]};let re=null;function Ie(H,oe){if(h=oe.getViewerPose(c||a),g=oe,h!==null){let Pe=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Fe=!1;Pe.length!==z.cameras.length&&(z.cameras.length=0,Fe=!0);for(let qe=0;qe<Pe.length;qe++){let lt=Pe[qe],dt=null;if(f!==null)dt=f.getViewport(lt);else{let xe=d.getViewSubImage(u,lt);dt=xe.viewport,qe===0&&(e.setRenderTargetTextures(y,xe.colorTexture,xe.depthStencilTexture),e.setRenderTarget(y))}let se=L[qe];se===void 0&&(se=new xn,se.layers.enable(qe),se.viewport=new Vt,L[qe]=se),se.matrix.fromArray(lt.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(lt.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(dt.x,dt.y,dt.width,dt.height),qe===0&&(z.matrix.copy(se.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Fe===!0&&z.cameras.push(se)}let we=s.enabledFeatures;if(we&&we.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&_){d=n.getBinding();let qe=d.getDepthInformation(Pe[0]);qe&&qe.isValid&&qe.texture&&p.init(qe,s.renderState)}if(we&&we.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let qe=0;qe<Pe.length;qe++){let lt=Pe[qe].camera;if(lt){let dt=m[lt];dt||(dt=new Ta,m[lt]=dt);let se=d.getCameraImage(lt);dt.sourceTexture=se}}}}for(let Pe=0;Pe<w.length;Pe++){let Fe=T[Pe],we=w[Pe];Fe!==null&&we!==void 0&&we.update(Fe,oe,c||a)}re&&re(H,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),g=null}let Ge=new $p;Ge.setAnimationLoop(Ie),this.setAnimationLoop=function(H){re=H},this.dispose=function(){}}},Qy=new St,am=new Qe;am.set(-1,0,0,0,1,0,0,0,1);function jy(i,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function n(p,m){m.color.getRGB(p.fogColor.value,Lu(i)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function s(p,m,v,S,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?r(p,m):m.isMeshLambertMaterial?(r(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(r(p,m),d(p,m)):m.isMeshPhongMaterial?(r(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(r(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(r(p,m),g(p,m)):m.isMeshDepthMaterial?r(p,m):m.isMeshDistanceMaterial?(r(p,m),_(p,m)):m.isMeshNormalMaterial?r(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,v,S):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function r(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===vn&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===vn&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let v=e.get(m),S=v.envMap,y=v.envMapRotation;S&&(p.envMap.value=S,p.envMapRotation.value.setFromMatrix4(Qy.makeRotationFromEuler(y)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(am),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,v,S){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*v,p.scale.value=S*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,v){p.ior.value=m.ior,m.diffuseRoughness>0&&(p.diffuseRoughness.value=m.diffuseRoughness,m.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=m.diffuseRoughnessMap,t(m.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===vn&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=m.iridescenceThicknessMaximum,m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=v.texture,p.transmissionSamplerSize.value.set(v.width,v.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function _(p,m){let v=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(v.matrixWorld),p.nearDistance.value=v.shadow.camera.near,p.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function eM(i,e,t,n){let s={},r={};function a(v,S){let y=S.program;n.uniformBlockBinding(v,y,s[v.id])}function o(v,S){let y=s[v.id];y===void 0&&(g(v),y=l(v),s[v.id]=y,v.addEventListener("dispose",p));let w=S.program;n.updateUBOMapping(v,w);let T=e.render.frame;r[v.id]!==T&&(c(v),r[v.id]=T)}function l(v){let S=i.createBuffer(),y=v.__size,w=v.usage;return i.bindBuffer(i.UNIFORM_BUFFER,S),i.bufferData(i.UNIFORM_BUFFER,y,w),i.bindBuffer(i.UNIFORM_BUFFER,null),S}function c(v){let S=s[v.id],y=v.uniforms,w=v.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let T=0,x=y.length;T<x;T++){let E=y[T];if(Array.isArray(E))for(let D=0,C=E.length;D<C;D++)h(E[D],T,D,w);else h(E,T,0,w)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(v,S,y,w){if(u(v,S,y,w)===!0){let T=v.__offset,x=v.value;if(Array.isArray(x)){let E=0;for(let D=0;D<x.length;D++){let C=x[D],O=_(C,!0);d(C,v.__data,E),E+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else d(x,v.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,v.__data)}}function d(v,S,y){typeof v=="number"||typeof v=="boolean"?S[y]=v:v.isMatrix3?(S[y]=v.elements[0],S[y+1]=v.elements[1],S[y+2]=v.elements[2],S[y+3]=0,S[y+4]=v.elements[3],S[y+5]=v.elements[4],S[y+6]=v.elements[5],S[y+7]=0,S[y+8]=v.elements[6],S[y+9]=v.elements[7],S[y+10]=v.elements[8],S[y+11]=0):ArrayBuffer.isView(v)?S.set(v.subarray(0,S.length-y),y):v.toArray(S,y)}function u(v,S,y,w){let T=v.value,x=S+"_"+y;if(Array.isArray(T)){w[x]===void 0&&(w[x]=[]);let E=w[x],D=!1;for(let C=0;C<T.length;C++)f(T[C],E,C)===!0&&(D=!0);return D}return f(T,w,x)}function f(v,S,y){if(S[y]===void 0)return typeof v=="number"||typeof v=="boolean"?S[y]=v:ArrayBuffer.isView(v)?S[y]=v.slice():S[y]=v.clone(),!0;{let w=S[y];if(typeof v=="number"||typeof v=="boolean"){if(w!==v)return S[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(w.equals(v)===!1)return w.copy(v),!0}}return!1}function g(v){let S=v.uniforms,y=0,w=16;for(let x=0,E=S.length;x<E;x++){let D=Array.isArray(S[x])?S[x]:[S[x]];for(let C=0,O=D.length;C<O;C++){let L=D[C],z=Array.isArray(L.value)?L.value:[L.value],P=Array.isArray(S[x])||Array.isArray(L.value),G=y;for(let q=0,ce=z.length;q<ce;q++){let $=z[q],te=_($,P),re=y%w,Ie=re%te.boundary,Ge=re+Ie;y+=Ie,Ge!==0&&w-Ge<te.storage&&(y+=w-Ge),q===0&&(G=y),y+=te.storage}let Z=L.type==="int"?Int32Array:L.type==="uint"?Uint32Array:Float32Array;L.__data=new Z((y-G)/Float32Array.BYTES_PER_ELEMENT),L.__offset=G}}let T=y%w;return T>0&&(y+=w-T),v.__size=y,v.__cache={},this}function _(v,S){let y={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(y.boundary=4,y.storage=4):v.isVector2?(y.boundary=8,y.storage=8):v.isVector3||v.isColor?(y.boundary=16,y.storage=12):v.isVector4?(y.boundary=16,y.storage=16):v.isMatrix3?(y.boundary=16,y.storage=48):v.isMatrix4?(y.boundary=16,y.storage=64):v.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(v)?(y.boundary=16,y.storage=v.byteLength):Xe("WebGLRenderer: Unsupported uniform value type.",v),S===!0&&(y.boundary=16,y.storage=Math.ceil(y.storage/16)*16),y}function p(v){let S=v.target;S.removeEventListener("dispose",p),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function m(){for(let v in s)i.deleteBuffer(s[v]);s={},r={}}return{bind:a,update:o,dispose:m}}var tM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Mi=null;function nM(){return Mi===null&&(Mi=new va(tM,16,16,rs,yn),Mi.name="DFG_LUT",Mi.minFilter=Pn,Mi.magFilter=Pn,Mi.wrapS=pi,Mi.wrapT=pi,Mi.generateMipmaps=!1,Mi.needsUpdate=!0),Mi}var Oc=class{constructor(e={}){let{canvas:t=pp(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=On}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;let _=f,p=new Set([tc,ec,jl]),m=new Set([On,ci,Lr,Ds,$l,Kl]),v=new Uint32Array(4),S=new Int32Array(4),y={textures:[],min:[],max:[],resolution:[]},w=null,T=null,x=[],E=[],D=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,O=!1,L=null,z=null,P=null,G=null;this._outputColorSpace=_n;let Z=0,q=0,ce=null,$=-1,te=null,re=new Vt,Ie=new Vt,Ge=null,H=new de(0),oe=0,Pe=t.width,Fe=t.height,we=1,He=null,Dt=null,qe=new Vt(0,0,Pe,Fe),lt=new Vt(0,0,Pe,Fe),dt=!1,se=new Ki,xe=new El,me=!1,Le=!1,Te=new St,nt=new A,ze=new Vt,pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},mt=!1;function yt(){return ce===null?we:1}let B=n;function nn(b,F){return t.getContext(b,F)}let ht,Nt,Se,Yt,We,Ze,R,M,W,he,ne,ge,Ee,Q,j,ve,N,ee,K,ye,pe,_e,ke;try{let b={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Ve,!1),t.addEventListener("webglcontextrestored",rt,!1),t.addEventListener("webglcontextcreationerror",Ae,!1),B===null){let F="webgl2";if(B=nn(F,b),B===null)throw nn(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}at()}catch(b){throw t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),Ye("WebGLRenderer: "+b.message),b}function at(){ht=new dv(B),ht.init(),pe=new Jy(B,ht),Nt=new nv(B,ht,e,pe),Se=new Yy(B,ht),Nt.reversedDepthBuffer&&u&&Se.buffers.depth.setReversed(!0),z=B.createFramebuffer(),P=B.createFramebuffer(),G=B.createFramebuffer(),Yt=new gv(B),We=new Dy,Ze=new Zy(B,ht,Se,We,Nt,pe,Yt),R=new fv(C),M=new x0(B),_e=new ev(B,M),W=new pv(B,M,Yt,_e),he=new xv(B,W,M,_e,Yt),ee=new _v(B,Nt,Ze),j=new iv(We),ne=new Ly(C,R,ht,Nt,_e,j),ge=new jy(C,We),Ee=new Uy,Q=new ky(ht),N=new jx(C,R,Se,he,g,l),ve=new qy(C,he,Nt),ke=new eM(B,Yt,Nt,Se),K=new tv(B,ht,Yt),ye=new mv(B,ht,Yt),Yt.programs=ne.programs,C.capabilities=Nt,C.extensions=ht,C.properties=We,C.renderLists=Ee,C.shadowMap=ve,C.state=Se,C.info=Yt}_!==On&&(D=new yv(_,t.width,t.height,o,s,r));let ue=new $u(C,B);this.xr=ue,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){let b=ht.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=ht.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return we},this.setPixelRatio=function(b){b!==void 0&&(we=b,this.setSize(Pe,Fe,!1))},this.getSize=function(b){return b.set(Pe,Fe)},this.setSize=function(b,F,J=!0){if(ue.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}Pe=b,Fe=F,t.width=Math.floor(b*we),t.height=Math.floor(F*we),J===!0&&(t.style.width=b+"px",t.style.height=F+"px"),D!==null&&D.setSize(t.width,t.height),this.setViewport(0,0,b,F)},this.getDrawingBufferSize=function(b){return b.set(Pe*we,Fe*we).floor()},this.setDrawingBufferSize=function(b,F,J){Pe=b,Fe=F,we=J,t.width=Math.floor(b*J),t.height=Math.floor(F*J),this.setViewport(0,0,b,F)},this.setEffects=function(b){if(_===On){Ye("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let F=0;F<b.length;F++)if(b[F].isOutputPass===!0){Xe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(re)},this.getViewport=function(b){return b.copy(qe)},this.setViewport=function(b,F,J,V){b.isVector4?qe.set(b.x,b.y,b.z,b.w):qe.set(b,F,J,V),Se.viewport(re.copy(qe).multiplyScalar(yt()).round())},this.getScissor=function(b){return b.copy(lt)},this.setScissor=function(b,F,J,V){b.isVector4?lt.set(b.x,b.y,b.z,b.w):lt.set(b,F,J,V),Se.scissor(Ie.copy(lt).multiplyScalar(yt()).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(b){Se.setScissorTest(dt=b)},this.setOpaqueSort=function(b){He=b},this.setTransparentSort=function(b){Dt=b},this.getClearColor=function(b){return b.copy(N.getClearColor())},this.setClearColor=function(){N.setClearColor(...arguments)},this.getClearAlpha=function(){return N.getClearAlpha()},this.setClearAlpha=function(){N.setClearAlpha(...arguments)},this.clear=function(b=!0,F=!0,J=!0){let V=0;if(b){let X=!1;if(ce!==null){let be=ce.texture.format;X=p.has(be)}if(X){let be=ce.texture.type,Ne=m.has(be),Me=N.getClearColor(),Ce=N.getClearAlpha(),Be=Me.r,et=Me.g,gt=Me.b;Ne?(v[0]=Be,v[1]=et,v[2]=gt,v[3]=Ce,B.clearBufferuiv(B.COLOR,0,v)):(S[0]=Be,S[1]=et,S[2]=gt,S[3]=Ce,B.clearBufferiv(B.COLOR,0,S))}else V|=B.COLOR_BUFFER_BIT}F&&(V|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(V|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V!==0&&B.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),L=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Ve,!1),t.removeEventListener("webglcontextrestored",rt,!1),t.removeEventListener("webglcontextcreationerror",Ae,!1),N.dispose(),Ee.dispose(),Q.dispose(),Ze.dispose(),We.dispose(),R.dispose(),he.dispose(),W.dispose(),_e.dispose(),ke.dispose(),ne.dispose(),ue.dispose(),ue.removeEventListener("sessionstart",Bf),ue.removeEventListener("sessionend",zf),ds.stop()};function Ve(b){b.preventDefault(),fa("WebGLRenderer: Context Lost."),O=!0}function rt(){fa("WebGLRenderer: Context Restored."),O=!1;let b=Yt.autoReset,F=ve.enabled,J=ve.autoUpdate,V=ve.needsUpdate,X=ve.type;at(),Yt.autoReset=b,ve.enabled=F,ve.autoUpdate=J,ve.needsUpdate=V,ve.type=X}function Ae(b){Ye("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function wt(b){let F=b.target;F.removeEventListener("dispose",wt),un(F)}function un(b){Vi(b),We.remove(b)}function Vi(b){let F=We.get(b).programs;F!==void 0&&(F.forEach(function(J){ne.releaseProgram(J)}),b.isShaderMaterial&&ne.releaseShaderCache(b))}this.renderBufferDirect=function(b,F,J,V,X,be){F===null&&(F=pt);let Ne=X.isMesh&&X.matrixWorld.determinantAffine()<0,Me=rg(b,F,J,V,X);Se.setMaterial(V,Ne);let Ce=J.index,Be=1;if(V.wireframe===!0){if(Ce=W.getWireframeAttribute(J),Ce===void 0)return;Be=2}let et=J.drawRange,gt=J.attributes.position,Ue=et.start*Be,_t=(et.start+et.count)*Be;be!==null&&(Ue=Math.max(Ue,be.start*Be),_t=Math.min(_t,(be.start+be.count)*Be)),Ce!==null?(Ue=Math.max(Ue,0),_t=Math.min(_t,Ce.count)):gt!=null&&(Ue=Math.max(Ue,0),_t=Math.min(_t,gt.count));let sn=_t-Ue;if(sn<0||sn===1/0)return;_e.setup(X,V,Me,J,Ce);let Ot,Ut=K;if(Ce!==null&&(Ot=M.get(Ce),Ut=ye,Ut.setIndex(Ot)),X.isMesh)V.wireframe===!0?(Se.setLineWidth(V.wireframeLinewidth*yt()),Ut.setMode(B.LINES)):Ut.setMode(B.TRIANGLES);else if(X.isLine){let Sn=V.linewidth;Sn===void 0&&(Sn=1),Se.setLineWidth(Sn*yt()),X.isLineSegments?Ut.setMode(B.LINES):X.isLineLoop?Ut.setMode(B.LINE_LOOP):Ut.setMode(B.LINE_STRIP)}else X.isPoints?Ut.setMode(B.POINTS):X.isSprite&&Ut.setMode(B.TRIANGLES);if(X.isBatchedMesh)if(ht.get("WEBGL_multi_draw"))Ut.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let Sn=X._multiDrawStarts,Oe=X._multiDrawCounts,Rn=X._multiDrawCount,Et=Ce?M.get(Ce).bytesPerElement:1,ps=We.get(V).currentProgram.getUniforms();for(let En=0;En<Rn;En++)ps.setValue(B,"_gl_DrawID",En),Ut.render(Sn[En]/Et,Oe[En])}else if(X.isInstancedMesh)Ut.renderInstances(Ue,sn,X.count);else if(J.isInstancedBufferGeometry){let Sn=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Oe=Math.min(J.instanceCount,Sn);Ut.renderInstances(Ue,sn,Oe)}else Ut.render(Ue,sn)};function Ff(b,F,J,V){L!==null&&b.isNodeMaterial&&L.setObject(V,b),me===!0&&j.setState(b,J,!1),b.transparent===!0&&b.side===Pt&&b.forceSinglePass===!1?(b.side=vn,b.needsUpdate=!0,Zr(b,F,V),b.side=ss,b.needsUpdate=!0,Zr(b,F,V),b.side=Pt):Zr(b,F,V)}this.compile=function(b,F,J=null){J===null&&(J=b),L!==null&&L.renderStart(b,F,J),T=Q.get(J),T.init(F),E.push(T),J.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),b!==J&&b.traverseVisible(function(X){X.isLight&&X.layers.test(F.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights(),L!==null&&L.updateLights(T.state.lightsArray),Le=this.localClippingEnabled,me=j.init(this.clippingPlanes,Le),me===!0&&j.setGlobalState(this.clippingPlanes,F),L!==null&&ve.render(T.state.shadowsArray,J,F);let V=new Set;return b.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let be=X.material;if(be)if(Array.isArray(be))for(let Ne=0;Ne<be.length;Ne++){let Me=be[Ne];Ff(Me,J,F,X),V.add(Me)}else Ff(be,J,F,X),V.add(be)}),T=E.pop(),L!==null&&L.renderEnd(),V},this.compileAsync=function(b,F,J=null){let V=this.compile(b,F,J);return new Promise(X=>{function be(){if(V.forEach(function(Ne){let Ce=We.get(Ne).currentProgram;(Ce===void 0||Ce.isReady())&&V.delete(Ne)}),V.size===0){X(b);return}setTimeout(be,10)}ht.get("KHR_parallel_shader_compile")!==null?be():setTimeout(be,10)})};let bh=null;function ig(b){bh&&bh(b)}function Bf(){ds.stop()}function zf(){ds.start()}let ds=new $p;ds.setAnimationLoop(ig),typeof self<"u"&&ds.setContext(self),this.setAnimationLoop=function(b){bh=b,ue.setAnimationLoop(b),b===null?ds.stop():ds.start()},ue.addEventListener("sessionstart",Bf),ue.addEventListener("sessionend",zf),this.render=function(b,F){if(F!==void 0&&F.isCamera!==!0){Ye("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;L!==null&&L.renderStart(b,F);let J=ue.enabled===!0&&ue.isPresenting===!0,V=D!==null&&(ce===null||J)&&D.begin(C,ce);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ue.enabled===!0&&ue.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ue.cameraAutoUpdate===!0&&ue.updateCamera(F),F=ue.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,F,ce),T=Q.get(b,E.length),T.init(F),T.state.textureUnits=Ze.getTextureUnits(),E.push(T),Te.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),F.isArrayCamera?xe.setFromArrayCamera(F):se.setFromProjectionMatrix(Te,Zn,F.reversedDepth),Le=this.localClippingEnabled,me=j.init(this.clippingPlanes,Le),w=Ee.get(b,x.length),w.init(),x.push(w),this.info.render.frame++,ue.enabled===!0&&ue.isPresenting===!0){let Ne=C.xr.getDepthSensingMesh();Ne!==null&&Th(Ne,F,-1/0,C.sortObjects)}Th(b,F,0,C.sortObjects),w.finish(),L!==null&&L.updateLights(T.state.lightsArray),C.sortObjects===!0&&w.sort(He,Dt),mt=ue.enabled===!1||ue.isPresenting===!1||ue.hasDepthSensing()===!1,mt&&N.addToRenderList(w,b),this.info.autoReset===!0&&this.info.reset(),me===!0&&j.beginShadows();let X=T.state.shadowsArray;if(ve.render(X,b,F),me===!0&&j.endShadows(),(V&&D.hasRenderPass())===!1){let Ne=w.opaque,Me=w.transmissive;if(T.setupLights(),F.isArrayCamera){let Ce=F.cameras;if(Me.length>0)for(let Be=0,et=Ce.length;Be<et;Be++){let gt=Ce[Be];kf(Ne,Me,b,gt)}mt&&N.render(b);for(let Be=0,et=Ce.length;Be<et;Be++){let gt=Ce[Be];Hf(w,b,gt,gt.viewport)}}else Me.length>0&&kf(Ne,Me,b,F),mt&&N.render(b),Hf(w,b,F)}ce!==null&&q===0&&(Ze.updateMultisampleRenderTarget(ce),Ze.updateRenderTargetMipmap(ce)),V&&D.end(C),b.isScene===!0&&b.onAfterRender(C,b,F),_e.resetDefaultState(),$=-1,te=null,E.pop(),E.length>0?(T=E[E.length-1],Ze.setTextureUnits(T.state.textureUnits),me===!0&&j.setGlobalState(C.clippingPlanes,T.state.camera)):T=null,x.pop(),x.length>0?w=x[x.length-1]:w=null,L!==null&&L.renderEnd()};function Th(b,F,J,V){if(b.visible===!1)return;if(b.layers.test(F.layers)){if(b.isGroup)J=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(F);else if(b.isLight)T.pushLight(b),b.castShadow&&T.pushShadow(b);else if(b.isSprite){let Ne=F.isArrayCamera?xe:se;if(!b.frustumCulled||b.intersectsFrustum(Ne)){V&&ze.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Te);let Me=he.update(b),Ce=b.material;Ce.visible&&w.push(b,Me,Ce,J,ze.z,null,F)}}else if(b.isMesh||b.isLine||b.isPoints){let Ne=F.isArrayCamera?xe:se;if(!b.frustumCulled||b.intersectsFrustum(Ne)){let Me=he.update(b),Ce=b.material;if(V&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),ze.copy(b.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),ze.copy(Me.boundingSphere.center)),ze.applyMatrix4(b.matrixWorld).applyMatrix4(Te)),Array.isArray(Ce)){let Be=Me.groups;for(let et=0,gt=Be.length;et<gt;et++){let Ue=Be[et],_t=Ce[Ue.materialIndex];_t&&_t.visible&&w.push(b,Me,_t,J,ze.z,Ue,F)}}else Ce.visible&&w.push(b,Me,Ce,J,ze.z,null,F)}}}let be=b.children;for(let Ne=0,Me=be.length;Ne<Me;Ne++)Th(be[Ne],F,J,V)}function Hf(b,F,J,V){let{opaque:X,transmissive:be,transparent:Ne}=b;T.setupLightsView(J),me===!0&&j.setGlobalState(C.clippingPlanes,J),V&&Se.viewport(re.copy(V)),X.length>0&&Po(X,F,J),be.length>0&&Po(be,F,J),Ne.length>0&&Po(Ne,F,J),Se.buffers.depth.setTest(!0),Se.buffers.depth.setMask(!0),Se.buffers.color.setMask(!0),Se.setPolygonOffset(!1)}function kf(b,F,J,V){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[V.id]===void 0){let Ue=ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[V.id]=new on(1,1,{generateMipmaps:!0,type:Ue?yn:On,minFilter:Oi,samples:Math.max(4,Nt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:ut.workingColorSpace})}let be=T.state.transmissionRenderTarget[V.id],Ne=V.viewport||re;be.setSize(Ne.z*C.transmissionResolutionScale,Ne.w*C.transmissionResolutionScale);let Me=C.getRenderTarget(),Ce=C.getActiveCubeFace(),Be=C.getActiveMipmapLevel();C.setRenderTarget(be),C.getClearColor(H),oe=C.getClearAlpha(),oe<1&&C.setClearColor(16777215,.5),C.clear(),mt&&N.render(J);let et=C.toneMapping;C.toneMapping=yi;let gt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),T.setupLightsView(V),me===!0&&j.setGlobalState(C.clippingPlanes,V),Po(b,J,V),Ze.updateMultisampleRenderTarget(be),Ze.updateRenderTargetMipmap(be),ht.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let _t=0,sn=F.length;_t<sn;_t++){let Ot=F[_t],{object:Ut,geometry:Sn,material:Oe,group:Rn}=Ot;if(Oe.side===Pt&&Ut.layers.test(V.layers)){let Et=Oe.side;Oe.side=vn,Oe.needsUpdate=!0,Gf(Ut,J,V,Sn,Oe,Rn),Oe.side=Et,Oe.needsUpdate=!0,Ue=!0}}Ue===!0&&(Ze.updateMultisampleRenderTarget(be),Ze.updateRenderTargetMipmap(be))}C.setRenderTarget(Me,Ce,Be),C.setClearColor(H,oe),gt!==void 0&&(V.viewport=gt),C.toneMapping=et}function Po(b,F,J){let V=F.isScene===!0?F.overrideMaterial:null;for(let X=0,be=b.length;X<be;X++){let Ne=b[X],{object:Me,geometry:Ce,group:Be}=Ne,et=Ne.material;et.allowOverride===!0&&V!==null&&(et=V),Me.layers.test(J.layers)&&Gf(Me,F,J,Ce,et,Be)}}function Gf(b,F,J,V,X,be){L!==null&&X.isNodeMaterial&&L.setObject(b,X),b.onBeforeRender(C,F,J,V,X,be),b.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),X.onBeforeRender(C,F,J,V,b,be),X.transparent===!0&&X.side===Pt&&X.forceSinglePass===!1?(X.side=vn,X.needsUpdate=!0,C.renderBufferDirect(J,F,V,X,b,be),X.side=ss,X.needsUpdate=!0,C.renderBufferDirect(J,F,V,X,b,be),X.side=Pt):C.renderBufferDirect(J,F,V,X,b,be),b.onAfterRender(C,F,J,V,X,be)}function Vf(b){let F=0;for(let J of b)J.texture!==null&&F++;return F}function Zr(b,F,J){F.isScene!==!0&&(F=pt);let V=We.get(b),X=T.state.lights,be=T.state.shadowsArray,Ne=X.state.version,Me=ne.getParameters(b,X.state,be,F,J,T.state.lightProbeGridArray),Ce=ne.getProgramCacheKey(Me),Be=V.programs;V.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?F.environment:null,V.fog=F.fog;let et=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;V.envMap=R.get(b.envMap||V.environment,et),V.envMapRotation=V.environment!==null&&b.envMap===null?F.environmentRotation:b.envMapRotation,Be===void 0&&(b.addEventListener("dispose",wt),Be=new Map,V.programs=Be,V.programVariants=new Map);let gt=Be.get(Ce);if(gt!==void 0){if(V.currentProgram===gt&&V.lightsStateVersion===Ne)return Xf(b,Me),gt}else Me.uniforms=ne.getUniforms(b),L!==null&&b.isNodeMaterial&&L.build(b,J,Me),b.onBeforeCompile(Me,C),gt=ne.acquireProgram(Me,Ce),Be.set(Ce,gt),V.uniforms=Me.uniforms;let Ue=V.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ue.clippingPlanes=j.uniform),Xf(b,Me),V.needsLights=og(b),V.lightsStateVersion=Ne,V.needsLights&&(Ue.ambientLightColor.value=X.state.ambient,Ue.lightProbe.value=X.state.probe,Ue.sunLights.value=X.state.sun,Ue.sunLightShadows.value=X.state.sunShadow,Ue.directionalLights.value=X.state.directional,Ue.directionalLightShadows.value=X.state.directionalShadow,Ue.spotLights.value=X.state.spot,Ue.spotLightShadows.value=X.state.spotShadow,Ue.rectAreaLights.value=X.state.rectArea,Ue.ltc_1.value=X.state.rectAreaLTC1,Ue.ltc_2.value=X.state.rectAreaLTC2,Ue.pointLights.value=X.state.point,Ue.pointLightShadows.value=X.state.pointShadow,Ue.hemisphereLights.value=X.state.hemi,Ue.sunShadowMatrix.value=X.state.sunShadowMatrix,Ue.sunShadowCascade.value=X.state.sunShadowCascade,Ue.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Ue.spotLightMatrix.value=X.state.spotLightMatrix,Ue.spotLightMap.value=X.state.spotLightMap,Ue.pointShadowMatrix.value=X.state.pointShadowMatrix),V.numLightProbeGrids=Vf(T.state.lightProbeGridArray),V.currentProgram=gt,V.uniformsList=null,gt}function sg(b,F,J,V,X){let be=We.get(b),Ne=be.currentProgram.id+","+V+","+X,Me=be.programVariants.get(Ne);return Me===void 0?(Me=Zr(b,F,J),be.programVariants.set(Ne,Me)):(be.currentProgram=Me,be.uniformsList=null,be.outputColorSpace=V,be.toneMapping=X),Me}function Wf(b){if(b.uniformsList===null){let F=b.currentProgram.getUniforms();b.uniformsList=Dr.seqWithValue(F.seq,b.uniforms)}return b.uniformsList}function Xf(b,F){let J=We.get(b);J.outputColorSpace=F.outputColorSpace,J.batching=F.batching,J.batchingColor=F.batchingColor,J.instancing=F.instancing,J.instancingColor=F.instancingColor,J.instancingMorph=F.instancingMorph,J.skinning=F.skinning,J.morphTargets=F.morphTargets,J.morphNormals=F.morphNormals,J.morphColors=F.morphColors,J.morphTargetsCount=F.morphTargetsCount,J.numClippingPlanes=F.numClippingPlanes,J.numIntersection=F.numClipIntersection,J.vertexAlphas=F.vertexAlphas,J.vertexTangents=F.vertexTangents,J.toneMapping=F.toneMapping}function rg(b,F,J,V,X){F.isScene!==!0&&(F=pt),Ze.resetTextureUnits();let be=F.fog,Ne=V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial?F.environment:null,Me=ce===null?C.outputColorSpace:ce.isXRRenderTarget===!0?ce.texture.colorSpace:ut.workingColorSpace,Ce=V.isMeshStandardMaterial||V.isMeshLambertMaterial&&!V.envMap||V.isMeshPhongMaterial&&!V.envMap,Be=R.get(V.envMap||Ne,Ce),et=V.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,gt=!!J.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ue=!!J.morphAttributes.position,_t=!!J.morphAttributes.normal,sn=!!J.morphAttributes.color,Ot=yi;V.toneMapped&&(ce===null||ce.isXRRenderTarget===!0)&&(Ot=C.toneMapping);let Ut=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Sn=Ut!==void 0?Ut.length:0,Oe=We.get(V),Rn=T.state.lights;if(me===!0&&(Le===!0||b!==te)){let Xt=b===te&&V.id===$;j.setState(V,b,Xt)}let Et=!1,ps=!1;V.version===Oe.__version?Oe.needsLights&&Oe.lightsStateVersion!==Rn.state.version||X.isBatchedMesh&&Oe.batching===!1||!X.isBatchedMesh&&Oe.batching===!0||X.isBatchedMesh&&Oe.batchingColor===!0&&X._colorsTexture===null||X.isBatchedMesh&&Oe.batchingColor===!1&&X._colorsTexture!==null||X.isInstancedMesh&&Oe.instancing===!1||!X.isInstancedMesh&&Oe.instancing===!0||X.isSkinnedMesh&&Oe.skinning===!1||!X.isSkinnedMesh&&Oe.skinning===!0||X.isInstancedMesh&&Oe.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Oe.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Oe.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Oe.instancingMorph===!1&&X.morphTexture!==null||Oe.envMap!==Be||V.fog===!0&&Oe.fog!==be||Oe.numClippingPlanes!==void 0&&(Oe.numClippingPlanes!==j.numPlanes||Oe.numIntersection!==j.numIntersection)||Oe.vertexAlphas!==et||Oe.vertexTangents!==gt||Oe.morphTargets!==Ue||Oe.morphNormals!==_t||Oe.morphColors!==sn||Oe.morphTargetsCount!==Sn||Oe.numLightProbeGrids!==Vf(T.state.lightProbeGridArray)?Et=!0:(Oe.outputColorSpace!==Me||Oe.toneMapping!==Ot)&&(ps=!0):(Et=!0,Oe.__version=V.version);let En=Oe.currentProgram;(Et===!0||ps===!0)&&(En=ps===!0?sg(V,F,X,Me,Ot):Zr(V,F,X),L&&V.isNodeMaterial&&L.onUpdateProgram(V,En,Oe));let Io=!1,Wi=!1,ms=!1,vt=En.getUniforms(),gn=Oe.uniforms;if(Se.useProgram(En.program)&&(Io=!0,Wi=!0,ms=!0),V.id!==$&&($=V.id,Wi=!0),Io||te!==b){Se.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),vt.setValue(B,"projectionMatrix",b.projectionMatrix),vt.setValue(B,"viewMatrix",b.matrixWorldInverse);let fn=vt.map.cameraPosition;fn!==void 0&&fn.setValue(B,nt.setFromMatrixPosition(b.matrixWorld)),Nt.logarithmicDepthBuffer&&vt.setValue(B,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&vt.setValue(B,"isOrthographic",b.isOrthographicCamera===!0),te!==b&&(te=b,Wi=!0,ms=!0)}if(Oe.needsLights&&(Rn.state.sunShadowMap.length>0&&vt.setValue(B,"sunShadowMap",Rn.state.sunShadowMap,Ze),Rn.state.directionalShadowMap.length>0&&vt.setValue(B,"directionalShadowMap",Rn.state.directionalShadowMap,Ze),Rn.state.spotShadowMap.length>0&&vt.setValue(B,"spotShadowMap",Rn.state.spotShadowMap,Ze),Rn.state.pointShadowMap.length>0&&vt.setValue(B,"pointShadowMap",Rn.state.pointShadowMap,Ze)),X.isSkinnedMesh){vt.setOptional(B,X,"bindMatrix"),vt.setOptional(B,X,"bindMatrixInverse");let Xt=X.skeleton;Xt&&(Xt.boneTexture===null&&Xt.computeBoneTexture(),vt.setValue(B,"boneTexture",Xt.boneTexture,Ze))}X.isBatchedMesh&&(vt.setOptional(B,X,"batchingTexture"),vt.setValue(B,"batchingTexture",X._matricesTexture,Ze),vt.setOptional(B,X,"batchingIdTexture"),vt.setValue(B,"batchingIdTexture",X._indirectTexture,Ze),vt.setOptional(B,X,"batchingColorTexture"),X._colorsTexture!==null&&vt.setValue(B,"batchingColorTexture",X._colorsTexture,Ze));let jn=J.morphAttributes;if((jn.position!==void 0||jn.normal!==void 0||jn.color!==void 0)&&ee.update(X,J,En),(Wi||Oe.receiveShadow!==X.receiveShadow)&&(Oe.receiveShadow=X.receiveShadow,vt.setValue(B,"receiveShadow",X.receiveShadow)),(V.isMeshStandardMaterial||V.isMeshLambertMaterial||V.isMeshPhongMaterial)&&V.envMap===null&&F.environment!==null&&(gn.envMapIntensity.value=F.environmentIntensity),gn.dfgLUT!==void 0&&(gn.dfgLUT.value=nM()),Wi){if(vt.setValue(B,"toneMappingExposure",C.toneMappingExposure),Oe.needsLights&&ag(gn,ms),be&&V.fog===!0&&ge.refreshFogUniforms(gn,be),ge.refreshMaterialUniforms(gn,V,we,Fe,T.state.transmissionRenderTarget[b.id]),Oe.needsLights&&Oe.numLightProbeGrids>0){let Xt=y,fn=0;for(let Ei of T.state.lightProbeGridArray)Ei.texture!==null&&(Xt.textures[fn]=Ei.texture,Xt.min[fn]=Ei.boundingBox.min,Xt.max[fn]=Ei.boundingBox.max,Xt.resolution[fn]=Ei.resolution,fn++);for(let Ei in Xt)Xt[Ei].length=fn;gn.probesSH.value=Xt.textures,gn.probesMin.value=Xt.min,gn.probesMax.value=Xt.max,gn.probesResolution.value=Xt.resolution}Dr.upload(B,Wf(Oe),gn,Ze)}if(V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Dr.upload(B,Wf(Oe),gn,Ze),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&vt.setValue(B,"center",X.center),vt.setValue(B,"modelViewMatrix",X.modelViewMatrix),vt.setValue(B,"normalMatrix",X.normalMatrix),vt.setValue(B,"modelMatrix",X.matrixWorld),V.uniformsGroups!==void 0){let Xt=V.uniformsGroups;for(let fn=0,Ei=Xt.length;fn<Ei;fn++){let Yf=Xt[fn];ke.update(Yf,En),ke.bind(Yf,En)}}return En}function ag(b,F){b.ambientLightColor.needsUpdate=F,b.lightProbe.needsUpdate=F,b.sunLights.needsUpdate=F,b.sunLightShadows.needsUpdate=F,b.directionalLights.needsUpdate=F,b.directionalLightShadows.needsUpdate=F,b.pointLights.needsUpdate=F,b.pointLightShadows.needsUpdate=F,b.spotLights.needsUpdate=F,b.spotLightShadows.needsUpdate=F,b.rectAreaLights.needsUpdate=F,b.hemisphereLights.needsUpdate=F}function og(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return Z},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ce},this.setRenderTargetTextures=function(b,F,J){let V=We.get(b);V.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,V.__autoAllocateDepthBuffer===!1&&(V.__useRenderToTexture=!1),We.get(b.texture).__webglTexture=F,We.get(b.depthTexture).__webglTexture=V.__autoAllocateDepthBuffer?void 0:J,V.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,F){let J=We.get(b);J.__webglFramebuffer=F,J.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(b,F=0,J=0){ce=b,Z=F,q=J;let V=null,X=!1,be=!1;if(b){let Me=We.get(b);if(Me.__useDefaultFramebuffer!==void 0){Se.bindFramebuffer(B.FRAMEBUFFER,Me.__webglFramebuffer),re.copy(b.viewport),Ie.copy(b.scissor),Ge=b.scissorTest,Se.viewport(re),Se.scissor(Ie),Se.setScissorTest(Ge),$=-1;return}else if(Me.__webglFramebuffer===void 0)Ze.setupRenderTarget(b);else if(Me.__hasExternalTextures)Ze.rebindTextures(b,We.get(b.texture).__webglTexture,We.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let et=b.depthTexture;if(Me.__boundDepthTexture!==et){if(et!==null&&We.has(et)&&(b.width!==et.image.width||b.height!==et.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ze.setupDepthRenderbuffer(b)}}let Ce=b.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(be=!0);let Be=We.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray(Be[F])?V=Be[F][J]:V=Be[F],X=!0):b.samples>0&&Ze.useMultisampledRTT(b)===!1?V=We.get(b).__webglMultisampledFramebuffer:Array.isArray(Be)?V=Be[J]:V=Be,re.copy(b.viewport),Ie.copy(b.scissor),Ge=b.scissorTest}else re.copy(qe).multiplyScalar(we).floor(),Ie.copy(lt).multiplyScalar(we).floor(),Ge=dt;if(J!==0&&(V=z),Se.bindFramebuffer(B.FRAMEBUFFER,V)&&Se.drawBuffers(b,V),Se.viewport(re),Se.scissor(Ie),Se.setScissorTest(Ge),X){let Me=We.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+F,Me.__webglTexture,J)}else if(be){let Me=F;for(let Ce=0;Ce<b.textures.length;Ce++){let Be=We.get(b.textures[Ce]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ce,Be.__webglTexture,J,Me)}}else if(b!==null&&J!==0){let Me=We.get(b.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Me.__webglTexture,J)}$=-1};function qf(b){let F=We.get(b);return(F.__readFormat!==b.format||F.__readType!==b.type)&&(F.__readFormat=b.format,F.__readType=b.type,F.__formatReadable=Nt.textureFormatReadable(b.format),F.__typeReadable=Nt.textureTypeReadable(b.type)),F}this.readRenderTargetPixels=function(b,F,J,V,X,be,Ne,Me=0){if(!(b&&b.isWebGLRenderTarget)){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=We.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ce=Ce[Ne],Array.isArray(Ce)&&(Ce=Ce[0])),Ce){Se.bindFramebuffer(B.FRAMEBUFFER,Ce);try{let Be=b.textures[Me],et=Be.format,gt=Be.type;b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me);let Ue=qf(Be);if(Ue.__formatReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ue.__typeReadable===!1){Ye("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=b.width-V&&J>=0&&J<=b.height-X&&B.readPixels(F,J,V,X,pe.convert(et),pe.convert(gt),be)}finally{let Be=ce!==null?We.get(ce).__webglFramebuffer:null;Se.bindFramebuffer(B.FRAMEBUFFER,Be)}}},this.readRenderTargetPixelsAsync=async function(b,F,J,V,X,be,Ne,Me=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=We.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&Ne!==void 0&&(Ce=Ce[Ne],Array.isArray(Ce)&&(Ce=Ce[0])),Ce)if(F>=0&&F<=b.width-V&&J>=0&&J<=b.height-X){Se.bindFramebuffer(B.FRAMEBUFFER,Ce);let Be=b.textures[Me],et=Be.format,gt=Be.type;b.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Me);let Ue=qf(Be);if(Ue.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ue.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let _t=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,_t),B.bufferData(B.PIXEL_PACK_BUFFER,be.byteLength,B.STREAM_READ),B.readPixels(F,J,V,X,pe.convert(et),pe.convert(gt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);let sn=ce!==null?We.get(ce).__webglFramebuffer:null;Se.bindFramebuffer(B.FRAMEBUFFER,sn);let Ot=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await gp(B,Ot,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,_t),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,be),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(_t),B.deleteSync(Ot),be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,F=null,J=0){let V=Math.pow(2,-J),X=Math.floor(b.image.width*V),be=Math.floor(b.image.height*V),Ne=F!==null?F.x:0,Me=F!==null?F.y:0;Ze.setTexture2D(b,0),B.copyTexSubImage2D(B.TEXTURE_2D,J,0,0,Ne,Me,X,be),Se.unbindTexture()},this.copyTextureToTexture=function(b,F,J=null,V=null,X=0,be=0){let Ne,Me,Ce,Be,et,gt,Ue,_t,sn,Ot=b.isCompressedTexture?b.mipmaps[be]:b.image;if(J!==null)Ne=J.max.x-J.min.x,Me=J.max.y-J.min.y,Ce=J.isBox3?J.max.z-J.min.z:1,Be=J.min.x,et=J.min.y,gt=J.isBox3?J.min.z:0;else{let vt=Math.pow(2,-X);Ne=Math.floor(Ot.width*vt),Me=Math.floor(Ot.height*vt),b.isDataArrayTexture?Ce=Ot.depth:b.isData3DTexture?Ce=Math.floor(Ot.depth*vt):Ce=1,Be=0,et=0,gt=0}V!==null?(Ue=V.x,_t=V.y,sn=V.z):(Ue=0,_t=0,sn=0);let Ut=pe.convert(F.format),Sn=pe.convert(F.type),Oe;F.isData3DTexture?(Ze.setTexture3D(F,0),Oe=B.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(Ze.setTexture2DArray(F,0),Oe=B.TEXTURE_2D_ARRAY):(Ze.setTexture2D(F,0),Oe=B.TEXTURE_2D),Se.activeTexture(B.TEXTURE0),Se.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,F.flipY),Se.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),Se.pixelStorei(B.UNPACK_ALIGNMENT,F.unpackAlignment);let Rn=Se.getParameter(B.UNPACK_ROW_LENGTH),Et=Se.getParameter(B.UNPACK_IMAGE_HEIGHT),ps=Se.getParameter(B.UNPACK_SKIP_PIXELS),En=Se.getParameter(B.UNPACK_SKIP_ROWS),Io=Se.getParameter(B.UNPACK_SKIP_IMAGES);Se.pixelStorei(B.UNPACK_ROW_LENGTH,Ot.width),Se.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ot.height),Se.pixelStorei(B.UNPACK_SKIP_PIXELS,Be),Se.pixelStorei(B.UNPACK_SKIP_ROWS,et),Se.pixelStorei(B.UNPACK_SKIP_IMAGES,gt);let Wi=b.isDataArrayTexture||b.isData3DTexture,ms=F.isDataArrayTexture||F.isData3DTexture;if(b.isDepthTexture){let vt=We.get(b),gn=We.get(F),jn=We.get(vt.__renderTarget),Xt=We.get(gn.__renderTarget);Se.bindFramebuffer(B.READ_FRAMEBUFFER,jn.__webglFramebuffer),Se.bindFramebuffer(B.DRAW_FRAMEBUFFER,Xt.__webglFramebuffer);for(let fn=0;fn<Ce;fn++)Wi&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,We.get(b).__webglTexture,X,gt+fn),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,We.get(F).__webglTexture,be,sn+fn)),B.blitFramebuffer(Be,et,Be+Ne,et+Me,Ue,_t,Ue+Ne,_t+Me,B.DEPTH_BUFFER_BIT,B.NEAREST);Se.bindFramebuffer(B.READ_FRAMEBUFFER,null),Se.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(X!==0||b.isRenderTargetTexture||We.has(b)){let vt=We.get(b),gn=We.get(F);Se.bindFramebuffer(B.READ_FRAMEBUFFER,P),Se.bindFramebuffer(B.DRAW_FRAMEBUFFER,G);for(let jn=0;jn<Ce;jn++)Wi?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,vt.__webglTexture,X,gt+jn):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,vt.__webglTexture,X),ms?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,gn.__webglTexture,be,sn+jn):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,gn.__webglTexture,be),X!==0?B.blitFramebuffer(Be,et,Be+Ne,et+Me,Ue,_t,Ue+Ne,_t+Me,B.COLOR_BUFFER_BIT,B.NEAREST):ms?B.copyTexSubImage3D(Oe,be,Ue,_t,sn+jn,Be,et,Ne,Me):B.copyTexSubImage2D(Oe,be,Ue,_t,Be,et,Ne,Me);Se.bindFramebuffer(B.READ_FRAMEBUFFER,null),Se.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else ms?b.isDataTexture||b.isData3DTexture?B.texSubImage3D(Oe,be,Ue,_t,sn,Ne,Me,Ce,Ut,Sn,Ot.data):F.isCompressedArrayTexture?B.compressedTexSubImage3D(Oe,be,Ue,_t,sn,Ne,Me,Ce,Ut,Ot.data):B.texSubImage3D(Oe,be,Ue,_t,sn,Ne,Me,Ce,Ut,Sn,Ot):b.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,be,Ue,_t,Ne,Me,Ut,Sn,Ot.data):b.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,be,Ue,_t,Ot.width,Ot.height,Ut,Ot.data):B.texSubImage2D(B.TEXTURE_2D,be,Ue,_t,Ne,Me,Ut,Sn,Ot);Se.pixelStorei(B.UNPACK_ROW_LENGTH,Rn),Se.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Et),Se.pixelStorei(B.UNPACK_SKIP_PIXELS,ps),Se.pixelStorei(B.UNPACK_SKIP_ROWS,En),Se.pixelStorei(B.UNPACK_SKIP_IMAGES,Io),be===0&&F.generateMipmaps===!0&&F.mipmapsAutoUpdate===!0&&B.generateMipmap(Oe),Se.unbindTexture()},this.initRenderTarget=function(b){We.get(b).__webglFramebuffer===void 0&&Ze.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Ze.setTextureCube(b,0):b.isData3DTexture?Ze.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Ze.setTexture2DArray(b,0):Ze.setTexture2D(b,0),Se.unbindTexture()},this.resetState=function(){Z=0,q=0,ce=null,Se.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Zn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=ut._getDrawingBufferColorSpace(e),t.unpackColorSpace=ut._getUnpackColorSpace()}};var Or={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Wn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},iM=new Rs(-1,1,1,-1,0,1),Ku=class extends At{constructor(){super(),this.setAttribute("position",new Ke([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ke([0,2,0,0,2,0],2))}},sM=new Ku,os=class{constructor(e){this._mesh=new ae(sM,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,iM)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Hc=class extends Wn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Tt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=zi.clone(e.uniforms),this.material=new Tt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new os(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var ro=class extends Wn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},kc=class extends Wn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Gc=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ie);this._width=n.width,this._height=n.height,t=new on(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Hc(Or),this.copyPass.material.blending=Ui,this.timer=new Ha}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}ro!==void 0&&(a instanceof ro?n=!0:a instanceof kc&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Vc=class extends Wn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new de}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var om={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new de(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var Fr=class i extends Wn{constructor(e,t=1,n,s){super(),this.strength=t,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new ie(e.x,e.y):new ie(256,256),this.clearColor=new de(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new on(r,a,{type:yn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new on(r,a,{type:yn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new on(r,a,{type:yn,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),r=Math.round(r/2),a=Math.round(a/2)}let o=om;this.highPassUniforms=zi.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Tt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ie(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1),new A(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=zi.clone(Or.uniforms),this.blendMaterial=new Tt({uniforms:this.copyUniforms,vertexShader:Or.vertexShader,fragmentShader:Or.fragmentShader,premultipliedAlpha:!0,blending:jt,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new de,this._oldClearAlpha=1,this._basic=new Zt,this._fsQuad=new os(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new ie(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=i.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);let s=[],r=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;s.push((a*o+(a+1)*l)/c),r.push(c)}return new Tt({defines:{KERNEL_PAIRS:s.length},uniforms:{colorTexture:{value:null},invSize:{value:new ie(.5,.5)},direction:{value:new ie(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:s},gaussianWeights:{value:r}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Tt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};Fr.BlurDirectionX=new ie(1,0);Fr.BlurDirectionY=new ie(0,1);var ao={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Wc=class extends Wn{constructor(){super(),this.isOutputPass=!0,this.uniforms=zi.clone(ao.uniforms),this.material=new br({name:ao.name,uniforms:this.uniforms,vertexShader:ao.vertexShader,fragmentShader:ao.fragmentShader}),this._fsQuad=new os(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},ut.getTransfer(this._outputColorSpace)===Mt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ga?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Va?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wa?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Is?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===qa?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Ya?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Xa&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var tt=Math.PI*2,zt=(i,e,t)=>i<e?e:i>t?t:i,Wt=(i,e,t)=>i+(e-i)*t,U=(i,e)=>e===void 0?Math.random()*i:i+Math.random()*(e-i),it=i=>i[Math.random()*i.length|0],Us=i=>1-Math.pow(1-i,3),lo=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,ls=i=>1+(1.70158+1)*Math.pow(i-1,3)+1.70158*Math.pow(i-1,2),nf=i=>()=>(i=i*16807%2147483647)/2147483647,ju=new Uint8Array(512);{let i=nf(1337),e=[...Array(256).keys()];for(let t=255;t>0;t--){let n=Math.floor(i()*(t+1));[e[t],e[n]]=[e[n],e[t]]}for(let t=0;t<512;t++)ju[t]=e[t&255]}var Xc=(i,e)=>ju[ju[i&255]+e&511]/255;function qc(i,e){let t=Math.floor(i),n=Math.floor(e),s=i-t,r=e-n,a=s*s*(3-2*s),o=r*r*(3-2*r),l=Xc(t,n),c=Xc(t+1,n),h=Xc(t,n+1),d=Xc(t+1,n+1);return Wt(Wt(l,c,a),Wt(h,d,a),o)}function $n(i,e,t=4){let n=0,s=.5,r=1;for(let a=0;a<t;a++)n+=s*qc(i*r,e*r),r*=2.03,s*=.5;return n}var Yc=(i,e,t)=>{let n=zt((t-i)/(e-i),0,1);return n*n*(3-2*n)},k={W:1,H:1,PH:1,t:0,dt:0,quality:2,pickables:[],updaters:[]},rM="varying vec3 vDir; void main(){ vec4 wp = modelMatrix*vec4(position,1.); vDir = wp.xyz - cameraPosition; gl_Position = projectionMatrix*viewMatrix*wp; gl_Position.z = gl_Position.w; }",aM=`
uniform vec3 cTop, cMid, cBot, sunDir, sunCol, neb1, neb2; uniform float sunSize, stars, nebula, time, haze, glowAmt;
varying vec3 vDir;
float hash(vec3 p){ p=fract(p*0.3183099+.1); p*=17.0; return fract(p.x*p.y*p.z*(p.x+p.y+p.z)); }
float noise(vec3 x){ vec3 i=floor(x), f=fract(x); f=f*f*(3.-2.*f);
 return mix(mix(mix(hash(i),hash(i+vec3(1,0,0)),f.x),mix(hash(i+vec3(0,1,0)),hash(i+vec3(1,1,0)),f.x),f.y),
            mix(mix(hash(i+vec3(0,0,1)),hash(i+vec3(1,0,1)),f.x),mix(hash(i+vec3(0,1,1)),hash(i+vec3(1,1,1)),f.x),f.y),f.z); }
float fbm(vec3 p){ float a=.5,s=0.; for(int i=0;i<5;i++){ s+=a*noise(p); p*=2.03; a*=.5;} return s; }
void main(){
 vec3 d = normalize(vDir); float h = d.y;
 vec3 col = h > 0. ? mix(cMid, cTop, pow(clamp(h,0.,1.), .55)) : mix(cMid, cBot, clamp(-h*5.,0.,1.));
 col = mix(col, cMid*1.15, haze*exp(-abs(h)*9.));
 if(nebula>0.){ float n = fbm(d*2.6+vec3(time*.004)); float n2 = fbm(d*5.5+vec3(3.1,1.7,.2)-vec3(time*.006));
   col += nebula*(neb1*pow(smoothstep(.42,.95,n),1.6)*1.4 + neb2*pow(smoothstep(.48,.98,n2),1.5)*1.2); }
 if(stars>0.){ vec3 p = d*220.; vec3 c = floor(p); float r = hash(c);
   if(r>.982){ vec3 f = fract(p)-.5; float s = smoothstep(.16,0.,length(f)); float tw = .55+.45*sin(time*(1.5+r*3.)+r*90.);
     vec3 sc = mix(vec3(.75,.85,1.), vec3(1.,.9,.75), fract(r*37.)); col += sc*s*tw*stars*(1.2+(r-.982)*60.); }
   vec3 p2 = d*70.; vec3 c2 = floor(p2); float r2 = hash(c2+7.);
   if(r2>.993){ vec3 f2 = fract(p2)-.5; float s2 = smoothstep(.2,0.,length(f2)); col += vec3(s2*stars*2.5*(.7+.3*sin(time*2.+r2*50.))); } }
 float sd = max(dot(d, normalize(sunDir)), 0.);
 col += sunCol*(pow(sd, 2400./sunSize)*9. + pow(sd, 90.)*.35*glowAmt + pow(sd, 8.)*.08*glowAmt);
 gl_FragColor = vec4(col, 1.);
}`;function oM(){let i={cTop:{value:new de},cMid:{value:new de},cBot:{value:new de},sunDir:{value:new A(0,.3,-1)},sunCol:{value:new de(1,.9,.7)},sunSize:{value:1},neb1:{value:new de("#7a3cff")},neb2:{value:new de("#ff3c9a")},stars:{value:0},nebula:{value:0},time:{value:0},haze:{value:.5},glowAmt:{value:1}},e=new Tt({uniforms:i,vertexShader:rM,fragmentShader:aM,side:vn,depthWrite:!1,fog:!1}),t=new ae(new Rt(450,48,24),e);return t.renderOrder=-10,t.frustumCulled=!1,{mesh:t,u:i,mat:e}}var oo;function sf(){if(oo)return oo;let i=document.createElement("canvas");i.width=i.height=128;let e=i.getContext("2d"),t=e.createRadialGradient(64,64,0,64,64,64);return t.addColorStop(0,"rgba(255,255,255,1)"),t.addColorStop(.25,"rgba(255,255,255,.55)"),t.addColorStop(.6,"rgba(255,255,255,.12)"),t.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=t,e.fillRect(0,0,128,128),oo=new vr(i),oo.colorSpace=_n,oo}function en(i,e,t=1){let n=new Ss(new $i({map:sf(),color:i,transparent:!0,opacity:t,blending:jt,depthWrite:!1}));return n.scale.setScalar(e),n}function Mn(i,e,t,n){let s=document.createElement("canvas");s.width=i,s.height=e,t(s.getContext("2d"),i,e);let r=new vr(s);return r.colorSpace=_n,r.anisotropy=4,n&&(r.wrapS=r.wrapT=ur,r.repeat.set(n[0],n[1])),r}var ef=class{constructor(e=1600){this.n=e,this.i=0;let t=new At;this.pos=new Float32Array(e*3),this.col=new Float32Array(e*3),this.size=new Float32Array(e),this.alpha=new Float32Array(e),this.vel=new Float32Array(e*3),this.life=new Float32Array(e),this.max=new Float32Array(e),this.grav=new Float32Array(e),this.drag=new Float32Array(e),this.base=new Float32Array(e),this.grow=new Float32Array(e),t.setAttribute("position",new Gt(this.pos,3).setUsage(ui)),t.setAttribute("color",new Gt(this.col,3).setUsage(ui)),t.setAttribute("size",new Gt(this.size,1).setUsage(ui)),t.setAttribute("alpha",new Gt(this.alpha,1).setUsage(ui)),this.mat=new Tt({uniforms:{pr:{value:1}},transparent:!0,depthWrite:!1,blending:jt,vertexColors:!0,vertexShader:`attribute float size; attribute float alpha; varying vec3 vC; varying float vA; uniform float pr;
        void main(){ vC=color; vA=alpha; vec4 mv=modelViewMatrix*vec4(position,1.); gl_PointSize=size*pr*(420./max(.1,-mv.z)); gl_Position=projectionMatrix*mv; }`,fragmentShader:`varying vec3 vC; varying float vA; void main(){ vec2 p=gl_PointCoord-.5; float d=length(p); float a=smoothstep(.5,0.,d); a=a*a;
        float cross=max(0.,1.-abs(p.x)*14.)*max(0.,1.-abs(p.y)*2.2)+max(0.,1.-abs(p.y)*14.)*max(0.,1.-abs(p.x)*2.2);
        gl_FragColor=vec4(vC*(a*1.6+cross*.8), (a+cross*.5)*vA); }`}),this.points=new Sa(t,this.mat),this.points.frustumCulled=!1,this.points.renderOrder=5,this.geo=t}spawn(e){let t=this.i;this.i=(this.i+1)%this.n;let n=e.color instanceof de?e.color:lM.set(e.color||"#ffffff");this.pos[t*3]=e.x,this.pos[t*3+1]=e.y,this.pos[t*3+2]=e.z,this.vel[t*3]=e.vx||0,this.vel[t*3+1]=e.vy||0,this.vel[t*3+2]=e.vz||0,this.col[t*3]=n.r*(e.bright||1),this.col[t*3+1]=n.g*(e.bright||1),this.col[t*3+2]=n.b*(e.bright||1),this.life[t]=this.max[t]=e.life||1,this.base[t]=e.size||.3,this.grav[t]=e.g||0,this.drag[t]=e.drag||0,this.grow[t]=e.grow||0}burst(e,t,n,s,r,a=3,o={}){for(let l=0;l<s;l++){let c=U(tt),h=Math.acos(U(-1,1)),d=a*U(.4,1);this.spawn(Object.assign({x:e,y:t,z:n,vx:Math.sin(h)*Math.cos(c)*d,vy:Math.cos(h)*d,vz:Math.sin(h)*Math.sin(c)*d,color:Array.isArray(r)?it(r):r,life:U(.5,1.1),size:U(.15,.35),drag:2.2},o))}}update(e){for(let t=0;t<this.n;t++){if(this.life[t]<=0){this.size[t]=0;continue}this.life[t]-=e;let n=Math.max(0,1-this.drag[t]*e);this.vel[t*3]*=n,this.vel[t*3+1]=this.vel[t*3+1]*n-this.grav[t]*e,this.vel[t*3+2]*=n,this.pos[t*3]+=this.vel[t*3]*e,this.pos[t*3+1]+=this.vel[t*3+1]*e,this.pos[t*3+2]+=this.vel[t*3+2]*e;let s=Math.max(0,this.life[t]/this.max[t]);this.alpha[t]=Math.min(1,s*3),this.size[t]=this.base[t]*(1+(1-s)*this.grow[t])}for(let t of["position","color","size","alpha"])this.geo.attributes[t].needsUpdate=!0}clear(){this.life.fill(0)}},lM=new de,tf=class{constructor(e=260){this.n=e;let t=new At;this.p=new Float32Array(e*6),this.c=new Float32Array(e*6),t.setAttribute("position",new Gt(this.p,3).setUsage(ui)),t.setAttribute("color",new Gt(this.c,3).setUsage(ui)),this.lines=new Ma(t,new Qi({vertexColors:!0,transparent:!0,blending:jt,depthWrite:!1})),this.lines.frustumCulled=!1,this.geo=t,this.s=Array.from({length:e},()=>({a:U(tt),r:U(.6,9),z:U(-120,0),h:U(1)})),this.lines.visible=!1,this.amt=0}update(e,t,n,s){if(this.lines.visible=this.amt>.01,!this.lines.visible)return;let r=new de;this.s.forEach((a,o)=>{a.z+=n*e,a.z>2&&(a.z=-120,a.a=U(tt),a.r=U(.6,9));let l=Math.cos(a.a)*a.r,c=Math.sin(a.a)*a.r,h=2+n*.08,d=o*6;this.p[d]=l,this.p[d+1]=c,this.p[d+2]=a.z,this.p[d+3]=l,this.p[d+4]=c,this.p[d+5]=a.z-h,r.setHSL((a.h+s)%1,.9,.7).multiplyScalar(this.amt*1.6),this.c[d]=r.r,this.c[d+1]=r.g,this.c[d+2]=r.b,this.c[d+3]=r.r*.1,this.c[d+4]=r.g*.1,this.c[d+5]=r.b*.1}),this.lines.position.copy(t.position),this.lines.quaternion.copy(t.quaternion),this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0}};function lm(i){let e=new Oc({canvas:i,antialias:!0,powerPreference:"high-performance",alpha:!1});e.outputColorSpace=_n,e.toneMapping=Is,e.toneMappingExposure=1.05,e.shadowMap.enabled=!0,e.shadowMap.type=Cs;let t=new _r,n=new xn(45,1,.1,1200),s=oM();t.add(s.mesh);let r=new Fa("#bcd8ff","#40305a",.9);t.add(r);let a=new Ar("#ffffff",2.4);a.position.set(6,10,6),a.castShadow=!0,a.shadow.mapSize.set(2048,2048);let o=a.shadow.camera;o.left=-9,o.right=9,o.top=9,o.bottom=-6,o.near=1,o.far=40,a.shadow.bias=-4e-4,a.shadow.normalBias=.03,a.shadow.radius=4,t.add(a),t.add(a.target);let l=new Ar("#ffd9f0",.5);l.position.set(-8,4,8),t.add(l),t.fog=new ma("#000000",30,160);let c=new Gc(e);c.addPass(new Vc(t,n));let h=new Fr(new ie(256,256),.45,.35,.92);c.addPass(h),c.addPass(new Wc);let d=new Nr(e),u=new _r,f=new ae(s.mesh.geometry,s.mat);u.add(f);let g=new ef(1800);t.add(g.points);let _=new tf;return t.add(_.lines),Object.assign(k,{renderer:e,scene:t,camera:n,sky:s,hemi:r,sun:a,fill:l,composer:c,bloom:h,pmrem:d,envScene:u,sparks:g,streaks:_}),k}var Qu=null;function Zc(){let i=Qu;Qu=k.pmrem.fromScene(k.envScene,0,.1,1e3),k.scene.environment=Qu.texture,i&&i.dispose()}function cm(i,e,t,n,s=52){k.W=i,k.H=e,k.PH=t,k.renderer.setPixelRatio(n),k.renderer.setSize(i,e,!1),k.composer.setPixelRatio(n),k.composer.setSize(i,e),k.bloom.resolution.set(i*n*.5,e*n*.5),k.sparks.mat.uniforms.pr.value=n*e/900;let r=k.camera,a=i/t,o=s*Math.PI/180,l=2*Math.atan(Math.tan(o/2)/a)*180/Math.PI;l=zt(l,34,78),r.fov=l,r.aspect=a,r.setViewOffset(i,t,0,0,i,e),r.updateProjectionMatrix(),k.portrait=a<1}function Br(i){i.traverse(e=>{e.geometry&&!e.geometry.userData.shared&&e.geometry.dispose(),e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(t=>{if(!t.userData.shared){for(let n in t){let s=t[n];s&&s.isTexture&&!s.userData.shared&&s.dispose()}t.dispose()}})})}var co=new A;function Kn(i,e,t,n,s,r){let a=2*Math.PI*s/4,o=Math.max(r-2*s,0),l=Math.PI/4;co.copy(e),co[n]=0,co.normalize();let c=.5*a/(a+o),h=1-co.angleTo(i)/l;return Math.sign(co[t])===1?h*c:o/(a+o)+c+c*(1-h)}var Jc=class i extends vi{constructor(e=1,t=1,n=1,s=2,r=.1){let a=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new A,c=new A,h=new A(e,t,n).divideScalar(2).subScalar(r),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,_=new A,p=.5/a;for(let m=0,v=0;m<d.length;m+=3,v+=2)switch(l.fromArray(d,m),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),d[m+0]=h.x*Math.sign(l.x)+c.x*r,d[m+1]=h.y*Math.sign(l.y)+c.y*r,d[m+2]=h.z*Math.sign(l.z)+c.z*r,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/g)){case 0:_.set(1,0,0),f[v+0]=Kn(_,c,"z","y",r,n),f[v+1]=1-Kn(_,c,"y","z",r,t);break;case 1:_.set(-1,0,0),f[v+0]=1-Kn(_,c,"z","y",r,n),f[v+1]=1-Kn(_,c,"y","z",r,t);break;case 2:_.set(0,1,0),f[v+0]=1-Kn(_,c,"x","z",r,e),f[v+1]=Kn(_,c,"z","x",r,n);break;case 3:_.set(0,-1,0),f[v+0]=1-Kn(_,c,"x","z",r,e),f[v+1]=1-Kn(_,c,"z","x",r,n);break;case 4:_.set(0,0,1),f[v+0]=1-Kn(_,c,"x","y",r,e),f[v+1]=1-Kn(_,c,"y","x",r,t);break;case 5:_.set(0,0,-1),f[v+0]=Kn(_,c,"x","y",r,e),f[v+1]=1-Kn(_,c,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var hn=["#ff4d5e","#ff9a3c","#ffe14d","#4fe07a","#4fb8ff","#5a6bff","#b46bff"],hm=new Map;function cs(i,e){let t=hm.get(i);return t||(t=e(),t.userData.shared=!0,hm.set(i,t)),t}var cM=i=>new de(i).lerp(new de("#ffffff"),.6),Y={plush:i=>cs("pl"+i,()=>new xt({color:i,roughness:.58,sheen:.9,sheenRoughness:.45,sheenColor:cM(i)})),gloss:i=>cs("gl"+i,()=>new xt({color:i,roughness:.15,clearcoat:1,clearcoatRoughness:.05})),metal:(i,e=.25)=>cs("mt"+i+e,()=>new ft({color:i,metalness:1,roughness:e})),matte:(i,e=.9)=>cs("mm"+i+e,()=>new ft({color:i,roughness:e})),emis:(i,e=2)=>cs("em"+i+e,()=>new ft({color:"#000000",emissive:i,emissiveIntensity:e})),eye:()=>cs("eye",()=>new xt({color:"#12132a",roughness:.04,clearcoat:1,clearcoatRoughness:0})),gold:()=>cs("gold",()=>new ft({color:"#ffcf4a",metalness:1,roughness:.18,emissive:"#7a4a00",emissiveIntensity:.35})),glass:()=>cs("glass",()=>new xt({color:"#cfefff",roughness:.02,metalness:0,transparent:!0,opacity:.28,clearcoat:1,envMapIntensity:2.5,depthWrite:!1}))},Kc=i=>(i.userData.shared=!0,i),ho=Kc(new Rt(1,40,28)),pm=Kc(new Rt(1,16,12));function le(i,e,t=0,n=0,s=0,r=1,a=1,o=1,l){let c=new ae(l?pm:ho,i);return c.scale.set(e*r,e*a,e*o),c.position.set(t,n,s),c.castShadow=!0,c}function It(i,e,t,n,s=0,r=0,a=0,o=24){let l=new ae(new mn(e,t,n,o),i);return l.position.set(s,r,a),l.castShadow=!0,l}function Jt(i,e,t,n=0,s=0,r=0,a=24){let o=new ae(new si(e,t,a),i);return o.position.set(n,s,r),o.castShadow=!0,o}function Xn(i,e,t,n,s,r=0,a=0,o=0){let l=new ae(new Jc(e,t,n,4,s),i);return l.position.set(r,a,o),l.castShadow=!0,l}function hM(i,e){let t=new ai;for(let n=0;n<10;n++){let s=n*Math.PI/5+Math.PI/2,r=n%2?e:i,a=Math.cos(s)*r,o=Math.sin(s)*r;n?t.lineTo(a,o):t.moveTo(a,o)}return t.closePath(),t}function uM(i=1){let e=new ai;return e.moveTo(0,-.45*i),e.bezierCurveTo(-.95*i,.1*i,-.45*i,.78*i,0,.32*i),e.bezierCurveTo(.45*i,.78*i,.95*i,.1*i,0,-.45*i),e}var Qc=Kc(new oi(hM(.5,.23),{depth:.14,bevelEnabled:!0,bevelThickness:.07,bevelSize:.06,bevelSegments:3}).center()),jc=Kc(new oi(uM(.55),{depth:.16,bevelEnabled:!0,bevelThickness:.08,bevelSize:.07,bevelSegments:3,curveSegments:18}).center());function hs(i,e,t={}){let n=t.ex??.34,s=t.ey??.14,r=t.er??.17,a=t.my??-.24,o=(g,_)=>t.flat?t.flat:Math.sqrt(Math.max(0,1-g*g-_*_))*e,l=[];for(let g of[-1,1]){let _=new fe;_.position.set(g*n*e,s*e,o(n,s)*.97),t.flat||(_.rotation.y=g*Math.asin(n)*.9,_.rotation.x=-Math.asin(s)*.9);let p=le(Y.eye(),e*r,0,0,0,1,1.28,.5),m=le(Y.emis("#ffffff",2.5),e*r*.32,-e*r*.3,e*r*.45,e*r*.42,1,1,1,!0);m.castShadow=!1;let v=le(Y.emis("#ffffff",2.5),e*r*.15,e*r*.3,-e*r*.4,e*r*.44,1,1,1,!0);v.castShadow=!1,_.add(p,m,v),i.add(_),l.push(_);let S=le(Y.plush("#ff8fb0"),e*.12,g*e*(n+.25),(s-.3)*e,o(n+.25,s-.3)*.95,1,.6,.3,!0);S.rotation.y=g*.7,i.add(S)}let c=t.mz??o(0,a)*.99,h=t.myAbs??a*e,d=new ae(new Ft(e*.12,e*.026,8,20,Math.PI),Y.matte("#4a1a38",.6));d.rotation.z=Math.PI,d.position.set(0,h+e*.06,c),t.flat||(d.rotation.x=-.25),i.add(d);let u=le(Y.gloss("#7a1f3f"),e*.11,0,h,c,1,.85,.45);u.visible=!1,u.userData.sy=u.scale.y,i.add(u);let f=new ae(pm,Y.plush("#ff7d9c"));return f.scale.set(.6,.35,.5),f.position.set(0,-.45,.45),u.add(f),{eyes:l,smile:d,open:u}}var fM={robot(i){let e=i.bod,t=Xn(Y.gloss("#7ddbeb"),.95,.85,.7,.2,0,.78,0);e.add(t);for(let u of[-1,1])e.add(Xn(Y.metal("#5b74c4",.35),.26,.42,.3,.1,u*.22,.2,0));let n=new ft({color:"#000",emissive:"#ff4fa0",emissiveIntensity:1.5}),s=new ae(jc,n);s.scale.setScalar(.38),s.position.set(0,.8,.37),e.add(s);let r=new fe;r.position.set(0,1.6,0),e.add(r),i.head=r,r.add(Xn(Y.gloss("#b5f7ef"),1.15,.95,.85,.26)),r.add(Xn(Y.gloss("#18224a"),.95,.7,.08,.12,0,0,.41));let a=Y.emis("#7ef9ff",3);for(let u of[-1,1]){let f=new fe;f.position.set(u*.2,.08,.46),f.add(Xn(a,.15,.24,.04,.06)),r.add(f),i.eyes.push(f),r.add(Xn(Y.emis("#ff7aa8",1.5),.1,.05,.03,.02,u*.33,-.1,.46))}let o=new ae(new Ft(.11,.022,8,20,Math.PI),a);o.rotation.z=Math.PI,o.position.set(0,-.1,.46),r.add(o),i.smile=o;let l=Xn(a,.22,.08,.03,.03,0,-.16,.46);l.visible=!1,l.userData.sy=1,r.add(l),i.open=l,r.add(It(Y.metal("#dfe9ff",.3),.03,.03,.3,0,.62,0));let c=new ft({color:"#000",emissive:"#ffe36b",emissiveIntensity:3});r.add(le(c,.09,0,.82,0));let h=en("#ffe36b",.7,.8);h.position.set(0,.82,0),r.add(h);let d=u=>{let f=new fe;f.position.set(u*.56,1.05,0);let g=It(Y.metal("#8fd8ef",.3),.07,.07,.42,0,-.21,0);return f.add(g,le(Y.gloss("#d6f3ff"),.11,0,-.45,0)),f.userData.dir=u,e.add(f),f};i.armL=d(-1),i.armR=d(1),i.headR=.5,i.upd=u=>{n.emissive.setHSL(u*.15%1,.9,.6),c.emissiveIntensity=2+Math.sin(u*5)*1.5,h.material.opacity=.5+Math.sin(u*5)*.3}},bunny(i){let e=i.bod,t=Y.plush("#f7f4ff"),n=Y.plush("#ffc4dc");e.add(le(t,.46,0,.56,0,1,1.08,.95),le(Y.plush("#ffe9f2"),.3,0,.52,.25,1,1.15,.55),le(t,.13,0,.45,-.44,1,1,1,!0));for(let o of[-1,1])e.add(le(t,.17,o*.22,.08,.14,1,.55,1.4));let s=new fe;s.position.set(0,1.32,0),e.add(s),i.head=s,s.add(le(t,.46)),Object.assign(i,hs(s,.46,{my:-.3})),s.add(le(Y.gloss("#ff8fb6"),.055,0,-.07,.45)),i.ears=[];for(let o of[-1,1]){let l=new fe;l.position.set(o*.17,.36,-.03),l.rotation.z=-o*.18,l.add(le(t,.13,0,.42,0,1,3.3,.65),le(n,.08,0,.42,.06,1,3,.35)),s.add(l),i.ears.push(l)}let r=Y.gloss("#ff5fa2");for(let o of[-1,1]){let l=Jt(r,.07,.16,.17+o*.09,.42,.05);l.rotation.z=o*Math.PI/2,s.add(l)}s.add(le(r,.045,.17,.42,.05));let a=o=>{let l=new fe;return l.position.set(o*.38,.82,.08),l.add(le(t,.1,0,-.14,0,1,1.8,1)),l.userData.dir=o,e.add(l),l};i.armL=a(-1),i.armR=a(1),i.upd=o=>i.ears.forEach((l,c)=>l.rotation.z=(c?-1:1)*(.18+Math.sin(o*3+c)*.08))},puppy(i){let e=i.bod,t=Y.plush("#eebc86"),n=Y.plush("#fff0d6"),s=Y.plush("#8f5e48");e.add(le(t,.47,0,.56,0,1,1.06,.95),le(n,.3,0,.52,.25,1,1.15,.55));for(let u of[-1,1])e.add(le(t,.17,u*.22,.08,.14,1,.55,1.4));let r=new fe;r.position.set(0,.6,-.42);let a=It(t,.05,.07,.35,0,.16,0);r.add(a),r.rotation.x=-.6,e.add(r);let o=new ae(new Ft(.3,.055,12,36),Y.gloss("#ff3f6e"));o.rotation.x=Math.PI/2,o.position.y=.98,e.add(o),e.add(le(Y.gold(),.065,0,.92,.33));let l=new fe;l.position.set(0,1.4,0),e.add(l),i.head=l,l.add(le(t,.5)),l.add(le(n,.22,0,-.14,.38,1.25,.85,.9)),Object.assign(i,hs(l,.5,{ey:.2,my:-.3,mz:.55,myAbs:-.27})),l.add(le(Y.gloss("#2a1a24"),.075,0,-.05,.58,1.2,.9,.9)),i.ears=[];for(let u of[-1,1]){let f=new fe;f.position.set(u*.38,.3,0),f.add(le(s,.16,u*.04,-.24,0,.78,1.9,.5)),l.add(f),i.ears.push(f)}let c=Mn(64,128,(u,f,g)=>{for(let _=0;_<6;_++)u.fillStyle=_%2?"#ffe36b":"#6fc8ff",u.fillRect(0,_*g/6,f,g/6)}),h=Jt(new xt({map:c,roughness:.4,clearcoat:.6}),.17,.42,.12,.62,0);h.rotation.z=-.28,l.add(h),l.add(le(Y.plush("#ff5fa2"),.065,.18,.83,0));let d=u=>{let f=new fe;return f.position.set(u*.38,.82,.08),f.add(le(t,.1,0,-.14,0,1,1.8,1)),f.userData.dir=u,e.add(f),f};i.armL=d(-1),i.armR=d(1),i.upd=(u,f)=>{r.rotation.z=Math.sin(u*14)*.6,i.ears.forEach((g,_)=>g.rotation.z=(_?-1:1)*(.15+Math.sin(u*4)*.1+(f.dance?Math.sin(u*9)*.25:0)))}},starfish(i){let e=i.bod,t=new fe;t.position.set(0,.86,0),e.add(t),i.head=t;let n=new ai,s=60;for(let c=0;c<=s;c++){let h=c/s*tt+Math.PI/2,u=.42+.48*Math.pow(Math.abs(Math.cos(h*2.5-Math.PI*1.25)),2.2),f=Math.cos(h)*u,g=Math.sin(h)*u;c?n.lineTo(f,g):n.moveTo(f,g)}let r=new oi(n,{depth:.2,bevelEnabled:!0,bevelThickness:.16,bevelSize:.12,bevelSegments:5,curveSegments:6});r.center();let a=new xt({color:"#ffcf63",roughness:.55,sheen:1,sheenColor:new de("#ffe9b0"),sheenRoughness:.4});t.add(new ae(r,a)),t.children[0].castShadow=!0;let o=Y.plush("#ff9fa0");[[-.5,-.1],[.5,-.08],[-.3,-.55],[.3,-.55],[0,.55],[-.2,.2],[.25,.25]].forEach(([c,h])=>t.add(le(o,.045,c,h,.27,1,1,.4,!0))),Object.assign(i,hs(t,.5,{flat:.27,ey:.15,my:-.22,er:.2}));let l=Y.gloss("#ff5fa2");for(let c of[-1,1]){let h=Jt(l,.07,.15,.22+c*.08,.5,.2);h.rotation.z=c*Math.PI/2,t.add(h)}i.upd=(c,h)=>{t.rotation.z=Math.sin(c*1.6)*.07+(h.wave?Math.sin(c*10)*.15:0)}},bee(i){let e=i.bod,t=Mn(64,256,(c,h,d)=>{c.fillStyle="#ffd23f",c.fillRect(0,0,h,d),c.fillStyle="#2d2018",[.36,.54,.72].forEach(u=>c.fillRect(0,u*d,h,d*.09))}),n=new xt({map:t,roughness:.55,sheen:.8,sheenColor:new de("#fff2b0")}),s=new fe;e.add(s);let r=le(n,.42,0,.72,0,1,1.05,.95);r.rotation.x=.25,s.add(r),s.add(Jt(Y.gloss("#2d2018"),.07,.16,0,.26,-.08)),s.children[1].rotation.x=Math.PI;let a=new fe;a.position.set(0,1.42,.05),s.add(a),i.head=a,a.add(le(Y.plush("#ffdf5a"),.42)),Object.assign(i,hs(a,.42,{my:-.3}));for(let c of[-1,1]){let h=new ri(new A(c*.12,.36,0),new A(c*.18,.62,.08),new A(c*.32,.7,.12)),d=new ae(new li(h,12,.022,6),Y.matte("#2d2018",.6));a.add(d),a.add(le(Y.gloss("#ff6fae"),.07,c*.32,.7,.12))}let o=new xt({color:"#e8f6ff",transparent:!0,opacity:.55,roughness:.1,iridescence:1,iridescenceIOR:1.6,side:Pt,depthWrite:!1});i.wings=[];for(let c of[-1,1]){let h=new fe;h.position.set(c*.25,1,-.25);let d=new ae(new Ni(.4,32),o);d.scale.set(1,.6,1),d.position.x=c*.36,d.rotation.y=c*.4,h.add(d),s.add(h),i.wings.push(h)}let l=c=>{let h=new fe;return h.position.set(c*.36,.95,.12),h.add(le(Y.gloss("#2d2018"),.07,0,-.13,0,1,1.9,1)),h.userData.dir=c,s.add(h),h};i.armL=l(-1),i.armR=l(1),i.upd=c=>{s.position.y=.22+Math.sin(c*3)*.07,i.wings.forEach((h,d)=>h.rotation.z=(d?-1:1)*(.25+Math.sin(c*38)*.5))}},unicorn(i){let e=i.bod,t=Y.plush("#f6f0ff"),n=Y.plush("#ffd9ec");e.add(le(t,.45,0,.66,-.05,1.12,.9,1));for(let l of[-1,1])for(let c of[-1,1])e.add(It(t,.085,.085,.42,l*.22,.24,c*.16-.05)),e.add(It(Y.gloss("#b48cff"),.1,.1,.09,l*.22,.045,c*.16-.05));for(let l=0;l<6;l++)e.add(le(Y.plush(hn[l]),.1-l*.008,0,.75-l*.07,-.55-l*.05,1,1,1,!0));let s=new fe;s.position.set(0,1.38,.05),e.add(s),i.head=s,s.add(le(t,.46)),s.add(le(n,.21,0,-.2,.36,1.25,.85,.95)),Object.assign(i,hs(s,.46,{ey:.16,my:-.3,mz:.53,myAbs:-.3}));for(let l of[-1,1]){let c=Jt(t,.09,.22,l*.26,.4,-.04);c.rotation.z=-l*.35,s.add(c),s.add(le(Y.matte("#d483ad",.6),.025,l*.09,-.18,.55,1,1.3,1,!0))}let r=Jt(Y.gold(),.075,.5,0,.62,.14,32);r.rotation.x=.3,s.add(r);let a=en("#fff3b0",.9,.7);a.position.set(0,.88,.21),s.add(a),[[0,.46,-.06],[-.18,.4,-.2],[-.3,.25,-.3],[-.35,.05,-.32],[-.33,-.15,-.3],[.12,.44,.04],[.22,.38,-.12]].forEach(([l,c,h],d)=>s.add(le(Y.plush(hn[d%7]),.13,l,c,h,1,1,1,!0)));let o=l=>{let c=new fe;return c.position.set(l*.3,.8,.2),c.add(le(t,.09,0,-.12,0,1,1.6,1)),c.userData.dir=l,e.add(c),c};i.armL=o(-1),i.armR=o(1),i.upd=l=>{a.material.opacity=.5+Math.sin(l*4)*.3}},penguin(i){let e=i.bod,t=Y.plush("#26304d"),n=Y.plush("#f6fbff"),s=Y.gloss("#ff9f2e");e.add(le(t,.52,0,.8,0,1,1.45,.95),le(n,.4,0,.72,.2,1,1.32,.66));for(let u of[-1,1])e.add(le(s,.16,u*.18,.05,.2,1,.45,1.5));let r=new fe;r.position.set(0,1.26,0),e.add(r),i.head=r;for(let u of[-1,1])r.add(le(n,.2,u*.15,.04,.34,1,1.1,.6));Object.assign(i,hs(r,.44,{ey:.1,my:-.33,er:.19}));let a=Jt(s,.08,.2,0,-.08,.5);a.rotation.x=Math.PI/2,r.add(a);let o=new ae(new Ft(.4,.075,12,36),Y.plush("#ff4f6a"));o.rotation.x=Math.PI/2,o.position.y=1.04,o.scale.set(1,1,1),e.add(o);let l=Xn(Y.plush("#ff4f6a"),.14,.38,.06,.03,.2,.86,.38);l.rotation.z=.15,e.add(l);let c=new ae(new Rt(.37,32,16,0,tt,0,Math.PI/2),Y.plush("#4aa8ff"));c.position.y=.24,c.castShadow=!0,r.add(c);let h=new ae(new Ft(.37,.06,10,36),Y.plush("#ffffff"));h.rotation.x=Math.PI/2,h.position.y=.25,r.add(h),r.add(le(n,.1,0,.63,0));let d=u=>{let f=new fe;return f.position.set(u*.48,1.05,0),f.add(le(t,.12,0,-.28,0,.55,2.5,1)),f.userData.dir=u,e.add(f),f};i.armL=d(-1),i.armR=d(1)},dino(i){let e=i.bod,t=Y.plush("#6fd17f"),n=Y.plush("#dcf7b8"),s=Y.gloss("#ffb347");e.add(le(t,.5,0,.64,0,1,1.1,1),le(n,.34,0,.6,.26,1,1.2,.6));let r=new fe;r.position.set(0,.5,-.35),e.add(r),[[0,0,0,.3],[-.05,-.08,-.3,.24],[-.1,-.14,-.56,.18],[-.12,-.17,-.78,.12]].forEach(([l,c,h,d])=>r.add(le(t,d,l,c,h))),[[0,1.05,-.28],[0,.82,-.46],[0,.55,-.52],[-.05,.38,-.82]].forEach(([l,c,h],d)=>{let u=Jt(s,.09-d*.01,.22,l,c,h);u.rotation.x=-.7,e.add(u)});for(let l of[-1,1])e.add(le(t,.18,l*.23,.08,.14,1,.55,1.4));let a=new fe;a.position.set(0,1.45,.05),e.add(a),i.head=a,a.add(le(t,.48,0,0,0,1.05,.95,1)),a.add(le(t,.3,0,-.14,.3,1.1,.8,1)),[[-.22,.43,-.12],[0,.48,-.1],[.22,.43,-.12]].forEach(([l,c,h])=>a.add(Jt(s,.08,.2,l,c,h))),Object.assign(i,hs(a,.48,{ey:.22,my:-.3,mz:.55,myAbs:-.25}));for(let l of[-1,1])a.add(le(Y.matte("#2f7a45",.7),.025,l*.07,-.1,.57,1,1,1,!0));let o=l=>{let c=new fe;return c.position.set(l*.42,.88,.15),c.add(le(t,.09,0,-.12,0,1,1.7,1)),c.userData.dir=l,e.add(c),c};i.armL=o(-1),i.armR=o(1),i.upd=l=>{r.rotation.y=Math.sin(l*2.5)*.35}}};function zr(i){let e=new fe,t=new fe;e.add(t);let n={kind:i,root:e,bod:t,head:null,eyes:[],smile:null,open:null,armL:null,armR:null};fM[i](n),e.traverse(r=>{r.isMesh&&!r.material.transparent&&(r.castShadow=!0)});let s=new ae(new mn(.75,.75,2.3,8),new Zt({visible:!1}));return s.position.y=1.1,e.add(s),n.hit=s,n}var dM=118;function uo(i,e,t){i.eyes.forEach(a=>{a.scale.y=t.blink?.12:t.joy?.5:1});let n=t.talk>.05||t.eat>0||t.joy;i.smile&&(i.smile.visible=!n,i.open.visible=n,n&&(i.open.scale.y=i.open.userData.sy*(.35+(t.eat>0?Math.abs(Math.sin(e*25)):t.joy?.8:t.talk)*1))),i.head&&(i.head.rotation.y=Wt(i.head.rotation.y,t.lx*.5,.12),i.head.rotation.x=Wt(i.head.rotation.x,-t.ly*.3,.12));let s=Math.sin(e*Math.PI*dM/60);if(i.armR){let a=t.wave?2.6+Math.sin(e*12)*.35:t.dance?1.2+s*.9:.15+Math.sin(e*1.5)*.05;i.armR.rotation.z=Wt(i.armR.rotation.z,a,.2)}if(i.armL){let a=t.dance?-1.2+s*.9:-.15-Math.sin(e*1.5)*.05;i.armL.rotation.z=Wt(i.armL.rotation.z,a,.2)}i.root.position.y=t.jumpY+Math.abs(s)*.2*t.dance,i.root.rotation.z=s*.12*t.dance;let r=Math.sin(e*2.2)*.015;i.bod.scale.set(1+t.squash*.45-r*.5,1-t.squash*.45+r,1+t.squash*.45-r*.5),i.upd&&i.upd(e,t)}var Hr=[{n:"BRANCA E ROSA",body:"#f4f7ff",wing:"#ff5fa2",acc:"#5fd0ff"},{n:"AZUL",body:"#3d7dff",wing:"#bfe0ff",acc:"#ffe14d"},{n:"VERDE",body:"#22c06b",wing:"#d9ffe9",acc:"#ffe14d"},{n:"AMARELA",body:"#ffc61f",wing:"#ff6f3c",acc:"#5a6bff"},{n:"ROXA",body:"#8a55ff",wing:"#ffd0f5",acc:"#7ef9ff"},{n:"LARANJA",body:"#ff7a1f",wing:"#fff1d6",acc:"#3dd9ff"},{n:"VERMELHA",body:"#ff2f48",wing:"#ffffff",acc:"#ffe14d"},{n:"COR-DE-ROSA",body:"#ff6fbf",wing:"#fff0fa",acc:"#7a5cff"},{n:"DOURADA",body:"#e8b23a",wing:"#fff7d6",acc:"#ff4f9a",metal:!0}];function mm(){let i=new fe,e=new fe;i.add(e);let t=new xt({color:"#f4f7ff",metalness:.25,roughness:.22,clearcoat:1,clearcoatRoughness:.04}),n=new xt({color:"#ff5fa2",metalness:.3,roughness:.25,clearcoat:1,clearcoatRoughness:.05}),s=new xt({color:"#5fd0ff",metalness:.4,roughness:.2,clearcoat:1}),r=[[0,-1.35],[.4,-1.32],[.56,-1.05],[.64,-.5],[.63,.1],[.56,.6],[.44,1],[.26,1.35],[.08,1.55],[0,1.6]],o=new Ts(r.map(([H,oe])=>new ie(H,oe))).getPoints(40);o[0].x=0,o[o.length-1].x=0;let l=new es(o,64);l.rotateZ(-Math.PI/2),l.scale(1,.92,1);let c=new ae(l,t);e.add(c);for(let H of[.7,-.85]){let oe=new ae(new Ft(H>0?.565:.6,.045,12,64),s);oe.rotation.y=Math.PI/2,oe.position.x=H,oe.scale.set(1,.92,1),e.add(oe)}let h=new ai;h.moveTo(.55,0),h.lineTo(-.55,0),h.quadraticCurveTo(-1,.6,-1.25,1.35),h.lineTo(-.85,1.42),h.quadraticCurveTo(-.2,.7,.55,0);let d=new oi(h,{depth:.07,bevelEnabled:!0,bevelThickness:.035,bevelSize:.04,bevelSegments:3});d.rotateX(Math.PI/2);for(let H of[-1,1]){let oe=new ae(d,n);oe.position.set(-.15,-.18,H*.35),H<0&&(oe.scale.z=-1),e.add(oe)}let u=new ai;u.moveTo(-.45,0),u.lineTo(-1.25,.95),u.lineTo(-.95,1),u.quadraticCurveTo(-.5,.45,.1,.2),u.lineTo(-.45,0);let f=new ae(new oi(u,{depth:.06,bevelEnabled:!0,bevelThickness:.03,bevelSize:.03,bevelSegments:2}),n);f.position.set(-.1,.3,-.03),e.add(f);let g=new ae(new mn(.3,.4,.38,40,1,!0),Y.metal("#5a6070",.3));g.material.side=Pt,g.rotation.z=Math.PI/2,g.position.x=-1.45,e.add(g);let _=new ae(new Ni(.3,32),new ft({color:"#000",emissive:"#ffb36b",emissiveIntensity:4}));_.rotation.y=-Math.PI/2,_.position.x=-1.4,e.add(_);let p=(H,oe)=>new Tt({transparent:!0,depthWrite:!1,blending:jt,uniforms:{t:{value:0},c1:{value:new de(H)},c2:{value:new de(oe)},amp:{value:1}},vertexShader:"varying vec2 vUv; uniform float t; void main(){ vUv=uv; vec3 p=position; p.xz*=1.+.12*sin(t*40.+position.y*9.); gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.); }",fragmentShader:"varying vec2 vUv; uniform vec3 c1,c2; uniform float t,amp; void main(){ float k=vUv.y; float n=.75+.25*sin(t*50.+vUv.x*30.); vec3 c=mix(c2,c1,k); float a=pow(k,1.3)*n*amp; gl_FragColor=vec4(c*3.*a,a); }"}),m=new ae(new si(.3,1.6,32,1,!0),p("#fff6c0","#ff5a1f"));m.rotation.z=Math.PI/2,m.position.x=-2.4,e.add(m);let v=new ae(new si(.16,1,24,1,!0),p("#ffffff","#7ad7ff"));v.rotation.z=Math.PI/2,v.position.x=-2.05,e.add(v);let S=new za("#ff8a3c",6,6,2);S.position.x=-2,e.add(S);let y=le(Y.emis("#ff3050",4),.06,-1.4,-.2,-1.75,1,1,1,!0),w=le(Y.emis("#30ff8a",4),.06,-1.4,-.2,1.75,1,1,1,!0),T=le(Y.emis("#ffffff",5),.05,-1.3,1.32,0,1,1,1,!0);e.add(y,w,T);let x=[y,w,T].map(H=>{let oe=en(H===y?"#ff3050":H===w?"#30ff8a":"#ffffff",.6,.9);return oe.position.copy(H.position),e.add(oe),oe}),E=new fe;E.position.set(.42,.42,0),E.rotation.y=.5,e.add(E);let D=Y.plush("#f6c7a2"),C=Y.plush("#5e3a31");E.add(le(D,.21,0,.05,0));let O=new ae(new Rt(.232,32,16,0,tt,0,Math.PI*.5),C);O.rotation.x=-.55,O.position.set(0,.07,-.02),E.add(O),E.add(le(C,.225,0,.02,-.04,1,1,.95));for(let H of[-1,1]){E.add(le(C,.1,H*.22,.14,-.04));let oe=Y.gloss("#ff4f9a");for(let Pe of[-1,1]){let Fe=Jt(oe,.045,.1,H*.22+Pe*.055,.26,-.02);Fe.rotation.z=Pe*Math.PI/2,E.add(Fe)}E.add(le(oe,.03,H*.22,.26,-.02,1,1,1,!0))}let L=hs(E,.21,{ey:.05,my:-.32,er:.15}),z=new ae(new Rt(.5,48,24,0,tt,0,Math.PI/2),Y.glass());z.scale.set(1.15,1,1),z.position.set(.38,.3,0),z.renderOrder=3,e.add(z);let P=new ae(new Ft(.5,.04,12,48),Y.metal("#d9e2ff",.2));P.rotation.x=Math.PI/2,P.scale.set(1.15,1,1),P.position.set(.38,.3,0),e.add(P);let G=new fe;e.add(G);let Z=new ft({color:"#000",emissive:"#7ef9ff",emissiveIntensity:3}),q=new ae(new Ft(.62,.025,8,64),Z);q.rotation.y=Math.PI/2,q.position.x=-.25,q.scale.set(1,.92,1),G.add(q);for(let H of[-1,1]){let oe=new ae(new oi(u,{depth:.05,bevelEnabled:!0,bevelThickness:.02,bevelSize:.02}),n);oe.scale.setScalar(.45),oe.position.set(-.6,-.15,H*1.55),G.add(oe)}let ce=new fe;ce.position.set(.38,.82,0),e.add(ce),ce.add(new ae(new mn(.2,.22,.1,32,1,!0),Y.gold())),ce.children[0].material.side=Pt;for(let H=0;H<5;H++){let oe=H/5*tt;ce.add(Jt(Y.gold(),.05,.16,Math.cos(oe)*.2,.12,Math.sin(oe)*.2)),ce.add(le(Y.gloss(hn[H]),.028,Math.cos(oe)*.215,.02,Math.sin(oe)*.215,1,1,1,!0))}let $=new ae(Qc,new ft({color:"#ffd54a",metalness:.6,roughness:.2,emissive:"#ffb000",emissiveIntensity:1.2}));$.scale.setScalar(.45),i.add($);let te=en("#ffe9a0",1.2,.9);i.add(te);let re=en("#ffe9b0",6,.35);re.position.x=-.2,i.add(re);let Ie=new ae(new Rt(1.7,8,6),new Zt({visible:!1}));Ie.scale.set(1.3,.8,.9),i.add(Ie),e.traverse(H=>{H.isMesh&&!H.material.transparent&&!(H.material instanceof Tt)&&(H.castShadow=!0)}),e.rotation.y=-.42;let Ge={root:i,body:e,paint:t,wingM:n,accM:s,flame:m,flame2:v,fl:S,pilot:L,hit:Ie,level:1,setPaint(H){t.color.set(H.body),t.metalness=H.metal?.85:.25,t.roughness=H.metal?.2:.22,n.color.set(H.wing),s.color.set(H.acc)},setLevel(H){this.level=H,G.visible=H>=2,ce.visible=H>=4,$.visible=te.visible=re.visible=H>=5},upd(H,oe,Pe){let Fe=1+oe*1.6;m.material.uniforms.t.value=H,v.material.uniforms.t.value=H,m.scale.set(1,Fe*(1+Math.sin(H*45)*.06),1),m.position.x=-1.6-.8*Fe,v.scale.set(1,Fe,1),v.position.x=-1.55-.5*Fe,S.intensity=5+Math.sin(H*40)*1.5+oe*8;let we=Math.sin(H*4)>.2;x[0].visible=x[1].visible=we,x[2].visible=Math.sin(H*6)>.6,Z.emissive.setHSL(H*.25%1,.9,.6),L.eyes.forEach(Dt=>Dt.scale.y=H%3.7<.13?.12:1),L.smile.visible=!Pe,L.open.visible=Pe,Pe&&(L.open.scale.y=L.open.userData.sy*.9);let He=H*2.2;$.position.set(Math.cos(He)*2.4,.4+Math.sin(He*2)*.3,Math.sin(He)*1.4),$.rotation.set(H,H*1.5,0),te.position.copy($.position),re.material.opacity=.25+Math.sin(H*3)*.1}};return Ge.setLevel(1),Ge}var $c=class{constructor(e=40){this.N=e,this.pts=[];let t=new At,n=7;this.pos=new Float32Array(n*e*2*3),this.col=new Float32Array(n*e*2*3);let s=[];for(let r=0;r<n;r++)for(let a=0;a<e-1;a++){let o=r*e*2+a*2;s.push(o,o+1,o+2,o+1,o+3,o+2)}t.setIndex(s),t.setAttribute("position",new Gt(this.pos,3).setUsage(ui)),t.setAttribute("color",new Gt(this.col,3).setUsage(ui)),this.mesh=new ae(t,new Zt({vertexColors:!0,transparent:!0,blending:jt,depthWrite:!1,side:Pt})),this.mesh.frustumCulled=!1,this.geo=t,this.cols=hn.map(r=>new de(r))}push(e){this.pts.unshift(e.clone()),this.pts.length>this.N&&this.pts.pop()}update(e){if(this.mesh.visible=e&&this.pts.length>2,!this.mesh.visible)return;let t=this.N,n=.085;for(let s=0;s<7;s++)for(let r=0;r<t;r++){let a=this.pts[Math.min(r,this.pts.length-1)],o=(s*t*2+r*2)*3,l=(s-3)*n*1.05+Math.sin(r*.35)*.05;this.pos[o]=a.x,this.pos[o+1]=a.y+l-n/2,this.pos[o+2]=a.z,this.pos[o+3]=a.x,this.pos[o+4]=a.y+l+n/2,this.pos[o+5]=a.z;let c=Math.pow(1-r/t,1.4)*1.3,h=this.cols[s];for(let d of[0,3])this.col[o+d]=h.r*c,this.col[o+d+1]=h.g*c,this.col[o+d+2]=h.b*c}this.geo.attributes.position.needsUpdate=!0,this.geo.attributes.color.needsUpdate=!0,this.geo.computeBoundingSphere()}};function rf(i=!0){let e=new fe,t=new ae(Qc,new ft({color:"#ffd54a",metalness:.7,roughness:.18,emissive:"#ffae00",emissiveIntensity:.9}));return t.castShadow=!0,e.add(t),i&&e.add(en("#ffe27a",2.2,.55)),e}function gm(i){let e=new ae(jc,Y.gloss(i));return e.castShadow=!0,e}function af(i){let e=new fe,t=new xt({color:i,roughness:.12,clearcoat:1,clearcoatRoughness:.03,sheen:.3});e.add(le(t,.42,0,0,0,1,1.18,1)),e.add(Jt(t,.07,.1,0,-.52,0)),e.children[1].rotation.x=Math.PI;let n=new At().setFromPoints(Array.from({length:12},(s,r)=>new A(Math.sin(r*.7)*.04,-.56-r*.1,0)));return e.add(new xr(n,new Qi({color:"#ffffff",transparent:!0,opacity:.7}))),e.userData.mat=t,e}var um;function of(){return um||(um=Object.assign(new Tt({transparent:!0,depthWrite:!1,uniforms:{time:{value:0}},vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vN=normalize(normalMatrix*normal); vec4 mv=modelViewMatrix*vec4(position,1.); vV=normalize(-mv.xyz); gl_Position=projectionMatrix*mv; }",fragmentShader:`varying vec3 vN; varying vec3 vV; uniform float time; void main(){ float f=pow(1.-max(dot(vN,vV),0.),2.2); vec3 c=.5+.5*cos(6.28*(f*1.4+vec3(0.,.33,.67)+time*.1)); float h=pow(max(dot(reflect(-vV,vN),normalize(vec3(-.4,.7,.6))),0.),40.);
      gl_FragColor=vec4(mix(vec3(.75,.92,1.),c,.6)*(.25+f*1.3)+h*2., .06+f*.75+h); }`}),{userData:{shared:!0}}))}function lf(i){let e=new ae(ho,of());return e.scale.setScalar(i),e.renderOrder=4,e}function _m(){let i=Math.random(),e=new fe,t=it(["#ff4f7a","#4dc3ff","#ffd23f","#7cf29a","#b48cff"]);if(i<.4){let n=Y.gloss(t);e.add(le(n,.22,0,0,0,1.3,1,1));for(let s of[-1,1]){let r=Jt(n,.14,.2,s*.36,0,0);r.rotation.z=-s*Math.PI/2,e.add(r)}}else if(i<.75){e.add(new ae(new Ft(.2,.1,16,32),Y.plush("#e0a060")));let n=new ae(new Ft(.2,.105,16,32,Math.PI*2),Y.gloss(t));n.scale.set(1,1,.55),n.position.z=.045,e.add(n),e.rotation.x=-1}else{e.add(It(Y.matte("#ffffff",.5),.025,.025,.5,0,-.3,0));let n=new ae(new mn(.24,.24,.07,32),new xt({map:cf(t),roughness:.15,clearcoat:1}));n.rotation.x=Math.PI/2,e.add(n)}return e.traverse(n=>{n.isMesh&&(n.castShadow=!0)}),e}var fm={};function cf(i){return fm[i]||(fm[i]=Object.assign(Mn(256,256,(e,t)=>{e.fillStyle="#ffffff",e.fillRect(0,0,t,t),e.translate(t/2,t/2),e.strokeStyle=i,e.lineWidth=22,e.beginPath();for(let n=0;n<20;n+=.1){let s=n*6.3;e.lineTo(Math.cos(n)*s,Math.sin(n)*s)}e.stroke()}),{userData:{shared:!0}}))}function eh(i){let e=new fe,t=It(Y.plush("#3aa856"),.025,.03,1,0,.5,0,8);e.add(t);let n=new fe;n.position.y=1,e.add(n);let s=Y.plush(i);for(let a=0;a<7;a++){let o=a/7*tt,l=le(s,.12,Math.cos(o)*.15,0,Math.sin(o)*.15,1.2,.35,.7,!0);l.rotation.y=-o,n.add(l)}n.add(le(Y.plush("#ffcf3a"),.09,0,.03,0,1,.6,1,!0)),n.rotation.x=.7;let r=le(Y.plush("#4cc85a"),.1,.08,.35,0,1.6,.25,.7,!0);return r.rotation.z=-.5,e.add(r),e.userData.head=n,e.userData.stem=t,e}function xm(){let i=new fe;return i.add(le(Y.gloss("#fff3dc"),.3,0,.38,0,.85,1.12,.85)),[[.1,.52,.2],[-.12,.4,.22],[.04,.25,.25],[-.06,.6,.17],[.2,.32,.13]].forEach(([e,t,n])=>i.add(le(Y.gloss("#8fdc6c"),.055,e,t,n,1,1,.4,!0))),i}function vm(){let i=new fe,e=new xt({color:"#ffffff",roughness:.55,sheen:1,sheenColor:new de("#cfe8ff")});i.add(le(e,.42,0,.4,0),le(e,.31,0,1,0),le(e,.23,0,1.45,0));for(let s of[-1,1])i.add(le(Y.gloss("#1a1a24"),.035,s*.08,1.52,.2,1,1,1,!0));let t=Jt(Y.gloss("#ff8a2a"),.04,.22,0,1.45,.3);t.rotation.x=Math.PI/2,i.add(t);for(let s=0;s<3;s++)i.add(le(Y.gloss("#1a1a24"),.035,0,.95+s*.12-.1,.3-Math.abs(s-1)*.02,1,1,1,!0));let n=new ae(new Ft(.24,.05,10,30),Y.plush("#ff3f6e"));return n.rotation.x=Math.PI/2,n.position.y=1.25,i.add(n),i.add(It(Y.gloss("#222233"),.17,.17,.25,0,1.75,0),It(Y.gloss("#222233"),.27,.27,.03,0,1.63,0)),i.traverse(s=>{s.isMesh&&(s.castShadow=!0)}),i}function ym(){let i=new fe;i.add(Xn(Y.gloss("#ff4f7a"),.7,.55,.7,.04,0,.28,0)),i.add(Xn(Y.gloss("#ff6f95"),.76,.14,.76,.04,0,.6,0));let e=Y.gold();i.add(Xn(e,.12,.7,.78,.02,0,.35,0),Xn(e,.78,.7,.12,.02,0,.35,0));for(let t of[-1,1]){let n=new ae(new Ft(.12,.04,8,20),e);n.position.set(t*.1,.78,0),n.rotation.y=Math.PI/2,n.rotation.x=t*.4,i.add(n)}return i}function Mm(){let i=new fe,e=new xt({color:"#4a7dff",roughness:.3,clearcoat:.8,sheen:.5,sheenColor:new de("#9fd0ff")});i.add(le(e,1,0,0,0,2.3,1,1.05),le(Y.plush("#cfe6ff"),.85,.2,-.35,0,2,.6,.9));let t=new ai;t.moveTo(0,0),t.quadraticCurveTo(-.6,.9,-.2,1.3),t.quadraticCurveTo(.1,.6,0,0),t.quadraticCurveTo(-.6,-.9,-.2,-1.3),t.quadraticCurveTo(.1,-.6,0,0);let n=new ae(new oi(t,{depth:.12,bevelEnabled:!0,bevelThickness:.05,bevelSize:.05}),e);n.rotation.x=Math.PI/2,n.position.set(2.2,.1,-.06),n.rotation.z=Math.PI,i.add(n);for(let r of[-1,1]){i.add(le(e,.35,-.4,-.5,r*.85,1.6,.25,1));let a=new fe;a.position.set(-1.55,.15,r*.62),a.add(le(Y.eye(),.1,0,0,0,1,1.2,.6)),a.add(le(Y.emis("#ffffff",2.5),.035,-.03,.04,.04*r,1,1,1,!0)),i.add(a)}let s=new ae(new Ft(.4,.03,8,24,Math.PI*.6),Y.matte("#1d2a66",.6));return s.position.set(-1.85,-.1,0),s.rotation.set(0,Math.PI/2,Math.PI*1.2),i.add(s),i.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),i.userData.tail=n,i}function hf(){let i=new fe,e=[[0,-.3],[.5,-.28],[1.2,-.12],[1.5,0],[1.2,.14],[.6,.22],[0,.24]],t=new es(e.map(([o,l])=>new ie(o,l)),64);i.add(new ae(t,new ft({color:"#dfe6ff",metalness:.9,roughness:.18})));let n=new ae(new Rt(.72,40,20,0,tt,0,Math.PI/2),Y.glass());n.position.y=.2,n.renderOrder=3,i.add(n);let s=[];for(let o=0;o<10;o++){let l=o/10*tt,c=le(new ft({color:"#000",emissive:"#ffffff",emissiveIntensity:3}),.07,Math.cos(l)*1.35,.02,Math.sin(l)*1.35,1,1,1,!0);i.add(c),s.push(c)}let r=en("#7ef9ff",2.5,.8);r.position.y=-.35,i.add(r);let a=new fe;return a.position.y=.22,i.add(a),i.userData={lights:s,seat:a,dome:n},i.traverse(o=>{o.isMesh&&!o.material.transparent&&(o.castShadow=!0)}),i}function Sm(){let i=new ae(new mn(.35,1.4,1,40,1,!0),new Tt({transparent:!0,depthWrite:!1,blending:jt,side:Pt,uniforms:{t:{value:0},a:{value:1}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"varying vec2 vUv; uniform float t,a; void main(){ float s=.6+.4*sin(vUv.y*40.-t*8.); gl_FragColor=vec4(vec3(1.,.97,.6)*s*.9*a*(.3+vUv.y*.7), .35*a*s*(.3+vUv.y*.7)); }"}));return i.geometry.translate(0,-.5,0),i}function Em(){let i=new fe;i.add(It(Y.plush("#ffd1e6"),.8,.8,.5,0,.25,0,48),It(Y.plush("#fff4fb"),.6,.6,.4,0,.7,0,48));let e=new ae(new Ft(.8,.06,10,60),Y.gloss("#ff6fae"));e.rotation.x=Math.PI/2,e.position.y=.5,i.add(e);let t=[];for(let n=0;n<4;n++){let s=n/4*tt+.4,r=Math.cos(s)*.35,a=Math.sin(s)*.35;i.add(It(Y.gloss(hn[n*2]),.035,.035,.3,r,1.05,a,12));let o=en("#ffc35a",.45,1);o.position.set(r,1.28,a),i.add(o),t.push(o),i.add(le(Y.emis("#ffd27a",4),.04,r,1.25,a,1,1.6,1,!0))}for(let n=0;n<18;n++){let s=U(tt);i.add(le(Y.gloss(it(hn)),.04,Math.cos(s)*.79,U(.08,.45),Math.sin(s)*.79,1,1,1,!0))}return i.userData.flames=t,i.traverse(n=>{n.isMesh&&(n.castShadow=!0)}),i}var dm={};function pM(i){return dm[i]||(dm[i]=Object.assign(Mn(128,128,(e,t)=>{let n=e.createRadialGradient(20,64,5,40,64,110);n.addColorStop(0,"#ffffff"),n.addColorStop(.35,i),n.addColorStop(1,"#2a1a4a"),e.fillStyle=n,e.beginPath(),e.ellipse(64,64,62,60,0,0,tt),e.fill(),e.fillStyle="rgba(255,255,255,.7)",[[80,40],[90,80],[60,95]].forEach(([s,r])=>{e.beginPath(),e.arc(s,r,8,0,tt),e.fill()})}),{userData:{shared:!0}}))}function fo(i){let e=new fe,t=new ft({map:pM(i),transparent:!0,side:Pt,roughness:.4,alphaTest:.1}),n=[];for(let s of[-1,1]){let r=new fe,a=new ae(new Ln(.5,.5),t);a.position.x=s*.26,a.scale.x=s,r.add(a),e.add(r),n.push(r)}return e.add(le(Y.plush("#2a1a3a"),.04,0,0,0,1,1,4.5,!0)),e.userData.wings=n,e.rotation.x=-Math.PI/2.4,e}function uf(i){let e=new fe,t=new xt({color:i,roughness:.25,clearcoat:1,sheen:.5,sheenColor:new de("#ffffff")});e.add(le(t,.3,0,0,0,1.4,.9,.55));let n=Jt(t,.2,.3,.5,0,0);n.rotation.z=Math.PI/2,n.scale.set(1,1,.3),e.add(n);let s=Jt(t,.1,.2,0,.28,0);s.scale.set(1,1,.3),e.add(s);for(let r of[-1,1]){let a=le(Y.eye(),.05,-.25,.06,r*.14,1,1,.6,!0);e.add(a)}return e.traverse(r=>{r.isMesh&&(r.castShadow=!0)}),e.userData.tail=n,e}function bm(i){let e=new fe;switch(i){case"battery":e.add(It(Y.gloss("#2fd06f"),.16,.16,.5,0,0,0,24),It(Y.metal("#dddddd",.2),.07,.07,.08,0,.29,0),It(Y.gloss("#1d1d2a"),.165,.165,.14,0,-.18,0,24)),e.add(Xn(Y.emis("#ffffff",2),.06,.16,.02,.01,0,.05,.16));break;case"carrot":{let t=Jt(Y.plush("#ff8a2a"),.15,.55,0,0,0);t.rotation.x=Math.PI,e.add(t);for(let n=0;n<3;n++){let s=le(Y.plush("#3fbf5f"),.05,(n-1)*.05,.36,0,1,3,1,!0);s.rotation.z=(n-1)*.4,e.add(s)}break}case"bone":e.add(It(Y.plush("#fff6e6"),.07,.07,.5,0,0,0)),e.children[0].rotation.z=Math.PI/2;for(let t of[-1,1])for(let n of[-1,1])e.add(le(Y.plush("#fff6e6"),.09,t*.27,n*.07,0));break;case"fish":{let t=uf("#7ad0ff");t.scale.setScalar(.7),e.add(t);break}case"honey":e.add(le(Y.gloss("#ffb627"),.22,0,0,0,1,.95,1)),e.add(It(Y.plush("#fff1c8"),.14,.17,.07,0,.2,0)),e.add(It(Y.matte("#9a6a3a",.6),.015,.015,.4,.08,.3,0,8));break;case"strawberry":{let t=le(Y.gloss("#ff2f52"),.2,0,0,0,1,1.25,1);e.add(t);for(let n=0;n<12;n++){let s=U(tt),r=U(-.15,.15);e.add(le(Y.emis("#ffe36b",.5),.015,Math.cos(s)*.19*Math.sqrt(1-r*r*20),r,Math.sin(s)*.19,1,1,1,!0))}for(let n=0;n<5;n++){let s=Jt(Y.plush("#3fbf5f"),.05,.14,Math.cos(n)*.08,.26,Math.sin(n)*.08);s.rotation.z=Math.cos(n)*1.2,e.add(s)}break}case"melon":{let t=new ae(new mn(.35,.35,.14,32,1,!1,0,Math.PI*.5),Y.gloss("#ff4f6a"));t.rotation.x=Math.PI/2,e.add(t);let n=new ae(new mn(.37,.37,.15,32,1,!0,0,Math.PI*.5),Y.gloss("#2fae4f"));n.rotation.x=Math.PI/2,e.add(n);break}default:e.add(le(Y.gloss("#ff3f4f"),.2))}return e.traverse(t=>{t.isMesh&&(t.castShadow=!0)}),e}function Tm(i="#9a9ab8"){let e=new ae(new ji(.2,0),Y.matte(i,1));return e.castShadow=!0,e}function wm(){let i=new fe,e=new ae(new Da(.55,2),new ft({color:"#ffffff",metalness:.9,roughness:.12,flatShading:!0,emissive:"#6a6aa0",emissiveIntensity:.6}));i.add(e);let t=en("#ffffff",2.4,.5);i.add(t);let n=It(Y.metal("#cccccc",.3),.015,.015,6,0,3.4,0,6);return i.add(n),i}function po(i="#ffffff",e=1){let t=new fe,n=new xt({color:i,roughness:.9,sheen:1,sheenColor:new de("#ffffff"),sheenRoughness:.6});return[[0,0,0,1],[1,-.2,.1,.8],[-1,-.25,0,.75],[.4,.45,-.1,.7],[-.5,.35,.1,.65],[1.7,-.4,0,.5],[-1.7,-.45,0,.5]].forEach(([s,r,a,o])=>t.add(le(n,o,s,r,a,1,.85,.9))),t.scale.setScalar(e),t.traverse(s=>{s.isMesh&&(s.castShadow=!1,s.receiveShadow=!1)}),t}var us=new de,Am=new de;function Os(i,e,t={}){let n=t.size||170,s=t.seg||150,r=new Ln(n,n,s,s);r.rotateX(-Math.PI/2),r.translate(0,0,-n*.32);let a=r.attributes.position,o=new Float32Array(a.count*3);for(let c=0;c<a.count;c++){let h=a.getX(c),d=a.getZ(c),u=i(h,d);a.setY(c,u),e(h,d,u,us),o[c*3]=us.r,o[c*3+1]=us.g,o[c*3+2]=us.b}r.setAttribute("color",new Gt(o,3)),r.computeVertexNormals();let l=new ae(r,new ft({vertexColors:!0,roughness:t.rough??.95,metalness:t.metal??0}));return l.receiveShadow=!0,l}var mM=(i,e)=>Yc(5,17,Math.hypot(i*.75,(e+1.5)*1.1)),Fs=(i,e=.045,t=0)=>(n,s)=>mM(n,s)*($n(n*e+t,s*e+t)-.3)*i+($n(n*.6,s*.6)-.5)*.06,Bs=(i,e,t,n)=>n.set(i).lerp(Am.set(e),zt(t,0,1));function ff(i,e,t,n=3.2){for(let s=0,r=0;s<i&&r<i*20;r++){let a=U(-e,e),o=U(-e*1.6,e*.45);Math.hypot(a,o-.5)<n||Math.abs(a)<5&&o>-3||(t(a,o,s),s++)}}function Rm(i,e={}){let t=new ft(Object.assign({color:i,side:Pt,roughness:.8},e));return t.onBeforeCompile=n=>{n.uniforms.time={value:0},t.userData.u=n.uniforms.time,n.vertexShader=`uniform float time;
`+n.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
      #ifdef USE_INSTANCING
        vec4 wp0 = instanceMatrix * vec4(0.,0.,0.,1.);
      #else
        vec4 wp0 = modelMatrix * vec4(0.,0.,0.,1.);
      #endif
      float hk = max(position.y,0.); float sw = sin(time*1.8 + wp0.x*.55 + wp0.z*.35)*.16 + sin(time*3.1 + wp0.x*1.3)*.05;
      transformed.x += sw * hk * hk * ${e.bend||"1.0"}; transformed.z += sw * .4 * hk * hk;`)},k.updaters.push(n=>{t.userData.u&&(t.userData.u.value=n)}),t}function df(i,e,t,n=.5){let s=new Ln(.08,n,1,4);s.translate(0,n/2,0);let r=s.attributes.position;for(let h=0;h<r.count;h++){let d=r.getY(h);r.setX(h,r.getX(h)*(1-d/n*.9))}s.computeVertexNormals();let a=Rm("#ffffff",{roughness:.9}),o=new Un(s,a,i),l=new bt,c=new de;for(let h=0;h<i;h++){let d,u;do d=U(e[0],e[1]),u=U(e[2],e[3]);while(Math.abs(d)<4.2&&u>-1.5&&u<3&&Math.random()<.85);l.position.set(d,0,u),l.rotation.y=U(tt),l.scale.set(1,U(.6,1.4),1),l.updateMatrix(),o.setMatrixAt(h,l.matrix),o.setColorAt(h,c.set(it(t)).multiplyScalar(U(.75,1.1)))}return o.receiveShadow=!0,o}function gM(i,e,t){let n=new Un(new Rt(.11,12,8),new xt({roughness:.5,sheen:1,sheenColor:new de("#ffffff")}),i),s=new Un(new mn(.012,.015,.5,5).translate(0,.25,0),Y.plush("#3a9c4a"),i),r=new bt,a=new de;for(let l=0;l<i;l++){let c=U(e[0],e[1]),h=U(e[2],e[3]),d=U(.7,1.3);r.position.set(c,0,h),r.scale.set(1,d,1),r.rotation.set(0,0,0),r.updateMatrix(),s.setMatrixAt(l,r.matrix),r.position.y=.5*d,r.scale.set(d,d*.55,d),r.updateMatrix(),n.setMatrixAt(l,r.matrix),n.setColorAt(l,a.set(it(t)))}n.castShadow=!0;let o=new fe;return o.add(n,s),o}function mo(){let i=k.sparks,e=U(-30,30),t=U(14,26),n=-60,s=U(18,30)*(Math.random()<.5?-1:1),r=-U(6,10);for(let a=0;a<26;a++)setTimeout(()=>i.spawn({x:e+s*a*.025,y:t+r*a*.025,z:n,vx:s*.05,vy:r*.05,color:"#d9f3ff",size:1.4-a*.03,life:.8,bright:2}),a*25)}function zs(i,e){return i.userData.tap=()=>k.onSkyTap&&k.onSkyTap(e,i),k.pickables.push(i),i}var Hs=[{id:"espaco",name:"ESTA\xC7\xC3O ESTRELA",short:"Esta\xE7\xE3o",icon:"\u{1F30C}",fname:"Pipo",fdesc:"o rob\xF4",kind:"robot",face:"\u{1F916}",key:1,disc:["#8a7bff","#2a1f6b"],food:"battery",foodN:"baterias",hello:"Bip bop! Oi, Maria Clara! Eu sou o Pipo, o rob\xF4! Bem-vinda \xE0 Esta\xE7\xE3o Estrela!",lines:["Bip bip! Voc\xEA \xE9 muito esperta!","Bop! C\xF3cegas no meu circuito! Hahaha!","Vamos apertar os bot\xF5es coloridos?","Eu adoro as estrelas! E voc\xEA?","Bip! Bop! Olha a dan\xE7a do rob\xF4!"],skyLine:"Aquele \xE9 um planeta gigante com an\xE9is! Parece Saturno!",env:{top:"#02030f",mid:"#140b3c",bot:"#05041a",sun:[.4,.5,-1],sunCol:"#000000",sunSize:1,stars:1.3,nebula:1,haze:.3,glow:0,fog:["#0a0828",50,260],key:["#d6dcff",2.4,[5,9,6]],hemi:["#7a6aff","#1a1040",.7],exposure:1.1,bloom:.7},build(i){let e=new fe,t=Mn(512,512,(L,z)=>{L.fillStyle="#2a2f5e",L.fillRect(0,0,z,z),L.strokeStyle="#ffffff",L.lineWidth=3;for(let P=0;P<=8;P++)L.beginPath(),L.moveTo(P*z/8,0),L.lineTo(P*z/8,z),L.stroke(),L.beginPath(),L.moveTo(0,P*z/8),L.lineTo(z,P*z/8),L.stroke();L.fillStyle="rgba(255,255,255,.06)";for(let P=0;P<16;P++)L.fillRect(Math.random()*z,Math.random()*z,40,40)},[6,6]),n=Mn(512,512,(L,z)=>{L.fillStyle="#000",L.fillRect(0,0,z,z),L.strokeStyle="#5fd8ff",L.lineWidth=3;for(let P=0;P<=8;P++)L.beginPath(),L.moveTo(P*z/8,0),L.lineTo(P*z/8,z),L.stroke(),L.beginPath(),L.moveTo(0,P*z/8),L.lineTo(z,P*z/8),L.stroke()},[6,6]),s=new ae(new mn(16,16.6,.8,96),new ft({map:t,emissiveMap:n,emissive:"#5fd8ff",emissiveIntensity:.55,metalness:.85,roughness:.32}));s.position.set(0,-.4,-3),s.receiveShadow=!0,e.add(s);let r=64,a=new Un(new Rt(.13,10,8),new Zt({color:"#ffffff"}),r),o=new bt;for(let L=0;L<r;L++){let z=L/r*tt;o.position.set(Math.cos(z)*15.7,.05,Math.sin(z)*15.7-3),o.updateMatrix(),a.setMatrixAt(L,o.matrix),a.setColorAt(L,us.set("#7ef9ff"))}e.add(a),k.updaters.push(L=>{for(let z=0;z<r;z++){let P=Math.max(0,Math.sin(z*.5-L*5));a.setColorAt(z,us.setRGB(.4+P*3,1+P*3.5,1.2+P*4))}a.instanceColor.needsUpdate=!0});let l=new fe;l.position.set(3,0,-15),e.add(l);let c=Mn(64,128,(L,z,P)=>{L.fillStyle="#1a1d40",L.fillRect(0,0,z,P);for(let G=0;G<12;G++)for(let Z=0;Z<4;Z++)Math.random()<.7&&(L.fillStyle=it(["#ffe9a0","#9ff0ff","#ffb3e6"]),L.fillRect(Z*16+4,G*10+3,8,5))});[[-2.2,1.4,4.5],[-.6,1.1,6.5],[.9,1.3,3.8],[2.3,1,5.2],[0,.9,8]].forEach(([L,z,P])=>{let G=new ae(new vi(z,P,z),new ft({color:"#3b4196",metalness:.6,roughness:.4,emissiveMap:c,emissive:"#ffffff",emissiveIntensity:1.4}));G.position.set(L,P/2,0),G.castShadow=!0,l.add(G)});let h=new ae(new Rt(5,48,24,0,tt,0,Math.PI/2),Y.glass());h.renderOrder=3,l.add(h);let d=new ae(new Ft(5,.15,12,64),Y.metal("#c9d0ff",.25));d.rotation.x=Math.PI/2,l.add(d);let u=new fe;u.position.set(-10,0,-8),e.add(u),u.add(It(Y.metal("#9aa3e0",.3),.12,.2,7,0,3.5,0,12));let f=new ae(new Rt(1.4,32,16,0,tt,0,Math.PI/3),new ft({color:"#dfe4ff",metalness:.7,roughness:.3,side:Pt}));f.position.y=6.4,f.rotation.x=2.2,u.add(f);let g=en("#ff4060",2,1);g.position.y=7.3,u.add(g),u.add(le(Y.emis("#ff4060",4),.15,0,7.3,0)),k.updaters.push(L=>{f.rotation.z=Math.sin(L*.4)*.8,g.material.opacity=(Math.sin(L*4)+1)/2});let _=new fe;_.position.set(34,26,-120),e.add(_);let p=Mn(256,128,(L,z,P)=>{let G=["#ffd8a8","#ffb37a","#e98a6a","#ffe0c0","#c86a6a","#ffcf9a"];for(let Z=0;Z<24;Z++)L.fillStyle=it(G),L.fillRect(0,Z*P/24,z,P/24+1)}),m=new ae(new Rt(16,64,32),new ft({map:p,roughness:.8,emissive:"#ff9a6a",emissiveIntensity:.12}));_.add(zs(m,i.skyLine));let v=Mn(256,8,(L,z)=>{for(let P=0;P<z;P++)L.fillStyle=`rgba(255,${200+Math.random()*50|0},${160+Math.random()*60|0},${Math.random()*.7+.2})`,L.fillRect(P,0,1,8)}),S=new Ua(21,34,128,1),y=S.attributes.uv,w=S.attributes.position;for(let L=0;L<y.count;L++){let z=Math.hypot(w.getX(L),w.getY(L));y.setXY(L,(z-21)/13,.5)}let T=new ae(S,new ft({map:v,transparent:!0,side:Pt,roughness:.7,depthWrite:!1,emissive:"#ffb07a",emissiveIntensity:.15}));T.rotation.set(1.25,.2,.35),_.add(T);let x=en("#ffb27a",80,.25);_.add(x);let E=new ae(new Rt(4,32,16),Y.matte("#9ad8ff",.9));E.position.set(-60,30,-150),e.add(E);let D=40,C=new Un(new ji(1,1),Y.matte("#6a6080",1),D),O=[];for(let L=0;L<D;L++)O.push({a:U(tt),r:U(45,90),y:U(6,30),s:U(.5,2.4),sp:U(.01,.04),rx:U(tt)});return k.updaters.push(L=>{O.forEach((z,P)=>{o.position.set(Math.cos(z.a+L*z.sp)*z.r,z.y,Math.sin(z.a+L*z.sp)*z.r-70),o.rotation.set(z.rx+L*.3,L*.2,0),o.scale.setScalar(z.s),o.updateMatrix(),C.setMatrixAt(P,o.matrix)}),C.instanceMatrix.needsUpdate=!0}),e.add(C),e},amb:[[3,6,mo]],tapGround(i){k.sparks.burst(i.x,i.y+.2,i.z,30,["#7ef9ff","#ffffff","#ff8ae2"],3.5),k.fx.ring(i,"#7ef9ff"),k.sfx.sparkle()},tapSky(i){mo(),k.sparks.burst(i.x,i.y,i.z,40,["#ffffff","#ffe36b","#9ff6ff"],4),k.sfx.sparkle()}},{id:"lua",name:"LUA BRILHANTE",short:"Lua",icon:"\u{1F319}",fname:"Lulu",fdesc:"a coelhinha",kind:"bunny",face:"\u{1F430}",key:1.122,disc:["#f0f0ff","#7a7aa8"],food:"carrot",foodN:"cenouras",hello:"Oi, Maria Clara! Eu sou a Lulu, a coelhinha da Lua! Aqui a gente pula bem alto!",lines:["Hop hop! Olha como eu pulo alto!","Na Lua tudo flutua! Que legal!","Voc\xEA quer ser astronauta? Eu acho que sim!","Hihihi! Minhas orelhas fazem c\xF3cegas!"],skyLine:"Aquela bolinha azul \xE9 a Terra, a nossa casa!",env:{top:"#000004",mid:"#04051a",bot:"#000000",sun:[-.6,.35,.2],sunCol:"#fff6e6",sunSize:1.4,stars:1.6,nebula:.25,haze:.1,glow:.6,fog:["#04051a",60,260],key:["#ffffff",3.4,[-9,6,5]],hemi:["#8a9aff","#202030",.35],exposure:1.05,bloom:.55},build(i){let e=new fe,t=nf(77),n=Array.from({length:26},()=>({x:(t()-.5)*120,z:-t()*110+8,rad:1.5+t()*7}));n.push({x:-6,z:-4,rad:2.2},{x:7,z:-2,rad:1.8});let s=(p,m)=>{let v=Fs(6,.05)(p,m)+($n(p*.3,m*.3)-.5)*.15;for(let S of n){let y=Math.hypot(p-S.x,m-S.z)/S.rad;y<1.6&&(v+=y<1?-(1-y*y)*S.rad*.22:Math.exp(-Math.pow((y-1)/.25,2))*S.rad*.08)}return v*(Math.hypot(p,m-.5)<3.5?.3:1)};e.add(Os(s,(p,m,v,S)=>Bs("#8c8ca6","#d8d8ec",$n(p*.2,m*.2)+v*.08,S),{rough:1}));let r=new fe;r.position.set(-36,28,-110),e.add(r);let a=Mn(512,256,(p,m,v)=>{p.fillStyle="#1f5fd6",p.fillRect(0,0,m,v);for(let S=0;S<2600;S++){let y=Math.random()*m,w=Math.random()*v,T=qc(y*.02,w*.03)+qc(y*.05+9,w*.05)*.5;T>.82&&(p.fillStyle=T>1.05?"#c9b07a":"#3fae4f",p.fillRect(y,w,6,5))}p.fillStyle="#ffffff",p.fillRect(0,0,m,12),p.fillRect(0,v-12,m,12)}),o=new ae(new Rt(11,64,32),new ft({map:a,roughness:.55,emissive:"#2a6aff",emissiveIntensity:.12}));r.add(zs(o,i.skyLine));let l=Mn(512,256,(p,m,v)=>{for(let S=0;S<260;S++)p.fillStyle="rgba(255,255,255,.5)",p.beginPath(),p.ellipse(Math.random()*m,Math.random()*v,U(10,40),U(3,9),0,0,tt),p.fill()}),c=new ae(new Rt(11.25,64,32),new ft({map:l,transparent:!0,depthWrite:!1,roughness:1}));r.add(c),r.add(en("#5fb6ff",34,.55)),k.updaters.push(p=>{o.rotation.y=p*.05,c.rotation.y=p*.07});let h=new fe;h.position.set(-4.5,0,-5),e.add(h),h.add(It(Y.metal("#e9ecff",.2),.04,.04,3.2,0,1.6,0,10));let d=new Ln(1.6,1,16,8);d.translate(.8,0,0);let u=new ae(d,new ft({map:Mn(256,160,(p,m,v)=>{p.fillStyle="#ff5fa2",p.fillRect(0,0,m,v),p.fillStyle="#ffe36b",p.translate(m/2,v/2),p.beginPath();for(let S=0;S<10;S++){let y=S*Math.PI/5-Math.PI/2,w=S%2?22:50;p.lineTo(Math.cos(y)*w,Math.sin(y)*w)}p.fill()}),side:Pt,roughness:.7}));u.position.y=2.7,u.castShadow=!0,h.add(u);let f=d.attributes.position.array.slice();k.updaters.push(p=>{let m=d.attributes.position;for(let v=0;v<m.count;v++){let S=f[v*3];m.setZ(v,Math.sin(p*3-S*3)*.12*S)}m.needsUpdate=!0,d.computeVertexNormals()});let g=new Un(new ji(.3,0),Y.matte("#a4a4bc",1),60),_=new bt;for(let p=0;p<60;p++){let m,v;do m=U(-22,22),v=U(-30,5);while(Math.hypot(m,v-.5)<4);_.position.set(m,s(m,v),v),_.rotation.set(U(3),U(3),0),_.scale.setScalar(U(.4,2)),_.updateMatrix(),g.setMatrixAt(p,_.matrix)}return g.castShadow=g.receiveShadow=!0,e.add(g),e},amb:[[2.5,5,mo]],tapGround(i){for(let e=0;e<3;e++)k.props.bounce(it(["rock","star","star"]),i,.4);k.sfx.boing()},tapSky(i){k.sparks.burst(i.x,i.y,i.z,40,["#ffffff","#dfe8ff"],4),mo(),k.sfx.sparkle()}},{id:"doces",name:"PLANETA DOS DOCES",short:"Doces",icon:"\u{1F36D}",fname:"Bolota",fdesc:"o cachorrinho",kind:"puppy",face:"\u{1F436}",key:.89,disc:["#ffb3e0","#c45a9a"],food:"bone",foodN:"ossinhos",hello:"Au au! Oi, Maria Clara! Eu sou o Bolota! Bem-vinda ao Planeta dos Doces!",lines:["Au au! Quer um pirulito?","Hahaha! Meu rabinho n\xE3o para de balan\xE7ar!","Au! Aquela montanha \xE9 de sorvete!","Lambeijo pra voc\xEA, Maria Clara!"],skyLine:"O sol aqui parece um caramelo derretendo! Que del\xEDcia!",env:{top:"#ff6fb8",mid:"#ffa8b0",bot:"#ffcfb8",sun:[.5,.16,-1],sunCol:"#ffe2b0",sunSize:3,stars:0,nebula:0,haze:.9,glow:1.3,fog:["#f6a8c8",50,200],key:["#ffe9d6",2.2,[7,8,6]],hemi:["#ffc0e0","#b04a7a",.55],exposure:.82,bloom:.3},build(i){let e=new fe;e.add(Os(Fs(5,.05,3),(h,d,u,f)=>Bs("#e2669e","#ffb0c8",$n(h*.12,d*.12)*1.4-.2+u*.06,f),{rough:.55}));let t=new Un(new yr(.025,.12,3,6),new xt({roughness:.3,clearcoat:1}),500),n=new bt;for(let h=0;h<500;h++)n.position.set(U(-16,16),.03,U(-18,5)),n.rotation.set(Math.PI/2,0,U(tt)),n.updateMatrix(),t.setMatrixAt(h,n.matrix),t.setColorAt(h,us.set(it(["#ff4f8a","#4dc3ff","#ffd23f","#7cf29a","#ffffff","#b48cff"])));e.add(t);let s=(h,d,u,f)=>{let g=new fe;g.position.set(h,0,d);let _=new xt({color:f,roughness:.45,sheen:1,sheenColor:new de("#ffffff"),clearcoat:.3});g.add(le(_,u,0,u*.2,0,1,.82,1));for(let p=0;p<12;p++){let m=p/12*tt;g.add(le(_,u*.16,Math.cos(m)*u*.93,u*.02-p%3*u*.07,Math.sin(m)*u*.93,1,1.8,1,!0))}return g.add(le(Y.gloss("#ff2f4f"),u*.14,0,u*1.02,0)),g};e.add(s(-22,-45,11,"#ffd9e8"),s(4,-62,15,"#c7f5df"),s(28,-48,12,"#fff2cc"));let r=(h,d,u,f,g)=>{let _=new fe;_.position.set(h,0,d),_.add(It(Y.gloss("#fff8ee"),.09,.09,u,0,u/2,0,12));let p=new ae(new mn(f,f,.3,48),new xt({map:cf(g),roughness:.12,clearcoat:1}));return p.rotation.x=Math.PI/2,p.position.y=u,p.castShadow=!0,_.add(p),k.updaters.push(m=>p.rotation.y=m*.5*(h>0?1:-1)),_};e.add(r(-7,-5,3.2,1.2,"#ff3f7a"),r(7.5,-8,4,1.5,"#2fb6ff"),r(-3,-14,4.5,1.6,"#a46bff"),r(12,-18,5,2,"#ff9a3c"));let a=Mn(64,64,(h,d)=>{h.fillStyle="#fff",h.fillRect(0,0,d,d),h.fillStyle="#ff2f4f",h.fillRect(0,0,d/2,d)},[12,1]),o=new bs([new A(0,0,0),new A(0,2.5,0),new A(.2,3.3,0),new A(.8,3.6,0),new A(1.4,3.2,0),new A(1.5,2.7,0)]);for(let[h,d]of[[9,-3],[-11,-9]]){let u=new ae(new li(o,64,.2,16),new xt({map:a,roughness:.15,clearcoat:1}));u.position.set(h,0,d),u.castShadow=!0,e.add(u)}ff(14,14,(h,d)=>{let u=it(["#7cf29a","#ff6fae","#b48cff","#ffd23f","#5fd0ff"]),f=new ae(new Rt(.6,32,16,0,tt,0,Math.PI/2),new xt({color:u,roughness:.2,clearcoat:1,sheen:1,sheenColor:new de("#ffffff"),transmission:0}));f.position.set(h,0,d),f.scale.y=1.2,f.castShadow=!0,e.add(f)});let l=[];for(let h=0;h<6;h++){let d=po(h%2?"#ffd0ee":"#d6ecff",U(1.5,2.6));d.position.set(U(-40,40),U(12,20),U(-60,-25)),e.add(d),l.push(d)}k.updaters.push((h,d)=>l.forEach(u=>{u.position.x+=d*.6,u.position.x>50&&(u.position.x=-50)}));let c=new ae(new Rt(10,12,8),new Zt({visible:!1}));return c.position.set(.5,.16,-1).normalize().multiplyScalar(300),e.add(zs(c,i.skyLine)),e},amb:[[4,7,()=>k.props.balloonRise()]],tapGround(i){for(let e=0;e<6;e++)k.props.bounce("candy",i,1);k.sfx.pop()},tapSky(i){for(let e=0;e<5;e++)k.props.bounce("candy",i,1);k.sfx.pop()}},{id:"mar",name:"FUNDO DO MAR",short:"Mar",icon:"\u{1F420}",fname:"Estela",fdesc:"a estrelinha do mar",kind:"starfish",face:"\u2B50",key:1.06,disc:["#5fe1f0","#0a3d86"],food:"fish",foodN:"peixinhos",water:!0,hello:"Blub blub! Oi, Maria Clara! Eu sou a Estela, a estrelinha do mar!",lines:["Blub blub! Toque na \xE1gua para fazer bolhas!","Os peixinhos s\xE3o meus amigos!","Eu brilho igual uma estrela! Hihi!","Vamos estourar as bolhas? Plim!"],skyLine:"Olha a luz do sol entrando na \xE1gua! Que lindo!",env:{top:"#3fc8f0",mid:"#0c62a0",bot:"#03203f",sun:[0,1,-.15],sunCol:"#bff4ff",sunSize:6,stars:0,nebula:0,haze:.8,glow:.8,fog:["#0a4f85",3,42],key:["#8fdcff",1.5,[2,12,3]],hemi:["#6fd8ff","#06284f",.9],exposure:1,bloom:.45},build(i){let e=new fe;e.add(Os((f,g)=>Fs(4,.06,9)(f,g)+Math.sin(f*1.3+g*.4)*.04*Yc(2,6,Math.hypot(f,g)),(f,g,_,p)=>Bs("#8f7a52","#c9b080",$n(f*.25,g*.25)*1.3-.1,p),{rough:.95}));let t=new ae(new Ln(70,70),new Tt({transparent:!0,depthWrite:!1,blending:jt,uniforms:{t:{value:0}},vertexShader:"varying vec2 vP; void main(){ vec4 wp=modelMatrix*vec4(position,1.); vP=wp.xz; gl_Position=projectionMatrix*viewMatrix*wp; }",fragmentShader:`varying vec2 vP; uniform float t; float cau(vec2 p){ vec2 i=p; float c=1.; float k=.006; for(int n=0;n<4;n++){ float tt=t*(1.-(3.5/float(n+1))); i=p+vec2(cos(tt-i.x)+sin(tt+i.y),sin(tt-i.y)+cos(tt+i.x)); c+=1./max(length(vec2(p.x/(sin(i.x+tt)/k),p.y/(cos(i.y+tt)/k))),.001); } c/=4.; c=1.17-pow(c,1.4); return pow(abs(c),7.); }
        void main(){ float v=cau(vP*.55+vec2(30.)); v=(v==v)?smoothstep(.25,1.3,clamp(v,0.,1.3))*.55:0.; float f=1.-smoothstep(8.,30.,length(vP-vec2(0.,-4.))); gl_FragColor=vec4(vec3(.7,.95,1.)*v*.75*f, clamp(v*f,0.,1.)); }`}));t.rotation.x=-Math.PI/2,t.position.set(0,.04,-12),e.add(t),k.updaters.push(f=>t.material.uniforms.t.value=f*.5+23);let n=new Tt({transparent:!0,depthWrite:!1,blending:jt,side:Pt,uniforms:{t:{value:0}},vertexShader:"varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.); }",fragmentShader:"varying vec2 vUv; uniform float t; void main(){ float a=smoothstep(0.,.5,vUv.x)*smoothstep(1.,.5,vUv.x)*pow(vUv.y,1.5)*(.6+.4*sin(t+vUv.x*6.)); gl_FragColor=vec4(vec3(.85,1.,1.)*a*.35,a*.35); }"}),s=[];for(let f=0;f<7;f++){let g=new ae(new Ln(2.5,26),n);g.position.set(-12+f*4,10,-10-f%3*5),g.rotation.z=.25,e.add(g),s.push(g)}k.updaters.push(f=>{n.uniforms.t.value=f,s.forEach((g,_)=>g.rotation.z=.25+Math.sin(f*.4+_)*.07)});let r=Rm("#2fbf71",{roughness:.6,bend:"0.05"}),a=new Ln(.35,4,1,14);a.translate(0,2,0);let o=new Un(a,r,70),l=new bt,c=[];for(let f=0;f<70;f++){let g,_;do g=U(-16,16),_=U(-22,3);while(Math.abs(g)<4.5&&_>-4);l.position.set(g,0,_),l.rotation.y=U(tt),l.scale.set(1,U(.6,1.6),1),l.updateMatrix(),o.setMatrixAt(f,l.matrix),o.setColorAt(f,us.set(it(["#2fbf71","#25a862","#4fd68a","#1f9a6a"]))),c.push([g,_])}e.add(o);let h=(f,g,_,p)=>{let m=new fe;m.position.set(f,0,g),m.scale.setScalar(p);let v=Y.plush(_),S=(y,w,T,x)=>{let E=y.clone().add(w.clone().multiplyScalar(T)),D=new ae(new yr(.12*(x+1)*.5,T,4,8),v);if(D.position.copy(y).lerp(E,.5),D.quaternion.setFromUnitVectors(new A(0,1,0),w.clone().normalize()),D.castShadow=!0,m.add(D),x>0)for(let C=0;C<2;C++)S(E,w.clone().applyAxisAngle(new A(Math.random(),0,Math.random()).normalize(),U(.4,.8)*(C?1:-1)),T*.75,x-1);else m.add(le(v,.14,E.x,E.y,E.z,1,1,1,!0))};return S(new A,new A(0,1,0),.9,3),m};e.add(h(-6,-3,"#ff7aa8",1.2),h(6.5,-4,"#ffb35c",1.4),h(-9,-9,"#c58bff",1.8),h(10,-12,"#ff5f7a",2),h(2,-11,"#5fe0c8",1.3));let d=[];for(let f=0;f<14;f++){let g=uf(it(["#ffb02e","#ff5fa2","#5fd0ff","#ffe14d","#9b7bff","#ff7a4a"]));g.userData.o={r:U(6,16),a:U(tt),y:U(2,7),sp:U(.12,.3)*(Math.random()<.5?1:-1),z:U(-18,-6)},g.scale.setScalar(U(.8,1.4)),e.add(g),d.push(g),g.userData.tap=()=>{k.sfx.giggle(),k.sparks.burst(g.position.x,g.position.y,g.position.z,16,"#bff6ff",2),g.userData.o.sp*=2.5,setTimeout(()=>g.userData.o.sp/=2.5,1500)}}k.pickables.push(...d),k.updaters.push((f,g)=>{if(d.forEach((_,p)=>{let m=_.userData.o;m.a+=m.sp*g,_.position.set(Math.cos(m.a)*m.r,m.y+Math.sin(f+p)*.3,m.z+Math.sin(m.a)*4);let v=-Math.sin(m.a)*m.r*m.sp,S=Math.cos(m.a)*4*m.sp;_.rotation.y=Math.atan2(S,-v),_.userData.tail.rotation.y=Math.sin(f*10+p)*.5}),Math.random()<g*4){let[_,p]=it(c);k.sparks.spawn({x:_,y:U(.5,3),z:p,vy:U(.6,1.2),vx:U(-.1,.1),color:"#dff8ff",size:U(.08,.18),life:4})}});let u=new ae(new Rt(20,12,8),new Zt({visible:!1}));return u.position.set(0,40,-20),e.add(zs(u,i.skyLine)),e},amb:[[6,11,()=>k.props.bubbleUp(U(-4,4),-1,U(-1,2))]],tapGround(i){for(let e=0;e<5;e++)k.props.bubbleUp(i.x+U(-.5,.5),i.y+.3,i.z+U(-.3,.3));k.sfx.bloop()},tapSky(i){for(let e=0;e<5;e++)k.props.bubbleUp(i.x+U(-.6,.6),i.y+U(-.4,.4),i.z);k.sfx.bloop()}},{id:"flores",name:"JARDIM DAS FLORES",short:"Flores",icon:"\u{1F338}",fname:"Bia",fdesc:"a abelhinha",kind:"bee",face:"\u{1F41D}",key:1,disc:["#ffd0ef","#4cb85b"],food:"honey",foodN:"potinhos de mel",hello:"Bzzz! Oi, Maria Clara! Eu sou a Bia, a abelhinha! Vamos plantar flores?",lines:["Bzzz! Toque na grama para nascer uma flor!","As borboletas querem brincar!","Bzzz! Que flor mais cheirosa!","Voc\xEA \xE9 docinha igual mel!"],skyLine:"Bom dia, sol! Ele est\xE1 brilhando pra voc\xEA!",env:{top:"#2f86ff",mid:"#a6dcff",bot:"#e8f6ff",sun:[.45,.55,-.7],sunCol:"#fff4d8",sunSize:2,stars:0,nebula:0,haze:.45,glow:1,fog:["#bfe0ff",50,210],key:["#fff1dc",2.8,[7,10,-3]],hemi:["#a8d6ff","#3a6a2a",.9],exposure:.95,bloom:.3},build(i){let e=new fe;e.add(Os(Fs(9,.04,5),(a,o,l,c)=>Bs("#3f9a3f","#8fdc5a",$n(a*.1,o*.1)*1.5-.2+l*.03,c),{rough:.9})),e.add(df(6e3,[-15,15,-20,5],["#5fcf4f","#4cb848","#7ee060","#3fa83f"])),e.add(gM(160,[-15,15,-20,4],["#ff6fa8","#ffd23f","#ffffff","#b48cff","#ff8a3c","#5fd0ff"]));let t=(a,o,l)=>{let c=new fe;c.position.set(a,0,o),c.scale.setScalar(l),c.add(It(Y.plush("#8a5a3a"),.25,.35,3,0,1.5,0,12));let h=Y.plush(it(["#3fae4a","#4cc85a","#2f9a44"]));return[[0,3.6,0,1.6],[1,3.1,.3,1.1],[-1,3.2,-.2,1.2],[.2,4.4,-.2,1.1],[-.4,3,.9,1]].forEach(([d,u,f,g])=>c.add(le(h,g,d,u,f))),c};[[-12,-12,1.3],[13,-15,1.5],[-20,-25,1.8],[22,-30,2],[5,-32,1.7],[-8,-30,1.6]].forEach(a=>e.add(t(...a)));for(let[a,o,l]of[[-5.2,-1.5,"#ff6fa8"],[5.4,-2.2,"#9b7bff"],[-3.5,-6,"#ffb340"]]){let c=eh(l);c.position.set(a,0,o),c.scale.setScalar(1.8),e.add(c),k.updaters.push(h=>c.rotation.z=Math.sin(h*1.3+a)*.06)}let n=[];for(let a=0;a<6;a++){let o=po("#ffffff",U(1.6,2.8));o.position.set(U(-50,50),U(14,22),U(-70,-35)),e.add(o),n.push(o)}k.updaters.push((a,o)=>n.forEach(l=>{l.position.x+=o*.5,l.position.x>60&&(l.position.x=-60)}));let s=[];for(let a=0;a<7;a++){let o=fo(it(["#ff6fa8","#ffb340","#5fd0ff","#b48cff","#ffe14d"]));o.userData.o={cx:U(-8,8),cz:U(-10,-2),r:U(1.5,4),a:U(tt),sp:U(.4,.8),y:U(1,3.5)},e.add(o),s.push(o),o.userData.tap=()=>{k.sfx.giggle(),k.sparks.burst(o.position.x,o.position.y,o.position.z,14,"#ffe9f8",2)}}k.pickables.push(...s),k.updaters.push(a=>s.forEach((o,l)=>{let c=o.userData.o,h=c.a+a*c.sp;o.position.set(c.cx+Math.cos(h)*c.r,c.y+Math.sin(a*2+l)*.4,c.cz+Math.sin(h)*c.r),o.rotation.z=-h;let d=Math.sin(a*16+l)*.9;o.userData.wings[0].rotation.y=d,o.userData.wings[1].rotation.y=-d}));let r=new ae(new Rt(18,12,8),new Zt({visible:!1}));return r.position.set(.45,.55,-.7).normalize().multiplyScalar(300),e.add(zs(r,i.skyLine)),e},amb:[],tapGround(i){k.props.growFlower(i)},tapSky(i){k.props.butterfly(i),k.sparks.burst(i.x,i.y,i.z,24,["#ffb3d9","#ffe36b","#ffffff"],2.5),k.sfx.chime()}},{id:"arcoiris",name:"PLANETA ARCO-\xCDRIS",short:"Arco-\xEDris",icon:"\u{1F308}",fname:"Zuzu",fdesc:"a unic\xF3rnio",kind:"unicorn",face:"\u{1F984}",key:1.19,disc:["#ff9be0","#7f8cff"],food:"strawberry",foodN:"moranguinhos",hello:"Ol\xE1, Maria Clara! Eu sou a Zuzu, a unic\xF3rnio! Voc\xEA encontrou o planeta das cores!",lines:["Meu chifre brilha quando voc\xEA sorri!","Vamos contar as cores do arco-\xEDris?","Iiirr\xED! Que alegria!","Toque no c\xE9u para fazer cora\xE7\xF5es!"],skyLine:"O arco-\xEDris tem sete cores! Vermelho, laranja, amarelo, verde, azul, anil e violeta!",env:{top:"#7a5cff",mid:"#ff9fdc",bot:"#ffd6f0",sun:[-.4,.45,-1],sunCol:"#fff0ff",sunSize:2.5,stars:.25,nebula:.15,haze:.8,glow:1.2,fog:["#d8a8e8",50,200],key:["#fff0ff",2.2,[6,9,6]],hemi:["#f0c8ff","#3a8a78",.55],exposure:.82,bloom:.35},build(i){let e=new fe;e.add(Os(Fs(6,.05,11),(l,c,h,d)=>Bs("#3fb08a","#8fdcb4",$n(l*.15,c*.15)*1.4-.2,d),{rough:.7})),e.add(df(3500,[-15,15,-20,5],["#4fc89a","#ff8fc8","#8fd860","#6fb8ff"],.4));let t=new fe;t.position.set(0,-4,-75),e.add(t),hn.forEach((l,c)=>{let h=new ae(new Ft(48-c*1.7,.85,12,120,Math.PI),new Zt({color:new de(l).multiplyScalar(1.15),transparent:!0,opacity:.9,fog:!1}));t.add(h)});let n=[];[[-18,9,-40],[20,12,-48],[-30,16,-70],[34,18,-80]].forEach(([l,c,h],d)=>{let u=new fe;u.position.set(l,c,h),u.add(Jt(Y.plush("#b48cff"),3,4,0,-2,0,7)),u.children[0].rotation.x=Math.PI,u.add(It(Y.plush("#9ff2cf"),3.1,3.1,.5,0,.1,0,24)),u.add(le(Y.plush("#ffb3e0"),1.2,.5,1.3,0)),u.add(It(Y.plush("#a0703a"),.15,.2,1,.5,.6,0)),e.add(u),n.push(u)}),k.updaters.push(l=>n.forEach((c,h)=>c.position.y+=Math.sin(l*.6+h)*.004));let s=(l,c,h,d)=>{let u=new fe;u.position.set(l,0,c),u.scale.setScalar(d);let f=new xt({color:h,roughness:.05,metalness:.1,clearcoat:1,iridescence:1,iridescenceIOR:1.8,flatShading:!0,emissive:h,emissiveIntensity:.25});for(let _=0;_<5;_++){let p=U(1,2.4),m=new ae(new Na(.4,0),f);m.scale.set(1,p*1.6,1),m.position.set(U(-.5,.5),p*.55,U(-.5,.5)),m.rotation.set(U(-.3,.3),U(3),U(-.3,.3)),m.castShadow=!0,u.add(m)}let g=en(h,4,.5);return g.position.y=1.2,u.add(g),u};e.add(s(-6.5,-3,"#7fe3ff",1),s(7,-5,"#ff9be0",1.2),s(-10,-12,"#c39bff",1.6),s(12,-15,"#ffe36b",1.4));let r=po("#ffffff",2.4);r.position.set(14,15,-40),e.add(r);for(let l of[-1,1]){let c=new fe;c.position.set(l*.5,.1,.95),c.add(le(Y.eye(),.14,0,0,0,1,1.3,.5)),c.add(le(Y.emis("#ffffff",2.5),.05,-.04,.06,.06,1,1,1,!0)),r.add(c)}let a=new ae(new Ft(.2,.04,8,16,Math.PI),Y.matte("#6a4a8a",.6));a.rotation.z=Math.PI,a.position.set(0,-.15,.98),r.add(a),r.traverse(l=>{l.isMesh&&(l.userData.tap=()=>k.onSkyTap(i.skyLine,r))}),k.pickables.push(r),k.updaters.push(l=>r.position.y=15+Math.sin(l*.8)*.4);let o=[];for(let l=0;l<4;l++){let c=po(it(["#ffffff","#ffe0f6","#e8e0ff"]),U(1.5,2.4));c.position.set(U(-45,45),U(12,20),U(-70,-35)),e.add(c),o.push(c)}return k.updaters.push((l,c)=>{o.forEach(h=>{h.position.x+=c*.5,h.position.x>55&&(h.position.x=-55)}),Math.random()<c*6&&k.sparks.spawn({x:U(-12,12),y:U(.5,7),z:U(-12,2),vy:.3,color:it(hn),size:U(.15,.3),life:1.5})}),e},amb:[[5,9,()=>k.props.balloonRise()]],tapGround(i){k.fx.rainbowRing(i);for(let e=0;e<5;e++)k.props.floatHeart(i);k.sfx.magic()},tapSky(i){k.fx.rainbowRing(i);for(let e=0;e<6;e++)k.props.floatHeart(i);k.sfx.magic()}},{id:"gelo",name:"PLANETA GELADO",short:"Gelo",icon:"\u2744\uFE0F",fname:"Pingo",fdesc:"o pinguim",kind:"penguin",face:"\u{1F427}",key:.94,disc:["#e6f6ff","#4a90d6"],food:"fish",foodN:"peixinhos",hello:"Oi, Maria Clara! Eu sou o Pingo, o pinguim! Brrr, aqui \xE9 geladinho!",lines:["Brrr! Que friozinho gostoso!","Toque na neve para fazer um boneco!","Olha as luzes coloridas no c\xE9u! \xC9 a aurora!","Eu adoro escorregar na barriga! Uiii!"],skyLine:"Essas luzes dan\xE7ando no c\xE9u se chamam aurora. Parece m\xE1gica!",env:{top:"#010612",mid:"#0a2246",bot:"#12345a",sun:[-.5,.45,-1],sunCol:"#cfe0ff",sunSize:2,stars:1.4,nebula:.2,haze:.5,glow:.3,fog:["#0c2244",35,170],key:["#a8c4ff",1.5,[-6,10,4]],hemi:["#4a70d0","#14203a",.6],exposure:1,bloom:.5},build(i){let e=new fe;e.add(Os(Fs(7,.045,21),(u,f,g,_)=>Bs("#8aa8d0","#d4e4f6",$n(u*.2,f*.2)*1.6-.1+g*.05,_),{rough:.5}));let t=new Tt({transparent:!0,depthWrite:!1,blending:jt,side:Pt,fog:!1,uniforms:{t:{value:0}},vertexShader:"varying vec2 vUv; uniform float t; void main(){ vUv=uv; vec3 p=position; p.z+=sin(p.x*.05+t*.3)*12.+sin(p.x*.13-t*.5)*4.; p.y+=sin(p.x*.08+t*.4)*3.; gl_Position=projectionMatrix*modelViewMatrix*vec4(p,1.); }",fragmentShader:`varying vec2 vUv; uniform float t; void main(){ float band=pow(sin(vUv.x*60.+t*.8+sin(vUv.x*13.+t)*2.)*.5+.5,3.); float v=vUv.y; float a=smoothstep(0.,.15,v)*pow(1.-v,1.6)*(.45+.55*band);
        vec3 c=mix(vec3(.15,1.,.6),vec3(.6,.3,1.),smoothstep(.3,1.,v)+.3*sin(vUv.x*8.+t*.2)); gl_FragColor=vec4(c*a*1.6,a); }`});for(let u=0;u<3;u++){let f=new ae(new Ln(220,34,220,1),t);f.position.set(u*10-10,34+u*6,-110-u*20),e.add(f)}k.updaters.push(u=>t.uniforms.t.value=u);let n=new ae(new Rt(7,48,24),new ft({color:"#ffffff",emissive:"#dfe8ff",emissiveIntensity:.9,roughness:1}));n.position.set(-.5,.45,-1).normalize().multiplyScalar(160),e.add(zs(n,i.skyLine));let s=en("#cfe0ff",34,.28);s.position.copy(n.position),e.add(s);let r=new xt({color:"#d8f0ff",roughness:.12,metalness:0,clearcoat:1,flatShading:!0,sheen:.5,sheenColor:new de("#9fd8ff")});[[-30,-55,14,22],[-8,-70,18,30],[18,-60,15,24],[40,-75,20,32],[-48,-80,16,26]].forEach(([u,f,g,_])=>{let p=new ae(new si(g,_,7,3),r);p.position.set(u,_/2-2,f),p.rotation.y=U(3),e.add(p)});let a=(u,f,g)=>{let _=new fe;_.position.set(u,0,f),_.scale.setScalar(g),_.add(It(Y.plush("#6b4a3a"),.15,.2,.8,0,.4,0,8));for(let p=0;p<4;p++){let m=1.3-p*.28,v=.9+p*.75;_.add(Jt(Y.plush("#2a6a50"),m,1.3,0,v,0,10)),_.add(Jt(Y.plush("#f4fbff"),m*.55,.55,0,v+.45,0,10))}return _};ff(16,18,(u,f)=>e.add(a(u,f,U(1,2.2))),6);let o=new fe;o.position.set(5.5,0,-6),e.add(o);let l=Mn(256,128,(u,f,g)=>{u.fillStyle="#f4fbff",u.fillRect(0,0,f,g),u.strokeStyle="#b8d4ee",u.lineWidth=3;for(let _=0;_<6;_++){u.beginPath(),u.moveTo(0,_*g/6),u.lineTo(f,_*g/6),u.stroke();for(let p=0;p<10;p++){let m=p*f/10+_%2*f/20;u.beginPath(),u.moveTo(m,_*g/6),u.lineTo(m,(_+1)*g/6),u.stroke()}}});o.add(new ae(new Rt(2,40,20,0,tt,0,Math.PI/2),new xt({map:l,roughness:.5,sheen:.6}))),o.children[0].castShadow=!0;let c=new ae(new mn(.8,.8,1.2,24,1,!0,0,Math.PI),new xt({map:l,roughness:.5,side:Pt}));c.rotation.set(Math.PI/2,0,Math.PI/2),c.position.set(0,0,2),o.add(c);let h=new ae(new Ni(.7,24,0,Math.PI),new ft({color:"#000",emissive:"#ffb84a",emissiveIntensity:1.2}));h.position.set(0,0,2.55),o.add(h);let d=en("#ffb84a",3,.7);return d.position.set(0,.4,2.7),o.add(d),k.updaters.push((u,f)=>{for(let g=0;g<3;g++)Math.random()<.9&&k.sparks.spawn({x:U(-16,16),y:U(9,12),z:U(-14,4),vy:-U(.8,1.4),vx:U(-.2,.2),color:"#ffffff",size:U(.08,.16),life:9,bright:.9});Math.random()<f*4&&k.sparks.spawn({x:U(-10,10),y:.05,z:U(-10,3),color:"#ffffff",size:U(.2,.35),life:.5,bright:2})}),e},amb:[[7,12,()=>k.props.slider()],[4,8,mo]],tapGround(i){k.props.snowman(i)},tapSky(i){k.sparks.burst(i.x,i.y,i.z,40,["#ffffff","#cfefff"],3.5),k.sfx.chime()}},{id:"dinos",name:"VALE DOS DINOSSAUROS",short:"Dinos",icon:"\u{1F995}",fname:"Dino",fdesc:"o dinossauro",kind:"dino",face:"\u{1F996}",key:.84,disc:["#9be37a","#e0743a"],food:"melon",foodN:"melancias",hello:"Roooar! Calma, \xE9 um rugido de amigo! Eu sou o Dino! Bem-vinda ao Vale dos Dinossauros!",lines:["Roooar! Esse \xE9 o meu rugido fofinho!","Toque no ch\xE3o para cair um ovinho!","O vulc\xE3o daqui s\xF3 solta cora\xE7\xF5es!","Tum! Tum! Tum! Olha eu pisando forte!"],skyLine:"O sol daqui \xE9 bem quentinho e alaranjado!",env:{top:"#e85a6a",mid:"#ffa66b",bot:"#ffcf96",sun:[.35,.09,-1],sunCol:"#ffb070",sunSize:3,stars:0,nebula:0,haze:.8,glow:1,fog:["#f0a07a",45,190],key:["#ffc490",2.6,[7,6,8]],hemi:["#ffd6b0","#2f4a24",.9],exposure:.95,bloom:.4},build(i){let e=new fe;e.add(Os((u,f)=>Fs(8,.04,31)(u,f)+Yc(40,70,-f)*$n(u*.03,f*.03)*18,(u,f,g,_)=>Bs("#2f7a32","#74b84a",$n(u*.12,f*.12)*1.5-.2,_).lerp(Am.set("#8a6a5a"),zt((g-6)/10,0,1)),{rough:.95})),e.add(df(4500,[-15,15,-20,5],["#3f8a34","#56a63e","#2f7a2e","#6cb444"],.55));let t=new fe;t.position.set(-4,0,-62),e.add(t);let n=new es([[.1,18],[4,17.6],[6,16],[10,9],[17,2],[22,0]].map(([u,f])=>new ie(u,f)),64),s=new ae(n,new ft({color:"#7a5060",roughness:.95,flatShading:!1}));t.add(s);let r=new ae(new Ni(4,32),new ft({color:"#000",emissive:"#ff5a1f",emissiveIntensity:3}));r.rotation.x=-Math.PI/2,r.position.y=17.4,t.add(r);let a=en("#ff7a3d",26,.8);a.position.y=18,t.add(a);for(let u of[-.5,.4,1.4]){let f=new bs(Array.from({length:6},(_,p)=>{let m=4+p*2.6,v=17.5-p*3.1;return new A(Math.sin(u+p*.08)*m,v,Math.cos(u+p*.08)*m)})),g=new ae(new li(f,40,.45,8),new ft({color:"#000",emissive:"#ff6a2a",emissiveIntensity:2.4}));t.add(g)}let o=new $i({map:k.glowTexture,color:"#e8dce8",transparent:!0,opacity:.5,depthWrite:!1}),l=Array.from({length:14},(u,f)=>{let g=new Ss(o.clone());return g.userData.k=f/14,t.add(g),g});k.updaters.push((u,f)=>{a.material.opacity=.65+Math.sin(u*3)*.15,l.forEach(g=>{let _=(g.userData.k+u*.05)%1;g.position.set(Math.sin(_*6+g.userData.k*9)*2+_*6,18+_*22,0),g.scale.setScalar(4+_*14),g.material.opacity=(1-_)*.45*Math.min(1,_*8)})}),k.volcanoTop=new A(-4,19,-62);let c=(u,f,g,_)=>{let p=new fe;p.position.set(u,0,f),p.scale.setScalar(g);let m=new ri(new A(0,0,0),new A(_*.3,2.5,0),new A(_,5,0)),v=Mn(32,128,(T,x,E)=>{T.fillStyle="#9a6a3a",T.fillRect(0,0,x,E),T.fillStyle="#6a4424";for(let D=0;D<16;D++)T.fillRect(0,D*8,x,2)},[1,4]),S=new ae(new li(m,24,.22,10),new ft({map:v,roughness:.9}));S.castShadow=!0,p.add(S);let y=new fe;y.position.set(_,5,0),p.add(y);let w=Y.plush("#3faa4a");for(let T=0;T<8;T++){let x=new fe;x.rotation.y=T/8*tt;let E=le(w,1,1.4,-.3,0,1.5,.06,.3);E.rotation.z=-.45,x.add(E),y.add(x)}for(let T=0;T<3;T++)y.add(le(Y.plush("#6a4424"),.22,Math.cos(T*2)*.25,-.25,Math.sin(T*2)*.25));return k.updaters.push(T=>y.rotation.z=Math.sin(T*.9+u)*.05),p};[[-8,-3,1.1,-1],[9,-5,1.3,1.2],[-13,-12,1.6,.8],[15,-14,1.5,-1],[-4,-18,1.8,.6]].forEach(u=>e.add(c(...u))),ff(12,14,(u,f)=>{let g=new fe;g.position.set(u,0,f);let _=Y.plush("#2f8a3a");for(let p=0;p<7;p++){let m=le(_,.8,0,.2,0,.25,.05,1);m.position.set(Math.cos(p)*.5,.3,Math.sin(p)*.5),m.rotation.set(-.5,-p,0),g.add(m)}e.add(g)});let h=[];for(let u=0;u<2;u++){let f=new fe,g=Y.plush("#5a8a6a");f.add(le(g,2,0,3,0,1.6,.9,.9));let _=new ae(new li(new ri(new A(-2.5,3.5,0),new A(-4,6,0),new A(-4.5,8,0)),12,.5,8),g);f.add(_),f.add(le(g,.8,-4.7,8.2,0,1.4,.8,.8));for(let[p,m]of[[-1.5,.6],[1.5,.6],[-1.5,-.6],[1.5,-.6]])f.add(It(g,.45,.45,2.4,p,1.2,m,8));f.add(new ae(new li(new ri(new A(3,3,0),new A(6,2,0),new A(8,.5,0)),12,.4,8),g)),f.position.set(u?30:-35,0,-45-u*10),f.scale.setScalar(.9),f.userData.sp=u?-.8:.7,u&&(f.rotation.y=Math.PI),e.add(f),h.push(f)}k.updaters.push((u,f)=>h.forEach(g=>{g.position.x+=g.userData.sp*f,Math.abs(g.position.x)>60&&(g.userData.sp*=-1,g.rotation.y+=Math.PI),g.position.y=Math.abs(Math.sin(u*1.5))*.2}));let d=new ae(new Rt(20,12,8),new Zt({visible:!1}));return d.position.set(.35,.09,-1).normalize().multiplyScalar(300),e.add(zs(d,i.skyLine)),e},amb:[[5,8,()=>{let i=k.volcanoTop;for(let e=0;e<2;e++)k.props.floatHeart(i,6)}]],tapGround(i){k.props.egg(i)},tapSky(i){k.props.egg(new A(i.x,0,zt(i.z,-3,2)))}}];var Kt={sound:!0,voice:!0,key:1,onLater:null,onDur:null},$t=null,kr=null,ah=null,Gr=null,th=null;function fs(){if(!Kt.sound)return null;try{if(!$t){let i=window.AudioContext||window.webkitAudioContext;if(!i)return null;$t=new i,kr=$t.createGain(),kr.gain.value=.6;let e=$t.createDynamicsCompressor();kr.connect(e),e.connect($t.destination),ah=$t.createBuffer(1,$t.sampleRate,$t.sampleRate);let t=ah.getChannelData(0);for(let a=0;a<t.length;a++)t[a]=Math.random()*2-1;let n=$t.sampleRate*2.2,s=$t.createBuffer(2,n,$t.sampleRate);for(let a=0;a<2;a++){let o=s.getChannelData(a);for(let l=0;l<n;l++)o[l]=(Math.random()*2-1)*Math.pow(1-l/n,3)}let r=$t.createConvolver();r.buffer=s,Gr=$t.createGain(),Gr.gain.value=.22,Gr.connect(r),r.connect(e)}return $t.state==="suspended"&&$t.resume(),$t}catch{return null}}function Je(i,e,t,n="sine",s=.2,r,a=!0){let o=fs();if(!o)return;let l=o.currentTime+Math.max(0,e||0),c=o.createOscillator(),h=o.createGain();c.type=n,c.frequency.setValueAtTime(i,l),r&&c.frequency.exponentialRampToValueAtTime(r,l+t),h.gain.setValueAtTime(1e-4,l),h.gain.exponentialRampToValueAtTime(s,l+.012),h.gain.exponentialRampToValueAtTime(1e-4,l+t),c.connect(h),h.connect(kr),a&&h.connect(Gr),c.start(l),c.stop(l+t+.05)}function qn(i,e,t=.2,n="bandpass",s=1200,r,a=1){let o=fs();if(!o||!ah)return;let l=o.currentTime+Math.max(0,i||0),c=o.createBufferSource();c.buffer=ah;let h=o.createBiquadFilter();h.type=n,h.frequency.setValueAtTime(s,l),r&&h.frequency.exponentialRampToValueAtTime(r,l+e),h.Q.value=a;let d=o.createGain();d.gain.setValueAtTime(1e-4,l),d.gain.exponentialRampToValueAtTime(t,l+.01),d.gain.exponentialRampToValueAtTime(1e-4,l+e),c.connect(h),h.connect(d),d.connect(kr),d.connect(Gr),c.start(l,Math.random()*.4),c.stop(l+e+.05)}var $e={click:()=>Je(900,0,.05,"square",.03,null,!1),pop:()=>{Je(420,0,.1,"sine",.3,1300),qn(0,.05,.1,"highpass",3e3)},bloop:()=>Je(260,0,.2,"sine",.25,800),boing:()=>{Je(180,0,.3,"sine",.3,560),Je(560,.14,.25,"triangle",.12,260)},sparkle:()=>[1568,2093,2637,3136].forEach((i,e)=>Je(i,e*.045,.25,"triangle",.07)),chime:()=>[1047,1319,1568,2093].forEach((i,e)=>Je(i,e*.07,.6,"sine",.1)),giggle:()=>[700,880,760,960,820,1040].forEach((i,e)=>Je(i,e*.065,.07,"triangle",.11,i*1.15)),magic:()=>{Je(500,0,.6,"triangle",.1,1600),[1319,1568,2093].forEach((i,e)=>Je(i,.2+e*.07,.4,"sine",.07))},turbo:()=>{Je(90,0,1.4,"sawtooth",.07,700),qn(0,1.4,.25,"bandpass",200,2600,1.5)},warp:()=>{Je(70,0,2,"sawtooth",.06,1400),Je(140,0,2,"square",.025,2600),qn(0,2,.25,"bandpass",200,5e3,1.2),Je(1300,1.9,.6,"sine",.14,300),qn(1.9,.8,.3,"lowpass",2400,200)},boom:()=>{qn(0,.7,.4,"lowpass",900,100),Je(110,0,.5,"sine",.32,40)},launch:()=>qn(0,.55,.12,"highpass",1500,5e3),chomp:()=>{Je(180,0,.08,"square",.1,90),Je(170,.13,.08,"square",.1,85)},crack:()=>{qn(0,.08,.35,"bandpass",2500),qn(.07,.06,.25,"bandpass",3500)},shutter:()=>{qn(0,.04,.4,"highpass",2500),qn(.09,.05,.3,"highpass",2e3)},wrong:()=>{Je(330,0,.16,"sine",.13,290),Je(290,.16,.22,"sine",.13,250)},ding:i=>{Je(784*Math.pow(1.122,i),0,.45,"sine",.18),Je(1568*Math.pow(1.122,i),0,.3,"triangle",.05)},star:i=>{Je(988+i*30,0,.3,"sine",.14),Je(1480+i*40,.06,.25,"triangle",.06)},fanfare:()=>[[523,0],[659,.12],[784,.24],[1047,.36],[784,.56],[1047,.68]].forEach(([i,e])=>{Je(i,e,.32,"square",.045),Je(i,e,.4,"triangle",.1)}),evolve:()=>{for(let i=0;i<20;i++)Je(300*Math.pow(1.09,i),i*.08,.22,"triangle",.07);Je(200,0,1.7,"sine",.1,1600)},ring:()=>{for(let i=0;i<4;i++)Je(1200,i*.2,.08,"square",.04),Je(1500,i*.2+.09,.08,"square",.04)},whale:()=>{Je(220,0,1.5,"sine",.18,140),Je(160,1.3,1.3,"sine",.15,240)},splash:()=>{qn(0,.35,.3,"bandpass",900,300,1),Je(300,0,.2,"sine",.2,700)},grow:()=>Je(300,0,.5,"triangle",.12,900),hum:()=>Je(300,0,2.6,"sine",.05,620),birthday:()=>[[392,0,.2],[392,.25,.15],[440,.42,.35],[392,.8,.35],[523,1.2,.35],[494,1.6,.6]].forEach(([i,e,t])=>Je(i,e,t,"triangle",.14))},_M=118,xM=[0,-1,2,-1,4,-1,2,-1,3,-1,5,-1,4,2,-1,-1,0,-1,2,4,5,-1,7,-1,6,5,4,2,4,-1,-1,-1],vM=[261.63,293.66,329.63,392,440],nh=(i,e)=>vM[i%5]*Math.pow(2,Math.floor(i/5))*e,rh=null,ih=0,sh=0;function Pm(){let i=fs();i&&(go(),ih=0,sh=i.currentTime+.06,rh=setInterval(()=>{if($t)for(;sh<$t.currentTime+.2;){let e=sh-$t.currentTime,t=ih,n=Kt.key;t%4===0&&Je(150,e,.22,"sine",.38,45,!1),t%4===2&&qn(e,.05,.06,"highpass",7e3),t%8===4&&qn(e,.14,.11,"bandpass",1800);let s=xM[t];s>=0&&(Je(nh(s,n),e,.24,"triangle",.08),Je(nh(s,n)*2,e,.12,"sine",.025)),t%8===0&&Je(nh(0,n)/2,e,.45,"sine",.15,null,!1),t%8===4&&Je(nh(2,n)/2,e,.45,"sine",.12,null,!1),ih=(ih+1)%32,sh+=60/_M/2}},40))}function go(){rh&&(clearInterval(rh),rh=null)}function ks(i,e=1){let t=fs();if(th){let r=th;th=null;try{r.g.gain.setTargetAtTime(1e-4,t?t.currentTime:0,.6),setTimeout(()=>r.o.forEach(a=>a.stop()),2500)}catch{}}if(!i||!t)return;let n=t.createGain();n.gain.value=1e-4,n.connect(kr),n.connect(Gr);let s=[196*e,246.9*e,293.7*e,392*e].map((r,a)=>{let o=t.createOscillator();o.type="sine",o.frequency.value=r;let l=t.createOscillator(),c=t.createGain();return l.frequency.value=.07+a*.03,c.gain.value=r*.004,l.connect(c),c.connect(o.frequency),l.start(),o.connect(n),o.start(),o});n.gain.setTargetAtTime(.022,t.currentTime,2),th={g:n,o:s}}function _o(i){window.NaveVoz&&window.NaveVoz.suspend(i),$t&&(i?$t.suspend():$t.resume())}var pf=null;function Cm(){try{let i=speechSynthesis.getVoices();pf=i.find(e=>/pt[-_]BR/i.test(e.lang)&&/female|luciana|francisca|vitoria|google/i.test(e.name))||i.find(e=>/pt[-_]BR/i.test(e.lang))||i.find(e=>/^pt/i.test(e.lang))||null}catch{}}"speechSynthesis"in window&&(Cm(),speechSynthesis.onvoiceschanged=Cm);function mf(i){if(!Kt.voice||!Kt.sound)return;let e=window.NaveVoz;if(e&&e.say(i,t=>Kt.onDur&&Kt.onDur(t))){try{speechSynthesis.cancel()}catch{}return}Im(i)}window.NaveVoz&&(window.NaveVoz.fallback=i=>Im(i));function Im(i){if(!(!Kt.voice||!Kt.sound||!("speechSynthesis"in window)))try{speechSynthesis.cancel();let e=i.replace(/\p{Extended_Pictographic}|️/gu,"").trim();if(!e)return;let t=new SpeechSynthesisUtterance(e);t.lang="pt-BR",t.rate=.98,t.pitch=1.25,pf&&(t.voice=pf),speechSynthesis.speak(t)}catch{}}function xo(){try{speechSynthesis.cancel()}catch{}window.NaveVoz&&window.NaveVoz.hush()}var De=i=>document.querySelector(i),zm=i=>[...document.querySelectorAll(i)],yM="8015",Hm=[{n:"VERMELHO",c:"#ff2f45"},{n:"AZUL",c:"#2f7dff"},{n:"AMARELO",c:"#ffd21f"},{n:"VERDE",c:"#22c96a"},{n:"ROSA",c:"#ff6fc0"},{n:"ROXO",c:"#8f5bff"},{n:"LARANJA",c:"#ff8418"}],Lm=["","UM","DOIS","TR\xCAS","QUATRO","CINCO","SEIS"],MM=i=>{i=i.slice();for(let e=i.length-1;e>0;e--){let t=Math.random()*(e+1)|0;[i[e],i[t]]=[i[t],i[e]]}return i},km="naveEstelar2",Qt={stars:0,pal:0,world:0,visited:{}};try{Object.assign(Qt,JSON.parse(localStorage.getItem(km)||"{}"))}catch{}var To=()=>{try{localStorage.setItem(km,JSON.stringify(Qt))}catch{}},vf=[0,6,16,30,50],Gm=i=>{let e=1;return vf.forEach((t,n)=>{i>=t&&(e=n+1)}),e},SM=["","","Uau! A sua nave evoluiu! Ganhou aletas e luzes coloridas!","Incr\xEDvel! Agora a nave deixa um rastro de arco-\xEDris!","Que demais! A nave ganhou uma coroa de rainha!","Nave LEND\xC1RIA! Agora ela tem uma estrelinha amiga!"],I={world:zt(Qt.world|0,0,7),t:0,started:!1,kid:!1,night:!1,nightK:0,music:!1,musicEnd:0,danceK:0,weather:null,weatherT:0,weatherIdx:-1,warp:null,shake:0,turbo:0,mission:null,missionType:0,talkUntil:0,talkWho:"",lastInput:0,friendTaps:0,look:new ie,lookT:-9,visitor:null,lastSurprise:-1,evolving:null,level:Gm(Qt.stars),photos:[],photoReq:!1,idleN:0,envNight:0},je={jy:0,jv:0,sq:0,blink:0,bt:2,wave:0,eat:0,joy:0,lx:0,ly:0,lift:0},An={enter:1,loop:0},Wr=new A(-2.3,2.15,.3),Qn=new A(1.95,0,.5),Mo={y:2.5,z:9.2,ly:1.95},Rf=De("#c");lm(Rf);k.glowTexture=sf();var{scene:kt,camera:Nn,sky:uh,sun:Vs,hemi:gf,sparks:Ct,streaks:oh}=k,dh=50,wo=2,Cf=120,Ht=mm();kt.add(Ht.root);Ht.root.scale.setScalar(.82);Ht.setLevel(I.level);Ht.setPaint(Hr[Qt.pal%Hr.length]);var ph=new $c(44);kt.add(ph.mesh);var qr=lf(2.2);qr.scale.set(2.3,1.6,1.8);qr.visible=!1;kt.add(qr);var So=new wr("#fff3d0",0,24,.5,.6,1.2);kt.add(So,So.target);var Gs=wm();Gs.visible=!1;kt.add(Gs);var Vm=[0,1,2].map(i=>{let e=new wr(hn[i*2],0,30,.32,.5,1);return kt.add(e,e.target),e}),EM=Vm.map((i,e)=>{let t=new ae(new si(1.1,1,32,1,!0).translate(0,-.5,0).rotateX(-Math.PI/2),new Zt({color:hn[e*2],transparent:!0,opacity:.14,blending:jt,depthWrite:!1,side:Pt}));return t.visible=!1,kt.add(t),t}),Ao=new fe;kt.add(Ao);var an=null,Lt={w:null,group:null},vh=null,Pf=null;function Ro(){let i=innerWidth,e=innerHeight,t=De("#dock").getBoundingClientRect(),n=Math.max(220,e-(t.height||0)),s=window.devicePixelRatio||1,r=wo===2?Math.min(s,1.75):wo===1?Math.min(s,1.3):1,a=i/n<1;a?(Wr.set(-1.2,3.6,.3),Qn.set(1.15,0,.7),Object.assign(Mo,{y:2.4,z:7.7,ly:2.3})):(Wr.set(-2.6,2.1,.3),Qn.set(2.2,0,.5),Object.assign(Mo,{y:2.5,z:9.2,ly:1.95})),an&&an.root.position.copy(Qn),cm(i,e,n,r,a?58:52),dh=Nn.fov;let o=De("#hud");Cf=o.offsetTop+o.offsetHeight+80}var Hi=i=>new de(i);function mh(i,e){let t=e?1:0,n=(s,r,a)=>Hi(s).lerp(Hi(r),a*t);return{top:n(i.top,"#02030c",.86),mid:n(i.mid,"#070b26",.82),bot:n(i.bot,"#03040f",.82),sunCol:Hi(i.sunCol).multiplyScalar(e?.15:1),sunDir:new A(...i.sun).normalize(),sunSize:i.sunSize,stars:e?Math.max(i.stars,1.3):i.stars,nebula:e?Math.max(i.nebula,.35):i.nebula,haze:i.haze*(e?.5:1),glow:i.glow*(e?.25:1),fog:n(i.fog[0],"#060818",.82),keyCol:Hi(e?"#8fa8ff":i.key[0]),keyI:i.key[1]*(e?.32:1),keyPos:new A(...i.key[2]).normalize().multiplyScalar(16),hs:e?Hi(i.hemi[0]).lerp(Hi("#2a3a7a"),.7):Hi(i.hemi[0]),hg:Hi(i.hemi[1]).multiplyScalar(e?.4:1),hi:i.hemi[2]*(e?.5:1),exposure:i.exposure,bloom:i.bloom+(e?.2:0)}}function If(i){let e=vh,t=Pf,n=uh.u,s=(r,a)=>Wt(r,a,i);n.cTop.value.copy(e.top).lerp(t.top,i),n.cMid.value.copy(e.mid).lerp(t.mid,i),n.cBot.value.copy(e.bot).lerp(t.bot,i),n.sunCol.value.copy(e.sunCol).lerp(t.sunCol,i),n.sunDir.value.copy(e.sunDir),n.sunSize.value=e.sunSize,n.stars.value=s(e.stars,t.stars),n.nebula.value=s(e.nebula,t.nebula),n.haze.value=s(e.haze,t.haze),n.glowAmt.value=s(e.glow,t.glow),kt.fog.color.copy(e.fog).lerp(t.fog,i),Vs.color.copy(e.keyCol).lerp(t.keyCol,i),Vs.intensity=s(e.keyI,t.keyI),Vs.position.copy(e.keyPos),gf.color.copy(e.hs).lerp(t.hs,i),gf.groundColor.copy(e.hg).lerp(t.hg,i),gf.intensity=s(e.hi,t.hi),k.renderer.toneMappingExposure=e.exposure,k.bloom.strength=s(e.bloom,t.bloom)}var Bn=[];function tn(i,e={}){let t=Object.assign({o:i,v:new A,t:0,life:6,g:0,bounce:0,floor:0,spin:new A,s0:i.scale.x,fadeOut:!0},e);return Ao.add(i),t.tap&&(i.userData.tap=n=>t.tap(t,n)),Bn.push(t),t}function fi(i){i.dead||(i.dead=!0,Ao.remove(i.o),Br(i.o))}function bM(i){Bn.forEach(e=>{(!i||e.tag!==i)&&fi(e)}),Bn=Bn.filter(e=>!e.dead)}function TM(i){for(let e of Bn)if(!e.dead){if(e.t+=i,e.upd){if(e.upd(e,i)===!1){fi(e);continue}}else e.v.y-=e.g*i,e.o.position.addScaledVector(e.v,i),e.bounce&&e.o.position.y<e.floor&&(e.o.position.y=e.floor,e.v.y=Math.abs(e.v.y)>.8?-e.v.y*e.bounce:0,e.v.x*=.85,e.v.z*=.85,e.onBounce&&Math.abs(e.v.y)>.8&&e.onBounce(e)),e.o.rotation.x+=e.spin.x*i,e.o.rotation.y+=e.spin.y*i,e.o.rotation.z+=e.spin.z*i;e.life-e.t<.4&&e.fadeOut&&e.o.scale.setScalar(e.s0*Math.max(.01,(e.life-e.t)/.4)),e.t>e.life&&fi(e)}Bn=Bn.filter(e=>!e.dead)}var Dm=i=>Bn.filter(e=>e.tag===i&&!e.dead).length;function yf(i,e){Ct.burst(i.x,i.y,i.z,26,e,3.2),k.fx.ring(i,e),$e.pop()}k.sfx=$e;Kt.onDur=i=>{I.talkUntil=I.t+i+.1};k.fx={ring(i,e="#ffffff"){let t=new ae(new Ft(1,.035,8,48),new Zt({color:new de(e).multiplyScalar(2),transparent:!0,blending:jt,depthWrite:!1}));t.position.copy(i),t.position.y+=.05,t.rotation.x=-Math.PI/2,t.scale.setScalar(.1),tn(t,{life:.7,fadeOut:!1,upd:n=>{let s=n.t/.7;t.scale.setScalar(.1+s*1.6),t.material.opacity=1-s}})},rainbowRing(i){hn.forEach((e,t)=>{let n=new ae(new Ft(1,.06,8,64),new Zt({color:new de(e).multiplyScalar(1.6),transparent:!0,blending:jt,depthWrite:!1}));n.position.copy(i),n.lookAt(Nn.position),tn(n,{life:1.1,fadeOut:!1,upd:s=>{let r=Math.max(0,s.t-t*.05)/1;n.scale.setScalar(.1+r*(1.6-t*.12)),n.material.opacity=1-r}})})}};k.props={bounce(i,e,t=1){let n=i==="rock"?Tm():i==="star"?rf(!1):_m();i==="star"&&n.scale.setScalar(.45),i==="rock"&&n.scale.setScalar(U(.8,1.5)),n.position.set(e.x,Math.max(e.y,0)+.4,e.z);let s=Hs[I.world].id==="lua";tn(n,{v:new A(U(-1.6,1.6)*t,U(4,7),U(-1,1.2)*t),g:s?3.2:13,bounce:.62,floor:.2,life:s?7:4.5,spin:new A(U(-4,4),U(-4,4),U(-4,4)),onBounce:()=>Je(U(300,500),0,.12,"sine",.08,U(600,900))})},balloonRise(i){let e=af(i||it(Hm).c);e.position.set(U(-6,6),-1,U(-4,1));let t=e.position.x;tn(e,{life:14,upd:n=>{n.o.position.y+=.9*k.dt,n.o.position.x=t+Math.sin(n.t*1.3)*.3,n.o.rotation.z=Math.sin(n.t*1.3)*.1},tap:n=>{yf(n.o.position,n.o.userData.mat.color.getStyle()),yh(n.o.position,30),fi(n)}})},bubbleUp(i,e,t){let n=U(.15,.38),s=lf(n);s.position.set(i,e,t);let r=U(.6,1.1),a=U(tt);tn(s,{life:10,upd:o=>{o.o.position.y+=r*k.dt,o.o.position.x+=Math.sin(o.t*2+a)*.3*k.dt,o.o.scale.setScalar(n*Math.min(1,o.t*5))},tap:o=>{yf(o.o.position,"#dff8ff"),fi(o)},fadeOut:!1})},growFlower(i){let e=Bn.filter(n=>n.tag==="flower"&&!n.dead);e.length>=12&&fi(e[0]);let t=eh(it(["#ff6fa8","#ffb340","#9b7bff","#ff4f6a","#4dc3ff","#ffffff","#ffe14d"]));t.position.set(i.x,0,i.z),t.rotation.y=U(tt),$e.grow(),tn(t,{tag:"flower",life:1e9,fadeOut:!1,upd:n=>{let s=ls(zt(n.t/.8,0,1));if(n.o.scale.set(1.3,Math.max(.01,s*1.3),1.3),n.o.userData.head.scale.setScalar(Math.max(.01,ls(zt((n.t-.4)/.5,0,1)))),n.o.rotation.z=Math.sin(I.t*1.5+n.o.position.x)*.05,!n.pp&&n.t>.6){n.pp=1;let r=n.o.localToWorld(new A(0,1,0));Ct.burst(r.x,r.y,r.z,18,["#fff9c0","#ffffff"],2),Je(1320,0,.25,"triangle",.08)}}})},butterfly(i){let e=fo(it(["#ff6fa8","#ffb340","#5fd0ff","#b48cff"]));e.position.copy(i);let t=new A(U(-1.5,1.5),U(.5,1.2),U(-1,.5));tn(e,{life:6,upd:n=>{n.o.position.addScaledVector(t,k.dt),n.o.position.y+=Math.sin(n.t*4)*.01;let s=Math.sin(n.t*18)*.9;n.o.userData.wings[0].rotation.y=s,n.o.userData.wings[1].rotation.y=-s}})},floatHeart(i,e=1){let t=gm(it(["#ff4f8a","#ff7ab8","#b46bff","#ff4f5e","#ffb3d9"]));t.scale.setScalar(.45*e),t.position.copy(i);let n=new A(U(-1.2,1.2)*e,U(1.5,2.6)*e,U(-.6,.6)*e);tn(t,{life:2.6,upd:s=>{s.o.position.addScaledVector(n,k.dt),n.multiplyScalar(1-k.dt*.6),s.o.rotation.y+=k.dt*3}})},snowman(i){if(Dm("snow")>=4){k.sparks.burst(i.x,.5,i.z,30,"#ffffff",3),$e.chime();return}let e=vm();e.position.set(i.x,0,i.z),e.rotation.y=U(-.5,.5),$e.boing(),Ct.burst(i.x,.4,i.z,40,"#ffffff",3.5,{g:4}),tn(e,{tag:"snow",life:1e9,fadeOut:!1,w:0,upd:t=>{t.o.scale.setScalar(Math.max(.01,ls(zt(t.t*1.8,0,1)))),t.w>0&&(t.w-=k.dt,t.o.rotation.z=Math.sin(t.w*30)*.15)},tap:t=>{t.w=.6,$e.giggle(),st("Brrr! O boneco de neve deu oi!","\u26C4"),Ct.burst(t.o.position.x,1.6,t.o.position.z,20,"#ffffff",2)}})},egg(i){if(Dm("egg")>=5){Ct.burst(i.x,.5,i.z,20,"#fff07a",2.5);return}let e=xm();e.position.set(i.x,5,zt(i.z,-6,2.5)),$e.whoosh?.(),tn(e,{tag:"egg",life:1e9,fadeOut:!1,st:0,vy:0,upd:t=>{let n=k.dt;if(t.st===0)t.vy-=18*n,t.o.position.y+=t.vy*n,t.o.position.y<=0&&(t.o.position.y=0,t.st=1,t.t0=t.t,Je(200,0,.15,"sine",.2,120),Ct.burst(t.o.position.x,.1,t.o.position.z,12,"#e8d8b0",1.5));else if(t.st===1){let s=t.t-t.t0;if(t.o.rotation.z=Math.sin(s*30)*.25*Math.min(1,s),s>1.3){t.st=2,t.t0=t.t,$e.crack(),Ct.burst(t.o.position.x,.4,t.o.position.z,30,["#fff6df","#9be37a"],3),t.o.visible=!1;let r=zr("dino");r.root.scale.setScalar(.32),r.root.position.copy(t.o.position),Ao.add(r.root),t.baby=r,t.dir=Math.random()<.5?-1:1,st(it(["Nasceu um dinossaurinho!","Olha que fofinho!","Bem-vindo, bebezinho!"]),"\u{1F95A}")}}else{let s=t.t-t.t0,r=t.baby;if(r.root.scale.setScalar(.32*Math.min(1,s*3)),uo(r,I.t,{blink:0,joy:s<1,talk:0,eat:0,lx:0,ly:0,wave:s<1,dance:0,jumpY:Math.abs(Math.sin(s*7))*.25,squash:0}),s>1.2&&(r.root.position.x+=t.dir*1.6*k.dt,r.root.rotation.y=t.dir*Math.PI/2),s>5)return Ao.remove(r.root),Br(r.root),!1}}})},slider(){let i=zr("penguin");i.root.scale.setScalar(.38);let e=Math.random()<.5;i.root.position.set(e?-16:16,.2,U(-6,-2)),i.root.rotation.set(-Math.PI/2+.2,0,e?-Math.PI/2:Math.PI/2),tn(i.root,{life:9,fadeOut:!1,upd:t=>{if(t.o.position.x+=(e?4:-4)*k.dt,Math.random()<.4&&Ct.spawn({x:t.o.position.x,y:.15,z:t.o.position.z,vy:U(.3,1),color:"#ffffff",size:.15,life:.5}),uo(i,I.t,{blink:0,joy:!0,talk:0,eat:0,lx:0,ly:0,wave:0,dance:0,jumpY:0,squash:0}),Math.abs(t.o.position.x)>18)return!1}})}};function yh(i,e=60,t=4){Ct.burst(i.x,i.y,i.z,e,hn.concat(["#ffffff"]),t,{g:2.5,drag:1.4,life:1.6})}var Nm=0;function st(i,e,t={}){let n=De("#bub");De("#bubFace").textContent=e||"\u{1F4AC}",De("#bubT").textContent=i;let s=De("#bubSw");t.sw?(s.style.background=t.sw,s.hidden=!1):s.hidden=!0,n.classList.remove("pop","dim"),n.offsetWidth,n.classList.add("pop","show"),clearTimeout(Nm),Nm=setTimeout(()=>n.classList.add("dim"),Math.max(4500,i.length*90)),I.talkWho=t.who||(Lt.w&&e===Lt.w.face?"friend":"other"),I.talkUntil=I.t+zt(i.length*.065,1,6),mf(i)}function Gi(i,e,t,n){let s=De("#card");s.querySelector(".ci").textContent=t||"",s.querySelector(".ct").textContent=i,s.querySelector(".cs").textContent=e||"",s.classList.toggle("small",!!n),s.classList.remove("show"),s.offsetWidth,s.classList.add("show")}function Lf(i="#ffffff",e=700){let t=De("#flash");t.style.background=i,t.animate([{opacity:1},{opacity:0}],{duration:e,easing:"ease-out"})}function gh(i){let e=i.clone().project(Nn);return{x:(e.x+1)/2*k.W,y:(1-e.y)/2*k.H}}function Yr(i,e){let t=e&&e.isVector3?gh(e):e||{x:k.W/2,y:k.PH/2};for(let n=0;n<i;n++)setTimeout(()=>wM(t.x+U(-14,14),t.y+U(-10,10)),n*150)}function wM(i,e){let t=document.createElement("div");t.className="fly",t.textContent="\u2B50",document.body.appendChild(t);let n=De("#starIco").getBoundingClientRect(),s=n.left+n.width/2,r=n.top+n.height/2,a=t.animate([{transform:`translate(${i}px,${e}px) scale(.4)`,opacity:0},{transform:`translate(${i+(s-i)*.15}px,${e-90}px) scale(1.7) rotate(90deg)`,opacity:1,offset:.3},{transform:`translate(${s}px,${r}px) scale(.7) rotate(360deg)`,opacity:1}],{duration:950,easing:"cubic-bezier(.45,0,.25,1)"});a.onfinish=()=>{t.remove(),AM()}}function AM(){Qt.stars++,To(),Mh();let i=De("#starPill");i.classList.remove("bump"),i.offsetWidth,i.classList.add("bump"),$e.star(Qt.stars%12)}function Mh(){De("#starN").textContent=Qt.stars;let i=I.level;De("#lvlN").textContent=i;let e=vf[i-1],t=vf[i];De("#lvlBar").style.width=(t===void 0?100:zt((Qt.stars-e)/(t-e)*100,0,100))+"%"}var yo=[],Fn=(i,e)=>yo.push({t:I.t+i,fn:e});function RM(){if(!yo.length)return;let i=yo.filter(e=>e.t<=I.t);i.length&&(yo=yo.filter(e=>e.t>I.t),i.forEach(e=>{try{e.fn()}catch(t){console.error(t)}}))}var Wm=[];function Xm(i){let e=Hs[i];I.world=i,Qt.world=i,To(),Lt.group&&(kt.remove(Lt.group),Br(Lt.group)),an&&(kt.remove(an.root),Br(an.root)),bM(),k.updaters=[],k.pickables=[],I.mission=null,I.visitor=null,I.weather=null,Xr.clear(),Ct.clear();let t=e.build(e);kt.add(t),Lt={w:e,group:t},an=zr(e.kind),an.root.position.copy(Qn),an.root.rotation.y=-.3,kt.add(an.root),an.hit.userData.tap=()=>qm(),vh=mh(e.env,!1),Pf=mh(e.env,!0),If(I.nightK),Zc(),I.envNight=I.nightK,kt.fog.near=e.env.fog[1],kt.fog.far=e.env.fog[2],Kt.key=e.key,ks(I.started,e.key),Wm=(e.amb||[]).map(([n,s,r])=>({a:n,b:s,fn:r,t:U(n*.3,s*.6)})),An.enter=0,ph.pts=[],qr.visible=!!e.water,De("#where span").textContent=`${e.icon} ${(k.W<560?e.short:e.name).toUpperCase()}`,Gi(e.name,`${e.fname}, ${e.fdesc}`,e.icon),Fn(1,()=>{st(e.hello,e.face),je.wave=3,je.jv=5.5}),Qt.visited[e.id]||(Qt.visited[e.id]=1,To(),Fn(3,()=>Yr(2,Sh())))}k.onSkyTap=(i,e)=>{st(i,Lt.w.face),$e.chime();let t=e.scale.clone(),n=I.t,s=setInterval(()=>{let r=I.t-n;e.scale.copy(t).multiplyScalar(1+Math.sin(r*20)*.06*Math.max(0,1-r)),r>1&&(e.scale.copy(t),clearInterval(s))},16)};var Sh=()=>Qn.clone().add(new A(0,1.5+je.jy,.3));function CM(i){let e=I.t,t=Wr.x,n=Wr.y+Math.sin(e*2)*.12,s=Wr.z,r=Math.sin(e*1.4)*.05,a=Math.sin(e*1.1)*.08,o=.82;if(I.warp&&I.warp.t<1.9){let l=zt(I.warp.t/.9,0,1);t+=Math.pow(l,2.4)*22,n+=l*1.2,r+=.12*l}else if(An.enter<1){let l=Us(An.enter);t=Wt(-16,t,l),n=Wt(n+3,n,l),s=Wt(-4,s,l),r+=Wt(-.3,0,l)}if(I.turbo>0){let l=1.9-I.turbo;l<.75?t+=Math.pow(l/.75,2)*20:t=Wt(-18,Wr.x,Us((l-.75)/1.15)),a+=Math.sin(l*9)*.3}if(An.loop>0){let l=1-An.loop/1;r+=lo(l)*tt,n+=Math.sin(l*Math.PI)*1.4}if(I.evolving){let l=I.evolving.t,c=l<.7?Us(l/.7):l>2.7?1-lo(zt((l-2.7)/.7,0,1)):1;t=Wt(t,0,c),n=Wt(n,3.1,c),s=Wt(s,2.6,c),o*=1+c*.25,l>.6&&l<2.7&&(a+=lo((l-.6)/2.1)*tt*3)}i.position.set(t,n,s),i.rotation.set(a,0,r),i.scale.setScalar(o)}function PM(){I.turbo>0||An.loop>0||I.evolving||(An.loop=1,$e.boing(),Je(660,.2,.12,"square",.04),Ct.burst(Ht.root.position.x,Ht.root.position.y,Ht.root.position.z,30,["#ffe36b","#ffffff"],3),st(it(["Iuhuuu! Cambalhota!","Que divertido!","Uiii! A nave deu uma pirueta!"]),"\u{1F467}"))}Ht.hit.userData.tap=()=>PM();function qm(){let i=Lt.w;je.jv=6.5,je.joy=1.1,$e.giggle();let e=Sh();for(let t=0;t<4;t++)k.props.floatHeart(e,.8);st(i.lines[I.friendTaps%i.lines.length],i.face),I.friendTaps++,I.friendTaps%4===0&&Yr(1,e)}var Mf=class{constructor(){this.pools={},this.items=[]}pool(e){if(this.pools[e])return this.pools[e];let t,n;e==="stars"?(t=Qc,n=new ft({color:"#ffd54a",metalness:.7,roughness:.2,emissive:"#ffa800",emissiveIntensity:.8})):e==="hearts"?(t=jc,n=new xt({roughness:.15,clearcoat:1})):e==="petals"?(t=ho,n=new xt({roughness:.5,sheen:1,side:Pt})):(t=ho,n=new xt({roughness:.15,clearcoat:1}));let s=new Un(t,n,140);return s.count=0,s.castShadow=!0,s.frustumCulled=!1,kt.add(s),this.pools[e]=s,s}spawn(e,t,n){this.pool(e),this.items.push({kind:e,x:U(-9,9),y:U(9,12),z:U(-6,3),vy:U(1.6,2.6),rx:U(tt),ry:U(tt),sx:U(-2,2),sy:U(-3,3),s:n*U(.7,1.2),c:new de(it(t)),sway:U(tt)})}update(e){let t=new bt,n={};for(let s in this.pools)n[s]=0;this.items=this.items.filter(s=>{if(s.y-=s.vy*e,s.rx+=s.sx*e,s.ry+=s.sy*e,s.x+=Math.sin(I.t*1.5+s.sway)*.4*e,s.y<-.5)return!1;let r=this.pools[s.kind],a=n[s.kind]++;return a>=140?!1:(t.position.set(s.x,s.y,s.z),t.rotation.set(s.rx,s.ry,0),t.scale.setScalar(s.s),s.kind==="petals"&&t.scale.set(s.s,s.s*.25,s.s*.8),s.kind==="candy"&&t.scale.set(s.s*1.2,s.s,s.s),t.updateMatrix(),r.setMatrixAt(a,t.matrix),r.setColorAt(a,s.c),!0)});for(let s in this.pools){let r=this.pools[s];r.count=n[s],r.instanceMatrix.needsUpdate=!0,r.instanceColor&&(r.instanceColor.needsUpdate=!0)}}clear(){this.items=[];for(let e in this.pools)this.pools[e].count=0}},Xr=new Mf,_f=0,vo=(i,e,t)=>{for(_f+=i*e;_f>=1;)_f--,t()},Um=[{n:"CHUVA DE ESTRELAS",say:"Olha! Chuva de estrelas!",f:"\u{1F320}",spawn:i=>vo(i,9,()=>Xr.spawn("stars",["#ffffff"],.5))},{n:"CHUVA DE CORA\xC7\xD5ES",say:"Chuva de cora\xE7\xF5es! Quanto amor!",f:"\u{1F496}",spawn:i=>vo(i,9,()=>Xr.spawn("hearts",["#ff4f8a","#ff7ab8","#b46bff","#ff4f5e","#4fb8ff"],.55))},{n:"NEVE M\xC1GICA",say:"Est\xE1 nevando! Olha os floquinhos!",f:"\u2744\uFE0F",spawn:i=>{for(let e=0;e<4;e++)Ct.spawn({x:U(-12,12),y:U(8,11),z:U(-8,4),vy:-U(.7,1.3),vx:U(-.3,.3),color:"#ffffff",size:U(.12,.22),life:9})}},{n:"ARCO-\xCDRIS GIGANTE",say:"Uau! Um arco-\xEDris gigante no c\xE9u!",f:"\u{1F308}",start(){_h(!0)},end(){_h(!1)},spawn:i=>{Math.random()<i*10&&Ct.spawn({x:U(-10,10),y:U(1,8),z:U(-8,2),color:it(hn),size:U(.2,.35),life:1.2,bright:1.5})}},{n:"CHUVA DE DOCES",say:"Chuva de doces! Hummm!",f:"\u{1F36D}",spawn:i=>vo(i,9,()=>Xr.spawn("candy",["#ff4f8a","#4dc3ff","#ffd23f","#7cf29a","#b48cff"],.22))},{n:"CHUVA DE METEOROS",say:"Chuva de meteoros! Zuuum!",f:"\u2604\uFE0F",spawn:i=>{Math.random()<i*5&&IM()}},{n:"CHUVA DE BOLHAS",say:"Bolhas por todo lado! Estoure elas!",f:"\u{1FAE7}",spawn:i=>vo(i,2.6,()=>k.props.bubbleUp(U(-5,5),-.5,U(-2,2.5)))},{n:"CHUVA DE FLORES",say:"Chuva de flores! Que cheirinho bom!",f:"\u{1F338}",spawn:i=>vo(i,12,()=>Xr.spawn("petals",["#ff9fd0","#ffffff","#ffd6ec","#ffb3c8","#ffe68a"],.14))}];function IM(){let i=U(-6,14),e=U(10,14),t=U(-10,-2),n=-U(10,14),s=-U(7,10);for(let r=0;r<18;r++)setTimeout(()=>Ct.spawn({x:i+n*r*.03,y:e+s*r*.03,z:t,vx:n*.05,vy:s*.05,color:it(["#ffe9a8","#ffc4f0","#bff6ff"]),size:.55-r*.02,life:.7,bright:2}),r*22)}var Dn=null;function _h(i){if(i){if(Dn)return;Dn=new fe,Dn.position.set(0,-1,-14),hn.forEach((e,t)=>{let n=new ae(new Ft(13-t*.55,.28,10,96,Math.PI),new Zt({color:new de(e).multiplyScalar(1.3),transparent:!0,opacity:0,fog:!1,depthWrite:!1}));Dn.add(n)}),kt.add(Dn),Dn.userData.k=0,Dn.userData.on=!0}else Dn&&(Dn.userData.on=!1)}function LM(){I.weather&&I.weather.end&&I.weather.end(),I.weatherIdx=(I.weatherIdx+1)%Um.length,I.weather=Um[I.weatherIdx],I.weatherT=8,I.weather.start&&I.weather.start(),$e.magic(),Gi(I.weather.n,"",I.weather.f,!0),st(I.weather.say,"\u{1F326}\uFE0F")}function DM(){if(I.visitor)return;let i;do i=Math.random()*Hs.length|0;while(i===I.world);let e=Hs[i];$e.ring(),st("Trim trim! Chegou visita!","\u{1F4DE}"),Fn(1.5,()=>st(`Oi, Maria Clara! Eu sou ${/^o /.test(e.fdesc)?"o":"a"} ${e.fname}, ${e.fdesc}! Vim te dar um abra\xE7o!`,e.face,{who:"visitor"}));let t=hf(),n=zr(e.kind);n.root.scale.setScalar(.36),n.root.position.y=-.05,t.userData.seat.add(n.root),t.scale.setScalar(.95);let s=new A(k.portrait?.2:-.2,k.portrait?3.4:3.6,2.2);t.position.set(-14,9,-4);let r=0;I.visitor=tn(t,{life:10,fadeOut:!1,tap:()=>{r=.9,$e.giggle();for(let a=0;a<4;a++)k.props.floatHeart(t.position.clone().add(new A(0,.6,0)),.7);st("Hihihi! Que c\xF3cegas!",e.face,{who:"visitor"})},upd:a=>{let o=a.t,l=k.dt;if(o<1.6?t.position.lerpVectors(new A(-14,9,-4),s,Us(o/1.6)):o<8?(t.position.set(s.x+Math.sin(o*1.2)*.8,s.y+Math.sin(o*2)*.2,s.z),Math.random()<l*2&&k.props.floatHeart(t.position.clone().add(new A(0,.5,0)),.6)):(t.position.x+=12*l,t.position.y+=5*l),r>0&&(r-=l),t.rotation.y+=l*(r>0?12:1.2),t.rotation.z=Math.sin(o*2)*.06,t.rotation.x=.38,t.userData.lights.forEach((c,h)=>c.material.emissive.setHSL((o*.4+h/10)%1,1,.6)),uo(n,I.t,{blink:I.t%3.3<.12,joy:r>0,talk:I.talkWho==="visitor"&&I.t<I.talkUntil?.5+.5*Math.sin(I.t*22):0,eat:0,lx:0,ly:0,wave:!0,dance:I.danceK,jumpY:0,squash:0}),n.root.rotation.y=-t.rotation.y,o>9.5)return I.visitor=null,!1}})}function Ym(i){let e=Nn.position.z-i,t=2*Math.atan(Math.tan(dh*Math.PI/360)*Nn.aspect);return Math.tan(t/2)*e}function Om(i){let e=[],t=0;for(;e.length<i&&t<400;){t++;let n=U(.5,2.5),s=Ym(n)*.82,r=new A(U(-s,s),U(1.1,5),n),a=gh(r);a.y<Cf+20||a.y>k.PH-50||a.x<40||a.x>k.W-40||e.some(o=>{let l=gh(o);return Math.hypot(l.x-a.x,l.y-a.y)<95})||e.push(r)}for(;e.length<i;)e.push(new A(U(-2,2),U(2,4),1));return e}function NM(){I.mission&&(I.mission=null,Bn.filter(i=>i.tag==="m").forEach(fi))}function UM(){if(I.mission){let n=I.mission;st(n.again,n.face,n.o||{});return}let i=["stars","colors","feed"][I.missionType++%3],e=Lt.w,t={type:i,n:0,face:e.face};I.mission=t,$e.magic(),i==="stars"?(t.need=5,t.again="Encontre as 5 estrelas! Toque nelas!",t.face="\u2B50",Gi("MISS\xC3O","Ache 5 estrelas!","\u2B50",!0),st("Miss\xE3o das estrelas! Encontre as 5 estrelas escondidas!","\u2B50"),Om(5).forEach((n,s)=>{let r=rf();r.position.copy(n),r.scale.setScalar(.01),tn(r,{tag:"m",life:1e9,fadeOut:!1,upd:a=>{let o=a.t-.5-s*.18;a.o.scale.setScalar(Math.max(.01,.95*ls(zt(o*2.5,0,1)))),a.o.rotation.y=Math.sin(I.t*1.6+s)*.55,a.o.rotation.z=Math.sin(I.t*1.1+s)*.2,a.o.position.y=n.y+Math.sin(I.t*2+s)*.12},tap:a=>{a.t<.6||(fi(a),t.n++,Ct.burst(n.x,n.y,n.z,50,["#ffe36b","#ffffff","#ffb000"],4),k.fx.ring(a.o.position,"#ffe36b"),$e.ding(t.n),Yr(1,a.o.position),t.n>=t.need?Fn(.9,()=>{I.mission===t&&Sf()}):st(`${Lm[t.n]}!`,"\u2B50"))}})})):i==="colors"?(t.need=3,Gi("MISS\xC3O","Cores dos bal\xF5es!","\u{1F388}",!0),Zm(t)):(t.need=3,t.again=`Toque na comidinha para me dar ${e.foodN}!`,Gi("MISS\xC3O",`Alimente ${e.fname}!`,"\u{1F37D}\uFE0F",!0),st(`Estou com fome! Toque na comidinha para me dar 3 ${e.foodN}!`,e.face),je.wave=2,Om(3).forEach((n,s)=>{let r=bm(e.food);r.position.copy(n),r.scale.setScalar(.01);let a=en("#ffffff",1.6,.35);r.add(a),tn(r,{tag:"m",life:1e9,fadeOut:!1,fly:-1,upd:o=>{if(o.fly<0){o.o.scale.setScalar(Math.max(.01,1.4*ls(zt((o.t-.4-s*.2)*2.5,0,1)))),o.o.rotation.y=I.t*1.2+s,o.o.position.y=n.y+Math.sin(I.t*2.5+s)*.12;return}o.fly+=k.dt;let l=Math.min(1,o.fly/.7),c=Sh().add(new A(0,-.2,.4));if(o.o.position.lerpVectors(n,c,lo(l)),o.o.position.y+=Math.sin(l*Math.PI)*1.6,o.o.scale.setScalar(1.4*(1-l*.6)),l>=1){je.eat=.8,$e.chomp(),t.n++;for(let h=0;h<3;h++)k.props.floatHeart(c,.7);return Yr(1,c),t.n>=t.need?Fn(1,()=>{I.mission===t&&Sf()}):st(`${Lm[t.n]}! Nham nham!`,e.face),!1}},tap:o=>{o.fly>=0||o.t<.5||(o.fly=0,Je(500,0,.3,"triangle",.08,900))}})}))}function Zm(i){let e=MM(Hm).slice(0,4),t=it(e);i.target=t,i.again=`Toque no bal\xE3o ${t.n}!`,i.face="\u{1F388}",i.o={sw:t.c},st(`Toque no bal\xE3o ${t.n}!`,"\u{1F388}",{sw:t.c});let n=1.6,s=Ym(n)*.72,r=3.3;for(let a=0;a<20;a++){let o=gh(new A(0,r,n));if(o.y<Cf+60)r-=.2;else if(o.y>k.PH*.62)r+=.2;else break}e.forEach((a,o)=>{let l=af(a.c),c=new A(Wt(-s,s,o/3),r,n);l.position.copy(c),l.scale.setScalar(.01),tn(l,{tag:"m",life:1e9,fadeOut:!1,wig:0,leave:!1,upd:h=>{let d=h.t-o*.12;if(h.leave)return h.o.position.y+=5*k.dt,h.o.position.y<14;h.o.scale.setScalar(Math.max(.01,1.15*ls(zt(d*2.5,0,1)))),h.o.position.set(c.x+(h.wig>0?Math.sin(h.wig*40)*.12:0),c.y+Math.sin(I.t*2+o)*.1,c.z),h.wig>0&&(h.wig-=k.dt)},tap:h=>{I.mission!==i||h.leave||h.t<.4||(a===t?(fi(h),yf(h.o.position,a.c),yh(h.o.position,40),i.n++,Yr(1,h.o.position),st(`Isso! Esse \xE9 o ${t.n}!`,"\u{1F388}",{sw:t.c}),Bn.forEach(d=>{d.tag==="m"&&(d.leave=!0)}),Fn(1.5,()=>{I.mission===i&&(Bn.filter(d=>d.tag==="m").forEach(fi),i.n>=i.need?Sf():Zm(i))})):(h.wig=.5,$e.wrong(),st(`Esse \xE9 o ${a.n}. Cad\xEA o ${t.n}?`,"\u{1F388}",{sw:t.c})))}})})}function Sf(){let i=Lt.w;I.mission=null,Bn.filter(e=>e.tag==="m").forEach(fi),Gi("MISS\xC3O COMPLETA!","Voc\xEA conseguiu!","\u{1F3C6}"),$e.fanfare(),I.shake=.25;for(let e=0;e<4;e++)Fn(e*.35,()=>Jm(U(-5,5),U(5,8),U(-6,-2)));Yr(3,{x:k.W/2,y:k.PH*.45}),je.jv=7,je.joy=1.5,Fn(.3,()=>st(it(["Parab\xE9ns, Maria Clara! Voc\xEA \xE9 demais!","Uhuuul! Miss\xE3o completa!","Que incr\xEDvel! Voc\xEA conseguiu!"]),i.face))}function Jm(i,e,t){$e.boom();let n=U(1),s=new de;for(let r=0;r<90;r++){let a=U(tt),o=Math.acos(U(-1,1)),l=U(4.5,6.5);s.setHSL((n+U(-.06,.06)+1)%1,1,.6),Ct.spawn({x:i,y:e,z:t,vx:Math.sin(o)*Math.cos(a)*l,vy:Math.cos(o)*l,vz:Math.sin(o)*Math.sin(a)*l,color:s,size:U(.25,.4),life:U(1.2,1.9),g:2.2,drag:1.6,bright:2})}I.shake=Math.max(I.shake,.12)}function OM(i){$e.launch();let e=U(-8,-3),t=U(5,9),n=0,s=setInterval(()=>{n+=.35,Ct.spawn({x:i+U(-.05,.05),y:n,z:e,vy:-1,color:"#ffe9a8",size:.3,life:.5,bright:2}),n>=t&&(clearInterval(s),Jm(i,n,e))},16)}var Ef=[()=>{st("Olha! Uma baleia que voa pelo c\xE9u!","\u{1F40B}"),$e.whale();let i=Mm();i.scale.setScalar(1.15),i.position.set(20,6.5,-7);let e=0;tn(i,{life:26,fadeOut:!1,upd:t=>{if(t.o.position.x-=1.7*k.dt,t.o.position.y=6.5+Math.sin(t.t*.9)*.5,t.o.rotation.z=Math.sin(t.t*.9)*.06,i.userData.tail.rotation.y=Math.sin(t.t*3)*.3,e+=k.dt,e>1.4){e=0;let n=t.o.localToWorld(new A(-.4,1,0));for(let s=0;s<26;s++)Ct.spawn({x:n.x,y:n.y,z:n.z,vx:U(-1,1),vy:U(3,5),vz:U(-1,1),color:it(["#bff6ff","#ffffff","#7ef9ff"]),size:U(.15,.3),life:1.4,g:5});$e.bloop()}return t.o.position.x>-22},tap:t=>{$e.giggle(),$e.whale(),Ct.burst(t.o.position.x,t.o.position.y+1,t.o.position.z,40,"#bff6ff",4)}})},()=>{st("Fogos de artif\xEDcio! Que lindo!","\u{1F386}");for(let i=0;i<10;i++)Fn(i*.42,()=>OM(U(-7,7)))},()=>{st("Um disco voador! Ele quer levar o amigo para passear!","\u{1F6F8}");let i=hf();i.position.set(-15,8,-3);let e=Sm();e.visible=!1,i.add(e),$e.hum(),tn(i,{life:9,fadeOut:!1,upd:t=>{let n=t.t,s=new A(Qn.x,5.6,Qn.z);n<1.4?i.position.lerpVectors(new A(-15,8,-3),s,Us(n/1.4)):n<5.4?(i.position.copy(s),e.visible=!0,e.scale.set(1,5.5,1),e.material.uniforms.t.value=n,je.lift=Math.sin(zt((n-1.6)/3.6,0,1)*Math.PI)*1.8,!t.g&&n>2&&(t.g=1,$e.giggle(),st("Uiii! Estou voando!",Lt.w.face))):(e.visible=!1,je.lift=0,i.position.x+=12*k.dt,i.position.y+=4*k.dt,t.gift||(t.gift=1,FM(new A(Qn.x-1.2,5,Qn.z+.6)))),i.rotation.y+=k.dt*2,i.userData.lights.forEach((r,a)=>r.material.emissive.setHSL((n*.5+a/10)%1,1,.6))}})},()=>{st("Festa de bal\xF5es! Estoure todos!","\u{1F388}");for(let i=0;i<18;i++)Fn(i*.12,()=>k.props.balloonRise())},()=>{st("Um cometa gigante! Fa\xE7a um pedido!","\u2604\uFE0F"),$e.turbo(),I.shake=.4;let i=en("#ffffff",5,1);i.position.set(-22,12,-16),tn(i,{life:5,fadeOut:!1,upd:e=>{e.o.position.x+=11*k.dt,e.o.position.y-=2.4*k.dt;for(let t=0;t<6;t++)Ct.spawn({x:e.o.position.x+U(-.4,.4),y:e.o.position.y+U(-.4,.4),z:e.o.position.z,vx:-U(1,4),vy:U(-.5,.8),color:it(["#ffffff","#bff6ff","#ffe9a8","#ffc4f0"]),size:U(.4,.9),life:1.4,bright:1.6});return e.o.position.x<24}})},()=>{st("Hora da festa! Viva a Maria Clara!","\u{1F382}"),$e.birthday();let i=Em();i.position.set(0,0,2.2),i.scale.setScalar(.01),tn(i,{life:5,fadeOut:!0,upd:e=>{e.o.scale.setScalar(Math.max(.01,1.1*ls(zt(e.t*1.6,0,1)))),e.o.rotation.y=Math.sin(e.t)*.3,i.userData.flames.forEach((t,n)=>t.scale.setScalar(.45+Math.sin(I.t*20+n)*.08))}});for(let e=0;e<6;e++)Fn(e*.25,()=>{for(let t of[-1,1])for(let n=0;n<26;n++)Ct.spawn({x:t*6,y:0,z:1,vx:-t*U(2,4.5),vy:U(6,9),vz:U(-1,1),color:it(hn),size:U(.2,.35),life:2,g:6,drag:.6,bright:1.5})})},()=>{st("Um arco-\xEDris m\xE1gico apareceu!","\u{1F308}"),$e.magic(),_h(!0),Fn(7,()=>_h(!1));for(let i=0;i<12;i++)Fn(i*.3,()=>k.fx.rainbowRing(new A(U(-4,4),U(2,5),U(-2,1))))},()=>{st("Uma nuvem de borboletas!","\u{1F98B}");for(let i=0;i<16;i++){let e=fo(it(["#ff6fa8","#ffb340","#5fd0ff","#b48cff","#ffe14d"])),t=i/16*tt,n=U(1.5,3.2),s=U(.8,3.6);tn(e,{life:9,upd:r=>{let a=t+r.t*1.1;r.o.position.set(Qn.x+Math.cos(a)*n,s+Math.sin(r.t*2+i)*.4,Qn.z+Math.sin(a)*n*.6),r.o.rotation.z=-a;let o=Math.sin(r.t*18+i)*.9;e.userData.wings[0].rotation.y=o,e.userData.wings[1].rotation.y=-o}})}$e.chime()}];function FM(i){let e=ym();e.position.copy(i),tn(e,{life:3.4,fadeOut:!1,vy:0,upd:t=>{if(!t.land)t.vy-=14*k.dt,t.o.position.y+=t.vy*k.dt,t.o.position.y<=0&&(t.o.position.y=0,t.land=t.t,$e.boing());else{let n=t.t-t.land;if(t.o.rotation.z=Math.sin(n*30)*.1,n>.9){$e.fanfare(),yh(t.o.position.clone().add(new A(0,.6,0)),100,5);for(let s=0;s<5;s++)k.props.bounce("star",t.o.position,1);return st("Era um presente! Cheio de estrelas!","\u{1F381}"),!1}}}})}function BM(){let i;do i=Math.random()*Ef.length|0;while(i===I.lastSurprise);I.lastSurprise=i,Gi("SURPRESA!","","\u{1F381}",!0),Ef[i]()}function zM(){De("#planets").innerHTML=Hs.map((i,e)=>`<button class="pl${e===I.world?" cur":""}" data-w="${e}"><span class="d" style="background:radial-gradient(circle at 32% 28%,rgba(255,255,255,.7) 0,rgba(255,255,255,0) 36%),radial-gradient(circle at 70% 75%,rgba(0,0,0,.35),rgba(0,0,0,0) 55%),linear-gradient(145deg,${i.disc[0]},${i.disc[1]})">${i.icon}</span>${Qt.visited[i.id]?'<span class="v">\u2B50</span>':""}<span>${e===I.world?"\u{1F4CD} ":""}${i.short}</span></button>`).join(""),De("#map").classList.add("show"),$e.magic(),st("Para qual planeta vamos, Maria Clara?","\u{1F5FA}\uFE0F")}function HM(i){if(!(I.warp||I.evolving)){if(i===I.world){st("J\xE1 estamos aqui! Que tal outro planeta?",Lt.w.face);return}NM(),I.warp={t:0,to:i,done:!1},$e.warp(),I.shake=.3,st(it(["Segura firme! L\xE1 vamos n\xF3s!","Contagem: tr\xEAs, dois, um... j\xE1!","Rumo \xE0s estrelas!"]),"\u{1F680}")}}function kM(){I.turbo>0||(I.turbo=1.9,I.shake=.7,$e.turbo(),Gi("TURBO!","","\u26A1",!0),st(it(["Turbo! Zuuuum!","Segura firme! Turb\xF4\xF4\xF4!","Mais r\xE1pido que um cometa!"]),"\u{1F680}"))}function GM(){I.night=!I.night;let i=De("[data-a=noite]");i.querySelector(".i").textContent=I.night?"\u2600\uFE0F":"\u{1F319}",i.querySelector(".l").textContent=I.night?"DIA":"NOITE",i.classList.toggle("on",I.night),$e.magic(),st(I.night?"Boa noite! Olha os vagalumes brilhando!":"Bom dia, Maria Clara! O sol voltou!",Lt.w.face)}function Df(i){I.music=!I.music,De("[data-a=musica]").classList.toggle("on",I.music),I.music?(Pm(),I.musicEnd=I.t+30,st("Hora de dan\xE7ar! Todo mundo dan\xE7ando!",Lt.w.face)):(go(),i||st("A festa acabou! Que dan\xE7a linda!",Lt.w.face))}function VM(){Qt.pal=(Qt.pal+1)%Hr.length,To();let i=Hr[Qt.pal];Ht.setPaint(i),$e.splash();let e=Ht.root.position;Ct.burst(e.x,e.y,e.z,60,[i.body,i.wing,i.acc],5,{g:3}),An.loop=1,st(`Agora a nave \xE9 ${i.n.toLowerCase()}!`,"\u{1F3A8}",{sw:i.body})}function WM(){$e.shutter(),I.photoReq=!0,st(it(["Xiiis! Que foto linda!","Sorria! Click!","Essa foto ficou incr\xEDvel!"]),"\u{1F4F8}")}function XM(i){let e=Lt.w;I.photos.unshift(i),I.photos.length>24&&I.photos.pop();let t=De("#pola");t.querySelector("img").src=i,t.querySelector("span").textContent=`Maria Clara \xB7 ${e.icon} ${e.short}`,t.classList.remove("go"),t.offsetWidth,t.classList.add("go")}var qM={viajar:zM,turbo:kM,noite:GM,musica:()=>Df(!1),clima:LM,amigo:DM,missao:UM,surpresa:BM,pintar:VM,foto:WM};function YM(i){I.evolving={t:0,l:i,done:!1},$e.evolve(),st("Olha! O que est\xE1 acontecendo com a nave?","\u2728"),An.loop=0,I.turbo=0}function ZM(i){let e=I.evolving;e.t+=i;let t=Ht.root.position;if(e.t<1.7)for(let n=0;n<4;n++){let s=U(tt),r=U(-1,1),a=U(2.5,4);Ct.spawn({x:t.x+Math.cos(s)*a,y:t.y+r*a*.6,z:t.z+Math.sin(s)*a,vx:-Math.cos(s)*a*1.5,vy:-r*a*.9,vz:-Math.sin(s)*a*1.5,color:it(["#ffffff","#ffe36b","#7ef9ff","#ff8ae2"]),size:U(.2,.35),life:.65,bright:2})}e.t>1.7&&!e.done&&(e.done=!0,I.level=e.l,Ht.setLevel(e.l),Mh(),Lf("#ffffff",900),I.shake=.5,yh(t,160,7),Gi(`N\xCDVEL ${e.l}!`,"SUA NAVE EVOLUIU!","\u{1F680}"),$e.fanfare(),Fn(.5,()=>st(SM[e.l]||"A nave evoluiu!","\u{1F467}"))),e.t>3.5&&(I.evolving=null)}var Vr=new ka,Fm=new ie,JM=new kn(new A(0,1,0),0);function $M(i,e){if(I.lastInput=I.t,I.look.set(i,e),I.lookT=I.t,Fm.set(i/k.W*2-1,-(e/k.H)*2+1),Vr.setFromCamera(Fm,Nn),I.warp||I.evolving){let r=Vr.ray.at(8,new A);Ct.burst(r.x,r.y,r.z,14,"#ffffff",2);return}let t=[...Bn.filter(r=>r.o.userData.tap).map(r=>r.o),an.hit,Ht.hit,...k.pickables],n=Vr.intersectObjects(t,!0);for(let r of n){let a=r.object;for(;a&&!a.userData.tap;)a=a.parent;if(a){a.userData.tap(r);return}}if(I.music){let r=Vr.ray.at(7,new A);for(let a=0;a<4;a++)Ct.spawn({x:r.x,y:r.y,z:r.z,vx:U(-1,1),vy:U(1,2.5),color:it(hn),size:.4,life:1.2,bright:1.6})}let s=Vr.ray.intersectPlane(JM,new A);s&&s.distanceTo(Nn.position)<26&&s.z>-16?Lt.w.tapGround(s):Lt.w.tapSky(Vr.ray.at(11,new A))}Rf.addEventListener("pointerdown",i=>{i.preventDefault(),I.started&&(fs(),$M(i.clientX,i.clientY))},{passive:!1});var KM=["Toque em mim!","Vamos apertar um bot\xE3o colorido?","Que tal uma miss\xE3o? Aperte a estrela!","Toque no c\xE9u! Tem surpresas!","Aperte a m\xFAsica para a gente dan\xE7ar!","Vamos visitar outro planeta? Aperte o foguete!"],lh=new A,ch=new A(0,2.4,9.6),Bm=new A(0,2.05,0),hh=0,xf=0,QM=0;function $m(i){I.t+=i,k.t=I.t,k.dt=i,RM(),I.nightK=Wt(I.nightK,I.night?1:0,1-Math.pow(.04,i)),I.danceK=Wt(I.danceK,I.music?1:0,1-Math.pow(.05,i)),vh&&(If(I.nightK),(Math.abs(I.nightK-I.envNight)>.3||Math.abs(I.nightK-(I.night?1:0))<.02&&Math.abs(I.envNight-(I.night?1:0))>.05)&&(Zc(),I.envNight=I.nightK)),uh.u.time.value=I.t,of().uniforms.time.value=I.t,I.music&&I.t>I.musicEnd&&Df(!0),I.shake=Math.max(0,I.shake-i*1.5),An.enter<1&&(An.enter=Math.min(1,An.enter+i/1.3)),An.loop>0&&(An.loop=Math.max(0,An.loop-i)),I.turbo>0&&(I.turbo=Math.max(0,I.turbo-i)),CM(Ht.root),Ht.upd(I.t,I.turbo>0||I.warp&&I.warp.t<1.9?1:0,An.loop>0||I.turbo>0||I.music||!!I.warp||!!I.evolving),qr.position.copy(Ht.root.position),qr.visible=!!(Lt.w&&Lt.w.water)&&!I.warp;let e=Ht.root.localToWorld(lh.set(-1.7,0,0));if(Ht.level>=3&&ph.push(e),ph.update(Ht.level>=3&&I.started&&!(I.warp&&I.warp.t>.8&&I.warp.t<2.2)),I.turbo>0||I.warp&&I.warp.t<.9)for(let n=0;n<3;n++)Ct.spawn({x:e.x,y:e.y+U(-.15,.15),z:e.z+U(-.15,.15),vx:-U(6,12),color:it(["#ffe36b","#ff9d2e","#ffffff"]),size:U(.2,.4),life:.4,bright:2});if(So.intensity=I.nightK*70,So.position.copy(Ht.root.position).add(lh.set(1,0,.2)),So.target.position.copy(Ht.root.position).add(lh.set(6,-2.5,1)),an){je.bt-=i,je.bt<=0&&(je.blink=.13,je.bt=U(2,5)),je.blink-=i,je.wave-=i,je.eat-=i,je.joy-=i,(je.jy>0||je.jv!==0)&&(je.jv-=24*i,je.jy+=je.jv*i,je.jy<=0&&(je.jy=0,je.jv=0,je.sq=.22)),je.sq=Math.max(0,je.sq-i*1.3);let n=I.t-I.lookT<2.5,s=n?I.look.x/k.W*2-1:I.visitor?0:-.6,r=n?I.look.y/k.H*2-1:I.visitor?-.8:-.2;je.lx=Wt(je.lx,zt(s*1.4-.3,-1,1),.1),je.ly=Wt(je.ly,zt(r,-1,1),.1),uo(an,I.t,{blink:je.blink>0,joy:je.joy>0,talk:I.talkWho==="friend"&&I.t<I.talkUntil?.5+.5*Math.sin(I.t*22):0,eat:je.eat>0?je.eat:0,lx:je.lx,ly:je.ly,wave:je.wave>0,dance:I.danceK,jumpY:je.jy*.5+je.lift,squash:je.sq})}I.nightK>.05&&Math.random()<I.nightK*.8&&Ct.spawn({x:U(-9,9),y:U(.4,4.5),z:U(-8,3),vx:U(-.3,.3),vy:U(-.1,.3),vz:U(-.2,.2),color:Lt.w&&Lt.w.water?"#7ffcff":"#e9ff7a",size:U(.12,.22),life:U(2,3.5),bright:2.2});let t=I.danceK;if(Gs.visible=t>.02,Gs.visible&&(Gs.position.set(0,Wt(10,6.2,Us(t)),-.5),Gs.rotation.y+=i*1.5),Vm.forEach((n,s)=>{n.intensity=t*28,n.position.copy(Gs.position);let r=I.t*(.9+s*.3)+s*2.1;n.target.position.set(Math.cos(r)*4,0,Math.sin(r)*2.5),n.color.setHSL((I.t*.2+s/3)%1,1,.55);let a=EM[s];if(a.visible=t>.02,a.visible){a.position.copy(n.position),a.lookAt(n.target.position);let o=n.position.distanceTo(n.target.position);a.scale.set(1.5,1.5,o),a.material.color.copy(n.color),a.material.opacity=.07*t}}),t>.3&&Math.random()<i*3){let n=Sh();Ct.spawn({x:n.x+U(-.6,.6),y:n.y+.5,z:n.z,vy:1.5,vx:U(-.5,.5),color:it(hn),size:.35,life:1.4,bright:1.6})}if(I.warp){let n=I.warp;n.t+=i;let s=n.t>.25&&n.t<2.5;oh.amt=s?Math.min(1,(n.t-.25)*2,(2.6-n.t)*2):0,oh.update(i,Nn,40+n.t*50,I.t*.1);let r=n.t>.9&&n.t<1.9;Lt.group&&(Lt.group.visible=!r),an&&(an.root.visible=!r),uh.mesh.visible=!r,Ht.root.visible=!r,kt.background=r?new de("#04020f"):null,n.t>=1.9&&!n.done&&(n.done=!0,Xm(n.to),Lf("#ffffff",900),kt.background=null,uh.mesh.visible=!0,Ht.root.visible=!0),Nn.fov=dh+Math.sin(zt(n.t/2.6,0,1)*Math.PI)*22,Nn.updateProjectionMatrix(),n.t>=2.7&&(I.warp=null,oh.amt=0,oh.lines.visible=!1,Nn.fov=dh,Nn.updateProjectionMatrix())}if(I.evolving&&ZM(i),I.started&&!I.warp&&Lt.w){for(let n of Wm)n.t-=i,n.t<=0&&(n.t=U(n.a,n.b),n.fn());I.weather&&(I.weatherT-=i,I.weather.spawn(i),I.weatherT<=0&&(I.weather.end&&I.weather.end(),I.weather=null))}if(Dn){let n=Dn.userData;n.k=zt(n.k+(n.on?i:-i)*.8,0,1),Dn.children.forEach(s=>s.material.opacity=n.k*.85),!n.on&&n.k<=0&&(kt.remove(Dn),Br(Dn),Dn=null)}k.updaters.forEach(n=>n(I.t,i)),TM(i),Xr.update(i),Ct.update(i),I.started&&!I.evolving&&!I.warp&&!I.mission&&Gm(Qt.stars)>I.level&&YM(I.level+1),I.started&&!I.warp&&!I.evolving&&I.t-I.lastInput>18&&(I.lastInput=I.t,I.idleN++,I.idleN%3===0&&Ef[3](),je.wave=2.5,je.jv=4.5,st(it(KM),Lt.w.face)),ch.set(0,Mo.y,Mo.z),Nn.position.set(ch.x+Math.sin(I.t*.13)*.7,ch.y+Math.sin(I.t*.21)*.18,ch.z+Math.sin(I.t*.09)*.4),I.shake>.01&&Nn.position.add(lh.set(U(-1,1),U(-1,1),0).multiplyScalar(I.shake*.25)),Bm.set(Math.sin(I.t*.13)*.25,Mo.ly,0),Nn.lookAt(Bm)}var xh=performance.now();function Km(i){let e=Math.min(.05,Math.max(0,(i-xh)/1e3));xh=i;try{if($m(e),k.composer.render(),I.photoReq){I.photoReq=!1;try{XM(Rf.toDataURL("image/jpeg",.82))}catch{}Lf("#ffffff",500)}}catch(t){console.error(t)}if(I.started&&wo>0&&I.t>3&&(hh++,xf+=e,hh>=90)){let t=xf/hh;hh=0,xf=0,QM++,t>1/32&&jM(wo-1)}requestAnimationFrame(Km)}function jM(i){wo=i,i<=1&&(Vs.shadow.mapSize.set(1024,1024),Vs.shadow.map&&(Vs.shadow.map.dispose(),Vs.shadow.map=null)),i===0&&(k.bloom.enabled=!1,k.renderer.shadowMap.enabled=!1,kt.traverse(e=>{e.material&&(Array.isArray(e.material)?e.material:[e.material]).forEach(t=>t.needsUpdate=!0)})),Ro()}var e1=/iPad|iPhone|iPod/.test(navigator.userAgent)||navigator.platform==="MacIntel"&&navigator.maxTouchPoints>1,Co=()=>matchMedia("(display-mode: standalone)").matches||matchMedia("(display-mode: fullscreen)").matches||navigator.standalone===!0,Nf=()=>document.fullscreenElement||document.webkitFullscreenElement,t1=!!(document.fullscreenEnabled||document.webkitFullscreenEnabled);function Uf(){let i=document.documentElement,e=i.requestFullscreen||i.webkitRequestFullscreen;if(!(!e||Nf()))try{let t=e.call(i,{navigationUI:"hide"});t&&t.catch&&t.catch(()=>{})}catch{}}function n1(){let i=document.exitFullscreen||document.webkitExitFullscreen;if(i&&Nf())try{let e=i.call(document);e&&e.catch&&e.catch(()=>{})}catch{}}var bf=null;async function Qm(){try{"wakeLock"in navigator&&(bf=await navigator.wakeLock.request("screen"))}catch{}}var Eo=0;function Of(){if(I.kid)try{for(;Eo<4;)history.pushState({mc:Eo},"",location.href),Eo++}catch{}}function jm(){I.kid=!0,Co()||Uf(),Qm(),Of()}addEventListener("popstate",()=>{I.kid&&(Eo=Math.max(0,Eo-1),Of())});document.addEventListener("pointerdown",Of,!0);addEventListener("beforeunload",i=>{I.kid&&(i.preventDefault(),i.returnValue="")});function eg(){I.kid&&t1&&!Co()&&!Nf()&&!De("#adult").classList.contains("show")&&!De("#pad").classList.contains("show")&&De("#resume").classList.add("show")}document.addEventListener("fullscreenchange",eg);document.addEventListener("webkitfullscreenchange",eg);De("#resumeBtn").addEventListener("click",()=>{Uf(),De("#resume").classList.remove("show")});document.addEventListener("visibilitychange",()=>{document.visibilityState==="visible"?(xh=performance.now(),I.kid&&Qm(),_o(!1)):(xo(),_o(!0))});document.addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("gesturestart",i=>i.preventDefault());document.addEventListener("dblclick",i=>i.preventDefault());document.addEventListener("touchmove",i=>{i.target.closest(".scroll")||i.preventDefault()},{passive:!1});document.addEventListener("keydown",i=>{I.kid&&(i.key==="F5"||i.ctrlKey&&/[rwRW]/.test(i.key))&&i.preventDefault()});var Tf=0,bo=De("#lockBtn");bo.addEventListener("pointerdown",i=>{i.preventDefault(),i.stopPropagation(),bo.classList.add("hold"),clearTimeout(Tf),Tf=setTimeout(()=>{bo.classList.remove("hold"),i1()},1500)});["pointerup","pointerleave","pointercancel"].forEach(i=>bo.addEventListener(i,()=>{clearTimeout(Tf),bo.classList.remove("hold")}));var ki="",wf=0;De("#keys").innerHTML=["1","2","3","4","5","6","7","8","9","\u2715","0","\u232B"].map(i=>`<button class="k${/\d/.test(i)?"":" s"}" data-k="${i}">${i}</button>`).join("");var fh=()=>zm("#dots i").forEach((i,e)=>i.classList.toggle("f",e<ki.length));function i1(){ki="",fh(),De("#pad").classList.add("show"),$e.click(),tg()}function Af(){De("#pad").classList.remove("show"),clearTimeout(wf)}function tg(){clearTimeout(wf),wf=setTimeout(Af,25e3)}De("#keys").addEventListener("click",i=>{let e=i.target.closest(".k");if(!e)return;tg();let t=e.dataset.k;if(Je(600,0,.05,"square",.03,null,!1),t==="\u2715"){Af();return}if(t==="\u232B"){ki=ki.slice(0,-1),fh();return}if(ki.length<4&&(ki+=t,fh()),ki.length===4)if(ki===yM)Af(),Eh();else{let n=De("#dots");n.classList.add("bad"),$e.wrong(),setTimeout(()=>{n.classList.remove("bad"),ki="",fh()},450)}});function Eh(){De("#aStars").textContent=Qt.stars,De("#aLvl").textContent=I.level,De("#aSound").textContent=`\u{1F50A} Som: ${Kt.sound?"ligado":"desligado"}`,De("#aVoice").textContent=`\u{1F5E3}\uFE0F Voz: ${Kt.voice?"ligada":"desligada"}`,De("#aReset").dataset.c="",De("#aReset").textContent="\u{1F504} Zerar progresso",De("#aPh").hidden=!I.photos.length,De("#aPhotos").innerHTML=I.photos.map((i,e)=>`<a href="${i}" download="maria-clara-foto-${e+1}.jpg"><img src="${i}" alt=""></a>`).join(""),De("#adult").classList.add("show")}De("#aBack").addEventListener("click",()=>{De("#adult").classList.remove("show"),I.kid&&!Co()&&Uf()});De("#aSound").addEventListener("click",()=>{Kt.sound=!Kt.sound,Kt.sound?(_o(!1),ks(!0,Kt.key)):(go(),xo(),ks(!1),_o(!0)),Eh()});De("#aVoice").addEventListener("click",()=>{Kt.voice=!Kt.voice,Kt.voice||xo(),Eh()});De("#aReset").addEventListener("click",i=>{let e=i.currentTarget;if(!e.dataset.c){e.dataset.c="1",e.textContent="Toque de novo para confirmar";return}Qt.stars=0,Qt.visited={},Qt.pal=0,To(),I.level=1,Ht.setLevel(1),Ht.setPaint(Hr[0]),Mh(),Eh()});De("#aExit").addEventListener("click",()=>{I.kid=!1,De("#adult").classList.remove("show"),I.music&&Df(!0),go(),ks(!1),xo();try{bf&&bf.release()}catch{}n1(),De("#bye").classList.add("show"),Co()&&setTimeout(()=>{try{window.close()}catch{}},600)});De("#againBtn").addEventListener("click",()=>{De("#bye").classList.remove("show"),jm(),ks(!0,Kt.key),st("Oba! Vamos brincar mais!",Lt.w.face)});var Ws=null;function ng(){if(Co()||I.started)return;let i=De("#installBox"),e=De("#installBtn"),t=De("#installHint");i.hidden=!1,Ws?(e.hidden=!1,t.innerHTML="Instale para abrir direto em tela cheia, sem barra do navegador."):e1?(e.hidden=!0,t.innerHTML="\u{1F4F1} <b>Instalar no iPhone:</b> toque em <b>Compartilhar</b> \u2B06\uFE0F e depois em <b>Adicionar \xE0 Tela de In\xEDcio</b>."):(e.hidden=!0,t.innerHTML="\u{1F4F2} <b>Instalar como app:</b> no menu <b>\u22EE</b> do navegador, toque em <b>Instalar app</b> ou <b>Adicionar \xE0 tela inicial</b>.")}addEventListener("beforeinstallprompt",i=>{i.preventDefault(),Ws=i,ng()});addEventListener("appinstalled",()=>{Ws=null,De("#installBtn").hidden=!0,De("#installHint").innerHTML="\u2705 Instalado! Agora abra pelo \xEDcone \u{1F680} na tela inicial."});De("#installBox").addEventListener("click",i=>i.stopPropagation());De("#installBtn").addEventListener("click",async i=>{if(i.stopPropagation(),!!Ws){try{Ws.prompt(),(await Ws.userChoice).outcome==="accepted"&&(De("#installBtn").hidden=!0,De("#installHint").innerHTML="\u2705 Instalado! Agora abra pelo \xEDcone \u{1F680} na tela inicial.")}catch{}Ws=null}});setTimeout(ng,2500);function s1(){I.started||(I.started=!0,fs(),$e.fanfare(),jm(),document.body.classList.add("on"),De("#start").classList.add("hide"),setTimeout(()=>De("#start").classList.remove("show"),700),mf("Vamos l\xE1, Maria Clara!"),window.NaveVoz&&setTimeout(()=>window.NaveVoz.preload(),8e3),requestAnimationFrame(()=>{Ro(),Xm(I.world),ks(!0,Kt.key),I.lastInput=I.t}))}De("#start").addEventListener("click",s1);zm("#dock .b").forEach(i=>i.addEventListener("pointerdown",e=>{if(e.preventDefault(),!I.started)return;let t=performance.now();if(!(t-(i._t||0)<380)&&(i._t=t,i.classList.remove("press"),i.offsetWidth,i.classList.add("press"),setTimeout(()=>i.classList.remove("press"),220),fs(),$e.click(),I.lastInput=I.t,!(I.warp||I.evolving)))try{qM[i.dataset.a]()}catch(n){console.error(n)}}));De("#planets").addEventListener("click",i=>{let e=i.target.closest(".pl");e&&(De("#map").classList.remove("show"),HM(+e.dataset.w))});De("#mapX").addEventListener("click",()=>De("#map").classList.remove("show"));addEventListener("resize",Ro);addEventListener("orientationchange",()=>setTimeout(Ro,250));Ro();Mh();{let i=Hs[I.world],e=i.build(i);kt.add(e),Lt={w:i,group:e},an=zr(i.kind),an.root.position.copy(Qn),an.root.rotation.y=-.3,kt.add(an.root),an.hit.userData.tap=()=>qm(),vh=mh(i.env,!1),Pf=mh(i.env,!0),If(0),Zc(),kt.fog.near=i.env.fog[1],kt.fog.far=i.env.fog[2],De("#where span").textContent=`${i.icon} ${(k.W<560?i.short:i.name).toUpperCase()}`}De("#loading").remove();requestAnimationFrame(i=>{xh=i,requestAnimationFrame(Km)});"serviceWorker"in navigator&&location.protocol==="https:"&&navigator.serviceWorker.register("sw.js").catch(()=>{});window.__nave={st:I,G:k,save:Qt,step:i=>{for(let e=0;e<i;e++)$m(1/30)}};
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
