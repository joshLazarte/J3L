const ScrollCtrl = (function(){
    const topBtn = document.getElementById('topBtn');
    
    function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            topBtn.style.display = "block";
        } else {
            topBtn.style.display = "none";
        }
    }

    function topFunction() {
        window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    }
    
    return {
        init: function() {
            window.onscroll = function() {scrollFunction()};
            topBtn.addEventListener('click', topFunction);
        }
    };
})();

export default ScrollCtrl;