function validateFields ( value, typeField, typeForm  ) {

    typeForm        = typeForm ? typeForm : "" ;
    let result      = true;
    let regExpEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let regExpMobil = /^[0-9]{12,13}$/;
    let regExpDocument = /^-?\d+\.?\d*$/;

    if ( typeField === 'name' && typeForm === 'register' ) {
        if ( !value ) {
            result = false;
        } else {
            result = true;
        }
    }

    if ( typeField === 'email') {
        if ( !regExpEmail.test( value ) ) {
            result = false;
        } else {
            result = true;
        }
    }

    if ( typeField === 'mobile') {
        if ( !regExpMobil.test( value ) ) {
            result = false;
        } else {
            result = true;
        }
    }

    if ( typeField === 'document') {
        if ( !regExpDocument.test( value ) ) {
            result = false;
        } else {
            result = true;
        }
    }
    if ( typeField === 'checkBox') {
        if ( !value ) {
            result = false;
        } else {
            result = true;
        }
    }

    return result;
}

export { validateFields };
