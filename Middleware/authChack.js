const admin = require('../config/firebase')


exports.authcheck = async(req,res,next)=>{

    //  console.log('Hello middleware',req.headers)
     console.log('Hello middleware')
    try {
        //code
        // verrifyIdToken เป็น method firebase
        const firebaseUser = await admin
        // เหมือน ถอดรหัส โดยส่งแค่ token ก็จะได้ข้อมูลทั้งหมด ไม่ต่งส่งแยกรายตัว
        .auth().verifyIdToken(req.headers.authtoken)
        req.user = firebaseUser;
        
        console.log('req.user:', req.user)
        next();
    } catch (error) {
        console.log(err)
    }

    
}