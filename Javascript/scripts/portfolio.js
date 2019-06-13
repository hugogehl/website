// Menu

const buttons = document.querySelectorAll('[data-filter]');
const categories = document.querySelectorAll('[data-cat]');

buttons.forEach(function (button) {
  button.addEventListener('click', function () {
    const cat = button.dataset.filter;

    categories.forEach(function (category) {
      category.classList.add('is-hidden');

      if (category.dataset.cat.includes(cat) || cat === '*') {
        category.classList.remove('is-hidden');
      }
    });
  });
});

//Image fond over

var bg = document.querySelector('.bg');

document.getElementById("diabete").onmouseover = function () {diabete();};
function diabete() {
  bg.style.backgroundImage = "url()";
}

document.getElementById("artoop").onmouseover = function () {artoop();};
function artoop() {
  bg.style.backgroundImage = "url()";
}

document.getElementById("etoiles_terrestre").onmouseover = function () {etoiles_terrestre();};
function etoiles_terrestre() {
  bg.style.backgroundImage = "url(https://hugogehl.github.io/website/images/etoiles_1.jpg)";
}

document.getElementById("cira").onmouseover = function () {cira();};
function cira() {
  bg.style.backgroundImage = "url(https://hugogehl.github.io/website/images/cira_9.jpg)";
}

document.getElementById("workshop").onmouseover = function () {workshop();};
function workshop() {
  bg.style.backgroundImage = "url()";
}

document.getElementById("fanzine").onmouseover = function () {fanzine();};
function fanzine() {
  bg.style.backgroundImage = "url()";
}

document.getElementById("flux").onmouseover = function () {flux();};
function flux() {
  bg.style.backgroundImage = "url()";
}

document.getElementById("worlds_cocktails").onmouseover = function () {worlds_cocktails();};
function worlds_cocktails() {
  bg.style.backgroundImage = "url(https://hugogehl.github.io/website/images/Worlds_cocktail_1.JPG)";
}

document.getElementById("pop_icons").onmouseover = function () {pop_icons();};
function pop_icons() {
  bg.style.backgroundImage = "url(https://hugogehl.github.io/website/images/pop_1.jpg)";
}

document.getElementById("tdf").onmouseover = function () {tdf();};
function tdf() {
  bg.style.backgroundImage = "url()";
}

document.getElementById("licht_mehr_licht").onmouseover = function () {licht_mehr_licht();};
function licht_mehr_licht() {
  bg.style.backgroundImage = "url(https://hugogehl.github.io/website/images/bd_1.jpg)";
}

document.getElementById("serigraphies").onmouseover = function () {serigraphies();};
function serigraphies() {
  bg.style.backgroundImage = "url()";
}

document.getElementById("specimen_typo").onmouseover = function () {specimen_typo();};
function specimen_typo() {
  bg.style.backgroundImage = "url(https://hugogehl.github.io/website/images/spec_1.jpg)";
}

document.getElementById("typo_g").onmouseover = function () {typo_g();};
function typo_g() {
  bg.style.backgroundImage = "url()";
}

document.getElementById("damasio").onmouseover = function () {damasio();};
function damasio() {
  bg.style.backgroundImage = "url(https://hugogehl.github.io/website/images/dam_1.jpg)";
}

// Slide

const btnsOpen = document.querySelectorAll('[data-panel]');
const panel = document.querySelector('.slide');
const btnClose = document.querySelector('.closebtn');

btnsOpen.forEach(function (btnOpen) {
  btnOpen.addEventListener('click', function () {
    panel.dataset.activeProject = btnOpen.dataset.panel;
    panel.classList.add('is-open');
  });
});

btnClose.addEventListener('click', function () {
  panel.dataset.activeProject = '';
  panel.classList.remove('is-open');
});

//Photo over sur slide étoiles

var photo_etoiles_terr_block = document.querySelector('.photo_etoiles_terr_block');

document.getElementById("photoone_etoiles_terr").onmouseover = function () {etoiles_photo_one();};
function etoiles_photo_one() {
  photo_etoiles_terr_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/etoiles_1.jpg)";
}

