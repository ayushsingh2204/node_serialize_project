module.exports=(sequelize,Sequelize)=>{
    const Reporter=sequelize.define("reporter",{
        firstname:{
            type:Sequelize.STRING
        },
        lastname:{
            type:Sequelize.STRING
        },
        email:{
            type:Sequelize.STRING
        },
        number:{
            type:Sequelize.BIGINT(11)
        },
        password:{
            type:Sequelize.STRING
        }
    
    })
    return Reporter;
}