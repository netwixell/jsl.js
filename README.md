# jsl.js

UI manipulate framework<br>

Welcome to the jsl.js!<br>

Method for manipulating DOM
--------------------------------------------------------------------
**addClass ( cName )** this method adds the class to the specified element.<br>
сName (*String*) — the name of the class. If you want to specify multiple classes, they are separated by a space.<br>
`jsl('body').addClass('test');`<br>
`jsl('body').addClass(); // test`<br>
<br>
**animate ( c, d, e )**<br>
<br>
**append ( child[, _tagName_] )** adds an element to the end of the list of children of parent. If the item already exists it is removed from its current parent and inserts it again.<br>
child (*String, Object*) — the element is inserted at the end.<br>
tagName (*String*) — indicates in what type of element should be wrapped before inserting a child.<br>
`jsl('body').append(jsl('div').createElement())`<br>
`jsl('body').append(jsl('p').createElement(), 'div')`<br>
`jsl('body').append('<div>text</div>')`<br>
`jsl('body').append('<p>text</p>', 'div')`<br>
<br>
**attr ( name[, _value_] )** Adds a new attribute or changes the value of an existing attribute on the selected element, or returns the value of the specified attribute of an element. If the item does not contain this attribute can be returned to null or "" (empty string); <br>
name (*String*) — the name of the attribute. The same is used to retrieve attribute values.<br>
value (*String*) — attribute value. If not specified, returns the current value.<br>
`jsl('body').attr('id','body')`<br>
`jsl('body').attr('id') // body`<br>
<br>
**blur ()** this method removes the focus from the current element.<br>
<br>
**children ( [_index_] )** the read-only attribute Node.childNodes returns a collection of child elements of this element.<br>
index (*Number*) the index of the element. If not specified, returns all child elements.<br>
`jsl('body').children() // all children element`<br>
`jsl('body').children(0) // zero-indexed element`<br>
<br>
**createElement ( [_attributes_] )** creates the specified in the argument element or HTMLUnknownElement if the element is unknown.<br>
attributes (*Object*) — the list of attributes and values you want to assign to the created element.<br>
`jsl('div').createElement() // `<br>
`jsl('div').createElement({id:'mid', style: 'width: 50px; height: 50px; background: #000000'}) // `<br>
<br>
**css ( property[_, value_] )** returns a CSSStyleDeclaration object which describes the attribute of the style element.<br>
property (*String*) — name of the property that should be processed.<br>
property (*Object*) — the list of properties and values.<br>
value (*String*) — the value of the property. If not specified, returns the current value.<br>
`jsl('body').css('background', '#000')`<br>
`jsl('body').css({color: '#fff', fontWeight: 'bold'})`<br>
`jsl('body').css('background')` // '#000'<br>
<br>
**data ( property )** is used for binding properties to a DOM element. Does not change the structure and properties of DOM elements.<br>
property (*Object*) — utanovleny list of properties and values.<br>
property (*String*) — returns the value of the property.<br>
<br>
**drgdrp (direction)** allows you to drag elements on the page (not stable)<br>
direction (*Number*) — direction. 0 * X, 1 * Y<br>
<br>
**getCoordinates ()** this method vozvrashaet the coordinates of the element.<br>
<br>
**getEvents ( [_type_] )** returns the event object.<br>
type (*String*) — represents the type of event. If not specified, the returned object contains all ustanovlennye handlers for this element.<br>
<br>
**getFocused ( listener )** method registers page focus, call the handler.<br>
listener (*Function*) — the object which receives a notification when the page has focus.<br>
<br>
**getIndex ()** this method returns the index of the element in the DOM.<br>
<br>
**html ( [_content_] )** sets or gets the layout of child elements.<br>
content (*String*) — value. If not specified, returns the current value.<br>
<br>
**off ( type, tagName, listener )** removes the given event handler for an element, returns the event handlers.<br>
type (*String*) — the type of the listened event.<br>
tagName (*String*) — indicates what the element type should be processed.<br>
listener (*Function*) — the object which receives notification when an event of the specified type occurred. It must be an object that implements the EventListener interface, or simply a JavaScript function (object).<br>
<br>
**on ( type[_, tagName, listener_] )** sets the given event handler for an element, returns the event handlers.<br>
type (*String*) — the type of the listened event.<br>
tagName (*String*) — indicates what the element type should be processed.<br>
listener (*Function*) — the object which receives notification when an event of the specified type occurred. It must be an object that implements the EventListener interface, or simply a JavaScript function (object).<br>
If tagName and listener is not set, the method emulates the event.<br>
<br>
**parent ()** this method returns the parent element.<br>
<br>
**prop ( name[_, value_] )** sets a property for the specified element.<br>
name (*String*) — represents the name of the item property.<br>
value (*String, Number*) the value of the property element. If not specified, returns the current value.<br>
<br>
**remove ( child )** removes a child element from the DOM. Returns the removed element.<br>
child (*Object*) — the child element to be removed from the DOM.<br>
<br>
**removeClass ( name )** this method removes the class from the specified element.<br>
name (*String*) — the name of the element class.<br>
<br>
**shiftEventListener** ( type ) is used to change the order of execution of handlers.<br>
type (*String*) — type modified event.<br>
<br>
**submit ( url )** this method sends the form after the validation<br>
url (*String*) — address to send the form.<br>
<br>
**val ( [_value_] )** this method sets or returns the value of the form<br>
value (*String*) — value. If not specified, returns the current value.<br>
<br>

Methods
--------------------------------------------------------------------
**ajax** ( object[,send] )<br>
object (*Object*) the object can contain:<br>
type (*String*) the term "GET" or "POST"<br>
url (*String*) address<br>
headers (*Object*) an object that can contain the passed headers<br>
2: the function that occurs after the onset of the readyState 2<br>
3: the function that occurs after the onset of the readyState 3<br>
4: function is executed after the occurrence of the condition readyState 4<br>
send (*String*) — the string wakes, Perdana to send<br>
<br>
**bind** ( thisArg ) raises the specified event<br>
thisArg (*Object*) — calls the function with a given this value and arguments provided as an array (or an array-like object).<br>
<br>
**databaseCreate** (c,d)<br>
<br>
**databaseInsert** (c,d)<br>
<br>
**databaseSelect** (c,d)<br>
<br>
**databaseUpdate** (c,d,e)<br>
<br>
**getXmlHttp** () returns an instance of XMLHttpRequest<br>
<br>
**hotkey** ( type, key, listener )<br>
type (*String*) — the type of the listened event.<br>
key (*String*) — keyboard shortcut<br>
listener (*Function*) — the object which receives notification when an event of the specified type occurred. It must be an object that implements the EventListener interface, or simply a JavaScript function (object).<br>
<br>
**imports** ( methods ) imports methods for DOM. You can use to create your own modules.<br>
methods (*Object*) object methods<br>
<br>
**toJSON** ( str ) returns a string in json format<br>
str (*String*) — Preobrazhenie line<br>
<br>
**navi** () returns string navigator.<br>
<br>
**notifi** ( title )<br>
title (*String*) — string uvedomlenie.<br>
<br>
**on** ( type, listener ) specifies the event handler for the item.<br>
type (*String*) — the type of the listened event.<br>
listener (*Function*) — the object which receives notification when an event of the specified type occurred. It must be an object that implements the EventListener interface, or simply a JavaScript function (object).<br><br>
**parserUrl** ( url ) returns the url components.<br>
url (*String*) — the url string<br>
<br>
**require** ( files ) connect script and style<br>
files (*Object*) — array of include files<br>
<br>
**trigger** ( type )<br>
type (*String*) — the type of the listened event.