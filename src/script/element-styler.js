const styleManager = (() => {
    function setElementAspectRatio(element = document.body, ratio) {
        const parent = element.parentNode;
        window.addEventListener('resize', _onResize);
        _onResize();
        function _onResize(e){
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