let input= document.getElementById("inpo")
let image1= document.getElementById("imo1")
let image2= document.getElementById("imo2")
let button= document.getElementById("brin")
let outy= document.getElementById("nono")
let button_proceed=document.getElementById("pro")
let button_eligible= document.getElementById("jimo")
let outyin= document.getElementById("gogo")

let pix_part=['AAC.PNG','APC.PNG','PDP.PNG','LABOUR.PNG','YPP.PNG','PRP LOG.PNG','NNP.PNG','YPP.PNG','SDP.PNG']
let pix_can=['SHOWORE.PNG','TINUBU.PNG','ATIKU.PNG','PETER OBI.PNG','kola-prp.PNG','mali-ypp.PNG','rabiu- nnp.PNG','adewole-sdp.PNG']
function eligibility_test(){
    let inputin= parseFloat(document.getElementById("ago").value)
    if(inputin<18){
        outyin.innerHTML="SORRY!!! YOU ARE STILL A MINOR, THEREFORE YOU ARE NOT ELIGIBLE TO VOTE. THANK YOU"
    }else{
        outyin.innerHTML="YOU ARE OF AGE, YOU CAN GO AHEAD AND VOTE FOR THE CANDIDATE OF YOUR CHOICE. THANK YOU"
    }
}
button_eligible.addEventListener("click",eligibility_test)

function election(){
    let selop= document.getElementById("selo").value
    input.style.display='block'
    if (selop=="AAC"){
        image1.setAttribute("src",pix_part[0])
        image2.setAttribute("src",pix_can[0])
    }else if(selop=="APC"){
        image1.setAttribute("src",pix_part[1])
        image2.setAttribute("src",pix_can[1])
    }else if(selop=="PDP"){
        image1.setAttribute("src",pix_part[2])
        image2.setAttribute("src",pix_can[2])
    }else if(selop=="LABOUR PARTY"){
        image1.setAttribute("src",pix_part[3])
        image2.setAttribute("src",pix_can[3])
    }else if(selop=="YPP"){
        image1.setAttribute("src",pix_part[4])
        image2.setAttribute("src",pix_can[5])
    }else if(selop=="NNP"){
        image1.setAttribute("src",pix_part[6])
        image2.setAttribute("src",pix_can[6])
    }else if(selop=="PRP"){
        image1.setAttribute("src",pix_part[5])
        image2.setAttribute("src",pix_can[4])
    }else if(selop=="SDP"){
        image1.setAttribute("src",pix_part[8])
        image2.setAttribute("src",pix_can[7])
    }else{
        alert("you have not selected any political party, please select a party of your choice and click the proceed button. Thank you")
    }
  
}
button_proceed.addEventListener("click",election)

function elect (){
    let selop= document.getElementById("selo").value
    let input= document.getElementById("inpo").value
    outy.innerHTML= `${input} you have successfully voted for ${selop}. Thank you`
    if(input==null){
        alert("you must enter you name and PVC number thank you")
    }
}
button.addEventListener("click",elect)
