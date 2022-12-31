const InputFormStaff = () => {
    return ( 
        <form className="input-form">
            <label for="name">
                <input type= "text" name="name" value= ""></input>
            </label>
            <label for="surName">
                <input type= "text" name="SurName" value= ""></input>
            </label>
            <label for="name">
                <input type= "number" name="phonenumber" value= ""></input>
            </label>
        </form>
     );
}
 
export default InputFormStaff;