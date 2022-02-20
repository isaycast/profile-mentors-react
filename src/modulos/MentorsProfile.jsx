import React from 'react'
import '../Css/mentorsProfile.css'

const MentorsProfileModule = () =>{
    const imageAbout = require.context('../global/assets/images', true);


    return (    

        <div class="container-xxl">
        <main class="pt-5 mt-5">
        <div class="row">
            <div class="col-lg-4 ">
                <div class="card text-center sticky-md-top profile-card ">
                    <div class="card-header bg-white">
                        <h1 class="mt-2">Merida Valiente</h1>
                    </div>
                    <div class="card-img mt-3">
                        <img src={imageAbout('./about-us/avatar.png')} class="rounded-circle w-50" alt="..." />
                    </div>
                    <div class="card-body">
                        <div class="d-flex justify-content-center">
                            <i class="fa-solid fa-meteor me-md-2"></i>
                            <p> Matemáticas</p>
                        </div>
                        <div class="d-flex justify-content-center my-3 ">
                            <button className="btn btn-sm rounded-pill me-md-2" type="submit">Presencial</button>
                            <button className="btn btn btn-sm rounded-pill me-md-2" type="submit">Online</button>
                        </div>
                        <div>
                            <button class="btn btn-outline-success rounded-pill me-1" type="submit">Seguir
                            </button>
                            <button type="button" class="btn btn-sm rounded-pill me-md-2">
                                <i class="far fa-heart profile-icons icons-size"></i>
                            </button>
                            <button type="button" class="btn btn-sm rounded-pill me-md-2">
                                <i class="fas fa-share profile-icons icons-size"></i>
                            </button>
                            <button class="btn dropdown-toggle btn-sm rounded-pill" type="button"
                                id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="fas fa-ellipsis-h profile-icons icons-size"></i>
                            </button>
                            <ul id="dropdown" class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">Reportar</a></li>
                            </ul>
                        </div>      
                        <div class="d-flex justify-content-start mt-3">
                            <i class="fas fa-map-marked-alt icons-size me-md-2"></i>
                            <p class="text-start">Guadalajara, Jalisco</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p>Duración de la clase:</p>
                            <p>1 hr</p>
                        </div>
                        <div class="d-flex justify-content-between">
                            <p>Costo por hora:</p>
                            <p>$200</p>
                        </div>
                    </div>


                </div>
            </div>


            <div class="col-lg-8 ">
                <div class="card profile-card">
                    <div class="card-header text-center mt-3 bg-white">
                    <div class="video-container pd-2">
                        <div class="video ratio ratio-16x9">
                            <iframe class="container-xxl-fluid" width=" 660" height="415"
                                src="https://www.youtube.com/embed/5p2hwlq341Y" title="YouTube video player" frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                            </iframe>
                        </div>
                    </div>
                        <button className="btn btn-outline-success rounded-pill my-3" type="submit" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBotton1"
                            aria-controls="offcanvasBotton"> Reserva tu clase
                        </button>
                    </div>

                    <div class="card-body" id="drop-description">
                        <div class="accordion accordion-flush" id="accordionFlushExample">
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseOne" aria-expanded="false"
                                        aria-controls="flush-collapseOne">
                                        Sobre mí
                                    </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse"
                                    aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Lorem ipsum, dolor sit amet consectetur adipisicing
                                        elit. Adipisci inventore amet et facere voluptate eius, est corporis ratione
                                        libero possimus provident, deserunt rerum voluptatem. Consequuntur perspiciatis
                                        blanditiis cupiditate, dolores facere accusamus ex animi omnis eos obcaecati
                                        vitae recusandae esse, unde praesentium voluptas minima perferendis odio nobis
                                        ipsum facilis est expedita alias! Porro molestiae voluptates cumque excepturi
                                        tempora quia odio accusantium, reiciendis dicta tempore animi impedit ducimus a
                                        cupiditate neque quos qui adipisci aliquam ad consectetur, assumenda iure. Illo
                                        suscipit harum debitis voluptate illum est aspernatur asperiores eveniet rerum,
                                        earum porro aliquid eos corrupti repellat commodi fugiat voluptates deleniti
                                        voluptatibus tenetur dolorem sit inventore autem, quibusdam nostrum. Ea minus
                                        voluptatibus ducimus.
                                    </div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingTwo">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseTwo" aria-expanded="false"
                                        aria-controls="flush-collapseTwo">
                                        Educación
                                    </button>
                                </h2>
                                <div id="flush-collapseTwo" class="accordion-collapse collapse"
                                    aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Lorem ipsum dolor sit amet consectetur, adipisicing
                                        elit. Beatae, asperiores voluptas numquam ex amet dignissimos vero ipsam
                                        deleniti repudiandae architecto tempore consequatur fuga eum dolor ipsa nulla
                                        nam hic, quisquam recusandae quaerat quibusdam! Vero explicabo veniam itaque
                                        enim temporibus ea fugit, similique voluptatibus quis veritatis aliquam quod
                                        nobis quibusdam, alias unde optio doloremque, reiciendis soluta delectus natus
                                        harum nihil. Magni.</div>
                                </div>
                            </div>
                            <div class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingThree">
                                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                        data-bs-target="#flush-collapseThree" aria-expanded="false"
                                        aria-controls="flush-collapseThree">
                                        Datos curiosos
                                    </button>
                                </h2>
                                <div id="flush-collapseThree" class="accordion-collapse collapse"
                                    aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                                    <div class="accordion-body">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                        Minima praesentium officiis excepturi quod nostrum similique veniam molestiae
                                        ducimus eos ab in expedita quis, optio quaerat et, qui ex, necessitatibus iusto.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id='calendar'></div>
                        <div class="card-footer">
                            <h2 class="mb-3">Comentarios</h2>
                            <div class="row">
                                <div class="col-3">
                                <img src={imageAbout('./about-us/avatar.png')} class="rounded-circle" style={{width:"100px"}}  alt="..." />
                                </div>
                                <div class="col-6">
                                    <h2 class="titulo-comentario">Harry</h2>
                                    <p class="cometario"><small>Lorem ipsum, dolor sit amet consectetur adipisicing
                                            elit. Est, nostrum autem voluptates a quia architecto omnis atque quos sunt
                                            quas vel illo, voluptas hic, molestiae et accusamus culpa fugiat
                                            aliquid.</small></p>
                                </div>
                                <div class="col-3 text-warning">
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                    <i class="fas fa-star"></i>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-3">
                                    <img src={imageAbout('./about-us/avatar.png')} class="rounded-circle" style={{width:"100px"}}  alt="..." />
                                </div>
                                <div class="col-6">
                                    <h2 class="titulo-comentario">Draco</h2>
                                    <p class="cometario"><small>Pesimo servicio, tuvo la osadia de hablarme como si
                                            fuera su igual, es un sangre sucia inmunda.
                                            Mi padre se enterara de esto!</small></p>
                                </div>
                                <div class="col-3 text-warning">
                                    <i class="fas fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </main>
    </div>
    );
}

export  {MentorsProfileModule};