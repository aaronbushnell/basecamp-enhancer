/**
 * Add a class to the body to style in a more gentle way
 */
function addBodyClass() {
  document.querySelector("body").classList.add("basecamp-enhancer");
}

/**
 * Swap the generic Basecamp logo with the company name
 */
function addCompanyDetails() {
  // If the logo has already been added just exit out
  if (document.querySelector(".basecamp-enhancer__logo-label")) {
    return false;
  }

  const BCName = document.querySelector("meta[name='current-account-name']")
    .content;

  const node = document.createElement("span");
  node.innerText = BCName;
  node.classList.add("basecamp-enhancer__logo-label");
  document.querySelector(".nav__link--accounts").appendChild(node);
}

/**
 * Attempt to add the todo list details into a todo item
 */
function addListDetailsToTodoItem() {
  // Don't bother adding the item if it already exists
  if (document.querySelector(".todolist-details")) {
    return false;
  }

  // If this is a todo, let's try to pull in the todolist details
  if (/\/\d+\/buckets\/\d+\/todos\/\d+/.test(window.location.href)) {
    // Do we have access to a todolist URL?
    const $todoLink = document.querySelector(
      ".recording-breadcrumb__link:last-of-type [data-target='breadcrumbs.link']"
    );

    if ($todoLink && /todolists/.test($todoLink.href))
      fetch(
        document.querySelector(
          ".recording-breadcrumb__link:last-of-type [data-target='breadcrumbs.link']"
        ).href
      )
        .then((response) => response.text())
        .then((html) => {
          const doc = new DOMParser().parseFromString(html, "text/html");
          const listTitle = doc.querySelector("[data-bridge-alt]").innerText;
          const listDesc = doc.querySelector(".todolist__description")
            ? doc.querySelector(".todolist__description").innerText
            : "";

          document.querySelector(".todo-perma__details").insertAdjacentHTML(
            "beforebegin",
            `
        <div class="todolist-details">
          <h4>Todo list</h4>
          <h2>${listTitle}</h2>
          <p>${listDesc}</p>
        </div>
      `
          );
        })
        .catch((err) =>
          console.warn(
            "Something went wrong grabbing the todolist description.",
            err
          )
        );
  }
}

/**
 * Fire events when navigating between pages via Turbolinks
 */
document.addEventListener("turbolinks:load", () => {
  addBodyClass();
  addCompanyDetails();
  addListDetailsToTodoItem();
});

/**
 * Run the events when the document runs
 */
addBodyClass();
addCompanyDetails();
addListDetailsToTodoItem();
