import myResume from '../files/resume-pdf.pdf'

function Resume() {
  return (
    <div>
      <h2>Résumé</h2>
      <p>Click the link below to download the file:</p>
      <a href={myResume} download>Download File</a>
      <section class="resume-sections">
        <h3>Front-End Proficiencies</h3>
        
        <ul class="resume-list">
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>JQuery</li>
            <li>JQuery</li>
            <li>React</li>
            <li>Bootsrap</li>
        </ul>
      </section>
      <section class="resume-sections">
        <h3>Back-End Proficiencies</h3>
         <ul class="resume-list">
            <li>APIs</li>
            <li>Node</li>
            <li>Express</li>
            <li>MySQL, Sequelize</li>
            <li>MongoDB, Mongoose</li>
            <li>REST</li>
            <li>GraphQL</li>
        </ul>
      </section>
    </div>
  );
}

export default Resume;