// this file is to toggle locations / shows practises on the page: dietisten
var d = [
    {
        name: 'Almadis',
        website: 'http://www.almadis.nl/',
        tel: '026-3790567',
        loc: ['Arnhem']
    },
    {
        name: 'Sylvia van Daalen',
        website: 'http://www.dietistenpraktijksylviavandaalen.nl/',
        tel: "026-4434722",
        loc: ['Arnhem']
    },
    {
        name: 'Di&euml;tist Ronald',
        website: 'http://dietistronald.nl/',
        tel: '06-51004363',
        loc: ['Arnhem']
    },
    {
        name: 'Linda van den Breeden',
        website: '#',
        tel: '026-3847400',
        loc: ['Arnhem']
    },
    {
        name: 'Vitasens',
        website: 'http://www.vitasens.nl/',
        tel: '026-3513514',
        loc: ['Arnhem', 'Doorwerth']
    },
    {
        name: 'Dietistenpraktijknewlife',
        website: 'http://www.dietistenpraktijknewlife.nl/',
        tel: '06-18094249',
        loc: ['Arnhem', 'Huissen']
    },
    {
        name: 'Schiphof en Kruiper',
        website: 'http://www.schiphofkruiper.nl/praktijk1.html',
        tel: '026-8700126',
        loc: ['Arnhem']
    },
    {
        name: 'Carin Winters',
        website: 'http://www.dietistenpraktijklingewaard.nl/',
        tel: '0481-355800',
        loc: ['Bemmel']
    },
    {
        name: 'Nutri-Salud',
        website: 'http://www.nutri-salud.nl/',
        tel: '06-34434415',
        loc: ['Bemmel']
    },
    {
        name: 'Voedingendieetplus',
        website: 'http://www.voedingendieetplus.nl/',
        tel: '06-51206041',
        loc: ['Didam', 'Zevenaar']
    },
    {
        name: 'Voedingenzo',
        website: 'http://www.voedingenzo.nl/',
        tel: '06-41315321',
        loc: ['Dieren']
    },
    {
        name: 'De Juiste Lijn',
        website: 'http://www.dejuistelijn.nl/',
        tel: '06-44511455',
        loc: ['Dieren', 'Giesbeek', 'Rheden']
    },
    {
        name: 'Hennie van der Lely',
        website: 'http://www.dietisteoosterbeek.nl/',
        tel: '026-3336154',
        loc: ['Doorwerth', 'Oosterbeek']
    },
    {
        name: 'De Linge',
        website: 'http://www.lingevoeding.nl/',
        tel: '0481-374546',
        loc: ['Driel', 'Elst', 'Heteren', 'Opheusden']
    },
    {
        name: 'Dietist-langedijk',
        website: 'http://www.dietist-langedijk.nl/',
        tel: '0316-285844',
        loc: ['Duiven', 'Zevenaar']
    },
    {
        name: 'Rianne Mulder',
        website: 'http://www.dietiste-westervoort-arnhem-apeldoorn.nl/',
        tel: '(026) 327 38 52',
        loc: ['Duiven', 'Westervoort']
    },
    {
        name: 'Aniek Basten',
        website: 'http://www.ab-dietist.nl/site/index.php',
        tel: '(026) 327 38 52',
        loc: ['Gendt']
    },
    {
        name: 'Eetstijl',
        website: 'http://www.eetstijl.nl/',
        tel: '026-3390379',
        loc: ['Herveld', 'Heteren', 'Oosterbeek']
    },
    {
        name: 'Becks en Havers',
        website: 'http://www.dietistenpraktijk-beckshavers.nl/',
        tel: '0344-621459',
        loc: ['Herwen', 'Tolkamer']
    },
    {
        name: 'Hartenvijf',
        website: 'http://www.hartenvijf.nl/',
        tel: '026-3116952',
        loc: ['Huissen', 'Westervoort']
    },
    {
        name: 'Linda Brouwer',
        website: 'http://www.voedingmetvisie.nl/',
        tel: '06-10781692',
        loc: ['Velp']
    },
    {
        name: 'Igia',
        website: 'http://www.dietistenpraktijk-igia.nl/',
        tel: '06-40193169',
        loc: ['Zevenaar']
    }
];


$(document).ready(function(){
    // apples green or not
    $('.flexboxLocations button').on('click', function() {
        $('.flexboxLocations button').removeClass('green verygreen');
        $(this).addClass('verygreen');
    });
    $('.flexboxLocations button').hover(function() {
        $(this).toggleClass('green');
    });
    // show results on click
    $('.flexboxLocations button').on('click', function() {
        $('.flexboxLocations button').removeClass('green verygreen');
        $('.modal-body').empty();
        var pick = this.innerHTML;
        console.log(pick);
        d.forEach(function(x){
            if(x.loc.indexOf(pick) !== -1){
                console.log(x.name);
                $('.modal-body').append('<a target="_blank" href="' + x.website + '"><button class="result">' + x.name + '</button></a>')
            }
        });
    });

});

