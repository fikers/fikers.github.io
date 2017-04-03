// When the page loads, run the generateTableFromData() function
window.onload = generateTableFromData();

// This function looks at what the type value of the input is and depending on what it is
// it returns a string to be used as a label for the link text for that table row data item
function evaluate(type) {
    if (type == 'Competitions') {
        return 'Apply';
    } else if (type == 'Opportunities') {
        return 'Learn More'
    } else if (type == 'Tools and Resources') {
        return 'Learn More';
    } else {
        console.log('Something went wrong!')
    }
};

// Used in conjunction with the sort function inside generateTableFromData to sort the data alphabetically by Category
// However, if the category is 'Competition - University', then it places it first
function cmp(x, y) {
    if (x === 'Competition - University') {
      return -1;
    } else {
        if (x > y) {
          return 1;
        }
        if (x < y) {
          return -1;
        }
    }

    if (y === 'Competition - University') {
      return 1;
    }  else {
        if (x > y) {
          return 1;
        }
        if (x < y) {
          return -1;
        }
    }

    return 0;
}

function contains(a, obj) {
    for (var i = 0; i < a.length; i++) {
        if (a[i] === obj) {
            return true;
        }
    }
    return false;
}


// Run the sort function to realphabetize the data array
// For each item in the data array, create a table row (tableRow), create table data items (typeData, categoryData, nameData, linkData, notesData),
// attach innerHTML for each table data item through the proper data array object property (Type, Category, Name, Link, Notes),
// for each table row item type, add the CSS class (typeHeader, nameHeader, notesHeader),
// if the data.Type is Competition, then apply 'linkHeader' CSS, otherwise, apply 'linkHeader2' CSS class,
// for each table row item (nameData, categoryData, linkData, notesDate), append it to tableRow
// grab the table element with class entriesTable and place it into a variable called 'table'
// append 'tableRow', which now has all the table row data items, to 'table', which attaches it to the entriesTable, making it appear on the HTML page
function generateTableFromData(array){

if ($('.tableRow').length) {
$('.tableRow').remove();
}

if (!array){
  array = ['Competitions', 'Opportunities', 'Tools and Resources'];
}

data.sort(function(x, y){
  return cmp(x.Category, y.Category);
});

for (var i=0; i<data.length; i++) {

  if (contains(array, data[i].Type)){

        var tableRow = document.createElement('tr');
        tableRow.classList.add('tableRow');

        var typeData = document.createElement('td');
        var categoryData = document.createElement('td');
        var nameData = document.createElement('td');
        var linkData = document.createElement('td');
        var notesData = document.createElement('td');

        typeData.innerHTML = data[i].Type;
        categoryData.innerHTML = data[i].Category;
        nameData.innerHTML = data[i].Name;
        linkData.innerHTML = `<a target="_blank" href='${data[i].Link}'>${evaluate(data[i].Type)}</a>`;
        notesData.innerHTML = data[i].Notes;

        typeData.classList.add('typeHeader')
        categoryData.classList.add('categoryHeader')
        nameData.classList.add('nameHeader')
        notesData.classList.add('notesHeader')

        if (data[i].Type == 'Competitions') {
            linkData.classList.add('linkHeader')
        } else {
            linkData.classList.add('linkHeaderColor2')
        }

        tableRow.appendChild(nameData);
        tableRow.appendChild(categoryData);
        tableRow.appendChild(notesData);
        tableRow.appendChild(linkData);

        var table = document.getElementById('entriesTable');
        table.appendChild(tableRow);

    }
}
}



var filterButtons = document.querySelectorAll('.filter');

filterButtons.forEach(function(button){
  button.addEventListener("click", function(){

    if (button.value === 'All') {
      generateTableFromData();
    } else if (button.value === 'Competitions') {
      generateTableFromData(['Competitions'])
    } else if (button.value === 'Opportunities') {
      generateTableFromData(['Opportunities'])
    } else if (button.value === 'Tools and Resources') {
      generateTableFromData(['Tools and Resources'])
    }

  })
});

// var filterButtons = document.querySelectorAll('.filter');
// var allrows = document.querySelectorAll('tr')
//
// for (var i=0; i<filterButtons.length; i++) {
// filterButtons[i].onclick = function(){
//     console.log(this.value);
//     if (this.value == "All") {
//         onLoad();
//     } if (this.value == "Competitions") {
//         for (var j=0; j<data.length; j++) {
//             if (data[i].Type == "Competitions") {
//                 allrows[i].display = "none";
//                 console.log(allrows[i], allrows[i].display);
//             }
//         }
//     }
// };
// }




/* Modal Code */
// Get the modal
var modal = document.getElementById('myModal');
// Get the button that opens the modal
var btn = document.getElementById('modal-box');
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
