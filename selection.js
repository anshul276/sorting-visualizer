async function selection(){

    const x = document.querySelectorAll(".bar");
    for(let i = 0; i < x.length; i++){

        let min_index = i;
        
        x[i].style.background = 'blue';
        for(let j = i+1; j < x.length; j++){
            
            x[j].style.background = 'red';

            await wait_delay(delay);

            if(parseInt(x[j].style.height) < parseInt(x[min_index].style.height)){
                if(min_index !== i){
                    x[min_index].style.background = 'rgb(191, 0, 255)';
                }
                min_index = j;
            } 
            else{
                x[j].style.background = 'rgb(191, 0, 255)';
            }   
        }
        await wait_delay(delay);
        swap(x[min_index], x[i]);
        
        x[min_index].style.background = 'rgb(191, 0, 255)';
        
        x[i].style.background = 'white';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await selection();
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});
