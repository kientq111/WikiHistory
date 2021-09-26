async function getConversation() {
    let response = await db.collection('characters').get();
    for (let doc of response.docs) {
        let data = doc.data();
        console.log(data.name);
    }
}

getConversation();