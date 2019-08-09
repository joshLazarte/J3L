const MenuCtrl = (function(){
    const menu         = document.getElementById('menu'),
          menuItems    = Array.from(document.getElementsByClassName('expand-item')),
          openMenuBtn  = document.getElementById('menu-open'),
          closeMenuBtn = document.getElementById('menu-close'),
          sidebarBtn   = document.getElementById('sidebarBtn'),
          sidebar      = document.getElementById('sidebar');
          
    function openMenu() {
        menu.style.animation = "expandMenu 1.5s forwards";
        closeMenuBtn.style.animation = "reveal 1s 1.5s forwards ease-in";
        menuItems.forEach((item) => {
            item.style.animation = "moveInItems .5s 1.5s forwards ease-in-out";
        });
    }
    
    function closeMenu() {
        menu.style.animation = "closeMenu 1.5s forwards";
        closeMenuBtn.style.animation = "hide .3s forwards ease-in";
        menuItems.forEach((item) => {
            item.style.animation = "hideItems .3s forwards";
        });
    }
    
    function animateSidebar() {
        const open = '&#8250;';
        const close = '&#8249;';
        const children = Array.from(sidebar.children);
        if(sidebarBtn.dataset.state === 'closed') {
            sidebarBtn.style.left = '24rem';
            sidebarBtn.innerHTML = close;
            sidebar.style.width = '20rem';
            sidebar.style.padding = '4rem 2rem 0 2rem';
            children.forEach((child) => {
                child.style.display = 'block';
                child.style.animation = 'reveal .2s .1s forwards';
            });
            sidebarBtn.setAttribute('data-state', 'open');
        } else {
            sidebarBtn.style.left = '2.5rem';
            sidebarBtn.innerHTML = open;
            sidebar.style.width = '.5rem';
            sidebar.style.padding = '4rem 2rem 0 0';
            children.forEach((child) => {
                child.style.display = 'none';
            });
            sidebarBtn.setAttribute('data-state', 'closed');
        }
    }
    
    return {
        loadEventListeners: function() {
            openMenuBtn.addEventListener('click', openMenu);      
            closeMenuBtn.addEventListener('click', closeMenu);
        },
        loadSideBarEventListeners: function() {
            sidebarBtn.addEventListener('click', animateSidebar);
        },
    };
})();

export default MenuCtrl;