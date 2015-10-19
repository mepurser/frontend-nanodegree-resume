var bio = {
    'name' : 'Mark Purser',
    'role' : 'Manager, FP&A',
    'contacts' : {
        'email' : 'purser.mark@gmail.com',
        'mobile' : '555-555-5555',
        'location' : 'Oakland'
    },
    'bioPic' : 'images/headshot.jpg',
    'welcomemsg' : 'Welcome to my page!',
    'skills' : [
        'Front-end web development',
        'Full stack web development',
        'Financial forecasting'
    ],
    display : function() {
        var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
        $('#header').prepend(formattedRole);

        var formattedName = HTMLheaderName.replace('%data%', bio.name);
        $('#header').prepend(formattedName);

        var formattedEmail = HTMLemail.replace('%data%', bio.contacts.email);
        var formattedMobile = HTMLmobile.replace('%data%', bio.contacts.mobile);
        var formattedLocation = HTMLlocation.replace('%data%', bio.contacts.location);

        var formattedContact = formattedEmail + formattedMobile + formattedLocation;
        $('#topContacts').append(formattedContact);

        var formattedContact = formattedEmail + formattedMobile + formattedLocation;
        $('#footerContacts').append(formattedContact);

        var pic = HTMLbioPic.replace('%data%', bio.bioPic);
        $('#header').append(pic);

        var formattedWelcome = HTMLwelcomeMsg.replace('%data%', bio.welcomemsg);
        $('#header').append(formattedWelcome);

        $('#header').append(HTMLskillsStart);

        for (skill in bio.skills) {
            var formattedSkills = HTMLskills.replace('%data%',bio.skills[skill]);
            $('#header').append(formattedSkills);
        }
    }
}

var work = {
    'jobs' : [
        {
            'title' : 'Manager, FP&A',
            'emp' : 'NRG Home Solar',
            'dates' : 'Oct. 2014-Present',
            'location' : 'San Francisco, CA',
            'description' : 'Forecast EBITDA and FCF for Home Solar business'
        },
        {
            'title' : 'Senior Analyst',
            'emp' : 'NRG Energy',
            'dates' : 'Oct. 2012-Sept. 2014',
            'location' : 'Princeton, NJ',
            'description' : 'Simulate long-term dispatch of wholesale power assets ' +
                'to forecast gross margin'
        }
    ],
    display : function() {
        for (job in work.jobs) {
            // create new div for work experience
            $('#workExperience').append(HTMLworkStart);
            // concat employer and title
            var formattedEmployer = HTMLworkEmployer.replace(
                '%data%', work.jobs[job].emp);
            var formattedTitle = HTMLworkTitle.replace(
                '%data%', work.jobs[job].title);
            var formattedEmployerTitle = 
                formattedEmployer + formattedTitle;
            $('.work-entry:last').append(
                formattedEmployerTitle);

            var formattedDates = HTMLworkDates.replace(
                '%data%', work.jobs[job].dates);
            $('.work-entry:last').append(
                formattedDates);

            var formattedDescription = HTMLworkDescription.replace(
                '%data%', work.jobs[job].description);
            $('.work-entry:last').append(
                formattedDescription);  
        };
    }   
};

var projects = {
    'projects' : [
        {
        'title' : 'Movie Trailer Website',
        'dates' : 'October 2015',
        'description' : 'Website that plays movie trailers.',
        'images' : 'images/project1.jpg'
        },
        {
        'title' : 'Portfolio Page',
        'dates' : 'October 2015',
        'description' : 'Collection of Udacity projects.',
        'images' : 'images/project2.jpg'
        }
    ],
    display : function() {
        for (project in projects.projects) {
            $('#projects').append(HTMLprojectStart);

            var formattedTitle = HTMLprojectTitle.replace(
                '%data%', projects.projects[project].title);
            $('.project-entry:last').append(formattedTitle);

            var formattedDates = HTMLprojectDates.replace(
            '%data%', projects.projects[project].dates);
            $('.project-entry:last').append(formattedDates);

            var formattedDesc = HTMLprojectDescription.replace(
            '%data%', projects.projects[project].description);
            $('.project-entry:last').append(formattedDesc);

            var formattedImages = HTMLprojectImage.replace(
            '%data%', projects.projects[project].images);
            $('.project-entry:last').append(formattedImages);
        }
    }
}
 
var ed = {
    'schools' : [
        {
            'name' : 'Wesleyan University',
            'location' : 'Middletown, CT',
            'degree' : 'BA',
            'majors' : ['Math-Econ'],
            'dates' : 'Aug. 2004-May 2008',
            'url' : 'www.wesleyan.edu'
        }
    ],
    'onlnDegs' : [
        {
            'name' : 'Front-End Web Developer Nanodegree',
            'school' : 'Udacity',
            'dates' : 'Oct. 2015',
            'url' : 'www.udacity.com/course/front-end-web-developer-nanodegree--nd001'
        },
        {
            'name' : 'Full Stack Web Developer Nanodegree',
            'school' : 'Udacity',
            'dates' : 'Oct. 2015',
            'url' : 'www.udacity.com/course/full-stack-web-developer-nanodegree--nd004'
        }
    ],
    display : function () {
        // loop through college ed first
        for (school in ed.schools) {
            $('#education').append(HTMLschoolStart);

            var formattedLocation = HTMLschoolLocation.replace(
                '%data%', ed.schools[school].location);
            $('.education-entry:last').append(formattedLocation);

            var formattedName = HTMLschoolName.replace(
                '%data%', ed.schools[school].name);
            var formattedName = formattedName.replace(
                '#', 'http://' + ed.schools[school].url);

            var formattedDegree = HTMLschoolDegree.replace(
                '%data%', ed.schools[school].degree);

            var formattedNameDegree = formattedName + formattedDegree
            $('.education-entry:last').append(formattedNameDegree);

            var formattedDates = HTMLschoolDates.replace(
                '%data%', ed.schools[school].dates);
            $('.education-entry:last').append(formattedDates);

            var formattedMajor = HTMLschoolMajor.replace(
                '%data%', ed.schools[school].majors);
            $('.education-entry:last').append(formattedMajor);
        }
        
        // loop through online ed second
        $('#education').append(HTMLonlineClasses);
        
        for (online in ed.onlnDegs) {
            $('#education').append(HTMLschoolStart);

            var formattedTitle = HTMLonlineTitle.replace(
                '%data%', ed.onlnDegs[online].name);
            
            var formattedTitle = formattedTitle.replace(
                '#', 'http://' + ed.onlnDegs[online].url);
            
            var formattedSchool = HTMLonlineSchool.replace(
                '%data%', ed.onlnDegs[online].school);

            var formattedTitleSchool = formattedTitle + formattedSchool
            $('.education-entry:last').append(formattedTitleSchool);

            var formattedDates = HTMLschoolDates.replace(
                '%data%', ed.onlnDegs[online].dates);
            $('.education-entry:last').append(formattedDates);

            var formattedURL = HTMLonlineURL.replace(
                '%data%', ed.onlnDegs[online].url);
            var formattedURL =formattedURL.replace(
                '#', 'http://' + ed.onlnDegs[online].url);
            $('.education-entry:last').append(formattedURL);
        }
    }
}

bio.display();
work.display();
projects.display();
ed.display();

$('#mapDiv').append(googleMap);