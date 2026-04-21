function InputConsole(){
    return (
        <input 
        onChange ={(e) => console.log(e.target.value)}
        />
    );

}
export default InputConsole;