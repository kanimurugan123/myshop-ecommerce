// SELECT ELEMENTS
const qtyButtons = document.querySelectorAll(".qty button");
const removeButtons = document.querySelectorAll(".remove");
const totalText = document.querySelector(".cart-summary h2");

// UPDATE TOTAL FUNCTION
function updateTotal() {
  let total = 0;

  document.querySelectorAll(".cart-item").forEach(item => {
    const price = parseInt(
      item.querySelector(".price").innerText.replace("₹", "")
    );
    const qty = parseInt(
      item.querySelector(".qty span").innerText
    );

    total += price * qty;
  });

  totalText.innerText = `Total: ₹${total}`;
}

// QUANTITY + / -
qtyButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const qtySpan = btn.parentElement.querySelector("span");
    let qty = parseInt(qtySpan.innerText);

    if (btn.innerText === "+" && qty < 10) {
      qty++;
    }

    if (btn.innerText === "-" && qty > 1) {
      qty--;
    }

    qtySpan.innerText = qty;
    updateTotal();
  });
});

// REMOVE ITEM
removeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.remove();
    updateTotal();
  });
});

// INITIAL TOTAL
updateTotal();
