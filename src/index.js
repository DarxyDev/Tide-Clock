import './style/normalize.css';
import './style/style.css';

import apiManager from './script/api-manager.js';
import styleManager from './script/element-styler.js';
import clockManager from './script/clock-manager.js';

const ref = {
    clock: {
        clock: document.getElementById('clock'),
        minute: document.getElementById('minuteHand'),
        hour: document.getElementById('hourHand'),
        tide: document.getElementById('tideHand')
    }
}
const data = {
    location: 'gloucester'
}
//Initialize
styleManager.setElementAspectRatio(ref.clock.clock, 1);
clockManager.setReferences(ref.clock);

//

clockManager.updateTime();