let personName : string = '';
personName = prompt('what is your name') || ( '' )

// Check if personName is null or empty first
if (personName != null && personName != ' ') {
    // Then convert it to different cases
    let lowercase : string = personName.toLowerCase();
    let uppercase : string = personName.toUpperCase()
    let titlecase : string = personName.split(' ').map( word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');

    alert (` hello ${personName}, here your name in :
        lowercase: ${lowercase}
        uppercase: ${uppercase}
        titlecase: ${titlecase}
    `
    )
} else { alert ('fill your name please !') }