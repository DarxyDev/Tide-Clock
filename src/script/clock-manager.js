const clockManager = (() => {
    let ref = {};
    let tideArr = [];
    let date = new Date();
    function setReferences(refObj) {
        ref = refObj;
    }
    function setTimeHands(newDate = undefined) {
        if (newDate !== undefined) date = newDate;
        _setMinuteHand();
        _setHourHand();
        function _setMinuteHand() {
            let min = date.getMinutes();
            let turns = min / 60;
            _rotateHand(ref.minute, turns);
        }
        function _setHourHand() {
            let hours = date.getHours() % 12;
            let min = (hours * 60) + date.getMinutes();
            let turns = min / (12 * 60);
            _rotateHand(ref.hour, turns);
        }

    }
    function setTideData(tideArray) {
        tideArr = tideArray;
    }
    function setTideHand() {
        //get current AM/PM tide times
        let min = ((date.getHours() % 12) * 60) + date.getMinutes();
        let i = 0;
        while(tideArr[i].min < min) i++;
        let prevTide = tideArr[i - 1].min;
        let nextTide = tideArr[i].min;
        let flooding = tideArr[i].type === 'HIGH';

        let tideCycle = Math.abs(nextTide - prevTide)
        min -= prevTide % tideCycle;
        let turns = (min / tideCycle) / 2;
        if (flooding) turns += .5;
        _rotateHand(ref.tide, turns);
    }
    function _rotateHand(hand, turns) {
        hand.style.transform = 'rotate(' + turns + 'turn)';
    }

    return { setReferences, setTimeHands, setTideHand, setTideData };
})()

export default clockManager;