// 메타 태그 생성 함수
const renderMetaTags = (title, description) => `
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <meta name="description" content="${description}">
`;

// HTML 생성 함수
const renderHTML = (metaTags, content) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    ${metaTags}
  </head>
  <body>
    <div id="root">${content}</div>
    <script src="/path/to/your/bundle.js"></script>
  </body>
  </html>
`;

app.get('*', (req, res) => {
  const path = req.path;
  const meta = metaData[path] || metaData['default'];
  const metaTags = renderMetaTags(meta.title, meta.description);
  const content = ''; // 기본 콘텐츠 (빈 HTML 또는 로딩 표시 등)
  
  const html = renderHTML(metaTags, content);
  res.send(html);
});