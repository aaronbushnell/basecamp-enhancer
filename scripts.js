(() => {
  // Add a class to the body to style in a more gentle way
  document.querySelector("body").classList.add("basecamp-enhancer");

  // Swap the generic Basecamp logo with the company name
  const BCName = document.querySelector("meta[name='current-account-name']")
    .content;

  const node = document.createElement("span");
  node.innerText = BCName;
  node.classList.add("basecamp-enhancer__logo-label");
  document.querySelector(".nav__link--accounts").appendChild(node);
})();
