getCSS.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/style.css');
    request.onreadystatechange = () => {
        if (request.status >= 200 && request.status < 400) {
            const style = document.createElement("style");
            style.innerHTML = request.response;
            document.head.appendChild(style);
        } else {
            alert('加载失败')
        }
    }
    request.send()
}

let n = 1;
getPage.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', `/page${n + 1}`)
    request.onreadystatechange = () => {
        if (request.status === 200 && request.readyState === 4) {
            const array = JSON.parse(request.response)
            array.forEach((items) => {
                const li = document.createElement('li')
                li.textContent = items.id;
                li.style.listStyle = 'none'
                xxx.appendChild(li)
            });
        }
    }
    n += 1;
    request.send()
}

getJSON.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', '/5.json');
    request.onreadystatechange = () => {
        if (request.status === 200 && request.readyState === 4) {
            console.log(request.response)
            const object = JSON.parse(request.response)
            console.log(object)
            getJSON.textContent = object.name;
        }
    }
    request.send();
}

getXML.onclick = () => {
    const request = new XMLHttpRequest();
    request.open('GET', "./4.xml");
    request.onreadystatechange = () => {
        if (request.status === 200 && request.readyState === 4) {
            let dom = request.responseXML;
            console.log(dom)
            const text = dom.getElementsByTagName('to')[0].textContent
            console.log(text)
        }
    }
    request.send();
}





getJS.onclick = () => {
    let request = new XMLHttpRequest();
    request.open('GET', '/2.js');
    request.onload = () => {
        const script = document.createElement("script");
        script.innerHTML = request.response;
        document.head.appendChild(script);
    }
    request.onerror = () => {
    };
    request.send()
}

getHTML.onclick = () => {
    let request = new XMLHttpRequest();
    request.open('GET', '/3.html');
    request.onload = () => {
        const div = document.createElement("div");
        div.innerHTML = request.response;
        document.body.appendChild(div);
    }
    request.onerror = () => { };
    request.send()
}
