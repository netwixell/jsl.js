Methods
-----------------------------------
**addClass** ( cName ) this method adds the class to the specified element.<br><br>
 сName (*String*) — the name of the class. If you want to specify multiple classes, they are separated by a space.<br><br>
**animate** ( c, d, e )<br><br>
**append** ( child[, tagName] ) adds an element to the end of the list of children of parent. If the item already exists it is removed from its current parent and inserts it again.<br><br>
child (*String, Object*) — the element is inserted at the end.<br>
tagName (*String*) — indicates in what type of element should be wrapped before inserting a child.<br><br>
**attr** ( name[, value] ) Adds a new attribute or changes the value of an existing attribute on the selected element, or returns the value of the specified attribute of an element. If the item does not contain this attribute can be returned to null or "" (empty string); <br><br>
name (*String*) — the name of the attribute. The same is used to retrieve attribute values.<br>
value (*String*) — attribute value. If not specified, returns the current value.<br><br>
**blur** () this method removes the focus from the current element.<br><br>
**children** ( [index] ) the read-only attribute Node.childNodes returns a collection of child elements of this element.<br><br>
index (*Number*) the index of the element. If not specified, returns all child elements.<br><br>
**createElement** ( [attributes] ) creates the specified in the argument element or HTMLUnknownElement if the element is unknown.<br><br>
attributes (*Object*) — the list of attributes and values you want to assign to the created element.<br><br>
**css** ( property[, value] ) returns a CSSStyleDeclaration object which describes the attribute of the style element.<br><br>
property (*String*) — name of the property that should be processed.<br>
property (*Object*) — the list of properties and values.<br>
value (*String*) — the value of the property. If not specified, returns the current value.<br><br>
**data** ( property ) is used for binding properties to a DOM element. Does not change the structure and properties of DOM elements.<br><br>
property (*Object*) — utanovleny list of properties and values.<br>
property (*String*) — returns the value of the property.<br><br>
**drgdrp** (direction) allows you to drag elements on the page (not stable)<br><br>
direction (*Number*) — direction. 0 - X, 1 - Y<br><br>
**getCoordinates** () this method vozvrashaet the coordinates of the element.<br><br>
**getEvents** ( [type] ) returns the event object.<br><br>
type (*String*) — represents the type of event. If not specified, the returned object contains all ustanovlennye handlers for this element.<br><br>
**getFocused** ( listener ) method registers page focus, call the handler.<br><br>
listener (*Function*) — the object which receives a notification when the page has focus.<br><br>
**getIndex** () this method returns the index of the element in the DOM.<br><br>
**html** ( [content] ) sets or gets the layout of child elements.<br><br>
content (*String*) — value. If not specified, returns the current value.<br><br>
**off** ( type, tagName, listener ) removes the given event handler for an element, returns the event handlers.<br><br>
type (*String*) — the type of the listened event.<br>
tagName (*String*) — indicates what the element type should be processed.<br>
listener (*Function*) — the object which receives notification when an event of the specified type occurred. It must be an object that implements the EventListener interface, or simply a JavaScript function (object).<br><br>
**on** ( type[, tagName, listener] ) sets the given event handler for an element, returns the event handlers.<br><br>
type (*String*) — the type of the listened event.<br>
tagName (*String*) — indicates what the element type should be processed.<br>
listener (*Function*) — the object which receives notification when an event of the specified type occurred. It must be an object that implements the EventListener interface, or simply a JavaScript function (object).<br>
If tagName and listener is not set, the method emulates the event.<br><br>
**parent** () this method returns the parent element.<br><br>
**prop** ( name[, value] ) sets a property for the specified element.<br><br>
name (*String*) — represents the name of the item property.<br>
value (*String, Number*) the value of the property element. If not specified, returns the current value.<br><br>
**remove** ( child ) removes a child element from the DOM. Returns the removed element.<br><br>
child (*Object*) — the child element to be removed from the DOM.<br><br>
**removeClass** ( name ) this method removes the class from the specified element.<br><br>
name (*String*) — the name of the element class.<br><br>
**shiftEventListener** ( type ) is used to change the order of execution of handlers.<br><br>
type (*String*) — type modified event.<br><br>
**submit** ( url ) this method sends the form after the validation<br><br>
url - (*String*) — email address to send the form.<br><br>
**val** ( [value] ) this method sets or returns the value of the form<br><br>
value (*String*) — value. If not specified, returns the current value.
