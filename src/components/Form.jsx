



function Form() {
    return (
        <>
            <h2>Form per creare un nuovo post</h2>
        <form>
            <label  htmlFor="Autore"></label>
            <input placeholder="Autore" type="text" />
            <label  htmlFor="Titolo"></label>
            <input placeholder="Titolo"  type="text" />
                <div>
                <textarea placeholder="inserisci testo" htmlFor="inserisci testo" name="boxtext" id="testo"></textarea>   
                </div>
        </form>

</>
    )
}
export default Form; 