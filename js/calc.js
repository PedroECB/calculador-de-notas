(function(){
    let inputs = document.querySelectorAll('input')
    let inputTotN1 = document.getElementById('totalN1')
    let inputTotN2 = document.getElementById('totalN2')
    let inputMediaFinal = document.getElementById('mediaFinal')

    inputs.forEach(inp =>{
        inp.addEventListener('input', (e)=>{
        //    console.log(inp.value)
           calc()
       })
    })



    const calc = ()=>{
        let a1 = document.getElementById('a1').value != "" ? parseFloat(document.getElementById('a1').value): 0
        let a2 = document.getElementById('a2').value != "" ? parseFloat(document.getElementById('a2').value): 0
        let a3 = document.getElementById('a3').value != "" ? parseFloat(document.getElementById('a3').value): 0

        let a4 = document.getElementById('a4').value != "" ? parseFloat(document.getElementById('a4').value): 0
        let a5 = document.getElementById('a5').value != "" ? parseFloat(document.getElementById('a5').value): 0

        let totN1 = (a1 + a2 + a3)/3.0
        let totN2 = (a4 * 0.1) + (a5 * 0.9)

        let mediaFinal = (totN1 * 0.4) + (totN2 * 0.6)


        inputTotN1.value = totN1.toFixed(1)
        inputTotN2.value = totN2.toFixed(1)

        inputMediaFinal.value = mediaFinal.toFixed(2)
        console.log(totN1)

    
    }
})()