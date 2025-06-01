module.exports= function(sequelize,dataTypes){
    let alias = "Producto"
    let cols={
        ID:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        idUsuario:{
            type: dataTypes.INTEGER.UNSIGNED
           
        },
        Archivo:{
            type:dataTypes.STRING(255)
        },
        Producto:{
            type: dataTypes.STRING(255)
        },
        descripcion:{
            type:dataTypes.STRING
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
        tableName: "productos",
        timestamps: false
    }
    let Producto = sequelize.define(alias,cols,config)
    Producto.associate= function(models){
       Producto.belongsTo(models.Usuario,{
        as: "usuarios",
        foreignKey: "idUsuario",
    })
    }
    return Producto
}
