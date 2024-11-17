class SwiperControl extends HTMLElement {
  static observedAttributes = ["initialized", "status"];

  constructor() {
    super();
    this.swiperInstance = null;
  }

  connectedCallback() {
    this.render();
    this.initialize();
  }

  disconnectedCallback() {
    this.destroy();
  }

  initialize() {
    if (this.swiperInstance === null) {
      this.swiperInstance = new Swiper(".swiper", {
        loop: true,
        speed: 1000,
        direction: "horizontal",
        navigation: {
          nextEl: ".swiper-next",
          prevEl: ".swiper-prev",
        },
        breakpoints: {
          375: {
            slidePrevClass: "hidden",
            slidesPerView: 1.05,
            spaceBetween: 8,
          },
          1440: {
            slidesPerView: 2.8,
            spaceBetween: 20,
          },
        },
        on: {
          slideChange: function () {
            console.log(`Active slide index: ${this.activeIndex}`);
          },
        },
      });
      this.setAttribute("initialized", "true");
      this.setStatus("Swiper is initialized.");
    }
  }

  destroy() {
    if (this.swiperInstance) {
      this.swiperInstance.destroy(true, true);
      this.swiperInstance = null;
      this.setAttribute("initialized", "false");
      this.setStatus("Swiper is destroyed.");
    }
  }

  setStatus(status) {
    this.setAttribute("status", status);
    this.updateStatusText();
  }

  updateStatusText() {
    const statusText = this.querySelector(".swiper-status-text");
    if (statusText) {
      statusText.textContent = this.getAttribute("status");
    }
  }

  render() {
    this.innerHTML = `
    <div class="toggle-section">
    <button id="toggle-swiper">Toggle Swiper</button>
    <p class="swiper-status-text">${this.getAttribute("status")}</p>
  </div>`;

    this.querySelector("#toggle-swiper").addEventListener("click", () => {
      if (this.swiperInstance) {
        this.destroy();
      } else {
        this.initialize();
      }
    });
  }
}

customElements.define("swiper-control", SwiperControl);
