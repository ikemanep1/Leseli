import React from 'react';

function AddPackage(){
  let _name = null;
  let _price = null;
  let _description = null;

  function handlePackageSubmission(event) {
    event.preventDefault();
    console.log(_name.value);
    console.log(_price.value);
    console.log(_description.value);
    _name.value = ''
    _price.value = ''
    _description.value = ''
  }

  return (
    <div>
      <form onSubmit={handlePackageSubmission}>
        <input
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='price'
          placeholder='Price'
          ref={(input) => {_price = input;}}/>
        <textarea
          id='description'
          placeholder='Description'
          ref={(textarea) => {_description = textarea;}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default AddPackage;
