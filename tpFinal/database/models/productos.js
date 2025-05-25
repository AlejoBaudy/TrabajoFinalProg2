module.exports= function(sequelize,dataTypes){
    let alias = "Producto"
    let cols={
        id:{
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
        Descripcion:{
            type:dataTypes.STRING
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
        tableName: "productos",
        timestamps: false
    }
    let Producto = sequelize.define(alias,cols,config)
    Producto.associate= function(models){
    Producto.belongsToMany(models.Usuarios,{
        as: "Usuarios",
        through: "usuario_producto",
        foreignKey: "producto_id",
        otherKey: "usuario_id",
        timestamps: false
    })
    }
    return Producto
}