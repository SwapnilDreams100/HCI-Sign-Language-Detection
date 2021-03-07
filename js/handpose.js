/**
    * @license
    * Copyright 2021 Google LLC. All Rights Reserved.
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    * http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    * =============================================================================
    */
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("@tensorflow/tfjs-converter"),require("@tensorflow/tfjs-core")):"function"==typeof define&&define.amd?define(["exports","@tensorflow/tfjs-converter","@tensorflow/tfjs-core"],n):n((t=t||self).handpose={},t.tf,t.tf)}(this,(function(t,n,e){"use strict";function i(t,n,e,i){return new(e||(e=Promise))((function(o,r){function s(t){try{u(i.next(t))}catch(t){r(t)}}function a(t){try{u(i.throw(t))}catch(t){r(t)}}function u(t){var n;t.done?o(t.value):(n=t.value,n instanceof e?n:new e((function(t){t(n)}))).then(s,a)}u((i=i.apply(t,n||[])).next())}))}function o(t,n){var e,i,o,r,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return r={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(r[Symbol.iterator]=function(){return this}),r;function a(r){return function(a){return function(r){if(e)throw new TypeError("Generator is already executing.");for(;s;)try{if(e=1,i&&(o=2&r[0]?i.return:r[0]?i.throw||((o=i.return)&&o.call(i),0):i.next)&&!(o=o.call(i,r[1])).done)return o;switch(i=0,o&&(r=[2&r[0],o.value]),r[0]){case 0:case 1:o=r;break;case 4:return s.label++,{value:r[1],done:!1};case 5:s.label++,i=r[1],r=[0];continue;case 7:r=s.ops.pop(),s.trys.pop();continue;default:if(!(o=s.trys,(o=o.length>0&&o[o.length-1])||6!==r[0]&&2!==r[0])){s=0;continue}if(3===r[0]&&(!o||r[1]>o[0]&&r[1]<o[3])){s.label=r[1];break}if(6===r[0]&&s.label<o[1]){s.label=o[1],o=r;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(r);break}o[2]&&s.ops.pop(),s.trys.pop();continue}r=n.call(t,s)}catch(t){r=[6,t],i=0}finally{e=o=0}if(5&r[0])throw r[1];return{value:r[0]?r[1]:void 0,done:!0}}([r,a])}}}function r(t){return[Math.abs(t.endPoint[0]-t.startPoint[0]),Math.abs(t.endPoint[1]-t.startPoint[1])]}function s(t){return[t.startPoint[0]+(t.endPoint[0]-t.startPoint[0])/2,t.startPoint[1]+(t.endPoint[1]-t.startPoint[1])/2]}function a(t,n){void 0===n&&(n=1.5);var e=s(t),i=r(t),o=[n*i[0]/2,n*i[1]/2];return{startPoint:[e[0]-o[0],e[1]-o[1]],endPoint:[e[0]+o[0],e[1]+o[1]],palmLandmarks:t.palmLandmarks}}function u(t){var n=s(t),e=r(t),i=Math.max.apply(Math,e)/2;return{startPoint:[n[0]-i,n[1]-i],endPoint:[n[0]+i,n[1]+i],palmLandmarks:t.palmLandmarks}}function d(t,n){var e=[t.endPoint[0]-t.startPoint[0],t.endPoint[1]-t.startPoint[1]],i=[e[0]*n[0],e[1]*n[1]];return{startPoint:[t.startPoint[0]+i[0],t.startPoint[1]+i[1]],endPoint:[t.endPoint[0]+i[0],t.endPoint[1]+i[1]],palmLandmarks:t.palmLandmarks}}var h=function(){function t(t,n,i,o,r,s){this.model=t,this.width=n,this.height=i,this.iouThreshold=r,this.scoreThreshold=s,this.anchors=o.map((function(t){return[t.x_center,t.y_center]})),this.anchorsTensor=e.tensor2d(this.anchors),this.inputSizeTensor=e.tensor1d([n,i]),this.doubleInputSizeTensor=e.tensor1d([2*n,2*i])}return t.prototype.normalizeBoxes=function(t){var n=this;return e.tidy((function(){var i=e.slice(t,[0,0],[-1,2]),o=e.slice(t,[0,2],[-1,2]),r=e.add(e.div(i,n.inputSizeTensor),n.anchorsTensor),s=e.div(o,n.doubleInputSizeTensor),a=e.mul(e.sub(r,s),n.inputSizeTensor),u=e.mul(e.add(r,s),n.inputSizeTensor);return e.concat2d([a,u],1)}))},t.prototype.normalizeLandmarks=function(t,n){var i=this;return e.tidy((function(){var o=e.add(e.div(e.reshape(t,[-1,7,2]),i.inputSizeTensor),i.anchors[n]);return e.mul(o,i.inputSizeTensor)}))},t.prototype.getBoundingBoxes=function(t){return i(this,void 0,void 0,(function(){var n,i,r,s,a,u,d,h,c,f,l,p,m,v,g,P=this;return o(this,(function(o){switch(o.label){case 0:return n=e.tidy((function(){return e.mul(e.sub(t,.5),2)})),"webgl"===e.getBackend()?(r=e.env().get("WEBGL_PACK_DEPTHWISECONV"),e.env().set("WEBGL_PACK_DEPTHWISECONV",!0),i=this.model.predict(n),e.env().set("WEBGL_PACK_DEPTHWISECONV",r)):i=this.model.predict(n),s=e.squeeze(i),a=e.tidy((function(){return e.squeeze(e.sigmoid(e.slice(s,[0,0],[-1,1])))})),u=e.slice(s,[0,1],[-1,4]),d=this.normalizeBoxes(u),h=console.warn,console.warn=function(){},c=e.image.nonMaxSuppression(d,a,1,this.iouThreshold,this.scoreThreshold),console.warn=h,[4,c.array()];case 1:return f=o.sent(),l=[n,i,c,s,d,u,a],0===f.length?(l.forEach((function(t){return t.dispose()})),[2,null]):(p=f[0],m=e.slice(d,[p,0],[1,-1]),v=e.slice(s,[p,5],[1,14]),g=e.tidy((function(){return e.reshape(P.normalizeLandmarks(v,p),[-1,2])})),l.push(v),l.forEach((function(t){return t.dispose()})),[2,{boxes:m,palmLandmarks:g}])}}))}))},t.prototype.estimateHandBounds=function(t){return i(this,void 0,void 0,(function(){var n,i,r,s,a,u,d,h,c=this;return o(this,(function(o){switch(o.label){case 0:return n=t.shape[1],i=t.shape[2],r=e.tidy((function(){return e.div(e.image.resizeBilinear(t,[c.width,c.height]),255)})),[4,this.getBoundingBoxes(r)];case 1:return null===(s=o.sent())?(r.dispose(),[2,null]):(a=s.boxes.arraySync(),u=a[0].slice(0,2),d=a[0].slice(2,4),h=s.palmLandmarks.arraySync(),r.dispose(),s.boxes.dispose(),s.palmLandmarks.dispose(),[2,(f={startPoint:u,endPoint:d,palmLandmarks:h},l=[i/this.width,n/this.height],{startPoint:[f.startPoint[0]*l[0],f.startPoint[1]*l[1]],endPoint:[f.endPoint[0]*l[0],f.endPoint[1]*l[1]],palmLandmarks:f.palmLandmarks.map((function(t){return[t[0]*l[0],t[1]*l[1]]}))})])}var f,l}))}))},t}(),c={thumb:[1,2,3,4],indexFinger:[5,6,7,8],middleFinger:[9,10,11,12],ringFinger:[13,14,15,16],pinky:[17,18,19,20],palmBase:[0]};function f(t,n){var e,i=Math.PI/2-Math.atan2(-(n[1]-t[1]),n[0]-t[0]);return(e=i)-2*Math.PI*Math.floor((e+Math.PI)/(2*Math.PI))}var l=function(t,n){return[[1,0,t],[0,1,n],[0,0,1]]};function p(t,n){for(var e=0,i=0;i<t.length;i++)e+=t[i]*n[i];return e}function m(t,n){for(var e=[],i=0;i<t.length;i++)e.push(t[i][n]);return e}function v(t,n){for(var e=[],i=t.length,o=0;o<i;o++){e.push([]);for(var r=0;r<i;r++)e[o].push(p(t[o],m(n,r)))}return e}function g(t,n){var e=Math.cos(t),i=Math.sin(t),o=[[e,-i,0],[i,e,0],[0,0,1]],r=v(l(n[0],n[1]),o);return v(r,l(-n[0],-n[1]))}function P(t,n){return[p(t,n[0]),p(t,n[1])]}var b=[0,-.4],y=[0,-.1],k=[0,5,9,13,17,1,2],x=function(){function t(t,n,e,i,o,r){this.boundingBoxDetector=t,this.meshDetector=n,this.meshWidth=e,this.meshHeight=i,this.maxContinuousChecks=o,this.detectionConfidence=r,this.regionsOfInterest=[],this.runsWithoutHandDetector=0,this.maxHandsNumber=1}return t.prototype.getBoxForPalmLandmarks=function(t,n){var e=t.map((function(t){return P(t.concat([1]),n)}));return a(u(d(this.calculateLandmarksBoundingBox(e),b)),3)},t.prototype.getBoxForHandLandmarks=function(t){for(var n=a(u(d(this.calculateLandmarksBoundingBox(t),y)),1.65),e=[],i=0;i<k.length;i++)e.push(t[k[i]].slice(0,2));return n.palmLandmarks=e,n},t.prototype.transformRawCoords=function(t,n,e,i){var o,a,u,d,h=this,c=r(n),f=[c[0]/this.meshWidth,c[1]/this.meshHeight],l=t.map((function(t){return[f[0]*(t[0]-h.meshWidth/2),f[1]*(t[1]-h.meshHeight/2),t[2]]})),m=g(e,[0,0]),v=l.map((function(t){return P(t,m).concat([t[2]])})),b=(a=[[(o=i)[0][0],o[1][0]],[o[0][1],o[1][1]]],u=[o[0][2],o[1][2]],d=[-p(a[0],u),-p(a[1],u)],[a[0].concat(d[0]),a[1].concat(d[1]),[0,0,1]]),y=s(n).concat([1]),k=[p(y,b[0]),p(y,b[1])];return v.map((function(t){return[t[0]+k[0],t[1]+k[1],t[2]]}))},t.prototype.estimateHand=function(t){return i(this,void 0,void 0,(function(){var n,i,r,a,u,d,h,c,l,p,m,v,P,b,y,k,x,w,B,L;return o(this,(function(o){switch(o.label){case 0:return!0!==(n=this.shouldUpdateRegionsOfInterest())?[3,2]:[4,this.boundingBoxDetector.estimateHandBounds(t)];case 1:return null===(i=o.sent())?(t.dispose(),this.regionsOfInterest=[],[2,null]):(this.updateRegionsOfInterest(i,!0),this.runsWithoutHandDetector=0,[3,3]);case 2:this.runsWithoutHandDetector++,o.label=3;case 3:return r=this.regionsOfInterest[0],a=f(r.palmLandmarks[0],r.palmLandmarks[2]),u=s(r),d=[u[0]/t.shape[2],u[1]/t.shape[1]],h=e.image.rotateWithOffset(t,a,0,d),c=g(-a,u),l=!0===n?this.getBoxForPalmLandmarks(r.palmLandmarks,c):r,p=function(t,n,i){var o=n.shape[1],r=n.shape[2],s=[[t.startPoint[1]/o,t.startPoint[0]/r,t.endPoint[1]/o,t.endPoint[0]/r]];return e.image.cropAndResize(n,s,[0],i)}(l,h,[this.meshWidth,this.meshHeight]),m=e.div(p,255),p.dispose(),h.dispose(),"webgl"===e.getBackend()?(P=e.env().get("WEBGL_PACK_DEPTHWISECONV"),e.env().set("WEBGL_PACK_DEPTHWISECONV",!0),v=this.meshDetector.predict(m),e.env().set("WEBGL_PACK_DEPTHWISECONV",P)):v=this.meshDetector.predict(m),b=v[0],y=v[1],m.dispose(),k=b.dataSync()[0],b.dispose(),k<this.detectionConfidence?(y.dispose(),this.regionsOfInterest=[],[2,null]):(x=e.reshape(y,[-1,3]),w=x.arraySync(),y.dispose(),x.dispose(),B=this.transformRawCoords(w,l,a,c),L=this.getBoxForHandLandmarks(B),this.updateRegionsOfInterest(L,!1),[2,{landmarks:B,handInViewConfidence:k,boundingBox:{topLeft:L.startPoint,bottomRight:L.endPoint}}])}}))}))},t.prototype.calculateLandmarksBoundingBox=function(t){var n=t.map((function(t){return t[0]})),e=t.map((function(t){return t[1]}));return{startPoint:[Math.min.apply(Math,n),Math.min.apply(Math,e)],endPoint:[Math.max.apply(Math,n),Math.max.apply(Math,e)]}},t.prototype.updateRegionsOfInterest=function(t,n){if(n)this.regionsOfInterest=[t];else{var e=this.regionsOfInterest[0],i=0;if(null!=e&&null!=e.startPoint){var o=t.startPoint,r=o[0],s=o[1],a=t.endPoint,u=a[0],d=a[1],h=e.startPoint,c=h[0],f=h[1],l=e.endPoint,p=l[0],m=l[1],v=Math.max(r,c),g=Math.max(s,f),P=(Math.min(u,p)-v)*(Math.min(d,m)-g);i=P/((u-r)*(d-s)+(p-c)*(m-s)-P)}this.regionsOfInterest[0]=i>.8?e:t}},t.prototype.shouldUpdateRegionsOfInterest=function(){return this.regionsOfInterest.length!==this.maxHandsNumber||this.runsWithoutHandDetector>=this.maxContinuousChecks},t}();function w(){return i(this,void 0,void 0,(function(){return o(this,(function(t){return"https://tfhub.dev/mediapipe/tfjs-model/handdetector/1/default/1",[2,n.loadGraphModel("https://tfhub.dev/mediapipe/tfjs-model/handdetector/1/default/1",{fromTFHub:!0})]}))}))}function B(){return i(this,void 0,void 0,(function(){return o(this,(function(t){return"https://tfhub.dev/mediapipe/tfjs-model/handskeleton/1/default/1",[2,n.loadGraphModel("https://tfhub.dev/mediapipe/tfjs-model/handskeleton/1/default/1",{fromTFHub:!0})]}))}))}function L(){return i(this,void 0,void 0,(function(){return o(this,(function(t){return[2,e.util.fetch("https://tfhub.dev/mediapipe/tfjs-model/handskeleton/1/default/1/anchors.json?tfjs-format=file").then((function(t){return t.json()}))]}))}))}var I=function(){function t(t){this.pipeline=t}return t.getAnnotations=function(){return c},t.prototype.estimateHands=function(t,n){return void 0===n&&(n=!1),i(this,void 0,void 0,(function(){var i,r,s,a,u,d,h,f,l;return o(this,(function(o){switch(o.label){case 0:return i=function(t){return t instanceof e.Tensor?[t.shape[0],t.shape[1]]:[t.height,t.width]}(t),r=i[1],s=e.tidy((function(){return t instanceof e.Tensor||(t=e.browser.fromPixels(t)),e.expandDims(e.cast(t,"float32"))})),[4,this.pipeline.estimateHand(s)];case 1:if(a=o.sent(),s.dispose(),null===a)return[2,[]];for(u=a,!0===n&&(u=function(t,n){var e=t.handInViewConfidence,i=t.landmarks,o=t.boundingBox;return{handInViewConfidence:e,landmarks:i.map((function(t){return[n-1-t[0],t[1],t[2]]})),boundingBox:{topLeft:[n-1-o.topLeft[0],o.topLeft[1]],bottomRight:[n-1-o.bottomRight[0],o.bottomRight[1]]}}}(a,r)),d={},h=0,f=Object.keys(c);h<f.length;h++)l=f[h],d[l]=c[l].map((function(t){return u.landmarks[t]}));return[2,[{handInViewConfidence:u.handInViewConfidence,boundingBox:u.boundingBox,landmarks:u.landmarks,annotations:d}]]}}))}))},t}();t.HandPose=I,t.load=function(t){var n=void 0===t?{}:t,e=n.maxContinuousChecks,r=void 0===e?1/0:e,s=n.detectionConfidence,a=void 0===s?.8:s,u=n.iouThreshold,d=void 0===u?.3:u,c=n.scoreThreshold,f=void 0===c?.5:c;return i(this,void 0,void 0,(function(){var t,n,e,i,s,u;return o(this,(function(o){switch(o.label){case 0:return[4,Promise.all([L(),w(),B()])];case 1:return t=o.sent(),n=t[0],e=t[1],i=t[2],s=new h(e,256,256,n,d,f),u=new x(s,i,256,256,r,a),[2,new I(u)]}}))}))},Object.defineProperty(t,"__esModule",{value:!0})}));