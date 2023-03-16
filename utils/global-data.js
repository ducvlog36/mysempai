export const getGlobalData = () => {
    const name = process.env.BLOG_NAME ?
        decodeURI(process.env.BLOG_NAME) :
        'Mysempai.net';
    const blogTitle = process.env.BLOG_TITLE ?
        decodeURI(process.env.BLOG_TITLE) :
        'Mysempai.net';
    const footerText = process.env.BLOG_FOOTER_TEXT ?
        decodeURI(process.env.BLOG_FOOTER_TEXT) :
        'よこそMysempaiへ';

    return {
        name,
        blogTitle,
        footerText,
    };
};