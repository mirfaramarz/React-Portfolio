export default
    {
        //(Please Do Not Remove The comma(,) after every variable)
        //Change The Website Template
        name :'React Test Project.',
        headerTagline: [//Line 1 For Header
                        'Hi 👋 I am a test project',
    ],
        //Contact Email
        contactEmail:'John@Doe.com',
        // Add Your About Text Here
        abouttext: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        aboutImage:'/images/about-image.jpg',
       //Change This To Hide The Image of About Section (True Or False)
       ShowAboutImage:true,//true or false (Change Here)
       //  Projects  
       projects:[
           {
            id: 1,
            title:'Project One', 
             service:'React', 
            //Project Image - Add Your Project Image Here
             imageSrc:"/images/reactjs.png",
             //Project URL
             url:'#'
            },
            {
                id: 2,
                title: 'Project Two',
                service: 'Python Development',
                imageSrc: "/images/python.jpeg",
                url: '#'
            },
            { 
                id: 3,
                title: 'Project Three',
                service: 'Django',
                imageSrc: "/images/django.jpeg",
                url: '#'
            },
            {
                id: 4,
                title: 'Project Four',
                service: 'Web Dev',
                imageSrc: "/images/web.jpeg",
                url: '#'
           }
        ],
        social: [
            // Add Or Remove The Link Accordingly
            {   name:'Github',
                url:'#'},
            {
                name: 'Behance',
                url: '#'
            },
            {
                name: 'Dribbble',
                url: '#'
            },
            {
                name: 'Instagram',
                url: '#'
            }

        ]
    }