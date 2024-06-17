function showTopBar(){
    let country = "France";
    let vat = 20;
    setTimeout(() => {
        document.querySelector("section.country-bar")
        .innerHTML = `<p>Orders to <b>${country}</b> are subject to <b>${vat}%</b> VAT</p>`
        document.querySelector("section.country-bar")
        .classList.remove('hidden')
    }, 1000);
}



showTopBar();

// lazy load script based on screen intersection
// document.addEventListener('DOMContentLoaded', function() {
//     var observer = new IntersectionObserver(function(entries, observer) {
//         entries.forEach(function(entry) {
//             if (entry.isIntersecting) {
//                 var script = document.createElement('script');
//                 script.src = 'js/products.js';
//                 document.body.appendChild(script);
//                 observer.unobserve(entry.target); // Stop observing once the script is loaded
//             }
//         });
//     }, { rootMargin: '0px', threshold: 0.1 });

//     var target = document.getElementById('all-products');
//     observer.observe(target);
// });