document.getElementById("phototwo_etoiles_terr").onmouseover = function () {etoiles_photo_two();};
function etoiles_photo_two() {
  photo_etoiles_terr_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/etoiles_2.jpg)";
}

document.getElementById("phototwo_etoiles_terr").onmouseover = function () {etoiles_photo_two();};
function etoiles_photo_two() {
  photo_etoiles_terr_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/etoiles_2.jpg)";
}

document.getElementById("photothree_etoiles_terr").onmouseover = function () {etoiles_photo_three();};
function etoiles_photo_three() {
  photo_etoiles_terr_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/etoiles_3.jpg)";
}

document.getElementById("photofour_etoiles_terr").onmouseover = function () {etoiles_photo_four();};
function etoiles_photo_four() {
  photo_etoiles_terr_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/etoiles_4.jpg)";
}

document.getElementById("photofive_etoiles_terr").onmouseover = function () {etoiles_photo_five();};
function etoiles_photo_five() {
  photo_etoiles_terr_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/etoiles_5.jpg)";
}

document.getElementById("photoseven_etoiles_terr").onmouseover = function () {etoiles_photo_seven();};
function etoiles_photo_seven() {
  photo_etoiles_terr_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/etoiles_7.jpg)";
}

document.getElementById("photoeight_etoiles_terr").onmouseover = function () {etoiles_photo_eight();};
function etoiles_photo_eight() {
  photo_etoiles_terr_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/etoiles_8.jpg)";
}

document.getElementById("photonine_etoiles_terr").onmouseover = function () {etoiles_photo_nine();};
function etoiles_photo_nine() {
  photo_etoiles_terr_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/etoiles_9.jpg)";
}

document.getElementById("phototen_etoiles_terr").onmouseover = function () {etoiles_photo_ten();};
function etoiles_photo_ten() {
  photo_etoiles_terr_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/etoiles_10.jpg)";
}

document.getElementById("photoeleven_etoiles_terr").onmouseover = function () {etoiles_photo_eleven();};
function etoiles_photo_eleven() {
  photo_etoiles_terr_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/etoiles_11.jpg)";
}

//Photo over sur slide cira

var photo_cira_block = document.querySelector('.photo_cira_block');

document.getElementById("photoone_cira").onmouseover = function () {cira_photo_one();};
function cira_photo_one() {
  photo_cira_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/cira_9.jpg)";
}

document.getElementById("phototwo_cira").onmouseover = function () {cira_photo_two();};
function cira_photo_two() {
  photo_cira_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/cira_1.jpg)";
}

document.getElementById("photothree_cira").onmouseover = function () {cira_photo_three();};
function cira_photo_three() {
  photo_cira_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/cira_2.jpg)";
}

document.getElementById("photofour_cira").onmouseover = function () {cira_photo_four();};
function cira_photo_four() {
  photo_cira_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/cira_3.jpg)";
}

document.getElementById("photofive_cira").onmouseover = function () {cira_photo_five();};
function cira_photo_five() {
  photo_cira_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/cira_4.jpg)";
}

document.getElementById("photosix_cira").onmouseover = function () {cira_photo_six();};
function cira_photo_six() {
  photo_cira_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/cira_5.jpg)";
}

document.getElementById("photoseven_cira").onmouseover = function () {cira_photo_seven();};
function cira_photo_seven() {
  photo_cira_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/cira_6.jpg)";
}

document.getElementById("photoeight_cira").onmouseover = function () {cira_photo_eight();};
function cira_photo_eight() {
  photo_cira_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/cira_7.jpg)";
}

document.getElementById("photonine_cira").onmouseover = function () {cira_photo_nine();};
function cira_photo_nine() {
  photo_cira_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/cira_8.jpg)";
}

//Photo over sur slide pop icons

var photo_pop_icons_block = document.querySelector('.photo_pop_icons_block');

