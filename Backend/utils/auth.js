import jsonwebtoken from 'jsonwebtoken'
export const createToken=(payload)=>{
    
    let authToken= jsonwebtoken.sign(payload,'mysecret',{expiresIn:300})

    return {authToken,exp:Date.now()+300*1000}
}
export const verifyToken=(token)=>{
    return jsonwebtoken.verify(token,'mysecret')
}