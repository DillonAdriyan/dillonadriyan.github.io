// Toggle mobile nav menu
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobile-nav');

hamburger.addEventListener('click', () => {
    if (mobileNav.classList.contains('hidden')) {
        // Buka menu
        mobileNav.classList.remove('hidden');
        mobileNav.classList.add('nav-active');
        mobileNav.classList.remove('nav-closing');

        // Reset animasi setiap kali menu dibuka
        const navItems = mobileNav.querySelectorAll('.nav-item');
        navItems.forEach((item, index) => {
            item.style.opacity = 0;
            item.style.animation = `slideIn 0.3s ease ${index * 0.1}s forwards`;
        });
    } else {
        // Tutup menu dengan animasi
        closeNav();
    }
});

// Fungsi untuk menutup menu dengan animasi
function closeNav() {
    mobileNav.classList.add('nav-closing');
    const navItems = mobileNav.querySelectorAll('.nav-item');
    navItems.forEach((item, index) => {
        item.style.animation = `slideOut 0.3s ease ${index * 0.1}s forwards`;
    });

    // Sembunyikan menu setelah animasi selesai
    setTimeout(() => {
        mobileNav.classList.add('hidden');
        mobileNav.classList.remove('nav-active');
        mobileNav.classList.remove('nav-closing');
    }, 300); // Sesuaikan dengan durasi animasi (0.3s)
}

// Close mobile nav ketika mengklik di luar menu
document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !mobileNav.contains(e.target)) {
        closeNav();
    }
});