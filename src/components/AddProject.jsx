import React from 'react';

function AddProject(){
  let _client_name = null;
  let _description = null;

  function handleProjectSubmission(event) {
    event.preventDefault();
    console.log(_client_name.value);
    console.log(_description.value);
    _client_name.value = ''
    _description.value = ''
  }

  return (
    <div>
      <form onSubmit={handleProjectSubmission}>
        <input
          type='text'
          id='client_name'
          placeholder='Name'
          ref={(input) => {_client_name = input;}}/>
        <textarea
          id='description'
          placeholder='Description'
          ref={(textarea) => {_description = textarea;}}/>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default AddProject;
