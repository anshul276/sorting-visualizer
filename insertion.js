async function insertion(){
    console.log('In insertion()');
    const x = document.querySelectorAll(".bar");
    
    x[0].style.background = 'white';
    
    for(let i = 1; i < x.length; i++){
        let j = i - 1;
        let key = x[i].style.height;
        
        x[i].style.background = 'red';

        await wait_delay(delay);

        while(j >= 0 && (parseInt(x[j].style.height) > parseInt(key))){
            
            x[j].style.background = 'blue';
            x[j + 1].style.height = x[j].style.height;
            j--;

            await wait_delay(delay);

            
            for(let k = i; k >= 0; k--){
                x[k].style.background = 'white';
            }
        }
        x[j + 1].style.height = key;
        
        x[i].style.background = 'white';
    }
}

const inSortbtn = document.querySelector(".insertionSort");
inSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await insertion();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});


