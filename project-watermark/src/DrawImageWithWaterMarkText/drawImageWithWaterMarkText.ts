export const drawImageWithWaterMarkText = (originalImage: HTMLImageElement, watermarkText: string, positionX: number = 0, positionY: number = 0, sizeImg: string = '16px', fontImg: string = 'white', opacityImg: number = 1) => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    const canvasWidth = originalImage.width;
    console.log(canvasWidth);
    const canvasHeight = originalImage.height;
    console.log(canvasHeight);

    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    context!.drawImage(originalImage, 0, 0, canvasWidth, canvasHeight);

    context!.fillStyle = `${fontImg}`;
    context!.textBaseline = "middle";
    context!.font = `bold ${sizeImg} serif`;
    context!.globalAlpha = opacityImg;
    context!.fillText(watermarkText, positionX, positionY);

    return canvas.toDataURL();
}