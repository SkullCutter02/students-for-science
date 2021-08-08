class Head extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <title>Students for Science</title>
      <link rel="stylesheet" href="../styles/global.css" />
      <link rel="stylesheet" href="../styles/variables.css" />
      <link rel="stylesheet" href="../styles/nav.css" />
      <link rel="stylesheet" href="../styles/hero.css" />
      <link rel="shortcut icon" type="image/x-icon" href="../public/logo.png" />
    `;
  }
}

customElements.define("head-component", Head);
