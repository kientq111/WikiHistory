import data from '../data/eventDAO.js';

let $ul = document.getElementsByClassName('list')[0];

for(let item of data) {
    let $li = document.createElement('li');
    $li.className = 'character mr-3 mb-3';

    let $figure = document.createElement('figure');
    $figure.className = 'snip1273';

    let $img = document.createElement('img');
    $img.src = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/sample72.jpg';
    $img.alt = 'sample72';

    let $figcaption = document.createElement('figcaption');
    
    let $name = document.createElement('h4');
    $name.innerHTML = 'Tên: '+ item.Name;

    let $job = document.createElement('p');
    $job.innerHTML = 'Nghề nghiệp: ';

    let $date = document.createElement('p');
    $date.innerHTML = 'Ngày sinh - mất: ';

    let $countryside = document.createElement('p');
    $countryside.innerHTML = 'Quê quán: ';

    let $general = document.createElement('p');
    $general.innerHTML = 'Khái quát: ';

    $figcaption.append($name, $job, $date, $countryside, $general);

    let $link = document.createElement('a');
    $link.href = '#link';

    $figure.append($img, $figcaption, $link);
    $li.append($figure);
    $ul.append($li);
    
}
console.log($ul);