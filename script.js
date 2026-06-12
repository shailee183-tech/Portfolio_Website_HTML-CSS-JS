// var typed = new Typed('#element', {
//     strings: [
//         '<span style="color:#ff6b6b">Web Developer</span>',
//         '<span style="color:#4ecdc4">AI/ML Developer</span>',
//         '<span style="color:#ffd93d">Web Designer</span>',
//         '<span style="color:#c77dff">Data Analyst</span>'
//     ],
//     typeSpeed: 50,
//     contentType: 'html'
// });

// ============================
// Typed.js Animation
// ============================

var typed = new Typed('#element', {
    strings: [
        '<span style="color:#ff6b6b">Web Developer</span>',
        '<span style="color:#4ecdc4">AI/ML Developer</span>',
        '<span style="color:#ffd93d">Web Designer</span>',
        '<span style="color:#c77dff">Data Analyst</span>'
    ],
    typeSpeed: 60,
    backSpeed: 40,
    backDelay: 1500,
    loop: true,
    contentType: 'html'
});


// ============================
// AOS Initialization
// ============================

AOS.init({
    duration: 1000,
    once: true
});


// ============================
// Dark / Light Mode Toggle
// ============================

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});


// ============================
// Save Theme Preference
// ============================

if (localStorage.getItem("theme") === "light") {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "☀️";
}

themeToggle.addEventListener("click", () => {

    if (document.body.classList.contains("light-mode")) {
        localStorage.setItem("theme", "light");
    } else {
        localStorage.setItem("theme", "dark");
    }

});