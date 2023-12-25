window.addEventListener("load", () => {
  filter_gallery_items();
  faq_area();
});

const filter_gallery_items = () => {
  // Init
  let grid = $(".showcase-grid").isotope({
    itemSelector: ".shocase-area__item",
  });

  $(".showcase-navbar").on("click", "button", function () {
    let filterValue = $(this).attr("data-filter");

    grid.isotope({
      filter: filterValue,
    });
  });
  jQuery(document).on("click", ".showcase-navbar__buttons", function () {
    $(this).addClass("active").siblings().removeClass("active");
  });
};

const faq_area = () => {
  const accCard = document.querySelectorAll(".acc-card");
  accCard.forEach((Accordian) => {
    const toggler = Accordian.querySelector(".acc-toggler");
    const content = Accordian.querySelector(".acc-content");

    toggler.addEventListener("click", function () {
      const isActive = Accordian.classList.contains("active");
      if (isActive) {
        Accordian.classList.remove("active");
        content.style.maxHeight = null;
      } else {
        Accordian.classList.add("active");
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  });
};
