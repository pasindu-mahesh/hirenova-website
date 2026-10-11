/* ============================================================
   HireNova — contact.js
   Form validation and email-sending via Gmail compose
   ============================================================ */
(function () {
  "use strict";

  var TO_EMAIL = "pasinduzone.m@gmail.com";

  var TEMPLATE =
    "Dear HireNova Team,\n\n" +
    "My name is [your name] from [organization].\n" +
    "I am writing regarding your research project \"HireNova: An Adaptive, Multi-Modal AI Interview and Candidate Assessment Platform\" (R26-IT-105).\n\n" +
    "Category: [category]\n" +
    "My email: [email]\n\n" +
    "Inquiry:\n[inquiry]\n\n" +
    "Sincerely,\n[your name]";

  document.addEventListener("DOMContentLoaded", function () {
    initContactForm();
    initCopyTemplate();
    initLiveTemplate();
  });

  /* Validate the form, then open Gmail compose in the current tab */
  function initContactForm() {
    var form = document.querySelector("[data-contact-form]");
    if (!form) return;

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var status = form.querySelector(".form__status");
      clearErrors(form);

      if (!validate(form)) {
        if (status) {
          status.textContent = "Please fix the highlighted fields.";
          status.style.color = "var(--color-danger)";
        }
        return;
      }

      var message = form.elements.message.value.trim();
      var mailSubject = "HireNova Research Inquiry (R26-IT-105)";

      var url =
        "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(TO_EMAIL) +
        "&su=" + encodeURIComponent(mailSubject) +
        "&body=" + encodeURIComponent(message);

      window.location.href = url;
    });
  }

  /* Keep the message template in sync with the filled-in fields */
  function initLiveTemplate() {
    var form = document.querySelector("[data-contact-form]");
    if (!form) return;

    var source = form.querySelector("[data-template]");
    var name = form.elements.name;
    var email = form.elements.email;
    var organization = form.elements.organization;
    var subject = form.elements.subject;
    var inquiry = form.elements.inquiry;
    if (!source || !name || !email || !organization || !subject || !inquiry) return;

    [name, email, organization, subject, inquiry].forEach(function (field) {
      field.addEventListener("input", function () {
        var body = TEMPLATE
          .split("[your name]").join(name.value.trim() || "[your name]")
          .split("[organization]").join(organization.value.trim() || "[organization]")
          .split("[category]").join(subject.value || "[category]")
          .split("[email]").join(email.value.trim() || "[email]")
          .split("[inquiry]").join(inquiry.value.trim() || "[write your inquiry here]");
        source.value = body;
      });
    });
  }

  function validate(form) {
    var valid = true;
    var fields = form.querySelectorAll("[required]");

    fields.forEach(function (field) {
      var value = field.value.trim();
      if (!value || (field.type === "email" && !isEmail(value))) {
        valid = false;
        showError(field);
      }
    });

    return valid;
  }

  function showError(field) {
    field.setAttribute("aria-invalid", "true");
    field.style.borderColor = "var(--color-danger)";
  }

  function clearErrors(form) {
    form.querySelectorAll("[aria-invalid]").forEach(function (field) {
      field.removeAttribute("aria-invalid");
      field.style.borderColor = "";
    });
  }

  function isEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  /* Copy the message template to clipboard */
  function initCopyTemplate() {
    var btn = document.querySelector("[data-copy-template]");
    var source = document.querySelector("[data-template]");
    if (!btn || !source) return;

    btn.addEventListener("click", function () {
      var text = source.value || source.textContent;
      navigator.clipboard
        .writeText(text)
        .then(function () {
          var original = btn.textContent;
          btn.textContent = "Copied!";
          setTimeout(function () {
            btn.textContent = original;
          }, 1500);
        })
        .catch(function () {
          console.warn("Clipboard unavailable");
        });
    });
  }
})();
