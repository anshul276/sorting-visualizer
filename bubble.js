async function bubble() {

    const x = document.querySelectorAll(".bar");
    for(let i = 0; i < x.length-1; i++){
        
        for(let j = 0; j < x.length-i-1; j++){

            x[j].style.background = 'blue';
            x[j+1].style.background = 'blue';
            if(parseInt(x[j].style.height) > parseInt(x[j+1].style.height)){
                await wait_delay(delay);
                swap(x[j], x[j+1]);
            }

            x[j].style.background = 'rgb(191, 0, 255)';
            x[j+1].style.background = 'rgb(191, 0, 255)';
        }
        x[x.length-1-i].style.background = 'white';
    }
    x[0].style.background = 'white';
}

const bubSortbtn = document.querySelector(".bubbleSort");
bubSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await bubble();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
