export function configureFakeBackend() {
  let users = [
    {
      id: 1,
      username: "test",
      password: "test",
      firstName: "Test",
      lastName: "User"
    },
    {
      id: 2,
      username: "admin",
      password: "admin",
      firstName: "Wesley",
      lastName: "Dettmer"
    }
  ];
  let realFetch = window.fetch;
  window.fetch = function(url, obj) {
    return new Promise((resolve, reject) => {
      // wrap in timeout to simulate server api call
      setTimeout(() => {
        // authenticate
        if (url.endsWith("/users/authenticate") && obj.method === "POST") {
          // get parameters from post request
          let params = JSON.parse(obj.body);

          // find if any user matches login credentials
          let filteredUsers = users.filter(user => {
            return (
              user.username === params.username &&
              user.password === params.password
            );
          });

          if (filteredUsers.length) {
            // if login details are valid return user details and fake jwt token
            let user = filteredUsers[0];
            let responseJson = {
              id: user.id,
              username: user.username,
              firstName: user.firstName,
              lastName: user.lastName,
              token: "fake-jwt-token"
            };
            resolve({
              ok: true,
              text: () => Promise.resolve(JSON.stringify(responseJson))
            });
          } else {
            // else return error
            reject("Usuário e/ou senha incorretos");
          }

          return;
        }

        // get users
        if (url.endsWith("/users") && obj.method === "GET") {
          // check for fake auth token in header and return users if valid, this security is implemented server side in a real application
          if (
            obj.headers &&
            obj.headers.Authorization === "Bearer fake-jwt-token"
          ) {
            resolve({
              ok: true,
              text: () => Promise.resolve(JSON.stringify(users))
            });
          } else {
            // return 401 not authorised if token is null or invalid
            reject("Unauthorised");
          }

          return;
        }

        if (url.endsWith("/users/register") && obj.method === "GET") {
          let newUser = JSON.parse(obj.body);
          let duplicateUser = users.filter(user => {
            return user.username === newUser.username;
          }).length;
          if (duplicateUser) {
            reject('Username "' + newUser.username + '" is already taken');
            return;
          }
          newUser.id = users.length
            ? Math.max(...users.map(user => user.id)) + 1
            : 1;
          users.push(newUser);
          localStorage.setItem("users", JSON.stringify(users));
          resolve({ ok: true, text: () => Promise.resolve() });
          return;
        }

        // pass through any requests not handled above
        realFetch(url, obj).then(response => resolve(response));
      }, 500);
    });
  };
}
