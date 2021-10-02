//Event Details 2
let id = localStorage.getItem('idEvent');
let res = await db.collection('events').doc(id).get();
console.log(res.data());
let getChar = res.data();

/////
let $nameEvent = document.getElementsByClassName('name')[0];
let $textNameEvent = document.createElement('h2');
$textNameEvent.innerHTML =  getChar.name + ' ' + '( ' +getChar.firstday + ' )';
$nameEvent.append($textNameEvent);

// let $dateEvent = document.getElementsByClassName('date')[0];
// let $textDateEvent = document.createElement('h4');
// $textDateEvent.innerHTML = 'Ngày: ' + getChar.firstday ;
// $dateEvent.append($textDateEvent);


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

    if (item.dateStart === undefined || item.dateStart === '') {
        $timeText.innerHTML = `Chưa rõ`;
    } else if (item.dateEnd === undefined || item.dateEnd === '') {
        $timeText.innerHTML = `${item.dateStart} - Chưa rõ`;
    } else {
        $timeText.innerHTML = `${item.dateStart} - ${item.dateEnd}`
    }


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
for (let item of getChar.comment) {
    let $ul = document.createElement('ul');

    let $li = document.createElement('li');

    let $divEmail = document.createElement('div');
    $divEmail.className = 'userEmail';

    let $aEmail = document.createElement('a');
    $aEmail.href = '';
    $aEmail.innerHTML = item.emails;

    let $divComment = document.createElement('div');
    $divComment.className = 'userComment';

    let $pComment = document.createElement('p');
    //  $pComment.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iure assumenda soluta enim error dolorum temporibus esse odio, consectetur quas nisi alias voluptate? Earum aspernatur maxime nostrum quasi sequi explicabo.'
    $pComment.innerHTML = item.cmtContent

    $divComment.append($pComment);
    $divEmail.append($aEmail);
    $li.append($divEmail, $divComment);
    $ul.append($li);
    $commentList.append($ul);

}