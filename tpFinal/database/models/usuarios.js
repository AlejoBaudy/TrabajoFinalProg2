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
        fotoPerfil:{
            type:dataTypes.STRING(255)
        },
        created_at: {
            type: dataTypes.DATE
        },
        updated_at: {
            type: dataTypes.DATE
        },
        delete_at: {
            type: dataTypes.DATE
        }
    }
    let config = {
        tableName: "usuarios",
        timestamps: false
    }
    let Usuario = sequelize.define(alias,cols,config)
    Usuario.associate= function(models){
        Usuario.belongsTo(models.Comentario,{
            as: "comentario",
            foreignKet: "comentario_id"
        });
    Usuario.belongsToMany(models.Producto,{
        as: "productos",
        through: "usuario_producto",
        foreignKey: "usuario_id",
        otherKey: "producto_id",
        timestamps: false
    })
    }
    return Usuario
}