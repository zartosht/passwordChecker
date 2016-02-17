function check_strength(password, id = '') {
    var strength = $('#' + id), length = password.length, points = 0, int_count = 0,
        str_count = 0,
        upper_count = 0,
        lower_count = 0,
        symbol_count = 0;


    /*
    Check Length of the given password
     */
    if (length > 7) {
        points++;
    }
    if (length > 12) {
        points++;
    }
    if (length > 14) {
        points++;
    }

    /*
    Check given password for its upper, lower cases, symbols, strings and integers.
     */
    for (var i = 0; i < length; i++) {
        (parseInt(password[i])) ? int_count++ : str_count++;
        (password[i] == password[i].toUpperCase() && password[i] != password[i].toLowerCase()) ? upper_count++ : lower_count++;
        (password[i] == password[i].toUpperCase() && password[i] == password[i].toLowerCase()) ? symbol_count++
            : symbol_count;
    }

    /*
    Give point to given password for above for results
     */
    (int_count != length && str_count != length && int_count >= 1 && str_count >= 1) ? points++ : points;
    (lower_count != length && upper_count != length && lower_count >= 1 && upper_count >= 1) ? points++ : points;
    (symbol_count != length && symbol_count >= 1 ) ? points++ : points;

    /*
    Convert point to percentage
     */
    points = points * 100 / 6;

    /*
    Check to see if password length is more than 0 and points is 0 then give it a fake low percentage,
    For styling purposes
     */
    (length != 0 && points == 0) ? points = 10 : points;

    /*
    If you pass a div id through the id variable, here passwordChecker will try to change its width
     */
    strength.css('width', points + "%");

    /*
    If you didn't pass any ID, the result will be returned to you so you can whatever you want with it.
     */
    if(id.length == 0){
        return points;
    }
}
