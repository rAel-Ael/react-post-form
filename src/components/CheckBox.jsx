


function CheckBox ({ formData, setFormData, onSend }){
    return (
    <> 
        <div>     
            <label htmlFor="p">Pubblica</label>
            <input type="radio" name="stato" id="y" onChange={() => setFormData({ ...formData, public: true })}/>
            <label htmlFor="b">Bozza</label>
            <input type="radio" name="stato" id="n" onChange={() => setFormData({ ...formData, public: false })} />
            </div> 
            <button onClick={onSend}>Invia</button>
    </> 
    )

}
export default CheckBox; 