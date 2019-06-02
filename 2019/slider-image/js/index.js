class ImageSlider extends HTMLElement {
  // 构造函数：构造一个新元素实例
  constructor() {
    // Always call super first in constructor
    super();
  }

  // 当 custom element首次被插入文档DOM时，被调用。
  connectedCallback() {
    // this指html中定义的新元素
    const images = eval(this.getAttribute('data-images')).map(src => {
      let img = document.createElement('img');
      img.width = '150';
      img.height = '150';
      img.src = src;
      return img;
    });

    // shadow就是this
    const shadow = this.shadowRoot || this.attachShadow({ mode: 'open' });

    shadow.innerHTML = '';
    shadow.appendChild(images[0]);

    if (this.timer) clearInterval(this.timer);
    this.timer = setInterval(() => {
      // 最快的方式实现循环列表（双向循环链表）
      images.push(images.shift());
      shadow.replaceChild(images[0], shadow.querySelector('img'));
    }, 1000);

    // scoped css
    const style = document.createElement('style');
    style.textContent = `
      img {
        border: 1px solid black;
        padding: 10px;
      } `;
    shadow.appendChild(style);
    console.log(style.isConnected);

  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    this.connectedCallback();
  }

  static get observedAttributes() { return ['data-images']; }

}

// Define the new element
customElements.define('image-slider', ImageSlider);