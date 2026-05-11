



function Form({ formData, setFormData }) {
    return (
        <>
            <h2>Form per creare un nuovo post</h2>
        <form>
            <label  htmlFor="Autore"></label>
            <input placeholder="Autore" type="text" value={formData.author} onChange={(e) => setFormData({ ...formData, author: e.target.value })}/>
            <label  htmlFor="Titolo"></label>
            <input placeholder="Titolo"  type="text" value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })} />
                <div>
                <textarea placeholder="inserisci testo" htmlFor="inserisci testo" name="boxtext" id="testo" value={formData.body}
                        onChange={(e) => setFormData({ ...formData, body: e.target.value })}></textarea>   
                </div>
        </form>

</>
    )
}
export default Form; 