class Nav extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      <nav>
        <div class="logo">
          <img src="../public/logo.png" alt="Logo" />
          <h1>
            <a href="../index.html">Students for Science </a>
          </h1>
        </div>
        <ul>
          <li>
            <a href="../index.html">Home</a>
          </li>
          <li>
            <a href="../about-us.html">About Us</a>
          </li>
          <li>
            <a href="../impact.html">Impact</a>
          </li>
        </ul>
      </nav>
    `;
  }
}

customElements.define("nav-component", Nav);
