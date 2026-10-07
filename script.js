/* ==========================================
   CANCIONES
========================================== */

const songs = [

    {
        name: "No One Noticed",
        artist: "The Marías",
        time: "3:56",
        audio: "audio/no-one-noticed.mp3",
        art: "https://www.azlyrics.com/images/albums/128/c4dcb3272c370a05debc88da0185df63.jpg"
    },

    {
        name: "Hush",
        artist: "The Marías",
        time: "3:00",
        audio: "audio/hush.mp3",
        art: "https://th.bing.com/th/id/OIP.pfRxs6uHwguQlI9c_bcDygAAAA?w=161&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
    },

    {
        name: "Bags",
        artist: "Clairo",
        time: "4:20",
        audio: "audio/bags.mp3",
        art: "https://th.bing.com/th/id/OIP.Bk7RDOGZF_lppt30GsY_4AHaHa?w=129&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
    },

    {
        name: "Labios Rotos",
        artist: "Zoé",
        time: "3:26",
        audio: "audio/labios-rotos.mp3",
        art: "https://th.bing.com/th/id/OIP.H67jAzpcGCUNl3gryMelzgHaHa?w=197&h=197&c=7&r=0&o=7&pid=1.7&rm=3"
    },

    {
        name: "Dark Red",
        artist: "Steve Lacy",
        time: "2:53",
        audio: "audio/dark-red.mp3",
        art: "https://th.bing.com/th/id/OIP.pdN0XZ0zorgzaAPLJQo7XgHaHa?w=184&h=184&c=7&r=0&o=7&pid=1.7&rm=3"
    },

    {
        name: "MUBI",
        artist: "NSQK",
        time: "3:18",
        audio: "audio/mubi.mp3",
        art: "https://th.bing.com/th/id/OIP.Gxry9lnPA73ds8g8DJbqxQHaHa?w=187&h=187&c=7&r=0&o=7&pid=1.7&rm=3"
    },

    {
        name: "Amor Viejo",
        artist: "Kevin Kaarl",
        time: "3:25",
        audio: "audio/amor-viejo.mp3",
        art: "https://th.bing.com/th/id/OIP.yaddMsXnbR8q8oMZ4ebjJQHaHa?w=175&h=180&c=7&r=0&o=7&pid=1.7&rm=3"
    },

    {
        name: "Brillas",
        artist: "León Larregui",
        time: "4:13",
        audio: "audio/brillas.mp3",
        art: "https://th.bing.com/th/id/OIP.J2VjTtEtMbE-eRc9lQFOzAAAAA?w=143&h=176&c=7&r=0&o=7&pid=1.7&rm=3"
    }

];


let current = 0;

const audio =
    document.getElementById("audio");


/* ==========================================
   CREAR LISTAS
========================================== */

function render(){

    /*
     * LISTA PRINCIPAL
     */

    document.getElementById("featured").innerHTML =

        songs.slice(0,4).map((s,i)=>`

            <div
                class="song"
                onclick="selectSong(${i})">

                <div class="cover">

                    <img
                        src="${s.art}"
                        alt="Portada de ${s.name}">

                </div>

                <div class="song-info">

                    <b>
                        ${s.name}
                    </b>

                    <span>
                        ${s.artist}
                    </span>

                </div>

                <span class="song-time">
                    ${s.time}
                </span>

            </div>

        `).join("");


    /*
     * LISTA DEL IPOD HORIZONTAL
     */

    document.getElementById("wideList").innerHTML =

        songs.slice(0,6).map((s,i)=>`

            <div
                class="wide-row ${i === current ? "active" : ""}"
                onclick="selectSong(${i})">

                <span class="dot"></span>

                <span>
                    ${s.name}
                </span>

                <span>
                    ${s.artist}
                </span>

            </div>

        `).join("");


    /*
     * NOVEDADES
     */

    document.getElementById("newCards").innerHTML =

        songs.slice(2,6).map((s,i)=>`

            <div
                class="card"
                onclick="selectSong(${i + 2})">

                <div class="card-art">

                    <img
                        src="${s.art}"
                        alt="Portada de ${s.name}">

                </div>

                <h3>
                    ${s.name}
                </h3>

                <p>
                    ${s.artist}
                </p>

            </div>

        `).join("");


    /*
     * MI MÚSICA
     */

    document.getElementById("recentList").innerHTML =

        songs.slice(0,5).map((s,i)=>`

            <div
                class="music-track"
                onclick="selectSong(${i})">

                <div class="cover">

                    <img
                        src="${s.art}"
                        alt="Portada de ${s.name}">

                </div>

                <div>

                    <b>
                        ${s.name}
                    </b>

                    <small>
                        ${s.artist}
                    </small>

                </div>

                <small>
                    ${s.time}
                </small>

            </div>

        `).join("");

}


/* ==========================================
   SELECCIONAR CANCIÓN
========================================== */

