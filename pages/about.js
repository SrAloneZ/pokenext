import Image from "next/image"
import styles from '../styles/About.module.css'

export default function About(props) {
    return (
        <>
            <div className={styles.about}>
                <h1>Sobre o projeto</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tincidunt ligula leo, in accumsan lacus scelerisque non. Vivamus nec libero id risus egestas rutrum. Quisque non tempor arcu. Nullam eget dolor id erat feugiat mollis.</p>
                <Image src="/images/charizard.png" width="300" height="300" alt="Charizard"/>
            </div>
        </>
    )
}