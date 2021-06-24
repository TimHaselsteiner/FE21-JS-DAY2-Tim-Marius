//FAIIIIIILS



/* function crystalGazer (children, partners, location, job) {
    
    

    let job = ("FSWD")

    let children = ("None")
    
    let location = ("Vienna")

    let partners = ("Loki")
    

    return ("You will be a" + job + "in" + location + "and married to" + partners + "with" + children)
}

console.log(crystalGazer) */




/* function crytsalGazer (job, location, partner, children) {
    return ""
    
}

console.log(crytsalGazer) */







//Basic Exercise one



let crytsalGazer = (job, location, partner, children) => {return `You will be a ${job} in ${location} amd married to ${partner} with ${children} children`;}

console.log(crytsalGazer("FSWD", "Vienna", "Loki", "No"))





//-------------------------------------------------------------------------------------------------------------------------------------------------------------------//


//Basic Exercise 4

/* 
function cToR(celsius, cTemp, rTemp) {
    var cTemp = celsius;
    let result = cTemp * (Math.PI / 180);

}

console.log(rTemp) */



/* 

function results(celcius, radian, convert) {
    let convert = (celcius * (Math.PI / 180))
}

console.log(getresults)

 */




function degrees_to_radians(degrees) {
    var pi = Math.PI;
    return degrees * (pi / 180);
}
console.log(degrees_to_radians(90));



//-------------------------------------------------------




function calc (width, height) {
    var sum = width * height;

    return sum;
  
 

    
}
document.write("The area of the box is: " + calc(8,2) + "<hr>")




function calc2(width, height, depth) {
    var multi = width * height * depth;

    return multi;




}
document.write("The volume of the box is: " + calc2(3, 2, 4))