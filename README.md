# myLib

DISPLAY

<code>$('selector').show</code> display = ""

<code>$('selector').hide</code> display = "none"

<code>$('selector').toggle</code> if display == "none" -> display = "" and vice versa

CLASSES

<code>$('selector').addClass('className')</code>

<code>$('selector').removeClass('className')</code>

<code>$('selector').toggleClass('className')</code>

ATTRIBUTES

<code>$('selector').setAttr('attribute', 'value')</code>

<code>$('selector').getAttr('attribute', 'value')</code>

<code>$('selector').toggleAttr('attribute', 'value')</code>

ACTIONS

<code>$('selector').html('content')</code>

<code>$('selector').eq(i)</code>

<code>$('selector').index()</code>

<code>$('selector').find('selector')</code>

<code>$('selector').closest('selector')</code>

<code>$('selector').siblings()</code>

HANDLERS

<code>$('selector').on(eventName, callback)</code>

<code>$('selector').off(eventName, callback)</code>

<code>$('selector').click('handler')</code>

EFFECTS

<code>$('selector').fadeIn(time)</code>

<code>$('selector').fadeOff(time)</code>

MODALS

In the trigger for calling the modal window, specify the following data-attribute

<code>data-toggle="modal" data-target="#exampleModal"</code>

**The modal window class must be "modal"!**
Change the value id attribute to the one that the button has to bind the modal window to this button

<code>class="modal" id="exampleModal"</code> 


DROPDOWN

By analogy with modal windows. Specify <code>data-attribute="ID button"</code> in the button indicate <code>Id="Name"</code>
