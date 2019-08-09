const SliderCtrl = (function(){
    const leftArrow  = document.getElementById('arrow-left'),
          rightArrow = document.getElementById('arrow-right'),
          cof        = document.getElementById('cof'),
          ro         = document.getElementById('ro'),
          mammoth    = document.getElementById('mammoth'),
          content    = document.getElementById('portfolio-content'),
          linkBtn    = document.getElementById('web-link'),
          images     = [cof, ro, mammoth];
          
    const rockportOaksDescription = `
    <div id="fade-in">
        <div class="u-float-left description">
            <img src="/img/RO Logo White.png" alt="Rockport Oaks Logo" class="description__logo description__logo--RO">
            <p class="description__text">
                Rockport Oaks is a luxury RV park development in Rockport, Texas. It provides residents with the unique opportunity to lease
                or purchase thier own lot. Purchased lot's can then be rented out when the owner is not in town.
            </p>
        </div>
        <div class="u-float-right bullets">
            <h3 class="bullets__heading">
                Products and Features
            </h3>
            <ul class="bullets__list">
                <li class="bullets__list-item">Standard Tier</li>
                <li class="bullets__list-item">Content Management services</li>
                <li class="bullets__list-item">Custom logo design</li>
                <li class="bullets__list-item">Additional functionality to post, update, and arrange available lots</li>
            </ul>
            <a href="/hire" class="btn btn--long btn--sm">Get Started</a>
        </div>
    </div>`; 
    
    const cofDescription = `
    <div id="fade-in">
        <div class="u-float-left description">
            <img src="/img/COF-logo.png" alt="Community of Faith Logo" class="description__logo description__logo--COF">
            <p class="description__text">
                Community of Faith is a Baptist church in Corpus Christi, Texas. They are family
                oriented and driven by their love for God and all His children.
            </p>
        </div>
        <div class="u-float-right bullets">
            <h3 class="bullets__heading">
                Products and Features
            </h3>
            <ul class="bullets__list">
                <li class="bullets__list-item">Premium Tier (Content Mangement service included for free)</li>
                <li class="bullets__list-item">Custom built calendar widget to add and update church events</li>
                <li class="bullets__list-item">Integrated YouTube channel to display sermons and other media</li>
                <li class="bullets__list-item">Functionality to update personnel records and church ministries</li>
            </ul>
            <a href="/hire" class="btn btn--long btn--sm">Get Started</a>
        </div>
    </div>`;
    
    const mammothDescription = `
    <div id="fade-in">
        <div style="margin-left: 5%;" class="u-float-left description">
            <img src="/img/Mammoth-logo.png" alt="Mammoth Training Center Logo" class="description__logo description__logo--mammoth">
            <p class="description__text">
                Mammoth Training Center is family owned and operated in Rockport, Texas. They specialize in 
                Muay Thai, Strongman, Powerlifting, and general fitness.
            </p>
        </div>
        <div style="margin-right: -5%;" class="u-float-right bullets">
            <h3 class="bullets__heading">
                Products and Features
            </h3>
            <ul class="bullets__list">
                <li class="bullets__list-item">Standard Tier</li>
                <li class="bullets__list-item">Custom homepage image slider</li>
                <li class="bullets__list-item">reCaptcha form authentication</li>
                <li class="bullets__list-item">Google maps platform integration</li>
            </ul>
            <a href="/hire" class="btn btn--long btn--sm">Get Started</a>
        </div>
    </div>`;
    
    function sliderGoRight() {
        images.forEach((image) => {
            if(image.className === 'gallery__left') {
                image.className = 'gallery__selected';
            } else if(image.className === 'gallery__selected'){
                image.className = 'gallery__right';
            } else {
                image.className = 'gallery__left';
            }
        });
    }
    
    function sliderGoLeft() {
        images.forEach((image) => {
            if(image.className === 'gallery__left') {
                image.className = 'gallery__right';
            } else if(image.className === 'gallery__selected'){
                image.className = 'gallery__left';
            } else {
                image.className = 'gallery__selected';
            }
        });
    }
    
    function changeContent() {
        if(cof.className === 'gallery__selected') {
            content.innerHTML = cofDescription;
            document.getElementById('fade-in').style.animation = "reveal 3s forwards";
            linkBtn.href="https://wearecommunityoffaith.org";
        } else if(ro.className === 'gallery__selected') {
            content.innerHTML = rockportOaksDescription;
            document.getElementById('fade-in').style.animation = "reveal 3s forwards";
            linkBtn.href = "http://104.248.73.201/";
        } else {
            content.innerHTML = mammothDescription;
            document.getElementById('fade-in').style.animation = "reveal 3s forwards";
            linkBtn.href = "http://167.99.172.59/";
        }
    }
    
    function changeLeft() {
        sliderGoLeft();
        changeContent();
    }
    
    function changeRight() {
        sliderGoRight();
        changeContent();
    }
    
    return {
        loadEventListeners: function() {
            content.innerHTML = rockportOaksDescription;
            leftArrow.addEventListener('click', changeLeft);
            rightArrow.addEventListener('click', changeRight);
        }
    };
})();

export default SliderCtrl;