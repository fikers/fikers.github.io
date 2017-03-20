window.onload = onLoad();

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

function onLoad(){

    for (var i=0; i<data.length; i++) {
        var tableRow = document.createElement('tr');

        var typeData = document.createElement('td');
        var categoryData = document.createElement('td');
        var nameData = document.createElement('td');
        var linkData = document.createElement('td');
        var notesData = document.createElement('td');

        typeData.innerHTML = data[i].Type;
        categoryData.innerHTML = data[i].Category;
        nameData.innerHTML = data[i].Name;
        linkData.innerHTML = `<a href='${data[i].Link}'>${evaluate(data[i].Type)}</a>`;
        notesData.innerHTML = data[i].Notes;

        typeData.classList.add('typeHeader')
        nameData.classList.add('nameHeader')
        notesData.classList.add('notesHeader')

        if (data[i].Type == 'Competitions') {
            linkData.classList.add('linkHeader')
        } else {
            linkData.classList.add('linkHeaderColor2')
        }

        tableRow.appendChild(nameData);
        tableRow.appendChild(categoryData);
        tableRow.appendChild(linkData);
        tableRow.appendChild(notesData);

        var table = document.getElementById('entriesTable');
        table.appendChild(tableRow);
    }
}

var filterButtons = document.querySelectorAll('.filter');
var allrows = document.querySelectorAll('tr')

for (var i=0; i<filterButtons.length; i++) {
filterButtons[i].onclick = function(){
    console.log(this.value);
    if (this.value == "All") {
        onLoad();
    } if (this.value == "Competitions") {
        for (var j=0; j<data.length; j++) {
            if (data[i].Type == "Competitions") {
                allrows[i].display = "none";
                console.log(allrows[i], allrows[i].display);
            }
        }
    }
};
}




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
