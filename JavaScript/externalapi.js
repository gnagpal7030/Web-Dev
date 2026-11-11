// Put await here and see
// await fetch("https://jsonplaceholder.typicode.com/todos/1")
//   .then((response) => response.json()) // server error
//   .then((json) => console.log(json)) // json conversion 
//   .catch((err) => console.log("some error", err));

// console.log("Call happened");

async function callAPI(url) {
  let res = await fetch(url);
  let resJson = await res.json();
  console.log(resJson);
}

// callAPI("https://jsonplaceholder.typicode.com/todos/1");

try {
  await callAPI("https://jsonplaceholder.typcode.com/todos/1"); // Put await and see change
  console.log("Data was fetched sucessfully");
} catch (err) {
  console.log("I got the error", err);
}
