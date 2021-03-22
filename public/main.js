let n =1
getPage.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET',`/page${n + 1}`)
    request.onreadystatechange = () =>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status <300){
                const array = JSON.parse(request.response)
                array.forEach(item => {
                    const li =document.createElement('li')
                    li.textContent = item.id
                    xxx.appendChild(li)
                });
                n+=1 
            }
        }
    }
    request.send()

}

getJson.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET','/5.json')
    request.onreadystatechange =() =>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status < 300){
                const object = JSON.parse(request.response)
                console.log(object)
                myName.textContent = object.name
            }
        }
        
    }
    request.send()
}



getXml.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET', '/4.xml')
    request.onreadystatechange = () =>{
        if(request.readyState === 4){
            if(request.status >=200 && request.status < 300){
                const dom = request.responseXML
                const text =dom.getElementsByTagName('warning')[0].textContent
                console.log(text.trim())
            }
        }
    }
    request.send()
}


getHtml.onclick = () =>{
    const request = new XMLHttpRequest()
    request.open('GET', '/3.html')
    request.onload = () =>{
        const div = document.createElement('div')
        div.innerHTML = request.response
        document.body.appendChild(div)
    }
    request.onerror = () =>{

    }
    request.send()
}


getJs.onclick = () =>{
    const request = new XMLHttpRequest();
    request.open('GET','/2.js')
    request.onload = () =>{
        //创建script标签
        const script = document.createElement('script')
        //获取script内容
        script.innerHTML =request.response
        //插到身体里面
        document.body.appendChild(script)
    }    
    request.onerror = () =>{
    }
    request.send()
}

getCss.onclick= () =>{
    const request = new XMLHttpRequest();
    request.open('GET', '/style.css');
    request.onreadystatechange = () =>{
        if(request.readyState === 4){
            if(request.status >= 200 && request.status <300){
                //创建style标签
                const style = document.createElement('style')
                //获取style内容
                style.innerHTML =request.response
                //插到头里面
                document.head.appendChild(style)
            } else{
                alert('加载css失败')
            }
        }
    };
    request.send()
}
