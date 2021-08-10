class Nav extends HTMLElement {
  constructor() {
    super();
  }

  static get observedAttributes() {
    return ["tab"];
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (oldVal !== newVal && attrName === "tab")
      this.innerHTML = `
        <style>
          .tab${newVal ? "-" + newVal : ""} a {
            color: var(--primaryColor) !important;
          }
          
          .tab${newVal ? "-" + newVal : ""}::after {
            opacity: 100% !important;
          }
        </style>
      
        <nav>
          <div class="logo">
            <img src="../public/logo.png" alt="Logo" />
            <h1>
              <a href="../index.html">Students for Science </a>
            </h1>
          </div>
          <ul>
            <li class="tab-1">
              <a href="../index.html">Home</a>
            </li>
            <li class="tab-2">
              <a href="../about-us.html">About Us</a>
            </li>
            <li class="tab-3">
              <a href="../impact.html">Impact</a>
            </li>
          </ul>
        </nav>
      `;
  }
}

customElements.define("nav-component", Nav);
