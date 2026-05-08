


function CheckBox() {
    return (
        <div>
        
            <div>
            <h4>Pubblica o bozza?</h4>   
            <label htmlFor="p">Pubblica</label>
            <input type="radio" name="stato" id="y" />
            <label htmlFor="b">Bozza</label>
            <input type="radio" name="stato" id="n" />
            </div>
            <button>Invia</button>
        </div>
    )

}
export default CheckBox; 