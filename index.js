function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function namedFunction() {
        return "Hello world!";
    };
}

function returnsAnAnonymousFunction() {
    return function() {
    };
}
