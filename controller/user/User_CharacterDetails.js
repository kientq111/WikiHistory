import data from '../../data/eventDAO.js';


let id = localStorage.getItem('id');
let id1 = await db.collection('characters').doc(id).get();
console.log('don: ', id1.data());
let getChar = id1.data();

let $detailCharacter = document.getElementById('#inforCharacter');
let $divImageCharacter = document.createElement('div');
$divImageCharacter.className = 'imgForm';
let $imgCharacter = document.createElement('img');
$imgCharacter.className = 'img-character';
$imgCharacter.src = getChar.picture;
$imgCharacter.alt = 'Img';

let $boxText = document.createElement('div');
$boxText.className = 'boxText';

//Job
let $textGroupJob = document.createElement('div');
$textGroupJob.className = 'text-group position-group d-flex';

let $titleJob = document.createElement('h5');
$titleJob.innerHTML = '<b>Chức danh:</b>';
$titleJob.style.fontWeight = 'bold';
$titleJob.style.width = '200px';

let $textJob = document.createElement('p');
$textJob.innerHTML = getChar.title;

$textGroupJob.append($titleJob, $textJob);

//Date 
let $textGroupDate = document.createElement('div');
$textGroupDate.className = 'text-group position-group d-flex';

let $titleDate = document.createElement('h5');
$titleDate.innerHTML = '<b>Ngày sinh / mất:</b>';
$titleDate.style.fontWeight = 'bold';
$titleDate.style.width = '200px';

let $textdate = document.createElement('p');
$textdate.innerHTML = `Sinh ${getChar.birth} - Mất ${getChar.death}`;

$textGroupDate.append($titleDate, $textdate);

//Country
let $textGroupCountry = document.createElement('div');
$textGroupCountry.className = 'text-group position-group d-flex';

let $titleCountry = document.createElement('h5');
$titleCountry.innerHTML = '</b>Quê quán:</b>';
$titleCountry.style.fontWeight = 'bold';
$titleCountry.style.width = '200px';

let $textCountry = document.createElement('p');
$textCountry.innerHTML = getChar.home;

$textGroupCountry.append($titleCountry, $textCountry);

//General
let $textGroupGeneral = document.createElement('div');
$textGroupGeneral.className = 'text-group position-group d-flex';

let $titleGeneral = document.createElement('h5');
$titleGeneral.innerHTML = '</b>Khái quát:</b>';
$titleGeneral.style.fontWeight = 'bold';
$titleGeneral.style.width = '200px';


let $textGeneral = document.createElement('p');
$textGeneral.innerHTML = getChar.general;

$textGroupGeneral.append($titleGeneral, $textGeneral);

$divImageCharacter.append($imgCharacter);
$boxText.append($textGroupJob, $textGroupDate, $textGroupCountry, $textGroupGeneral);
$detailCharacter.append($divImageCharacter, $boxText);

console.log($detailCharacter);


let $timeline = document.getElementsByClassName('life-character')[0];

for (let item of getChar.details) {
    let $groupTimeline = document.createElement('div');
    $groupTimeline.className = 'group-life';

    let $time = document.createElement('div');
    $time.className = 'time-life';

    let $timeText = document.createElement('h2');
    $timeText.innerHTML = item.date;

    let $divImageTimeline = document.createElement('div');
    $divImageTimeline.className = '';


    //Picture
    let $imgTimeline = document.createElement('img');
    $imgTimeline.className = 'img-life';
    // $imgTimeline.src = 'https://upload.wikimedia.org/wikipedia/commons/4/49/C%E1%BB%8Dc_B%E1%BA%A1ch_%C4%90%E1%BA%B1ng.jpg';
    $imgTimeline.src = item.picture;
    $imgTimeline.alt = 'Img';

    let $detailTimeline = document.createElement('div');
    $detailTimeline.className = 'details';

    let $textDetailTimeline = document.createElement('p');
    $textDetailTimeline.innerHTML = item.description;

    $time.append($timeText);
    $divImageTimeline.append($imgTimeline);
    $detailTimeline.append($textDetailTimeline);
    $groupTimeline.append($time, $divImageTimeline, $detailTimeline);
    $timeline.append($groupTimeline);
}

console.log($timeline);