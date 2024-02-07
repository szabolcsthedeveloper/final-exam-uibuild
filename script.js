document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");

  books.forEach((book, index) => {
    const card = document.createElement("div");
    card.className = "card";

    const number = document.createElement("div");
    number.className = "card-number";
    number.textContent = index + 1;

    const sub = document.createElement("div");
    sub.className = "card-sub";
    sub.textContent = book.sub;

    const title = document.createElement("h2");
    title.className = "card-title";
    title.textContent = book.title;

    const text = document.createElement("p");
    text.className = "card-text";
    text.textContent = book.text;

    const button = document.createElement("button");
    button.textContent = "read more";

    card.appendChild(number);
    card.appendChild(sub);
    card.appendChild(title);
    card.appendChild(text);
    card.appendChild(button);

    container.appendChild(card);
  });
});
