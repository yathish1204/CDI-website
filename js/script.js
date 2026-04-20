// Navbar Functionality
const navbar = document.getElementById("navbar");
let lastScroll = 0;

function handleScroll() {
  const currentScroll =
    window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScroll + 5) {
    navbar.style.top = "-88px";
  } else if (currentScroll < lastScroll - 5) {
    navbar.style.top = "0";
  }

  lastScroll = currentScroll <= 0 ? 0 : currentScroll;
}

window.addEventListener("scroll", handleScroll);

// Toggle Password

function togglePassword() {
  const passwordInput = document.getElementById("password");
  const toggler = document.querySelector("#toggle-icon i");

  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    toggler.classList.remove("bi-eye");
    toggler.classList.add("bi-eye-slash");
  } else {
    passwordInput.type = "password";
    toggler.classList.remove("bi-eye-slash");
    toggler.classList.add("bi-eye");
  }
}

// GSAP Animation

gsap.registerPlugin(ScrollTrigger);

// document.addEventListener("DOMContentLoaded", (event) => {
//   // Navbar Animation
//   gsap.from(".nav-item ", {
//     y: -20,
//     stagger: 0.2,
//     duration: 0.3,
//     opacity: 0,
//   });

//   // Hero Section Animation
//   gsap.to(".card-img-mask", {
//     scale: 1.25,
//     x: 100,
//     ease: "power3",
//     scrollTrigger: {
//       trigger: ".hero-container",
//       start: "top 10%",
//       end: "bottom start",
//       // markers:true,
//       scrub: 2,
//     },
//   });
// });

// document.addEventListener("DOMContentLoaded", () => {
//   const video = document.querySelector(".bg-video");

//   // Wait for video metadata
//   video.addEventListener("loadedmetadata", () => {
//     gsap.to(video, {
//       currentTime: video.duration,
//       ease: "none",
//       scrollTrigger: {
//         trigger: ".hero-container",
//         start: "top 20%",
//         end: "bottom 50%",
//         scrub: true,
//         // markers: true,
//       },
//     });
//   });
// });

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", () => {
  const video = document.querySelector(".bg-video");

  video.pause();
  video.currentTime = 0;

  video.addEventListener("loadedmetadata", () => {
    const duration = video.duration;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#hero",
        start: "top 0%",
        end: "+=" + duration * 100,
        scrub: true,
        pin: true,
        anticipatePin: 1,
        // markers: true,
      },
    });

    // 🎥 Sync video with scroll
    tl.to(video, {
      currentTime: duration,
      ease: "none",
    });
  });
});
