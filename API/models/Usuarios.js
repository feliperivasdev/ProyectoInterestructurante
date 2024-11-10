const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  const attributes = {
    id: {
      type: DataTypes.BIGINT,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: true,
      field: "id",
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.CHAR,
      allowNull: false,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "nombre",
      autoIncrement: false,
    },
    apellido: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "apellido",
      autoIncrement: false,
    },
    cedula: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "cedula",
      autoIncrement: false,
    },
    email: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "email",
      autoIncrement: false,
    },
    contraseña: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "contraseña",
      autoIncrement: false,
    },
    rol: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "rol",
      autoIncrement: false,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: sequelize.fn("now"),
      comment: null,
      primaryKey: false,
      field: "created_at",
      autoIncrement: false,
    },
  };
  const options = {
    tableName: "Usuarios",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: "public",
  };
  const UsuariosModel = sequelize.define("Usuarios_model", attributes, options);

  UsuariosModel.associate = function (models) {

    UsuariosModel.belongsTo(models.Electrodomesticos_model, {
      foreignKey: 'id_electrodomestico'
    });

    UsuariosModel.belongsTo(models.Reporte_model, {
      foreignKey: 'id_reporte'
    });

  };

  return UsuariosModel;
};
