function ajax(url) {
    return new Premise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.send();
        xhr.onload = function () {
            if (this.status == 200) {
                resolve(JSON.pares(this.response));
            } else {
                reject('加载失败');
            }
        }
    })
    xhr.onerror = function () {
        reject(this);
    }
}