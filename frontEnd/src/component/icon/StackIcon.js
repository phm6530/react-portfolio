import styled from 'styled-components';

const IconStyle = styled.span`
    font-size: 13px;
    /* font-weight: bold; */
    padding: 6px 0;
    display: inline;
    align-items: center;
    border-radius: 4px;
    padding-right: 10px;
    padding-left: 5px;
    border-radius: 4px;

    color: #fff;
    margin: 0 2px;
    /* background: rgba(0,0,0,.2); */
    img,
    svg {
        width: 16px;
        margin-right: 5px;
        display: inline-block;
    }
`;

const Mysql = ({ label }) => {
    return (
        <IconStyle>
            {' '}
            <img src="/img/stackIcon/mysql.png" alt={label} /> {label}
        </IconStyle>
    );
};
const Scss = ({ label }) => {
    return (
        <IconStyle>
            {' '}
            <img src="/img/stackIcon/scss.png" alt={label} /> {label}
        </IconStyle>
    );
};

const Jquery = ({ label }) => {
    return (
        <IconStyle $stack={'jquery'}>
            {' '}
            <img src="/img/stackIcon/jquery.png" alt={label} /> {label}
        </IconStyle>
    );
};

const Html = ({ label }) => {
    return (
        <IconStyle $stack={'html'}>
            {' '}
            <img src="/img/stackIcon/html.png" alt={label} />
            {label}
        </IconStyle>
    );
};

const Css = ({ label }) => {
    return (
        <IconStyle $stack={'css'} style={{ backgroundColor: '#1572b6' }}>
            {' '}
            <img src="/img/stackIcon/css.png" alt={label} />
            {label}
        </IconStyle>
    );
};

const Js = ({ label }) => {
    return (
        <IconStyle $stack={'js'}>
            {' '}
            <img src="/img/stackIcon/js.png" alt={label} /> {label}
        </IconStyle>
    );
};
const React = ({ label }) => {
    return (
        <IconStyle $stack={'react'}>
            {' '}
            <img src="/img/stackIcon/react.png" alt={label} />
            {label}
        </IconStyle>
    );
};

const Ts = ({ label, ...props }) => {
    return (
        <IconStyle {...props} $stack={'react'}>
            <svg
                id="Capa_1"
                enableBackground="new 0 0 0 0"
                height="20"
                viewBox="0 0 512 512"
                width="20"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g>
                    <path
                        d="m50 0h412c27.614 0 50 22.386 50 50v412c0 27.614-22.386 50-50 50h-412c-27.614 0-50-22.386-50-50v-412c0-27.614 22.386-50 50-50z"
                        fill="#3178c6"
                    />
                    <path
                        d="m50 0h412c27.614 0 50 22.386 50 50v412c0 27.614-22.386 50-50 50h-412c-27.614 0-50-22.386-50-50v-412c0-27.614 22.386-50 50-50z"
                        fill="#3178c6"
                    />
                    <path
                        clipRule="evenodd"
                        d="m316.939 407.424v50.061c8.138 4.172 17.763 7.3 28.875 9.386s22.823 3.129 35.135 3.129c21.219 0 44.448-3.035 62.602-14.784 18.064-11.691 26.449-31.14 26.449-52.172 0-15.637-4.851-30.684-15.807-42.081-16.429-17.091-39.516-24.022-60.255-34.183-10.389-5.09-24.727-12.992-24.727-26.361 0-3.441.887-6.543 2.661-9.307 7.132-11.113 22.973-13.376 35.057-13.376 13.717 0 28.189 3.071 40.926 8.76 4.434 1.982 8.529 4.276 12.285 6.884v-46.776c-7.616-2.92-15.937-5.084-24.962-6.492s-19.381-2.112-31.066-2.112c-11.895 0-23.163 1.278-33.805 3.833s-20.006 6.544-28.093 11.967c-8.086 5.424-14.476 12.333-19.171 20.729-4.695 8.395-7.043 18.433-7.043 30.114 0 14.914 4.304 27.638 12.912 38.172 8.607 10.533 21.675 19.45 39.204 26.751 11.792 4.822 24.053 9.581 34.665 16.739 7.355 4.96 14.007 11.877 14.007 21.275 0 6.821-3.856 12.604-9.468 16.192-8.303 5.308-18.936 6.492-28.563 6.492-10.851 0-21.597-1.903-32.24-5.71-10.641-3.806-20.501-9.516-29.578-17.13zm-84.159-123.342h64.22v-41.082h-179v41.082h63.906v182.918h50.874z"
                        fill="#fff"
                        fillRule="evenodd"
                    />
                </g>
            </svg>{' '}
            {label}
        </IconStyle>
    );
};

const Php = ({ label, ...props }) => {
    return (
        <IconStyle {...props} $stack={'php'}>
            <img src="/img/stackIcon/php.png" alt={label} />
            {label}
        </IconStyle>
    );
};

const Node = ({ className, label }) => {
    return (
        <IconStyle $stack={'node'} className={className}>
            <img src="/img/stackIcon/node.png" alt={label} />
            {label}
        </IconStyle>
    );
};
const Next = ({ label }) => {
    return (
        <IconStyle $stack={'Next'}>
            <img src="/img/stackIcon/next.png" alt={label} />
            {label}
        </IconStyle>
    );
};

// const StackIcon = ({ children }) => {
//     return <div>{children}</div>;
// };

const SKILL_ICON = {
    Html: Html,
    Css: Css,
    JavaScript: Js, // "JavaSciprt" 오타 수정 -> "JavaScript"
    Node: Node,
    React: React,
    PHP: Php,
    jQuery: Jquery,
    Scss: Scss,
    Mysql: Mysql,
    Next: Next,
};

// StackIcon.Js = Js;
// StackIcon.Css = Css;
// StackIcon.React = React;
// StackIcon.Ts = Ts;
// StackIcon.Node = Node;
// StackIcon.Html = Html;
// StackIcon.Php = Php;
// StackIcon.Jquery = Jquery;
// StackIcon.Mysql = Mysql;
// StackIcon.Scss = Scss;
// StackIcon.Next = Next;

export default SKILL_ICON;
