"use strict";
// Importa el modelo de datos 'Role'
import Role from "../models/role.model.js";
// Importa el modelo de datos 'User'
import User from "../models/user.model.js";

import asistencia from "../models/asistencia.model.js";

/**
 * Crea los roles por defecto en la base de datos.
 * @async
 * @function createRoles
 * @returns {Promise<void>}
 */
export async function createRoles() {
  try {
    // Busca todos los roles en la base de datos
    const count = await Role.estimatedDocumentCount();
    // Si no hay roles en la base de datos los crea
    if (count > 0) return;

    await Promise.all([
      new Role({ name: "usuario" }).save(),
      new Role({ name: "administrador" }).save(),
      new Role({ name: "miembroCCEE" }).save(),
    ]);
    console.log("* => Roles creados exitosamente");
  } catch (error) {
    console.log("Error en initSetup.js -> createRoles(): ", error);
  }
}

/**
 * Crea los usuarios por defecto en la base de datos.
 * @async
 * @function createUsers
 * @returns {Promise<void>}
 */
export async function createUsers() {
  try {
    // Busca todos los usuarios en la base de datos
    const count = await User.estimatedDocumentCount();
    // Si no hay usuarios en la base de datos los crea
    if (count > 0) return;

    const admin = await Role.findOne({ name: "administrador" });
    const user = await Role.findOne({ name: "usuario" });
    const miembroCCEE = await Role.findOne({ name: "miembroCCEE" });

    await Promise.all([
      new User({
        username: "Nombre Usuario",
        email: "user@gmail.com",
        rut: "12345678-9",
        password: await User.encryptPassword("user123"),
        roles: user._id,
      }).save(),
      new User({
        username: "Nombre Usuario2",
        email: "user2@gmail.com",
        rut: "12344678-9",
        password: await User.encryptPassword("user123"),
        roles: user._id,
      }).save(),
      new User({
        username: "Nombre Usuario3",
        email: "user3@gmail.com",
        rut: "32345678-9",
        password: await User.encryptPassword("user123"),
        roles: user._id,
      }).save(),
      new User({
        username: "Nombre Usuario4",
        email: "user4@gmail.com",
        rut: "42345678-9",
        password: await User.encryptPassword("user123"),
        roles: user._id,
      }).save(),
      new User({
        username: "Nombre Usuario5",
        email: "user5@gmail.com",
        rut: "52345678-9",
        password: await User.encryptPassword("user123"),
        roles: user._id,
      }).save(),
      new User({
        username: "Nombre Usuario6",
        email: "user6@gmail.com",
        rut: "62345678-9",
        password: await User.encryptPassword("user123"),
        roles: user._id,
      }).save(),
      new User({
        username: "Nombre Usuario7",
        email: "user7@gmail.com",
        rut: "72345678-9",
        password: await User.encryptPassword("user123"),
        roles: user._id,
      }).save(),
      new User({
        username: "Nombre Usuario8",
        email: "user8@gmail.com",
        rut: "82345678-9",
        password: await User.encryptPassword("user123"),
        roles: user._id,
      }).save(),
      new User({
        username: "Nombre Usuario9",
        email: "user9@gmail.com",
        rut: "92345678-9",
        password: await User.encryptPassword("user123"),
        roles: user._id,
      }).save(),
      new User({
        username: "Nombre Administrador",
        email: "admin@gmail.com",
        rut: "12345678-0",
        password: await User.encryptPassword("admin123"),
        roles: admin._id,
      }).save(),
      new User({
        username: "Nombre Miembro CCEE",
        email: "ccee@gmail.com",
        rut: "12345675-0",
        password: await User.encryptPassword("ccee123"),
        roles: miembroCCEE._id,
      }).save(),
    ]);
    console.log("* => Usuarios creados exitosamente");
  } catch (error) {
    console.log("Error en initSetup.js -> createUsers(): ", error);
  }
}

export async function createAsamblea(){
  try{
    const count = await asistencia.estimatedDocumentCount();
    if(count > 0) return; 

    await Promise.all(
      new asistencia({
        rut: ["12345678-9", "12344678-9", "32345678-9"],
        id: "1",
      }).save(),
      new asistencia({
        rut: ["42345678-9", "52344678-9", "62345678-9"],
        id: "2",
      }).save(),
      new asistencia({
        id:"3",
      }).save(),
    );
    console.log("asistencia creada");

  } catch(error){
    console.log("error en initSetup.js -> createAsamblea(): ", error);

  }
}