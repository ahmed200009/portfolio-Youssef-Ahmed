// Function to scroll to the works section
function scrollToWorks() {
    const worksSection = document.getElementById('works');
    window.scrollTo({
        top: worksSection.offsetTop,
        behavior: 'smooth'
    });
}
