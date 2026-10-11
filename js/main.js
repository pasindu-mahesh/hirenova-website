/* ============================================================
   HireNova — main.js
   Mobile navigation, Subnav scroll tracking, Smooth Scroll & Back to top
   ============================================================ */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initMobileMenu();
    initSubnavScrollSpy();
    initBackToTop();
    initYear();
    initModals();
    initSearch();
  });

  /* Modal Dialogs (e.g. Adaptive AI Interview "Learn more") */
  function initModals() {
    var openers = document.querySelectorAll("[data-modal-open]");
    var modals = document.querySelectorAll(".modal");
    var lastFocused = null;

    function openModal(modal) {
      lastFocused = document.activeElement;
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("modal-open");
      var closeBtn = modal.querySelector(".modal__close");
      if (closeBtn) closeBtn.focus();
    }

    function closeModal(modal) {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("modal-open");
      if (lastFocused) lastFocused.focus();
    }

    openers.forEach(function (opener) {
      opener.addEventListener("click", function (e) {
        e.preventDefault();
        var modal = document.getElementById(opener.getAttribute("data-modal-open"));
        if (modal) openModal(modal);
      });
    });

    modals.forEach(function (modal) {
      modal.querySelectorAll("[data-modal-close]").forEach(function (el) {
        el.addEventListener("click", function () {
          closeModal(modal);
        });
      });

      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && modal.classList.contains("is-open")) {
          closeModal(modal);
        }
      });
    });
  }

  /* Mobile Navigation Menu Toggle */
  function initMobileMenu() {
    var toggle = document.querySelector(".nav-toggle");
    var nav = document.querySelector(".nav");
    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {
      var isOpen = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    nav.addEventListener("click", function (e) {
      if (e.target.closest(".nav__link")) {
        nav.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });
  }

  /* Subnav ("ON THIS PAGE") Active Link ScrollSpy */
  function initSubnavScrollSpy() {
    var subnavLinks = document.querySelectorAll(".subnav-link");
    if (!subnavLinks.length) return;

    var sectionIds = Array.from(subnavLinks).map(function (link) {
      return link.getAttribute("href").replace("#", "");
    });

    var sections = sectionIds.map(function (id) {
      return document.getElementById(id);
    }).filter(Boolean);

    function onScroll() {
      var scrollPos = window.scrollY + 180;

      sections.forEach(function (section) {
        var top = section.offsetTop;
        var height = section.offsetHeight;
        var id = section.getAttribute("id");

        if (scrollPos >= top && scrollPos < top + height) {
          subnavLinks.forEach(function (link) {
            if (link.getAttribute("href") === "#" + id) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        }
      });
    }

    window.addEventListener("scroll", onScroll);
    onScroll();
  }

  /* Back-to-top button */
  function initBackToTop() {
    var btn = document.querySelector(".back-to-top-btn");
    if (!btn) return;

    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  /* Auto-update copyright year */
  function initYear() {
    var el = document.querySelector("[data-year]");
    if (el) el.textContent = new Date().getFullYear();
  }

  /* Header site search overlay */
  function initSearch() {
    var searchBtns = document.querySelectorAll(".search-btn");
    if (!searchBtns.length) return;

    var overlay = document.createElement("div");
    overlay.className = "site-search";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-hidden", "true");
    overlay.innerHTML =
      '<div class="site-search__bar">' +
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>' +
      '<input type="search" class="site-search__input" placeholder="Search the site… e.g. proposal, slides, contact" aria-label="Search the site" autocomplete="off" spellcheck="false">' +
      '<button type="button" class="site-search__close" aria-label="Close search">' +
      '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>' +
      "</button>" +
      "</div>";
    document.body.appendChild(overlay);

    var input = overlay.querySelector(".site-search__input");
    var closeBtn = overlay.querySelector(".site-search__close");
    var lastFocused = null;

    function openSearch() {
      lastFocused = document.activeElement;
      overlay.classList.add("is-open");
      overlay.setAttribute("aria-hidden", "false");
      input.value = "";
      input.focus();
    }

    function closeSearch() {
      overlay.classList.remove("is-open");
      overlay.setAttribute("aria-hidden", "true");
      if (lastFocused) lastFocused.focus();
    }

    searchBtns.forEach(function (btn) {
      btn.addEventListener("click", openSearch);
    });

    closeBtn.addEventListener("click", closeSearch);

    input.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeSearch();
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && overlay.classList.contains("is-open")) closeSearch();
    });

    overlay.addEventListener("click", function (e) {
      if (e.target === overlay) closeSearch();
    });

    document.addEventListener("click", function (e) {
      if (overlay.classList.contains("is-open") && !overlay.contains(e.target) && !e.target.closest(".search-btn")) {
        closeSearch();
      }
    });
  }
})();
