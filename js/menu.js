(() => {
    const menuBtnref = document.querySelector("[data-menu-button]");
    const mobileMenuRef = document.querySelector("[data-menu]");

    menuBtnref.addEventListener("click", () => {
        const expanded =
            menuBtnref.getAttribute("aria-expanded") === "true" || false;
        menuBtnref.classList.toggle("is-open");
        menuBtnref.setAttribute("aria-expanded", !expanded);
        mobileMenuRef.classList.toggle("is-open");
    });
})();