(()=>{const e={openMenuBtn:document.querySelector("[data-menu-open]"),closeMenuBtn:document.querySelector("[data-menu-close]"),menu:document.querySelector("[data-menu]"),menuList:document.querySelector(".list-menu-js")};function n(){e.menu.classList.toggle("is-hidden"),document.querySelector("body").classList.toggle("is-body-hidden")}e.openMenuBtn.addEventListener("click",n),e.closeMenuBtn.addEventListener("click",n),e.menuList.addEventListener("click",(function(){e.menu.classList.add("is-hidden"),document.querySelector("body").classList.remove("is-body-hidden")}))})();
//# sourceMappingURL=index.c98f4c0d.js.map
