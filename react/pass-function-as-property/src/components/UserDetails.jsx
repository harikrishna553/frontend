export default function UserDetails(props){
    alert(props.info());

    return <div>
        <ul>
            <li>username : {props.username}</li>
            <li>email : {props.email}</li>
        </ul>
    </div>
}