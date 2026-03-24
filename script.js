const cursor = document.querySelector(".cursor-follower");

if (window.matchMedia("(pointer: fine)").matches) {
    cursor.style.display = "block";
    const xTo = gsap.quickTo(cursor, "x", { duration: 0.3, ease: "power3" });
    const yTo = gsap.quickTo(cursor, "y", { duration: 0.3, ease: "power3" });

    window.addEventListener("mousemove", e => {
        xTo(e.clientX);
        yTo(e.clientY);
    });

    document.querySelectorAll(".card, .btn").forEach(el => {
        el.addEventListener("mouseenter", () => gsap.to(cursor, { scale: 4, duration: 0.3 }));
        el.addEventListener("mouseleave", () => gsap.to(cursor, { scale: 1, duration: 0.3 }));
    });
}

gsap.from(".card", {
    y: 40,
    opacity: 0,
    duration: 1,
    stagger: 0.1,
    ease: "power4.out",
    delay: 0.2
});