// 100 Days Of Coding Challenge!

/* Day-74 Task
Learn about TypeScript Debugging by using the following guide and debug along with it:

Debugging in TypeScript https://github.com/AsharibAli/100-days-of-code/blob/main/day-74/TS-debugging/README.md */

//-------------------------------------------------------------------------------------------------------------------------------------

/* The link provides a guide on debugging TypeScript applications, which is essential for identifying and resolving issues in your TypeScript code efficiently.
Here's a breakdown of the guide and an example illustrating the debugging process:

Steps for Debugging in TypeScript
Setup the Environment:

TypeScript code is transpiled into JavaScript. To debug the TypeScript code directly, we need source maps.
These maps allow us to link the transpiled JavaScript code back to the original TypeScript code.
Add "sourceMap": true in your tsconfig.json to generate source maps during compilation. */

// Example tsconfig.json:

// {
//  "compilerOptions": {
//    "sourceMap": true
//  }
// }

// Use of Debugging Tools:

/*
VS Code Debugger: Visual Studio Code provides an integrated debugging environment for TypeScript.
You can set breakpoints, step through code, and inspect variables directly from your editor.

Configuring the Debugger:

In VS Code, create a launch.json file to configure the debugger. A basic configuration for Node.js might look like this:


{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "skipFiles": ["<node_internals>/**"],
      "program": "${workspaceFolder}/app.ts",     // Change the File/Folder path where your TypeScript file is located
/     "outFiles": ["${workspaceFolder}/**/ //.js"]
//    }
//  ]
// }

//----------------------------------------------------------------------------------------------------------------------------------------------------

// Running the Debugger:

/* After setting up the launch.json, start the debugger in VS Code by going to the "Run and Debug" panel and clicking on "Start Debugging" (or pressing F5).
Place breakpoints in your TypeScript code to pause execution and inspect the program's state.*/

// Example of Debugging TypeScript
// Let’s consider a basic TypeScript example with an error:

function greet(name: string) {
  return "Hello, " + name.toUpperCase();
}

let user = 123; // This should be a string, but it's a number.

 console.log(greet(user));

// In the above code, user is assigned a number instead of a string, which will cause a runtime error when the toUpperCase method is called.

//--------------------------------------------------------------------------------------------------------------------------------------------------------

// Steps to Debug:

/* 1.Set up source maps: Ensure the tsconfig.json has "sourceMap": true.

2. Run the program: Use VS Code’s debugger to run the program. Set a breakpoint at the line where greet is called.

3. Inspect the error: When execution pauses at the breakpoint, inspect the value of user.
You’ll notice it’s a number and not a string, which is causing the issue.

4. Fix the error: Correct the type of user to a string, and rerun the debugger. */

// Corrected code:

 let user = "John Doe"; // Corrected to a string.

 console.log(greet(user));

// By using breakpoints and inspecting variables in the debugger, you can quickly catch and fix issues like this.

// Key Takeaways:

/* - Source maps are critical for debugging TypeScript, as they map transpiled JavaScript back to TypeScript.
- VS Code offers a powerful built-in debugger that works seamlessly with TypeScript.
- Debugging helps you identify type mismatches, logic errors, and more, ensuring a smoother development experience.

This approach makes debugging TypeScript a more structured and less error-prone process.*/
