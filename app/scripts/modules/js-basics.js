(function(global) {
    'use strict';

    var JS_BASICS={};

    JS_BASICS.isNumberEven = function(i) {
        return i%2==0;
        // i will be an integer.
        // Return true if it's even, and false if it isn't.
    };

    JS_BASICS.getFileExtension = function(str) {
        if(str.indexOf('.') !=-1 )
        return str.split('.').pop();
        else
            return false;
        // str will be a string, but it may not have a file extension.
        // Return the file extension (with no period) if it has one, otherwise false
    };
    JS_BASICS.longestString = function(arr) {
        // arr will be an array.
                // Return the longest string in the array
            var x=arr;  
                var k=0;
            var l=x[k].length;
            if (typeof x[0] != 'string'){ l=1;}
            for(var i=1;i<x.length;i++) {
            var l1=x[i].length;
                if (typeof x[i] != 'string'){l1=1};
                if (l1>=l){
                    k=i;
                }   
            }
            return x[k];
    };

    JS_BASICS.reverseString = function(str) {
        return str.split("").reverse().join("");
        // str will be an string
        // Return a new string who's characters are in the opposite order to str's.
    };

    JS_BASICS.isPalindrome = function(str) {
         var palin = str.split("").reverse().join("").replace(" ","").toLowerCase();
         var ma_chaine = str.split("").join("").replace(" ","").toLowerCase();

                if (palin == ma_chaine){
                    return true;
                } else {
                    return false;
                }
        // str will be an string
        // Return true if it is a palindrome and false otherwise. It should be case insensitive and not consider space or punctuation.
    };

    JS_BASICS.nestedSum = function(arr) {
        // arr will be an array, containing integers, strings and/or arrays like itself
        // Return the sum all the numbers you find, anywhere in the nest of arrays.
    };

    global.JS_BASICS = JS_BASICS;
}(this));