$(function() {
    $('.create-form').on('submit', event => {
        event.preventDefault();

        let newBurger = {
            name: $('#burger').val().trim()
        };

        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(
            () => {
                console.log('Ordered burger');
                location.reload();
            }
        )
    })
});
  