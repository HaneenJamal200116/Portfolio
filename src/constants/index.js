export const navLinks = [
    {
      id: 1,
      name: 'Home',
      href: '#home',
    },
    {
      id: 2,
      name: 'About',
      href: '#about',
    },
    {
      id: 3,
      name: 'Experience',
      href: '#experience',
    },
    {
      id: 4,
      name: 'Projects',
      href: '#projects',
    },
  ];
  
 
  
  export const myProjects = [
    {
      title: 'MangaGo - Your Manga Paradise',
      desc: 'MangaGo is a manga and anime website that offers a vast collection of manga and anime titles to its users. It provides a user-friendly interface for searching, browsing, and selling manga.',
      subdesc:
        ' Built using Bootstrap CSS, HTML, and JavaScript, customized from a pre-built template with interactive features and optimized for a seamless user experience on any device. ',
      href: 'https://sunny-haupia-61c9e3.netlify.app/',
      texture: '/textures/project/manga.mp4',
      logo: '/assets/logo/logo1.png',
      logoStyle: {
        backgroundColor: '#13202F',
        border: '0.2px solid #36201D',
        boxShadow: '0px 0px 60px 0px #AA3C304D',
      },
      spotlight: '/assets/spotlight1.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/bootstrap-logo.svg',
        },
        
      ],
    },
    {
      title: 'Paw Paw Vet - WE ARE WAITING FOR YOU!',
      desc: 'At Paw Paw Pet, we are not just a veterinary clinic; we are a compassionate community dedicated to the well-being of your cherished pets. Our mission is simple yet profound: to provide exceptional care, one paw at a time.',
      subdesc:
        'Responsive web application, built with pure HTML, CSS, and JavaScript. ',
      href: 'https://clevermind-pob.vercel.app/',
      texture: '/textures/project/vet.mp4',
      logo: '/assets/logo/logo2.png',
      logoStyle: {
        backgroundColor: 'lightgrey',
        border: '0.2px solid #17293E',
        boxShadow: '0px 0px 60px 0px #2F6DB54D',
      },
      spotlight: '/assets/spotlight2.png',
      tags: [
       
      ],
    },
    {
      title: 'Task Manager',
      desc: `Task Manager is a web application that allows users to manage their tasks efficiently. It provides a user-friendly interface for creating, updating, and deleting tasks.`,
      subdesc:
        'With a focus on efficiency, built with React.js, TailwindCSS, Node.js, and MongoDB. href ',
      href: 'https://task-manager-lti6.vercel.app',
      texture: '/textures/project/task.mp4',
      logo: '/assets/logo/logo3.svg',
      logoStyle: {
        backgroundColor: 'white',
        border: '0.2px solid rgba(208, 213, 221, 1)',
        boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
      },
      spotlight: '/assets/spotlight3.png',
      tags: [
        {
          id: 1,
          name: 'React.js',
          path: '/assets/react.svg',
        },
        {
          id: 2,
          name: 'TailwindCSS',
          path: 'assets/tailwindcss.png',
        },
        {
          id: 3,
          name: 'Nodejs',
          path: '/assets/node-js.svg',
        },
        {
          id: 4,
          name: 'MongoDB',
          path: '/assets/mongodb.svg',
        },
      ],
    },
    
  ];
  
  export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
      deskScale: isSmall ? 0.045 : isMobile ? 0.06 : 0.065,
      deskPosition:isSmall ?[.5, -5, 5.47] : isMobile ? [.5, -6.5, 5.5] : [0.25, -5.5, 0],
      
    };
  };
  
  export const workExperiences = [
    {
      id: 1,
      name: 'Orange Fablab',
      pos: 'Trainee',
      duration: '2024',
      title: "Orange FabLab is a creative workspace powered by Orange, offering tools and resources for innovation, prototyping, and learning. It supports individuals in exploring 3D printing, laser cutting, and electronics to bring their ideas to life.",
      icon: '/assets/orange.png',
      animation: 'salute',
    },
    {
      id: 2,
      name: 'Manara Tech',
      pos: 'Intern',
      duration: '2023 - Current',
      title: "Manara is a career accelerator that connects top tech talent from the Middle East and North Africa with global opportunities. It provides intensive training, mentorship from industry leaders, and tailored career support to help participants excel in software engineering roles at leading tech companies.",
      icon: '/assets/manara.png',
      animation: 'clapping',
    },
    {
      id: 3,
      name: 'Clever Mind POB',
      pos: 'Full Stack Web Developer Intern',
      duration: '2023 - 2024',
      title: "Clevermind is a tech company specializing in innovative web and mobile app development, delivering custom, scalable solutions for businesses.",
      icon: '/assets/clevermind.png',
      animation: 'salute',
    },
  ];