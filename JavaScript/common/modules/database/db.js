export function getDataFromDB() { // regular / normal export
  console.log("fetching data from DB");
}

export default function makeConnection() { // default export
  console.log("Making connection");
}

// Request -> Server -> API -> ServiceLayer -> DB Interaction