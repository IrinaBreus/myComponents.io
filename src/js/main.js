import accordion from '../pages/accordion/accordion';
import selected from '../pages/accordion/selected';
import animation3 from '../pages/animation/animation3';
import animation5 from '../pages/animation/animation5';
import circleBar from '../pages/counters/circleBar';
import counter from '../pages/counters/counter';
import lineBar from '../pages/counters/lineBar';
import rating from '../pages/rating/rating';
import calendar from '../pages/times/calendar';
import clock from '../pages/times/clock';
import timer from '../pages/times/timer';

document.addEventListener('DOMContentLoaded', () => {
'use stricti';

animation3();
animation5();

counter();

accordion();

selected();

rating();

lineBar();
circleBar();

calendar();
clock();
timer();
});