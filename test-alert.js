var alerts = useAlert({ position: 'TOP_RIGHT' })

$("#info").on('click', function() {
    alerts.info("Coupon applied successfully. Discount of 5000 ugx has been given")
})
$("#error").on('click', function() {

    alerts.error("Oops, there was an error while processing your order. Please try again later")
})
$("#success").on('click', function() {
    alerts.success("Order received successfully. We shall contact you soon. Thank you for choosing CINEMAUG MAERCHANDIZE")
})

$('#top-left').on('click', function() {
    alerts = useAlert({ position: 'TOP_LEFT' })
    alerts.info("This is placed in the TOP LEFT")
})
$('#top-center').on('click', function() {
    alerts = useAlert({ position: 'TOP_CENTER' })
    alerts.info("This is placed in the TOP CENTER")
})
$('#top-right').on('click', function() {
    alerts = useAlert({ position: 'TOP_RIGHT' })
    alerts.info("This is placed in the TOP RIGHT. This is a default placement")
})
$('#middle-right').on('click', function() {
    alerts = useAlert({ position: 'MIDDLE_RIGHT' })
    alerts.info("This is placed in the MIDDLE RIGHT")
})
$('#middle-left').on('click', function() {
    alerts = useAlert({ position: 'MIDDLE_LEFT' })
    alerts.info("This is placed in the MIDDLE LEFT")
})
$('#middle-center').on('click', function() {
    alerts = useAlert({ position: 'MIDDLE_CENTER' })
    alerts.info("This is placed in the MIDDLE CENTER")
})

$('#bottom-right').on('click', function() {
    alerts = useAlert({ position: 'BOTTOM_RIGHT' })
    alerts.info("This is placed in the BOTTOM RIGHT")
})
$('#bottom-left').on('click', function() {
    alerts = useAlert({ position: 'BOTTOM_LEFT' })
    alerts.info("This is placed in the BOTTOM LEFT")
})
$('#bottom-center').on('click', function() {
    alerts = useAlert({ position: 'BOTTOM_CENTER' })
    alerts.info("This is placed in the BOTTOM CENTER")
})
$('#top-margin').on('click', function() {
    alerts = useAlert({
        position: 'TOP_RIGHT'
    })
    alerts.info("This modified margin top and bottom from default to 5")
})