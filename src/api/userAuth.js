export const loginUser = async (username, password) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (
        username === "userjlak;sjflk;asdjflk;asdjflk;asdl;fkasdjlkf" &&
        password === "pass"
      ) {
        resolve({
          success: true,
          data: {
            username,
            email: "user@example.com",
          },
        });
      } else {
        reject({ success: false, error: "Invalid credentials." });
      }
    }, 1000);
  });
};
