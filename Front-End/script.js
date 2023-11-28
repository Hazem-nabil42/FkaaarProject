const form = document.getElementById('form')
let fileData = ""

const convertFile = async (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  }).then((res) => fileData = res);
};

const fileInput = document.getElementById('file');
let fileSizeCheck = null
fileInput.addEventListener('change', event => {
  const file = fileInput.files[0];
  const maxFileSizeInMB = 0.2;
  const maxFileSizeInKB = 1024 * 1024 * maxFileSizeInMB;

  if (file.size > maxFileSizeInKB) {
    alert(`Please select a file that is 200 KB or less.`);
    fileSizeCheck = false
    return
  }else{
    fileSizeCheck = true
  } 
});

form.addEventListener('submit', async function(e){
    if(fileSizeCheck === false){
      alert("File Size too large")
      return
    }
    e.preventDefault();
    alert('Your Idea was sent succesfully')
    let formData = new FormData(form);
    formData = [...formData]
    await convertFile(formData[2][1])
    formData[2][1] = fileData
    await sendMail(formData[0][1], formData[1][1], formData[5][1])
    const data = {name:formData[0][1], email:formData[1][1], file:formData[2][1], mobileNumber:formData[3][1], countryKey:formData[4][1], description:formData[5][1]}
    await axios.post("https://xtract-backend.onrender.com/api/v1/sendData", data)
}) 


async function sendMail(name, email, description){
  (function (){
    emailjs.init("tYhyR8qvTV9OpUJr5");
  })();

  var params = {name,  email,  description};
  const serviceID = "service_103hsht";
  const templateID = "template_uvklwoj";
  emailjs.send(serviceID, templateID, params).then(alert('email sent succefully')).catch((err)=>console.log(err))
}


