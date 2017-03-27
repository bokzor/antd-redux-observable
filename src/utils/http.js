import {ajax} from 'rxjs/observable/dom/ajax';


export const pathJoin = (...parts) => {
  const normalize = (str) => {
    // make sure protocol is followed by two slashes
    str = str.replace(/:\//g, '://');
    // remove consecutive slashes
    str = str.replace(/([^:\s])\/+/g, '$1/');
    // remove trailing slash before parameters or hash
    str = str.replace(/\/(\?|&|#[^!])/g, '$1');
    // replace ? in parameters with &
    str = str.replace(/(\?.+)\?/g, '$1&');
    return str;
  };

  return normalize(parts.join('/'))
};

export const http = {
  getJSON: (url: String) => ajax.getJSON(url),
  post: (url: String, params: Object) => ajax.post(url, params)
};

export const encodeParams = (params: Object) => {
  return Object.keys(params).map(function (k) {
    return encodeURIComponent(k) + "=" + encodeURIComponent(params[k]);
  }).join('&')
};
