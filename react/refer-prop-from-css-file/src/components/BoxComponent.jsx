import styles from '../css/styles.module.css'

export default function BoxComponent(){
    return (
        <div>
            <div className = {styles.light}></div>
            <div className = {styles.dark}></div>
        </div>
    );
}