# enhancedCat

EnhancedCat is a Node.Js command that combines the functionality of the Linux 'cat' and 'wc' commands. The tool reads a file, dsiplaysmthe contents of the file, and tehn prints the total numbers of lines. This allows users to view file contents and get a line count using one command.

To run EnhancedCat, use:

node enhancedcat.js filename.txt

Example:

node enhancedcat.js sample.txt

The commands combined in this tool are:
- cat: displays the contents of a file
- wc: counts the number of lines in a file

For this project, I used AI to help understand Linux commands, plan the functionality of my fancy command, identify possible test cases, and find edge cases that could cause errors.

AI helped explain how the cat and wc commands work and suggested tests such as running the program with a valid file, an empty file, a missing filename, and a file that does not exist.

I independently wrote the Node.js implementation, tested the program, reviewed the results, and made decisions about how to keep the command simple while meeting the assignment requirements.


