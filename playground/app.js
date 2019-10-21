// var x : string = "Some string";

// console.log(typeof x);      // ?

// x = 20;

// console.log(typeof x);      // ?

// x = true;

// console.log(typeof x);      // ?


// var x = 10;
// var y = "10";
// var z = 20;

// console.log(x === y);    // ?

// console.log(z + y);        //2010
// console.log(z - y);        //10


function longRunningOperation(){
    setTimeout(function(){
        console.log("running....");
    }, 3000);
}

function webRequest(req){
    console.log("Starting the operation with ID #" + req.id)
    longRunningOperation();
    console.log("Stoping the operation with ID #" + req.id)
}

webRequest({id : 1})
webRequest({id : 2})

// OUTPUT





