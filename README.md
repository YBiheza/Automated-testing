#### The project name and purpose
### Files-Checker:
##### The function for checking loaded attached files

#### Function description
The function is checking attached file (like CV on career sites). The logic is that the button on the website opens the window of file explorer, where the user can choose **1 or 2 files**. It is available to choose in explorer more than 2 files, but the function returns false in this case and ask to choose files again. The field on the website is obligatory, so it is **obligatory to add at least 1 file**.

#### Business requirements:
- format: pdf (PDF), docx, png (PNG);
- size: less than 7 mb (7mb is not available)
- user can not attach more than 2 files (2 is available)
- user can not attach 0 files, the field is obligatory

#### Input, output of the function
- Input: the array of the files which user has selected
- Output: true if all the requirements completed, and false in all other cases

#### Description of the test scenarios, identifying positive, negative, and boundary tests
###### Smoke tests:
1. Extension tests:
    - positive test for pdf extension,
    - positive test for png extension,
    - positive test for PDF extension,
    - positive test for PNG extension,
    - positive test for doc extension,
    - positive test for docx extension,
2. Amount of loaded files
    - positive test for less than 2 files (1 loaded file e.g.),
    - positive test for more than 0 file (1 loaded file e.g.),
3. File Size Tests
    - positive test for file smaller that 7 MB,
    - positive test for file bigger or equal 2 KB,

###### Negative tests
1. Extension test:
    - negative test if the file is not pdf(PDF)/png(PNG)/doc/docx,
2. Amount of loaded files:
    - negative test if there are no loaded files (input is empty),
    - negative test if there are more than 2 files,
3. File Size Tests
    - negative test if the file is bigger than 7 MB,
    - negative test if the file is empty (0 bytes),
    - negative test if the file size less than 2 KB,

###### Boundary values
1. Input test
    - negative test if input is emp
1. Amount of loaded files:
    - positive test if exactly 2 files were loaded,
2. File Size Tests
    - negative test if the file size exactly 7 MB,
    - negative test if the file size exactly 7.0001 MB,
    - positive test if the file size exactly 2 KB,
    - positive test if the file size exactly 2.0001 KB,
    - negative test if the file size exactly 1.9999 KB.

###### Input error tests 
- negative test if input is undefined
- negative test if input is null
- negative test if input is parsed wrong (as a string e.g.)

##### File dataparsing tests
- negative test if the filename is not a string
- negative test if the filesize is not a number

#### Instructions
- create a folder on your PC
- execute git clone <ссылка-на-репозиторий> inside created folder
- execute git checkout task1
- execute npm run test





