# random-color-generator

I created a color generator. You can click a button to randomly display a color and be told the code values for that color in both RGB and hexadecimal formats.

Additionally, a second button and a group of sliders allow the user to choose their own values and see how the color looks.

This color generator includes the following three requirements:
* “Create an array, dictionary or list, populate it with multiple values, retrieve at least one value, and use or display it in your application.”
    * User sliders populate an array which is then used to drive the sample display square for the individual selector and the final chosen color.
* “Create and use a function that accepts two or more values (parameters), calculates or determines a new value based on those inputs, and returns a new value.”
    * The ‘decToHex’ function accepts a single R, G, or B value 0-255 and calculates the matching hexadecimal value 00-FF. It is called three times (for each R, G, and B) and populates an array with the resulting values. The values are then checked for equalling 10 or more. Those values 10 and higher are replaced with the appropriate hexadecimal letter. The calculation requires moving in reverse (small values to larger values) therefore, at the end, the sequence of the values in the array are reversed.
* “Build a conversion tool that converts user input to another type and displays it (ex: converts cups to grams).”
    * The “decToHex” function is also employed to apply the same hexadecimal conversion to the user-selected numbers input via the sliders.