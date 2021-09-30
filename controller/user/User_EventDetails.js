import data from '../../data/eventDAO.js'

//Timeline
//dates
let $ulDates = document.getElementsByClassName('dates')[0];

for (let item of data) {
    let $liDates = document.createElement('li');

    let $aDates = document.createElement('a');
    $aDates.href = '#' + '1900';
    $aDates.innerHTML = '1900';
    // $aDates.className = 'selected';

    $liDates.append($aDates);
    $ulDates.append($liDates);
}



//Issues
let $ulIssues = document.getElementsByClassName('issues')[0];

for (let item of data) {
    let $liIssues = document.createElement('li');
    $liIssues.id = '1990';

    let $imgIssues = document.createElement('img');
    $imgIssues.src = item.Image;

    let $h1Issues = document.createElement('h1');
    $h1Issues.innerHTML = '1990';

    let $pIssuses = document.createElement('p');
    $pIssuses.innerHTML = 'Donec semper quam scelerisque tortor dictum gravida. In hac habitasse platea dictumst. Nam pulvinar, odio sed rhoncus suscipit, sem diam ultrices mauris, eu consequat purus metus eu velit. Proin metus odio, aliquam eget molestie nec, gravida ut sapien. Phasellus quis est sed turpis sollicitudin venenatis sed eu odio. Praesent eget neque eu eros interdum malesuada non vel leo. Sed fringilla porta ligula.'

    $liIssues.append($imgIssues, $h1Issues, $pIssuses);
    $ulIssues.append($liIssues);
}


///////

let $nameEvent = document.getElementsByClassName('name')[0];
let $textNameEvent = document.createElement('h4');
$textNameEvent.innerHTML = 'Tên sự kiện: ' + '';
$nameEvent.append($textNameEvent);

let $dateEvent = document.getElementsByClassName('date')[0];
let $textDateEvent = document.createElement('h4');
$textDateEvent.innerHTML = 'Ngày: ' + '';
$dateEvent.append($textDateEvent);


let $imgEvent = document.getElementsByClassName('image')[0];
let $imageEvent = document.createElement('img');
$imageEvent.src = '';
$imageEvent.alt = 'Image';
$imgEvent.append($imageEvent);

let $locationEvent = document.getElementsByClassName('location')[0];
let $textLoactionEvent = document.createElement('h5');
$textLoactionEvent.innerHTML = 'Địa điểm: ' + '';
$locationEvent.append($textLoactionEvent);

let $introductionEvent = document.getElementsByClassName('introduction')[0];
let $textIntroductionEvent = document.createElement('p');
$textIntroductionEvent.innerHTML = 'Khái quát chung: ' + '';
$introductionEvent.append($textIntroductionEvent);

let $resultEvent = document.getElementsByClassName('result')[0];
let $textResultEvent = document.createElement('p');
$textResultEvent.innerHTML = 'Kết quả và ý nghĩa lịch sử: ' + ''
$resultEvent.append($textResultEvent);



///////