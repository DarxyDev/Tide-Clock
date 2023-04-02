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
    forecast: undefined,
    tide: []
}

main();
async function main() {
    styleManager.setElementAspectRatio(ref.clock.clock, 1);
    clockManager.setReferences(ref.clock);

    await updateForecast();
    updateClock();

    setInterval(updateClock, UPDATE_INTERVAL);
    setInterval(updateForecast, 1000 * 60 * 60 * 12)

    return;

    async function updateForecast() {
        data.forecast = await apiManager.getTideData();
        data.tide = formatTideData(data.forecast);
        clockManager.setTideData(data.tide);
    }
    function updateClock(){
        clockManager.setTimeHands();
        clockManager.setTideHand();
    }


    function formatTideData(forecast) {
        let tidearr = [];
        forecast.forEach(entry => {
            let tideobj = {
                min: _tideTimeToMin(entry.tide_time),
                type: entry.tide_type
            }
            tidearr.push(tideobj);
        })
        return tidearr;

        function _tideTimeToMin(timestr) {
            timestr = timestr.slice(-5, timestr.length);
            let timearr = timestr.split(':');
            let min = +timearr[0] * 60 + +timearr[1];
            return min;
            ;
        }
    }

}




