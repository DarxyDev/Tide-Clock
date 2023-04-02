import './style/normalize.css';
import './style/style.css';

import apiManager from './script/api-manager.js';
import styleManager from './script/element-styler.js';
import clockManager from './script/clock-manager.js';

//var

const UPDATE_INTERVAL = 1000; //ms

const ref = {
    clock: {
        clock: document.getElementById('clock'),
        minute: document.getElementById('minuteHand'),
        hour: document.getElementById('hourHand'),
        tide: document.getElementById('tideHand')
    }
}

const data = {
    initialized: false,
    location: '01930',
}

main();
async function main() {
    styleManager.setElementAspectRatio(ref.clock.clock, 1);
    clockManager.setReferences(ref.clock);

    data.tide = formatTideData(await apiManager.getTideData());

    clockManager.setTimeHands();
    clockManager.setTideHand();
    setInterval(() => {
        clockManager.setTimeHands();
        clockManager.setTideHand();
    }, UPDATE_INTERVAL);
    setInterval(async () => {
        data.tide = formatTideData(await apiManager.getTideData());
        clockManager.setTideData(data.tide);
    }, 1000 * 60 * 60 * 12)



    function formatTideData(forecast) {
        forecast.forEach(entry => {
            entry.tide_time_min = _tideTimeToMin(entry.tide_time);
        })

        function _tideTimeToMin(timestr) {
            timestr = timestr.slice(-5,timestr.length);
            let timearr = timestr.split(':');
            let min = +timearr[0] * 60 + +timearr[1];
            return min;
;        }
        console.log(forecast);
    }

}




