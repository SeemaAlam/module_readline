const sendVarE=({email})=>{
    console.log(`sending Verification Email ${email}`);
}
const sendWelcome=(email)=>{
    console.log(`sending welcome Email ${email.email}`);
}

module.exports={
    sendVarE:sendVarE,
    sendWelcome:sendWelcome
}