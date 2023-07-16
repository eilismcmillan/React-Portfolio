import { BsGithub } from "react-icons/bs";

function Project({ title, applicationLink, githubLink, imageUrl }) {
  return (
    <div className="project">
      <h3> <a href = {githubLink} class='github-link'><BsGithub/> </a> {title}</h3>  
      <a
        href={applicationLink}
        target="_blank">
      <img src={imageUrl} alt={title} />
      </a>
    </div>
  );
}

export default Project;