async function selectSong(
    index,
    autoplay = true
){

    current =
        (index + songs.length)
        % songs.length;


    const song =
        songs[current];


    /*
     * INFORMACIÓN DEL REPRODUCTOR
     */

    document.getElementById(
        "currentSong"
    ).textContent =
        song.name;


    document.getElementById(
        "currentArtist"
    ).textContent =
        song.artist;


    document.getElementById(
        "playerSong"
    ).textContent =
        song.name;


    document.getElementById(
        "playerArtist"
    ).textContent =
        song.artist;


    document.getElementById(
        "wideSong"
    ).textContent =
        song.name;


    /*
     * IMAGEN DE LA CANCIÓN
     */

    document.getElementById(
        "mainArtwork"
    ).src =
        song.art;


    document.getElementById(
        "wideArtwork"
    ).src =
        song.art;


    /*
     * AUDIO ESPECÍFICO
     */

    audio.pause();

    audio.currentTime = 0;

    audio.src =
        song.audio;

    audio.load();


    /*
     * ACTUALIZAR TEXTO
     */

    document.getElementById(
        "audioStatus"
    ).textContent =
        "Seleccionada: " + song.name;


    document.getElementById(
        "playButton"
    ).textContent =
        "▶";


    document.getElementById(
        "screenPlay"
    ).textContent =
        "▶";


    /*
     * ACTUALIZAR LISTAS
     */

    render();


    /*
     * REPRODUCIR
     */

    if(autoplay){

        try{

            await audio.play();

            setPlaying(true);

            document.getElementById(
                "audioStatus"
            ).textContent =
                "Reproduciendo: " + song.name;

        }catch(error){

            console.error(
                "No se pudo reproducir:",
                error
            );

            document.getElementById(
                "audioStatus"
            ).textContent =
                "No se pudo reproducir el audio.";

        }

    }


    updateProgress();

}


/* ==========================================
   PLAY / PAUSA
========================================== */

function setPlaying(value){

    document.getElementById(
        "playButton"
    ).textContent =
        value ? "Ⅱ" : "▶";


    document.getElementById(
        "screenPlay"
    ).textContent =
        value ? "Ⅱ" : "▶";

}


function toggleAudio(){

    /*
     * Si no hay audio cargado,
     * cargar la canción actual.
     */

    if(
        !audio.src ||
        audio.src === window.location.href
    ){

        selectSong(
            current,
            true
        );

        return;

    }


    if(audio.paused){

        audio
            .play()
            .then(()=>{

                setPlaying(true);

            })
            .catch(error=>{

                console.error(
                    "Error reproduciendo:",
                    error
                );

            });

    }else{

        audio.pause();

        setPlaying(false);

    }

}


function nextSong(){

    selectSong(
        current + 1,
        true
    );

}


function prevSong(){

    selectSong(
        current - 1,
        true
    );

}


/* ==========================================
   PROGRESO
========================================== */

function updateProgress(){

    const percent =

        audio.duration

        ?

        (
            audio.currentTime /
            audio.duration
        ) * 100

        :

        0;


    document.getElementById(
        "progressBar"
    ).style.width =
        percent + "%";


    document.getElementById(
        "wideProgress"
    ).style.width =
        percent + "%";

}


audio.addEventListener(
    "timeupdate",
    updateProgress
);


audio.addEventListener(
    "loadedmetadata",
    updateProgress
);


audio.addEventListener(
    "play",
    ()=>{

        setPlaying(true);

    }
);


audio.addEventListener(
    "pause",
    ()=>{

        setPlaying(false);

    }
);


/*
 * CUANDO TERMINA UNA CANCIÓN,
 * PASA AUTOMÁTICAMENTE A LA SIGUIENTE.
 */

audio.addEventListener(
    "ended",
    ()=>{

        nextSong();

    }
);


/*
 * SI EL ARCHIVO NO EXISTE
 */

audio.addEventListener(
    "error",
    ()=>{

        document.getElementById(
            "audioStatus"
        ).textContent =
            "No se encontró el archivo de audio.";

        setPlaying(false);

    }
);


/* ==========================================
   BOTÓN MENU
========================================== */

function goHome(){

    document
        .getElementById("inicio")
        .scrollIntoView({

            behavior:"smooth"

        });

}


/* ==========================================
   COLORES DEL IPOD
========================================== */

const colors = {

    white:[
        "#e8e8e2",
        "#d1d1cc",
        "#deded8"
    ],

    black:[
        "#292929",
        "#111111",
        "#3a3a3a"
    ],

    pink:[
        "#dfa0b4",
        "#c57e96",
        "#e9b7c7"
    ],

    blue:[
        "#89a4c1",
        "#6888a8",
        "#a8bdd1"
    ],

    purple:[
        "#a996bd",
        "#8d78a5",
        "#c1b3d0"
    ],

    green:[
        "#9caf8f",
        "#7e9671",
        "#b8c7ae"
    ]

};


function changeColor(name){

    const color =
        colors[name];


    document.documentElement
        .style
        .setProperty(
            "--ipod",
            color[0]
        );


    document.documentElement
        .style
        .setProperty(
            "--wheel",
            color[2]
        );


    localStorage.setItem(
        "vybraColor",
        name
    );


    document
        .querySelectorAll(
            ".color-btn"
        )
        .forEach(button=>{

            button.classList.toggle(
                "active",
                button.dataset.color === name
            );

        });

}


document
    .querySelectorAll(".color-btn")
    .forEach(button=>{

        button.onclick = ()=>{

            changeColor(
                button.dataset.color
            );

        };

    });


const savedColor =
    localStorage.getItem(
        "vybraColor"
    ) || "white";


changeColor(savedColor);


/* ==========================================
   NAVBAR ACTIVA
========================================== */

const links =
    document.querySelectorAll(
        "nav a"
    );


const sections =
    document.querySelectorAll(
        "section[id]"
    );


window.addEventListener(
    "scroll",
    ()=>{

        let active =
            "inicio";


        sections.forEach(section=>{

            if(
                window.scrollY >=
                section.offsetTop - 130
            ){

                active =
                    section.id;

            }

        });


        links.forEach(link=>{

            link.classList.toggle(

                "active",

                link.getAttribute(
                    "href"
                ) ===
                "#" + active

            );

        });

    }
);


/* ==========================================
   INICIAR
========================================== */

render();

selectSong(
    0,
    false
);