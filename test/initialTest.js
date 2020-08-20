const assert = require('chai').assert;
const initial = require('../initial');

sayHelloResult = initial.sayHello();
addNumbersResult = initial.addNumbers(5,5); 

describe('Initial', function(){
    describe('sayHello()', function(){
        it('initial should return hello', function(){
            assert.equal(sayHelloResult, 'hello');
        });
    
        it('sayHello should return type string',function(){
            assert.typeOf(sayHelloResult, 'string');
        });
});

    describe('addNumbers()', function(){
        it('addNumbers should be above 5', function(){
           assert.isAbove(addNumbersResult, 5);
        });
        
        it('addNumbers should return type string',function(){
            assert.typeOf(addNumbersResult, 'number');
        });
    });
});