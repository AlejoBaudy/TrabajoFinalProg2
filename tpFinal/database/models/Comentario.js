module.exports= function(sequelize,dataTypes){
    let alias = "Comentario"
    let cols={
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        idUsuario:{
            type: dataTypes.INTEGER.UNSIGNED
            
        },
        idProduct:{
            type:dataTypes.INTEGER.UNSIGNED
        },
        Comentario:{
            type: dataTypes.STRING
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
        tableName: "comentarios",
        timestamps: false
    }
    let Comentario = sequelize.define(alias,cols,config)
    Comentario.associate = function(models){
        Comentario.belongsTo(models.Usuario,{
            as: "usuarios",
            foreignKey: "id_usuario",
            timestamps: false
        })
    }
    return Comentario
}