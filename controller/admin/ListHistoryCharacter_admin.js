let $listCharacter = document.getElementsByTagName('tbody')[0];
async function getConversation() {
    let response = await db.collection('characters').get();



    for (let doc of response.docs) {
        let id = doc.id; //get id
        let data = doc.data();

        let $name = document.createElement('td');
        let $title = document.createElement('td');
        let $birthDay = document.createElement('td');
        let $deathDay = document.createElement('td');
        let $location = document.createElement('td');
        let $content = document.createElement('td');
        let $detail = document.createElement('td');
        let $del = document.createElement('td');


        $name.innerHTML = data.name;
        $title.innerHTML = data.title;
        $birthDay.innerHTML = data.birth;
        if (data.death === undefined) {
            $deathDay.innerHTML = 'Chưa rõ';
        } else {
            $deathDay.innerHTML = data.death;
        }

        $location.innerHTML = data.home;
        $content.innerHTML = data.name;

        let $btnDeltail = document.createElement('a');
        $btnDeltail.innerHTML = 'Xem chi tiết';
        $btnDeltail.href = '#'
        $btnDeltail.style.textDecoration = 'none';
        $btnDeltail.className = 'text-warning'
            //detail
        $btnDeltail.onclick = async() => {
                let id1 = await db.collection('characters').doc(doc.id).get();
                console.log(id1.id);
                localStorage.setItem('id', id1.id);
                location.href = '../user/CharacterDetails_user.html'
            }
            //del
        let $btnDel = document.createElement('a');
        $btnDel.href = "#";
        $btnDel.innerHTML = 'Xóa';
        $btnDel.style.textDecoration = 'none';
        $btnDel.className = 'text-warning'
            //delete
        $btnDel.onclick = () => {
            doc.ref.delete().then(() => {
                    window.location.reload()
                })
                // window.location.reload();
                //c2 *
                // db.collection('...').doc(id).delete();
                //get detail
                // db.collection('...').doc(id).get();
                // window.onload();
        }
        $detail.append($btnDeltail);
        $del.append($btnDel);

        let $row = document.createElement('tr');
        $row.append(
            $name, $title, $birthDay, $deathDay, $location, $detail, $del
        );
        $listCharacter.append($row)
    }
}

getConversation();