document.getElementById("photoone_pop_icons").onmouseover = function () {pop_icons_photo_one();};
function pop_icons_photo_one() {
  photo_pop_icons_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/pop_1.jpg)";
}

document.getElementById("phototwo_pop_icons").onmouseover = function () {pop_icons_photo_two();};
function pop_icons_photo_two() {
  photo_pop_icons_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/pop_2.jpg)";
}

document.getElementById("photothree_pop_icons").onmouseover = function () {pop_icons_photo_three();};
function pop_icons_photo_three() {
  photo_pop_icons_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/pop_3.jpg)";
}

document.getElementById("photofour_pop_icons").onmouseover = function () {pop_icons_photo_four();};
function pop_icons_photo_four() {
  photo_pop_icons_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/pop_4.jpg)";
}

document.getElementById("photofive_pop_icons").onmouseover = function () {pop_icons_photo_five();};
function pop_icons_photo_five() {
  photo_pop_icons_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/pop_5.jpg)";
}

//Photo over sur slide bd

var photo_licht_mehr_licht_block = document.querySelector('.photo_licht_mehr_licht_block');

document.getElementById("photoone_licht_mehr_licht").onmouseover = function () {licht_mehr_licht_photo_one();};
function licht_mehr_licht_photo_one() {
  photo_licht_mehr_licht_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/bd_1.jpg)";
}

document.getElementById("phototwo_licht_mehr_licht").onmouseover = function () {licht_mehr_licht_photo_two();};
function licht_mehr_licht_photo_two() {
  photo_licht_mehr_licht_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/bd_2.jpg)";
}

document.getElementById("photothree_licht_mehr_licht").onmouseover = function () {licht_mehr_licht_photo_three();};
function licht_mehr_licht_photo_three() {
  photo_licht_mehr_licht_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/bd_3.jpg)";
}

document.getElementById("photofour_licht_mehr_licht").onmouseover = function () {licht_mehr_licht_photo_four();};
function licht_mehr_licht_photo_four() {
  photo_licht_mehr_licht_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/bd_4.jpg)";
}

document.getElementById("photofive_licht_mehr_licht").onmouseover = function () {licht_mehr_licht_photo_five();};
function licht_mehr_licht_photo_five() {
  photo_licht_mehr_licht_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/bd_5.jpg)";
}

document.getElementById("photosix_licht_mehr_licht").onmouseover = function () {licht_mehr_licht_photo_six();};
function licht_mehr_licht_photo_six() {
  photo_licht_mehr_licht_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/bd_6.jpg)";
}

document.getElementById("photoseven_licht_mehr_licht").onmouseover = function () {licht_mehr_licht_photo_seven();};
function licht_mehr_licht_photo_seven() {
  photo_licht_mehr_licht_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/bd_7.jpg)";
}

document.getElementById("photoeight_licht_mehr_licht").onmouseover = function () {licht_mehr_licht_photo_eight();};
function licht_mehr_licht_photo_eight() {
  photo_licht_mehr_licht_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/bd_8.jpg)";
}

//Photo over sur slide spéc typo

var photo_spec_typo_block = document.querySelector('.photo_spec_typo_block');

document.getElementById("photoone_spec_typo").onmouseover = function () {specimen_typo_photo_one();};
function specimen_typo_photo_one() {
  photo_spec_typo_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/spec_1.jpg)";
}

document.getElementById("phototwo_spec_typo").onmouseover = function () {specimen_typo_photo_two();};
function specimen_typo_photo_two() {
  photo_spec_typo_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/spec_2.jpg)";
}

document.getElementById("photothree_spec_typo").onmouseover = function () {specimen_typo_photo_three();};
function specimen_typo_photo_three() {
  photo_spec_typo_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/spec_3.jpg)";
}

document.getElementById("photofour_spec_typo").onmouseover = function () {specimen_typo_photo_four();};
function specimen_typo_photo_four() {
  photo_spec_typo_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/spec_4.jpg)";
}

document.getElementById("photofive_spec_typo").onmouseover = function () {specimen_typo_photo_five();};
function specimen_typo_photo_five() {
  photo_spec_typo_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/spec_5.jpg)";
}

