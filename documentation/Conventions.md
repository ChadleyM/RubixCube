# Conventions

## Git

### Branches

Branches in this project should conform to the following guild lines:
```
<developer name>/<discription of issue>
git checkout -b tony/bring-cape-town-2-jhb
```
Keep all text in lower case and seprate words using `-`

### Commit

Start the commit with the issue number in the following fashion:
```
#<issue number>: <commit message>
git commit -m "#32: Organise busses from Cape Town to JHB"
```

### Pull requests

When you want to push your brach to `main`, start by creating a pull request. In pull request comment, tag your issues again using the issue number (eg #32). 

Ensure 2 reviewers are tagged to approve the request. Ask before hand on MS Team, who of the team is available for carrying out the review.

### Pull requests reviews

Do not approve any code that is not critically tested and thoroughly reviewed. Don't be afraid to inform the requester of improvements or suggestions.

---

## Code

### Javascript
Each entity in the application should reside in its own class and each class should have its own script.

| Component | Convention | Example |
| --- | --- | --- |
| Local Variables | Camel Case | let rubixCube = null |
| Global Variables | All caps | const ROTATIONS = [] |
| Classes | Pascal Case | class Cube extends Game {} |
| Private Properties | _Camel Case | this._id = id |
| Public Properties | Camel Case | this.name = name |
| Functions | Camel Case | solveRubixCube(arg1) |

### HTML

 - No `div` and `span` tags allowed in this project. Only carefully considered semantic elements. 
 - No inline styling.

<!--- TODO: Add lit at a later stage -->

### CSS
 - Use `display: flex` to make the application appropriately repsonsive.


