function time() {
    //India
    let a = new Date();
    let India = a.toLocaleString('en-us', {
        timeZone: 'Asia/Kolkata'
    });
    let America = a.toLocaleString('en-us', {
        timeZone: 'America/New_york'
    });
    let Dubai = a.toLocaleString('en-us', {
        timeZone: 'Asia/Dubai'
    });
    let Australia = a.toLocaleString('en-us', {
        timeZone: 'Australia/Sydney'
    });
    // console.log(India);
    document.getElementById('timeZoneIndia').innerText = 'India : ' + India;
    // document.getElementById('timeZoneIndia').style.color = 'white';
    document.getElementById('timeZoneIndia').style.marginLeft = '20px'

    //america timezone

    document.getElementById('timeZoneAmerica').innerText = 'America : ' + America;
    // document.getElementById('timeZoneAmerica').style.color = 'white';
    document.getElementById('timeZoneAmerica').style.marginLeft = '20px';

    //Dubai Timezone

    document.getElementById('timeZoneDubai').innerText = 'Dubai : ' + Dubai;
    // document.getElementById('timeZoneDubai').style.color = 'white';
    document.getElementById('timeZoneDubai').style.marginLeft = '20px';

    //Australia timezone


    document.getElementById('timeZoneAustralia').innerText = 'Australia : ' + Australia;
    // document.getElementById('timeZoneAustralia').style.color = 'white';
    document.getElementById('timeZoneAustralia').style.marginLeft = '20px';
}
time();
setInterval(time, 1000)
