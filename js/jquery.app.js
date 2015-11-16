$().ready(function() {

  $.get('https://api.doughnuts.ga/doughnuts')
    .done(function(doughnuts){

      doughnuts.forEach(function(elem) {
        $('#doughnuts').append('<li><b>Flavour:</b> ' +
          elem.flavor + ' | <b>Style:</b> ' +
          elem.style + ' </li> ' +
          ' <button type="button" class="btn btn-warning" data-toggle="modal" data-target="#edit-modal" data-whatever="@mdo">Edit</button> '
        );
      })
    })

  $('#new-doughnut').on('submit', function(e){
    e.preventDefault();
    console.log('form clicked');

  $.ajax('https://api.doughnuts.ga/doughnuts', {
    method:"POST", data: {
    flavor: $('#new-doughnut-flavor').val(),
    style: $('#new-doughnut-style').val(),
    }
  })
  .done(function(data){
    $('#doughnuts').append('<li><b>Flavour:</b> ' +
          data.flavor + ' | <b>Style:</b> ' + data.style + '</li>');
    })
  })

  $('#edit-doughnut').on('submit', function(e, request){
    e.preventDefault();

    $.ajax('https://api.doughnuts.ga/doughnuts/data-id', {
      method:"PUT", data: {
      flavor: $('#edit-doughnut-flavor').val(),
      style: $('#edit-doughnut-style').val(),
      }
    })
      .done(function(data){
        //not sure what to do next
      })
  })

});
