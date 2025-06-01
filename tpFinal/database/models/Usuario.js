module.exports= function(sequelize,dataTypes){
    let alias = "Usuario"
    let cols={
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        email:{
            type: dataTypes.STRING(100)
           
        },
        contrasenia:{
            type:dataTypes.STRING(200)
        },
        dni:{
            type: dataTypes.INTEGER.UNSIGNED
        },
        FotoPerfil:{
            type:dataTypes.STRING(255)
        },
        nombre:{
            type: dataTypes.STRING(100)
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        }
    }
    let config = {
        tableName: "usuarios",
        timestamps: false
    }
    let Usuario = sequelize.define(alias,cols,config)
    Usuario.associate= function(models){
        Usuario.hasMany(models.Comentario,{
            as: "comentarios",
            foreignKey: "idUsuario"
        });
        Usuario.hasMany(models.Producto,{
        as: "productos",
        foreignKey: "idUsuario",
    })
    }
    return Usuario
}
