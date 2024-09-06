import styles from './About.module.css';


export default function About() {

    const defaultImage = 'https://static.vecteezy.com/system/resources/previews/007/319/933/non_2x/black-avatar-person-icons-user-profile-icon-vector.jpg'

    const team = [
        { name: 'Pía Fernández Szkutnik', job: 'CEO & Founder', image : defaultImage },
        { name: 'Juan Manuel Hernández', job: 'Fullstack', image : defaultImage },
        { name: 'Fernando Rojas', job: 'Fullstack', image : defaultImage },
        { name: 'Juan Bautista Calvo', job: 'Desarrollador Frontend', image : defaultImage },
        { name: 'Diego Sebastián Ibarguren', job: 'Desarrollador Frontend', image : defaultImage },
        { name: 'Ezequiel Capretta', job: 'Desarrollador Backend ', image : defaultImage },
        { name: 'Franco Itria', job: 'Desarrollador Backend ', image : defaultImage },
        { name: 'Antonio Miguel Moreno ', job: 'Machine Learning', image : defaultImage },
        { name: 'Manuel Alejandro Salinas ', job: 'Machine Learning', image : defaultImage },
    ]

    return (
        <div className={styles.container} >
            <div className={styles.about}>
                <h2>SOBRE NOSOTROS</h2>
                <p className={styles.description}>PlagiTune es una innovadora solución tecnológica que detecta plagios
                musicales utilizando algoritmos avanzados de procesamiento de audio, análisis de señales y
                aprendizaje automático, proporcionando una herramienta robusta para proteger derechos de
                autor y fomentar la originalidad.
                </p>
            </div>
            <div className={styles.team}>
                <div>
                    <h2>Equipo</h2>
                    <h4>Conoce al equipo de PlagiTune</h4>
                </div>
                <div className={styles.members}>
                    {
                        team.map((member, index) => (
                            <div className={styles.member} key={index}>
                                <img src={member.image} alt={member.name} className={styles.image} />
                                <h3>{member.name}</h3>
                                <h4>{member.job}</h4>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}