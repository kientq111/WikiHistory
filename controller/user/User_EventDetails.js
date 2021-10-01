import data from '../../data/eventDAO.js'

// //Timeline
// //dates
// let $ulDates = document.getElementsByClassName('dates')[0];

// for (let item of data) {
//     let $liDates = document.createElement('li');

//     let $aDates = document.createElement('a');
//     $aDates.href = '#' + '1900';
//     $aDates.innerHTML = '1900';
//     // $aDates.className = 'selected';

//     $liDates.append($aDates);
//     $ulDates.append($liDates);
// }



// //Issues
// let $ulIssues = document.getElementsByClassName('issues')[0];

// for (let item of data) {
//     let $liIssues = document.createElement('li');
//     $liIssues.id = '1990';

//     let $imgIssues = document.createElement('img');
//     $imgIssues.src = item.Image;

//     let $h1Issues = document.createElement('h1');
//     $h1Issues.innerHTML = '1990';

//     let $pIssuses = document.createElement('p');
//     $pIssuses.innerHTML = 'Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.'

//     $liIssues.append($imgIssues, $h1Issues, $pIssuses);
//     $ulIssues.append($liIssues);
// }


// ///////

// let $nameEvent = document.getElementsByClassName('name')[0];
// let $textNameEvent = document.createElement('h4');
// $textNameEvent.innerHTML = 'Tên sự kiện: ' + '';
// $nameEvent.append($textNameEvent);

// let $dateEvent = document.getElementsByClassName('date')[0];
// let $textDateEvent = document.createElement('h4');
// $textDateEvent.innerHTML = 'Ngày: ' + '';
// $dateEvent.append($textDateEvent);


// let $imgEvent = document.getElementsByClassName('image')[0];
// let $imageEvent = document.createElement('img');
// $imageEvent.src = '';
// $imageEvent.alt = 'Image';
// $imgEvent.append($imageEvent);

// let $locationEvent = document.getElementsByClassName('location')[0];
// let $textLoactionEvent = document.createElement('h5');
// $textLoactionEvent.innerHTML = 'Địa điểm: ' + '';
// $locationEvent.append($textLoactionEvent);

// let $introductionEvent = document.getElementsByClassName('introduction')[0];
// let $textIntroductionEvent = document.createElement('p');
// $textIntroductionEvent.innerHTML = 'Khái quát chung: ' + '';
// $introductionEvent.append($textIntroductionEvent);

// let $resultEvent = document.getElementsByClassName('result')[0];
// let $textResultEvent = document.createElement('p');
// $textResultEvent.innerHTML = 'Kết quả và ý nghĩa lịch sử: ' + ''
// $resultEvent.append($textResultEvent);



///////

//Event Details 2
let id = localStorage.getItem('idEvent');
let res = await db.collection('events').doc(id).get();
console.log(res.data());
let getChar = res.data();

/////
let $nameEvent = document.getElementsByClassName('name')[0];
let $textNameEvent = document.createElement('h4');
$textNameEvent.innerHTML = 'Tên sự kiện: ' + getChar.name;
$nameEvent.append($textNameEvent);

let $dateEvent = document.getElementsByClassName('date')[0];
let $textDateEvent = document.createElement('h4');
$textDateEvent.innerHTML = 'Ngày: ' + getChar.firstday;
$dateEvent.append($textDateEvent);


let $imgEvent = document.getElementsByClassName('image')[0];
let $imageEvent = document.createElement('img');
//$imageEvent.src = 'https://upload.wikimedia.org/wikipedia/commons/4/49/C%E1%BB%8Dc_B%E1%BA%A1ch_%C4%90%E1%BA%B1ng.jpg';
$imageEvent.src = getChar.picture;
$imageEvent.alt = 'Image';
$imgEvent.append($imageEvent);

let $locationEvent = document.getElementsByClassName('location')[0];
let $textLoactionEvent = document.createElement('h5');
$textLoactionEvent.innerHTML = 'Địa điểm: ' + getChar.location;
$locationEvent.append($textLoactionEvent);

let $introductionEvent = document.getElementsByClassName('introduction')[0];
let $textIntroductionEvent = document.createElement('p');
$textIntroductionEvent.innerHTML = 'Khái quát chung: ' + getChar.general;
$introductionEvent.append($textIntroductionEvent);

let $resultEvent = document.getElementsByClassName('result')[0];
let $textResultEvent = document.createElement('p');
$textResultEvent.innerHTML = 'Kết quả và ý nghĩa lịch sử: ' + getChar.result;
$resultEvent.append($textResultEvent);


//Timeline
let $timeline = document.getElementsByClassName('life-character')[0];

for (let item of getChar.details) {
    let $groupTimeline = document.createElement('div');
    $groupTimeline.className = 'group-life';

    let $time = document.createElement('div');
    $time.className = 'time-life';

    let $timeText = document.createElement('h2');
    $timeText.innerHTML = item.dateStart;

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
    $textDetailTimeline.innerHTML = item.content;

    $time.append($timeText);
    $divImageTimeline.append($imgTimeline);
    $detailTimeline.append($textDetailTimeline);
    $groupTimeline.append($time, $divImageTimeline, $detailTimeline);
    $timeline.append($groupTimeline);
}

///User comment

let $commentList = document.getElementsByClassName('commentList')[0];
for (let item of getChar.details) {
    let $ul = document.createElement('ul');

    let $li = document.createElement('li');

    let $divEmail = document.createElement('div');
    $divEmail.className = 'userEmail';

    let $aEmail = document.createElement('a');
    $aEmail.href = '';
    $aEmail.innerHTML = 'hoangha@gmail.com';

    let $divComment = document.createElement('div');
    $divComment.className = 'userComment';

    let $pComment = document.createElement('p');
    $pComment.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iure assumenda soluta enim error dolorum temporibus esse odio, consectetur quas nisi alias voluptate? Earum aspernatur maxime nostrum quasi sequi explicabo.'


    $divComment.append($pComment);
    $divEmail.append($aEmail);
    $li.append($divEmail, $divComment);
    $ul.append($li);
    $commentList.append($ul);

}