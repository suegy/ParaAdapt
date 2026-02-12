(function () {
  function wrapSections() {
    const root = document.querySelector(".content.content-boxes");
    if (!root) return;

    // Support both H2 and H3 (in case your Markdown uses ###)
    const headings = Array.from(root.querySelectorAll("h2, h3"));
    if (headings.length === 0) return;

    // Avoid double-wrapping on hot reload / partial refreshes
    if (root.dataset.boxed === "1") return;
    root.dataset.boxed = "1";

    for (let i = 0; i < headings.length; i++) {
      const h = headings[i];
      const next = headings[i + 1] || null;

      const card = document.createElement("section");
      card.className = "section-card";

      const head = document.createElement("header");
      head.className = "section-card__head";

      const body = document.createElement("div");
      body.className = "section-card__body";

      // Insert card right before heading
      h.parentNode.insertBefore(card, h);
      head.appendChild(h);
      card.appendChild(head);
      card.appendChild(body);

      // Move following siblings into the body until the next heading
      let n = card.nextSibling;
      while (n && n !== next) {
        const nn = n.nextSibling;
        body.appendChild(n);
        n = nn;
      }
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", wrapSections, { once: true });
  } else {
    wrapSections();
  }
})();