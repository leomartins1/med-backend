const client = require('./connection')
const { calculateAge } = require('../utils/calculate-date');
const { ObjectId } = require('mongodb');

const createUserModel = async ({ nome, nascimento, sexo }) => {
  try {

    await client.connect()

    const database = client.db('med_db');

    const collection = database.collection('pessoas');


    const result = await collection.insertOne({ nome, nascimento, sexo, active: true });

    return result.insertedId
  } catch (error) {
    console.error('Error:', error);
    return null;
  } finally {
    await client.close()
  }

}

const getUserByIdModel = async (id) => {
  try {
    await client.connect()
  
    const database = client.db('med_db');
  
    const collection = database.collection('pessoas');

    const objectId = new ObjectId(id)

    const result = await collection.findOne({ _id: objectId });

    return {
      nome: result.nome,
      nascimento: result.nascimento, 
      sexo: result.sexo,
      id: result._id,
      idade: calculateAge(new Date(result.nascimento))
    }
  } catch (error) {
    console.error('Error:', error);
    return null;
  } finally {
    await client.close()
  }
}

const getUsersModel = async () => {
  try {
    await client.connect()

    const database = client.db('med_db');

    const collection = database.collection('pessoas');

    const filter = {active: true}

    const result = await collection.find(filter).toArray();

    return result.map(({active, ...item}) => {
      return { ...item,
        idade: calculateAge(new Date(item.nascimento))
      }
    })

  } catch (error) {
    console.error('Error:', error);
    return null;
  } finally {
    await client.close()
  }

}

const toggleUserStatusModel = async (id) => {
  try {
    await client.connect()

    const database = client.db('med_db');

    const collection = database.collection('pessoas');

    const filter = { _id: new ObjectId(id) };

    const user = await collection.findOne(filter);

    if (user) {
      const newValue = !user.active; 

      const updateUser = { $set: { active: newValue } };

    const result = await collection.updateOne(filter, updateUser);

    if (result.modifiedCount === 1) {
      return `Pessoa ${newValue ? 'ativada' : 'desativada'} com sucesso`
     }
   }
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close()
  }
}

const deleteUserByIdModel = async (id) => {
  try {
    await client.connect()

    const database = client.db('med_db');

    const collection = database.collection('pessoas');

    const filter = { _id: new ObjectId(id) };

    const result = await collection.deleteOne(filter);

    if (result.deletedCount === 1) {
    return 'Pessoa deletada com sucesso!'
   }

  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close()
  }
}

module.exports = {
  createUserModel,
  getUserByIdModel,
  getUsersModel,
  toggleUserStatusModel,
  deleteUserByIdModel
}