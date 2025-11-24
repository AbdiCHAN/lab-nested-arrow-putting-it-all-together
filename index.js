// index.js
function createLoginTracker(userInfo) {
  let attemptCount = 0;

  return (passwordAttempt) => {
    attemptCount++;

    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    }

    return `Attempt ${attemptCount}: Login failed`;
  };
}
// Export the function for testing purposes
module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
const tracker = createLoginTracker({ username: "abz", password: "1234" });
// Example usage
console.log(tracker("wrong")); 
console.log(tracker("wrong"));
console.log(tracker("1234"));
console.log(tracker("wrong"));
console.log(tracker("wrong"));