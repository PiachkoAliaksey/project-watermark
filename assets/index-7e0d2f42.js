(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const a of e)if(a.type==="childList")for(const t of a.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&c(t)}).observe(document,{childList:!0,subtree:!0});function o(e){const a={};return e.integrity&&(a.integrity=e.integrity),e.referrerPolicy&&(a.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?a.credentials="include":e.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function c(e){if(e.ep)return;e.ep=!0;const a=o(e);fetch(e.href,a)}})();const q=()=>document.querySelector("#app").innerHTML=`
    <div>
      <h1>WaterMarkedImage</h1>
      <input class='load-image-input' id="upload" type="file"  accept="image/*" />
      <div id="images" style="visibility: hidden;">
        <div class='main-block-image-with-watermark'>
           <div class='transform-image'>
             <img class='imageStyle' id="originalImage" />
             <div class='hidden-block-water-mark'>
                <p id='watermark-text-edit'><p>
             </div>
             <img class='watermarkStampImg'/>
             <img class='finalImage' id="finalImage" />
           </div>
           
           <div class='create-text-watermarked-image'>
             <button id='btn-create-watermarked-image-text' class='btn-base-style'>Create text watermark logo</button>
             <button id='btn-create-watermarked-image-imageUpload'class='btn-base-style' >Create image watermark logo (upload)</button>
             <button id='btn-create-watermarked-image-imageGallery' class='btn-base-style' >Create image watermark logo (chose in current gallery)</button>
             <ul class='list-instal-text-watermark-stamp' >
                <li class='name-water-mark'>
                 <h4 class='title-name-watermark'>Name watermark</h4>
                 <input class='name-watermark' type='text' class='name-watermark' />
                 <img class='gallery-watermark' />

                 <button class='create-name-watermark' >Create</button>
                </li>
                <li  class='instal-size-position-watermark'>
                  <div class='basic-instal-text-watermark size-watermark'>
                  <h5 class='title-size'>Size</h5>
                  <input class='size-field-name-watermark' type='text' >
                  <p>%</p>
                  </div>
                  <div class='basic-instal-text-watermark color-watermark'>
                  <h5 class='title-color'>Color</h5>
                  <input class='color-field-name-watermark' type='color' >
                  </div>
                  <div class='basic-instal-text-watermark opacity-watermark'>
                  <h5 class='title-opacity'>Opacity</h5>
                  <input class='opacity-field-name-watermark'  type='number' placeholder='100'>
                  <p>%</p>
                  </div>
                  <div class='basic-instal-text-watermark position-watermark'>
                  <h5 class='title-position'>Position</h5>
                  <div class='list-btn-position'>
                  ${["&larr;","&uarr;","&rarr;","&darr;"].map((r,s)=>`<button id='${s}' class='btn-position'>${r}</button>`)}
                  </div>
                  </div> 
                </li>
                <li>
                  <button class='btn-saveAllChange-watermark-image'>Save all changes</button>
                </li>
             </ul>
            </div>
        
          </div>
           <a id="waterMarkedImage" download><button class='download-watermarked-image'>Download watermarked image </button></a>
         
      </div>
    </div>
  `,T=r=>new Promise(s=>{const o=new FileReader;o.addEventListener("load",()=>{s(o.result)}),o.readAsDataURL(r)}),E=(r,s,o=0,c=0,e="16px",a="white",t=1)=>{const m=document.createElement("canvas"),n=m.getContext("2d"),f=r.width;console.log(f);const v=r.height;return console.log(v),m.width=f,m.height=v,n.drawImage(r,0,0,f,v),n.fillStyle=`${a}`,n.textBaseline="middle",n.font=`bold ${e} serif`,n.globalAlpha=t,n.fillText(s,o,c),m.toDataURL()},$=async(r,s,o=1)=>{const c=document.createElement("canvas"),e=c.getContext("2d"),a=r.width,t=r.height;return c.width=a,c.height=t,e.drawImage(r,0,0,a,t),e.globalAlpha=o,e==null||e.drawImage(s,s.offsetLeft,s.offsetTop,s.width,s.height),c.toDataURL()},z=()=>{const r=document.getElementById("images"),s=document.getElementById("upload"),o=document.querySelector(".download-watermarked-image"),c=document.getElementById("btn-create-watermarked-image-text"),e=document.getElementById("btn-create-watermarked-image-imageUpload"),a=document.getElementById("btn-create-watermarked-image-imageGallery"),t=document.querySelector(".watermarkStampImg");let m="",n=["","",""];s.addEventListener("change",async()=>{let f=s.files;const v=document.querySelector("#originalImage"),u=document.querySelector(".finalImage"),L=document.querySelector("#waterMarkedImage");v.src=await T(f[0]),r.style.visibility="visible",c.style.visibility="visible",a.style.visibility="visible",e.style.visibility="visible";const g=document.querySelector(".create-name-watermark"),i=document.querySelector(".name-watermark"),d=document.querySelector("#watermark-text-edit"),k=document.querySelector(".title-name-watermark"),w=document.querySelector(".hidden-block-water-mark"),h=document.querySelector(".color-watermark"),x=document.querySelector(".instal-size-position-watermark");return e.addEventListener("click",()=>{c.style.visibility="hidden",a.style.visibility="hidden",k.style.display="none",i.type="file",h.style.display="none";const y=document.querySelector(".list-instal-text-watermark-stamp");y.style.visibility="visible"}),a.addEventListener("click",()=>{const y=document.querySelector(".gallery-watermark");y.style.display="block",y.src="./src/img/watermarkimage.png",c.style.visibility="hidden",e.style.visibility="hidden",k.style.display="none",i.style.display="none",i.type="file",h.style.display="none";const p=document.querySelector(".list-instal-text-watermark-stamp");p.style.visibility="visible",y.addEventListener("click",()=>{g.style.visibility="visible"})}),c.addEventListener("click",()=>{const y=document.querySelector(".gallery-watermark");e.style.visibility="hidden",a.style.visibility="hidden",k.style.display="block",i.style.display="block",h.style.display="flex",y.style.display="none",i.type="text";const p=document.querySelector(".list-instal-text-watermark-stamp");p.style.visibility="visible"}),i.addEventListener("change",async y=>{if(i.type==="text"&&i.style.display!=="none")y.target.value.length!==0&&(m=y.target.value,g.style.visibility="visible");else if(i.type==="file"&&i.style.display!=="none"){const p=i.files;t.src=await T(p[0]),g.style.visibility="visible"}}),g==null||g.addEventListener("click",()=>{console.log(i.type),i.type==="text"&&i.style.display!=="none"?(w.style.zIndex="1",d.innerText=m):(i.type==="file"&&i.style.display!=="none"||(t.src="watermarkimage.png"),t.style.zIndex="1"),x.style.visibility="visible";const y=document.querySelector(".list-btn-position"),p=document.querySelector(".size-field-name-watermark"),I=document.querySelector(".color-field-name-watermark"),S=document.querySelector(".opacity-field-name-watermark"),b=document.querySelector(".btn-saveAllChange-watermark-image");b.style.visibility="visible",y==null||y.addEventListener("click",l=>{switch(l.target.id){case"0":i.type==="text"?d.style.left=`${(+d.offsetLeft-10).toString()}px`:t.style.left=`${(+t.offsetLeft-10).toString()}px`;break;case"1":i.type==="text"?d.style.top=`${(+d.offsetTop-10).toString()}px`:t.style.top=`${(+t.offsetTop-10).toString()}px`;break;case"2":i.type==="text"?d.style.left=`${(+d.offsetLeft+10).toString()}px`:t.style.left=`${(+t.offsetLeft+10).toString()}px`;break;case"3":i.type==="text"?d.style.top=`${(+d.offsetTop+10).toString()}px`:t.style.top=`${(+t.offsetTop+10).toString()}px`;break}}),p==null||p.addEventListener("change",l=>{i.type==="text"?(d.style.fontSize=`${l.currentTarget.value}px`,n[0]=`${l.currentTarget.value}px`):(t.style.width=`${l.currentTarget.value}%`,n[0]=`${l.currentTarget.value}`)}),I==null||I.addEventListener("change",l=>{d.style.color=`${l.currentTarget.value}`,n[1]=`${l.currentTarget.value}`}),S==null||S.addEventListener("change",l=>{i.type==="text"?(d.style.opacity=`${+l.currentTarget.value*.01}`,n[2]=`${+l.currentTarget.value*.01}`):(t.style.opacity=`${+l.currentTarget.value*.01}`,n[2]=`${+l.currentTarget.value*.01}`)}),b==null||b.addEventListener("click",async()=>{u.src="",u.style.zIndex="2",i.type==="text"?(u.src=E(v,m,d.offsetLeft,d.offsetTop,n[0],n[1],+n[2]),L.href=u.src):(u.src=await $(v,t,+n[2]),L.href=u.src),o.style.visibility="visible"}),o.addEventListener("click",()=>{u.style.zIndex="-1",w.style.zIndex="-1",u.src="",m="",i.value="",r.style.visibility="hidden";const l=document.querySelector(".list-instal-text-watermark-stamp");l.style.visibility="hidden",o.style.visibility="hidden",g.style.visibility="hidden",x.style.visibility="hidden",b.style.visibility="hidden"}),o.addEventListener("click",()=>{s.value="",u.style.zIndex="-1",w.style.zIndex="-1",u.src="",m="",i.value="",r.style.visibility="hidden",c.style.visibility="hidden",a.style.visibility="hidden",e.style.visibility="hidden";const l=document.querySelector(".list-instal-text-watermark-stamp");l.style.visibility="hidden",o.style.visibility="hidden",g.style.visibility="hidden",x.style.visibility="hidden",b.style.visibility="hidden",t.style.zIndex="-2"})}),!1})};q();z();
