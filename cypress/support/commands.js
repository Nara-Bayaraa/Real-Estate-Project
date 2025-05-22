
//API-based setup for login
Cypress.Commands.add('login', (email = "waped44366@gianes.com", password = "DontTestMe") => { 
    cy.request("POST", "/api/users/login", {
      email: email,
      password: password ,
    }).then((response) => {
      window.localStorage.setItem("accessToken", response.body.accessToken);
    });
})
