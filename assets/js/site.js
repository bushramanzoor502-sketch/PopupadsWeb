// ClearGuard website: the only script. Collapses the nav into a menu button on narrow screens.
// Without JavaScript the nav simply stays open, so every page stays reachable.
document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
  }

  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });

  // Print every FAQ answer, not only the open ones.
  window.addEventListener("beforeprint", function () {
    document.querySelectorAll("details").forEach(function (d) {
      if (!d.open) { d.dataset.printOpened = "1"; d.open = true; }
    });
  });
  window.addEventListener("afterprint", function () {
    document.querySelectorAll("details[data-print-opened]").forEach(function (d) {
      d.open = false; delete d.dataset.printOpened;
    });
  });
});
