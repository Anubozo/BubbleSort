let array = [];
let width = 400;

function setup(){

    createCanvas(width, width);
    //frameRate(2);
    for(let i = 0; i < 100; i++){
        array.push(Math.random()*1000000);
    }
}

function draw(){

    background(0);
    fill(255,255,255);
    
    console.log(array);
    if(!sorted(array)){
        bubbleSort(array);
    }

    visualize(array);
}

function visualize(arr){
    let boxWidth = width/array.length;
    for(let i=0; i < arr.length; i++){

        let h = (array[i]) / max(array) * width;
        

        rect(boxWidth*i, width, boxWidth, -h);
    }

}

function swap(i,j,arr){
    let temp = arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
}

function sorted(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i]>arr[i+1]){
            return false;
        }
    }
    return true;
}

function min(arr){
    let m = -Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]<m){
            m = arr[i];
        }
    }

    return m;
}

function max(arr){
    let m = Infinity;
    for(let i = 0; i < arr.length; i++){
        if(arr[i]>m){
            m = arr[i];
        }
    }

    return m;
}

function bubbleSort(arr){
    for(let i = 0; i < arr.length-1; i++){
        if(arr[i]>arr[i+1]){
            swap(i,i+1,arr);
        }
    }
}

