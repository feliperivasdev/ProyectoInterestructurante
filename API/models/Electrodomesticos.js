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
      autoIncrement: false,
    },
    nombre: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: "NOT NULL",
      comment: null,
      primaryKey: false,
      field: "nombre",
      autoIncrement: false,
    },
    marca: {
      type: DataTypes.CHAR,
      allowNull: true,
      defaultValue: "NOT NULL",
      comment: null,
      primaryKey: false,
      field: "marca",
      autoIncrement: false,
    },
    modelo: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "modelo",
      autoIncrement: false,
    },
    potencia_nominal: {
      type: DataTypes.DOUBLE,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "potencia_nominal",
      autoIncrement: false,
    },
    id_usuario: {
      type: DataTypes.BIGINT,
      allowNull: true,
      defaultValue: null,
      comment: null,
      primaryKey: false,
      field: "id_usuario",
      autoIncrement: false,
      references: {
      key: "id",
      model: "Usuarios_model",
      },
    },
  };
  const options = {
    tableName: "Electrodomesticos",
    comment: "",
    indexes: [],
    timestamps: false,
    underscored: true,
    freezeTableName: true,
    schema: "public",
  };
  const ElectrodomesticosModel = sequelize.define(
    "Electrodomesticos_model",
    attributes,
    options
  );
  return ElectrodomesticosModel;
};
