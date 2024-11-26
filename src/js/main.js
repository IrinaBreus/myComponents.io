import accordion from '../pages/accordion/accordion';
import selected from '../pages/accordion/selected';
import animation3 from '../pages/animation/animation3';
import circleBar from '../pages/counters/circleBar';
import counter from '../pages/counters/counter';
import lineBar from '../pages/counters/lineBar';
import rating from '../pages/rating/rating';

document.addEventListener('DOMContentLoaded', () => {
'use stricti';

animation3();
counter();
accordion();
selected();
rating();
lineBar();
circleBar();
});