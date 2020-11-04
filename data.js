const data = {
	data: {
		name: "Miguel Andrade",
		career: "Software Developer",
		spoken_languages: ["Portuguese", "English"],
		skills: ["Git", "MySQL", "HTML5/CSS3", "Javascript/JQuery", "Node.JS", "PHP", "Laravel", "Python", "Django", "C#", "Unity", "Java", "Android Studio", "Processing"],
		about: ["Hi, I'm Miguel, a Computer Engineering graduate mostly interested in Web-based applications, currently based in Portugal.", "I'm a versatile, determined person, continuously acquiring new knowledge, to evolve both personally and professionally. I'm always eager for a challenge, and I'm never afraid to use the right tools for the job, regardless of my experience with them.", "Currently, I'm working as an Assistant Researcher in ITI/LARSyS, feel free to contact me through the form bellow, or any of my social media."],
		//about: ["Teste","Teste","Teste","Teste","Teste","Teste"],
		cv_file: "",
		timeline: [
			{
				id: "bachelor",
				title: "Computer Engineering Bachelor's",
				date: "15/09/2014",
				description: ""
			},
			{
				id: "union",
				title: "Volunteering in Student's Union",
				date: "21/10/2014",
				description: ""
			},
			{
				id: "graduation_bachelor",
				title: "Graduation from Bachelor's",
				date: "04/06/2018",
				description: ""
			},
			{
				id: "end_union",
				title: "Concluded Volunteering in Student's Union",
				date: "13/06/2018",
				description: ""
			},
			{
				id: "internship",
				title: "Web Developer in Internship Program",
				date: "01/08/2018",
				description: ""
			},
			{
				id: "end_internship",
				title: "End of Internship",
				date: "31/08/2018",
				description: ""
			},
			{
				id: "master",
				title: "Computer Engineering Master's",
				date: "17/09/2018",
				description: ""
			},
			{
				id: "thesis",
				title: "Initiated Master Thesis",
				date: "16/09/2019",
				description: ""
			},
			{
				id: "researcher",
				title: "Assistant Researcher in ITI/LARSyS",
				date: "01/01/2020",
				description: ""
			}
		],

		portfolio: [
			{
				id: "ardome",
				title: "ARDome",
				description: "ARDome is a persuasive interface for inspiring pro-environmental behaviors, by leveraging Augmented Reality technology. This app was built through Unity and ARCore.",
				github: "",
				download: "",
				img: "img/dome.JPG"
			},
			{
				id: "easyEvent",
				title: "easyEvent",
				description: "easyEvent is an event scheduling platform on which the user is capable of creating and submiting custom forms. This is a group project from a lecture developed through Laravel and MySQL.",
				github: "",
				download: "",
				img: "img/event2.jpg"
			},
			{
				id: "cv",
				title: "Personal Website",
				description: "This very own website was developed as a means to promote what I do best. It's a simple web page powered by a Node.JS server, coupled with Express and Embed.JS.",
				github: "",
				download: "",
				img: "img/second_cover_photo.png"
			}
		],

		contact: {
			email: "",
			linkedin: "",
			github: "https://github.com/miguel1996/"
		}
	}
}

module.exports.data = data;