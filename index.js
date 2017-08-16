/**
 * converts formdata to plain js object 
 * @param {object} formData
 */
exports.FormDataToJson = (formData) => {
    var _serialized_data
        ,_converted_json = {}
        ,_entries ={};
    if ( formData && ( typeof formData === "object" || formData.nodeName === "FORM" )) {
        if ( formData.entries() ) {
            _entries = formData;
        } else {
            _serialized_data = new FormData(formData);
            _entries = _serialized_data.entries();  
        }
    } else {
        throw new Error("Invalid format, expected form or formdata as param");
    }
    for (const [key, value] of _entries) {
        _converted_json[key] = value;
    }
    return _converted_json;
}

/**
 * converts plain js object into formdata
 * @param {object} object
 */
exports.JsonToFormData = (object) => {
    var _this = this, 
        formData = !_this.isFormData ? new FormData() : _this.formData;
    if ( object ) {
        Object.keys(object).forEach( key => {
            if ( typeof object[key] == "object" && !Array.isArray(object[key]) ) {
                _this.isFormData = true;
                _this.formData = formData;
                _this.JsonToFormData(object[key]);
            } else {
                formData.append(key, object[key]);
            }
          } 
        );
    } else {
        throw new Error("Expected json object as param");
    }
    return formData;
}