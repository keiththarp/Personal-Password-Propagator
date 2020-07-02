# Personal Password Propagator
A responsive, random password generator with user customizable criteria. Chose your desired length between 8 - 128 characters with the easily adjustable slide. Add your desired character elements easily with check boxes. Adjust your criteria and regenerate a new password with each click of the generate password. When you're satisfied with the result, easily copy your new password to your clipboard by clicking the copy icon in the bottom right of the password display window.
 - View the app here - https://keiththarp.github.io/Personal-Password-Propagator/

![Screen cap of propagator](/assets/Personal-Password-Propagator-1.png)

## Early Steps
I decided to build this project from scratch using BootStrap from the basic structure. The result equals less code and a cleaner appearance. Prior to typing out the JavaScript, I work on the logic on paper, then set my steps up in pseudo code to start building the app.

## Lessons In JavaScript
After several iterations I was able to clean up my code while learning more and more inbuilt JavaScript methods. By running into some interesting bugs, lessons from the class like scope, and program order solidified with me and helped me find my way through to solutions.

**Password Length**
* I went with a slider (range input) for the password length selection to easily limit the parameters without the need for validation within the desired range. With an easy to read ive display, fine tuning the desired length is simple.

**Choosing Characters**
* I built four strings each containing one of the potential character options, I then converted those to arrays using the .split function. Once the selections are made by the user, the program concatenates those choices into a single array of potential characters.

**Copy Icon**
* Once the password is displayed, a copy icon appears in the display window to help users easily get their new password to the clipboard.

![Screen cap of copy icon](/assets/Personal-Password-Propagator-copy-button.png)

**Mobile First design**
* Using the BootStrap framework helps make the final product a mobile friendly app from the beginning.

![Photo of mobile presentation on device in action.](/assets/Password-Propagator-iphone.png)





