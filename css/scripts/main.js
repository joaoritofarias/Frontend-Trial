/*eventListeners*/
document.addEventListener("scroll", handleScroll);
let scrollToTopBtn = document.querySelector(".scrollToTopBtn");

scrollToTopBtn.addEventListener("click", scrollToTop);

/*functions*/

function handleScroll() {
  let scrollableHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let GOLDEN_RATIO = 0.2;

  if ((document.documentElement.scrollTop / scrollableHeight ) > GOLDEN_RATIO) {
        if(!scrollToTopBtn.classList.contains("scrollBtnAnim")){
            scrollToTopBtn.classList.add("scrollBtnAnim");
        }

    } else {
        if(scrollToTopBtn.classList.contains("scrollBtnAnim")){
            scrollToTopBtn.classList.remove("scrollBtnAnim");
        }

    }
}

function scrollToTop() {
    window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
    });
}

