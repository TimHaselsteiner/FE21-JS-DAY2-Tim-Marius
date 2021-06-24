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



let crytsalGazer = (job, location, partner, children) => {return `You will be a ${job} in ${location} amd married to ${partner} with ${children} children`;}

console.log(crytsalGazer("FSWD", "Vienna", "Loki", "No"))