import sql from "./db.js";

const deleteTableVideos = async () => {
  await sql`
  DROP TABLE IF EXISTS videos;
  `;
};

const createTableVideos = async () => {
  await sql`
  CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT,
    duration INTEGER
  );
  `;
};

deleteTableVideos();
createTableVideos();
