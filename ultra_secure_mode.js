(function() {
  document.addEventListener('contextmenu', e => {
    // Check if the user right-clicked specifically on the page background
    // (common way to open "Inspect")
    if (e.target === document.body) {
      e.preventDefault();
      e.stopImmediatePropagation();
      document.body.innerHTML = '<div style="background:black;color:#f00;font-family:monospace;text-align:center;padding-top:30vh;font-size:2em;">🚫 INSPECT BLOCKED</div>';
      return false;
    }
    // Otherwise allow normal right-click menus
  });
})();
