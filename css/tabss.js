const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item1");
const panes = $$(".tab-pane1");

const tabActive = $(".tab-item1.active");
const line = $(".tabs1 .line");

line.style.left = tabActive.offsetLeft + "px";
line.style.width = tabActive.offsetWidth + "px";

tabs.forEach((tab, index) => {
    const pane = panes[index];

    tab.onclick = function() {
        $(".tab-item1.active").classList.remove("active");
        $(".tab-pane1.active").classList.remove("active");

        line.style.left = this.offsetLeft + "px";
        line.style.width = this.offsetWidth + "px";

        this.classList.add("active");
        pane.classList.add("active");
    };
});