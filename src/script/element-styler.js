const styleManager = (() => {
    function setElementAspectRatio(element = document.body, ratio) {
        const parent = element.parentNode;
        window.addEventListener('resize', ((event)=>{
            document.offsetHeight;
            const width = parent.offsetWidth;
            const height = parent.offsetHeight;
            let newSize;
            
            if(height > width) newSize = width;
            else newSize = height;

            newSize = `${newSize}px`;
            element.style.height = newSize;
            element.style.width = newSize;
            console.log(newSize);
        })())
    }
    return {setElementAspectRatio};
})();
export default styleManager;