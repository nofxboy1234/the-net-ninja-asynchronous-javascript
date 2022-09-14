function testAsync() {
  console.log('1');
  console.log('2');

  setTimeout(() => {
    console.log('callback function fired');
  }, 2000);

  console.log('3');
  console.log('4');
}

function testPromises() {
  const getSomething = () => {
    return new Promise((resolve, reject) => {
      // fetch something
      resolve('some data');
      // reject('some error');
    });
  };

  // getSomething().then(
  //   (data) => {
  //     console.log(data);
  //   },
  //   (err) => {
  //     console.log(err);
  //   }
  // );

  getSomething()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
}

function testChainPromises() {
  getTodos('todos/luigi.json')
    .then((data) => {
      console.log('promise 1 resolved:', data);
      return getTodos('todos/mario.json');
    })
    .then((data) => {
      // Fired when 'todos/mario.json is complete
      console.log('promise 2 resolved:', data);
      return getTodos('todos/shaun.json');
    })
    .then((data) => {
      console.log('promise 3 resolved:', data);
    })
    .catch((err) => {
      console.log('promise rejected:', err);
    });
}

function testFetchAPI() {
  fetch('todos/luigi.json')
    .then((response) => {
      console.log('resolved', response);
      return response.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log('rejected', err);
    });
}

// Old getTodos
// const getTodos = (resource) => {
//   return new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();

//     request.addEventListener('readystatechange', () => {
//       if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         resolve(data);
//       } else if (request.readyState === 4) {
//         reject('error getting resource');
//       }
//     });

//     request.open('GET', resource);
//     request.send();
//   });
// };

// New getTodos
const getTodos = async () => {
  const response = await fetch('todos/luigi.json');
  const data = await response.json();

  return data;
};

console.log(1);
console.log(2);

getTodos().then((data) => {
  console.log('resolved:', data);
});

console.log(3);
console.log(4);
