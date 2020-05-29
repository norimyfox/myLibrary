# myLib

DISPLAY

$('selector').show // display = ""
$('selector').hide // display = "none"
$('selector').toggle // if display == "none" -> display = "" and vice versa

CLASSES

$('selector').addClass('className')
$('selector').removeClass('className')
$('selector').toggleClass('className')

ATTRIBUTES

$('selector').setAttr('attribute', 'value')
$('selector').getAttr('attribute', 'value')
$('selector').toggleAttr('attribute', 'value')

ACTIONS

$('selector').html('content')
$('selector').eq(i)
$('selector').index()
$('selector').find('selector')
$('selector').closest('selector')
$('selector').siblings()

HANDLERS

$('selector').on(eventName, callback)
$('selector').off(eventName, callback)
$('selector').click('handler')

EFFECTS

$('selector').fadeIn(time)
$('selector').fadeOff(time)
