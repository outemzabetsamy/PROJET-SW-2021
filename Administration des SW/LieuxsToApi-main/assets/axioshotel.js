
//var nomHotel=document.getElementById("nomhotel").value;
const photo=document.getElementById("ph");
//var adresseHotel=document.getElementById("adresshotel").value;
var butt=document.getElementById('sub');
butt.addEventListener('click',sendData);
let uploadImage;
let selectedFile;

photo.addEventListener("change",function(){
    
     selectedFile = this.files[0];
    console.log(selectedFile)
    uploadImage=new FormData();
    uploadImage.append('imageFile',selectedFile,selectedFile.name);
    
});
 function sendData(){
    let nomlieu=document.getElementById("nomlieu").value;
    let  adresselieu=document.getElementById("adresselieu").value;
    
    let Photolieu=selectedFile.name;
    
axios.post('https://image-service-heroku.herokuapp.com/image/upload', uploadImage).then(response=>{
    console.log(" image ajoutée avec succes, response "+response)

}).catch(error => {
    console.log("errorr"+error)
});

// activite post
axios.post('https://testapilieux.azurewebsites.net/api/lieuxs',{
        Name:""+nomlieu+"",
        Adresse:""+adresselieu+"",
        Photo:""+Photolieu+""
    }
    ).then(response=>{
        console.log("lieu ajouté avec succes"+response)
    }).catch(error=>{console.log(error)});


}
let sr=document.getElementById("search");
sr.addEventListener("click",getImage);
function getImage(){
    let imageName=document.getElementById("srval").value;
    let retrievedResponse;
    let base64Data;
    let retrievedImage;
   axios.get('https://image-service-heroku.herokuapp.com/image/get/' +imageName)
    .then(resp =>{
        console.log(resp.data)
        retrievedResponse=resp.data;
        base64Data=resp.picByte;
        retrievedImage='data:image/jpeg;base64,'+retrievedResponse.picByte;
        img.setAttribute("src",retrievedImage);
        
    }).catch(error=>{console.log(error)})

}


