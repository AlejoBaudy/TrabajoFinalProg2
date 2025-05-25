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
        tableName: "comentarios",
        timestamps: false
    }
    let Comentario = sequelize.define(alias,cols,config)
    Comentario.associate = function(models){
        Comentario.hasMany(models.Usuarios,{
            as: "usuarios",
            foreignKey: "comentario_id"
        })
    }
    return Comentario
}