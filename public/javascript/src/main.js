import smoothscroll from 'smoothscroll-polyfill';
import MenuCtrl from './MenuCtrl';
import SliderCtrl from './SliderCtrl';
import ScrollCtrl from './ScrollCtrl';

smoothscroll.polyfill();
MenuCtrl.loadEventListeners();
ScrollCtrl.init();

if(document.getElementById('portfolio')){
    SliderCtrl.loadEventListeners();
}

if(document.getElementById('sidebar')){
    MenuCtrl.loadSideBarEventListeners();
}