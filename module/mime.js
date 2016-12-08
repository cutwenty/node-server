module.exports = {
  // 常用的这些，没包含的到nginx文件夹下的mime文件中寻找
  types: {
    "css": "text/css",
    "gif": "image/gif",
    "html": "text/html",
    "ico": "image/x-icon",
    "jpeg": "image/jpeg",
    "jpg": "image/jpeg",
    "js": "text/javascript",
    "json": "application/json",
    "pdf": "application/pdf",
    "png": "image/png",
    "svg": "image/svg+xml",
    "swf": "application/x-shockwave-flash",
    "tiff": "image/tiff",
    "txt": "text/plain",
    "wav": "audio/x-wav",
    "wma": "audio/x-ms-wma",
    "wmv": "video/x-ms-wmv",
    "xml": "text/xml"
  },
  getMime: function (pathname) {
    let suffix = (pathname.toLowerCase().match(/\.([0-9a-zA-Z]+)$/))[1];
    return this.types[suffix];
  }
};
