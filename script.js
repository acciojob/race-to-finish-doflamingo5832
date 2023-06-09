window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
[16:29, 4/1/2023] +91 83292 41658: <!DOCTYPE html>

<html>
  <head>
    <link rel="stylesheet" href="styles.css" />
  </head>

  <body>
    <!-- the entire body must be written by student -->
    <div id="output"></div>
    <script type="text/javascript" src="./script.js"></script>
  </body>
</html>
[16:29, 4/1/2023] +91 83292 41658: window.promises = [];

for (let i = 1; i <= 5; i++) {
  const randomTime = Math.floor(Math.random() * 5) + 1;
  const promise = new Promise(resolve => {
    setTimeout(() => {
      resolve(`Promise ${i} resolved in ${randomTime} seconds`);
    }, randomTime * 1000);
  });
  promises.push(promise);
}

Promise.any(promises)
  .then(result => {
    const outputDiv = document.getElementById('output');
    outputDiv.innerText = result;
  })
  .catch(error => console.log(error));
