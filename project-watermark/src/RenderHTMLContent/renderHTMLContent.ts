export const renderHTMLContent = () => {
    return (
        document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
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
                  ${["&larr;", "&uarr;", "&rarr;", "&darr;"].map((val, index) => {
            return `<button id='${index}' class='btn-position'>${val}</button>`
        }
        )}
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
  `
    )
}