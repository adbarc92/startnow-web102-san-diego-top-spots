function fixTable( table, data ){
  var index = 1;
  data.forEach( ( elem )  => {
    var newRow = document.createElement( 'tr' );
    table.appendChild( newRow );
    var id = 'row-' + index;
    newRow.setAttribute( 'id', id );
    newRow.setAttribute( 'class' , 'row' ); // New
    if( index % 2 === 1 ){
      newRow.setAttribute( 'class', 'odd-row' );
    }
    else{
      newRow.setAttribute('class', 'even-row' );
    }
    var name = document.createElement( 'td' );
    name.setAttribute( 'class', 'name-td' );
    name.innerText = elem.name;
    var desc = document.createElement( 'td' );
    desc.setAttribute( 'class', 'desc-td' );
    desc.innerText = elem.description;
    var linkURL = 'https://www.google.com/maps?q=' + elem.location[ 0 ] + ',' + elem.location[ 1 ];
    var link = document.createElement( 'a' );
    link.href = linkURL;
    link.innerHTML = 'Open in Google Maps';
    link.setAttribute( 'class', 'link' );
    newRow.appendChild( name );
    newRow.appendChild( desc );
    newRow.appendChild( link );
    index++;
  });
}

$(document).ready( function(){
// write your code here
  var table = document.getElementById('table');
    $.getJSON( 'data.json', function( data ){
      fixTable( table, data );
    });
});

// Additions:
  // Open links in new tab

// Add role to table
// Add row for headers to table
  // Headers are children of this row
// ForEach - create new row
  // <td role='row'> Name
  // <td role='row'> Details
  // <td role='row'> Link
