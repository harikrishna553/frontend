export default function EchoTracker(){
    return (
        <>
            <form>
                <label htmlFor="echo">Enter Any Text</label> &nbsp;&nbsp;&nbsp;
                <input id="echo" type="text" placeholder="Type Anyhting" 
                onChange = {(event) => {
                    console.log(event.target.value);
                }}
                />
            </form>
        </>
    );
}