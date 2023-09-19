export const drawImageWithWatermarkImg = async (originalImage: HTMLImageElement, changedImageWithWaterMark: HTMLImageElement, opacityImg: number = 1) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
  
    const canvasWidth = originalImage.width;
    const canvasHeight = originalImage.height;
  
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
  
    context!.drawImage(originalImage, 0, 0, canvasWidth, canvasHeight);
  
    context!.globalAlpha = opacityImg;
    context?.drawImage(changedImageWithWaterMark, changedImageWithWaterMark.offsetLeft, changedImageWithWaterMark.offsetTop, changedImageWithWaterMark.width, changedImageWithWaterMark.height);
    return canvas.toDataURL();
  }