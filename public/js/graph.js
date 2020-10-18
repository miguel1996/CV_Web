var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

const graphContainer = document.getElementById("graph-container");

const options = {
    template: "metro",
    orientation: "vertical-reverse"
}

// Instantiate the graph.
const gitgraph = GitgraphJS.createGitgraph(graphContainer, options);

// Simulate git commands with Gitgraph API.
const career = gitgraph.branch("Master Branch");
career.commit("Initial Commit");

const professional = career.branch("Professional Branch");

const academic = career.branch("Academic Branch");

academic.commit("15/09/2014 - Enrollment in Computer Engineering Bachelor's");
academic.commit("21/10/2014 - Initiated Volunteering in Student's Union");
academic.commit("04/06/2018 - Graduation from Bachelor's");
academic.commit("13/06/2018 - Concluded Volunteering in Student's Union");
professional.commit("01/08/2018 - Web Developer in Summer Internship Program");
professional.commit("31/08/2018 - End of Summer Internship");
academic.commit("17/09/2018 - Enrollment in Computer Engineering Master's");
academic.commit("16/09/2019 - Initiated Master Thesis");
professional.commit("01/01/2020 - Assistant Researcher");
career.commit(dd + "/" + mm + "/" + yyyy + " - Today");