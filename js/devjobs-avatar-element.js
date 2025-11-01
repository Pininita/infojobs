class DevJobsAvatar extends HTMLElement {
    constructor() {
        super();

        this.attachShadow({ mode: 'open' })
    }

    render() {

        const service = this.getAttribute('service') ?? 'github';
        const username = this.getAttribute('username') ?? 'midudev';
        const size = this.getAttribute('size') ?? '40';

        this.shadowRoot.innerHTML = `
        <style>
        img {
            width:${size}px; 
            height:${size}
            border-radius:50%
        }
        </style>
        <img  
        src="${url}"
        alt="Avatar de ${username}"
        class="avatar"
        />
        `
    }

    connectedCallback() {
        this.render()
    }
}

customElements.define('devjobs-avatar', DevJobsAvatar);