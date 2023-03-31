const styleManager = (() => {
    function setElementAspectRatio(element = document.body, ratio) {
        const parent = element.parentNode;
        window.addEventListener('resize', _onResize);
        _onResize();
        function _onResize(e){
            document.offsetHeight;
            const width = parent.offsetWidth;
            const height = parent.offsetHeight;
            let newSize;
            
            if(height > width) newSize = width;
            else newSize = height;

            newSize = `${newSize}px`;
            element.style.height = newSize;
            element.style.width = newSize;
        }
    }
    return {setElementAspectRatio};
})();
export default styleManager;

function _info(){
    console.log(`Body: ${document.body.offsetWidth}, ${document.body.offsetHeight}`);
    let c = document.getElementById('clockContainer');
    console.log(`Container: ${c.offsetWidth}, ${c.offsetHeight}`);
    let d = document.getElementById('clock');
    console.log(`Clock: ${d.offsetWidth}, ${d.offsetHeight}`);
    console.log('\n');
}