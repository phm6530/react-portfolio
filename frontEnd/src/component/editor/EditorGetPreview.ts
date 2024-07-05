import { IMG_UPLOAD_PATH, IMG_URL } from 'constants/apiUrl';

// 썸네일 + 간략한설명 추출
const EditorGetPreview = (post: string) => {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = post;

    return {
        getImg: (): string | null => {
            const imgSelect = tempDiv.querySelector('img');
            if (imgSelect) {
                const selectThumbNail = imgSelect.getAttribute('src');
                if (selectThumbNail) {
                    return selectThumbNail.replaceAll(`${IMG_URL}/`, '');
                }
                return null;
            }
            return null;
        },
        getText: () => {
            const text = tempDiv.textContent;
            if (text) {
                return text.slice(0, 200);
            }
        },
        getPost: () => {
            const imgs = tempDiv.querySelectorAll('img');
            imgs.forEach(img => {
                const src = img.getAttribute('src');
                if (src) {
                    img.setAttribute('src', src.replaceAll(`${IMG_URL}/`, ''));
                }
            });
            return tempDiv.innerHTML;
        },
    };
};

const transImgSrc = (contents: string) => {
    const originalDomain = 'uploads/';
    const updatedContents = contents.replaceAll(
        originalDomain,
        `${IMG_URL}/${IMG_UPLOAD_PATH}/`,
        // `${ENDPOINT_URL}/${IMG_UPLOAD_PATH}/`,
    );
    return updatedContents;
};

export { EditorGetPreview, transImgSrc };
