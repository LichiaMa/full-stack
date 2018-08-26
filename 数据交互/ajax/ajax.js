class Request {
  constructor(option = {}) {
    this.option = option;
    this.url = this.option.url;
    this.method = this.option.method || "GET";
    this.dataType = this.option.dataType || "text";
    this.contentType =
      this.option.contentType || "application/x-www-form-urlencoded";
    this.data = option.data || {};
    this.success = option.success;
    this.error = option.error;
  }

  dealWithData() {
    let query = [];
    for (const key in this.data) {
      if (this.data.hasOwnProperty(key)) {
        const element = object[key];
        query.push(`${encodeURIComponent(key)}=${encodeURIComponent(element)}`);
      }
    }

    return query.join("&");
  }

  ajax() {
    // 创建xhr对象
    const xhr = new XMLHttpRequest();

    if (this.method.toLowerCase() === "get") {
      // 创建http链接
      xhr.open("GET", this.url + "?" + this.dealWithData(), true);
      // 设置请求头
      xhr.setRequestHeader("Content-Type", this.contentType);
      // 发送请求
      xhr.send();
    } else {
      // 创建http链接
      xhr.open("POST", this.url, true);
      // 设置请求头
      xhr.setRequestHeader("Content-Type", this.contentType);
      // 发送请求
      xhr.send(this.dealWithData());
    }

    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304) {
          if (this.success) {
            if (this.dataType === "text") {
              this.success(xhr.responseText);
            } else {
              this.success(JSON.parse(xhr.responseText));
            }
          }
        } else {
          if (this.error) {
            this.error();
          }
        }
      }
    };
  }
}

export function ajax(option = {}) {
  const xhr = new Request(option);
  xhr.ajax();
}
