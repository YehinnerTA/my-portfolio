import '../styles/container.css';

function About() {
    return (
        <>
            <section className="skills-section">
                <div className="container">
                    <h2 className="section-title">Mis Habilidades</h2>
                    <div className="skills-grid">

                        <div className="skill-category">
                            <h3>Frontend</h3>
                            <div className="skill-icons">
                                <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5" />
                                <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white" alt="CSS3" />
                                <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React" />
                                <img src="https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white" alt="Angular" />
                                <img src="https://img.shields.io/badge/vue.js-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D" alt="Vue.js" />
                            </div>
                        </div>

                        <div className="skill-category">
                            <h3>Backend</h3>
                            <div className="skill-icons">
                                <img src="https://img.shields.io/badge/java-%23007396.svg?style=for-the-badge&logo=java&logoColor=white" alt="Java" />
                                <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E" alt="JavaScript" />
                                <img src="https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
                                <img src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js" />
                                <img src="https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54" alt="Python" />
                                <img src="https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white" alt="PHP" />
                            </div>
                        </div>

                        <div className="skill-category">
                            <h3>Base de Datos</h3>
                            <div className="skill-icons">
                                <img src="https://img.shields.io/badge/sql%20server-%23CC2927.svg?style=for-the-badge&logo=microsoftsqlserver&logoColor=white" alt="SQL Server" />
                                <img src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white" alt="MySQL" />
                                <img src="https://img.shields.io/badge/firebase-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34" alt="Firebase" />
                                <img src="https://img.shields.io/badge/supabase-%233FCF8E.svg?style=for-the-badge&logo=supabase&logoColor=white" alt="SupaBase" />
                                <img src="https://img.shields.io/badge/mongodb-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB" />
                            </div>
                        </div>

                        <div className="skill-category">
                            <h3>Diseño UX / UI</h3>
                            <div className="skill-icons">
                                <img src="https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white" alt="Figma" />
                                <img src="https://img.shields.io/badge/canva-%2300C4CC.svg?style=for-the-badge&logo=canva&logoColor=white" alt="Canva" />
                                <img src="https://img.shields.io/badge/photoshop-%2331A8FF.svg?style=for-the-badge&logo=adobephotoshop&logoColor=white" alt="Photoshop" />
                            </div>
                        </div>

                        <div className="skill-category">
                            <h3>Administración de Sistemas</h3>
                            <div className="skill-icons">
                                <img src="https://img.shields.io/badge/windows%20server-%230078D6.svg?style=for-the-badge&logo=windows&logoColor=white" alt="Windows Server" />
                                <img src="https://img.shields.io/badge/kali%20linux-%23557C94.svg?style=for-the-badge&logo=kalilinux&logoColor=white" alt="Kali Linux" />
                                <img src="https://img.shields.io/badge/shell%20scripting-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white" alt="Shell Scripting" />
                            </div>
                        </div>

                        <div className="skill-category">
                            <h3>Desarrollo Móvil</h3>
                            <div className="skill-icons">
                                <img src="https://img.shields.io/badge/ionic-%233880FF.svg?style=for-the-badge&logo=ionic&logoColor=white" alt="Ionic" />
                                <img src="https://img.shields.io/badge/react%20native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React Native" />
                                <img src="https://img.shields.io/badge/android%20studio-%233DDC84.svg?style=for-the-badge&logo=androidstudio&logoColor=white" alt="Android Studio" />
                                <img src="https://img.shields.io/badge/flutter-%2302569B.svg?style=for-the-badge&logo=flutter&logoColor=white" alt="Flutter" />
                            </div>
                        </div>

                        <div className="skill-category">
                            <h3>Control de Versiones</h3>
                            <div className="skill-icons">
                                <img src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white" alt="Git" />
                                <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
                                <img src="https://img.shields.io/badge/gitlab-%23FC6D26.svg?style=for-the-badge&logo=gitlab&logoColor=white" alt="GitLab" />
                                <img src="https://img.shields.io/badge/bitbucket-%230047B3.svg?style=for-the-badge&logo=bitbucket&logoColor=white" alt="Bitbucket" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;