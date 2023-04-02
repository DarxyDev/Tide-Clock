const clockManager = (() => {
    let ref = {};
    let tide = {};
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
    function setTideData(low1,high1,low2,high2){
        tide.low1 = low1;
        tide.high1 = high1;
        tide.low2 = low2;
        tide.high2 = high2;
    }
    function setTideHand() {
        //get current AM/PM tide times
        let flooding = true;
        let prevTide =  2 * 60 + 36;
        let nextTide = 10 * 60 + 40;


        let tideCycle = Math.abs(nextTide - prevTide)
        let min = ((date.getHours() % 12) * 60) + date.getMinutes();
        min -= prevTide % tideCycle;
        let turns = (min / tideCycle) / 2;
        if(flooding) turns += .5;
        _rotateHand(ref.tide, turns);
    }
    function _rotateHand(hand, turns) {
        hand.style.transform = 'rotate(' + turns + 'turn)';
    }

    return { setReferences, setTimeHands, setTideHand, setTideData};
})()

export default clockManager;