import React, { useEffect, useState } from "react";
import PouchDB from "pouchdb";
import styles from "../assets/css/Home.module.css";

const db = new PouchDB("my_database");

const Results = () => {
  async function wipeDatabase() {
    try {
      // Get all the documents from the database
      const response = await db.allDocs({ include_docs: true });

      // Create an array of document IDs to delete
      const docIds = response.rows.map((row) => ({
        _id: row.doc._id,
        _rev: row.doc._rev,
        _deleted: true,
      }));

      // Bulk delete the documents
      const result = await db.bulkDocs(docIds);

      console.log("Database wiped successfully:", result);

      return result;
    } catch (error) {
      console.error("Error wiping database:", error);
      throw error;
    }
  }

  const [dataEntries, setDataEntries] = useState([]);

  useEffect(() => {
    const fetchDataEntries = async () => {
      try {
        const response = await db.allDocs({ include_docs: true });
        const entries = response.rows.map((row) => row.doc);
        setDataEntries(entries);
        console.log("Data entries fetched successfully:", entries);
      } catch (error) {
        console.error("Error fetching data entries:", error);
      }
    };

    fetchDataEntries();
  }, []);

  return (
    <>
      {dataEntries.map((entry) => (
        <div>
            <button className={styles.wipeButton} onClick={wipeDatabase}>
              Wipe Database
            </button>
          <div key={entry._id}>
            <p>Username: {entry.username}</p>
            <p>ID: {entry.id}</p>
            <p>Score: {entry.integerValue}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default Results;
