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
    });

    $('.devour').on('click', event => {
        event.preventDefault();
        let devouredBurger = {
            id: Number($(event.target).siblings('.burgerId').children('span').text())
        };
        
        console.log(devouredBurger);

        $.ajax('/api/burgers', {
            type: 'PUT',
            data: devouredBurger
        }).then(
            () => {
                console.log('Devoured burger');
                location.reload();
            }
        );
    });
});
  