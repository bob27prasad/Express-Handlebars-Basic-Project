// for footer
let footerContents = document.querySelector(".contents")

//is a way to get the height of the entire document, including the content that is not visible on the screen due to overflow. It returns the height in pixels, and it includes the element’s padding, but not its border, margin, or horizontal scrollbar.
var documentHeight = document.documentElement.scrollHeight
//is a way to get the height of the entire document, including the content that is not visible on the screen due to overflow. It returns the height in pixels, and it includes the element’s padding, but not its border, margin, or horizontal scrollbar 
var windowHeight = window.innerHeight

window.onscroll = () => {
    //returns the number of pixels the document has scrolled vertically from the upper left corner of the window

    var scrollPosition = document.documentElement.scrollTop;

    if (scrollPosition + windowHeight + 300 >= documentHeight) {
        footerContents.classList.add("open")
    } else {
        footerContents.classList.remove("open")
    }
}