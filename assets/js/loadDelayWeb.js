document.addEventListener("DOMContentLoaded", function() {
    const lazyElements = document.querySelectorAll('.lazy-content');
    const lazyElementsBanner = document.querySelectorAll('.lazy-content-banner');


    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loaded');
                observer.unobserve(entry.target);        
            }
        });
    });

    const observerbanner = new IntersectionObserver((entries, observerbanner) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('loadedbanner');
                observerbanner.unobserve(entry.target);        
            }
        });
    });


    lazyElements.forEach(element => {
        observer.observe(element);
    });
    lazyElementsBanner.forEach(element => {
        observerbanner.observe(element);
    });
});