document.getElementById("photosix_spec_typo").onmouseover = function () {specimen_typo_photo_six();};
function specimen_typo_photo_six() {
  photo_spec_typo_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/spec_6.jpg)";
}

document.getElementById("photoseven_spec_typo").onmouseover = function () {specimen_typo_photo_seven();};
function specimen_typo_photo_seven() {
  photo_spec_typo_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/spec_7.jpg)";
}

document.getElementById("photoeight_spec_typo").onmouseover = function () {specimen_typo_photo_eight();};
function specimen_typo_photo_eight() {
  photo_spec_typo_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/spec_8.jpg)";
}

document.getElementById("photonine_spec_typo").onmouseover = function () {specimen_typo_photo_nine();};
function specimen_typo_photo_nine() {
  photo_spec_typo_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/spec_9.jpg)";
}

document.getElementById("phototen_spec_typo").onmouseover = function () {specimen_typo_photo_ten();};
function specimen_typo_photo_ten() {
  photo_spec_typo_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/spec_10.jpg)";
}

document.getElementById("photoelewen_spec_typo").onmouseover = function () {specimen_typo_photo_elewen();};
function specimen_typo_photo_elewen() {
  photo_spec_typo_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/spec_11.jpg)";
}
//Photo over sur slide cira

var photo_damasio_block = document.querySelector('.photo_damasio_block');

document.getElementById("photoone_damasio").onmouseover = function () {damasio_photo_one();};
function damasio_photo_one() {
  photo_damasio_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/dam_1.jpg)";
}

document.getElementById("phototwo_damasio").onmouseover = function () {damasio_photo_two();};
function damasio_photo_two() {
  photo_damasio_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/dam_2.jpg)";
}

document.getElementById("photothree_damasio").onmouseover = function () {damasio_photo_three();};
function damasio_photo_three() {
  photo_damasio_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/dam_3.jpg)";
}

document.getElementById("photofour_damasio").onmouseover = function () {damasio_photo_four();};
function damasio_photo_four() {
  photo_damasio_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/dam_4.jpg)";
}

document.getElementById("photofive_damasio").onmouseover = function () {damasio_photo_five();};
function damasio_photo_five() {
  photo_damasio_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/dam_5.jpg)";
}

document.getElementById("photosix_damasio").onmouseover = function () {damasio_photo_six();};
function damasio_photo_six() {
  photo_damasio_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/dam_6.jpg)";
}

document.getElementById("photoseven_damasio").onmouseover = function () {damasio_photo_seven();};
function damasio_photo_seven() {
  photo_damasio_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/dam_7.jpg)";
}

document.getElementById("photoeight_damasio").onmouseover = function () {damasio_photo_eight();};
function damasio_photo_eight() {
  photo_damasio_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/dam_8.jpg)";
}

document.getElementById("photonine_damasio").onmouseover = function () {damasio_photo_nine();};
function damasio_photo_nine() {
  photo_damasio_block.style.backgroundImage = "url(https://hugogehl.github.io/website/images/dam_9.jpg)";
}

// Cursor

document.onmousemove = suitsouris;
var cursor = document.getElementById("cursor");
cursor.__scale__ = 0.7;
function suitsouris(evenement)
{
  var x = evenement.clientX;
  var y = evenement.clientY;
  TweenMax.to(cursor, 0.5, {
    x: x,
    y: y,
    scale: cursor.__scale__,
    ease: Expo.easeOut });

}

TweenMax.fromTo(document.body, 1, { opacity: 0 }, { opacity: 1 });

//Over
var cursorover = document.querySelector('.cursor');
const cursorbig = document.querySelectorAll('[data-cursor]');

cursorbig.forEach(function (element) {
  element.addEventListener("mouseover", mouseOver);

  element.addEventListener("mouseout", mouseOut);

});

function mouseOver() {
  cursor.__scale__ = 1;
}

function mouseOut() {
  cursor.__scale__ = 0.7;
}
