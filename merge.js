
async function merge(x, low, mid, high){

    const n1 = mid - low + 1;
    const n2 = high - mid;

    let left = new Array(n1);
    let right = new Array(n2);

    for(let i = 0; i < n1; i++){
        await wait_delay(delay);

        x[low + i].style.background = 'orange';
        left[i] = x[low + i].style.height;
    }
    for(let i = 0; i < n2; i++){
        await wait_delay(delay);

        console.log(x[mid + 1 + i].style.height + ' at ' + (mid+1+i));
        
        x[mid + 1 + i].style.background = 'yellow';
        right[i] = x[mid + 1 + i].style.height;
    }
    await wait_delay(delay);
    let i = 0, j = 0, k = low;
    while(i < n1 && j < n2){
        await wait_delay(delay);
        
        if(parseInt(left[i]) <= parseInt(right[j])){

            if((n1 + n2) === x.length){
                x[k].style.background = 'white';
            }
            else{
                x[k].style.background = 'lightgreen';
            }
            
            x[k].style.height = left[i];
            i++;
            k++;
        }
        else{
            
            if((n1 + n2) === x.length){
                x[k].style.background = 'white';
            }
            else{
                x[k].style.background = 'lightgreen';
            } 
            x[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while(i < n1){
        await wait_delay(delay);
        
        if((n1 + n2) === x.length){
            x[k].style.background = 'white';
        }
        else{
            x[k].style.background = 'lightgreen';
        }
        x[k].style.height = left[i];
        i++;
        k++;
    }
    while(j < n2){
        await wait_delay(delay);
        
        if((n1 + n2) === x.length){
            x[k].style.background = 'white';
        }
        else{
            x[k].style.background = 'lightgreen';
        }
        x[k].style.height = right[j];
        j++;
        k++;
    }
}

async function mergeSort(x, l, r){

    if(l >= r){
        return;
    }
    const m = l + Math.floor((r - l) / 2);

    await mergeSort(x, l, m);
    await mergeSort(x, m + 1, r);
    await merge(x, l, m, r);
}

const mergeSortbtn = document.querySelector(".mergeSort");
mergeSortbtn.addEventListener('click', async function(){
    let x = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(x.length) - 1;
    disableSortingBtn();
    disableSizeSlider();
    disableNewArrayBtn();
    await mergeSort(x, l, r);
    enableSortingBtn();
    enableSizeSlider();
    enableNewArrayBtn();
});


