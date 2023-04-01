const clockManager = (() =>{
    let ref = {};
    function setReferences(refObj){
        ref = refObj;
    }
    function updateTime(date = undefined){
        if(date === undefined) date = new Date();
        _setMinuteHand();
        _setHourHand();
        function _setMinuteHand(){
            let min = date.getMinutes() % 60;
            let turns = min / 60;
            _rotateHand(ref.minute, turns);
        }
        function _setHourHand(){
            let hours = date.getHours() % 12;
            let turns = hours / 12;
            _rotateHand(ref.hour,turns);
        }
        function _rotateHand(hand, turns){
            hand.style.transform = 'rotate(' + turns + 'turn)';
        }
    }
    return{setReferences, updateTime};
})()

export default clockManager;