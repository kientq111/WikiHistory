let $listCharacter = document.getElementsByTagName('tbody')[0];
async function getConversation() {
    let response = await db.collection('characters').get();

    for (let doc of response.docs) {
        let id = doc.id; //get id

        let data = doc.data();
        console.log(data.name);



        let $name = document.createElement('td');
        let $image = document.createElement('td');
        let $title = document.createElement('td');
        let $birthDay = document.createElement('td');
        let $deathDay = document.createElement('td');
        let $location = document.createElement('td');
        let $content = document.createElement('td');
        let $detail = document.createElement('td');
        let $del = document.createElement('td');


        $name.innerHTML = data.name;
        $image.innerHTML = data.picture;
        $title.innerHTML = data.title;
        $birthDay.innerHTML = data.birth;
        $deathDay.innerHTML = data.death;
        $location.innerHTML = data.title;
        $content.innerHTML = data.name;

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
        $btnDel.onclick = () => {
            //c1
            doc.ref.delete();
            //c2 *
            // db.collection('...').doc(id).delete();
            //get detail
            // db.collection('...').doc(id).get();
        }
        $detail.append($btnDeltail);
        $del.append($btnDel);

        let $row = document.createElement('tr');
        $row.append(
            $name, $image, $title, $birthDay, $deathDay, $location, $detail, $del
        );
        console.dir($row);
        $listCharacter.append($row)
    }
}

getConversation();