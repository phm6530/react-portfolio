import styled from 'styled-components';

const Toolbar = styled.div`
    span,
    button,
    svg,
    path,
    line,
    polygon,
    rect,
    polyline {
        color: var(--quill-toolbar-color);
        stroke: var(--quill-toolbar-color) !important;
    }
    .ql-active span,
    .ql-active button,
    .ql-active svg,
    .ql-active path,
    .ql-active line,
    .ql-active polygon,
    .ql-active rect,
    .ql-active polyline {
        color: red;
        stroke: red !important;
    }
`;

const CustomToolbar = () => (
    <Toolbar id="toolbar">
        <span className="ql-formats">
            <select className="ql-font" defaultValue="arial">
                <option value="arial">Arial</option>
                <option value="buri">Buri</option>
                <option value="gangwon">Gangwon</option>
            </select>
            <select className="ql-size" defaultValue="medium">
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
                <option value="huge">Title</option>
            </select>
            <select className="ql-header">
                <option value="1">Header 1</option>
                <option value="2">Header 2</option>
                <option value="3">Header 3</option>
                <option value="4">Header 4</option>
                <option value="5">Header 5</option>
                <option value="6">Header 6</option>
            </select>
        </span>
        <span className="ql-formats">
            <button className="ql-bold" />
            <button className="ql-italic" />
            <button className="ql-underline" />
            <button className="ql-strike" />
            <button className="ql-link" />
            <button className="ql-code-block" />
        </span>
        <span className="ql-formats">
            <select className="ql-color" />
            <select className="ql-background" />
        </span>

        <span className="ql-formats">
            <button className="ql-image" />
            {/* <button className="ql-video" /> */}
        </span>

        <span className="ql-formats">
            <button className="ql-align" value="" /> {/* 기본값(왼쪽 정렬) */}
            <button className="ql-align" value="center" />
            <button className="ql-align" value="right" />
            <button className="ql-align" value="justify" />
        </span>

        <span className="ql-formats">
            <button className="ql-clean" />
        </span>
    </Toolbar>
);

export default CustomToolbar;
