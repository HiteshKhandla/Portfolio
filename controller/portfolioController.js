// const nodemailer = require("nodemailer");
// const emailJs =require("emailjs")

// //transport
// const transporter = nodemailer.createTransport(
//     sendGridTransport({
//       auth: {
//         api_key: process.env.API_SENDGRID,
//       },
//     })
//   );
  
  
const sendEmailCOntroller=(req,res)=>{
try{
    // const { name, email, msg } = req.body;

    // //validation
    // if (!name || !email || !msg) {
    //   return res.status(500).send({
    //     success: false,
    //     message: "Please Provide All Fields",
    //   });
    // }
    // //email matter
    // transporter.sendMail({
    //   to: "typeyouremailadresshere@gmail.com",
    //   from: "khandlahitesh9880@gmail.com",
    //   subject: "Regarding Mern Portfolio App",
    //   html: `
    //     <h5>Detail Information</h5>
    //     <ul>
    //       <li><p>Name : ${name}</p></li>
    //       <li><p>Email : ${email}</p></li>
    //       <li><p>Message : ${msg}</p></li>
    //     </ul>
    //   `,
    // });
return res.status(200).send({
    success:true,
    message:"Your Message Send SuccessFully",
})
}catch (error){
    console.log(error)
    return res.status(500).send({
        success:false,
        message:'SEND EMAIL API ERROR ',
        error,
    })

}


}

module.exports ={sendEmailCOntroller}