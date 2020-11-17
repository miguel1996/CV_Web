const data = {
	data: {
		name: "Miguel Andrade",
		career: "Software Developer",
		spoken_languages: ["Portuguese", "English"],
		skills: ["Git", "MySQL", "HTML5/CSS3", "Javascript/JQuery", "Node.JS", "PHP", "Laravel", "Python", "Django", "C#", "Unity", "Java", "Android Studio"],
		about: ["Hi, I'm Miguel, a Computer Engineering graduate mostly interested in Web-based applications.", "I'm a versatile, determined person, continuously acquiring new knowledge, to evolve both personally and professionally. I'm always eager for a challenge, and I'm never afraid to use the right tools for the job, regardless of my experience with them.", "Currently, I'm working as an Assistant Researcher in ITI/LARSyS, feel free to contact me through the form bellow, or any of my social media."],
		cv_file: "",
		timeline: [
			{
				id: "bachelor",
				title: "Bachelor's",
				date: "15/09/2014",
				description: "Enrolled in Computer Engineering Bachelor's (EQF Level 6), in University of Madeira (UMa), Portugal. Developed skills include Data Structures and Algorithms, Object-Oriented Programming, Relational Databases, Artificial Intelligence, Human-Computer Interaction, etc. Graduated in 04/06/2018."
			},
			{
				id: "union",
				title: "Volunteering",
				date: "21/10/2014",
				description: "Conducted volunteering work in UMa's Student's Union. Assigned functions were student support in the main office HelpDesk, salesclerk in the Academic Stores, assistance for the preparation and execution of cultural events (Fado Concerts, Academic Festivities, etc) and website maintenance."
			},
			{
				id: "internship",
				title: "Web Developer",
				date: "01/08/2018",
				description: "1 month Summer Internship Program, working as a Web Developer, in UMa's Student's Union. Responsabilities included development of the Madeiran Heritage website, and overall web maintenance and support."
			},
			{
				id: "master",
				title: "Master's",
				date: "17/09/2018",
				description: "Enrolled in Computer Engineering Master's (EQF Level 7), in University of Madeira (UMa), Portugal. Developed skills include Network Centered Applications, Service Design, Distributed Systems, Software Architecture/Design, Software Structures for UI, etc."
			},
			{
				id: "thesis",
				title: "Master Thesis",
				date: "16/09/2019",
				description: "Began production of the Master Thesis, in the field of Artificial Reality (Augmented, Virtual and Mixed Reality). The main objective is the development and comparison of similar experiences for all the different branches, and the proposition of a new type, Holographic Reality."
			},
			{
				id: "researcher",
				title: "Assistant Researcher",
				date: "01/01/2020",
				description: "Currently working as an Assistant Researcher in ITI/LARSyS, by producing persuasive Artificial Reality experiences. The main purpose of these experiences is, not only entertain, but also induce pro-environmental behaviours in its users, by drawing attention to current ecological concerns. Responsabilities also include conducting user studies, data processing and producing research publications."
			}
		],

		portfolio: [
			{
				id: "ardome",
				title: "ARDome",
				description: "ARDome is a persuasive interface for inspiring pro-environmental behaviors, by leveraging Augmented Reality technology. This app was built through Unity and ARCore.",
				github: "",
				download: "https://play.google.com/store/apps/details?id=com.tigerwhale.ardome",
				img: "img/dome.JPG"
			},
			{
				id: "easyEvent",
				title: "easyEvent",
				description: "easyEvent is an event scheduling platform on which the user is capable of creating and submiting custom forms. This is a group project from a lecture developed through Laravel and MySQL.",
				github: "https://github.com/miguel1996/easyEvent",
				download: "",
				img: "img/event2.jpg"
			},
			{
				id: "cv",
				title: "Personal Website",
				description: "This very own website was developed as a means to promote what I do best. It's a simple web page powered by a Node.JS server, coupled with Express and EJS.",
				github: "https://github.com/miguel1996/CV_Web",
				download: "",
				img: "img/site.png"
			}
		],
		
		email: "miguel.nodemail@gmail.com",
		linkedin: "https://www.linkedin.com/in/miguel-andrade-9819461bb/",
		github: "https://github.com/miguel1996/"
	}
}

module.exports.data = data;