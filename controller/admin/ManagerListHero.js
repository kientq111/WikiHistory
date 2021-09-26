let $lstHeroTable = document.getElementsByTagName('tbody')[0];

for (let item of data) {
    let $id = document.createElement('td');
    let $name = document.createElement('td');
    let $strDate = document.createElement('td');
    let $endDate = document.createElement('td');
    let $place = document.createElement('td');
    let $content = document.createElement('td');
    let $detail = document.createElement('td');
    let $del = document.createElement('td');

    $id.innerHTML = item.id;
    $name.innerHTML = item.Name;
    $strDate.innerHTML = item.FisrtDay;
    $endDate.innerHTML = item.LastDay;
    $place.innerHTML = item.Location;
    $content.innerHTML = item.Content;


    let $btnDeltail = document.createElement('a');
    $btnDeltail.innerHTML = 'Xem chi tiết';
    $btnDeltail.href = "#";
    let $btnDel = document.createElement('a');
    $btnDel.href = "#";
    $btnDel.innerHTML = 'Xóa';
    $detail.append($btnDeltail);
    $del.append($btnDel);


    let $row = document.createElement('tr');
    $row.append(
        $id, $name, $strDate, $endDate, $place, $content, $detail, $del
    );
    console.dir($row);
    $lstHeroTable.append($row)


}