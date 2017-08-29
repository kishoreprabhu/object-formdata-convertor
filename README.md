# object-formdata-convertor
A module which converts formdata to json, form to json, json to formdata.

## Installation 

npm install object-formdata-convertor

## Usage
```javascript
var manipulator = require("object-formdata-convertor");
```
                    OR
```javascript
import manipulator from "object-formdata-convertor";
```

#### FormData to JSON
```javascript
var formData = new FormData();
var jsonObject = manipulator.FormDataToJson(formData)
console.log(jsonObject, "returns json from formdata");
```

#### Form to JSON
```javascript 
var formDom = document.querySelector('form');
var jsonObject = manipulator.FormDataToJson(formDom);
console.log(jsonObject, "returns json from form element");
```

#### JSON to FormData
```javascript
var jsonObj = {
    "a" : 1,
    "b" : 2
};
var formData = manipulator.JsonToFormData(jsonObj);
console.log(formData, "returns formdata from json");
```
#### FORM to JSON
```javascript
var formDom = document.querySelector('form');
var formdata = manipulator.formToFormData( formDom );
console.log(formData, "returns formdata from form element");
```

#### To get value for a key from form data
```javascript
var formdata = new formdata(formdata);
var value = manipulator.toValue(formdata, "username");
console.log(value, "returns value for key username from formdata");
```

## API
```javascript
var jsonObject = manipulator.FormDataToJson(formData/formDom);

var formData = manipulator.JsonToFormData(json);

var formData = manipulator.formToFormData(formDom);

var value = toValue(formData, keyName);
```


