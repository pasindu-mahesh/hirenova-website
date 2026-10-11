/* ============================================================
   HireNova — milestones.js
   Assessment selector, details and timeline
   ============================================================ */
(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", function () {
    initAssessmentSelector();
  });

  function initAssessmentSelector() {
    var selectWrap = document.querySelector("[data-assessment-select]");
    var trigger = document.querySelector(".assessment-select__trigger");
    var options = document.querySelectorAll(".assessment-option");
    var panels = document.querySelectorAll("[data-assessment-panel]");

    if (!selectWrap || !trigger || !options.length || !panels.length) {
      return;
    }

    var selectedValue = document.querySelector(".selected-value");

    function setActive(target) {
      var selectedOption = Array.from(options).find(function (option) {
        return option.getAttribute("data-target") === target;
      });

      if (!selectedOption || !selectedValue) {
        return;
      }

      selectedValue.textContent = selectedOption.textContent.trim();

      options.forEach(function (option) {
        var active = option === selectedOption;
        option.classList.toggle("is-selected", active);
        option.setAttribute("aria-selected", String(active));
      });

      panels.forEach(function (panel) {
        var match = panel.getAttribute("data-assessment-panel") === target;
        panel.hidden = !match;
        panel.classList.toggle("is-visible", match);
      });

      selectWrap.classList.remove("is-open");
      trigger.setAttribute("aria-expanded", "false");
    }

    trigger.addEventListener("click", function () {
      var isOpen = selectWrap.classList.contains("is-open");
      selectWrap.classList.toggle("is-open", !isOpen);
      trigger.setAttribute("aria-expanded", String(!isOpen));
    });

    document.addEventListener("click", function (event) {
      if (!selectWrap.contains(event.target)) {
        selectWrap.classList.remove("is-open");
        trigger.setAttribute("aria-expanded", "false");
      }
    });

    options.forEach(function (option) {
      option.addEventListener("click", function () {
        setActive(option.getAttribute("data-target"));
      });
    });

    setActive("progress-1");
  }
})();
