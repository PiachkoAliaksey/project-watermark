import { fileToDataUrl } from "../FileToDataUrl/fileToDataUrl";
import { drawImageWithWaterMarkText } from "../DrawImageWithWaterMarkText/drawImageWithWaterMarkText";
import { drawImageWithWatermarkImg } from "../DrawImageWithWatermarkImg/drawImageWithWatermarkImg";

export const mainComponent = () => {

    const imagesDiv = document.getElementById("images") as HTMLElement;
    const fileInput = document.getElementById("upload") as HTMLInputElement;
    const btnDownloadWaterMarkedImg = document.querySelector('.download-watermarked-image') as HTMLButtonElement;
    const btnCreateAreaTextWaterMark = document.getElementById("btn-create-watermarked-image-text") as HTMLButtonElement;
    const btnCreateWatermarkedImageImageUpload = document.getElementById("btn-create-watermarked-image-imageUpload") as HTMLButtonElement;
    const btnCreateWatermarkedImageImageGallery = document.getElementById("btn-create-watermarked-image-imageGallery") as HTMLButtonElement;
    const waterMarkStampImg = document.querySelector(".watermarkStampImg") as HTMLImageElement;

    let nameWaterMark = '';
    let imageInstals = ['', '', ''];

    fileInput.addEventListener("change", async () => {
        let file = fileInput.files as unknown as File[];

        const originalImage = document.querySelector("#originalImage") as HTMLImageElement;
        
        const finalImage = document.querySelector('.finalImage') as HTMLImageElement;
        const waterMarkedImage = document.querySelector("#waterMarkedImage") as HTMLLinkElement;

        originalImage!.src = await fileToDataUrl(file![0]) as string;
        imagesDiv!.style.visibility = "visible";
        btnCreateAreaTextWaterMark.style.visibility = "visible";
        btnCreateWatermarkedImageImageGallery.style.visibility = "visible";
        btnCreateWatermarkedImageImageUpload.style.visibility = "visible";


        const btnCreateWaterMark = document.querySelector('.create-name-watermark') as HTMLButtonElement;
        const inputNameWatermark = document.querySelector('.name-watermark') as HTMLInputElement;
        const textWaterMark = document.querySelector('#watermark-text-edit') as HTMLParagraphElement;
        const titleWaterMark = document.querySelector('.title-name-watermark') as HTMLTitleElement;
        const hideBlockWithText = document.querySelector('.hidden-block-water-mark') as HTMLInputElement;
        const fieldColorWaterMark = document.querySelector('.color-watermark') as HTMLDivElement;
        const blockOfPositionAndSizeWaterMark = document.querySelector(".instal-size-position-watermark") as HTMLElement;



        btnCreateWatermarkedImageImageUpload.addEventListener('click', () => {
            btnCreateAreaTextWaterMark.style.visibility = 'hidden';
            btnCreateWatermarkedImageImageGallery.style.visibility = 'hidden';
            titleWaterMark.style.display = 'none';
            inputNameWatermark.type = 'file';
            fieldColorWaterMark.style.display = 'none';
            const listInstallTextWaterMArkedImage = document.querySelector(".list-instal-text-watermark-stamp") as HTMLElement;
            listInstallTextWaterMArkedImage.style.visibility = 'visible';
        })

        btnCreateWatermarkedImageImageGallery.addEventListener('click', () => {
            const galleryWatermark = document.querySelector('.gallery-watermark') as HTMLImageElement;
            galleryWatermark.style.display = 'block';
            galleryWatermark.src = './src/img/watermarkimage.png';
            btnCreateAreaTextWaterMark.style.visibility = 'hidden';
            btnCreateWatermarkedImageImageUpload.style.visibility = 'hidden';
            titleWaterMark.style.display = 'none';
            inputNameWatermark.style.display = 'none';
            inputNameWatermark.type = 'file';
            fieldColorWaterMark.style.display = 'none';
            const listInstallTextWaterMArkedImage = document.querySelector(".list-instal-text-watermark-stamp") as HTMLElement;
            listInstallTextWaterMArkedImage.style.visibility = 'visible';
            galleryWatermark.addEventListener('click', () => {
                btnCreateWaterMark.style.visibility = 'visible';
            })

        })

        btnCreateAreaTextWaterMark.addEventListener('click', () => {
            const galleryWatermark = document.querySelector('.gallery-watermark') as HTMLImageElement;
            btnCreateWatermarkedImageImageUpload.style.visibility = 'hidden';
            btnCreateWatermarkedImageImageGallery.style.visibility = 'hidden';
            titleWaterMark.style.display = 'block';
            inputNameWatermark.style.display = 'block';
            fieldColorWaterMark.style.display = 'flex';
            galleryWatermark.style.display = 'none';
            inputNameWatermark.type = 'text';
            const listInstallTextWaterMArkedImage = document.querySelector(".list-instal-text-watermark-stamp") as HTMLElement;
            listInstallTextWaterMArkedImage.style.visibility = 'visible';
        })

        inputNameWatermark.addEventListener('change', async (e) => {
            if (inputNameWatermark.type === 'text' && inputNameWatermark.style.display !== 'none') {
                if ((e.target! as HTMLInputElement).value.length !== 0) {
                    nameWaterMark = (e.target! as HTMLInputElement).value;
                    btnCreateWaterMark.style.visibility = 'visible';
                }
            } else if (inputNameWatermark.type === 'file' && inputNameWatermark.style.display !== 'none') {
                const fileImage = inputNameWatermark.files;
                waterMarkStampImg!.src = await fileToDataUrl(fileImage![0]) as string;
                btnCreateWaterMark.style.visibility = 'visible';
            }
        })

        btnCreateWaterMark?.addEventListener('click', () => {
            console.log(inputNameWatermark.type)
            if (inputNameWatermark.type === 'text' && inputNameWatermark.style.display !== 'none') {
                hideBlockWithText.style.zIndex = '1';
                textWaterMark.innerText = nameWaterMark;
            } else if (inputNameWatermark.type === 'file' && inputNameWatermark.style.display !== 'none') {
                waterMarkStampImg!.style.zIndex = "1";
            } else {
                waterMarkStampImg!.src = 'watermarkimage.png';
                waterMarkStampImg!.style.zIndex = "1";
            }

            blockOfPositionAndSizeWaterMark.style.visibility = 'visible';
            const listBtnPosition = document.querySelector('.list-btn-position');
            const sizeFieldNameWatermark = document.querySelector('.size-field-name-watermark');
            const colorFieldNameWatermark = document.querySelector('.color-field-name-watermark') as HTMLInputElement;
            const opacityFieldNameWatermark = document.querySelector('.opacity-field-name-watermark');
            const btnSaveAllChangeWatermarkImage = document.querySelector('.btn-saveAllChange-watermark-image') as HTMLButtonElement;
            btnSaveAllChangeWatermarkImage.style.visibility = 'visible';


            listBtnPosition?.addEventListener('click', (e) => {
                switch ((e.target as HTMLButtonElement).id) {
                    case '0': inputNameWatermark.type === 'text' ? (textWaterMark.style.left = `${(+textWaterMark.offsetLeft - 10).toString()}px`) : (waterMarkStampImg.style.left = `${(+waterMarkStampImg.offsetLeft - 10).toString()}px`);
                        break;
                    case '1': inputNameWatermark.type === 'text' ? (textWaterMark.style.top = `${(+textWaterMark.offsetTop - 10).toString()}px`) : (waterMarkStampImg.style.top = `${(+waterMarkStampImg.offsetTop - 10).toString()}px`);
                        break;
                    case '2': inputNameWatermark.type === 'text' ? (textWaterMark.style.left = `${(+textWaterMark.offsetLeft + 10).toString()}px`) : (waterMarkStampImg.style.left = `${(+waterMarkStampImg.offsetLeft + 10).toString()}px`);
                        break;
                    case '3': inputNameWatermark.type === 'text' ? (textWaterMark.style.top = `${(+textWaterMark.offsetTop + 10).toString()}px`) : (waterMarkStampImg.style.top = `${(+waterMarkStampImg.offsetTop + 10).toString()}px`);
                        break;
                }
            })
            

            sizeFieldNameWatermark?.addEventListener('change', (e) => {
                inputNameWatermark.type === 'text' ?
                    (textWaterMark.style.fontSize = `${(e.currentTarget as HTMLInputElement).value}px`, imageInstals[0] = `${(e.currentTarget as HTMLInputElement).value}px`)
                    : (waterMarkStampImg.style.width = `${(e.currentTarget as HTMLInputElement).value}%`, imageInstals[0] = `${(e.currentTarget as HTMLInputElement).value}`)
            })

            colorFieldNameWatermark?.addEventListener('change', (e) => {
                textWaterMark.style.color = `${(e.currentTarget as HTMLInputElement).value}`
                imageInstals[1] = `${(e.currentTarget as HTMLInputElement).value}`
            })

            opacityFieldNameWatermark?.addEventListener('change', (e) => {
                inputNameWatermark.type === 'text' ?
                    (textWaterMark.style.opacity = `${+(e.currentTarget as HTMLInputElement).value * 0.01}`, imageInstals[2] = `${+(e.currentTarget as HTMLInputElement).value * 0.01}`)
                    : (waterMarkStampImg.style.opacity = `${+(e.currentTarget as HTMLInputElement).value * 0.01}`, imageInstals[2] = `${+(e.currentTarget as HTMLInputElement).value * 0.01}`);
            })

            btnSaveAllChangeWatermarkImage?.addEventListener('click', async () => {
                finalImage!.src = '';
                finalImage.style.zIndex = '2';
                inputNameWatermark.type === 'text' ? (finalImage!.src = drawImageWithWaterMarkText(originalImage, nameWaterMark, textWaterMark.offsetLeft, textWaterMark.offsetTop, imageInstals[0], imageInstals[1], +imageInstals[2]), waterMarkedImage!.href = finalImage!.src) : (finalImage!.src = await drawImageWithWatermarkImg(originalImage, waterMarkStampImg, +imageInstals[2]), waterMarkedImage!.href = finalImage!.src);
                btnDownloadWaterMarkedImg!.style.visibility = 'visible';
            })
            btnDownloadWaterMarkedImg.addEventListener('click', () => {
                finalImage.style.zIndex = '-1';
                hideBlockWithText.style.zIndex = '-1';
                finalImage!.src = '';
                nameWaterMark = '';
                inputNameWatermark.value = '';
                imagesDiv!.style.visibility = 'hidden';
                const listInstallTextWaterMArkedImage = document.querySelector(".list-instal-text-watermark-stamp") as HTMLElement;
                listInstallTextWaterMArkedImage.style.visibility = 'hidden';
                btnDownloadWaterMarkedImg.style.visibility = 'hidden';
                btnCreateWaterMark.style.visibility = 'hidden';
                blockOfPositionAndSizeWaterMark.style.visibility = 'hidden';
                btnSaveAllChangeWatermarkImage.style.visibility = 'hidden';
            })

            btnDownloadWaterMarkedImg.addEventListener('click', () => {
                fileInput.value = '';
                finalImage.style.zIndex = '-1';
                hideBlockWithText.style.zIndex = '-1';
                finalImage!.src = '';
                nameWaterMark = '';
                inputNameWatermark.value = '';
                imagesDiv!.style.visibility = 'hidden';
                btnCreateAreaTextWaterMark.style.visibility = "hidden";
                btnCreateWatermarkedImageImageGallery.style.visibility = "hidden";
                btnCreateWatermarkedImageImageUpload.style.visibility = "hidden";
                const listInstallTextWaterMArkedImage = document.querySelector(".list-instal-text-watermark-stamp") as HTMLElement;
                listInstallTextWaterMArkedImage.style.visibility = 'hidden';
                btnDownloadWaterMarkedImg.style.visibility = 'hidden';
                btnCreateWaterMark.style.visibility = 'hidden';
                blockOfPositionAndSizeWaterMark.style.visibility = 'hidden';
                btnSaveAllChangeWatermarkImage.style.visibility = 'hidden';
                waterMarkStampImg.style.zIndex='-2';
            })
        })
        return false;
    });
}