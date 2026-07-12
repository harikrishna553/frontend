export function UserDetailsWithFragment(){
    return (
        <>
            <h1>User Details With Fragment</h1>
            <ul>
                <li>username : Krishna</li>
                <li>email : krishna@abc.com</li>
            </ul>
        </>
    );
}

export function UserDetailsWithoutFragments(){
    return (
        <div>
            <h1>User Details Without Fragment</h1>
            <ul>
                <li>username : Krishna</li>
                <li>email : krishna@abc.com</li>
            </ul>
        </div>
    );
}
