async function getConversation() {
    let response = await db.collection('events').get();
    let $lstTable = document.getElementsByTagName('tbody')[0];
    for (let doc of response.docs) {
        let data = doc.data();

        let $name = document.createElement('td');
        let $strDate = document.createElement('td');
        let $endDate = document.createElement('td');
        let $place = document.createElement('td');
        let $content = document.createElement('td');
        let $detail = document.createElement('td');
        let $del = document.createElement('td');

        $name.innerHTML = data.name;
        $strDate.innerHTML = data.firstday;
        $endDate.innerHTML = data.lastday;
        $place.innerHTML = data.location;
        $content.innerHTML = data.meaning;

        //button
        let $btnDeltail = document.createElement('a');
        $btnDeltail.innerHTML = 'Xem chi tiết';
        $btnDeltail.href = "#";
        let $btnDel = document.createElement('a');
        $btnDel.href = "#";
        $btnDel.innerHTML = 'Xóa';

        $btnDel.onclick = () => {
            doc.ref.delete().then(() => {
                window.location.reload()
            });
        }
        $detail.append($btnDeltail);


        $del.append($btnDel);
        let $row = document.createElement('tr');
        $row.append(
            $name, $strDate, $endDate, $place, $content, $detail, $del
        );
        $lstTable.append($row);
    }
}

getConversation();