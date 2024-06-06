import PouchDB from 'pouchdb';

const db = new PouchDB('my_database');

async function saveDataEntry(username, id, integerValue) {
  try {
    // Generate a unique ID for the data entry
    const entryId = new Date().toISOString();

    // Create the data entry object
    const dataEntry = {
      _id: entryId,
      username,
      id,
      integerValue,
    };

    // Save the data entry to the database
    const response = await db.put(dataEntry);

    console.log('Data entry saved successfully:', response);

    return response;
  } catch (error) {
    console.error('Error saving data entry:', error);
    throw error;
  }
}
