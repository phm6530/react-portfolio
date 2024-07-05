import { transImgSrc } from 'component/editor/EditorGetPreview';
import { device } from 'config/DeviceConfig';

import styled from 'styled-components';

const QuillContainer = styled.div`
    width: 100%;
    border: 0 !important;
    font-size: 16px; //기존 텍스트 사이즈
    word-break: keep-all;
    .ql-editor {
        min-height: 200px !important;
        padding: 0;
        line-height: 2 !important;
        font-family: 'Poppins', 'SUIT-Regular', sans-serif;
    }
    img {
        border-radius: 1.5rem;
        border: 5px solid rgba(0, 0, 0, 0.3);
    }

    @media ${device.tablet} {
        img {
            border: 1px solid;
        }
    }
`;

const QuillView: React.FC<{ contents: string }> = ({ contents }) => {
    const renderHTML = (quillHTML: string): { __html: string } => {
        return { __html: quillHTML };
    };
    const updatedContents = transImgSrc(contents);

    return (
        <>
            <QuillContainer className="ql-container ql-snow">
                <div
                    id="quill_Editor"
                    className="ql-editor"
                    dangerouslySetInnerHTML={renderHTML(updatedContents)}
                ></div>
            </QuillContainer>
        </>
    );
};

export default QuillView;
