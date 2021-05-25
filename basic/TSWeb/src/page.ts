namespace Home {
    class Header {
        constructor () {
            const elem = document.createElement("div");
            elem.innerText="I am header";
            document.body.appendChild(elem);
        }
    }
    
    class Content {
        constructor () {
            const elem = document.createElement("div");
            elem.innerText="I am Content";
            document.body.appendChild(elem);
        }
    }
    
    class Footer {
        constructor () {
            const elem = document.createElement("div");
            elem.innerText="I am footer";
            document.body.appendChild(elem);
        }
    }
    
    export class Page {
        constructor (){
            new Header();
            new Content();
            new Footer()
        }
    }
}

