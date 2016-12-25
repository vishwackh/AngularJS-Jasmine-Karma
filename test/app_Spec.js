'use strict';

describe('Testing appModule', function(){

  //Loading the module can be done in this pattern, if it is containing single line;
    beforeEach(module('appmodule'));

//Loading the module can be done in this pattern, if it is containing multiple lines;
  beforeEach(function(){
    console.log('loading the appModule......');
     module('appmodule');
  });

  //loading dummy it block to test the loading of the module
  it('',function(){

  });

});
