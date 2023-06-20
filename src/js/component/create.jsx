const Create =()=> {
    return(
    <div className="">
        <h1>todo List</h1>
        <form>
          <label>List Head:</label>
          <input type="text"
          required 
          />
        </form>
        <form>
          <label>List Body:</label>
          <textarea
           required

          ></textarea>
        </form>


    </div>
    );
};

export default Create;