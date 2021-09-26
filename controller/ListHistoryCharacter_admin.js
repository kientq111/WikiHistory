import data from '../data/ListHero_data.js'

let $listCharacter = document.getElementsByTagName('tbody')[0];

for (let item of data) {

    let $id = document.createElement('td')
    $id.className = ''
    let $name = document.createElement('td')
    let $image = document.createElement('td')
    let $title = document.createElement('td')
    let $birthDay = document.createElement('td')
    let $location = document.createElement('td')
    let $content = document.createElement('td')
    let $detail = document.createElement('td');
    let $del = document.createElement('td');

    $id.innerHTML = item.id;
    $name.innerHTML = item.Name;
    $image.innerHTML = item.image;
    $title.innerHTML = item.title;
    $birthDay.innerHTML = item.birthDay;
    $location.innerHTML = item.location;
    $content.innerHTML = item.content;

    let $btnDeltail = document.createElement('a');
    $btnDeltail.innerHTML = 'Xem chi tiết';
    $btnDeltail.href = "#";
    $btnDeltail.style.textDecoration = 'none';
    $btnDeltail.className = 'text-warning'
    let $btnDel = document.createElement('a');
    $btnDel.href = "#";
    $btnDel.innerHTML = 'Xóa';
    $btnDel.style.textDecoration = 'none';
    $btnDel.className = 'text-warning'

    $detail.append($btnDeltail);
    $del.append($btnDel);

    let $row = document.createElement('tr');
    $row.append(
        $id, $name, $title, $birthDay, $location, $content, $detail, $del
    );
    console.dir($row);
    $listCharacter.append($row)
}