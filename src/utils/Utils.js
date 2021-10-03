export const signUpFormData = [
    {
      id: 1,
      name: "Full Name",
      type: "text",
      itemId: "fullName",
      errorMessage: "Invalid Full Name"
    },
    {
      id: 2,
      name: "Username",
      type: "text",
      itemId: "userName",
      errorMessage: "Username already used!"
    },
    {
      id: 3,
      name: "Email Address",
      type: "email",
      itemId: "emailAddress",
      errorMessage: "Invalid email address"
    },
    {
      id: 4,
      name: "Password",
      type: "password",
      itemId: "passwordOriginal",
      errorMessage: "Try with strong password"
    },
    {
      id: 5,
      name: "Re-enter Password",
      type: "password",
      itemId: "passwordCopy",
      errorMessage: "Password doesn't match"
    }
  ]
  
  export const loginFormData = [
    {
      id: 1,
      name: "Email",
      type: "email",
      itemId: "emailAddress",
      errorMessage: "Invalid email address"
    },
    {
      id: 2,
      name: "Password",
      type: "password",
      itemId: "password",
      errorMessage: ""
    }
  ]