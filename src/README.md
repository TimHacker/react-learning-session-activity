Challenge: create a counter that increments and decrements a user's score when the user clicks increment and decrement buttons. Allow the user to reset the score to 0. This should be built using functional components and React hooks.

---

STEP ONE: useState

---

1. When the component first mounts, its initial value should be 0

Use the useState hook to set the initial state of the Counter component to { score: 0 }

2. When clicking the button with the plus sign, the counter score should increase by one

Call the function returned from useState with an argument that increases the original score value by one when the user clicks the increment button

3. When clicking the button with the minus sign, the counter score should decrease by one

Call the function returned from useState with an argument that decreases the original score value by one when the user clicks the decrement button

STEP TWO: useEffect (on component mount)

---

1. When the component first mounts, the user should receive an alert telling them they must click on the buttons to update their score

Use the useEffect hook to trigger an alert after the component first renders

STEP THREE: useEffect (when the score updates)

---

2. When the Counter score changes, the console should return a message about what the updated score value is

Use the useEffect hook to log a score update to the console whenever the score value changes

STEP FOUR: useState, useEffect

---

1. When clicking the reset button the value of the Counter score should be 0

Use the useState hook to set the initial state of the App component to { reset: false }

Pass the current state of reset and the function that updates reset to the Counter component as props

Use the useEffect hook in the Counter component to track changes in the received props then add in the functionality that sets the Counter score to 0 and sets reset to false when the received reset prop is true

In the App component, call the function returned from useState with an argument that sets reset to true when the user clicks the reset button
